/*
 * Welfare Supporters' Support (Disability Edition) - Content (English)
 * Principles:
 *  - These are tendencies and hints. Never labels. The person in front of you comes first.
 *  - No medical decisions. When in doubt, guide to local emergency services / the person's doctor.
 *  - Structure (ids / emoji / answer indices / scene refs) mirrors content.ja.js exactly.
 */
window.SHIEN_CONTENT = window.SHIEN_CONTENT || {};
window.SHIEN_CONTENT.en = {
  version: 1,

  basis: [
    "UK NICE NG10 “Violence and aggression: short-term management” (2015) — de-escalation first, without restraint. Physical restraint is a last resort.",
    "UK NICE NG11 “Challenging behaviour and learning disabilities” (2015) — Positive Behaviour Support (PBS): understand the reason behind behaviour and shape the environment. Includes support for families and carers.",
    "Positive Behaviour Support (PBS) / the Low Arousal Approach — reduce demands and stimulation; don't confront.",
    "Structured support for autism (TEACCH) / Functional Communication Training (FCT).",
    "Seizure first aid: US Epilepsy Foundation & CDC “Stay·Safe·Side” and the 5-minute rule.",
    "UN Convention on the Rights of Persons with Disabilities (CRPD) / WHO QualityRights — protect dignity and self-determination; avoid coercion and restraint wherever possible."
  ],

  scenes: [
    {
      id: "medical", medical: true,
      title: "Seizure, injury, or altered consciousness", emoji: "🚑",
      lead: "This app does not make medical decisions. When in doubt, call emergency services — that's the right call.",
      do: [
        "If they may fall, support them and lay them down gently; clear nearby hazards (remove glasses, loosen the collar)",
        "Once the convulsions stop, roll them onto their side (recovery position)",
        "Note when the seizure started (time it)"
      ],
      call119: [
        "A first-ever seizure",
        "Convulsions lasting more than 5 minutes",
        "Seizures that repeat, or no return to consciousness",
        "Injury, or trouble breathing",
        "A seizure in water or in the bath"
      ],
      note: "If the person has specific instructions from their doctor (rescue medication, suppositories, etc.), follow them.",
      dont: [
        "Put anything in their mouth (“to stop them biting their tongue” is a myth — it causes choking and injury)",
        "Hold them down to try to stop the seizure",
        "Give food or drink right after a seizure"
      ],
      after: [
        "Note the length and details (how many minutes, what movements, consciousness afterwards)",
        "Report to their doctor and family",
        "If they seem sleepy, let them rest somewhere safe"
      ],
      outdoor: [
        "Move them away from platform edges, roads, and stairs (only move them if there's danger where they are)",
        "At a station, ask staff; in the street, ask passers-by (say clearly: “Please call an ambulance”)",
        "Give emergency services the place name, exit number, and a landmark"
      ],
      why: "The most important thing in a seizure is not to “stop” it, but to keep them safe, time it, and report it. Staying calm yourself is the biggest help you can give.",
      src: "Japan Epilepsy Association / US Epilepsy Foundation & CDC “Stay·Safe·Side”"
    },
    {
      id: "panic",
      title: "Panic / meltdown", emoji: "🌀",
      do: [
        "Make the person and those around them safe (move dangerous objects away)",
        "Reduce stimulation (stop talking, move people back, lower sound and light)",
        "Wait. Stay quietly nearby until they settle"
      ],
      dont: [
        "Shout or scold to stop them (it strengthens the distress)",
        "Hold them down (injury, lost trust — a hair's breadth from abuse)",
        "Bombard them with questions or reasoning (they can't process it, and it gets worse)",
        "Surround them or draw attention"
      ],
      after: [
        "Offer water and rest",
        "Note what triggered it (sound? people? a change of plan? pain?)",
        "Share it with the team"
      ],
      outdoor: [
        "Move to a spot out of the flow of people — by a wall, behind a pillar, a bench",
        "If they can't move, don't force it; act as a wall yourself, blocking sightlines and people",
        "Say a short word to those around (“It's OK, they'll settle in a moment”) — it heads off well-meaning interference or calls to emergency services"
      ],
      why: "Panic isn't “selfishness.” It's a response to stimulation, anxiety, or a broken sense of what comes next — more than the person can process. They are suffering most. A calm space and time are the best support.",
      src: "UK NICE NG11 (Positive Behaviour Support) and related frameworks"
    },
    {
      id: "selfharm",
      title: "Self-harm", emoji: "🤕",
      do: [
        "Judge whether it's life-threatening (for head-banging or hard biting, cushion the impact physically)",
        "Reduce stimulation and move toward a calmer place",
        "Watch quietly, and treat any injury once they've settled"
      ],
      dont: [
        "Shout “Stop!” (attention can strengthen the behaviour)",
        "Keep gripping their arm to force it to stop",
        "Punish or scold"
      ],
      after: [
        "Check for and treat injuries",
        "Note what was happening just before",
        "If it recurs, discuss reviewing the support plan (doctor, care coordinator)"
      ],
      outdoor: [
        "Move them away from hard things — asphalt, pillars, guardrails (a bag or jacket in between can help)",
        "If a crowd is forming, say a short word (“It's OK”) — being stared at is itself a trigger"
      ],
      why: "Self-harm often has a function — expressing discomfort, making a request, checking a sensation, seeking attention. The real work is growing an alternative that meets the same need (an applied-behaviour-analysis idea).",
      src: "UK NICE NG11 (PBS) and related frameworks"
    },
    {
      id: "aggression",
      title: "Harm to others / breaking things", emoji: "💥",
      do: [
        "Keep your distance (at least an arm's length). Move other people away and secure the surroundings",
        "Call for backup right away and report to your supervisor (you can do this while responding — don't carry it alone)",
        "Low voice, short words — or say nothing and reduce stimulation"
      ],
      dont: [
        "Grapple face-on or pin them down (risk of injury and of abuse)",
        "Shout, scold, or stare them down",
        "Demand “Why are you doing this?!”"
      ],
      after: [
        "Check for injury or damage; report per your organisation's rules",
        "Note the trigger and how it unfolded",
        "Share the warning signs (face, voice, movements) with the team"
      ],
      outdoor: [
        "Getting passers-by away comes first (“Sorry, please step back,” clearly)",
        "At a station, ask staff or security for help (outdoors, don't handle it alone)"
      ],
      why: "Most aggression is an “explosion” of an unmet request, discomfort, or fear. It's aimed less at people than it ends up landing on them. Learning the warning signs is the first step in prevention.",
      src: "UK NICE NG11 (PBS) / NG10 (short-term management of aggression: de-escalation first)"
    },
    {
      id: "runaway",
      title: "Bolting / going missing", emoji: "🏃",
      do: [
        "Don't chase from directly behind (it becomes a race and can speed them up). Keep them in view and move alongside; block dangerous directions first (roads, water, railways)",
        "Call for backup right away and report to your supervisor (while responding is fine — don't carry it alone)",
        "If you lose sight of them, don't hesitate: alert per your organisation's rules (police) and start searching"
      ],
      dont: [
        "Keep shouting their name (it can strengthen the flight)",
        "Carry it alone / delay reporting",
        "Scold them when they return (they learn “coming back = something bad happens”)"
      ],
      after: [
        "On finding them, rejoin quietly and check for injury",
        "Note the route and time (where they headed is a support clue)",
        "Families too: don't carry it alone — asking the people involved (care coordinator, home helpers) or, depending on the situation, the doctor for help or guidance is also an option",
        "Review the exits and your watch arrangements"
      ],
      outdoor: [
        "At a station, if you lose sight of them, go to staff at once (they can check the platform, gates, and cameras fastest)",
        "Give clothing, build, and likely destination and ask for help (don't hesitate — minutes can be life or death)"
      ],
      why: "Bolting often has a “stimulus to flee from” or a “goal to head toward.” Rather than blaming, finding the reason leads to the next prevention.",
      src: "Autism wandering/elopement safety guidance (e.g. AWAARE) and PBS"
    },
    {
      id: "freeze",
      title: "Frozen, unable to move", emoji: "🧊",
      do: [
        "Wait (decide on a limit first — say five minutes)",
        "Reduce stimulation and demands (don't rush them, don't touch)",
        "Give just one next step, short and visible (“When this is done, tea”)"
      ],
      dont: [
        "Pull them by the hand to move them",
        "A stream of prompts (“Come on, let's go, this way”)",
        "Talk it over with others right over their head"
      ],
      after: [
        "Note what got them moving (time? something you showed? a change of person?)",
        "List the situations where they tend to freeze, and share them"
      ],
      outdoor: [
        "If they're in the middle of a walkway, gently guide them out of the flow (to a wall). If they can't move, act as a shield and wait",
        "Instead of hurrying them, say “There's time.” To those around, a short “We're just waiting a moment”"
      ],
      why: "Freezing usually isn't refusal — it's often that switching tasks is taking time to process. From people who can move once they're given time, we learn to be supporters who can wait.",
      src: "Structured support for autism (TEACCH)"
    },
    {
      id: "shouting",
      title: "Loud voice / vocalising", emoji: "📢",
      do: [
        "First suspect the environment (too hot? too noisy? hungry? in pain?)",
        "Guide them somewhere quiet, or lower the stimulation around them",
        "Engage most when they are spending time quietly"
      ],
      dont: [
        "Answer loudness with loudness",
        "Repeat “Be quiet!”",
        "Meet the request every time to quiet them (they learn “making noise works”)"
      ],
      after: [
        "Note the time, place, and what happened just before (if it's a set time, suspect health or environmental factors)",
        "Check any history of pain-related care (teeth, ears, stomach)",
        "Record anything of note and share it with the team and supervisor"
      ],
      outdoor: [
        "Move somewhere quiet (edge of the platform, outside the gates, outside the shop)",
        "Don't argue with anyone who complains; a short “Sorry, it's part of their condition.” Showing a Help Mark / help card can work too"
      ],
      why: "The voice is the easiest tool to reach for. As a way to communicate grows (cards, pointing, devices), the vocalising often decreases.",
      src: "Functional Communication Training (FCT) and related approaches"
    },
    {
      id: "fixation",
      title: "Stuck on a fixation", emoji: "🔁",
      do: [
        "If it's safe, go along with it first (a fixation is their way of feeling safe)",
        "Show the end in a visible form (a timer, “three more times”)",
        "For a change that's truly needed, give advance notice plus two choices (“A or B, which one?”)"
      ],
      dont: [
        "Break it off by force",
        "Take it away by trickery (you lose trust, and next time it gets stronger)",
        "Make a false promise to get through the moment"
      ],
      after: [
        "Note the object and conditions of the fixation (when, where, on what)",
        "Consider an advance-notice system (picture cards, a schedule)",
        "Record any difficulties and share them with the team and supervisor"
      ],
      outdoor: [
        "For a fixation on a particular train, route, or order, leaving plenty of time is the best prevention",
        "When a change is needed, don't push it there and then; use a plan (“Today, route A; next time, route B”)"
      ],
      why: "A fixation is the person's own way of making an anxious world predictable. Rather than taking it away, we widen their base of security and slowly add choices.",
      src: "UK NICE NG11 (PBS) / structured support (TEACCH)"
    },
    {
      id: "hallucination",
      title: "Hallucination / delusion-like distress", emoji: "💭",
      do: [
        "Don't deny it or agree with it (“So that's what you hear. That's frightening” — respond to the feeling)",
        "Gently shift to a reassuring real topic or activity",
        "If it's increasing, share with the doctor and family and consider a check-up"
      ],
      dont: [
        "Argue that “there's nothing there”",
        "Play along and build the story up with them",
        "Laugh or brush it off"
      ],
      after: [
        "Note the content, time, and frequency (after a medication change? are they sleeping?)",
        "Command-type content (“a voice tells me to die”) — get to medical care promptly"
      ],
      why: "To the person, it really is heard and seen. The issue isn't true-or-false but the anxiety it brings. Reassurance is the first priority.",
      src: "General guidance on psychosis / schizophrenia (family-facing) and WHO QualityRights"
    },
    {
      id: "hyperventilation",
      title: "Hyperventilation", emoji: "😮‍💨",
      do: [
        "Somewhere quiet. Sit them down and stay with them",
        "“You're OK. Let's breathe out slowly” — cue them, matching the out-breath",
        "Stay with them until they settle"
      ],
      dont: [
        "Put a paper bag over their mouth (the paper-bag method risks low oxygen and is no longer recommended)",
        "Say “Calm down!” firmly",
        "Leave them there on their own"
      ],
      after: [
        "If it's a first time, they have a health condition, or they don't recover — get medical care",
        "Note the trigger (anxiety, tiredness, crowds)",
        "If it recurs, record it and share with the team and supervisor"
      ],
      outdoor: [
        "Sit them on a bench or step, away from the crowd",
        "A short word to those around (“It's OK, they'll settle with a short rest”)"
      ],
      why: "Hyperventilation itself is rarely fatal, but the person is inside a fear of “I might die.” A calm voice and staying beside them are the best medicine.",
      src: "Medical guidance on hyperventilation (the paper-bag method is not recommended)"
    },
    {
      id: "medication",
      title: "Refusing medication", emoji: "💊",
      do: [
        "Step back once (leave it a while, then try again)",
        "Try a different form, timing, or person to help",
        "If it continues, don't decide alone — consult the doctor or pharmacist (change of form, medication support)"
      ],
      dont: [
        "Hold them down to make them take it",
        "Mix it into food without telling them (it breeds distrust; only do so with the doctor's and family's agreement)",
        "Bargain (“No medicine, no ___”)"
      ],
      after: [
        "Note how they refused (the taste? the size? their mood? — it may be a sign of side effects)",
        "Always mention it at the next appointment"
      ],
      why: "Refusal has a reason (hard to swallow, painful side effects, no understanding of why). Forcing it loses more than a single dose. Look for the cause together with medical staff.",
      src: "General medication-support guidance (pharmacists' associations)"
    },
    {
      id: "anxiety",
      title: "High anxiety / “I want to go home”", emoji: "🏠",
      do: [
        "Take the feeling as it is (“You want to go home”)",
        "Show what's next, concretely (“After snack, it's the bus”)",
        "Bridge to a comfort item or a favourite activity"
      ],
      dont: [
        "Keep fobbing them off with “Just a bit longer”",
        "Talk them out of it with logic",
        "Give a false time (you lose trust)"
      ],
      after: [
        "Note the times and days when anxiety builds",
        "Share small ways to add reassurance through belongings or the environment"
      ],
      outdoor: [
        "Give the outlook in visible units (“Two more stops,” “once we turn this corner”)",
        "On a high-anxiety day, the courage to cut the outing short is part of support too"
      ],
      why: "“I want to go home” is often a word for wanting safety more than a place. We add, one by one, the things that let them feel “here is safe.”",
      src: "General guidance for supporting people with high anxiety"
    }
  ],

  traits: [
    {
      id: "asd", name: "Autism spectrum (ASD)", emoji: "🧩",
      short: "Distinct social style, fixations, sensory differences",
      what: [
        "A profile where a distinct social/communication style overlaps with strong interests, fixations, and heightened (or reduced) sensory sensitivity. Some have an intellectual disability, some don't.",
        "How it shows up varies greatly from person to person (a “spectrum” — a continuum). Don't assume; look at this person.",
        "For them, the world is hard to predict and strongly stimulating — reducing that anxiety is the heart of support."
      ],
      prepare: [
        "For a first-time place or an outing, “pre-learn” with photos or a scouting visit. Share the flow in advance, in a visible form.",
        "When a change is unavoidable, give notice early plus room to choose (a sudden change is the biggest stressor).",
        "Don't rush or startle them. A plan they can move through with understanding builds the day's calm."
      ],
      comm: [
        "Short, concrete, one thing at a time (“when the clock says 3,” not “later”)",
        "In a visible form more than words (pictures, photos, text, real objects)",
        "Roundabout speech, jokes, and sarcasm don't land — use clear, positive statements (“We walk,” not “Don't run”)",
        "Replies can take time. Don't rush; wait"
      ],
      env: [
        "Show the schedule ahead of time (structure it)",
        "Reduce stimulation (sound, light, crowds). Have ear defenders or a quiet space ready",
        "Always pair changes with advance notice. Sudden change is the greatest stress"
      ],
      scenes: ["panic", "runaway", "fixation", "shouting", "selfharm", "freeze"],
      ng: [
        "Force eye contact",
        "Break a fixation by force",
        "Scold abstractly (“Behave,” “Read the room”)"
      ],
      src: "UK NICE NG11 (PBS) / structured support for autism (TEACCH) / DSM-5"
    },
    {
      id: "adhd", name: "ADHD (attention-deficit / hyperactivity)", emoji: "⚡",
      short: "Strong inattention, hyperactivity, impulsivity",
      what: [
        "A profile where inattention (distractible, forgetful) and hyperactivity/impulsivity (hard to sit still, hard to wait) are strong for the person's age.",
        "Not laziness or a bad character — a difference in how the brain's “executive function” works.",
        "Easy to lose confidence after being scolded so often. Engaging with what they get right works."
      ],
      comm: [
        "One instruction at a time, short. Back it up with notes and reminders",
        "Praise the very moment they succeed, specifically (it lands less well after a gap)",
        "Don't scold head-on. Instead of blaming the behaviour, work out the how together"
      ],
      env: [
        "Reduce distracting stimulation (seating, objects, sound)",
        "Make things visible (to-do lists, timers, checklists)",
        "Build in frequent chances to move and to rest"
      ],
      scenes: ["shouting", "runaway", "anxiety"],
      ng: [
        "Repeatedly scold with “How many times must I say it?”",
        "Long explanations / several instructions at once",
        "Read impulsive behaviour as a flaw of character"
      ],
      src: "UK NICE (ADHD guideline) / DSM-5"
    },
    {
      id: "id", name: "Intellectual disability", emoji: "📘",
      short: "Understanding and judgement develop slowly",
      what: [
        "A profile where understanding, judgement, reading/writing/arithmetic, handling money and time develop slowly, with everyday “hard-to-grasp” moments.",
        "Degree and strengths/weaknesses differ from person to person. Not child-like treatment — respect appropriate to their age.",
        "Often they can't say “I don't understand” and are quietly stuck. Change how you convey things and it gets through."
      ],
      prepare: [
        "Share what you'll do in advance by “showing” it with photos or real objects. Avoid springing it on them on the day.",
        "Break the steps small and set things up so they can succeed, before you begin.",
        "A plan with room to spare, that they can go through at their own pace."
      ],
      comm: [
        "Slow, short, plain words. Avoid difficult words or too much at once",
        "Concrete over abstract (real objects, pictures, demonstrations). Show them how",
        "Rather than “Got it?”, have them do it and check",
        "Be courteous as you would with any adult (no baby-talk)"
      ],
      env: [
        "Put steps in a visible form (photo instructions, checklists)",
        "Narrow the choices so they're easy to pick from",
        "Break tasks into small, achievable steps"
      ],
      scenes: ["runaway", "fixation", "anxiety", "freeze"],
      ng: [
        "Child-like treatment or a talking-down tone",
        "Rush them / give many instructions at once",
        "Blame with “I told you a moment ago”"
      ],
      src: "UK NICE NG11 (PBS) / DSM-5 (intellectual developmental disorder)"
    },
    {
      id: "ld", name: "Learning disability (specific learning disorder)", emoji: "✏️",
      short: "Specific learning areas (reading, writing, maths) are very hard",
      what: [
        "A profile where, without a major overall delay, specific learning — reading, writing, or arithmetic — is markedly difficult.",
        "Not a lack of effort or a problem of intelligence — an uneven profile of strengths and weaknesses in how the brain processes information.",
        "Don't blame the weak spot; support with an alternative route and they show their strengths."
      ],
      comm: [
        "Hard to read → read-aloud, phonetic guides, audio. Hard to write → typing, photos, recording",
        "Convey things both by voice and in text",
        "Take care not to make them do the hard task in front of others"
      ],
      env: [
        "Use ICT (tablets, voice input, a calculator)",
        "Large text, wide line spacing, simple layout",
        "Ways to take part using a route they're good at"
      ],
      scenes: ["anxiety"],
      ng: [
        "Decide that they're “being lazy”",
        "Force reading aloud or copying from the board",
        "Compare them with others"
      ],
      src: "DSM-5 (specific learning disorder) / reasonable-accommodation principles (CRPD)"
    },
    {
      id: "scz", name: "Schizophrenia", emoji: "🌫️",
      short: "Waves of hallucinations, delusions, low motivation",
      what: [
        "A mental illness in which hallucinations (e.g. hearing voices that aren't there), delusions, disorganised thinking, and low motivation can occur.",
        "It comes in waves, with better periods too. With the right treatment and support, people live calmly.",
        "“To them it is real” — don't argue; stay alongside the anxiety. That's the basis."
      ],
      comm: [
        "Don't deny or affirm hallucinations/delusions — respond to the feeling (“That's frightening”)",
        "Short, gentle, low on stimulation",
        "Keep an eye on whether they're keeping up with medication and sleeping"
      ],
      env: [
        "A quiet, reassuring environment. Avoid sudden change and strong stimulation",
        "Notice changes early (not sleeping, more persecutory complaints)",
        "Work with the person, family, and their doctor"
      ],
      scenes: ["hallucination", "anxiety", "panic"],
      ng: [
        "Try to argue a delusion down with logic",
        "Play along and build the story up together",
        "Mistake it for laziness and push activities on them"
      ],
      src: "UK NICE (psychosis / schizophrenia guideline) / WHO QualityRights"
    },
    {
      id: "mood", name: "Depression / bipolar (mood disorders)", emoji: "🌗",
      short: "Deep lows / swings of mood",
      what: [
        "There is “depression” — a lasting deep low with loss of drive and interest — and “bipolar,” which swings between depression and elevation (mania).",
        "It isn't cured by willpower. “Try harder” can corner the person.",
        "Understanding the waves and not pushing — watching over them — is what supports."
      ],
      comm: [
        "Don't say “Try harder” or “It's mind over matter.” First take in the pain",
        "Don't demand decisions or complex tasks",
        "In a manic state, put the brakes on big decisions and overspending together"
      ],
      env: [
        "A restful environment and paced days. Don't blame them for a day they can't manage",
        "Help steady their daily rhythm and sleep",
        "Never brush off “I want to die” — get to medical care and family at once"
      ],
      scenes: ["anxiety", "selfharm"],
      ng: [
        "Over-encourage or berate",
        "Compare with “everyone's having a hard time”",
        "Let talk of wanting to die pass unheard"
      ],
      src: "UK NICE (depression / bipolar disorder guidelines) / general suicide-prevention guidance"
    },
    {
      id: "anx", name: "Anxiety / OCD", emoji: "🫧",
      short: "Overwhelming anxiety, checking rituals",
      what: [
        "A profile where excessive anxiety and fear (panic attacks, checking rituals you can't stop) run the person's life.",
        "Not “worrying too much” — the brain's brake on anxiety works less well.",
        "As reassurance builds up, it eases little by little."
      ],
      comm: [
        "Don't deny the anxiety (“I'm here with you,” not “You're fine”)",
        "Give the outlook concretely (“It ends in ten minutes”)",
        "Don't stop a checking ritual head-on"
      ],
      env: [
        "A predictable, reassuring environment",
        "Reduce stimulation and pressure",
        "A quiet place where they can settle their breathing"
      ],
      scenes: ["anxiety", "hyperventilation", "panic", "fixation"],
      ng: [
        "Dismiss it as “worrying too much”",
        "Force them to face the feared situation",
        "Ban the checking ritual by force"
      ],
      src: "UK NICE (anxiety / OCD guidelines)"
    },
    {
      id: "ptsd", name: "PTSD / attachment difficulties", emoji: "🕯️",
      short: "Past painful experiences still playing out now",
      what: [
        "A state where past painful experiences (abuse, disaster, accident) continue as flashbacks, hypervigilance, and avoidance. Some carry attachment wounds.",
        "Not “an overreaction” or “in the past” — it's a reaction still happening now.",
        "Safety, reassurance, and building trust — “this person is OK” — are the foundation of recovery."
      ],
      comm: [
        "Don't touch suddenly or approach from behind (don't startle them)",
        "Leave room to choose and to say no (a sense of control brings reassurance)",
        "Keep your promises. Build small trust, piece by piece"
      ],
      env: [
        "A safe, predictable environment. Avoid loud voices and sudden approach",
        "Know that certain sounds, places, or situations can be triggers",
        "In a flashback, say gently “You are safe now”"
      ],
      scenes: ["panic", "anxiety", "selfharm"],
      ng: [
        "Force them to talk about the experience",
        "Startle them / touch them suddenly",
        "Treat the reaction as “selfishness”"
      ],
      src: "UK NICE (PTSD guideline) / trauma-informed care"
    },
    {
      id: "epi", name: "Epilepsy", emoji: "🧠",
      short: "Seizures from brief electrical disturbance in the brain",
      what: [
        "A condition where a temporary electrical disturbance in the brain causes “seizures.” They range from convulsions to a brief blank spell.",
        "Between seizures, many people live ordinary lives. They are not “dangerous.”",
        "It matters to know calm seizure care and the “5-minute rule.”"
      ],
      comm: [
        "A seizure isn't the person's will. Stay calm and watch over them",
        "They can be dazed afterwards. Don't rush them; let them rest",
        "Know their “seizure type” and the doctor's instructions in advance"
      ],
      env: [
        "Prevent injury (corners, water, heights, bathing)",
        "Share a record of seizures (time, what happened)",
        "Quietly support medication management"
      ],
      scenes: ["medical"],
      ng: [
        "Put something in their mouth (a mistake — cause of choking and injury)",
        "Hold them down",
        "Give food or drink right after a seizure"
      ],
      src: "US Epilepsy Foundation & CDC “Stay·Safe·Side” / Japan Epilepsy Association"
    },
    {
      id: "abi", name: "Acquired brain injury (higher brain dysfunction)", emoji: "🧭",
      short: "A hard-to-see disability after accident or illness",
      what: [
        "A state where, after an accident or illness (head injury, stroke, etc.), memory, attention, planning, and emotional control are impaired in ways that are hard to see.",
        "Hard to tell from the outside, and easily misread as “they've changed.” The person is bewildered too.",
        "Much ability remains. With ways to shore up the weak spots, life opens up."
      ],
      comm: [
        "One thing at a time, short. Back it up with notes and reminders",
        "When emotions run high, reduce stimulation and don't blame",
        "Don't blame the “I told you a moment ago” (it's a memory impairment)"
      ],
      env: [
        "Put steps and schedules in a visible form (notes, a schedule, alarms)",
        "A quiet, low-distraction environment",
        "Steady them with the same routine, the same place"
      ],
      scenes: ["shouting", "anxiety", "freeze"],
      ng: [
        "Misread it as “laziness” or “selfishness”",
        "Give many instructions at once",
        "Repeatedly point out what they can't do"
      ],
      src: "General guidance on acquired brain injury support"
    },
    {
      id: "sbd", name: "Severe behaviour that challenges", emoji: "🆘",
      short: "Self-harm, aggression, etc. so intense that specialist support is needed",
      what: [
        "A “state” where self-harm, harm to others, strong fixations, and destruction occur at very high frequency and intensity, so that specially intensive support is needed (it is not a diagnosis).",
        "The person isn't “a difficult person” — they are in difficulty. Being unable to get through, and a mismatch with the environment, lie behind it.",
        "With Positive Behaviour Support (PBS) — reading the reason behind the behaviour and shaping the environment — a great deal changes."
      ],
      prepare: [
        "The real work of support is “before the behaviour.” An outing or event begins with carefully planning it, well within their limits.",
        "So the person can hold an outlook and go in with understanding (share beforehand: where, what, how long, what happens when it ends).",
        "Arrange to avoid difficult stimulation, crowds, and waiting. Decide in advance where they can rest, when to head home, and an escape route.",
        "Don't try to fix things after a panic — it's only painful for everyone. Record what went well and what was hard, and feed it into the next plan."
      ],
      comm: [
        "Look for the behaviour's “function” (request, escape, attention, sensation)",
        "Grow a way to communicate (cards, devices)",
        "Engage most richly when things are going well"
      ],
      env: [
        "Reduce stimulation, demands, and broken expectations (structure, low arousal)",
        "Record trigger → behaviour → outcome, and analyse it as a team",
        "Don't rely on restraint or scolding. Work with specialists and medical staff"
      ],
      scenes: ["selfharm", "aggression", "runaway", "panic", "fixation", "shouting"],
      ng: [
        "Hold them down by force / stop it with scolding",
        "Keep meeting the request to get through the moment",
        "Carry it alone / within one service"
      ],
      src: "UK NICE NG11 (PBS) — Positive Behaviour Support"
    }
  ],

  hints: [
    "Support hints are only tendencies. The person in front of you is always the best textbook.",
    "There's always a reason behind behaviour. Just seeing “a person in difficulty” rather than “a difficult person” changes how you respond.",
    "People settle when they can see what's next. Telling them what's coming, first, is the greatest prevention.",
    "Pair changes with advance notice, not surprises. A “sudden change” tends to be the biggest stressor.",
    "A visible form beats words. Pictures, photos, text, and real objects can land many times more than speech.",
    "“We walk” beats “Don't run.” The action you want, stated positively, gets through better than the negative.",
    "One at a time. Keep instructions short and concrete. “Properly” and “carefully” are, in fact, the hardest words to grasp.",
    "Praise at the very moment they succeed, specifically. After a gap, praise lands less well.",
    "Engage most when they're spending time quietly. If you only engage when there's a problem, that becomes their way of engaging.",
    "Holding someone down is a hair's breadth from injury, lost trust, and abuse. Start by reducing distance and stimulation.",
    "In the middle of a panic, explanation and persuasion don't land. First reduce stimulation and wait for them to settle.",
    "The real work of support is “before it happens.” Preparation and planning create the day's calm.",
    "Plan outings carefully. Deciding in advance where to rest, when to head home, and an escape route brings reassurance.",
    "Better than a good response is simply not doing the harmful thing. That alone cuts accidents sharply.",
    "A record can take under a minute. Leaving “trigger → behaviour → outcome” makes the next support easier.",
    "Don't carry it alone. Share what's on your mind with the team and your supervisor. Early sharing protects the person.",
    "Their “no” and “I don't understand” are important signs. First, take in that they were able to say it.",
    "Being able to choose brings reassurance. “A or B — which?” beats “this is the only option.”",
    "Senses differ for everyone. Too bright, too loud, scratchy — it may be a painful stimulus for them.",
    "Behaviour that looks like “selfishness” can be the person's own reason or coping. Don't assume.",
    "A fixation is a way of making an anxious world predictable. Rather than taking it away, widen their reassurance.",
    "“Try harder” can, at times, corner a person. For someone who's low, first take in the pain.",
    "Don't deny or affirm hallucinations and delusions. Stay alongside the feeling with “That's frightening.”",
    "Swallow the “I told you a moment ago.” Forgetting can be part of the condition.",
    "Don't treat adults as children. Even if understanding is slow, offer respect fitting their age.",
    "Waiting is real support too. Some people can move — it just takes time to switch.",
    "Don't force eye contact. For some, meeting your eyes is painful.",
    "Don't startle. Avoid approaching suddenly from behind or touching without warning.",
    "Keep your promises. Small “it was kept” moments, stacked up, become trust.",
    "In a seizure, putting anything in the mouth is a mistake — it causes choking and injury. Stay calm and time it.",
    "A paper bag for hyperventilation is now a no — it risks low oxygen. Support them beside you to breathe out slowly.",
    "Medical is medical; support is support. For an uncertain medical moment, don't hesitate — local emergency number and the doctor's instructions.",
    "As ways to communicate grow, loud voices and aggression often fade. Cards and devices are “words” too.",
    "The person's “likes” are your greatest ally. A favourite activity, object, or topic is a shortcut to reassurance.",
    "Your own calm is, in that moment, the greatest source of reassurance.",
    "Take care of yourself, too. If a supporter falls, the support stops. Resting is part of the job."
  ],

  quizzes: [
    {
      q: "Someone is in a strong panic. What do you do first?",
      options: ["Call out loudly, “Calm down!”", "Stop talking, reduce people and stimulation, and wait for them to settle", "Grab their arm and move them out of the spot"],
      answer: 1,
      explain: "In the middle of a panic, words and stimulation can't be processed and make things worse. First stop talking, cut people, sound, and light, and stay quietly beside them somewhere safe. Waiting for them to settle is the fastest response."
    },
    {
      q: "A fixation on a set order is stopping the activity. What's good?",
      options: ["Force it to stop and move on to the next thing", "If safe, go along with it while showing the end in a visible form (“three more times”)", "Quietly swap it for something else"],
      answer: 1,
      explain: "A fixation is the person's way of feeling safe. Stopping it by force or by trickery loses trust, and next time it grows stronger. Go along with it, and use a timer or “___ more times” to make the “end” visible — that's the knack."
    },
    {
      q: "There's aggression and two people arrive as backup. What first?",
      options: ["Everyone surrounds the person to stop them", "Split roles (one handles the person; others move the other service users away)", "Everyone leaves the spot"],
      answer: 1,
      explain: "When backup comes, splitting roles is safer than all gathering at one point. One person faces the individual calmly while others move nearby service users or passers-by away. Surrounding them and drawing attention only fuels the agitation."
    },
    {
      q: "Someone suddenly bolts outside. How do you follow?",
      options: ["Chase at full speed from directly behind", "Keep them in view and move alongside, blocking dangerous directions like roads", "Keep shouting their name so you don't lose sight of them"],
      answer: 1,
      explain: "Chasing from directly behind becomes a “race” and can speed them up; shouting can strengthen the flight. Come into view from the side while blocking roads, railways, and water first. And call for backup and report early."
    },
    {
      q: "A convulsive seizure has started. What must you NOT do?",
      options: ["Time it, watching the clock", "Put chopsticks or a towel in their mouth", "If they may fall, support them and clear nearby hazards"],
      answer: 1,
      explain: "Putting something in the mouth “to stop them biting their tongue” is a mistake — it causes choking and injury to teeth or jaw. What to do: secure safety and time the seizure. More than 5 minutes, repeating, injury, or in water → emergency services."
    },
    {
      q: "A hyperventilation attack. What's the right response?",
      options: ["Hold a paper bag over their mouth to breathe into", "Stay beside them and cue them to breathe out slowly", "Say “Calm down!” firmly to snap them out of it"],
      answer: 1,
      explain: "The paper-bag method risks low oxygen and is no longer recommended. What to do: in a quiet place, stay with them and cue “Let's breathe out slowly,” matching the out-breath. Stay beside them until they settle."
    },
    {
      q: "You're taking someone with severe behaviour that challenges to a new place. What matters most?",
      options: ["Handle whatever comes up on the day, flexibly", "Plan carefully in advance so the person can hold an outlook and go in with understanding", "Pack the schedule so it's a full, rich day"],
      answer: 1,
      explain: "The real work of support is “before it happens.” Handling things after a behaviour has started is hard and painful for everyone. Share beforehand where, what, and how long — and what happens when it ends — and decide in advance where they can rest and when to head home. That's the greatest support."
    },
    {
      q: "“Please wait a little more, properly.” What's a clearer way to say it?",
      options: ["“When the clock says 3, we'll go. Until then, we sit on the chair and wait.”", "“Be a good boy/girl.”", "“It'll be over soon, so bear with it.”"],
      answer: 0,
      explain: "“Properly,” “a little more,” and “be good” are, in fact, the hardest to grasp. When, what, and how — conveyed concretely and in a visible form — get through."
    },
    {
      q: "When should you praise what they did well?",
      options: ["All together at the end of the day", "At the very moment they succeed, specifically", "Next time they fail, by comparison"],
      answer: 1,
      explain: "Praise lands less well after a gap. Not “well done” but “you put your own shoes on,” at the moment of success, specifically. When they can tell what was praised, it carries to next time."
    },
    {
      q: "What should you avoid saying to someone who is deeply low?",
      options: ["Take it in with “That was hard”", "Encourage them: “Try harder — everyone's struggling”", "Just sit quietly beside them"],
      answer: 1,
      explain: "Depression isn't cured by willpower. “Try harder” and comparison with others can corner the person further. First, take in the pain. And never brush off “I want to die” — get to medical care and family at once."
    },
    {
      q: "“I can hear insults from inside the wall,” they say, frightened. What do you do?",
      options: ["Teach them the facts: “There's no such voice”", "Stay alongside the feeling (“That's frightening”) and shift toward something reassuring", "Ask “What's it saying?” and listen with them"],
      answer: 1,
      explain: "To the person it really is heard. Don't argue it down, and don't build the story up together. The issue isn't true-or-false but the anxiety. Stay alongside the feeling and gently shift to a reassuring real activity. If it's increasing, suggest a check-up."
    },
    {
      q: "In a supermarket they suddenly get restless and cover their ears. What do you suspect first?",
      options: ["They're being difficult on purpose", "Sensory difficulty — sound, light, crowds", "They're just hungry"],
      answer: 1,
      explain: "In autism and elsewhere, senses can be very sensitive. Background music, lighting, and the buzz of a crowd may be a painful stimulus for them. Move somewhere quiet, use ear defenders — ways to reduce the stimulation."
    },
    {
      q: "Things have settled. What's the important thing you can do in under a minute?",
      options: ["Nothing in particular is needed", "Record trigger → behaviour → outcome, and share it", "Have them write an apology"],
      answer: 1,
      explain: "Just leaving “what the trigger was,” briefly, leads to the next prevention. As trigger × response records build up, they become that person's “user guide.” Don't carry it alone — share with the team."
    },
    {
      q: "They flatly refuse their medication. What's a good response?",
      options: ["Hold them down and make them take it", "Step back and leave it a while; if it continues, consult the doctor or pharmacist", "Mix it into their food without telling them"],
      answer: 1,
      explain: "Refusal has a reason (hard to swallow, painful side effects, no understanding of why). Forcing it loses trust. Step back and leave it, change the form or timing. If it continues, don't decide alone — ask the doctor or pharmacist. Mixing it in secretly is only with the doctor's and family's agreement."
    }
  ],

  phraseGroups: [
    { id: "feel",  label: "Feelings", emoji: "💙", items: ["Happy", "Sad", "Scared", "I don't like this", "I'm OK", "I'm angry"] },
    { id: "body",  label: "Body",     emoji: "🩹", items: ["It hurts", "I'm tired", "Toilet", "I'm hungry", "I'm thirsty", "Sleepy", "I feel unwell"] },
    { id: "ask",   label: "Requests", emoji: "🙏", items: ["Please help", "I want a break", "Please speak slowly", "Please say it again", "Please write it down", "Please be quiet"] },
    { id: "reply", label: "Replies",  emoji: "💬", items: ["Yes", "No", "I don't understand", "Please wait", "Thank you", "Sorry"] }
  ],

  logOptions: {
    triggers: ["Sound / light", "People close / crowded", "Change of plan", "A request wasn't met", "Pain / feeling unwell", "Waiting", "Not sure", "Other"],
    durations: ["Under 5 min", "Under 15 min", "Under 30 min", "Longer"],
    responses: ["Reduced stimulation", "Changed location", "Watched over", "Showed what's next", "Used writing / visuals", "Called medical / emergency", "Other"],
    injuries: ["None", "Injury to the person", "Injury to others", "Property damaged"]
  }
};
