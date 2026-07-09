/*
 * Supporto per operatori socio-sanitari (edizione disabilità) - Contenuti (italiano)
 * Principi:
 *  - Queste sono tendenze e suggerimenti, mai etichette. La persona davanti a voi viene prima di tutto.
 *  - Nessuna decisione medica. In caso di dubbio, indirizzare al numero di emergenza locale / al medico curante.
 *  - La struttura (id / emoji / indici delle risposte / rimandi alle scene) rispecchia esattamente content.ja.js.
 */
window.SHIEN_CONTENT = window.SHIEN_CONTENT || {};
window.SHIEN_CONTENT.it = {
  version: 1,

  basis: [
    "NICE britannico NG10 «Violenza e aggressività: gestione a breve termine» (2015) — prima la de-escalation senza contenzione. La contenzione fisica è l'ultima risorsa.",
    "NICE britannico NG11 «Comportamenti problema e disabilità intellettiva» (2015) — Positive Behaviour Support (PBS): capire il perché del comportamento e adattare l'ambiente. Include il sostegno a famiglie e caregiver.",
    "Positive Behaviour Support (PBS) / approccio Low Arousal — ridurre richieste e stimoli, non entrare in conflitto.",
    "Supporto strutturato per l'autismo (TEACCH) / Training di Comunicazione Funzionale (FCT).",
    "Primo soccorso nelle crisi epilettiche: Epilepsy Foundation USA e CDC «Stay·Safe·Side» e la regola dei 5 minuti.",
    "Convenzione ONU sui diritti delle persone con disabilità (CRPD) / OMS QualityRights — proteggere dignità e autodeterminazione; evitare il più possibile coercizione e contenzione."
  ],

  scenes: [
    {
      id: "medical", medical: true,
      title: "Crisi, ferite, coscienza alterata", emoji: "🚑",
      lead: "Questa app non prende decisioni mediche. Nel dubbio, chiamate l'emergenza: è la scelta giusta.",
      do: [
        "Se rischia di cadere, sostenetela e adagiatela con calma; allontanate gli oggetti pericolosi (togliete gli occhiali, allentate il colletto)",
        "Quando le convulsioni cessano, giratela su un fianco (posizione laterale di sicurezza)",
        "Guardate l'ora d'inizio della crisi (cronometrate)"
      ],
      call119: [
        "Prima crisi in assoluto",
        "Convulsioni che durano più di 5 minuti",
        "Crisi che si ripetono a breve distanza, coscienza che non torna",
        "Ferite, respirazione anomala",
        "Crisi in acqua o durante il bagno"
      ],
      note: "Se la persona ha indicazioni individuali del medico (farmaco d'emergenza, supposte ecc.), seguite quelle indicazioni.",
      dont: [
        "Mettere qualcosa in bocca («per evitare che si morda la lingua» è un errore: causa soffocamento e ferite)",
        "Bloccare il corpo per cercare di fermare la crisi",
        "Dare cibo o bevande subito dopo la crisi"
      ],
      outdoor: [
        "Allontanatela dal bordo della banchina, dalla carreggiata, dalle scale (spostatela solo se il punto è pericoloso)",
        "In stazione chiedete aiuto al personale, per strada ai passanti (dite chiaramente: «Chiamate un'ambulanza, per favore»)",
        "All'emergenza comunicate nome della stazione, numero d'uscita, un punto di riferimento"
      ],
      after: [
        "Annotate durata e svolgimento (quanti minuti, che movimenti, la coscienza dopo)",
        "Riferite al medico curante e alla famiglia",
        "Se ha sonno, lasciatela riposare in un luogo sicuro"
      ],
      why: "Nella crisi la cosa più importante non è «fermarla», ma vegliare in sicurezza, cronometrare e riferire. La vostra calma è il più grande aiuto per la persona.",
      src: "Associazione giapponese per l'epilessia «Assistenza e osservazione nella crisi» / Epilepsy Foundation e CDC USA «Stay·Safe·Side» (primo soccorso, regola dei 5 minuti)"
    },
    {
      id: "panic",
      title: "Panico", emoji: "🌀",
      do: [
        "Mettete in sicurezza la persona e chi la circonda (allontanate gli oggetti pericolosi)",
        "Riducete gli stimoli (smettete di parlare, allontanate le persone, abbassate suoni e luci)",
        "Aspettate. Restate accanto in silenzio finché non si calma"
      ],
      dont: [
        "Fermarla urlando, sgridarla (aumenta l'agitazione)",
        "Bloccarla fisicamente (ferite, fiducia persa — a un passo dal maltrattamento)",
        "Tempestarla di domande, cercare di convincerla (non riesce a elaborare, peggiora)",
        "Circondarla, attirare l'attenzione"
      ],
      outdoor: [
        "Spostatevi fuori dal flusso delle persone — lungo un muro, dietro una colonna, su una panchina",
        "Se non riesce a muoversi, non forzatela; fatele da scudo con il vostro corpo, schermando sguardi e persone",
        "Una parola breve a chi sta intorno («Va tutto bene, tra poco si calma») — previene interventi in buona fede o chiamate ai soccorsi"
      ],
      after: [
        "Offrite acqua e riposo",
        "Annotate il fattore scatenante (rumore? persone? cambio di programma? dolore?)",
        "Condividete all'interno della struttura"
      ],
      why: "Il panico non è un «capriccio»: è una reazione a stimoli, ansia o prevedibilità crollata che la persona non riesce più a elaborare. È lei a soffrire di più. Un ambiente che calma e il tempo sono il miglior supporto.",
      src: "Manuale di formazione per operatori dei disturbi gravi del comportamento (Nozominosono, Giappone) / NICE NG11 (PBS) · NG10 (aggressività: prima la de-escalation senza contenzione)"
    },
    {
      id: "selfharm",
      title: "Autolesionismo", emoji: "🤕",
      do: [
        "Valutate se c'è pericolo di vita (colpi alla testa, morsi forti: attutite fisicamente con un cuscino ecc.)",
        "Riducete gli stimoli, portatela in un ambiente che calma",
        "Vegliate in silenzio, medicate quando si è calmata"
      ],
      dont: [
        "Urlare «Smettila!» (l'attenzione può rafforzare il comportamento)",
        "Continuare ad afferrarle il braccio con forza",
        "Punire, rimproverare"
      ],
      outdoor: [
        "Allontanate il corpo dalle superfici dure — asfalto, colonne, guardrail (anche una borsa o una giacca in mezzo aiuta)",
        "Se si sta formando un capannello, una parola breve («Va tutto bene») — gli sguardi stessi sono uno stimolo"
      ],
      after: [
        "Controllate e medicate le ferite",
        "Annotate la situazione immediatamente precedente (subito dopo cosa è successo?)",
        "Se si ripete, valutate una revisione del piano di supporto (medico, coordinatore)"
      ],
      why: "L'autolesionismo ha spesso una funzione: esprimere disagio, chiedere, verificare una sensazione, cercare attenzione. Il vero lavoro è far crescere un «mezzo sostitutivo» adatto alla funzione (l'idea dell'analisi comportamentale applicata).",
      src: "Manuale di formazione per operatori dei disturbi gravi del comportamento (Nozominosono, Giappone) / NICE NG11 (PBS) · NG10 (aggressività: prima la de-escalation senza contenzione)"
    },
    {
      id: "aggression",
      title: "Aggressioni, oggetti rotti", emoji: "💥",
      do: [
        "Prima di tutto distanza (almeno un braccio). Allontanate gli altri utenti, mettete in sicurezza l'area",
        "Chiamate subito rinforzi e avvisate il responsabile (anche mentre gestite. Non portate il peso da soli)",
        "Voce bassa, parole brevi — oppure in silenzio, riducendo gli stimoli"
      ],
      dont: [
        "Afferrarla frontalmente, immobilizzarla (rischio di incidenti e maltrattamento)",
        "Sgridare, fissarla in una sfida di sguardi",
        "Incalzarla: «Perché fai così?!»"
      ],
      outdoor: [
        "Priorità assoluta: allontanare i passanti («Scusate, allontanatevi per favore», con chiarezza)",
        "In stazione chiedete la collaborazione di personale e vigilanza (fuori, non portate il peso da soli)"
      ],
      after: [
        "Controllate ferite e danni. Comunicazioni secondo le regole della struttura",
        "Annotate fattore scatenante e svolgimento",
        "Condividete tra colleghi i segnali premonitori (espressione, voce, movimenti)"
      ],
      why: "L'aggressione è per lo più l'«esplosione» di una richiesta, un disagio o una paura non arrivati a destinazione. Non mira alle persone: finisce sulle persone. Conoscere i segnali premonitori è il primo passo della prevenzione.",
      src: "Manuale di formazione per operatori dei disturbi gravi del comportamento (Nozominosono, Giappone) / NICE NG11 (PBS) · NG10 (aggressività: prima la de-escalation senza contenzione)"
    },
    {
      id: "runaway",
      title: "Fuga, scomparsa", emoji: "🏃",
      do: [
        "Non inseguite da dietro (inseguire accelera). Restate nel suo campo visivo correndo in parallelo e chiudete per prime le direzioni pericolose: carreggiata, acqua, binari",
        "Chiamate subito rinforzi e avvisate il responsabile (mentre agite. Non gestite da soli o solo tra di voi)",
        "Se la perdete di vista, senza esitare: segnalazione secondo le regole della struttura (polizia) e avvio delle ricerche"
      ],
      dont: [
        "Continuare a gridarne il nome (può rafforzare la fuga)",
        "Tenersi tutto dentro, ritardare la segnalazione",
        "Sgridarla al ritorno (imparerebbe: «tornare = succede qualcosa di spiacevole»)"
      ],
      outdoor: [
        "In stazione, appena persa di vista: subito al personale (banchine, tornelli, telecamere — il personale è il più rapido)",
        "Descrivete abbigliamento, corporatura, luoghi probabili e chiedete aiuto (non esitate: pochi minuti possono decidere una vita)"
      ],
      after: [
        "Al ritrovamento, avvicinatevi con calma e controllate le ferite",
        "Annotate percorso e orari (la direzione presa è un indizio per il supporto)",
        "Non lasciate che la famiglia porti tutto da sola. Chiedere aiuto o indicazioni agli operatori coinvolti (coordinatore, assistenti) e, secondo i casi, al medico curante è un'opzione",
        "Rivedete uscite e sistema di sorveglianza"
      ],
      why: "Dietro una fuga c'è spesso «uno stimolo da cui scappare» o «una meta da raggiungere». Cercare il perché invece di colpevolizzare: è questo che prepara la prossima prevenzione.",
      src: "Basi della formazione all'accompagnamento esterno (sicurezza nelle uscite) ecc."
    },
    {
      id: "freeze",
      title: "Bloccata, non riesce a muoversi", emoji: "🧊",
      do: [
        "Aspettate (dandovi un tempo: prima 5 minuti)",
        "Riducete stimoli e richieste (non mettete fretta, non toccate)",
        "Mostrate un solo passo successivo, breve e visibile («dopo, il tè»)"
      ],
      dont: [
        "Tirarla per la mano per farla muovere",
        "Sollecitazioni a raffica («dai, andiamo, forza»)",
        "Consultarsi con gli altri sopra la sua testa"
      ],
      outdoor: [
        "In mezzo a un passaggio, guidatela dolcemente fuori dal flusso (lungo il muro). Se non può muoversi, fatele da scudo e aspettate",
        "Invece di mettere fretta: «C'è tempo». A chi sta intorno, brevemente: «Aspettiamo un momento»"
      ],
      after: [
        "Annotate cosa le ha permesso di ripartire (il tempo? qualcosa di mostrato? il cambio di persona?)",
        "Individuate e condividete le situazioni in cui tende a bloccarsi"
      ],
      why: "Il blocco non è un rifiuto: spesso è «un'elaborazione del passaggio che richiede tempo». Da chi riparte se si aspetta, l'operatore che sa aspettare può imparare.",
      src: "Principi del supporto strutturato per l'autismo (TEACCH ecc.)"
    },
    {
      id: "shouting",
      title: "Urla, vocalizzi", emoji: "📢",
      do: [
        "Prima sospettate dell'ambiente (caldo? rumore? fame? dolore?)",
        "Guidatela in un luogo tranquillo, oppure abbassate gli stimoli intorno",
        "È proprio nei momenti tranquilli che bisogna coinvolgersi di più"
      ],
      dont: [
        "Rispondere alle urla con le urla",
        "Ripetere «Silenzio!»",
        "Cedere ogni volta alle richieste per farla tacere (impara: «se urlo, ottengo»)"
      ],
      outdoor: [
        "Spostatevi lentamente in un luogo tranquillo (fondo della banchina, fuori dai tornelli, fuori dal negozio)",
        "Con chi fa osservazioni non litigate: brevemente «Scusate, è legato alla sua disabilità». Anche mostrare una carta o un simbolo di aiuto è efficace"
      ],
      after: [
        "Annotate orario, luogo, ciò che è accaduto subito prima (se è a orari fissi, sospettate condizioni fisiche o fattori ambientali)",
        "Verificate anche la storia dei dolori (denti, orecchie, pancia)",
        "Registrate i cambiamenti che colpiscono e condivideteli con équipe e responsabile"
      ],
      why: "La voce è il mezzo espressivo più immediato. Quando crescono altri mezzi per comunicare (carte, indicare, dispositivi), le urla spesso diminuiscono.",
      src: "Principi del Training di Comunicazione Funzionale (FCT) ecc."
    },
    {
      id: "fixation",
      title: "Bloccata da una fissazione", emoji: "🔁",
      do: [
        "Se non è pericoloso, prima assecondatela (la fissazione è il suo modo di rassicurarsi)",
        "Rendete visibile la fine (timer, «ancora 3 volte»)",
        "Se il cambiamento è indispensabile: preavviso + 2 opzioni («A o B, quale scegli?»)"
      ],
      dont: [
        "Interromperla con la forza",
        "Portarle via l'oggetto con l'inganno (fiducia persa, la prossima volta sarà più forte)",
        "False promesse per cavarsela sul momento"
      ],
      outdoor: [
        "Per le fissazioni su treno, percorso, ordine: il margine di tempo è la migliore prevenzione",
        "Se serve cambiare: non insistete a lungo sul posto, date una prospettiva («oggi la strada A, la prossima volta la B»)"
      ],
      after: [
        "Annotate oggetto e condizioni della fissazione (quando, dove, su cosa)",
        "Valutate un sistema di preavviso (carte illustrate, programma visivo)",
        "Registrate le difficoltà e condividetele con équipe e responsabile"
      ],
      why: "La fissazione è l'ingegno con cui la persona rende prevedibile un mondo che la inquieta. Non toglietela: allargate la base di sicurezza e aumentate a poco a poco le alternative.",
      src: "Manuale disturbi gravi del comportamento / supporto strutturato (TEACCH) / NICE NG11 (PBS)"
    },
    {
      id: "hallucination",
      title: "Voci, discorsi simili a deliri", emoji: "💭",
      do: [
        "Né negare né confermare (rispondete al sentimento: «Le sembra di sentirlo. Fa paura, vero»)",
        "Riconducete piano verso un tema o un'attività reale e rassicurante",
        "Se aumentano: condividete con medico curante e famiglia, valutate una visita"
      ],
      dont: [
        "Discutere: «Non esiste niente del genere»",
        "Assecondare il racconto e ingigantirlo insieme",
        "Ridere, sminuire"
      ],
      after: [
        "Annotate contenuto, orari, frequenza (dopo un cambio di farmaci? dorme abbastanza?)",
        "Contenuti di comando («mi dicono di morire» ecc.): rapidamente in ambito medico"
      ],
      why: "Per la persona è davvero udibile e visibile. La questione non è vero o falso, ma l'ansia che quell'esperienza porta. La sicurezza interiore viene prima di tutto.",
      src: "Conoscenze generali delle guide per famiglie (emergenza psichiatrica, schizofrenia)"
    },
    {
      id: "hyperventilation",
      title: "Iperventilazione", emoji: "😮‍💨",
      do: [
        "In un luogo tranquillo. Fatela sedere, restate accanto",
        "«Va tutto bene. Espiri piano» — accompagnate con la voce l'espirazione",
        "Restate insieme finché non si calma"
      ],
      dont: [
        "Mettere un sacchetto di carta sulla bocca (il metodo del sacchetto comporta rischio di ipossia e oggi non è raccomandato)",
        "Dire con forza «Calmati!»",
        "Lasciarla da sola sul posto"
      ],
      outdoor: [
        "Fatela sedere su una panchina o un gradino, allontanatevi dal capannello",
        "A chi sta intorno, una parola: «Va tutto bene, con un po' di riposo passa»"
      ],
      after: [
        "Se è la prima volta, se ha patologie, se non si riprende: in ambito medico",
        "Annotate il fattore scatenante (ansia, stanchezza, folla)",
        "Se si ripete, registrate e condividete con équipe e responsabile"
      ],
      why: "Di iperventilazione in sé raramente si muore, ma la persona vive nella paura di «forse morire». Una voce calma e la presenza sono la miglior medicina.",
      src: "Divulgazione medica sulla sindrome da iperventilazione (metodo del sacchetto non raccomandato)"
    },
    {
      id: "medication",
      title: "Rifiuto dei farmaci", emoji: "💊",
      do: [
        "Ritiratevi una volta (lasciate passare del tempo, poi riprovate)",
        "Cambiate forma, momento, persona che aiuta",
        "Se continua, non decidete da soli: consultate medico o farmacista (cambio di formulazione, supporto all'assunzione)"
      ],
      dont: [
        "Bloccarla e farglielo ingoiare",
        "Mescolarlo di nascosto nel cibo (fonte di sfiducia. Se proprio, solo con l'accordo di medico e famiglia)",
        "Contrattare: «Se non lo prendi, niente …»"
      ],
      after: [
        "Annotate come si manifesta il rifiuto (il sapore? la dimensione? l'umore? — forse è un segnale di effetti collaterali)",
        "Riferitelo senza fallo alla visita medica"
      ],
      why: "Il rifiuto ha le sue ragioni (difficile da ingoiare, effetti collaterali pesanti, senso non capito). La ricerca delle cause si fa insieme alla medicina. Forzare fa perdere molto più di una compressa di oggi.",
      src: "Conoscenze generali sul supporto all'assunzione dei farmaci (ordini dei farmacisti ecc.)"
    },
    {
      id: "anxiety",
      title: "Ansia forte, «voglio andare a casa»", emoji: "🏠",
      do: [
        "Accogliete il sentimento così com'è («Vuole andare a casa, vero»)",
        "Mostrate una prospettiva concreta («dopo la merenda c'è l'autobus»)",
        "Fate da ponte verso oggetti rassicuranti, attività preferite"
      ],
      dont: [
        "Continuare a svicolare («manca poco, dai»)",
        "Convincerla con la logica",
        "Dire orari falsi (si perde la fiducia)"
      ],
      outdoor: [
        "Date prospettive in unità visibili: «ancora 2 fermate», «girato quest'angolo»",
        "Nei giorni di ansia forte, anche il coraggio di accorciare il programma fa parte del supporto"
      ],
      after: [
        "Annotate orari e giorni in cui l'ansia si intensifica",
        "Condividete gli accorgimenti che aumentano la sicurezza (oggetti, ambiente)"
      ],
      why: "«Voglio andare a casa» è spesso una parola che cerca sicurezza più che un luogo. Aumentiamo uno a uno gli elementi che fanno sentire: «qui sono al sicuro».",
      src: "Conoscenze generali sul supporto alle persone con forte ansia"
    }
  ],

  /* ===== Comunicare: frasi pronte ===== */
  phraseGroups: [
    { id: "feel",  label: "Emozioni",  emoji: "💙", items: ["Sono contento/a", "Sono triste", "Ho paura", "Non voglio", "Sto bene", "Sono arrabbiato/a"] },
    { id: "body",  label: "Corpo",  emoji: "🩹", items: ["Ho male", "Sono stanco/a", "Bagno", "Ho fame", "Ho sete", "Ho sonno", "Mi sento male"] },
    { id: "ask",   label: "Richieste", emoji: "🙏", items: ["Aiutatemi", "Voglio riposare", "Parlate piano", "Ripetete, per favore", "Scrivete, per favore", "Meno rumore, per favore"] },
    { id: "reply", label: "Risposte",  emoji: "💬", items: ["Sì", "No", "Non lo so", "Aspettate un attimo", "Grazie", "Scusate"] }
  ],

  /* ===== Registro: opzioni (solo tocchi, si completa in pochi secondi) ===== */
  logOptions: {
    triggers: ["Rumore / luce", "Persone vicine / folla", "Cambio di programma", "Richiesta non accolta", "Dolore / condizioni fisiche", "Attesa", "Non so", "Altro"],
    durations: ["≤ 5 min", "≤ 15 min", "≤ 30 min", "Di più"],
    responses: ["Ridotto gli stimoli", "Cambiato luogo", "Vegliato accanto", "Dato una prospettiva", "Usato scrittura / supporti visivi", "Indirizzato a medici / emergenza", "Altro"],
    injuries: ["Nessuno", "Ferita la persona", "Ferito qualcun altro", "Oggetto rotto"]
  },

  traits: [
    {
      id: "asd", name: "Disturbo dello spettro autistico (ASD)", emoji: "🧩",
      short: "Peculiarità di relazione, fissazioni, sensi",
      what: [
        "Una caratteristica in cui si sovrappongono un modo particolare di relazionarsi e comunicare, interessi e fissazioni intensi e una sensibilità sensoriale accentuata (o ridotta). C'è chi ha anche un ritardo intellettivo e chi no.",
        "Le manifestazioni variano molto da persona a persona («spettro» = continuum). Non etichettate: guardate quella persona.",
        "Per lei il mondo è poco prevedibile e pieno di stimoli — ridurre quell'ansia è il cuore del supporto."
      ],
      prepare: [
        "Luoghi nuovi e uscite: «ripassateli» prima con foto o sopralluoghi. Condividete in anticipo il programma, in forma visibile.",
        "Proprio quando il cambiamento è inevitabile: preavviso precoce + margine di scelta (il cambiamento improvviso è lo stress peggiore).",
        "Non mettere fretta, non cogliere di sorpresa. Un percorso condiviso e accettato crea la serenità del giorno stesso."
      ],
      comm: [
        "Breve, concreto, una cosa alla volta («quando l'orologio segna le 3» invece di «più tardi»)",
        "Forme «visibili» più che parole (immagini, foto, scritte, oggetti reali)",
        "Allusioni, battute, ironia arrivano male. Frasi affermative e chiare («camminiamo» invece di «non correre»)",
        "La risposta può richiedere tempo. Aspettate senza incalzare"
      ],
      env: [
        "Mostrare il programma in anticipo (strutturazione dell'agenda)",
        "Ridurre gli stimoli (rumore, luce, folla). Predisporre cuffie antirumore o un luogo tranquillo",
        "I cambiamenti sempre in coppia con il preavviso. Il cambiamento improvviso è lo stress maggiore"
      ],
      scenes: ["panic", "runaway", "fixation", "shouting", "selfharm", "freeze"],
      ng: [
        "Forzare il contatto visivo",
        "Fermare le fissazioni con la forza",
        "Rimproverare in astratto («comportati bene», «leggi la situazione»)"
      ],
      src: "NICE NG11 (PBS) / supporto strutturato per l'autismo (TEACCH) / DSM-5"
    },
    {
      id: "adhd", name: "Disturbo da deficit di attenzione e iperattività (ADHD)", emoji: "⚡",
      short: "Disattenzione, iperattività, impulsività marcate",
      what: [
        "Disattenzione (si distrae, dimentica) e iperattività-impulsività (fatica a stare fermo, ad aspettare), di intensità sproporzionata all'età.",
        "Non è pigrizia né carattere: è un diverso modo di funzionare delle «funzioni esecutive» del cervello.",
        "A furia di rimproveri perde facilmente fiducia in sé. Funziona un coinvolgimento che guarda a ciò che è riuscito."
      ],
      comm: [
        "Istruzioni una alla volta, brevi. Affiancate promemoria e reminder",
        "Lodate concretamente «nell'attimo» della riuscita (con ritardo l'effetto si perde)",
        "Non sgridate a priori. Non accusate il comportamento: cercate insieme il metodo"
      ],
      env: [
        "Ridurre gli stimoli che distraggono (ordine di posto, oggetti, suoni)",
        "Rendere visibile (lista delle cose da fare, timer, tabella di spunta)",
        "Creare intervalli frequenti per muoversi e riposare"
      ],
      scenes: ["shouting", "runaway", "anxiety"],
      ng: [
        "Rimproverare ripetendo «Quante volte devo dirtelo?»",
        "Spiegazioni lunghe, più istruzioni insieme",
        "Leggere l'impulsività come difetto della persona"
      ],
      src: "NICE (linee guida ADHD) / DSM-5"
    },
    {
      id: "id", name: "Disabilità intellettiva", emoji: "📘",
      short: "Comprensione e giudizio più lenti",
      what: [
        "Comprensione e giudizio, lettura-scrittura-calcolo, gestione di denaro e tempo si sviluppano più lentamente: la vita quotidiana risulta «difficile da decifrare».",
        "Grado e punti di forza variano da persona a persona. Niente trattamento infantile: rispetto adeguato all'età.",
        "Spesso non riesce a dire «non ho capito» e resta in difficoltà. Cambiate il modo di trasmettere e il messaggio arriva."
      ],
      prepare: [
        "Condividete in anticipo cosa si farà, con foto o oggetti reali, «facendo vedere». Evitate l'«all'improvviso il giorno stesso».",
        "Suddividete i passaggi in piccoli step e dateli in forma fattibile prima di iniziare.",
        "Un piano con margine, percorribile al proprio ritmo."
      ],
      comm: [
        "Lentamente, in breve, con parole semplici. Evitate termini difficili e troppe cose insieme",
        "Concreto più che astratto (oggetti, immagini, dimostrazione). Fate vedere",
        "Più che «hai capito?», verificate facendo provare",
        "Con cortesia adeguata all'età (niente linguaggio infantile)"
      ],
      env: [
        "Procedure in forma visibile (istruzioni fotografiche, tabelle di spunta)",
        "Restringere le opzioni per facilitare la scelta",
        "Dividere in piccoli passi in cui si può riuscire"
      ],
      scenes: ["runaway", "fixation", "anxiety", "freeze"],
      ng: [
        "Trattare da bambino, tono dall'alto in basso",
        "Mettere fretta, dare molte istruzioni insieme",
        "Accusare: «te l'ho appena detto»"
      ],
      src: "NICE NG11 (PBS) / DSM-5 (disturbo dello sviluppo intellettivo)"
    },
    {
      id: "ld", name: "Disturbi specifici dell'apprendimento (DSA)", emoji: "✏️",
      short: "Difficoltà mirata: leggere, scrivere, calcolare",
      what: [
        "Senza grandi ritardi dell'intelligenza generale, solo «un ambito specifico dell'apprendimento» — lettura, scrittura o calcolo — risulta molto difficile.",
        "Non è mancanza di impegno né un problema d'intelligenza: è uno sbilanciamento tra punti forti e deboli dell'elaborazione cerebrale delle informazioni.",
        "Senza colpevolizzare la difficoltà, compensando con altri mezzi le capacità emergono."
      ],
      comm: [
        "Leggere è difficile → lettura ad alta voce, ausili, audio. Scrivere è difficile → tastiera, foto, registrazione",
        "Trasmettete sia a voce sia per iscritto",
        "L'attenzione di non far svolgere davanti agli altri i compiti difficili"
      ],
      env: [
        "Usare le tecnologie (tablet, dettatura vocale, calcolatrice)",
        "Caratteri grandi, interlinea ampia, impaginazione semplice",
        "Modi per partecipare attraverso il proprio canale forte"
      ],
      scenes: ["anxiety"],
      ng: [
        "Etichettare come «svogliato»",
        "Imporre letture ad alta voce o copiature difficili",
        "Confrontare con gli altri"
      ],
      src: "DSM-5 (disturbo specifico dell'apprendimento) / principio degli accomodamenti ragionevoli (CRPD)"
    },
    {
      id: "scz", name: "Schizofrenia", emoji: "🌫️",
      short: "Allucinazioni, deliri, cali di slancio — a ondate",
      what: [
        "Una malattia psichica in cui possono comparire allucinazioni (sentire voci inesistenti ecc.), deliri, pensiero disorganizzato, calo dello slancio vitale.",
        "Va a ondate, con periodi buoni. Con cure e supporto adeguati si può vivere serenamente.",
        "«Per la persona è realtà» — non contestate, state accanto all'ansia: è la base."
      ],
      comm: [
        "Allucinazioni e deliri: né negare né confermare; rispondere al sentimento («è angosciante, vero»)",
        "In breve, con dolcezza, pochi stimoli",
        "Prestate attenzione a farmaci che proseguono e sonno sufficiente"
      ],
      env: [
        "Ambiente quieto e rassicurante. Evitare cambiamenti bruschi e stimoli forti",
        "Accorgersi presto delle variazioni (non dorme, aumentano i discorsi persecutori)",
        "Coordinarsi con persona, famiglia, medico curante"
      ],
      scenes: ["hallucination", "anxiety", "panic"],
      ng: [
        "Cercare di smontare il delirio con la logica",
        "Assecondare il racconto e ingigantirlo insieme",
        "Scambiare per pigrizia e imporre attività"
      ],
      src: "NICE (linee guida psicosi/schizofrenia) / OMS QualityRights"
    },
    {
      id: "mood", name: "Depressione, disturbo bipolare (disturbi dell'umore)", emoji: "🌗",
      short: "Abbattimento profondo / onde dell'umore",
      what: [
        "La «depressione»: abbattimento intenso, calo di slancio e interesse che si protraggono. Il «bipolare»: alternanza fra depressione ed euforia (mania).",
        "Non si guarisce con la forza di volontà. Un «forza!» può mettere la persona alle strette.",
        "Capire le onde, non far strafare, vegliare: è questo che sostiene."
      ],
      comm: [
        "Non dire «forza» né «è solo questione di testa». Prima accogliere la sofferenza",
        "Non pretendere decisioni o compiti complessi",
        "Nella fase euforica: frenare insieme grandi decisioni e spese"
      ],
      env: [
        "Ambiente in cui riposare, ritmo dosato. Non accusare i giorni in cui non ce la fa",
        "Aiutare a regolare ritmi di vita e sonno",
        "Il lamento «voglio morire» mai sminuirlo: subito medici e famiglia"
      ],
      scenes: ["anxiety", "selfharm"],
      ng: [
        "Incoraggiare troppo, incitare",
        "Confrontare: «tutti soffrono»",
        "Lasciar correre le idee suicidarie"
      ],
      src: "NICE (linee guida depressione/disturbo bipolare) / conoscenze generali sulla prevenzione del suicidio"
    },
    {
      id: "anx", name: "Disturbi d'ansia, DOC", emoji: "🫧",
      short: "Ansia eccessiva, controlli compulsivi",
      what: [
        "Ansia e paure eccessive (attacchi di panico, controlli che non si riescono a fermare) che stravolgono la vita quotidiana.",
        "Non è «farsi troppi problemi»: il freno cerebrale dell'ansia funziona male.",
        "Accumulando sicurezza, piano piano si attenua."
      ],
      comm: [
        "Non negare l'ansia («sono qui con lei» più che «va tutto bene»)",
        "Prospettive concrete («tra 10 minuti finisce»)",
        "Non bloccare a priori i rituali di controllo"
      ],
      env: [
        "Ambiente prevedibile e rassicurante",
        "Ridurre stimoli e pressioni",
        "Un luogo quieto dove ricomporre il respiro"
      ],
      scenes: ["anxiety", "hyperventilation", "panic", "fixation"],
      ng: [
        "Liquidare con «ti preoccupi troppo»",
        "Esporre a forza alla situazione temuta",
        "Vietare i controlli con la forza"
      ],
      src: "NICE (linee guida disturbi d'ansia/DOC)"
    },
    {
      id: "ptsd", name: "PTSD, ferite dell'attaccamento", emoji: "🕯️",
      short: "Un vissuto doloroso che continua ancora oggi",
      what: [
        "Un vissuto doloroso del passato (maltrattamenti, catastrofi, incidenti…) che continua sotto forma di flashback, ipersensibilità, evitamento. C'è chi porta anche ferite dell'attaccamento.",
        "Non è «esagerazione» né «acqua passata»: è una reazione che dura tuttora.",
        "Sicurezza, serenità e la fiducia accumulata «di questa persona mi posso fidare» sono la base della guarigione."
      ],
      comm: [
        "Non toccare all'improvviso, non avvicinarsi da dietro (non spaventare)",
        "Lasciare margine per scegliere e rifiutare (il senso di controllo rassicura)",
        "Mantenere le promesse, accumulare piccole fiducie"
      ],
      env: [
        "Ambiente sicuro e prevedibile. Evitare voci alte e avvicinamenti bruschi",
        "Sapere che certi suoni, luoghi, situazioni fanno da innesco",
        "Durante un flashback, comunicare con calma: «adesso è al sicuro»"
      ],
      scenes: ["panic", "anxiety", "selfharm"],
      ng: [
        "Costringere a raccontare il vissuto",
        "Spaventare, contatti fisici improvvisi",
        "Trattare le reazioni come «capricci»"
      ],
      src: "NICE (linee guida PTSD) / principi del trauma-informed care"
    },
    {
      id: "epi", name: "Epilessia", emoji: "🧠",
      short: "Crisi dovute a un disordine cerebrale passeggero",
      what: [
        "Un disordine elettrico passeggero del cervello provoca le «crisi». Le forme variano: dalle convulsioni al restare assenti per un attimo.",
        "Fuori dalle crisi, la maggior parte vive normalmente. Non sono «persone pericolose».",
        "Contano la risposta calma durante la crisi e la conoscenza della «regola dei 5 minuti»."
      ],
      comm: [
        "La crisi non dipende dalla volontà. Vegliate con calma",
        "Dopo la crisi può esserci confusione. Lasciate riposare senza fretta",
        "Conoscete in anticipo il «tipo di crisi» della persona e le indicazioni del medico"
      ],
      env: [
        "Prevenire le ferite (attenzione a spigoli, zone d'acqua, altezze, bagno)",
        "Registrare le crisi (orario, svolgimento) e condividere",
        "Sostenere con discrezione la gestione dei farmaci"
      ],
      scenes: ["medical"],
      ng: [
        "Mettere qualcosa in bocca (errore; causa soffocamento e ferite)",
        "Bloccarla",
        "Far mangiare o bere subito dopo la crisi"
      ],
      src: "Epilepsy Foundation e CDC USA «Stay·Safe·Side» / Associazione giapponese per l'epilessia"
    },
    {
      id: "abi", name: "Danno cerebrale acquisito (funzioni cognitive superiori)", emoji: "🧭",
      short: "Disabilità invisibile dopo incidenti o malattie",
      what: [
        "Dopo un incidente o una malattia (trauma cranico, ictus…), memoria, attenzione, organizzazione, controllo delle emozioni risultano compromessi in modo poco visibile.",
        "Dall'esterno non si nota: si fraintende con «è cambiato». Anche la persona stessa è disorientata.",
        "Restano molte capacità. Gli accorgimenti che compensano le difficoltà allargano la vita quotidiana."
      ],
      comm: [
        "Una cosa alla volta, in breve. Affiancate promemoria e reminder",
        "Quando le emozioni salgono facilmente: ridurre gli stimoli, non accusare",
        "Non rinfacciare «te l'ho appena detto» (è un disturbo della memoria)"
      ],
      env: [
        "Procedure e programmi in forma visibile (promemoria, agende, sveglie)",
        "Ambiente quieto e senza distrazioni",
        "Stabilizzare con stesse procedure, stessi luoghi"
      ],
      scenes: ["shouting", "anxiety", "freeze"],
      ng: [
        "Fraintendere come «pigrizia» o «capriccio»",
        "Dare molte istruzioni in una volta",
        "Far notare ripetutamente ciò che non riesce"
      ],
      src: "Conoscenze generali sul supporto ai danni delle funzioni cognitive superiori (Centro nazionale di riabilitazione, Giappone, ecc.)"
    },
    {
      id: "sbd", name: "Disturbi gravi del comportamento", emoji: "🆘",
      short: "Autolesionismo, aggressioni ecc.: stato che richiede supporto intensivo",
      what: [
        "Uno «stato» — non una diagnosi — in cui autolesionismo, aggressioni, fissazioni intense, distruzione avvengono con frequenza e intensità così alte da richiedere un supporto particolarmente intensivo.",
        "La persona non è «una persona problematica»: è «in difficoltà». Sullo sfondo ci sono il non riuscire a farsi capire e il disallineamento con l'ambiente.",
        "Con il Positive Behaviour Support (PBS), leggendo le ragioni del comportamento e adattando l'ambiente, le cose cambiano molto."
      ],
      prepare: [
        "Il vero palcoscenico del supporto è «prima che il comportamento avvenga». Uscite ed eventi cominciano dal tessere con cura un piano sostenibile.",
        "Fare in modo che la persona abbia prospettiva e consenso (dove, cosa, per quanto, cosa succede dopo — condivisi in anticipo).",
        "Un percorso che eviti stimoli penosi, affollamento, attese. Decidere prima luogo di pausa, momento del rientro, via d'uscita.",
        "Non cercare di rimediare dopo il panico — è solo doloroso per tutti. Registrare ciò che ha funzionato / ciò che è stato pesante e riversarlo nel piano successivo."
      ],
      comm: [
        "Cercare la «funzione (ragione)» del comportamento (richiesta, evitamento, attenzione, sensazione)",
        "Far crescere i mezzi per comunicare (carte, dispositivi)",
        "Coinvolgersi intensamente proprio quando le cose vanno bene"
      ],
      env: [
        "Ridurre stimoli, richieste, crolli di prevedibilità (strutturazione, bassa stimolazione)",
        "Registrare innesco → comportamento → esito e analizzare in équipe",
        "Non affidarsi a contenzione e rimproveri. Coordinarsi con specialisti e medicina"
      ],
      scenes: ["selfharm", "aggression", "runaway", "panic", "fixation", "shouting"],
      ng: [
        "Reprimere con la forza, fermare con i rimproveri",
        "Continuare a cedere alle richieste per tamponare",
        "Portare il peso da soli o in una sola struttura"
      ],
      src: "Manuale di formazione per operatori dei disturbi gravi del comportamento (Nozominosono, Giappone) / NICE NG11 (PBS)"
    }
  ],

  /* ===== Imparare: il consiglio del giorno ===== */
  hints: [
    "I suggerimenti di supporto sono solo «tendenze». La persona davanti a voi è sempre il primo libro di testo.",
    "Il comportamento ha sempre una ragione. Basta vedere «una persona in difficoltà» invece di «una persona difficile» perché la risposta cambi.",
    "Con una prospettiva, le persone si calmano. Dire prima «cosa viene dopo» è la più grande prevenzione.",
    "I cambiamenti non all'improvviso, ma in coppia con il preavviso. Il «cambiamento improvviso» tende a essere lo stress peggiore.",
    "Forme «visibili» più che parole. Immagini, foto, scritte, oggetti reali a volte comunicano molte volte più delle parole.",
    "«Camminiamo» invece di «non correre». Il comportamento desiderato, in forma affermativa, arriva meglio del divieto.",
    "Una cosa alla volta. Istruzioni brevi e concrete. «Per bene» e «come si deve» sono in realtà le parole che arrivano meno.",
    "Lodate concretamente «nell'attimo» della riuscita. Col passare del tempo, la lode non arriva più.",
    "Coinvolgetevi molto proprio nei momenti tranquilli. Se ci si avvicina solo nei problemi, il problema diventa «il modo per chiamare».",
    "La contenzione è a un passo da ferite, fiducia persa, maltrattamento. Prima di tutto distanza e meno stimoli.",
    "In pieno panico, spiegazioni e persuasione non arrivano. Prima ridurre gli stimoli e aspettare che si calmi.",
    "Il vero palcoscenico del supporto è «prima che accada». Preparazione e piano creano la serenità del giorno.",
    "Le uscite, pianificatele con cura. Luogo di pausa, momento del rientro, via d'uscita decisi prima: tutti più tranquilli.",
    "Prima della buona risposta, non fare «ciò che non va fatto». Già solo questo riduce di molto gli incidenti.",
    "Per il registro bastano pochi secondi. Conservare «innesco → comportamento → esito» alleggerisce il supporto successivo.",
    "Non portate il peso da soli. Ciò che vi colpisce, all'équipe e al responsabile. Condividere presto protegge la persona.",
    "Il «no» e il «non lo so» della persona sono segnali preziosi. Prima di tutto accogliete il fatto che sia riuscita a dirlo.",
    "Poter scegliere dà sicurezza. Invece di «c'è solo questo»: «A o B, quale preferisci?».",
    "I sensi variano da persona a persona. Abbagliante, rumoroso, che punge — per lei forse è uno stimolo penoso.",
    "Anche i comportamenti che sembrano «capricci» hanno spesso ragioni e strategie proprie. Non etichettate.",
    "La fissazione è l'ingegno che rende prevedibile un mondo inquietante. Più che toglierla, allargate la sicurezza.",
    "«Forza!» a volte mette alle strette. A chi è abbattuto, prima di tutto accogliete la sofferenza.",
    "Allucinazioni e deliri: né negare né confermare. «È angosciante, vero» — state accanto al sentimento.",
    "Ingoiate il «te l'ho appena detto». Dimenticare può far parte della caratteristica.",
    "Niente trattamento infantile. Anche se capisce lentamente, rispetto adeguato all'età.",
    "Anche aspettare è supporto a pieno titolo. C'è chi ha solo bisogno di tempo per il passaggio: se si aspetta, riparte.",
    "Non forzate il contatto visivo. Per qualcuno incrociare lo sguardo è penoso.",
    "Non spaventate. Avvicinarsi di colpo da dietro, toccare all'improvviso: da evitare.",
    "Mantenete le promesse. L'accumulo di piccoli «è stato mantenuto» diventa fiducia.",
    "Durante una crisi, mettere qualcosa in bocca è un errore: causa soffocamento e ferite. Con calma, cronometrate.",
    "Il sacchetto di carta per l'iperventilazione oggi è NO. Rischio di ipossia. Sostenete accanto l'espirazione lenta.",
    "La medicina alla medicina, il supporto al supporto. Nelle situazioni mediche dubbie: senza esitare, emergenza e indicazioni del medico.",
    "Quando i mezzi per comunicare crescono, urla e aggressioni possono diminuire. Anche carte e dispositivi sono «parole».",
    "Il suo «preferito» è il vostro migliore alleato. Attività, oggetto, argomento amati: la scorciatoia verso la sicurezza.",
    "La calma dell'operatore è, sul posto, il primo fattore che rassicura.",
    "Abbiate cura anche di voi. Se l'operatore crolla, il supporto finisce. Anche riposare fa parte del lavoro.",
    "Il comportamento ha «segnali premonitori» (irrequietezza, voce che sale, movimenti che cambiano). Le piccole risposte prima che l'onda raggiunga la cresta sono le più efficaci.",
    "Subito dopo la calma arriva un fragile periodo di recupero, in cui tutto può riaccendersi. Prima acqua e riposo; riprendete attività e richieste a poco a poco.",
    "Prima di toccare per assistere, avvisate sempre con una parola («ora le tocco il braccio»). Il contatto non annunciato semina paura e reazioni difensive.",
    "Invece di mettervi di fronte, state in diagonale o fianco a fianco. La pressione cala — e si può parlare guardando lo stesso paesaggio.",
    "Il tono della voce arriva prima delle parole. Basso, lento, con poche parole.",
    "Se il comportamento aumenta all'improvviso, sospettate prima del corpo (dolore, fame, sonno, stitichezza, caldo). Il malessere che non si riesce a dire esce come comportamento.",
    "Anche etichette, cuciture e tessuti dei vestiti riguardano la sensibilità sensoriale. La comodità degli abiti è parte del supporto.",
    "In un posto nuovo, individuate prima le uscite, i bagni e un angolo tranquillo per riposare: rassicura entrambi.",
    "Trattatela da adulta. Può servire aiuto, ma a decidere è la persona.",
    "Non parlate della persona davanti a lei come se non ci fosse. La dignità abita nei dettagli.",
    "Quando qualcosa non va, rivedete il progetto del supporto, non la persona. Nell'istante in cui è «colpa sua», il supporto si ferma.",
    "Nei registri, separate ciò che avete visto (fatti) da ciò che avete pensato (supposizioni): rende al supporto successivo.",
    "Provate le novità una alla volta. Cambiando tutto insieme, non si saprà mai cosa ha funzionato.",
    "Darsi il cambio non è una sconfitta: è tecnica. Quando ci si incaglia, cambiare persona cambia l'aria. Quel margine è la forza della squadra.",
    "Prima di parlare, dite il nome. Solo sapere che le parole sono rivolte a lei cambia il modo in cui arrivano.",
    "Meglio «quando suona il timer» che «ancora cinque minuti». Il tempo arriva quando diventa uno strumento visibile.",
    "Rendete visibile l'attesa — che si veda cosa si sta aspettando. Il tempo vuoto diventa tempo d'ansia.",
    "Il posto di sempre, il solito angolo. Il posto fisso è un fondamento di sicurezza. Non cambiatelo senza necessità.",
    "Le cuffie antirumore e gli occhiali da sole non sono «vizi»: sono strumenti, come gli occhiali da vista. Da usare a testa alta.",
    "Tenete una lista di suoni, luci e odori difficili (una mappa sensoriale). Sistemare l'ambiente diventa molto più rapido.",
    "«Ancora una volta e abbiamo finito» — annunciare la fine conta quanto annunciare l'inizio.",
    "Registrate anche le giornate buone. Le risposte che hanno funzionato sono il tesoro della squadra.",
    "Non «non può», ma «non l'ha ancora imparato». Cambia lo sguardo e appare la mossa successiva.",
    "Le scale si salgono un gradino alla volta. Saltando i piccoli passi, la salita diventa impossibile.",
    "Non aiutate troppo. Anche se ci vuole tempo, il «ce l'ho fatta da solo» diventa la forza successiva.",
    "Nel programma visivo, togliete (o girate) le voci concluse. La sensazione di avanzare diventa serenità.",
    "Come premio, il tempo di un'attività preferita batte gli oggetti. Dura di più e si ingarbuglia meno.",
    "Visti i segnali, cambiate luogo. Il cambio d'ambiente è la mossa più semplice e potente che ci sia.",
    "Nel pieno del pianto e delle urla non serve trovare le parole giuste. Servono sicurezza e tempo.",
    "Sedersi accanto e guardare la stessa cosa. Il «tempo in parallelo» fa crescere la fiducia in silenzio.",
    "Non parlare non significa non capire. La capacità di comprendere e quella di esprimersi sono cose diverse.",
    "Non fidatevi troppo del «sì». Ci sono sì detti perché non c'era altro da dire. Verificate con l'azione.",
    "Gesti, indicare, oggetti reali. La parola è solo uno degli strumenti per comunicare.",
    "Il sonno sregolato porta dritto al comportamento sregolato. Sapere se dorme è anch'esso supporto.",
    "La selettività alimentare può essere sensoriale, non un capriccio. Invece di forzare: forma, temperatura, consistenza.",
    "Prospettiva anche in viaggio: «dove, per cosa, quanto tempo» — prima di salire.",
    "Il «bentornato» al rientro. Un'accoglienza stabile sostiene la serenità della prossima uscita.",
    "La comprensione altrui non si costruisce in un giorno. Tenete pronti un simbolo di aiuto o una breve carta di spiegazione.",
    "Scrivere i registri è solo metà del lavoro. Prendono vita quando la squadra si dà il tempo di rileggerli.",
    "Se affiora un «ancora?!», è un segnale di riposo. La fatica smussa il giudizio in silenzio.",
    "Dopo un intervento duro, passate sempre le consegne. Fatica e informazioni pesano meno condivise.",
    "I suoi soldi, le sue cose: non «amministrare», ma «pensare insieme a come usarli». I diritti sono suoi.",
    "Ciò che funzionava l'anno scorso può non funzionare oggi. Le persone cambiano — anche il supporto può cambiare.",
    "Non dimenticate i «grazie» tra colleghi. L'aria della squadra arriva alla persona così com'è."
  ],

  /* ===== Imparare: quiz di casi (imparare il «perché», più che giusto/sbagliato) ===== */
  quizzes: [
    {
      q: "Una persona assistita è in preda a un forte panico. Cosa fate per prima cosa?",
      options: ["Richiamarla a voce alta: «Calmati!»", "Smettere di parlarle, ridurre persone e stimoli, aspettare che si calmi", "Afferrarle il braccio e spostarla da lì"],
      answer: 1,
      explain: "In pieno panico, parole e stimoli non vengono elaborati e peggiorano la situazione. Prima si smette di parlarle, si riducono persone, suoni, luci e si resta accanto in silenzio in un luogo sicuro. Aspettare che si calmi è la risposta più rapida."
    },
    {
      q: "Una fissazione su un ordine preciso blocca l'attività. La scelta buona?",
      options: ["Interromperla con la forza e passare oltre", "Se non è pericoloso, assecondarla rendendo visibile la fine («ancora 3 volte» ecc.)", "Sostituire di nascosto con un altro oggetto"],
      answer: 1,
      explain: "La fissazione è la strategia di sicurezza della persona. Fermarla con la forza o ingannarla fa perdere la fiducia e la volta dopo sarà più forte. Il trucco: assecondare e rendere visibile la «fine» con un timer o «ancora X volte»."
    },
    {
      q: "C'è un'aggressione e arrivano due rinforzi. Cosa si fa per primo?",
      options: ["Tutti insieme a circondare la persona per fermarla", "Dividersi i ruoli (uno gestisce la persona, uno allontana gli altri utenti)", "Andarsene tutti"],
      answer: 1,
      explain: "Quando arrivano i rinforzi, è più sicuro «dividersi i ruoli» che convergere in un punto: uno affronta la persona con calma, gli altri allontanano utenti e passanti. Circondare e concentrare l'attenzione non fa che alimentare l'agitazione."
    },
    {
      q: "Una persona assistita scappa fuori all'improvviso. Come inseguirla?",
      options: ["Correre a tutta forza dritto dietro di lei", "Seguirla in parallelo restando nel suo campo visivo e chiudere le direzioni pericolose (carreggiata ecc.)", "Per non perderla, continuare a chiamarla per nome a voce alta"],
      answer: 1,
      explain: "L'inseguimento da dietro diventa una «gara» e accelera. Anche gridare può rafforzare la fuga. Di lato, restando visibili, chiudere prima carreggiata, binari, zone d'acqua. E presto: rinforzi e segnalazione."
    },
    {
      q: "È in corso una crisi convulsiva. Cosa NON si deve fare?",
      options: ["Guardare l'ora d'inizio e cronometrare", "Mettere in bocca una bacchetta o un asciugamano", "Sostenerla se rischia di cadere e allontanare gli oggetti pericolosi"],
      answer: 1,
      explain: "Mettere qualcosa in bocca «per evitare che si morda la lingua» è un errore: causa soffocamento e ferite a denti e mandibola. Da fare: mettere in sicurezza e cronometrare la crisi. Oltre 5 minuti, ripetuta, con ferite, in acqua: emergenza."
    },
    {
      q: "Attacco di iperventilazione. La risposta corretta?",
      options: ["Farla respirare in un sacchetto di carta", "Restarle accanto e sostenere con la voce l'espirazione lenta", "Dire con forza «Calmati!» per farla rinvenire"],
      answer: 1,
      explain: "Il metodo del sacchetto comporta rischio di ipossia e oggi non è raccomandato. Da fare: restare accanto in un luogo tranquillo e accordare la voce all'espirazione — «espiri piano». Si resta lì fino alla calma."
    },
    {
      q: "Prima uscita in un posto nuovo con una persona con disturbi gravi del comportamento. La cosa più importante?",
      options: ["Il giorno stesso, improvvisare secondo ciò che accade", "Tessere con cura il piano in anticipo, perché la persona abbia prospettiva e consenso", "Riempire il programma al massimo per una giornata piena"],
      answer: 1,
      explain: "Il vero palcoscenico del supporto è «prima che accada». Gestire un comportamento già esploso è difficile e doloroso per tutti. Condividere prima dove-cosa-quanto-e-poi, e decidere in anticipo luogo di pausa e momento del rientro: è questo il miglior supporto."
    },
    {
      q: "«Aspetta ancora un po', da bravo.» Qual è il modo che arriva di più?",
      options: ["«Quando l'orologio segna le 3, andiamo. Fino ad allora aspettiamo seduti sulla sedia»", "«Fai il bravo, eh?»", "«Finisce subito, porta pazienza»"],
      answer: 0,
      explain: "«Da bravo», «ancora un po'», «per bene» sono in realtà le parole che arrivano meno. Quando, cosa e come — detti in modo concreto e visibile — arrivano."
    },
    {
      q: "Per lodare una riuscita, quando?",
      options: ["A fine giornata, tutto insieme", "«Nell'attimo stesso», concretamente", "Al prossimo insuccesso, facendo confronti"],
      answer: 1,
      explain: "Con il ritardo, la lode non arriva più. Non «bravo», ma «ti sei messo le scarpe da solo!» — nell'attimo della riuscita, concretamente. Capire per cosa si è lodati porta alla volta successiva."
    },
    {
      q: "Parole per chi è profondamente abbattuto. Cosa evitare?",
      options: ["Accogliere: «È stata dura, vero»", "Incoraggiare: «Forza! Tutti soffrono»", "Restare accanto in silenzio"],
      answer: 1,
      explain: "La depressione non si cura con la volontà. «Forza» e i paragoni con gli altri possono mettere ancora più alle strette. Prima accogliere la sofferenza. E il lamento «voglio morire» mai sminuirlo: subito medici e famiglia."
    },
    {
      q: "«Dal muro escono insulti», dice spaventata. Cosa fate?",
      options: ["Correggere i fatti: «Non c'è nessuna voce»", "Stare accanto al sentimento («Fa paura, vero») e spostare verso ciò che rassicura", "«Cosa dicono?» — ascoltare insieme"],
      answer: 1,
      explain: "Per la persona si sente davvero. Non si nega discutendo, né si asseconda ingigantendo. La questione non è la verità ma l'«ansia». Stare accanto al sentimento e ricondurre piano a un'attività reale e rassicurante. Se aumenta: consulto medico."
    },
    {
      q: "Al supermercato si agita di colpo e inizia a tapparsi le orecchie. Il primo sospetto?",
      options: ["Lo fa apposta per mettere in difficoltà", "Una sofferenza sensoriale: rumori, luci, folla", "Ha solo fame"],
      answer: 1,
      explain: "Nello spettro autistico e non solo, i sensi possono essere molto sensibili. Musica di sottofondo, illuminazione, brusio sono forse stimoli penosi per lei. Spostarsi in un luogo tranquillo, usare cuffie antirumore: ridurre gli stimoli."
    },
    {
      q: "La situazione si è calmata. La cosa importante fattibile in pochi secondi?",
      options: ["Non serve fare nulla di particolare", "Registrare innesco → comportamento → esito e condividerlo", "Far scrivere alla persona una lettera di scuse"],
      answer: 1,
      explain: "Anche solo annotare in breve «qual è stato l'innesco» prepara la prossima prevenzione. I registri di innesco × risposta accumulati diventano il «manuale d'uso» di quella persona. Non da soli: condividete in équipe."
    },
    {
      q: "Rifiuta ostinatamente il farmaco. La risposta buona?",
      options: ["Bloccarla e farglielo prendere", "Ritirarsi e lasciar passare tempo; se continua, consultare medico o farmacista", "Mescolarlo di nascosto nel pasto"],
      answer: 1,
      explain: "Il rifiuto ha ragioni (difficile da ingoiare, effetti collaterali pesanti, senso non capito). Forzare fa perdere la fiducia. Ritirarsi e lasciar passare tempo, cambiare forma o momento. Se continua: senza decidere da soli, a medico o farmacista. Mescolare di nascosto solo con l'accordo di medico e famiglia."
    },
    {
      q: "È irrequieta e la voce sale: avete colto i «segnali premonitori». Quando agire?",
      options: ["Non è ancora successo nulla: osservo", "Alla fase dei segnali: riduco gli stimoli e propongo una pausa", "Aspetto che il comportamento esploda, poi rispondo con tutte le forze"],
      answer: 1,
      explain: "Il comportamento sale come un'onda. Sulla cresta, parole e accorgimenti arrivano appena. Le piccole risposte alla fase dei segnali (meno stimoli, una pausa, cambiare posto) agiscono con il minimo logorio. Registrare e condividere gli schemi dei segnali diventa un tesoro della squadra."
    },
    {
      q: "Il panico si è appena calmato. La mossa successiva?",
      options: ["Riprendere subito l'attività interrotta", "Acqua e riposo; riprendere piano, osservando come sta", "Farla riflettere perché non accada mai più"],
      answer: 1,
      explain: "Subito dopo la calma si apre un «periodo di recupero»: corpo e mente esausti, la ricaduta è facile. Riproporre le richieste troppo presto può riaccendere tutto. Prima acqua e riposo, ripresa per gradi. Prediche e riflessioni in quel momento non arrivano."
    },
    {
      q: "Prima di toccare il corpo per aiutare a cambiarsi, cosa viene prima?",
      options: ["Avvisare con una parola: «ora le tocco il braccio»", "Finire in fretta e in silenzio per non spaventare", "Sostenere da dietro e spostarla prima"],
      answer: 0,
      explain: "Il contatto non annunciato scatena paura e reazioni difensive (divincolarsi, colpire). Soprattutto con chi ha vissuto traumi o ha sensibilità sensoriale, la base è: da una posizione visibile, dopo una parola. Prima la velocità della sicurezza, poi quella del compito."
    },
    {
      q: "Nel proporre attività tra cui scegliere, quale forma passa meglio?",
      options: ["Ridurre a due: «A o B, quale preferisci?»", "Disporre più opzioni possibile per una scelta libera", "Decidere al posto suo per non farla faticare"],
      answer: 0,
      explain: "Poter scegliere rassicura — ma troppe opzioni diventano una nuova ansia. Con due (al massimo tre) si sceglie con calma. La sensazione stessa di «ho deciso io» dà forza al passo successivo."
    },
    {
      q: "In questi giorni il comportamento è aumentato all'improvviso. Cosa controllare prima?",
      options: ["Pensare che i capricci siano peggiorati", "Inasprire le punizioni per fermarlo", "Controllare il corpo (dolore, fame, sonno, stitichezza) e i cambiamenti dell'ambiente"],
      answer: 2,
      explain: "Un cambiamento brusco del comportamento indica anzitutto malessere fisico o un ambiente cambiato. Mal di denti, otite, stitichezza, sonno perso: il disagio indicibile esce come comportamento. Non «è cambiato il carattere», ma «sta accadendo qualcosa». Controllate anche la storia clinica."
    },
    {
      q: "In treno si tappa le orecchie e si accovaccia. La gente comincia a radunarsi. Prima?",
      options: ["Alzarla: la priorità è scendere alla prossima fermata", "Fare da muro con il corpo, tagliare gli sguardi e dire breve: «va tutto bene»", "Spiegare la situazione ad alta voce a tutti"],
      answer: 1,
      explain: "Gli sguardi che si radunano sono di per sé uno stimolo forte. Prima fate da muro: interrompete le linee di vista e la folla, con una frase breve all'intorno. Spostarla può attendere la calma — la decisione di scendere viene dopo."
    },
    {
      q: "Una crisi epilettica è finita in 3 minuti; la persona è stordita. Ora?",
      options: ["Rialzarla e farla camminare subito per verificare la coscienza", "Vegliare in posizione laterale di sicurezza; registrare durata e dettagli", "Dare acqua e zucchero"],
      answer: 1,
      explain: "Dopo la crisi lo stordimento può continuare. Vegliate in silenzio in posizione laterale di sicurezza, registrate quanto è durata e com'era, informate medico e famiglia. Mangiare o bere subito comporta rischio di soffocamento; forzare la marcia, rischio di caduta."
    },
    {
      q: "Quale modo di scrivere i registri aiuta di più il supporto successivo?",
      options: ["Centrato sulle impressioni: «è stato arrabbiato tutto il tempo»", "Con i fatti: «ore 15, prima della merenda, voce alta 10 min, calmato cambiando posto»", "Lungo e dettagliato, come un racconto"],
      answer: 1,
      explain: "Il trucco è separare ciò che avete visto (fatti) da ciò che avete pensato (supposizioni). Quando, dove, cosa e cosa ha aiutato — in breve. I fatti accumulati fanno emergere gli schemi dei fattori scatenanti: il progetto del supporto successivo."
    },
    {
      q: "Un collega in piena gestione si sta incagliando; il viso si indurisce. Cosa è bene fare?",
      options: ["Dire «ti do il cambio» e subentrare", "Lasciare che finisca da solo fino in fondo", "Non dire nulla ora e farlo notare poi in riunione"],
      answer: 0,
      explain: "La tensione e l'irritazione dell'operatore raggiungono anche la persona. Darsi il cambio quando ci si incaglia non è sconfitta: è tecnica. Spesso basta cambiare persona perché cambi l'aria. Una squadra dove il cambio si può offrire e accettare protegge la persona."
    },
    {
      q: "Una familiare confida: «a casa è durissima… forse l'ho cresciuto male». Prima?",
      options: ["Correggere: «dovete cambiare metodo»", "Riconoscere — «ha sostenuto tutto questo fin qui» — e chiederle cosa funziona a casa", "Spiegare unilateralmente il metodo della struttura"],
      answer: 1,
      explain: "La famiglia è l'operatrice più anziana di tutte: sostiene la persona da più tempo di chiunque. Prima di correggere o istruire, riconoscere. Ciò che funziona a casa è un indizio prezioso. Alla fine, è la relazione di collaborazione a sostenere meglio la persona."
    },
    {
      q: "Vorreste avviare insieme carte illustrate, un nuovo programma e un cambio di posto. Che fare?",
      options: ["Cambiare tutto in una volta per massimizzare l'effetto", "Provare una cosa alla volta, verificando l'effetto", "Non cambiare nulla: i cambiamenti confondono"],
      answer: 1,
      explain: "Cambiando molte cose insieme non si capisce cosa ha funzionato (né cosa non andava), e il carico sulla persona cresce. Le novità una alla volta, confermate dai registri. Il trucco non è evitare il cambiamento: è cambiare in ordine."
    },
    {
      q: "La persona mormora: «voglio morire». Cosa fate?",
      options: ["Cambiare argomento: «non dire queste cose»", "Prenderla sul serio, ascoltare e collegare presto responsabile e area medica", "È un'abitudine: lasciar correre"],
      answer: 1,
      explain: "Ogni accenno al desiderio di morire va preso sul serio, qualunque sia la frequenza. Senza negare né deviare: prima ascoltare. E non portarlo da soli: informare il responsabile in giornata e condividere con medicina e famiglia. «Non lasciar correre» è il primo passo per proteggere una vita."
    },
    {
      q: "Pianificate un'uscita in un posto nuovo. Cosa rassicura decidere per primo?",
      options: ["Il negozio dei souvenir", "Dove riposare, quando rientrare e da dove uscire", "I punti per le foto"],
      answer: 1,
      explain: "Importante quanto il programma dei divertimenti: dove riposare se ci si stanca, quale segnale indica il rientro, da dove si esce. Decidere prima le vie di fuga e la chiusura dà margine all'operatore — e quel margine diventa la serenità della persona."
    },
    {
      q: "Il supporto va male da giorni. Un buon modo di pensarla?",
      options: ["Concludere di non essere adatti a questo lavoro", "Considerarlo l'occasione di rivedere il progetto del supporto e consultare la squadra", "Arrendersi: la disabilità è troppo grave"],
      answer: 1,
      explain: "Quando non funziona, si rivede il progetto (ambiente, comunicazione, programma, stimoli) — non una persona. Colpevolizzare sé o la persona non fa avanzare nulla. Portare i registri e rivedere in squadra: è così che i professionisti attraversano i loro «giorni storti»."
    },
    {
      q: "Dire «il prossimo passo» a chi si è bloccato: in che modo?",
      options: ["«Sbrigati, facciamo tardi!»", "«Dopo questo, il tè»: corto, una cosa sola, in forma visibile", "Spiegare l'intero programma della giornata dall'inizio alla fine"],
      answer: 1,
      explain: "Quando la transizione richiede tempo per essere elaborata, aggiungere informazioni manda in overflow. Solo la prossima cosa: corta, concreta e, se possibile, visibile. Le parole che mettono fretta rendono l'elaborazione ancora più pesante."
    },
    {
      q: "Passanti ben intenzionati si radunano: «tutto bene?!». Una buona risposta?",
      options: ["Spiegare in dettaglio diagnosi e vicenda perché capiscano", "Dire breve: «tutto bene, un attimo e si calma», e tagliare gli sguardi", "Ignorarli e concentrarsi sulla gestione"],
      answer: 1,
      explain: "Anche l'attenzione ben intenzionata è uno stimolo per la persona. Una frase breve rassicura chi sta intorno e dirada capannello e sguardi: questo è vero supporto. Non serve rivelare dati privati come la diagnosi. Ignorare può finire in una chiamata ai soccorsi: una frase — una sola — è la misura giusta."
    },
    {
      q: "Avete dato un'indicazione e non c'è risposta. Cosa rivedere per primo?",
      options: ["Ripetere a voce più alta", "Dire il nome, verificare che l'attenzione sia su di voi, poi dire in breve", "Prenderla per mano e spostarla"],
      answer: 1,
      explain: "Parole che arrivano da chissà dove sono difficili da riconoscere come «rivolte a me». Prima il nome. Verificate che l'attenzione sia su di voi, poi dite in breve. Non conta il volume: conta l'ordine d'arrivo."
    },
    {
      q: "Ha risposto «sì» a «hai capito?», ma l'azione non segue. Come pensarla?",
      options: ["Forse era un «sì» per mancanza d'altro. Verificare facendo fare davvero", "Ha mentito: riprenderla", "Rispiegare a voce più alta"],
      answer: 0,
      explain: "Ci sono sì detti perché la domanda non lascia altra uscita. Non colpevolizzate: cambiate il modo di verificare. Più che chiedere «hai capito?», fate fare davvero. L'azione conferma la comprensione meglio delle parole."
    },
    {
      q: "Mangia solo riso in bianco e pane. Una buona risposta?",
      options: ["Per la salute, non servire nulla finché non mangia altro", "Può essere sensoriale. Senza forzare: variare forma e temperatura e consultare medicina e nutrizione", "È una sua scelta: non fare nulla"],
      answer: 1,
      explain: "La selettività estrema spesso non è capriccio, ma sensibilità sensoriale a gusto, consistenza, aspetto. Forzare trasforma il pasto stesso in paura. Piccoli aggiustamenti di forma e temperatura, e il lato nutrizionale con i professionisti."
    },
    {
      q: "La famiglia riferisce che ultimamente non dorme. Anche il giorno è agitato. Prima cosa?",
      options: ["Aumentare l'attività diurna per stancarla", "Irrigidire la risposta al comportamento", "Registrare il sonno e condividerlo con il medico"],
      answer: 2,
      explain: "Il sonno sregolato porta dritto al comportamento sregolato. Prima annotare quando si addormenta, quando si sveglia, come va la notte — poi dal medico. La causa (farmaci, salute, ambiente, ansia) si valuta con la medicina. Irrigidire solo il giorno non cambia la radice."
    },
    {
      q: "Con il programma visivo, quale uso dà più serenità?",
      options: ["Togliere (o girare) le voci concluse", "Lasciare tutto il programma com'è", "Non lasciarglielo toccare"],
      answer: 0,
      explain: "Vedere fin dove si è arrivati dà prospettiva su ciò che resta — e questo rasserena. Se è la persona stessa a togliere o girare le voci finite, nasce anche il senso di riuscita. Il programma non è la tabella dell'operatore: è lo strumento della persona."
    },
    {
      q: "Come premio per l'impegno, cosa dura di più?",
      options: ["Comprare qualcosa di costoso", "Tempo di un'attività preferita (musica, passeggiata…)", "Dolcetti ogni volta"],
      answer: 1,
      explain: "I premi in oggetti e cibo tendono a crescere su se stessi o a ingarbugliarsi con la salute. Il «tempo dell'attività preferita» è la gioia stessa della persona, entra facilmente nel quotidiano e dura. Sapere cosa ama è già forza di supporto."
    },
    {
      q: "Un compito sta richiedendo molto tempo. Fin dove aiutare?",
      options: ["Vegliare accanto e aiutare al minimo solo dove si inceppa", "È tempo perso: fare tutto al posto suo", "Non toccare nulla finché non ce la fa"],
      answer: 0,
      explain: "Fare tutto al posto suo ruba l'esperienza del «ce l'ho fatta da solo», e le capacità si riducono piano piano. Ma abbandonarla non è giusto nemmeno. Osservare, e sostenere con delicatezza nel solo punto dell'inciampo. Metterci tempo non è fallire."
    },
    {
      q: "Inizio della relazione. Quale vicinanza fa crescere la fiducia?",
      options: ["Fare molte domande per raccogliere informazioni", "Sedersi accanto e accumulare tempo facendo insieme la stessa attività", "Tenere le distanze e limitarsi a osservare"],
      answer: 1,
      explain: "Le domande frontali possono sembrare un interrogatorio. Il «tempo in parallelo» — fianco a fianco, guardando la stessa cosa — costruisce il «questa persona è sicura» anche senza parole. La fiducia viene prima della raccolta di informazioni."
    },
    {
      q: "I viaggi in treno tendono a farsi rumorosi. Prevenzione efficace?",
      options: ["Far promettere di scendere alla prossima se fa rumore", "Non rivolgerle la parola durante il tragitto", "Prima di salire, dire «dove, per cosa, quanto tempo» e portare qualcosa di rassicurante"],
      answer: 2,
      explain: "Un tragitto senza prospettiva è una scatola d'ansia. Prima di salire mostrare in modo visibile meta e durata, e portare qualcosa che calmi (auricolari, un gioco, delle carte). La prevenzione comincia prima di salire. Annunciare punizioni aggiunge solo ansia."
    },
    {
      q: "In uscita, cosa conviene tenere pronto per la comprensione altrui?",
      options: ["Un simbolo di aiuto o una breve carta di spiegazione", "Una copia del certificato medico dettagliato", "Niente di particolare"],
      answer: 0,
      explain: "Sul momento non c'è tempo per lunghe spiegazioni. Un simbolo di aiuto o una carta breve tipo «scusate se vi abbiamo spaventato — fa parte della sua disabilità» getta un ponte in un attimo. Non serve portare con sé dati privati dettagliati come i certificati."
    },
    {
      q: "I registri si stanno accumulando. Il passo successivo?",
      options: ["Cancellare i più vecchi", "Creare tempo di squadra per rileggerli e cercare gli schemi", "Custodirli in un quaderno personale"],
      answer: 1,
      explain: "Scrivere i registri è solo metà del lavoro. Solo quando la squadra li rilegge e vi trova gli schemi degli inneschi e le risposte efficaci, diventano supporto. Anche breve — ma una revisione periodica."
    },
    {
      q: "Nel pieno dell'intervento affiora un «ancora?!». Questo è…?",
      options: ["Un segnale di fatica. Valutare pausa o cambio", "Un sentimento naturale: continuare così", "Schiacciarlo con la forza di volontà"],
      answer: 0,
      explain: "L'«ancora?!» non dice che siete incapaci — dice che siete stanchi. La fatica smussa il giudizio, filtra nella voce e nel viso, e arriva alla persona. Valutare pausa o cambio non è debolezza: è una tecnica che protegge la persona."
    },
    {
      q: "Un metodo efficace fino all'anno scorso sta perdendo effetto. Come pensarla?",
      options: ["Insistere più forte con lo stesso metodo finché funziona", "La persona può essere cambiata (crescita, nuove circostanze). Aggiornare la lettura", "Concludere che il quadro è peggiorato"],
      answer: 1,
      explain: "Le persone cambiano. La crescita supera un metodo; anche ambiente e salute si spostano. Metodo senza effetto non è peggioramento. Rileggere i registri e aggiornare lettura e metodo su chi è oggi. Il supporto è cosa viva."
    },
    {
      q: "Vi preoccupa come spende la paghetta. Un buon coinvolgimento?",
      options: ["La struttura amministra tutto", "Lasciarla spendere liberamente senza entrarci", "Pensarci insieme (la sua volontà al centro; i piccoli errori diventano apprendimento)"],
      answer: 2,
      explain: "Il denaro è un suo diritto. Amministrare tutto è sicuro ma sottrae il potere di decidere; lasciar correre espone allo sfruttamento. L'asse è «pensare insieme»: accompagnare i piccoli errori come apprendimento e fare da frangiflutti solo davanti ai rischi grandi (sfruttamento, contratti costosi)."
    },
    {
      q: "Sul lavorare con chi non parla, cosa è vero?",
      options: ["Comprendere ed esprimere sono capacità diverse. Leggere anche comportamento, espressione, sguardo", "Non parla = non capisce, quindi si possono saltare le spiegazioni", "Parlando forte e piano arriva"],
      answer: 0,
      explain: "Non parlare e non capire sono cose diverse. Molte persone capiscono benissimo ciò che dite. Non saltate le spiegazioni davanti a lei né trattatela da bambina — ricevete le sue «risposte» anche da espressione, sguardo e postura."
    },
    {
      q: "Un collega dice che le cuffie antirumore sono «viziarla». Come rispondere?",
      options: ["Forse ha ragione: fargliele togliere", "Spiegare che sono «uno strumento, come gli occhiali» — un accomodamento ragionevole per la sensibilità sensoriale — e condividerlo con la squadra", "Lasciar correre"],
      answer: 1,
      explain: "Nessuno chiama «vizio» correggere la vista con gli occhiali. Compensare la sensibilità uditiva con le cuffie è esattamente lo stesso. Quando la squadra condivide il senso dello strumento, la persona può usarlo a testa alta."
    },
    {
      q: "Insiste ogni volta sullo stesso posto e sulla stessa sequenza. La postura di base?",
      options: ["Posto fisso e routine sono fondamenta di sicurezza. Non cambiarli senza necessità", "Cambiare posto ogni volta perché non si annoi", "Rompere apposta la routine per correggere l'insistenza"],
      answer: 0,
      explain: "«Come sempre» è un mondo prevedibile: la sicurezza stessa. Romperlo senza necessità è sfilare le fondamenta. Solo quando il cambiamento è davvero necessario: con preavviso, un poco alla volta."
    },
    {
      q: "Primo incontro con una persona nuova. Cosa chiedere in via prioritaria?",
      options: ["L'elenco dettagliato dei comportamenti problema", "Cosa ama, cosa la rassicura, in cosa è brava", "Tutta la storia di vita"],
      answer: 1,
      explain: "Le informazioni sui problemi si raccolgono anche dopo. Ciò che si vuole prima è «amori, rassicurazioni, talenti» — l'ingresso del supporto e l'uscita dal panico di solito stanno lì. Il supporto che parte dalle forze costruisce anche la relazione più in fretta."
    },
    {
      q: "Siete tornati sani e salvi dall'uscita. La revisione che porta alla prossima?",
      options: ["È andata bene: nessuna revisione", "Elencare solo gli spaventi", "Registrare anche ciò che è andato bene e versarlo nel prossimo piano"],
      answer: 2,
      explain: "Un'uscita riuscita è una miniera d'oro. Conservare «cosa è andato bene» (orario, percorso, effetti personali, parole usate) diventa la base del piano successivo. Registri degli spaventi e registri delle riuscite: insieme fanno il «manuale d'uso»."
    },
    {
      q: "Com'è una persona «brava nel supporto»?",
      options: ["Chi sa fermare il comportamento con la forza", "Chi sa aumentare il tempo che la persona trascorre serena", "Chi anticipa tutto e fa tutto al posto suo"],
      answer: 1,
      explain: "Più delle abilità vistose nella crisi: costruire un quotidiano che non arriva a bollire. Più a lungo la persona vive sentendosi al sicuro, meno momenti difficili esistono in assoluto. Sembra poco appariscente — ed è la competenza più vera."
    }
  ]
};
