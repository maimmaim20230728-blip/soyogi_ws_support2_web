/*
 * そよぎ 支援サポート（障害者版） - Audio Engine（Web Audio 合成のみ・音源ファイル不要・完全オフライン）
 * ----------------------------------------------------------------------------
 * 穏やかなケア向け：ゆったりしたアンビエントBGM（ドラム無し・柔らかいパッド＋
 * まばらなチャイム）。BGM音量を調整・保存。緊急時に即ミュートできる想定。
 *
 *   SoyogiAudio.unlock() / startBGM() / stopBGM()
 *   SoyogiAudio.sfx('tap'|'reveal'|'soft')
 *   SoyogiAudio.setBgmVolume(0..1) / getBgmVolume()
 *   SoyogiAudio.setSfxVolume(0..1) / getSfxVolume()
 *   SoyogiAudio.setMuted(bool) / toggleMute() / isMuted() / state()
 * ----------------------------------------------------------------------------
 */
window.SoyogiAudio = (function(){
  "use strict";

  var ctx=null, master=null, comp=null, bgmGain=null, sfxGain=null;
  var started=false, bgmTimer=null, bgmBus=null, playing=false, pending=false;
  var BGM_MAX=0.55, SFX_MAX=0.8;
  var bgmVol=0.5, sfxVol=0.6, muted=false;
  var BGM_KEY="shien.bgmvol.v1", SFX_KEY="shien.sfxvol.v1", MUTE_KEY="shien.muted.v1";

  try{
    var b=localStorage.getItem(BGM_KEY); if(b!=null) bgmVol=Math.max(0,Math.min(1,parseFloat(b)));
    var s=localStorage.getItem(SFX_KEY); if(s!=null) sfxVol=Math.max(0,Math.min(1,parseFloat(s)));
    muted=localStorage.getItem(MUTE_KEY)==="1";
  }catch(e){}

  var N={
    F2:87.31, G2:98.00, A2:110.00, C3:130.81, D3:146.83, E3:164.81,
    F3:174.61, G3:196.00, A3:220.00, B3:246.94,
    C4:261.63, D4:293.66, E4:329.63, F4:349.23, G4:392.00, A4:440.00, B4:493.88,
    C5:523.25, D5:587.33, E5:659.25, F5:698.46, G5:783.99, A5:880.00, C6:1046.50
  };
  var CHORDS={
    C: { bass:"C3", pad:["C4","E4","G4"], arp:["C5","E5","G5"] },
    Am:{ bass:"A2", pad:["A3","C4","E4"], arp:["A4","C5","E5"] },
    F: { bass:"F2", pad:["F3","A3","C4"], arp:["F4","A4","C5"] },
    G: { bass:"G2", pad:["G3","B3","D4"], arp:["G4","B4","D5"] }
  };
  // 穏やかな1曲（64BPM・8小節・ドラム無し・パッドで包む）
  var TRACK={
    bpm:64, bars:["C","Am","F","G","C","Am","F","G"],
    padPeak:0.05, bassPeak:0.05, arpPeak:0.026, melPeak:0.06,
    melody:[[0,"E5",4],[4,"C5",4],[8,"F5",4],[12,"D5",4],[16,"E5",4],[20,"C5",4],[24,"G5",4],[28,"E5",4]]
  };

  function applyGains(){
    if(!ctx) return;
    if(master) master.gain.setTargetAtTime(muted?0.0:0.9, ctx.currentTime, 0.03);
    if(bgmGain) bgmGain.gain.setTargetAtTime(bgmVol*BGM_MAX, ctx.currentTime, 0.05);
    if(sfxGain) sfxGain.gain.setTargetAtTime(sfxVol*SFX_MAX, ctx.currentTime, 0.03);
  }
  function ensure(){
    if(ctx) return ctx;
    var AC=window.AudioContext||window.webkitAudioContext;
    if(!AC) return null;
    ctx=new AC();
    ctx.onstatechange=function(){ if(ctx.state==="running" && pending){ pending=false; _startNow(); } };
    master=ctx.createGain(); master.gain.value=muted?0:0.9;
    comp=ctx.createDynamicsCompressor();
    comp.threshold.value=-20; comp.knee.value=24; comp.ratio.value=3; comp.attack.value=0.005; comp.release.value=0.25;
    master.connect(comp); comp.connect(ctx.destination);
    bgmGain=ctx.createGain(); bgmGain.gain.value=bgmVol*BGM_MAX; bgmGain.connect(master);
    sfxGain=ctx.createGain(); sfxGain.gain.value=sfxVol*SFX_MAX; sfxGain.connect(master);
    return ctx;
  }
  function unlock(){ if(!ensure()) return; if(ctx.state==="suspended" && ctx.resume) ctx.resume(); started=true; }

  function play(freq, t, dur, o){
    o=o||{};
    var osc=ctx.createOscillator(); osc.type=o.type||"sine"; osc.frequency.value=freq;
    if(o.detune) osc.detune.value=o.detune;
    var g=ctx.createGain();
    var atk=(o.atk!=null?o.atk:0.03), peak=Math.max(0.0002,o.peak||0.05);
    g.gain.setValueAtTime(0.0001,t);
    g.gain.exponentialRampToValueAtTime(peak, t+atk);
    if(o.sustain){ g.gain.setValueAtTime(peak, t+Math.max(atk+0.002, dur-(o.rel||0.4))); }
    g.gain.exponentialRampToValueAtTime(0.0001, t+dur);
    osc.connect(g);
    var tail=g;
    if(o.filterHz){ var f=ctx.createBiquadFilter(); f.type="lowpass"; f.frequency.value=o.filterHz; g.connect(f); tail=f; }
    var dest=o.target||bgmBus||bgmGain;
    if(o.pan && ctx.createStereoPanner){ var p=ctx.createStereoPanner(); p.pan.value=o.pan; tail.connect(p); p.connect(dest); }
    else tail.connect(dest);
    osc.start(t); osc.stop(t+dur+0.05);
  }

  function layTrack(start){
    var spec=TRACK, beat=60/spec.bpm;
    for(var b=0;b<spec.bars.length;b++){
      var ch=CHORDS[spec.bars[b]]; if(!ch) continue;
      var t0=start+b*4*beat;
      ch.pad.forEach(function(nm){ play(N[nm], t0, 4*beat*0.98, {type:"sine", peak:spec.padPeak, atk:0.12, sustain:true, rel:0.8, filterHz:1200}); });
      play(N[ch.bass], t0, 4*beat*0.98, {type:"sine", peak:spec.bassPeak, atk:0.1, sustain:true, rel:0.7});
      // まばらなチャイム（2拍に1音・柔らかく・左右に軽く広げる）
      for(var a=0;a<2;a++){ var nm=ch.arp[a%3]; play(N[nm], t0+a*2*beat, 2*beat*0.6, {type:"sine", peak:spec.arpPeak, atk:0.04, pan:(a%2?0.2:-0.2), filterHz:2600}); }
    }
    spec.melody.forEach(function(m){ play(N[m[1]], start+m[0]*beat, m[2]*beat*0.95, {type:"triangle", peak:(m[3]||spec.melPeak), atk:0.1, sustain:true, rel:0.9, filterHz:2000}); });
  }
  function scheduleLoop(start){
    layTrack(start);
    var loopDur=TRACK.bars.length*4*(60/TRACK.bpm);
    bgmTimer=setTimeout(function(){ if(playing) scheduleLoop(start+loopDur); }, Math.max(80, loopDur*1000-250));
  }
  function startBGM(){
    if(bgmVol<=0) return;
    if(!ensure()) return;
    if(ctx.state!=="running"){ pending=true; if(ctx.resume) ctx.resume(); return; }
    _startNow();
  }
  function _startNow(){
    if(!ensure() || playing || bgmVol<=0) return;
    stopBGM();
    playing=true;
    bgmBus=ctx.createGain(); bgmBus.gain.value=1; bgmBus.connect(bgmGain);
    scheduleLoop(ctx.currentTime+0.15);
  }
  function stopBGM(){
    playing=false; pending=false;
    if(bgmTimer){ clearTimeout(bgmTimer); bgmTimer=null; }
    var old=bgmBus; bgmBus=null;
    if(old && ctx){
      try{
        old.gain.cancelScheduledValues(ctx.currentTime);
        old.gain.setValueAtTime(old.gain.value, ctx.currentTime);
        old.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime+0.4);
      }catch(e){}
      setTimeout(function(){ try{ old.disconnect(); }catch(e){} }, 600);
    }
  }

  /* ---- 効果音（控えめ・やさしい）---- */
  function sfx(name){
    if(!ensure() || muted || sfxVol<=0) return;
    if(ctx.state==="suspended" && ctx.resume) ctx.resume();
    var t=ctx.currentTime, tg=sfxGain;
    switch(name){
      case "tap":  play(523.25,t,0.09,{type:"sine",peak:0.28,atk:0.005,target:tg,filterHz:2600}); break;
      case "soft": play(392.00,t,0.10,{type:"sine",peak:0.20,atk:0.006,target:tg,filterHz:2200}); break;
      case "reveal": // やさしい上昇チャイム（3音・柔らか）
        play(N.C5,t,0.16,{type:"sine",peak:0.24,atk:0.01,target:tg,filterHz:2600});
        play(N.E5,t+0.10,0.16,{type:"sine",peak:0.24,atk:0.01,target:tg,filterHz:2600});
        play(N.G5,t+0.20,0.34,{type:"sine",peak:0.26,atk:0.01,target:tg,filterHz:2600}); break;
    }
  }

  function setBgmVolume(v){
    bgmVol=Math.max(0,Math.min(1,v)); try{ localStorage.setItem(BGM_KEY,String(bgmVol)); }catch(e){}
    applyGains();
    if(bgmVol<=0) stopBGM();
    else if(!playing && started) startBGM();
    return bgmVol;
  }
  function setSfxVolume(v){ sfxVol=Math.max(0,Math.min(1,v)); try{ localStorage.setItem(SFX_KEY,String(sfxVol)); }catch(e){} applyGains(); return sfxVol; }
  function setMuted(m){ muted=!!m; try{ localStorage.setItem(MUTE_KEY, muted?"1":"0"); }catch(e){} applyGains(); return muted; }
  function toggleMute(){ return setMuted(!muted); }

  return {
    unlock:unlock, startBGM:startBGM, stopBGM:stopBGM, sfx:sfx,
    setBgmVolume:setBgmVolume, getBgmVolume:function(){ return bgmVol; },
    setSfxVolume:setSfxVolume, getSfxVolume:function(){ return sfxVol; },
    setMuted:setMuted, toggleMute:toggleMute, isMuted:function(){ return muted; },
    state:function(){ return { ctx:ctx?ctx.state:"none", started:started, playing:playing, bgmVol:bgmVol, sfxVol:sfxVol, muted:muted }; }
  };
})();
