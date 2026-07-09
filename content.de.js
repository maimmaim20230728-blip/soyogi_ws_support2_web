/*
 * Soyogi Begleit-Guide - Inhalte (Deutsch)
 * Grundsätze:
 *  - Dies sind Tendenzen und Hinweise, keine Etiketten. Der Mensch vor Ihnen kommt zuerst.
 *  - Keine medizinischen Entscheidungen. Im Zweifel an den örtlichen Notruf / die behandelnde Ärztin, den Arzt verweisen.
 *  - Die Struktur (IDs / Emoji / Antwort-Indizes / Szenen-Verweise) spiegelt exakt content.ja.js.
 */
window.SHIEN_CONTENT = window.SHIEN_CONTENT || {};
window.SHIEN_CONTENT.de = {
  version: 1,

  basis: [
    "Britische NICE NG10 „Gewalt und Aggression: kurzfristiges Management“ (2015) — zuerst Deeskalation ohne Festhalten. Körperliche Fixierung ist das letzte Mittel.",
    "Britische NICE NG11 „Herausforderndes Verhalten und Lernbehinderung“ (2015) — Positive Behaviour Support (PBS): den Grund des Verhaltens verstehen und das Umfeld gestalten. Schließt Unterstützung für Familien und Begleitende ein.",
    "Positive Behaviour Support (PBS) / Low-Arousal-Ansatz — Anforderungen und Reize verringern, keine Konfrontation.",
    "Strukturierte Unterstützung bei Autismus (TEACCH) / Funktionales Kommunikationstraining (FCT).",
    "Erste Hilfe beim Anfall: US Epilepsy Foundation & CDC „Stay·Safe·Side“ und die 5-Minuten-Regel.",
    "UN-Behindertenrechtskonvention (UN-BRK) / WHO QualityRights — Würde und Selbstbestimmung schützen; Zwang und Fixierung so weit wie möglich vermeiden."
  ],

  scenes: [
    {
      id: "medical", medical: true,
      title: "Anfall, Verletzung, Bewusstsein auffällig", emoji: "🚑",
      lead: "Diese App trifft keine medizinischen Entscheidungen. Im Zweifel den Notruf wählen — das ist die richtige Entscheidung.",
      do: [
        "Droht ein Sturz: stützen und sanft hinlegen; gefährliche Gegenstände wegräumen (Brille abnehmen, Kragen lockern)",
        "Wenn die Krämpfe abklingen, in die stabile Seitenlage bringen",
        "Auf die Uhr sehen, wann der Anfall begann (Zeit messen)"
      ],
      call119: [
        "Erster Anfall überhaupt",
        "Krämpfe länger als 5 Minuten",
        "Anfälle in kurzen Abständen, Bewusstsein kehrt nicht zurück",
        "Verletzung, auffällige Atmung",
        "Anfall im Wasser oder beim Baden"
      ],
      note: "Gibt es individuelle ärztliche Anweisungen (Notfallmedikament, Zäpfchen usw.), befolgen Sie diese.",
      dont: [
        "Etwas in den Mund stecken („damit die Zunge nicht gebissen wird“ ist ein Irrtum — Erstickungs- und Verletzungsgefahr)",
        "Den Körper festhalten, um den Anfall zu stoppen",
        "Direkt nach dem Anfall Essen oder Trinken geben"
      ],
      outdoor: [
        "Von Bahnsteigkante, Fahrbahn, Treppe wegbringen (nur bewegen, wenn der Ort gefährlich ist)",
        "Am Bahnhof das Personal, auf der Straße Passanten um Hilfe bitten (konkret sagen: „Bitte rufen Sie einen Krankenwagen“)",
        "Dem Notruf Bahnhofsname, Ausgangsnummer, Orientierungspunkt nennen"
      ],
      after: [
        "Dauer und Verlauf notieren (wie viele Minuten, welche Bewegungen, Bewusstsein danach)",
        "Behandelnde Ärztin/Arzt und Familie informieren",
        "Bei Müdigkeit an einem sicheren Ort ausruhen lassen"
      ],
      why: "Das Wichtigste beim Anfall ist nicht das „Stoppen“, sondern sicheres Begleiten, Zeitmessen und Weitergeben. Ihre Ruhe ist die größte Hilfe für den Menschen.",
      src: "Japanische Epilepsie-Gesellschaft „Hilfe und Beobachtung beim Anfall“ / US Epilepsy Foundation & CDC „Stay·Safe·Side“ (Erste Hilfe, 5-Minuten-Regel)"
    },
    {
      id: "panic",
      title: "Panik", emoji: "🌀",
      do: [
        "Die Person und das Umfeld sichern (gefährliche Gegenstände entfernen)",
        "Reize verringern (nicht mehr ansprechen, Menschen wegführen, Geräusche und Licht dämpfen)",
        "Warten. Ruhig in der Nähe bleiben, bis es sich legt"
      ],
      dont: [
        "Laut stoppen wollen, schimpfen (verstärkt die Erregung)",
        "Festhalten (Verletzung, Vertrauensverlust — haarscharf an Misshandlung)",
        "Mit Fragen bestürmen, überreden (kann nicht verarbeitet werden, wird schlimmer)",
        "Umringen, Aufmerksamkeit erzeugen"
      ],
      outdoor: [
        "Aus dem Menschenstrom heraus — an eine Wand, hinter eine Säule, zu einer Bank",
        "Wenn die Person sich nicht bewegen kann: nicht zwingen; stellen Sie sich als Wand dazwischen, gegen Blicke und Menschen",
        "Ein kurzes Wort an die Umgebung („Alles in Ordnung, es beruhigt sich gleich“) — verhindert gut gemeintes Eingreifen oder Anrufe beim Notruf"
      ],
      after: [
        "Wasser und Pause anbieten",
        "Notieren, was der Auslöser war (Geräusch? Menschen? Planänderung? Schmerz?)",
        "In der Einrichtung teilen"
      ],
      why: "Panik ist kein „Eigensinn“, sondern eine Reaktion auf Reize, Angst oder zerbrochene Vorhersehbarkeit — mehr, als der Mensch verarbeiten kann. Am meisten leidet er selbst. Beruhigende Umgebung und Zeit sind die beste Unterstützung.",
      src: "Schulungshandbuch für Begleitende bei schweren Verhaltensstörungen (Nozominosono, Japan) / NICE NG11 (PBS) · NG10 (Aggression: zuerst Deeskalation ohne Festhalten)"
    },
    {
      id: "selfharm",
      title: "Selbstverletzung", emoji: "🤕",
      do: [
        "Lebensgefahr einschätzen (Kopfschlagen, starkes Beißen: physisch abfedern, z. B. mit Kissen)",
        "Reize verringern, in eine beruhigende Umgebung bringen",
        "Ruhig begleiten, nach dem Abklingen versorgen"
      ],
      dont: [
        "„Hör auf!“ schreien (Aufmerksamkeit kann das Verhalten verstärken)",
        "Den Arm dauerhaft mit Kraft festhalten",
        "Bestrafen, zurechtweisen"
      ],
      outdoor: [
        "Vom Harten wegbringen — Asphalt, Säulen, Leitplanken (eine Tasche oder Jacke dazwischen hilft auch)",
        "Bildet sich eine Traube: ein kurzes „Alles in Ordnung“ (Blicke selbst sind ein Reiz)"
      ],
      after: [
        "Verletzungen prüfen und versorgen",
        "Die Situation unmittelbar davor notieren (direkt nach welchem Ereignis?)",
        "Bei Häufung Überarbeitung des Unterstützungsplans besprechen (Ärztin/Arzt, Koordination)"
      ],
      why: "Selbstverletzung hat oft eine Funktion: Unbehagen ausdrücken, etwas verlangen, eine Empfindung prüfen, Aufmerksamkeit suchen. Die eigentliche Arbeit ist, ein passendes „Ersatzmittel“ wachsen zu lassen (Grundgedanke der angewandten Verhaltensanalyse).",
      src: "Schulungshandbuch für Begleitende bei schweren Verhaltensstörungen (Nozominosono, Japan) / NICE NG11 (PBS) · NG10 (Aggression: zuerst Deeskalation ohne Festhalten)"
    },
    {
      id: "aggression",
      title: "Fremdaggression, Sachbeschädigung", emoji: "💥",
      do: [
        "Zuerst Abstand (mindestens eine Armlänge). Andere Nutzer wegführen, Umgebung sichern",
        "Sofort Verstärkung rufen und die Leitung informieren (parallel zum Handeln möglich. Nicht allein tragen)",
        "Tiefe Stimme, kurze Worte — oder schweigen und Reize verringern"
      ],
      dont: [
        "Frontal packen, niederdrücken (Unfall- und Misshandlungsrisiko)",
        "Laut schimpfen, Blickduell",
        "Zur Rede stellen: „Warum machst du so etwas?!“"
      ],
      outdoor: [
        "Oberste Priorität: Passanten fernhalten („Entschuldigung, bitte Abstand halten“ — deutlich)",
        "Am Bahnhof Personal und Sicherheitsdienst um Mithilfe bitten (draußen nicht allein tragen)"
      ],
      after: [
        "Verletzungen und Schäden prüfen. Meldung nach den Regeln der Einrichtung",
        "Auslöser und Verlauf notieren",
        "Vorzeichen (Mimik, Stimme, Bewegung) im Team teilen"
      ],
      why: "Fremdaggression ist meist die „Explosion“ eines nicht angekommenen Wunsches, Unbehagens oder einer Angst. Sie zielt selten auf Menschen — sie trifft sie am Ende. Vorzeichen zu kennen ist der erste Schritt der Prävention.",
      src: "Schulungshandbuch für Begleitende bei schweren Verhaltensstörungen (Nozominosono, Japan) / NICE NG11 (PBS) · NG10 (Aggression: zuerst Deeskalation ohne Festhalten)"
    },
    {
      id: "runaway",
      title: "Weglaufen, verschwunden", emoji: "🏃",
      do: [
        "Nicht direkt von hinten verfolgen (Verfolgen beschleunigt). Im Blickfeld bleiben, parallel laufen und vorrangig gefährliche Richtungen abschirmen: Fahrbahn, Wasser, Gleise",
        "Sofort Verstärkung rufen und die Leitung informieren (parallel zum Handeln. Nicht allein oder nur im eigenen Kreis tragen)",
        "Aus den Augen verloren: ohne Zögern nach den Regeln der Einrichtung melden (Polizei) und die Suche beginnen"
      ],
      dont: [
        "Ununterbrochen den Namen rufen (kann die Flucht verstärken)",
        "Allein tragen, die Meldung verzögern",
        "Beim Zurückkommen schimpfen (gelernt wird: „Zurückkommen = etwas Unangenehmes passiert“)"
      ],
      outdoor: [
        "Am Bahnhof bei Sichtverlust sofort zum Personal (Bahnsteige, Sperren, Kameras — das Personal ist am schnellsten)",
        "Kleidung, Statur, wahrscheinliche Ziele nennen und um Hilfe bitten (nicht zögern: Minuten können über Leben entscheiden)"
      ],
      after: [
        "Beim Auffinden ruhig dazustoßen, Verletzungen prüfen",
        "Route und Zeiten notieren (wohin es ging, ist ein Hinweis für die Unterstützung)",
        "Die Familie nicht allein damit lassen. Beteiligte Unterstützer (Koordination, Assistenz) und je nach Lage die Ärztin/den Arzt um Hilfe oder Anweisungen bitten",
        "Ausgänge und Aufsicht überprüfen"
      ],
      why: "Hinter dem Weglaufen steht oft ein „Reiz, vor dem man flieht“ oder ein „Ziel, zu dem man will“. Nach dem Grund suchen statt vorwerfen — das bereitet die nächste Prävention vor.",
      src: "Grundlagen der Schulung zur Begleitung außer Haus (Sicherheit unterwegs) u. a."
    },
    {
      id: "freeze",
      title: "Erstarrt, kann sich nicht bewegen", emoji: "🧊",
      do: [
        "Warten (mit selbst gesetzter Zeit: zunächst 5 Minuten)",
        "Reize und Anforderungen verringern (nicht drängen, nicht berühren)",
        "Nur einen nächsten Schritt zeigen — kurz und sichtbar („danach: Tee“)"
      ],
      dont: [
        "An der Hand ziehen",
        "Pausenlos ansprechen („na los, komm, gehen wir“)",
        "Über den Kopf der Person hinweg mit anderen beraten"
      ],
      outdoor: [
        "Mitten im Durchgang: sanft aus dem Strom (an die Wand) lotsen. Geht es nicht: als Schild davorstehen und warten",
        "Statt zu drängen: „Wir haben Zeit.“ An die Umgebung kurz: „Wir warten einen Moment“"
      ],
      after: [
        "Notieren, was das Weitergehen ermöglicht hat (Zeit? etwas Gezeigtes? Personenwechsel?)",
        "Situationen sammeln und teilen, in denen Erstarren häufig ist"
      ],
      why: "Erstarren ist keine Verweigerung, sondern oft „ein Übergang, dessen Verarbeitung Zeit braucht“. Von Menschen, die nach dem Warten weitergehen, kann die wartende Begleitung lernen.",
      src: "Grundgedanken der strukturierten Unterstützung bei Autismus (TEACCH u. a.)"
    },
    {
      id: "shouting",
      title: "Lautes Rufen, Schreien", emoji: "📢",
      do: [
        "Zuerst das Umfeld prüfen (heiß? laut? Hunger? Schmerz?)",
        "An einen ruhigen Ort führen oder die Reize ringsum senken",
        "Gerade in ruhigen Zeiten viel Zuwendung geben"
      ],
      dont: [
        "Auf Lautstärke mit Lautstärke antworten",
        "„Leise!“ wiederholen",
        "Jedes Mal nachgeben, damit Ruhe ist (gelernt wird: „Schreien wirkt“)"
      ],
      outdoor: [
        "Langsam an einen ruhigen Ort (Bahnsteigende, hinter die Sperren, vor das Geschäft)",
        "Mit Kritisierenden nicht streiten: kurz „Entschuldigung, das gehört zu seiner Behinderung“. Auch ein Hilfe-Ausweis/Anhänger kann helfen"
      ],
      after: [
        "Uhrzeit, Ort, unmittelbares Vorereignis notieren (immer zur gleichen Zeit? dann Befinden/Umfeld prüfen)",
        "Auch Schmerz-Vorgeschichte klären (Zähne, Ohren, Bauch)",
        "Auffällige Veränderungen dokumentieren und mit Team und Leitung teilen"
      ],
      why: "Die Stimme ist das am leichtesten verfügbare Ausdrucksmittel. Wachsen andere Mittel (Karten, Zeigen, Geräte), wird das Rufen oft weniger.",
      src: "Grundgedanken des Funktionalen Kommunikationstrainings (FCT) u. a."
    },
    {
      id: "fixation",
      title: "Festgefahren im Ritual", emoji: "🔁",
      do: [
        "Wenn ungefährlich: zunächst mitgehen (das Ritual ist die Beruhigungsstrategie der Person)",
        "Das Ende sichtbar machen (Timer, „noch 3-mal“)",
        "Bei unvermeidbarer Änderung: Vorankündigung + 2 Optionen („A oder B — was möchtest du?“)"
      ],
      dont: [
        "Mit Gewalt abbrechen",
        "Mit Täuschung wegnehmen (Vertrauen verloren, beim nächsten Mal stärker)",
        "Falsche Versprechen für den Moment"
      ],
      outdoor: [
        "Bei Ritualen um Zug, Route, Reihenfolge: Zeitpuffer sind die beste Prävention",
        "Wenn Änderung nötig: nicht vor Ort verharren, sondern Ausblick geben („heute Weg A, nächstes Mal Weg B“)"
      ],
      after: [
        "Gegenstand und Bedingungen des Rituals notieren (wann, wo, woran)",
        "System der Vorankündigung erwägen (Bildkarten, Pläne)",
        "Schwierigkeiten dokumentieren und mit Team und Leitung teilen"
      ],
      why: "Rituale sind der Versuch der Person, eine beängstigende Welt vorhersehbar zu machen. Nicht wegnehmen, sondern den Boden der Sicherheit verbreitern und die Wahlmöglichkeiten allmählich vergrößern.",
      src: "Schulungshandbuch schwere Verhaltensstörungen / strukturierte Unterstützung (TEACCH) / NICE NG11 (PBS)"
    },
    {
      id: "hallucination",
      title: "Stimmenhören, wahnhaft wirkende Äußerungen", emoji: "💭",
      do: [
        "Weder verneinen noch bestätigen (dem Gefühl antworten: „So hört es sich für Sie an. Das macht Angst, nicht wahr“)",
        "Langsam zu einem beruhigenden, realen Thema oder einer Tätigkeit überleiten",
        "Bei Zunahme: mit Ärztin/Arzt und Familie teilen, Untersuchung besprechen"
      ],
      dont: [
        "Diskutieren: „So etwas gibt es nicht“",
        "Mitgehen und gemeinsam ausschmücken",
        "Lachen, abtun"
      ],
      after: [
        "Inhalt, Uhrzeit, Häufigkeit notieren (nach Medikamentenwechsel? Schlaf ausreichend?)",
        "Befehlende Inhalte („mir wird gesagt, ich soll sterben“ u. Ä.): rasch in die Medizin"
      ],
      why: "Für die Person ist es wirklich zu hören und zu sehen. Es geht nicht um wahr oder falsch, sondern um die Angst, die dieses Erleben bringt. Sicherheit hat Vorrang.",
      src: "Allgemeines Wissen aus Ratgebern für Angehörige (psychiatrischer Notfall, Schizophrenie)"
    },
    {
      id: "hyperventilation",
      title: "Hyperventilation", emoji: "😮‍💨",
      do: [
        "An einen ruhigen Ort. Hinsetzen lassen, an der Seite bleiben",
        "„Alles gut. Langsam ausatmen“ — die Stimme dem Ausatmen anpassen",
        "Zusammenbleiben, bis es sich beruhigt"
      ],
      dont: [
        "Eine Papiertüte vor den Mund halten (die Tütenmethode birgt Hypoxie-Gefahr und wird nicht mehr empfohlen)",
        "Laut „Beruhige dich!“ sagen",
        "Die Person allein zurücklassen"
      ],
      outdoor: [
        "Auf eine Bank oder Stufe setzen, von der Menschentraube weg",
        "An die Umgebung kurz: „Alles in Ordnung, nach einer kleinen Pause geht es wieder“"
      ],
      after: [
        "Beim ersten Mal, bei Vorerkrankung, bei ausbleibender Erholung: in die Medizin",
        "Auslöser notieren (Angst, Erschöpfung, Menschenmenge)",
        "Bei Wiederholung dokumentieren und mit Team und Leitung teilen"
      ],
      why: "An Hyperventilation selbst stirbt man selten, doch die Person steckt in der Angst, „vielleicht zu sterben“. Eine ruhige Stimme und Begleitung sind die beste Medizin.",
      src: "Medizinische Aufklärung zum Hyperventilationssyndrom (Tütenmethode nicht empfohlen)"
    },
    {
      id: "medication",
      title: "Medikamentenverweigerung", emoji: "💊",
      do: [
        "Einmal zurückziehen (Zeit lassen, dann erneut)",
        "Form, Zeitpunkt, helfende Person wechseln",
        "Hält es an: nicht selbst entscheiden, sondern Ärztin/Arzt oder Apotheke fragen (Darreichungswechsel, Einnahmehilfen)"
      ],
      dont: [
        "Festhalten und einflößen",
        "Heimlich unters Essen mischen (Quelle des Misstrauens. Wenn überhaupt, nur mit Zustimmung von Ärztin/Arzt und Familie)",
        "Handeln: „Wenn du nicht nimmst, darfst du nicht …“"
      ],
      after: [
        "Das Wie der Verweigerung notieren (Geschmack? Größe? Stimmung? — vielleicht ein Zeichen von Nebenwirkungen)",
        "Beim Arztbesuch unbedingt mitteilen"
      ],
      why: "Verweigerung hat Gründe (schwer zu schlucken, belastende Nebenwirkungen, unverstandener Sinn). Ursachensuche gemeinsam mit der Medizin. Zwang kostet weit mehr als die eine Tablette von heute.",
      src: "Allgemeines Wissen zur Einnahmeunterstützung (Apothekerkammern u. a.)"
    },
    {
      id: "anxiety",
      title: "Starke Angst, „ich will nach Hause“", emoji: "🏠",
      do: [
        "Das Gefühl unverändert annehmen („Sie möchten nach Hause, nicht wahr“)",
        "Den Ausblick konkret zeigen („nach dem Imbiss kommt der Bus“)",
        "Eine Brücke zu beruhigenden Dingen, zu Lieblingsbeschäftigungen bauen"
      ],
      dont: [
        "Immer wieder vertrösten („gleich, gleich“)",
        "Mit Logik überreden",
        "Falsche Zeiten nennen (Vertrauen geht verloren)"
      ],
      outdoor: [
        "Ausblick in sichtbaren Einheiten geben: „noch 2 Stationen“, „hinter dieser Ecke“",
        "An Tagen starker Angst gehört auch der Mut zum früheren Abbruch zur Unterstützung"
      ],
      after: [
        "Uhrzeiten und Wochentage notieren, an denen die Angst stärker wird",
        "Kniffe teilen, die über Mitgebrachtes oder Umfeld Sicherheit geben"
      ],
      why: "„Ich will nach Hause“ ist oft ein Wort, das Sicherheit sucht, nicht den Ort. Wir vermehren Stück für Stück, was fühlen lässt: „Hier bin ich sicher.“",
      src: "Allgemeines Wissen zur Unterstützung stark ängstlicher Menschen"
    }
  ],

  /* ===== Mitteilen: fertige Sätze ===== */
  phraseGroups: [
    { id: "feel",  label: "Gefühle",  emoji: "💙", items: ["Ich freue mich", "Ich bin traurig", "Ich habe Angst", "Ich will nicht", "Alles in Ordnung", "Ich bin wütend"] },
    { id: "body",  label: "Körper",  emoji: "🩹", items: ["Es tut weh", "Ich bin müde", "Toilette", "Ich habe Hunger", "Ich habe Durst", "Ich bin schläfrig", "Mir ist nicht gut"] },
    { id: "ask",   label: "Bitten", emoji: "🙏", items: ["Bitte helfen Sie mir", "Ich möchte mich ausruhen", "Bitte langsam sprechen", "Bitte noch einmal sagen", "Bitte aufschreiben", "Bitte leiser"] },
    { id: "reply", label: "Antworten",  emoji: "💬", items: ["Ja", "Nein", "Ich weiß nicht", "Einen Moment bitte", "Danke", "Entschuldigung"] }
  ],

  /* ===== Protokoll: Auswahl (nur Tippen, in Sekunden fertig) ===== */
  logOptions: {
    triggers: ["Geräusch / Licht", "Menschen nah / viele", "Planänderung", "Wunsch nicht erfüllt", "Schmerz / Befinden", "Wartezeit", "Unklar", "Sonstiges"],
    durations: ["≤ 5 Min.", "≤ 15 Min.", "≤ 30 Min.", "Länger"],
    responses: ["Reize verringert", "Ort gewechselt", "Begleitend beobachtet", "Ausblick gegeben", "Schrift / visuelle Hilfe genutzt", "An Medizin / Notruf verwiesen", "Sonstiges"],
    injuries: ["Keine", "Person selbst verletzt", "Andere verletzt", "Sache beschädigt"]
  },

  traits: [
    {
      id: "asd", name: "Autismus-Spektrum-Störung (ASS)", emoji: "🧩",
      short: "Eigenheiten in Kontakt, Ritualen, Wahrnehmung",
      what: [
        "Eine Besonderheit, in der sich ein eigener Stil von Kontakt und Kommunikation, starke Interessen und Rituale sowie erhöhte (oder verringerte) Sinnesempfindlichkeit überlagern. Mit oder ohne intellektuelle Beeinträchtigung.",
        "Die Ausprägung unterscheidet sich stark von Mensch zu Mensch („Spektrum“ = Kontinuum). Nicht festlegen — den Menschen ansehen.",
        "Für die Person ist die Welt schwer vorhersehbar und reizintensiv — diese Angst zu verringern ist der Kern der Unterstützung."
      ],
      prepare: [
        "Neue Orte und Ausflüge vorab „üben“ — mit Fotos oder Vorab-Besuch. Den Ablauf vorher sichtbar teilen.",
        "Gerade wenn Änderungen unvermeidlich sind: früh ankündigen + Wahlraum lassen (plötzliche Änderungen sind der größte Stress).",
        "Nicht hetzen, nicht überraschen. Ein Ablauf, dem die Person zustimmt, schafft die Ruhe des Tages."
      ],
      comm: [
        "Kurz, konkret, eins nach dem anderen („wenn die Uhr 3 zeigt“ statt „später“)",
        "Sichtbares statt Worte (Bilder, Fotos, Schrift, echte Gegenstände)",
        "Andeutungen, Witze, Ironie kommen schwer an. Klar und bejahend („wir gehen“ statt „nicht rennen“)",
        "Antworten können dauern. Warten, ohne zu drängen"
      ],
      env: [
        "Pläne vorab zeigen (Strukturierung des Tagesablaufs)",
        "Reize verringern (Lärm, Licht, Menschenmengen). Gehörschutz oder ruhigen Ort bereithalten",
        "Änderungen immer mit Vorankündigung. Plötzliche Änderung ist der größte Stress"
      ],
      scenes: ["panic", "runaway", "fixation", "shouting", "selfharm", "freeze"],
      ng: [
        "Blickkontakt erzwingen",
        "Rituale mit Gewalt stoppen",
        "Abstrakt schimpfen („benimm dich“, „lies die Situation“)"
      ],
      src: "NICE NG11 (PBS) / strukturierte Unterstützung bei Autismus (TEACCH) / DSM-5"
    },
    {
      id: "adhd", name: "Aufmerksamkeitsdefizit-/Hyperaktivitätsstörung (ADHS)", emoji: "⚡",
      short: "Starke Unaufmerksamkeit, Unruhe, Impulsivität",
      what: [
        "Unaufmerksamkeit (leicht abgelenkt, vergesslich) und Hyperaktivität-Impulsivität (schwer stillzusitzen, schwer zu warten), unverhältnismäßig stark für das Alter.",
        "Weder Faulheit noch Charakter, sondern eine andere Arbeitsweise der „Exekutivfunktionen“ des Gehirns.",
        "Durch ständiges Schimpfen geht leicht das Selbstvertrauen verloren. Zuwendung, die auf Gelungenes blickt, wirkt."
      ],
      comm: [
        "Anweisungen einzeln und kurz. Mit Notizen und Erinnerungen kombinieren",
        "„Im Moment“ des Gelingens konkret loben (mit Verzögerung wirkt es kaum)",
        "Nicht von oben herab schelten. Nicht das Verhalten anklagen, sondern gemeinsam Wege finden"
      ],
      env: [
        "Ablenkende Reize verringern (Platz, Dinge, Geräusche ordnen)",
        "Sichtbar machen (To-do-Liste, Timer, Checkliste)",
        "Regelmäßig Bewegungs- und Ruhepausen einbauen"
      ],
      scenes: ["shouting", "runaway", "anxiety"],
      ng: [
        "Wiederholt „Wie oft muss ich es sagen?“",
        "Lange Erklärungen, mehrere Anweisungen auf einmal",
        "Impulsives Verhalten als Charakterfehler deuten"
      ],
      src: "NICE (ADHS-Leitlinie) / DSM-5"
    },
    {
      id: "id", name: "Intelligenzminderung", emoji: "📘",
      short: "Verstehen und Urteilen brauchen Zeit",
      what: [
        "Verstehen und Urteilen, Lesen-Schreiben-Rechnen, Umgang mit Geld und Zeit entwickeln sich langsamer — der Alltag wird „schwer durchschaubar“.",
        "Grad wie Stärken und Schwächen sind individuell. Nicht wie ein Kind behandeln — Respekt dem Alter gemäß.",
        "Oft kann „ich verstehe nicht“ nicht gesagt werden, und die Person leidet. Ändert man die Vermittlung, kommt es an."
      ],
      prepare: [
        "Das Vorhaben vorab mit Fotos oder echten Dingen „vormachen“ und teilen. Kein „plötzlich am Tag selbst“.",
        "Schritte klein teilen und in machbare Form bringen, bevor es losgeht.",
        "Ein Plan mit Puffer, in dem die Person im eigenen Tempo gehen kann."
      ],
      comm: [
        "Langsam, kurz, in einfachen Worten. Schwere Begriffe und Vieles-auf-einmal vermeiden",
        "Konkret statt abstrakt (Gegenstände, Bilder, Vormachen). Zeigen",
        "Statt „verstanden?“ lieber ausprobieren lassen und so prüfen",
        "Höflich, dem Alter gemäß (keine Babysprache)"
      ],
      env: [
        "Abläufe sichtbar machen (Foto-Anleitungen, Checklisten)",
        "Auswahl eingrenzen, damit Wählen leichter fällt",
        "In kleine Schritte teilen, die Erfolg ermöglichen"
      ],
      scenes: ["runaway", "fixation", "anxiety", "freeze"],
      ng: [
        "Kindisch behandeln, herablassender Ton",
        "Drängen, viele Anweisungen auf einmal",
        "Vorwerfen: „Das habe ich doch gerade gesagt“"
      ],
      src: "NICE NG11 (PBS) / DSM-5 (Intelligenzentwicklungsstörung)"
    },
    {
      id: "ld", name: "Lernstörung (umschriebene Lernstörung)", emoji: "✏️",
      short: "Nur Lesen, Schreiben oder Rechnen fällt schwer",
      what: [
        "Ohne große Verzögerung der Gesamtintelligenz ist nur ein „bestimmter Lernbereich“ — Lesen, Schreiben, Rechnen — deutlich erschwert.",
        "Weder Mangel an Fleiß noch an Intelligenz, sondern ein Ungleichgewicht der Informationsverarbeitung des Gehirns.",
        "Die Schwäche nicht anklagen, sondern mit anderen Mitteln ausgleichen — dann zeigt sich die Kraft."
      ],
      comm: [
        "Lesen fällt schwer → Vorlesen, Lesehilfen, Audio. Schreiben fällt schwer → Tippen, Foto, Aufnahme",
        "Mündlich und schriftlich, beides",
        "Rücksicht: schwere Aufgaben nicht vor anderen verlangen"
      ],
      env: [
        "IT nutzen (Tablet, Spracheingabe, Taschenrechner)",
        "Große Schrift, weite Zeilenabstände, schlichtes Layout",
        "Teilhabe über den starken Kanal ermöglichen"
      ],
      scenes: ["anxiety"],
      ng: [
        "Als „faul“ abstempeln",
        "Schweres Vorlesen oder Abschreiben erzwingen",
        "Mit anderen vergleichen"
      ],
      src: "DSM-5 (umschriebene Lernstörung) / Grundgedanke der angemessenen Vorkehrungen (UN-BRK)"
    },
    {
      id: "scz", name: "Schizophrenie", emoji: "🌫️",
      short: "Halluzinationen, Wahn, Antriebsverlust — in Wellen",
      what: [
        "Eine psychische Erkrankung, bei der Halluzinationen (nicht vorhandene Stimmen hören u. a.), Wahn, zerfahrenes Denken, Antriebsverlust auftreten können.",
        "Es gibt Wellen — auch gute Phasen. Mit passender Behandlung und Unterstützung lässt sich ruhig leben.",
        "„Für die Person ist es Wirklichkeit“ — nicht streiten, der Angst beistehen: das ist die Basis."
      ],
      comm: [
        "Halluzination und Wahn weder verneinen noch bestätigen; dem Gefühl antworten („das macht Angst, nicht wahr“)",
        "Kurz, sanft, reizarm",
        "Darauf achten, ob die Medikamente weiterlaufen und der Schlaf reicht"
      ],
      env: [
        "Ruhige, sichere Umgebung. Abrupte Veränderungen und starke Reize meiden",
        "Veränderungen früh bemerken (Schlaflosigkeit, zunehmende Verfolgungsklagen)",
        "Mit Person, Familie und Ärztin/Arzt zusammenwirken"
      ],
      scenes: ["hallucination", "anxiety", "panic"],
      ng: [
        "Den Wahn logisch widerlegen wollen",
        "Mitgehen und gemeinsam ausschmücken",
        "Als Faulheit missdeuten und Aktivität erzwingen"
      ],
      src: "NICE (Leitlinie Psychose/Schizophrenie) / WHO QualityRights"
    },
    {
      id: "mood", name: "Depression, bipolare Störung (Störungen der Stimmung)", emoji: "🌗",
      short: "Tiefes Herabgestimmtsein / Stimmungswellen",
      what: [
        "„Depression“: anhaltendes Herabgestimmtsein, Verlust von Antrieb und Interesse. „Bipolar“: Pendeln zwischen Depression und Hochphase (Manie).",
        "Mit Willenskraft heilt es nicht. „Streng dich an“ kann die Person in die Enge treiben.",
        "Die Wellen verstehen, nicht überfordern, begleiten — das trägt."
      ],
      comm: [
        "Kein „streng dich an“, kein „reine Kopfsache“. Zuerst das Leid annehmen",
        "Entscheidungen und komplexe Aufgaben nicht erzwingen",
        "In Hochphasen: große Entscheidungen und Ausgaben gemeinsam bremsen"
      ],
      env: [
        "Raum zum Ausruhen, Tempo dosieren. Tage des Nicht-Könnens nicht anklagen",
        "Beim Ordnen von Lebensrhythmus und Schlaf helfen",
        "Äußerungen wie „ich will sterben“ nie überhören: sofort Medizin und Familie"
      ],
      scenes: ["anxiety", "selfharm"],
      ng: [
        "Übermäßig anfeuern, antreiben",
        "Vergleichen: „alle haben es schwer“",
        "Suizidgedanken überhören"
      ],
      src: "NICE (Leitlinien Depression/bipolare Störung) / Allgemeinwissen Suizidprävention"
    },
    {
      id: "anx", name: "Angststörungen, Zwangsstörung", emoji: "🫧",
      short: "Überstarke Angst, zwanghaftes Kontrollieren",
      what: [
        "Überstarke Angst und Furcht (Panikattacken, nicht beendbares Kontrollieren), die das Leben durcheinanderwirbeln.",
        "Kein „Überempfindlichsein“: die Angstbremse des Gehirns greift schlecht.",
        "Wird Sicherheit angesammelt, mildert es sich allmählich."
      ],
      comm: [
        "Die Angst nicht verneinen („ich bin da“ statt „ist doch nichts“)",
        "Ausblick konkret („in 10 Minuten sind wir fertig“)",
        "Kontrollrituale nicht rundheraus verbieten"
      ],
      env: [
        "Vorhersehbare, sichere Umgebung",
        "Reize und Druck verringern",
        "Ein ruhiger Ort, um den Atem zu beruhigen"
      ],
      scenes: ["anxiety", "hyperventilation", "panic", "fixation"],
      ng: [
        "Abtun: „du machst dir zu viele Sorgen“",
        "Zwangsweise mit der Angstsituation konfrontieren",
        "Kontrollhandlungen mit Gewalt verbieten"
      ],
      src: "NICE (Leitlinien Angststörungen/Zwangsstörung)"
    },
    {
      id: "ptsd", name: "PTBS, Bindungsthemen", emoji: "🕯️",
      short: "Schweres Erleben von früher wirkt bis heute",
      what: [
        "Schweres Erleben von früher (Misshandlung, Katastrophe, Unfall …) setzt sich fort als Flashbacks, Überempfindlichkeit, Vermeidung. Manche tragen auch Bindungswunden.",
        "Weder „Übertreibung“ noch „Vergangenheit“: eine Reaktion, die jetzt andauert.",
        "Sicherheit, Geborgenheit und das gewachsene Vertrauen „dieser Mensch ist verlässlich“ sind der Boden der Genesung."
      ],
      comm: [
        "Nicht plötzlich berühren, nicht von hinten nähern (nicht erschrecken)",
        "Wahl- und Ablehnungsräume lassen (Kontrollgefühl beruhigt)",
        "Versprechen halten, kleines Vertrauen ansammeln"
      ],
      env: [
        "Sichere, vorhersehbare Umgebung. Laute Stimmen, abruptes Nähern vermeiden",
        "Wissen, dass bestimmte Geräusche, Orte, Situationen Auslöser sind",
        "Beim Flashback ruhig vermitteln: „Jetzt sind Sie in Sicherheit“"
      ],
      scenes: ["panic", "anxiety", "selfharm"],
      ng: [
        "Zum Erzählen des Erlebten zwingen",
        "Erschrecken, plötzlicher Körperkontakt",
        "Reaktionen als „Eigensinn“ behandeln"
      ],
      src: "NICE (PTBS-Leitlinie) / Grundgedanken traumainformierter Begleitung"
    },
    {
      id: "epi", name: "Epilepsie", emoji: "🧠",
      short: "Anfälle durch vorübergehende Störung im Gehirn",
      what: [
        "Eine vorübergehende elektrische Störung im Gehirn löst „Anfälle“ aus. Die Formen reichen von Krämpfen bis zu kurzem Abwesend-Sein.",
        "Außerhalb der Anfälle leben die meisten ganz normal. Keine „gefährlichen Menschen“.",
        "Wichtig sind ruhiges Handeln beim Anfall und die Kenntnis der „5-Minuten-Regel“."
      ],
      comm: [
        "Der Anfall ist nicht gewollt. Ruhig begleiten",
        "Nach dem Anfall kann Benommenheit auftreten. Ohne Drängen ausruhen lassen",
        "Den „Anfallstyp“ der Person und die ärztlichen Anweisungen vorab kennen"
      ],
      env: [
        "Verletzungen vorbeugen (Kanten, Wasser, Höhen, Baden beachten)",
        "Anfälle dokumentieren (Zeit, Verlauf) und teilen",
        "Die Medikamenteneinnahme unaufdringlich stützen"
      ],
      scenes: ["medical"],
      ng: [
        "Etwas in den Mund stecken (Irrtum; Ersticken, Verletzung)",
        "Festhalten",
        "Direkt nach dem Anfall essen/trinken lassen"
      ],
      src: "US Epilepsy Foundation & CDC „Stay·Safe·Side“ / Japanische Epilepsie-Gesellschaft"
    },
    {
      id: "abi", name: "Erworbene Hirnschädigung (höhere Hirnfunktionen)", emoji: "🧭",
      short: "Unsichtbare Beeinträchtigung nach Unfall/Krankheit",
      what: [
        "Nach Unfall oder Krankheit (Hirnverletzung, Schlaganfall …) sind Gedächtnis, Aufmerksamkeit, Planen, Gefühlskontrolle auf schwer sichtbare Weise beeinträchtigt.",
        "Von außen kaum erkennbar — „er hat sich verändert“, heißt es fälschlich. Auch die Person selbst ist verunsichert.",
        "Vieles bleibt erhalten. Kniffe zum Ausgleich der Schwächen erweitern das Leben."
      ],
      comm: [
        "Eins nach dem anderen, kurz. Notizen und Erinnerungen dazu",
        "Wenn Gefühle hochkochen: Reize senken, nicht anklagen",
        "Kein Vorwurf „hab ich doch gerade gesagt“ (es ist eine Gedächtnisstörung)"
      ],
      env: [
        "Abläufe und Pläne sichtbar machen (Notizen, Pläne, Wecker)",
        "Ruhige, ablenkungsarme Umgebung",
        "Mit gleichen Abläufen, gleichen Orten stabilisieren"
      ],
      scenes: ["shouting", "anxiety", "freeze"],
      ng: [
        "Als „faul“ oder „eigensinnig“ missdeuten",
        "Viele Anweisungen auf einmal",
        "Nicht-Können wiederholt vorhalten"
      ],
      src: "Allgemeines Wissen zur Unterstützung bei Störungen höherer Hirnfunktionen (Nationales Rehabilitationszentrum Japan u. a.)"
    },
    {
      id: "sbd", name: "Schwere Verhaltensstörung", emoji: "🆘",
      short: "Selbst-/Fremdverletzung usw.; Zustand mit hohem Unterstützungsbedarf",
      what: [
        "Ein „Zustand“ — keine Diagnose —, in dem Selbstverletzung, Fremdaggression, starke Rituale, Zerstörung so häufig und heftig auftreten, dass besonders intensive Unterstützung nötig ist.",
        "Die Person ist kein „schwieriger Mensch“, sondern „in Not“. Dahinter stehen Nicht-Ankommen und Unpassung zur Umgebung.",
        "Mit Positive Behaviour Support (PBS) die Gründe des Verhaltens lesen und das Umfeld gestalten — dann ändert sich viel."
      ],
      prepare: [
        "Die eigentliche Arbeit liegt „vor dem Verhalten“. Ausflüge und Ereignisse beginnen mit einem sorgfältig geknüpften, machbaren Plan.",
        "Damit die Person Ausblick hat und einverstanden ist (wo, was, wie lange, was danach kommt — vorab teilen).",
        "Ein Ablauf, der belastende Reize, Gedränge, Wartezeiten meidet. Pausenort, Heimkehrzeitpunkt, Ausweg vorab festlegen.",
        "Nicht erst nach der Panik retten wollen — das quält alle. Gelungenes / Belastendes notieren und in den nächsten Plan einfließen lassen."
      ],
      comm: [
        "Die „Funktion (den Grund)“ des Verhaltens suchen (Wunsch, Vermeidung, Aufmerksamkeit, Empfindung)",
        "Ausdrucksmittel wachsen lassen (Karten, Geräte)",
        "Gerade in guten Zeiten intensiv zuwenden"
      ],
      env: [
        "Reize, Anforderungen, zerbrechende Vorhersehbarkeit verringern (Strukturierung, Reizarmut)",
        "Auslöser → Verhalten → Folge dokumentieren, im Team auswerten",
        "Nicht auf Fixierung und Schelte bauen. Mit Fachleuten und Medizin zusammenarbeiten"
      ],
      scenes: ["selfharm", "aggression", "runaway", "panic", "fixation", "shouting"],
      ng: [
        "Mit Kraft niederhalten, mit Schelte stoppen",
        "Zur schnellen Ruhe immer wieder nachgeben",
        "Allein oder nur in einer Einrichtung tragen"
      ],
      src: "Schulungshandbuch für Begleitende bei schweren Verhaltensstörungen (Nozominosono, Japan) / NICE NG11 (PBS)"
    }
  ],

  /* ===== Lernen: Hinweis des Tages ===== */
  hints: [
    "Unterstützungshinweise sind nur „Tendenzen“. Der Mensch vor Ihnen ist immer das erste Lehrbuch.",
    "Verhalten hat immer einen Grund. Schon der Blick „ein Mensch in Not“ statt „ein schwieriger Mensch“ verändert die Antwort.",
    "Mit Ausblick werden Menschen ruhig. Vorher zu sagen, „was als Nächstes kommt“, ist die größte Prävention.",
    "Änderungen nicht plötzlich, sondern mit Ankündigung. Die „plötzliche Änderung“ ist meist der größte Stress.",
    "Sichtbares statt Worte. Bild, Foto, Schrift, echter Gegenstand vermitteln manchmal ein Vielfaches der Sprache.",
    "„Wir gehen“ statt „nicht rennen“. Das gewünschte Verhalten, bejahend gesagt, kommt besser an als das Verbot.",
    "Eins nach dem anderen. Anweisungen kurz und konkret. „Ordentlich“ und „richtig“ sind in Wahrheit die am schwersten verständlichen Wörter.",
    "„Im Moment“ des Gelingens konkret loben. Mit Abstand kommt das Lob kaum noch an.",
    "Gerade in ruhigen Zeiten viel zuwenden. Wer nur bei Problemen kommt, macht das Problem zur „Art, gerufen zu werden“.",
    "Festhalten ist haarscharf an Verletzung, Vertrauensverlust, Misshandlung. Zuerst Abstand und weniger Reize.",
    "Mitten in der Panik kommen Erklärungen und Überredung nicht an. Erst Reize senken, das Abklingen abwarten.",
    "Die eigentliche Arbeit liegt „vor dem Ereignis“. Vorbereitung und Plan schaffen die Ruhe des Tages.",
    "Ausflüge sorgfältig planen. Pausenort, Heimkehrzeit, Ausweg vorab festgelegt — das beruhigt alle.",
    "Vor der guten Antwort: das „Nicht-zu-Tuende“ lassen. Allein das senkt Unfälle deutlich.",
    "Fürs Protokoll reichen Sekunden. „Auslöser → Verhalten → Ausgang“ festzuhalten erleichtert die nächste Unterstützung.",
    "Nicht allein tragen. Was auffällt: an Team und Leitung. Frühes Teilen schützt den Menschen.",
    "Das „Nein“ und „Ich weiß nicht“ der Person sind wertvolle Signale. Zuerst würdigen, dass es gesagt werden konnte.",
    "Wählen können gibt Sicherheit. Statt „nur das hier“: „A oder B — was möchtest du?“",
    "Wahrnehmung ist individuell. Grell, laut, kratzig — für die Person vielleicht eine Qual.",
    "Auch „eigensinnig“ wirkendes Verhalten hat oft eigene Gründe und eigene Kniffe. Nicht festlegen.",
    "Rituale machen eine beängstigende Welt vorhersehbar. Statt wegzunehmen: Sicherheit verbreitern.",
    "„Streng dich an“ treibt manchmal in die Enge. Bei Niedergeschlagenen zuerst das Leid annehmen.",
    "Halluzination und Wahn weder verneinen noch bestätigen. „Das macht Angst, nicht wahr“ — beim Gefühl bleiben.",
    "Das „Hab ich doch gerade gesagt“ hinunterschlucken. Vergessen kann Teil der Besonderheit sein.",
    "Nicht kindisch behandeln. Auch bei langsamem Verstehen: Respekt dem Alter gemäß.",
    "Warten ist vollwertige Unterstützung. Manche brauchen nur Zeit für den Übergang — wer wartet, sieht sie gehen.",
    "Blickkontakt nicht erzwingen. Für manche ist er quälend.",
    "Nicht erschrecken. Plötzlich von hinten nähern, plötzlich berühren — vermeiden.",
    "Versprechen halten. Viele kleine „es wurde gehalten“ werden zu Vertrauen.",
    "Beim Anfall etwas in den Mund zu stecken ist falsch — Ersticken und Verletzungen drohen. Ruhig bleiben, Zeit messen.",
    "Papiertüte bei Hyperventilation: heute nein. Hypoxie-Gefahr. Das langsame Ausatmen an der Seite stützen.",
    "Medizin der Medizin, Unterstützung der Unterstützung. Bei medizinischem Zweifel ohne Zögern Notruf und ärztliche Anweisung.",
    "Wachsen die Ausdrucksmittel, können Rufen und Aggression abnehmen. Karten und Geräte sind auch „Sprache“.",
    "Das „Lieblings-“ der Person ist der größte Verbündete. Lieblingsbeschäftigung, -ding, -thema: die Abkürzung zur Sicherheit.",
    "Die Ruhe der Begleitperson ist vor Ort der stärkste beruhigende Faktor.",
    "Achten Sie auch auf sich. Fällt die Begleitung aus, endet die Unterstützung. Ausruhen gehört zur Arbeit."
  ],

  /* ===== Lernen: Fallquiz (das „Warum“ zählt mehr als richtig/falsch) ===== */
  quizzes: [
    {
      q: "Eine betreute Person gerät in starke Panik. Was zuerst?",
      options: ["Laut zurufen: „Beruhige dich!“", "Ansprechen stoppen, Menschen und Reize verringern, das Abklingen abwarten", "Am Arm packen und wegbewegen"],
      answer: 1,
      explain: "Mitten in der Panik können Worte und Reize nicht verarbeitet werden und verschlimmern alles. Ansprechen stoppen, Menschen, Geräusche, Licht reduzieren, an einem sicheren Ort ruhig dabeibleiben. Das Abklingen abzuwarten ist die schnellste Antwort."
    },
    {
      q: "Ein Ritual um eine feste Reihenfolge blockiert die Aktivität. Was ist gut?",
      options: ["Mit Gewalt unterbrechen und weitermachen", "Wenn ungefährlich: mitgehen und das Ende sichtbar machen („noch 3-mal“ o. Ä.)", "Heimlich gegen etwas anderes austauschen"],
      answer: 1,
      explain: "Das Ritual ist die Sicherheitsstrategie der Person. Gewalt oder Täuschung kosten Vertrauen, und beim nächsten Mal wird es stärker. Der Kniff: mitgehen und das „Ende“ mit Timer oder „noch X-mal“ sichtbar machen."
    },
    {
      q: "Bei einem Übergriff kommen zwei Kollegen zur Verstärkung. Was zuerst?",
      options: ["Alle zusammen die Person umringen und stoppen", "Rollen teilen (einer bei der Person, einer bringt die anderen Nutzer weg)", "Alle verlassen den Ort"],
      answer: 1,
      explain: "Kommt Verstärkung, ist „Rollen teilen“ sicherer als sich an einem Punkt zu sammeln: Eine Person wendet sich ruhig dem Menschen zu, die anderen bringen Nutzer und Passanten weg. Umringen und Aufmerksamkeit bündeln verstärkt die Erregung."
    },
    {
      q: "Eine betreute Person rennt plötzlich hinaus. Wie folgen?",
      options: ["Mit voller Kraft direkt hinterher", "Im Blickfeld parallel folgen und gefährliche Richtungen (Fahrbahn usw.) abschirmen", "Um sie nicht zu verlieren, laut den Namen rufen"],
      answer: 1,
      explain: "Verfolgen von direkt hinten wird zum „Wettrennen“ und beschleunigt. Auch Rufen kann die Flucht verstärken. Von der Seite sichtbar bleiben und vorrangig Fahrbahn, Gleise, Wasser abschirmen. Und früh: Verstärkung und Meldung."
    },
    {
      q: "Ein Krampfanfall tritt auf. Was darf man NICHT tun?",
      options: ["Auf die Uhr sehen und die Zeit messen", "Ein Stäbchen oder Handtuch in den Mund stecken", "Beim drohenden Sturz stützen und Gefährliches wegräumen"],
      answer: 1,
      explain: "Etwas in den Mund zu stecken, „damit die Zunge nicht gebissen wird“, ist ein Irrtum — es drohen Ersticken und Verletzungen an Zähnen und Kiefer. Zu tun: Sicherheit schaffen und die Anfallszeit messen. Über 5 Minuten, Wiederholung, Verletzung, im Wasser: Notruf."
    },
    {
      q: "Hyperventilationsanfall. Die richtige Antwort?",
      options: ["In eine Papiertüte atmen lassen", "Dabei bleiben und das langsame Ausatmen mit der Stimme stützen", "Laut „Beruhige dich!“ sagen, um wachzurütteln"],
      answer: 1,
      explain: "Die Papiertüten-Methode birgt Hypoxie-Gefahr und wird nicht mehr empfohlen. Zu tun: an einem ruhigen Ort dabeibleiben und die Stimme dem Ausatmen anpassen — „langsam ausatmen“. Bis zur Beruhigung an der Seite bleiben."
    },
    {
      q: "Erster Ausflug an einen unbekannten Ort mit einem Menschen mit schwerer Verhaltensstörung. Das Wichtigste?",
      options: ["Am Tag selbst flexibel auf alles reagieren", "Vorab den Plan sorgfältig knüpfen, damit die Person Ausblick hat und einverstanden ist", "Das Programm möglichst vollpacken für einen erfüllten Tag"],
      answer: 1,
      explain: "Die eigentliche Arbeit liegt „vor dem Ereignis“. Ist das Verhalten erst ausgelöst, ist die Bewältigung schwer und quält alle. Vorab teilen: wo, was, wie lange, was danach — und Pausenort wie Heimkehrzeit vorab festlegen. Das ist die beste Unterstützung."
    },
    {
      q: "„Warte noch ein bisschen, sei brav.“ Wie kommt es besser an?",
      options: ["„Wenn die Uhr 3 zeigt, gehen wir. Bis dahin sitzen wir auf dem Stuhl und warten“", "„Sei ein braves Kind, ja?“", "„Gleich vorbei, halt durch“"],
      answer: 0,
      explain: "„Brav“, „noch ein bisschen“, „ordentlich“ sind in Wahrheit die am schwersten verständlichen Wörter. Wann, was, wie — konkret und sichtbar gesagt — kommt an."
    },
    {
      q: "Gelungenes loben — wann?",
      options: ["Am Ende des Tages, gesammelt", "„Im Moment selbst“, konkret", "Beim nächsten Misserfolg, im Vergleich"],
      answer: 1,
      explain: "Mit Abstand kommt Lob kaum an. Nicht „gut gemacht“, sondern „du hast die Schuhe selbst angezogen!“ — im Moment des Gelingens, konkret. Wer weiß, wofür gelobt wurde, nimmt es mit ins nächste Mal."
    },
    {
      q: "Zusprache an einen tief niedergeschlagenen Menschen. Was vermeiden?",
      options: ["Annehmen: „Das war schwer für Sie“", "Anfeuern: „Streng dich an! Alle haben es schwer“", "Still an der Seite bleiben"],
      answer: 1,
      explain: "Depression heilt nicht durch Willenskraft. „Streng dich an“ und Vergleiche können weiter in die Enge treiben. Zuerst das Leid annehmen. Und Äußerungen wie „ich will sterben“ nie überhören: sofort Medizin und Familie."
    },
    {
      q: "„Aus der Wand kommen Beschimpfungen“, sagt sie verängstigt. Was tun?",
      options: ["Die Fakten richtigstellen: „Da sind keine Stimmen“", "Beim Gefühl bleiben („Das ist unheimlich, nicht wahr“) und zum Beruhigenden überleiten", "„Was sagen sie denn?“ — gemeinsam hinhören"],
      answer: 1,
      explain: "Für die Person ist es wirklich zu hören. Weder widerlegen noch gemeinsam ausschmücken. Es geht nicht um wahr oder falsch, sondern um die „Angst“. Beim Gefühl bleiben und langsam zu einer beruhigenden, realen Tätigkeit zurückführen. Bei Zunahme: Untersuchung besprechen."
    },
    {
      q: "Im Supermarkt wird jemand plötzlich unruhig und hält sich die Ohren zu. Woran zuerst denken?",
      options: ["Absichtliche Störung", "Sensorische Belastung: Geräusche, Licht, Menschenmenge", "Bloß Hunger"],
      answer: 1,
      explain: "Bei Autismus-Spektrum u. a. können die Sinne sehr empfindlich sein. Hintergrundmusik, Beleuchtung, Stimmengewirr sind für die Person vielleicht quälende Reize. An einen ruhigen Ort wechseln, Gehörschutz nutzen — Reize verringern."
    },
    {
      q: "Die Lage hat sich beruhigt. Was ist in Sekunden getan und wichtig?",
      options: ["Nichts Besonderes nötig", "Auslöser → Verhalten → Ausgang festhalten und teilen", "Die Person einen Entschuldigungsbrief schreiben lassen"],
      answer: 1,
      explain: "Schon das kurze Festhalten, „was der Auslöser war“, dient der nächsten Prävention. Gesammelte Protokolle aus Auslöser × Antwort werden zur „Gebrauchsanleitung“ des Menschen. Nicht allein tragen — im Team teilen."
    },
    {
      q: "Die Medizin wird strikt verweigert. Was ist gut?",
      options: ["Festhalten und einflößen", "Einmal zurückziehen, Zeit lassen; hält es an, Ärztin/Arzt oder Apotheke fragen", "Heimlich unters Essen mischen"],
      answer: 1,
      explain: "Verweigerung hat Gründe (schwer zu schlucken, belastende Nebenwirkungen, unverstandener Sinn). Zwang kostet Vertrauen. Zurückziehen und Zeit lassen, Form oder Zeitpunkt ändern. Hält es an: nicht selbst entscheiden, sondern zu Ärztin/Arzt oder Apotheke. Heimliches Untermischen nur mit Zustimmung von Ärztin/Arzt und Familie."
    }
  ]
};
