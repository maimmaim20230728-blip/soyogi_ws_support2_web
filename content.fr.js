/*
 * Soyogi Guide d'Accompagnement - Contenu (français)
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
    "Prenez soin de vous aussi. Si l'accompagnant s'effondre, l'accompagnement s'arrête. Se reposer fait partie du travail."
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
    }
  ]
};
