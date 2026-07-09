/*
 * Soutien aux accompagnants (édition handicap) - Contenu (français)
 * Principes :
 *  - Ce sont des tendances et des pistes, jamais des étiquettes. La personne en face de vous passe avant tout.
 *  - Pas de décision médicale. En cas de doute, orienter vers les urgences locales / le médecin traitant.
 *  - La structure (ids / emoji / index de réponse / renvois de scènes) reflète exactement content.ja.js.
 */
window.SHIEN_CONTENT = window.SHIEN_CONTENT || {};
window.SHIEN_CONTENT.fr = {
  version: 1,

  basis: [
    "NICE britannique NG10 « Violence et agressivité : prise en charge à court terme » (2015) — d'abord la désescalade sans contrainte. La contention physique est un dernier recours.",
    "NICE britannique NG11 « Comportements-défis et déficience intellectuelle » (2015) — Soutien comportemental positif (PBS) : comprendre la raison du comportement et aménager l'environnement. Inclut le soutien aux familles et aux aidants.",
    "Soutien comportemental positif (PBS) / approche Low Arousal (basse stimulation) — réduire les exigences et les stimulations ; ne pas entrer en confrontation.",
    "Accompagnement structuré de l'autisme (TEACCH) / entraînement à la communication fonctionnelle (FCT).",
    "Premiers secours en cas de crise d'épilepsie : Epilepsy Foundation (États-Unis) & CDC « Stay·Safe·Side » et la règle des 5 minutes.",
    "Convention de l'ONU relative aux droits des personnes handicapées (CDPH) / OMS QualityRights — protéger la dignité et l'autodétermination ; éviter autant que possible la coercition et la contention."
  ],

  scenes: [
    {
      id: "medical", medical: true,
      title: "Crise, blessure, conscience anormale", emoji: "🚑",
      lead: "Cette appli ne prend pas de décision médicale. En cas de doute, appelez les urgences — c'est la bonne décision.",
      do: [
        "Si la personne risque de tomber, la soutenir et l'allonger doucement ; écarter les objets dangereux (retirer les lunettes, desserrer le col)",
        "Quand les convulsions cessent, la tourner sur le côté (position latérale de sécurité)",
        "Noter l'heure de début de la crise (chronométrer)"
      ],
      call119: [
        "Première crise de sa vie",
        "Convulsions durant plus de 5 minutes",
        "Crises qui se répètent à court intervalle, ou pas de retour de la conscience",
        "Blessure, ou respiration anormale",
        "Crise dans l'eau ou pendant le bain"
      ],
      note: "Si la personne a des consignes individuelles de son médecin (traitement de secours, suppositoire, etc.), suivez ces consignes.",
      dont: [
        "Mettre quelque chose dans la bouche (« empêcher de se mordre la langue » est une idée fausse — risque d'étouffement et de blessure)",
        "Maintenir le corps de force pour tenter d'arrêter la crise",
        "Donner à manger ou à boire juste après la crise"
      ],
      outdoor: [
        "Éloigner la personne du bord du quai, de la chaussée, des escaliers (ne la déplacer que si l'endroit est dangereux)",
        "En gare, demander de l'aide au personnel ; dans la rue, aux passants (dire clairement : « Appelez une ambulance, s'il vous plaît »)",
        "Donner aux urgences le nom de la gare, le numéro de sortie, un point de repère"
      ],
      after: [
        "Noter la durée et le déroulement (combien de minutes, quels mouvements, l'état de conscience ensuite)",
        "Prévenir le médecin traitant et la famille",
        "Si la personne a sommeil, la laisser se reposer dans un endroit sûr"
      ],
      why: "Dans une crise, l'essentiel n'est pas de « l'arrêter », mais de veiller à la sécurité, de chronométrer et de transmettre. Votre calme est la meilleure aide que vous puissiez apporter.",
      src: "Association japonaise de l'épilepsie « Aide et observation pendant la crise » / Epilepsy Foundation & CDC (É.-U.) « Stay·Safe·Side » (premiers secours, règle des 5 minutes)"
    },
    {
      id: "panic",
      title: "Panique", emoji: "🌀",
      do: [
        "Mettre la personne et l'entourage en sécurité (éloigner les objets dangereux)",
        "Réduire les stimulations (cesser de parler, écarter les gens, baisser le son et la lumière)",
        "Attendre. Rester à côté, en silence, jusqu'à l'apaisement"
      ],
      dont: [
        "Crier pour faire cesser, gronder (cela renforce l'agitation)",
        "Maintenir le corps de force (blessure, perte de confiance — à un cheveu de la maltraitance)",
        "Mitrailler de questions, raisonner (la personne ne peut pas traiter, cela empire)",
        "Encercler la personne, attirer l'attention"
      ],
      outdoor: [
        "Aller vers un endroit hors du flux des passants — le long d'un mur, derrière un pilier, un banc",
        "Si la personne ne peut pas bouger, ne pas forcer le déplacement ; faites écran de votre corps pour couper les regards et la foule",
        "Un mot bref à l'entourage (« Tout va bien, ça va se calmer ») — cela évite les interventions bien intentionnées ou les appels aux secours"
      ],
      after: [
        "Proposer de l'eau et du repos",
        "Noter le déclencheur (bruit ? monde ? changement de programme ? douleur ?)",
        "Partager au sein de la structure"
      ],
      why: "La panique n'est pas un « caprice » : c'est une réaction à des stimulations, une angoisse ou une perte de repères que la personne ne peut plus traiter. C'est elle qui souffre le plus. Un environnement apaisant et du temps sont le meilleur soutien.",
      src: "Manuel de formation des accompagnants aux troubles graves du comportement (Nozominosono, Japon) / NICE NG11 (PBS) · NG10 (agressivité : d'abord la désescalade sans contrainte)"
    },
    {
      id: "selfharm",
      title: "Automutilation", emoji: "🤕",
      do: [
        "Évaluer si la vie est en danger (coups de tête, morsures fortes : amortir physiquement avec un coussin, etc.)",
        "Réduire les stimulations, aller vers un environnement apaisant",
        "Veiller en silence, puis soigner une fois le calme revenu"
      ],
      dont: [
        "Crier « Arrête ! » (l'attention peut renforcer le comportement)",
        "Continuer à retenir le bras de force",
        "Punir, réprimander"
      ],
      outdoor: [
        "Éloigner le corps des surfaces dures — asphalte, piliers, glissières (glisser un sac ou une veste entre les deux peut aider)",
        "Si un attroupement se forme, dire un mot bref (« Tout va bien ») — les regards sont eux-mêmes une stimulation"
      ],
      after: [
        "Vérifier et soigner les blessures",
        "Noter la situation juste avant (que venait-il de se passer ?)",
        "Si cela se répète, discuter d'une révision du plan d'accompagnement (médecin, référent)"
      ],
      why: "L'automutilation a souvent une fonction : exprimer un inconfort, demander, vérifier une sensation, chercher l'attention. Le vrai travail est de faire grandir un « moyen de remplacement » adapté à cette fonction (principe de l'analyse appliquée du comportement).",
      src: "Manuel de formation des accompagnants aux troubles graves du comportement (Nozominosono, Japon) / NICE NG11 (PBS) · NG10 (agressivité : d'abord la désescalade sans contrainte)"
    },
    {
      id: "aggression",
      title: "Agression, casse d'objets", emoji: "💥",
      do: [
        "D'abord prendre de la distance (au moins un bras). Éloigner les autres usagers, sécuriser les alentours",
        "Appeler du renfort tout de suite et prévenir le responsable (tout en gérant la situation. Ne restez pas seul·e)",
        "Voix basse, mots courts — ou se taire et réduire les stimulations"
      ],
      dont: [
        "Empoigner de face, plaquer au sol (risque d'accident et de maltraitance)",
        "Crier, gronder, soutenir le regard en défi",
        "Exiger des comptes : « Pourquoi tu fais ça ?! »"
      ],
      outdoor: [
        "Priorité absolue : éloigner les passants (« Excusez-moi, écartez-vous s'il vous plaît », clairement)",
        "En gare, demander l'aide du personnel ou des agents de sécurité (dehors, ne restez pas seul·e)"
      ],
      after: [
        "Vérifier blessures et dégâts. Prévenir selon les règles de la structure",
        "Noter le déclencheur et le déroulement",
        "Partager les signes annonciateurs (visage, voix, gestes) entre collègues"
      ],
      why: "L'agression est le plus souvent l'« explosion » d'une demande, d'un inconfort ou d'une peur qui ne passe pas. La personne ne vise pas quelqu'un : cela finit sur quelqu'un. Connaître les signes annonciateurs est le premier pas de la prévention.",
      src: "Manuel de formation des accompagnants aux troubles graves du comportement (Nozominosono, Japon) / NICE NG11 (PBS) · NG10 (agressivité : d'abord la désescalade sans contrainte)"
    },
    {
      id: "runaway",
      title: "Fugue, disparition", emoji: "🏃",
      do: [
        "Ne pas courir droit derrière (poursuivre fait accélérer). Rester dans son champ de vision, en parallèle, et barrer en priorité les directions dangereuses : chaussée, eau, voies ferrées",
        "Appeler du renfort tout de suite et prévenir le responsable (tout en agissant. Ne gérez pas seul·e ni entre vous)",
        "Si vous la perdez de vue, sans hésiter : alerte selon les règles de la structure (police) et début des recherches"
      ],
      dont: [
        "Crier son nom sans arrêt (cela peut renforcer la fuite)",
        "Garder cela pour soi, retarder le signalement",
        "Gronder au retour (la personne apprendrait : « revenir = il se passe quelque chose de désagréable »)"
      ],
      outdoor: [
        "En gare, si vous la perdez de vue : tout de suite le personnel (quais, portillons, caméras — le personnel est le plus rapide)",
        "Décrire la tenue, la corpulence, les lieux probables et demander de l'aide (n'hésitez pas : quelques minutes peuvent décider d'une vie)"
      ],
      after: [
        "Aux retrouvailles, rejoindre calmement et vérifier les blessures",
        "Noter l'itinéraire et les horaires (la direction prise est un indice pour l'accompagnement)",
        "Ne pas laisser la famille porter cela seule. Solliciter l'appui ou les consignes des accompagnants concernés (référent, auxiliaires) et, selon la situation, du médecin traitant",
        "Revoir les issues et le dispositif de veille"
      ],
      why: "Derrière une fugue, il y a souvent « une stimulation à fuir » ou « un but à rejoindre ». Chercher la raison plutôt que blâmer : c'est cela qui prépare la prévention suivante.",
      src: "Bases de la formation à l'accompagnement des sorties (sécurité à l'extérieur), etc."
    },
    {
      id: "freeze",
      title: "Figé, ne bouge plus", emoji: "🧊",
      do: [
        "Attendre (en se fixant un temps : d'abord 5 minutes)",
        "Réduire stimulations et exigences (ne pas presser, ne pas toucher)",
        "Donner un seul repère sur la suite, court et visible (« après, le thé »)"
      ],
      dont: [
        "Tirer par la main pour faire bouger",
        "Enchaîner les sollicitations (« allez, on y va, viens »)",
        "Discuter avec les autres au-dessus de sa tête"
      ],
      outdoor: [
        "Au milieu d'un passage, guider doucement hors du flux (le long d'un mur). Si la personne ne peut pas bouger, faire écran et attendre",
        "Plutôt que presser, un mot : « On a le temps ». À l'entourage, brièvement : « Nous attendons un instant »"
      ],
      after: [
        "Noter ce qui a permis de repartir (du temps ? un objet montré ? un changement de personne ?)",
        "Repérer et partager les situations où cela se produit"
      ],
      why: "Se figer n'est pas un refus : c'est souvent « un traitement de la transition qui prend du temps ». Auprès de ceux qui repartent quand on attend, l'accompagnant qui sait attendre apprend beaucoup.",
      src: "Principes de l'accompagnement structuré de l'autisme (TEACCH, etc.)"
    },
    {
      id: "shouting",
      title: "Cris, vocalises", emoji: "📢",
      do: [
        "D'abord questionner l'environnement (chaud ? bruyant ? faim ? douleur ?)",
        "Guider vers un endroit calme, ou baisser les stimulations autour",
        "C'est dans les moments calmes qu'il faut s'impliquer le plus"
      ],
      dont: [
        "Répondre aux cris par des cris",
        "Répéter « Silence ! »",
        "Céder à chaque fois pour faire taire (la personne apprend : « crier, ça marche »)"
      ],
      outdoor: [
        "Se déplacer lentement vers un endroit calme (bout du quai, hors des portillons, devant le magasin)",
        "Ne pas se disputer avec qui fait une remarque : « Excusez-nous, c'est lié à son handicap », brièvement. Montrer une carte ou un badge d'aide peut aider"
      ],
      after: [
        "Noter l'heure, le lieu, ce qui a précédé (si c'est à heure fixe, penser à l'état de santé, à l'environnement)",
        "Vérifier aussi les antécédents de douleur (dents, oreilles, ventre)",
        "Consigner les changements notables et les partager avec l'équipe et le responsable"
      ],
      why: "La voix est le moyen d'expression le plus accessible. Quand d'autres moyens grandissent (cartes, pointage, appareils), les cris diminuent souvent.",
      src: "Principes de l'entraînement à la communication fonctionnelle (FCT), etc."
    },
    {
      id: "fixation",
      title: "Bloqué par une fixation", emoji: "🔁",
      do: [
        "Si c'est sans danger, d'abord l'accompagner (la fixation est le moyen de se rassurer de la personne)",
        "Rendre la fin visible (minuteur, « encore 3 fois »)",
        "Si un changement est indispensable : prévenir + proposer 2 options (« A ou B, tu choisis ? »)"
      ],
      dont: [
        "Couper court de force",
        "Retirer l'objet par la ruse (confiance perdue, et ce sera plus fort la fois suivante)",
        "Faire une fausse promesse pour s'en sortir"
      ],
      outdoor: [
        "Pour les fixations sur un train, un itinéraire, un ordre : prévoir large est la meilleure prévention",
        "S'il faut changer : ne pas s'obstiner sur place, donner un repère (« aujourd'hui le chemin A, la prochaine fois le B »)"
      ],
      after: [
        "Noter l'objet et les conditions de la fixation (quand, où, sur quoi)",
        "Étudier un dispositif d'annonce préalable (cartes imagées, planning)",
        "Consigner les difficultés et les partager avec l'équipe et le responsable"
      ],
      why: "La fixation est la façon dont la personne rend prévisible un monde angoissant. Plutôt que la lui enlever, élargir son socle de sécurité et augmenter peu à peu les choix possibles.",
      src: "Manuel de formation aux troubles graves du comportement / accompagnement structuré (TEACCH) / NICE NG11 (PBS)"
    },
    {
      id: "hallucination",
      title: "Voix, propos de type délirant", emoji: "💭",
      do: [
        "Ne pas nier, ne pas confirmer (répondre au ressenti : « C'est ce que vous entendez. C'est inquiétant, n'est-ce pas »)",
        "Ramener doucement vers un sujet ou une activité rassurante et concrète",
        "Si cela augmente : partager avec le médecin traitant et la famille, envisager une consultation"
      ],
      dont: [
        "Argumenter : « Ça n'existe pas »",
        "Entrer dans le récit et l'amplifier ensemble",
        "Rire, traiter à la légère"
      ],
      after: [
        "Noter le contenu, l'heure, la fréquence (changement de traitement ? sommeil suffisant ?)",
        "Contenus d'injonction (« on me dit de mourir », etc.) : orientation médicale rapide"
      ],
      why: "Pour la personne, cela s'entend et se voit réellement. L'enjeu n'est pas le vrai ou le faux, mais l'angoisse que cette expérience provoque. La priorité, c'est la sécurité intérieure.",
      src: "Connaissances générales des guides destinés aux familles (urgences psychiatriques, schizophrénie)"
    },
    {
      id: "hyperventilation",
      title: "Hyperventilation", emoji: "😮‍💨",
      do: [
        "Aller au calme. Asseoir la personne, rester auprès d'elle",
        "« Tout va bien. Soufflez lentement » — accompagner la voix sur l'expiration",
        "Rester ensemble jusqu'au retour au calme"
      ],
      dont: [
        "Appliquer un sac en papier sur la bouche (méthode du sac : risque d'hypoxie, elle n'est plus recommandée)",
        "Dire fort : « Calme-toi ! »",
        "Laisser la personne seule sur place"
      ],
      outdoor: [
        "Asseoir sur un banc ou une marche, s'éloigner de l'attroupement",
        "À l'entourage, un mot : « Tout va bien, un peu de repos et ça ira »"
      ],
      after: [
        "Première fois, maladie connue ou pas d'amélioration : orientation médicale",
        "Noter le déclencheur (angoisse, fatigue, foule)",
        "Si cela se répète, consigner et partager avec l'équipe et le responsable"
      ],
      why: "L'hyperventilation en elle-même est rarement mortelle, mais la personne vit une peur de « mourir peut-être ». Une voix posée et une présence sont le meilleur remède.",
      src: "Documentation médicale sur le syndrome d'hyperventilation (méthode du sac non recommandée)"
    },
    {
      id: "medication",
      title: "Refus de médicaments", emoji: "💊",
      do: [
        "Se retirer une fois (laisser du temps, puis réessayer)",
        "Changer la forme, le moment, la personne qui aide",
        "Si cela persiste, ne pas décider seul·e : consulter le médecin ou le pharmacien (changement de galénique, aide à la prise)"
      ],
      dont: [
        "Maintenir pour faire avaler",
        "Mélanger à la nourriture à son insu (source de méfiance. Le cas échéant, seulement avec l'accord du médecin et de la famille)",
        "Marchander : « Si tu ne prends pas, pas de… »"
      ],
      after: [
        "Noter comment se manifeste le refus (le goût ? la taille ? l'humeur ? — c'est peut-être un signe d'effet indésirable)",
        "Le signaler impérativement à la consultation"
      ],
      why: "Un refus a ses raisons (difficile à avaler, effets pénibles, sens incompris). La recherche des causes se fait avec le médical. Forcer fait perdre bien plus qu'un comprimé aujourd'hui.",
      src: "Connaissances générales sur l'aide à la prise de médicaments (ordres des pharmaciens, etc.)"
    },
    {
      id: "anxiety",
      title: "Forte angoisse, « je veux rentrer »", emoji: "🏠",
      do: [
        "Accueillir le sentiment tel quel (« Vous voulez rentrer, n'est-ce pas »)",
        "Donner un repère concret (« après le goûter, c'est le bus »)",
        "Faire le pont vers un objet rassurant, une activité aimée"
      ],
      dont: [
        "Éluder encore et encore (« c'est bientôt fini, va »)",
        "Convaincre à coups d'arguments",
        "Donner un faux horaire (confiance perdue)"
      ],
      outdoor: [
        "Donner des repères en unités visibles : « encore 2 gares », « après ce coin de rue »",
        "Les jours de forte angoisse, oser écourter le programme fait aussi partie de l'accompagnement"
      ],
      after: [
        "Noter les heures et jours où l'angoisse monte",
        "Partager les astuces qui rassurent (objets, environnement)"
      ],
      why: "« Je veux rentrer » est souvent un mot qui cherche la sécurité plus que le lieu. On augmente un à un les éléments qui font sentir : « ici, je suis en sécurité ».",
      src: "Connaissances générales sur l'accompagnement des personnes très anxieuses"
    }
  ],

  /* ===== Communiquer : phrases toutes prêtes ===== */
  phraseGroups: [
    { id: "feel",  label: "Émotions",  emoji: "💙", items: ["Je suis content(e)", "Je suis triste", "J'ai peur", "Je ne veux pas", "Ça va", "Je suis fâché(e)"] },
    { id: "body",  label: "Corps",  emoji: "🩹", items: ["J'ai mal", "Je suis fatigué(e)", "Toilettes", "J'ai faim", "J'ai soif", "J'ai sommeil", "Je me sens mal"] },
    { id: "ask",   label: "Demandes", emoji: "🙏", items: ["Aidez-moi", "Je veux me reposer", "Parlez lentement", "Répétez, s'il vous plaît", "Écrivez, s'il vous plaît", "Moins de bruit, s'il vous plaît"] },
    { id: "reply", label: "Réponses",  emoji: "💬", items: ["Oui", "Non", "Je ne sais pas", "Attendez un peu", "Merci", "Pardon"] }
  ],

  /* ===== Registre : options (tout au doigt, en quelques dizaines de secondes) ===== */
  logOptions: {
    triggers: ["Bruit / lumière", "Personnes proches / foule", "Changement de programme", "Demande non satisfaite", "Douleur / état de santé", "Attente", "Je ne sais pas", "Autre"],
    durations: ["≤ 5 min", "≤ 15 min", "≤ 30 min", "Plus long"],
    responses: ["Réduit les stimulations", "Changé d'endroit", "Veillé à distance", "Donné un repère sur la suite", "Utilisé l'écrit / un support visuel", "Orienté vers le médical / les urgences", "Autre"],
    injuries: ["Aucun", "Blessure de la personne", "Blessure d'un tiers", "Objet cassé"]
  },

  traits: [
    {
      id: "asd", name: "Trouble du spectre de l'autisme (TSA)", emoji: "🧩",
      short: "Particularités du lien, des intérêts, des sens",
      what: [
        "Une particularité qui associe une façon singulière d'être en relation et de communiquer, des intérêts et rituels marqués, et une sensibilité sensorielle accrue (ou diminuée). Avec ou sans déficience intellectuelle.",
        "L'expression varie énormément d'une personne à l'autre (« spectre » = continuum). Ne collez pas d'étiquette : regardez la personne.",
        "Pour elle, le monde est difficile à prévoir et très stimulant — réduire cette insécurité est le cœur de l'accompagnement."
      ],
      prepare: [
        "Lieux nouveaux, sorties : « réviser » avant, avec photos ou repérage. Partager le déroulé à l'avance, sous une forme visible.",
        "Quand un changement est inévitable : l'annoncer tôt + laisser un choix (le changement brusque est le pire stress).",
        "Ne pas presser, ne pas surprendre. Un déroulé auquel la personne adhère prépare la sérénité du jour J."
      ],
      comm: [
        "Court, concret, une chose à la fois (« quand l'horloge marque 3 heures » plutôt que « plus tard »)",
        "Du visible plutôt que des mots (images, photos, écrit, objets réels)",
        "Sous-entendus, blagues, ironie passent mal. Affirmatif et clair (« on marche » plutôt que « on ne court pas »)",
        "La réponse peut prendre du temps. Attendre sans presser"
      ],
      env: [
        "Montrer le programme à l'avance (structuration du planning)",
        "Réduire les stimulations (bruit, lumière, foule). Prévoir casque antibruit ou coin calme",
        "Tout changement s'annonce. Le changement brusque est le plus grand stress"
      ],
      scenes: ["panic", "runaway", "fixation", "shouting", "selfharm", "freeze"],
      ng: [
        "Forcer le regard dans les yeux",
        "Couper une fixation par la force",
        "Gronder dans l'abstrait (« tiens-toi bien », « lis l'ambiance »)"
      ],
      src: "NICE NG11 (PBS) / accompagnement structuré de l'autisme (TEACCH) / DSM-5"
    },
    {
      id: "adhd", name: "Trouble du déficit de l'attention avec hyperactivité (TDAH)", emoji: "⚡",
      short: "Inattention, agitation, impulsivité marquées",
      what: [
        "Inattention (distraction, oublis) et hyperactivité-impulsivité (difficulté à rester en place, à attendre), d'une intensité inhabituelle pour l'âge.",
        "Ni paresse ni trait de caractère : une façon différente de fonctionner des « fonctions exécutives » du cerveau.",
        "À force d'être grondées, ces personnes perdent confiance. Valoriser ce qui est réussi porte ses fruits."
      ],
      comm: [
        "Une consigne à la fois, courte. Ajouter mémos et rappels",
        "Féliciter « à l'instant même » de la réussite, concrètement (à retardement, l'effet s'émousse)",
        "Ne pas rabrouer. Ne pas blâmer le comportement : chercher ensemble une méthode"
      ],
      env: [
        "Réduire les sources de distraction (place, objets, bruit)",
        "Rendre visible (liste de tâches, minuteur, tableau de suivi)",
        "Ménager des pauses et des occasions de bouger souvent"
      ],
      scenes: ["shouting", "runaway", "anxiety"],
      ng: [
        "Répéter « Combien de fois faudra-t-il te le dire ? »",
        "Longues explications, plusieurs consignes à la fois",
        "Prendre l'impulsivité pour un défaut de la personne"
      ],
      src: "NICE (recommandations TDAH) / DSM-5"
    },
    {
      id: "id", name: "Déficience intellectuelle", emoji: "📘",
      short: "Compréhension et jugement plus lents",
      what: [
        "Un développement plus lent de la compréhension, du jugement, de la lecture-écriture-calcul, du maniement de l'argent et du temps, qui rend le quotidien « difficile à déchiffrer ».",
        "Le degré, les points forts et faibles varient selon les personnes. Pas d'infantilisation : un respect à la mesure de l'âge.",
        "Souvent, la personne n'arrive pas à dire « je ne comprends pas » et reste en difficulté. Changez la façon de transmettre, et le message passe."
      ],
      prepare: [
        "Montrer à l'avance ce qui va se faire, avec photos ou objets, en « faisant voir ». Éviter le « au pied levé » du jour J.",
        "Découper les étapes en petits pas, les mettre en forme réalisable avant de se lancer.",
        "Un planning large, où la personne avance à son rythme."
      ],
      comm: [
        "Lentement, court, avec des mots simples. Éviter les termes difficiles et le trop-à-la-fois",
        "Du concret plutôt que de l'abstrait (objets, images, démonstration). Faire voir",
        "Plutôt que « compris ? », vérifier en faisant faire",
        "Poliment, selon l'âge (pas de langage bébé)"
      ],
      env: [
        "Des étapes visibles (fiches photos, listes à cocher)",
        "Restreindre les options pour faciliter le choix",
        "Découper en petits pas qui permettent de réussir"
      ],
      scenes: ["runaway", "fixation", "anxiety", "freeze"],
      ng: [
        "Infantiliser, prendre un ton condescendant",
        "Presser, donner beaucoup de consignes à la fois",
        "Reprocher : « je te l'ai déjà dit »"
      ],
      src: "NICE NG11 (PBS) / DSM-5 (trouble du développement intellectuel)"
    },
    {
      id: "ld", name: "Troubles des apprentissages (troubles « dys »)", emoji: "✏️",
      short: "Difficulté ciblée : lire, écrire, calculer",
      what: [
        "Sans retard global de l'intelligence, seule une « forme d'apprentissage » précise — lire, écrire, calculer — est nettement difficile.",
        "Ni manque d'effort ni problème d'intelligence : un profil de traitement de l'information avec des forces et des faiblesses.",
        "Sans blâmer la difficulté, compenser par d'autres moyens révèle les capacités."
      ],
      comm: [
        "Lire est difficile → lecture à voix haute, aides, audio. Écrire est difficile → clavier, photo, enregistrement",
        "Transmettre à l'oral et à l'écrit, les deux",
        "Éviter de faire faire la tâche difficile devant les autres"
      ],
      env: [
        "S'appuyer sur le numérique (tablette, saisie vocale, calculatrice)",
        "Grandes lettres, interlignes larges, mise en page simple",
        "Permettre de participer par son canal fort"
      ],
      scenes: ["anxiety"],
      ng: [
        "Décréter que « c'est de la paresse »",
        "Imposer lecture à voix haute ou copie au tableau",
        "Comparer aux autres"
      ],
      src: "DSM-5 (trouble spécifique des apprentissages) / principe des aménagements raisonnables (CDPH)"
    },
    {
      id: "scz", name: "Schizophrénie", emoji: "🌫️",
      short: "Hallucinations, délire, baisse d'élan — par vagues",
      what: [
        "Une maladie psychique où peuvent survenir hallucinations (entendre des voix inexistantes), idées délirantes, pensée désorganisée, perte d'élan.",
        "Elle évolue par vagues, avec de bonnes périodes. Avec un traitement et un accompagnement adaptés, on vit paisiblement.",
        "« Pour la personne, c'est réel » — ne pas disputer, accompagner l'angoisse : c'est la base."
      ],
      comm: [
        "Ni nier ni confirmer hallucinations et délire ; répondre au ressenti (« c'est inquiétant, n'est-ce pas »)",
        "Court, doux, peu de stimulations",
        "Être attentif à la poursuite du traitement et au sommeil"
      ],
      env: [
        "Un cadre calme et rassurant. Éviter changements brusques et stimulations fortes",
        "Repérer tôt les variations (insomnie, montée des propos persécutifs)",
        "Se coordonner avec la personne, la famille, le médecin traitant"
      ],
      scenes: ["hallucination", "anxiety", "panic"],
      ng: [
        "Vouloir réfuter le délire par la logique",
        "Entrer dans le récit et l'amplifier ensemble",
        "Prendre pour de la paresse et forcer l'activité"
      ],
      src: "NICE (recommandations psychose/schizophrénie) / OMS QualityRights"
    },
    {
      id: "mood", name: "Dépression, trouble bipolaire (troubles de l'humeur)", emoji: "🌗",
      short: "Abattement profond / vagues de l'humeur",
      what: [
        "La « dépression » : abattement durable, perte d'élan et d'intérêt. Le « trouble bipolaire » : alternance entre dépression et exaltation (manie).",
        "La volonté ne guérit pas. « Courage ! » peut même enfoncer la personne.",
        "Comprendre les vagues, ne pas surmener, veiller : c'est cela qui soutient."
      ],
      comm: [
        "Ne pas dire « courage » ni « c'est dans la tête ». D'abord accueillir la souffrance",
        "Ne pas exiger décisions ou tâches complexes",
        "En phase d'exaltation : freiner ensemble grandes décisions et dépenses"
      ],
      env: [
        "Un cadre où se reposer, un rythme adapté. Ne pas blâmer les jours « sans »",
        "Aider à réguler le rythme de vie et le sommeil",
        "Ne jamais banaliser « je veux mourir » : médical et famille aussitôt"
      ],
      scenes: ["anxiety", "selfharm"],
      ng: [
        "Encourager à l'excès, exhorter",
        "Comparer : « tout le monde souffre »",
        "Laisser passer les idées suicidaires"
      ],
      src: "NICE (recommandations dépression/trouble bipolaire) / connaissances générales de prévention du suicide"
    },
    {
      id: "anx", name: "Troubles anxieux, TOC", emoji: "🫧",
      short: "Anxiété excessive, vérifications compulsives",
      what: [
        "Une anxiété ou des peurs démesurées (attaques de panique, vérifications impossibles à arrêter) qui bousculent la vie quotidienne.",
        "Ce n'est pas « trop s'en faire » : le frein cérébral de l'anxiété fonctionne mal.",
        "En accumulant la sécurité, cela s'apaise peu à peu."
      ],
      comm: [
        "Ne pas nier l'anxiété (« je suis là » plutôt que « ce n'est rien »)",
        "Des repères concrets (« encore 10 minutes et c'est fini »)",
        "Ne pas interdire de but en blanc les rituels de vérification"
      ],
      env: [
        "Un cadre prévisible et rassurant",
        "Réduire stimulations et pression",
        "Un endroit calme où poser la respiration"
      ],
      scenes: ["anxiety", "hyperventilation", "panic", "fixation"],
      ng: [
        "Balayer d'un « tu t'inquiètes trop »",
        "Exposer de force à la situation redoutée",
        "Interdire les rituels par la force"
      ],
      src: "NICE (recommandations troubles anxieux/TOC)"
    },
    {
      id: "ptsd", name: "TSPT, difficultés d'attachement", emoji: "🕯️",
      short: "Un vécu douloureux qui se prolonge aujourd'hui",
      what: [
        "Un vécu douloureux (maltraitance, catastrophe, accident…) qui se prolonge en flashbacks, hypervigilance, évitement. Certaines personnes portent aussi des blessures d'attachement.",
        "Ni « exagération » ni « du passé » : une réaction qui continue aujourd'hui.",
        "Sécurité, apaisement et la confiance « cette personne ne me fera rien » sont le socle du rétablissement."
      ],
      comm: [
        "Ne pas toucher brusquement, ne pas approcher par-derrière (ne pas surprendre)",
        "Laisser la possibilité de choisir et de refuser (le sentiment de contrôle rassure)",
        "Tenir ses promesses, accumuler les petites confiances"
      ],
      env: [
        "Un cadre sûr et prévisible. Éviter les éclats de voix, les approches soudaines",
        "Savoir que certains sons, lieux, situations sont des déclencheurs",
        "Pendant un flashback : dire calmement « ici, maintenant, vous êtes en sécurité »"
      ],
      scenes: ["panic", "anxiety", "selfharm"],
      ng: [
        "Faire raconter le traumatisme de force",
        "Surprendre, toucher brusquement",
        "Traiter les réactions de « caprice »"
      ],
      src: "NICE (recommandations TSPT) / principes du trauma-informed care"
    },
    {
      id: "epi", name: "Épilepsie", emoji: "🧠",
      short: "Crises dues à un dérèglement cérébral passager",
      what: [
        "Un dérèglement électrique passager du cerveau provoque des « crises ». Des convulsions jusqu'à une brève absence, les formes sont variées.",
        "Hors des crises, la plupart des personnes vivent normalement. Ce ne sont pas des « personnes dangereuses ».",
        "L'important : une réaction calme pendant la crise et connaître la « règle des 5 minutes »."
      ],
      comm: [
        "La crise n'est pas voulue. Veiller avec calme",
        "Après la crise, il peut y avoir de la confusion. Laisser se reposer sans presser",
        "Connaître à l'avance le « type de crise » de la personne et les consignes du médecin"
      ],
      env: [
        "Prévenir les blessures (angles, points d'eau, hauteurs, bain)",
        "Consigner les crises (heure, déroulement) et partager",
        "Soutenir discrètement la prise du traitement"
      ],
      scenes: ["medical"],
      ng: [
        "Mettre quelque chose dans la bouche (faux : risque d'étouffement, de blessure)",
        "Maintenir de force",
        "Faire manger ou boire juste après la crise"
      ],
      src: "Epilepsy Foundation & CDC (É.-U.) « Stay·Safe·Side » / Association japonaise de l'épilepsie"
    },
    {
      id: "abi", name: "Lésions cérébrales acquises (troubles cognitifs)", emoji: "🧭",
      short: "Handicap invisible après accident ou maladie",
      what: [
        "Après un accident ou une maladie (traumatisme crânien, AVC…), la mémoire, l'attention, l'organisation, le contrôle des émotions sont atteints de façon peu visible.",
        "Cela ne se voit pas de l'extérieur : « il a changé », entend-on à tort. La personne elle-même est désorientée.",
        "Beaucoup de capacités demeurent. Des astuces de compensation élargissent la vie quotidienne."
      ],
      comm: [
        "Une chose à la fois, court. Ajouter mémos et rappels",
        "Quand l'émotion monte : réduire les stimulations, ne pas blâmer",
        "Ne pas reprocher « je viens de le dire » (c'est un trouble de la mémoire)"
      ],
      env: [
        "Rendre visibles étapes et planning (mémos, agenda, alarmes)",
        "Un cadre calme, sans distraction",
        "Stabiliser : mêmes étapes, mêmes lieux"
      ],
      scenes: ["shouting", "anxiety", "freeze"],
      ng: [
        "Interpréter comme « paresse » ou « caprice »",
        "Donner beaucoup de consignes d'un coup",
        "Pointer sans cesse ce qui ne va pas"
      ],
      src: "Connaissances générales sur les lésions cérébrales acquises (Centre national de réadaptation, Japon, etc.)"
    },
    {
      id: "sbd", name: "Troubles graves du comportement", emoji: "🆘",
      short: "Automutilation, agression… un état exigeant un accompagnement renforcé",
      what: [
        "Un « état » — pas un diagnostic — où automutilation, agression, fixations intenses, casse surviennent avec une fréquence et une intensité telles qu'un accompagnement particulièrement renforcé est nécessaire.",
        "La personne n'est pas « quelqu'un qui pose problème » : elle est en difficulté. En toile de fond : l'impossibilité de se faire comprendre, l'inadéquation avec l'environnement.",
        "Avec le soutien comportemental positif (PBS), lire les raisons du comportement et aménager l'environnement change beaucoup les choses."
      ],
      prepare: [
        "Le vrai travail se joue « avant que le comportement survienne ». Sorties et événements commencent par un plan réaliste, soigneusement préparé.",
        "Que la personne ait des repères et adhère (où, quoi, combien de temps, et ce qui se passe après — partagé à l'avance).",
        "Un déroulé qui évite stimulations pénibles, foule, attente. Décider d'avance le lieu de pause, le moment du retour, la porte de sortie.",
        "Ne pas chercher à rattraper après la panique — c'est éprouvant pour tous. Noter ce qui a marché / ce qui a pesé, et nourrir le plan suivant."
      ],
      comm: [
        "Chercher la « fonction (raison) » du comportement (demande, évitement, attention, sensation)",
        "Faire grandir les moyens d'expression (cartes, appareils)",
        "S'impliquer d'autant plus dans les moments où ça va"
      ],
      env: [
        "Réduire stimulations, exigences, ruptures de repères (structuration, basse stimulation)",
        "Consigner déclencheur → comportement → conséquence, analyser en équipe",
        "Ne pas recourir à la contention ni aux réprimandes. Se coordonner avec les spécialistes et le médical"
      ],
      scenes: ["selfharm", "aggression", "runaway", "panic", "fixation", "shouting"],
      ng: [
        "Contenir par la force, faire cesser par la réprimande",
        "Céder aux demandes à répétition pour avoir la paix",
        "Porter cela seul·e, ou au sein d'une seule structure"
      ],
      src: "Manuel de formation des accompagnants aux troubles graves du comportement (Nozominosono, Japon) / NICE NG11 (PBS)"
    }
  ],

  /* ===== Apprendre : le conseil du jour ===== */
  hints: [
    "Les pistes d'accompagnement ne sont que des « tendances ». La personne en face de vous reste, toujours, le premier manuel.",
    "Tout comportement a une raison. Voir « une personne en difficulté » plutôt qu'« une personne difficile » change déjà la réponse.",
    "Avec des repères sur la suite, on s'apaise. Annoncer « ce qui vient après » est la meilleure des préventions.",
    "Un changement ne s'impose pas : il s'annonce. Le « changement brusque » est souvent le pire des stress.",
    "Du visible plutôt que des mots. Image, photo, écrit, objet réel transmettent parfois bien plus que la parole.",
    "« On marche » plutôt que « on ne court pas ». Le comportement attendu, dit à l'affirmatif, passe mieux qu'une interdiction.",
    "Une chose à la fois. Consignes courtes et concrètes. « Comme il faut », « bien » sont en fait les mots qui passent le moins.",
    "Féliciter concrètement, « à l'instant même » de la réussite. Avec du retard, le compliment n'arrive plus.",
    "S'impliquer beaucoup dans les moments calmes. Si l'on n'intervient que dans les problèmes, le problème devient « le moyen d'obtenir l'attention ».",
    "La contention est à un cheveu de la blessure, de la confiance perdue, de la maltraitance. D'abord la distance et moins de stimulations.",
    "En pleine panique, explications et arguments n'arrivent pas. Réduire les stimulations, attendre l'apaisement.",
    "Le vrai travail se joue « avant ». La préparation et le plan font la sérénité du jour J.",
    "Pour les sorties, un plan soigné. Lieu de pause, moment du retour, porte de sortie décidés à l'avance : tout le monde respire.",
    "Avant de chercher la bonne réponse, ne pas faire « ce qu'il ne faut pas faire ». Rien que cela évite bien des accidents.",
    "Un registre en trente secondes suffit. Garder « déclencheur → comportement → suite » allège l'accompagnement d'après.",
    "Ne pas porter seul·e. Ce qui vous interpelle, partagez-le avec l'équipe et le responsable. Partager tôt, c'est protéger la personne.",
    "Le « non » et le « je ne sais pas » de la personne sont des signaux précieux. D'abord accueillir le fait qu'elle ait pu le dire.",
    "Pouvoir choisir rassure. « A ou B, tu choisis ? » plutôt que « il n'y a que ça ».",
    "Les sens diffèrent pour chacun. Éblouissant, bruyant, ça gratte — pour la personne, c'est peut-être un supplice.",
    "Un comportement « capricieux » en apparence a souvent sa raison, sa logique propre. Ne pas conclure trop vite.",
    "La fixation est une façon de rendre prévisible un monde angoissant. Plutôt que l'enlever, élargir la sécurité.",
    "« Courage ! » peut enfoncer. Face à quelqu'un d'abattu, accueillir d'abord la souffrance.",
    "Hallucinations et délire : ni nier, ni confirmer. « C'est inquiétant, n'est-ce pas » — rejoindre le ressenti.",
    "Ravaler le « je viens de te le dire ». Oublier peut faire partie de la particularité.",
    "Pas d'infantilisation. Même si la compréhension est lente, un respect à la mesure de l'âge.",
    "Attendre est aussi un accompagnement à part entière. Certains repartent, si on leur laisse le temps de la transition.",
    "Ne pas forcer le regard dans les yeux. Pour certains, c'est une souffrance.",
    "Ne pas surprendre. Approcher brusquement par-derrière, toucher sans prévenir : à éviter.",
    "Tenir ses promesses. L'accumulation de petits « ça a été respecté » devient la confiance.",
    "Pendant une crise d'épilepsie, rien dans la bouche : c'est une erreur, source d'étouffement et de blessures. Rester calme, chronométrer.",
    "Le sac en papier contre l'hyperventilation : désormais non. Risque d'hypoxie. Accompagner l'expiration lente, tout près.",
    "Le médical au médical, l'accompagnement à l'accompagnement. Au moindre doute médical : urgences et consignes du médecin, sans hésiter.",
    "Plus les moyens de s'exprimer grandissent, plus cris et agressions peuvent diminuer. Cartes et appareils sont aussi des « mots ».",
    "Ce que la personne « aime » est votre meilleur allié. Activité, objet, sujet préféré : un raccourci vers la sécurité.",
    "Le calme de l'accompagnant est, sur place, le premier facteur d'apaisement.",
    "Prenez soin de vous aussi. Si l'accompagnant s'effondre, l'accompagnement s'arrête. Se reposer fait partie du travail.",
    "Le comportement a des « signes avant-coureurs » (agitation, voix qui monte, gestes qui changent). Les petites réponses avant le sommet de la vague sont les plus efficaces.",
    "Juste après l'apaisement vient une période de récupération fragile, où tout peut se rallumer. D'abord eau et repos ; reprenez activités et demandes en douceur.",
    "Avant de toucher pour aider, toujours prévenir d'un mot (« je vais toucher votre bras »). Le contact non annoncé nourrit la peur et les réactions défensives.",
    "Plutôt que de faire face, placez-vous de biais ou côte à côte. La pression baisse — et l'on peut parler en regardant le même paysage.",
    "Le ton de la voix arrive avant les mots. Bas, lent, et peu de mots.",
    "Si le comportement augmente brusquement, soupçonnez d'abord le corps (douleur, faim, sommeil, constipation, chaleur). Le mal-être qui ne se dit pas sort en comportement.",
    "Étiquettes, coutures et tissus des vêtements relèvent aussi de la sensibilité sensorielle. Le confort des habits fait partie de l'accompagnement.",
    "Dans un lieu nouveau, repérez d'abord les sorties, les toilettes et un coin calme pour souffler — rassurant pour vous deux.",
    "Traitez la personne en adulte. Elle peut avoir besoin d'aide, mais c'est elle qui décide.",
    "Ne parlez jamais de la personne devant elle comme si elle n'était pas là. La dignité loge dans les détails.",
    "Quand ça ne marche pas, revoyez la conception de l'accompagnement, pas la personne. À l'instant où c'est « sa faute », l'accompagnement s'arrête.",
    "Dans le registre, séparez ce que vous avez vu (faits) de ce que vous avez pensé (suppositions) — cela paie au prochain accompagnement.",
    "Essayez les nouveautés une à une. En changeant tout d'un coup, on ne sait plus ce qui a marché.",
    "Se relayer n'est pas une défaite : c'est une technique. Quand ça coince, changer de personne change l'air. Cette marge est la force d'une équipe.",
    "Avant de parler, dites d'abord le prénom. Savoir que les mots lui sont adressés change déjà la façon dont ils arrivent.",
    "« Quand le minuteur sonnera » vaut mieux que « encore cinq minutes ». Le temps passe mieux quand il devient un outil visible.",
    "Rendez l'attente visible — que l'on voie ce qu'on attend. Le temps vide devient du temps d'angoisse.",
    "La place habituelle, l'endroit habituel. Le repère fixe est un socle de sécurité. Ne le changez pas sans nécessité.",
    "Le casque antibruit et les lunettes de soleil ne sont pas des « caprices » : ce sont des outils, comme les lunettes de vue. Qu'on les porte la tête haute.",
    "Tenez la liste des sons, lumières et odeurs pénibles (une carte sensorielle). L'ajustement de l'environnement devient bien plus rapide.",
    "« Encore une fois et c'est fini » — annoncer la fin compte autant qu'annoncer le début.",
    "Consignez aussi les bons jours. Les réponses qui ont marché sont le trésor de l'équipe.",
    "Non pas « il ne peut pas », mais « il ne l'a pas encore appris ». Changez le regard et le pas suivant apparaît.",
    "Un escalier se monte marche par marche. Sautez les petites étapes et la montée devient impossible.",
    "N'aidez pas trop. Même si cela prend du temps, le « j'ai réussi seul » devient la force suivante.",
    "Sur le planning visuel, retirez (ou retournez) ce qui est terminé. La sensation d'avancer devient de la sérénité.",
    "En récompense, un temps d'activité préférée vaut mieux qu'un objet. Cela dure plus et s'emmêle moins.",
    "Aux premiers signes, changez de lieu. Le changement d'environnement est le geste le plus simple et le plus puissant.",
    "En pleine crise de larmes et de cris, inutile de chercher les mots justes. Ce qu'il faut, c'est la sécurité et le temps.",
    "S'asseoir à côté et regarder la même chose. Le « temps en parallèle » fait grandir la confiance en silence.",
    "Ne pas parler ne veut pas dire ne pas comprendre. Comprendre et exprimer sont deux capacités distinctes.",
    "Ne vous fiez pas trop au « oui ». Il y a des oui dits faute d'autre chose à dire. Vérifiez par l'action.",
    "Gestes, pointage, objets réels. La parole n'est qu'un des outils pour communiquer.",
    "Un sommeil déréglé mène tout droit à un comportement déréglé. Savoir s'il dort, c'est aussi de l'accompagnement.",
    "La sélectivité alimentaire peut être sensorielle, pas un caprice. Plutôt que forcer : jouer sur la forme, la température, la texture.",
    "La perspective, aussi dans les transports : « où, pour quoi faire, combien de temps » — avant de monter.",
    "Le « bon retour » à l'arrivée. Un accueil stable soutient la sérénité de la prochaine sortie.",
    "La compréhension d'autrui ne se construit pas en un jour. Gardez prêt un badge d'aide ou une petite carte d'explication.",
    "Écrire les registres n'est que la moitié du travail. Ils prennent vie quand l'équipe prend le temps de les relire.",
    "Quand vous vient un « encore ?! », c'est un signal de repos. La fatigue émousse le jugement sans bruit.",
    "Après une intervention difficile, transmettez toujours. Fatigue et informations pèsent moins une fois partagées.",
    "Son argent, ses affaires : non pas « gérer », mais « réfléchir ensemble à leur usage ». Les droits sont les siens.",
    "Ce qui marchait l'an dernier peut ne plus marcher aujourd'hui. Les gens changent — l'accompagnement peut changer aussi.",
    "N'oubliez pas les « merci » entre collègues. L'air de l'équipe parvient à la personne tel quel."
  ],

  /* ===== Apprendre : cas pratiques (le « pourquoi » plutôt que le juste/faux) ===== */
  quizzes: [
    {
      q: "Une personne accompagnée entre en panique intense. Que faire d'abord ?",
      options: ["L'interpeller fort : « Calme-toi ! »", "Cesser de parler, réduire monde et stimulations, attendre l'apaisement", "La saisir par le bras et la déplacer"],
      answer: 1,
      explain: "En pleine panique, mots et stimulations ne peuvent plus être traités et aggravent la situation. Cesser les sollicitations, réduire gens, bruit, lumière, rester calmement à côté en lieu sûr. Attendre l'apaisement est la réponse la plus rapide."
    },
    {
      q: "Une fixation sur un ordre précis bloque l'activité. La bonne approche ?",
      options: ["Interrompre de force et passer à la suite", "Si c'est sans danger, l'accompagner en rendant la fin visible (« encore 3 fois »)", "Substituer discrètement un autre objet"],
      answer: 1,
      explain: "La fixation est le moyen de se rassurer de la personne. La stopper de force ou ruser fait perdre la confiance, et ce sera plus fort la fois suivante. L'astuce : accompagner, et rendre la « fin » visible avec un minuteur ou « encore X fois »."
    },
    {
      q: "Une agression éclate ; deux renforts arrivent. On fait quoi d'abord ?",
      options: ["Tous ensemble, encercler la personne pour l'arrêter", "Se répartir les rôles (l'un gère la personne, l'autre éloigne les autres usagers)", "Tous quitter les lieux"],
      answer: 1,
      explain: "Quand le renfort arrive, mieux vaut « se répartir les rôles » que converger : l'un fait face calmement à la personne, les autres éloignent usagers et passants. Encercler et concentrer l'attention ne fait qu'attiser l'agitation."
    },
    {
      q: "Une personne s'élance soudain dehors. Comment la suivre ?",
      options: ["Courir à fond droit derrière elle", "Rester dans son champ de vision, en parallèle, et barrer les directions dangereuses (chaussée…)", "Crier son nom sans arrêt pour ne pas la perdre"],
      answer: 1,
      explain: "La poursuite par l'arrière tourne à la « course » et fait accélérer. Crier peut aussi renforcer la fuite. Rester visible sur le côté et barrer en priorité chaussée, voies, points d'eau. Et vite : renfort et signalement."
    },
    {
      q: "Une crise convulsive survient. Qu'est-ce qu'il ne faut PAS faire ?",
      options: ["Noter l'heure de début et chronométrer", "Mettre une baguette ou une serviette dans la bouche", "Soutenir si elle risque de tomber et écarter les objets dangereux"],
      answer: 1,
      explain: "Mettre un objet dans la bouche « pour empêcher de se mordre la langue » est une erreur : cela cause étouffements et blessures des dents ou de la mâchoire. À faire : sécuriser et chronométrer. Plus de 5 minutes, répétition, blessure, dans l'eau : les urgences."
    },
    {
      q: "Crise d'hyperventilation. La bonne réponse ?",
      options: ["Faire respirer dans un sac en papier", "Rester auprès d'elle et accompagner de la voix l'expiration lente", "Dire fort « Calme-toi ! » pour la faire revenir à elle"],
      answer: 1,
      explain: "La méthode du sac en papier comporte un risque d'hypoxie et n'est plus recommandée. À faire : rester auprès de la personne au calme et caler sa voix sur l'expiration — « soufflez lentement ». On reste là jusqu'à l'apaisement."
    },
    {
      q: "Première sortie vers un lieu inconnu avec une personne ayant des troubles graves du comportement. Le plus important ?",
      options: ["Le jour J, improviser selon ce qui arrive", "Préparer soigneusement le plan à l'avance, pour que la personne ait repères et adhésion", "Remplir le programme au maximum pour une journée bien pleine"],
      answer: 1,
      explain: "Le vrai travail se joue « avant ». Une fois le comportement déclenché, la gestion est difficile et éprouvante pour tous. Partager à l'avance où, quoi, combien de temps, ce qui suit, et fixer d'avance lieu de pause et moment du retour : c'est le meilleur accompagnement."
    },
    {
      q: "« Attends encore un peu, sois sage. » Quelle formulation passe mieux ?",
      options: ["« Quand l'horloge marque 3 heures, on part. D'ici là, on attend assis sur la chaise »", "« Sois bien sage, d'accord ? »", "« C'est bientôt fini, prends sur toi »"],
      answer: 0,
      explain: "« Sage », « encore un peu », « comme il faut » sont en réalité les mots qui passent le moins. Dire quand, quoi, comment — concrètement et de façon visible — et le message arrive."
    },
    {
      q: "Pour féliciter une réussite, quel moment ?",
      options: ["En fin de journée, en une fois", "« À l'instant même », concrètement", "Au prochain échec, en comparant"],
      answer: 1,
      explain: "Avec du retard, le compliment n'arrive plus. Pas « c'est bien », mais « tu as mis tes chaussures tout seul » — à l'instant même, concrètement. Savoir ce qui est félicité prépare la fois suivante."
    },
    {
      q: "Une personne profondément abattue. Quelle parole éviter ?",
      options: ["Accueillir : « Ça a été dur, n'est-ce pas »", "Encourager : « Courage ! Tout le monde souffre »", "Rester doucement à ses côtés"],
      answer: 1,
      explain: "La dépression ne se guérit pas par la volonté. « Courage » et les comparaisons peuvent enfoncer davantage. D'abord accueillir la souffrance. Et ne jamais banaliser un « je veux mourir » : médical et famille aussitôt."
    },
    {
      q: "« Des insultes sortent du mur », dit-elle, effrayée. Que faire ?",
      options: ["Rétablir les faits : « Il n'y a pas de voix »", "Rejoindre le ressenti « C'est effrayant, n'est-ce pas » et ramener vers ce qui rassure", "« Qu'est-ce qu'elles disent ? » — écouter avec elle"],
      answer: 1,
      explain: "La personne entend réellement. Ni réfuter ni amplifier ensemble. L'enjeu n'est pas le vrai ou le faux, mais l'angoisse. Rejoindre le ressenti, puis revenir doucement à une activité concrète et rassurante. Si cela augmente : consultation."
    },
    {
      q: "Au supermarché, elle s'agite soudain et se bouche les oreilles. Premier réflexe ?",
      options: ["Elle le fait exprès pour embêter", "Une souffrance sensorielle : bruit, lumière, foule", "Elle a juste faim"],
      answer: 1,
      explain: "Dans l'autisme notamment, les sens peuvent être très sensibles. Musique de fond, éclairage, brouhaha sont peut-être des stimulations pénibles. Passer dans un endroit calme, utiliser un casque antibruit : réduire les stimulations."
    },
    {
      q: "La situation s'est apaisée. En quelques dizaines de secondes, l'important c'est… ?",
      options: ["Rien de particulier à faire", "Consigner déclencheur → comportement → suite, et partager", "Faire écrire une lettre d'excuses à la personne"],
      answer: 1,
      explain: "Noter brièvement « ce qui a déclenché » prépare déjà la prévention suivante. Les registres déclencheur × réponse accumulés deviennent le « mode d'emploi » de la personne. Pas seul·e : en équipe."
    },
    {
      q: "Elle refuse obstinément son médicament. La bonne approche ?",
      options: ["La maintenir et faire avaler", "Se retirer, laisser du temps ; si cela persiste, consulter médecin ou pharmacien", "Le mélanger à son repas sans lui dire"],
      answer: 1,
      explain: "Le refus a ses raisons (difficile à avaler, effets pénibles, sens incompris). Forcer fait perdre la confiance. Se retirer et laisser du temps, changer la forme ou le moment. Si cela persiste : médecin ou pharmacien, sans décider seul·e. Mélanger à l'insu : uniquement avec l'accord du médecin et de la famille."
    },
    {
      q: "Elle s'agite, sa voix monte — vous avez repéré les « signes avant-coureurs ». Quand agir ?",
      options: ["Rien ne s'est encore produit : on observe", "Dès les signes : réduire les stimulations et proposer une pause", "Attendre que le comportement éclate, puis répondre à fond"],
      answer: 1,
      explain: "Le comportement monte comme une vague. Au sommet, mots et astuces ne passent plus. Les petites réponses au stade des signes (moins de stimulations, une pause, changer de lieu) agissent avec le moins d'usure. Noter et partager les schémas de signes avant-coureurs devient un trésor d'équipe."
    },
    {
      q: "La panique vient de retomber. Le geste suivant ?",
      options: ["Relancer aussitôt l'activité interrompue", "Eau et repos ; reprendre lentement, en observant", "Faire réfléchir pour que cela ne se reproduise plus"],
      answer: 1,
      explain: "Juste après l'apaisement s'ouvre une « période de récupération » : corps et esprit épuisés, rechute facile. Relancer trop tôt les demandes peut tout rallumer. D'abord eau et repos, reprise par étapes. Leçons et bilans ne passent pas à ce moment-là."
    },
    {
      q: "Avant de toucher le corps pour aider à se changer, que faire d'abord ?",
      options: ["Prévenir d'un mot : « je vais toucher votre bras »", "Finir vite et sans bruit pour ne pas effrayer", "Soutenir par-derrière et déplacer d'abord"],
      answer: 0,
      explain: "Le contact non annoncé déclenche peur et réactions défensives (se dégager, frapper). Surtout avec un vécu traumatique ou une sensibilité sensorielle, la base : depuis un endroit visible, après un mot. La vitesse de la sécurité prime sur la vitesse de la tâche."
    },
    {
      q: "Pour proposer un choix d'activités, quelle forme passe le mieux ?",
      options: ["Réduire à deux : « A ou B, lequel veux-tu ? »", "Aligner le plus d'options possible pour un choix libre", "Décider à sa place pour lui éviter le souci"],
      answer: 0,
      explain: "Pouvoir choisir rassure — mais trop d'options deviennent une nouvelle angoisse. À deux (trois au plus), on choisit sereinement. Le sentiment même d'« avoir décidé » donne la force du pas suivant."
    },
    {
      q: "Depuis quelques jours, le comportement augmente brusquement. Que vérifier d'abord ?",
      options: ["Penser que les caprices empirent", "Durcir les punitions pour stopper", "Vérifier le corps (douleur, faim, sommeil, constipation) et les changements d'environnement"],
      answer: 2,
      explain: "Un changement brutal de comportement oriente d'abord vers un mal-être physique ou un changement d'environnement. Rage de dents, otite, constipation, manque de sommeil — la gêne indicible sort en comportement. Non pas « son caractère a changé », mais « quelque chose se passe ». Vérifiez aussi les antécédents médicaux."
    },
    {
      q: "Dans le train, il se bouche les oreilles et s'accroupit. Les gens s'attroupent. D'abord ?",
      options: ["Le relever : priorité à descendre à la prochaine gare", "Faire écran de son corps, couper les regards et dire bref : « tout va bien »", "Expliquer la situation à voix haute à tout le monde"],
      answer: 1,
      explain: "Les regards qui s'attroupent sont en eux-mêmes une stimulation forte. D'abord faire mur : couper les lignes de vue et la foule, un mot bref à l'entourage. Le déplacer attendra l'apaisement — la décision de descendre viendra après."
    },
    {
      q: "Une crise d'épilepsie a cessé au bout de 3 minutes ; la personne est hébétée. Ensuite ?",
      options: ["La relever et la faire marcher pour vérifier la conscience", "Veiller en position latérale de sécurité ; noter durée et déroulement", "Donner de l'eau et du sucre"],
      answer: 1,
      explain: "Après la crise, l'hébétude peut durer. Veiller en silence en position latérale de sécurité, noter la durée et l'aspect de la crise, informer médecin et famille. Boire ou manger tout de suite : risque de fausse route ; forcer la marche : risque de chute."
    },
    {
      q: "Quelle façon d'écrire le registre sert le mieux l'accompagnement suivant ?",
      options: ["Centrée sur l'impression : « il était fâché tout le temps »", "Les faits : « 15 h, avant le goûter, cris 10 min, apaisé après changement de place »", "Long et détaillé, comme un récit"],
      answer: 1,
      explain: "L'astuce : séparer ce qu'on a vu (faits) de ce qu'on a pensé (suppositions). Quand, où, quoi, et ce qui a aidé — en bref. Les faits accumulés font apparaître les schémas de déclencheurs : le plan du prochain accompagnement."
    },
    {
      q: "Une collègue en pleine intervention s'enlise ; son visage se durcit. Que faire de bien ?",
      options: ["Dire « je prends le relais » et permuter", "La laisser aller seule jusqu'au bout", "Ne rien dire et le signaler plus tard en réunion"],
      answer: 0,
      explain: "La tension et l'agacement de l'accompagnant atteignent aussi la personne. Se relayer quand ça coince n'est pas une défaite : c'est une technique. Changer de personne suffit souvent à changer l'air. Une équipe où le relais s'offre et s'accepte protège la personne."
    },
    {
      q: "Une proche confie : « à la maison c'est très dur… je l'ai peut-être mal élevé ». D'abord ?",
      options: ["Corriger : « il faut changer de méthode »", "Reconnaître — « vous avez tenu jusqu'ici » — et demander ce qui marche à la maison", "Exposer unilatéralement la méthode de l'établissement"],
      answer: 1,
      explain: "La famille est l'accompagnante la plus ancienne — celle qui soutient depuis le plus longtemps. Avant de corriger ou d'instruire, reconnaître. Ce qui marche à la maison est un indice précieux. Au bout du compte, la relation de coopération est ce qui soutient le mieux la personne."
    },
    {
      q: "Vous voulez lancer en même temps cartes imagées, nouveau planning et changement de place. Que faire ?",
      options: ["Tout changer d'un coup pour maximiser l'effet", "Essayer un à un, en vérifiant l'effet", "Ne rien changer : le changement perturbe"],
      answer: 1,
      explain: "En changeant beaucoup à la fois, on ne sait plus ce qui a marché (ni ce qui n'a pas convenu), et la charge pour la personne grandit. Les nouveautés une à une, validées par le registre. L'astuce n'est pas d'éviter le changement : c'est de changer dans l'ordre."
    },
    {
      q: "La personne murmure : « je veux mourir ». Que faites-vous ?",
      options: ["Changer de sujet : « ne dis pas ça »", "Prendre au sérieux, écouter, et relier vite au responsable et au médical", "C'est habituel : laisser passer"],
      answer: 1,
      explain: "Toute évocation du désir de mourir se prend au sérieux, quelle qu'en soit la fréquence. Ni nier ni détourner : écouter d'abord. Puis ne pas porter seul : informer le responsable le jour même, partager avec le médical et la famille. « Ne jamais laisser passer » est le premier pas pour protéger une vie."
    },
    {
      q: "Sortie prévue vers un lieu inconnu. Que décider d'abord pour être serein ?",
      options: ["La boutique de souvenirs", "Où se reposer, quand rentrer, et par où sortir", "Les endroits à photos"],
      answer: 1,
      explain: "Aussi important que le programme des plaisirs : où se reposer en cas de fatigue, quel signal déclenche le retour, par où l'on sort. Décider d'avance les issues et la fin donne de la marge à l'accompagnant — et cette marge devient la sérénité de la personne."
    },
    {
      q: "L'accompagnement patine depuis des jours. Une bonne façon de penser ?",
      options: ["Conclure qu'on n'est pas fait pour ce métier", "Y voir l'occasion de revoir la conception de l'accompagnement, et consulter l'équipe", "Renoncer : le handicap est trop lourd"],
      answer: 1,
      explain: "Quand ça ne marche pas, on revoit la conception (environnement, communication, planning, stimulations) — pas une personne. Se blâmer ou blâmer la personne ne fait rien avancer. Apporter les registres et revoir en équipe : c'est ainsi que les professionnels traversent leurs « mauvais jours »."
    },
    {
      q: "Dire « la suite » à quelqu'un qui s'est figé — de quelle façon ?",
      options: ["« Dépêche-toi, on va être en retard ! »", "« Après, le thé » — court, une seule chose, sous forme visible", "Expliquer tout le programme du jour du début à la fin"],
      answer: 1,
      explain: "Quand la transition met du temps à se traiter, ajouter de l'information déborde. Une seule chose suivante — courte, concrète, visible si possible. Les mots qui pressent alourdissent encore le traitement."
    },
    {
      q: "Des passants bienveillants s'attroupent : « ça va ?! ». Une bonne réponse ?",
      options: ["Expliquer en détail le diagnostic et l'historique pour qu'ils comprennent", "Dire bref : « tout va bien, un instant et ça se calme », et couper les regards", "Les ignorer et rester concentré sur l'intervention"],
      answer: 1,
      explain: "L'attention bienveillante reste une stimulation pour la personne. Une phrase courte rassure l'entourage et disperse l'attroupement et les regards — c'est cela, le vrai soutien. Inutile de livrer des détails privés comme le diagnostic. Ignorer peut finir en appel aux secours : une phrase — une seule — est le juste milieu."
    },
    {
      q: "Vous avez donné une consigne, aucune réaction. Que vérifier d'abord ?",
      options: ["Répéter plus fort", "Dire son prénom, vérifier que son attention est sur vous, puis dire court", "Le prendre par la main et le déplacer"],
      answer: 1,
      explain: "Des mots qui arrivent d'on ne sait où sont difficiles à reconnaître comme « adressés à moi ». D'abord le prénom. Vérifiez que l'attention est sur vous, puis dites court. L'important n'est pas le volume : c'est l'ordre d'arrivée."
    },
    {
      q: "Il a répondu « oui » à « compris ? », mais l'action ne suit pas. Comment le penser ?",
      options: ["C'était peut-être un « oui » faute de mieux. Vérifier en faisant faire réellement", "Il a menti : le reprendre", "Réexpliquer plus fort"],
      answer: 0,
      explain: "Il existe des « oui » dits parce que la question n'offre pas d'autre issue. Ne blâmez pas : changez la façon de vérifier. Plutôt que demander « compris ? », faites faire pour de vrai. L'action confirme la compréhension mieux que les mots."
    },
    {
      q: "Il ne mange que du riz blanc et du pain. Une bonne réponse ?",
      options: ["Pour sa santé, ne rien servir tant qu'il ne mange pas autre chose", "C'est peut-être sensoriel. Sans forcer : ajuster forme et température, et consulter médecine et nutrition", "C'est son choix : ne rien faire"],
      answer: 1,
      explain: "La sélectivité extrême n'est souvent pas un caprice, mais une sensibilité sensorielle au goût, à la texture, à l'aspect. Forcer transforme le repas lui-même en peur. De petits ajustements de forme et de température, et le volet nutritionnel avec les professionnels."
    },
    {
      q: "La famille dit qu'il ne dort plus ces temps-ci. Les journées aussi sont agitées. D'abord ?",
      options: ["Augmenter l'activité de jour pour le fatiguer", "Durcir la réponse au comportement", "Consigner le sommeil et le partager avec le médecin"],
      answer: 2,
      explain: "Un sommeil déréglé mène droit à un comportement déréglé. D'abord noter quand il s'endort, quand il se réveille, comment se passe la nuit — puis au médecin. La cause (traitement, santé, environnement, angoisse) s'évalue avec la médecine. Durcir seulement la journée ne change pas la racine."
    },
    {
      q: "Avec le planning visuel, quel usage apaise le plus ?",
      options: ["Retirer (ou retourner) les éléments terminés", "Laisser tout le planning tel quel", "Ne pas le laisser y toucher"],
      answer: 0,
      explain: "Voir jusqu'où l'on est arrivé donne une perspective sur ce qui reste — et cela apaise. Si c'est la personne qui retire ou retourne les éléments finis, il y a en plus la fierté d'accomplir. Le planning n'est pas le tableau du professionnel : c'est l'outil de la personne."
    },
    {
      q: "Comme récompense d'un effort, qu'est-ce qui dure le mieux ?",
      options: ["Acheter quelque chose de cher", "Un temps d'activité préférée (musique, promenade…)", "Des sucreries à chaque fois"],
      answer: 1,
      explain: "Les récompenses en objets ou en nourriture tendent à s'emballer ou à s'emmêler avec la santé. Le « temps d'activité préférée » est la joie même de la personne, s'intègre au quotidien et dure. Savoir ce qu'elle aime est déjà une force d'accompagnement."
    },
    {
      q: "Une tâche prend beaucoup de temps. Jusqu'où aider ?",
      options: ["Veiller à côté, n'aider qu'au point de blocage, au minimum", "C'est du temps perdu : tout faire à sa place", "Ne toucher à rien tant qu'il n'y arrive pas"],
      answer: 0,
      explain: "Tout faire à sa place lui vole l'expérience du « j'ai réussi seul », et ses capacités s'amenuisent. Mais l'abandonner n'est pas juste non plus. Veiller, et soutenir doucement au seul point d'achoppement. Prendre du temps n'est pas un échec."
    },
    {
      q: "Début de la relation. Quelle approche fait grandir la confiance ?",
      options: ["Poser beaucoup de questions pour collecter des informations", "S'asseoir à côté et cumuler du temps à faire la même activité ensemble", "Garder ses distances et s'en tenir à l'observation"],
      answer: 1,
      explain: "Les questions de face peuvent ressembler à un interrogatoire. Le « temps en parallèle » — côte à côte, à regarder la même chose — construit le « cette personne est sûre » même sans mots. La confiance passe avant la collecte d'informations."
    },
    {
      q: "Les trajets en train tournent facilement au chahut. Une prévention efficace ?",
      options: ["Lui faire promettre de descendre à la prochaine s'il fait du bruit", "Ne pas lui parler du tout à bord", "Avant de monter, dire « où, pour quoi faire, combien de temps », et emporter un objet rassurant"],
      answer: 2,
      explain: "Un trajet sans perspective est une boîte d'angoisse. Avant de monter, montrer visiblement la destination et la durée, et emporter de quoi s'apaiser (écouteurs, jouet, cartes). La prévention commence avant de monter. Annoncer une punition ne fait qu'ajouter de l'angoisse."
    },
    {
      q: "En sortie, que préparer pour la compréhension de l'entourage ?",
      options: ["Un badge d'aide ou une petite carte d'explication", "Une copie du dossier médical détaillé", "Rien de particulier"],
      answer: 0,
      explain: "Sur le moment, pas le temps de longues explications. Un badge d'aide, ou une carte brève du type « pardon si nous vous avons surpris — cela fait partie de son handicap », jette un pont en un instant. Inutile de transporter des données privées détaillées comme un dossier médical."
    },
    {
      q: "Les registres s'accumulent. La prochaine étape ?",
      options: ["Supprimer les plus anciens", "Créer un temps d'équipe pour les relire et chercher les schémas", "Les ranger dans un carnet personnel"],
      answer: 1,
      explain: "Écrire les registres n'est que la moitié du travail. C'est quand l'équipe les relit et y trouve les schémas de déclencheurs et les réponses efficaces qu'ils deviennent de l'accompagnement. Même court : un temps de relecture régulier."
    },
    {
      q: "En pleine intervention monte un « encore ?! ». C'est… ?",
      options: ["Un signal de fatigue. Penser pause ou relais", "Un sentiment naturel : continuer tel quel", "L'écraser à la volonté"],
      answer: 0,
      explain: "Le « encore ?! » ne dit pas que vous êtes mauvais — il dit que vous êtes fatigué. La fatigue émousse le jugement, filtre dans la voix et le visage, et atteint la personne. Penser pause ou relais n'est pas une faiblesse : c'est une technique qui protège la personne."
    },
    {
      q: "Une méthode efficace jusqu'à l'an dernier perd son effet. Comment le penser ?",
      options: ["Insister plus fort avec la même méthode jusqu'à ce que ça marche", "La personne a peut-être changé (grandi, situation nouvelle). Mettre à jour la lecture", "Conclure que son état s'est aggravé"],
      answer: 1,
      explain: "Les gens changent. Une méthode peut être dépassée par la croissance ; l'environnement et la santé bougent aussi. Méthode inefficace n'égale pas aggravation. Relire les registres et mettre à jour lecture et méthode pour qui elle est aujourd'hui. L'accompagnement est vivant."
    },
    {
      q: "Sa façon de dépenser son argent de poche vous inquiète. Une bonne approche ?",
      options: ["L'établissement gère tout", "Le laisser dépenser librement sans s'en mêler", "Y réfléchir ensemble (sa volonté au centre ; les petites erreurs deviennent apprentissage)"],
      answer: 2,
      explain: "L'argent est son droit. Tout gérer est sûr mais confisque le pouvoir de décider ; le laisser seul expose à l'exploitation. L'axe : « réfléchir ensemble » — accompagner les petites erreurs comme apprentissages, et ne faire digue que contre les grands risques (exploitation, contrats coûteux)."
    },
    {
      q: "Avec quelqu'un qui ne parle pas, qu'est-ce qui est vrai ?",
      options: ["Comprendre et exprimer sont des capacités distinctes. Lire aussi le comportement, l'expression, le regard", "Ne parle pas = ne comprend pas, donc on peut sauter les explications", "En parlant fort et lentement, ça passe"],
      answer: 0,
      explain: "Ne pas parler et ne pas comprendre sont deux choses différentes. Beaucoup comprennent très bien ce que vous dites. Ne sautez pas les explications devant la personne, ne la traitez pas en enfant — recevez aussi ses « réponses » par l'expression, le regard, la posture."
    },
    {
      q: "Un collègue dit que le casque antibruit, « c'est le gâter ». Que répondre ?",
      options: ["Il a peut-être raison : le faire retirer", "Expliquer que c'est « un outil, comme les lunettes » — un aménagement raisonnable pour la sensibilité sensorielle — et le partager en équipe", "Laisser dire"],
      answer: 1,
      explain: "Personne ne dit qu'on « gâte » quelqu'un en corrigeant sa vue avec des lunettes. Compenser la sensibilité auditive avec un casque, c'est exactement pareil. Quand l'équipe partage le sens de l'outil, la personne peut le porter la tête haute."
    },
    {
      q: "Il tient à la même place et au même déroulé à chaque fois. La posture de base ?",
      options: ["Repères fixes et routine sont un socle de sécurité. Ne pas y toucher sans nécessité", "Changer de place à chaque fois pour éviter la lassitude", "Casser exprès la routine pour corriger la fixation"],
      answer: 0,
      explain: "« Comme d'habitude », c'est un monde prévisible — la sécurité même. Casser sans nécessité, c'est retirer le socle. Seulement quand le changement s'impose : avec préavis, petit à petit."
    },
    {
      q: "Première rencontre avec un nouvel usager. Que demander en priorité ?",
      options: ["La liste détaillée des comportements-problèmes", "Ce qu'il aime, ce qui le rassure, ce qu'il sait bien faire", "Toute son histoire de vie"],
      answer: 1,
      explain: "Les informations sur les problèmes se rassemblent plus tard. Ce qu'on veut d'abord : « goûts, apaisements, forces » — l'entrée de l'accompagnement et la sortie de la panique s'y trouvent le plus souvent. Un accompagnement qui part des forces construit aussi la relation plus vite."
    },
    {
      q: "Retour de sortie sans encombre. Le bilan qui prépare la suivante ?",
      options: ["Tout s'est bien passé : pas de bilan", "Ne lister que les frayeurs", "Consigner aussi ce qui a bien marché et l'injecter dans le prochain plan"],
      answer: 2,
      explain: "Une sortie réussie est une mine d'or. Garder « ce qui était bien » (l'horaire, l'itinéraire, les affaires, les mots employés) devient la base du plan suivant. Registres des frayeurs et registres des réussites : ensemble, ils font le « mode d'emploi »."
    },
    {
      q: "Qu'est-ce qu'une personne « douée pour l'accompagnement » ?",
      options: ["Quelqu'un qui peut arrêter un comportement par la force", "Quelqu'un qui sait augmenter le temps que la personne passe sereine", "Quelqu'un qui anticipe tout et fait tout à sa place"],
      answer: 1,
      explain: "Plus que les prouesses de crise : bâtir un quotidien qui ne déborde pas. Plus la personne passe de temps en sécurité, moins il y a de moments difficiles tout court. Cela paraît modeste — et c'est la plus vraie des expertises."
    }
  ]
};
