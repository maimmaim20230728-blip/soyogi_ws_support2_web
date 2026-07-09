/*
 * Apoio para profissionais do cuidado (edição deficiência) - Conteúdo (Português)
 * Princípios: são tendências e pistas, nunca rótulos. A pessoa à sua frente vem primeiro.
 *  Não toma decisões médicas. Na dúvida, oriente ao número de emergência local / ao médico.
 *  A estrutura (id / emoji / índices de resposta / referências de cena) é idêntica a content.ja.js.
 */
window.SHIEN_CONTENT = window.SHIEN_CONTENT || {};
window.SHIEN_CONTENT.pt = {
  version: 1,

  basis: [
    "NICE NG10 (Reino Unido) «Violência e agressão: manejo de curto prazo» (2015) — primeiro a desescalada, sem contenção. A contenção física é o último recurso.",
    "NICE NG11 (Reino Unido) «Comportamento desafiador e deficiência intelectual» (2015) — Apoio Comportamental Positivo (PBS): entender o motivo do comportamento e adaptar o ambiente. Inclui apoio a famílias e cuidadores.",
    "Apoio Comportamental Positivo (PBS) / abordagem de baixa ativação (Low Arousal) — reduzir exigências e estímulos; não confrontar.",
    "Apoio estruturado para o autismo (TEACCH) / Treino de Comunicação Funcional (FCT).",
    "Primeiros socorros em crises epilépticas: «Stay·Safe·Side» da Epilepsy Foundation e do CDC (EUA) e a regra dos 5 minutos.",
    "Convenção da ONU sobre os Direitos das Pessoas com Deficiência (CRPD) / QualityRights da OMS — proteger a dignidade e a autonomia; evitar a coerção e a contenção sempre que possível."
  ],

  scenes: [
    {
      id: "medical", medical: true,
      title: "Crise, lesão ou alteração da consciência", emoji: "🚑",
      lead: "Este app não toma decisões médicas. Na dúvida, ligue para a emergência: essa é a decisão certa.",
      do: [
        "Se puder cair, ampare-a e deite-a com cuidado; afaste objetos perigosos por perto (tire os óculos, afrouxe a gola)",
        "Quando cessarem as convulsões, coloque-a de lado (posição de recuperação)",
        "Anote a hora em que a crise começou (cronometre)"
      ],
      call119: [
        "Uma primeira crise",
        "Convulsões que duram mais de 5 minutos",
        "Crises que se repetem, ou não recupera a consciência",
        "Lesão, ou dificuldade para respirar",
        "Uma crise na água ou no banho"
      ],
      note: "Se a pessoa tiver orientações específicas do médico (medicação de resgate, supositórios, etc.), siga-as.",
      dont: [
        "Colocar algo na boca («para não morder a língua» é um mito: provoca asfixia e lesões)",
        "Segurá-la para tentar parar a crise",
        "Dar comida ou bebida logo após uma crise"
      ],
      after: [
        "Anote a duração e os detalhes (quantos minutos, quais movimentos, a consciência depois)",
        "Informe o médico e a família",
        "Se ficar sonolenta, deixe-a descansar em local seguro"
      ],
      outdoor: [
        "Afaste-a da borda da plataforma, da via e das escadas (só a mova se houver perigo onde está)",
        "Numa estação, peça ajuda aos funcionários; na rua, aos transeuntes (diga com clareza: «Chamem uma ambulância»)",
        "Dê à emergência o nome do local, o número da saída e um ponto de referência"
      ],
      why: "O mais importante numa crise não é «pará-la», mas mantê-la a salvo, cronometrar e comunicar. Você manter a calma é a maior ajuda.",
      src: "Associação Japonesa de Epilepsia / Epilepsy Foundation e CDC (EUA) «Stay·Safe·Side»"
    },
    {
      id: "panic",
      title: "Pânico / colapso emocional", emoji: "🌀",
      do: [
        "Ponha a pessoa e quem está por perto em segurança (afaste objetos perigosos)",
        "Reduza os estímulos (pare de falar, afaste as pessoas, baixe o som e a luz)",
        "Espere. Fique em silêncio ao lado dela até se acalmar"
      ],
      dont: [
        "Gritar ou repreender para pará-la (aumenta a aflição)",
        "Segurá-la (lesões, perda de confiança; a um passo do maltrato)",
        "Bombardeá-la com perguntas ou razões (não consegue processar e piora)",
        "Cercá-la ou atrair a atenção"
      ],
      after: [
        "Ofereça água e descanso",
        "Anote o que desencadeou (barulho? pessoas? mudança de plano? dor?)",
        "Compartilhe com a equipe"
      ],
      outdoor: [
        "Saia do fluxo de gente: junto a uma parede, atrás de um pilar, um banco",
        "Se não conseguir se mover, não a force; faça-se de «parede», bloqueando olhares e pessoas",
        "Diga algo breve a quem está por perto («Está tudo bem, vai se acalmar num instante»): evita a interferência bem-intencionada ou uma chamada à emergência"
      ],
      why: "O pânico não é «birra»: é uma resposta a estímulos, ansiedade ou uma perda do «que vem a seguir» que ultrapassa o que consegue processar. Quem mais sofre é a pessoa. Um ambiente calmo e tempo são o melhor apoio.",
      src: "NICE NG11 (Apoio Comportamental Positivo, Reino Unido) e marcos afins"
    },
    {
      id: "selfharm",
      title: "Autolesão", emoji: "🤕",
      do: [
        "Avalie se há risco de vida (para batidas na cabeça ou mordidas fortes, amorteça fisicamente com uma almofada)",
        "Reduza os estímulos e leve a um lugar mais calmo",
        "Vigie em silêncio e cuide da lesão depois de acalmar"
      ],
      dont: [
        "Gritar «Pare!» (a atenção pode reforçar o comportamento)",
        "Continuar segurando o braço à força",
        "Castigar ou repreender"
      ],
      after: [
        "Verifique e cuide das lesões",
        "Anote o que acontecia logo antes",
        "Se se repetir, proponha rever o plano de apoio (médico, coordenação de apoio)"
      ],
      outdoor: [
        "Afaste-a de superfícies duras: asfalto, pilares, guarda-corpos (uma bolsa ou casaco no meio ajuda)",
        "Se juntar gente, diga algo breve («Está tudo bem»): ser observada já é um estímulo"
      ],
      why: "A autolesão costuma ter uma «função»: expressar desconforto, pedir algo, checar uma sensação, buscar atenção. O essencial é fazer crescer uma alternativa que atenda a essa mesma necessidade (ideia da análise do comportamento aplicada).",
      src: "NICE NG11 (PBS, Reino Unido) e marcos afins"
    },
    {
      id: "aggression",
      title: "Agressão a outros / quebrar coisas", emoji: "💥",
      do: [
        "Primeiro afaste-se (ao menos um braço). Tire os demais e garanta a segurança ao redor",
        "Chame reforço de imediato e avise seu responsável (pode fazê-lo enquanto atende; não carregue sozinha)",
        "Voz baixa, palavras curtas; ou não fale e reduza os estímulos"
      ],
      dont: [
        "Lutar de frente ou imobilizar (risco de lesão e de maltrato)",
        "Gritar, repreender ou encarar",
        "Interrogar com «Por que você faz isso?!»"
      ],
      after: [
        "Verifique lesões ou danos; informe conforme as regras do serviço",
        "Anote o desencadeante e como se desenrolou",
        "Compartilhe com a equipe os sinais de aviso (rosto, voz, movimentos)"
      ],
      outdoor: [
        "Afastar os transeuntes vem primeiro («Com licença, afastem-se, por favor», com clareza)",
        "Numa estação, peça ajuda aos funcionários ou à segurança (fora, não atenda sozinha)"
      ],
      why: "A maioria das agressões é a «explosão» de um pedido não atendido, de um desconforto ou de um medo. Mais do que mirar as pessoas, acaba recaindo sobre elas. Conhecer os sinais de aviso é o primeiro passo da prevenção.",
      src: "NICE NG11 (PBS) / NG10 (manejo de curto prazo da agressão: primeiro a desescalada)"
    },
    {
      id: "runaway",
      title: "Fugir / desaparecer", emoji: "🏃",
      do: [
        "Não a persiga logo atrás (vira corrida e pode acelerá-la). Mantenha-a à vista e vá ao lado; bloqueie primeiro as direções perigosas (via, água, trilhos)",
        "Chame reforço de imediato e avise seu responsável (enquanto atende tudo bem; não carregue sozinha)",
        "Se a perder de vista, não hesite: avise conforme as regras do serviço (polícia) e comece a busca"
      ],
      dont: [
        "Ficar gritando o nome (pode reforçar a fuga)",
        "Carregar sozinha / atrasar o aviso",
        "Repreender ao voltar (aprende «voltar = acontece algo ruim»)"
      ],
      after: [
        "Ao encontrá-la, reúna-se em silêncio e verifique lesões",
        "Anote a rota e a hora (para onde foi é uma pista de apoio)",
        "As famílias também: não carregar sozinhas — pedir ajuda ou orientação às pessoas envolvidas (coordenação de apoio, apoio domiciliar) ou, conforme o caso, ao médico, também é uma opção",
        "Revise as saídas e a supervisão"
      ],
      outdoor: [
        "Numa estação, se a perder de vista, vá logo aos funcionários (a plataforma, as catracas e as câmeras eles verificam mais rápido)",
        "Dê a roupa, o porte e para onde costuma ir, e peça ajuda (não hesite: minutos podem ser questão de vida ou morte)"
      ],
      why: "A fuga costuma ter um «estímulo do qual fugir» ou um «destino para onde ir». Mais do que culpar, encontrar o motivo leva à próxima prevenção.",
      src: "Guias de segurança para fugas no autismo (p. ex. AWAARE) e PBS"
    },
    {
      id: "freeze",
      title: "Travada, sem conseguir se mover", emoji: "🧊",
      do: [
        "Espere (defina antes um limite, por exemplo cinco minutos)",
        "Reduza estímulos e exigências (não a apresse, não a toque)",
        "Dê só um próximo passo, curto e visível («Quando terminarmos, um chá»)"
      ],
      dont: [
        "Puxá-la pela mão para movê-la",
        "Uma enxurrada de instruções («Vamos, depressa, por aqui»)",
        "Conversar com outros por cima da cabeça dela"
      ],
      after: [
        "Anote o que a fez andar (o tempo? algo que você mostrou? mudou a pessoa?)",
        "Reúna e compartilhe as situações em que tende a travar"
      ],
      outdoor: [
        "Se estiver no meio de uma passagem, guie-a com suavidade para fora do fluxo (a uma parede). Se não conseguir se mover, faça-se de escudo e espere",
        "Em vez de apressá-la, diga «Há tempo». A quem está por perto, um breve «Estamos só esperando um momento»"
      ],
      why: "Travar geralmente não é recusa: muitas vezes mudar de tarefa leva tempo para processar. Com quem consegue se mover quando lhe dão tempo, aprendemos a ser cuidadores que sabem esperar.",
      src: "Apoio estruturado para o autismo (TEACCH)"
    },
    {
      id: "shouting",
      title: "Gritos / vocalizações", emoji: "📢",
      do: [
        "Suspeite primeiro do ambiente (calor? barulho? fome? dor?)",
        "Guie-a a um lugar calmo ou baixe os estímulos ao redor",
        "É justamente quando está calma que mais se deve interagir"
      ],
      dont: [
        "Responder ao alto com o alto",
        "Repetir «Silêncio!»",
        "Atender o pedido toda vez para calá-la (aprende «fazer barulho funciona»)"
      ],
      after: [
        "Anote a hora, o local e o que houve logo antes (se for uma hora fixa, suspeite de fatores de saúde ou do ambiente)",
        "Verifique histórico de dor (dentes, ouvidos, barriga)",
        "Registre o que chamar atenção e compartilhe com a equipe e o responsável"
      ],
      outdoor: [
        "Vá a um lugar calmo (uma ponta da plataforma, fora das catracas, fora da loja)",
        "Não discuta com quem reclamar; um breve «Desculpe, faz parte da condição dele». Mostrar um cartão de ajuda também serve"
      ],
      why: "A voz é o recurso mais fácil de usar. À medida que cresce um modo de comunicar (cartões, apontar, dispositivos), as vocalizações costumam diminuir.",
      src: "Treino de Comunicação Funcional (FCT) e abordagens afins"
    },
    {
      id: "fixation",
      title: "Presa numa fixação", emoji: "🔁",
      do: [
        "Se for seguro, acompanhe primeiro (uma fixação é o modo dela de se sentir segura)",
        "Mostre o fim de forma visível (um temporizador, «mais três vezes»)",
        "Para uma mudança realmente necessária, avise antes e dê duas opções («A ou B?»)"
      ],
      dont: [
        "Cortá-la à força",
        "Tirá-la com engano (perde a confiança e da próxima vez é mais forte)",
        "Fazer uma promessa falsa para sair da situação"
      ],
      after: [
        "Anote o objeto e as condições da fixação (quando, onde, com quê)",
        "Considere um sistema de aviso prévio (pictogramas, uma agenda)",
        "Registre as dificuldades e compartilhe com a equipe e o responsável"
      ],
      outdoor: [
        "Diante de uma fixação com um trem, rota ou ordem específicos, deixar tempo de sobra é a melhor prevenção",
        "Quando precisar de uma mudança, não force ali; use um plano («Hoje a rota A; da próxima, a B»)"
      ],
      why: "Uma fixação é o jeito dela de tornar previsível um mundo que a angustia. Em vez de tirá-la, ampliamos sua base de segurança e acrescentamos opções aos poucos.",
      src: "NICE NG11 (PBS) / apoio estruturado (TEACCH)"
    },
    {
      id: "hallucination",
      title: "Alucinação / relato tipo delírio", emoji: "💭",
      do: [
        "Nem negue nem confirme («Então é isso que você ouve. Dá medo» — responda ao sentimento)",
        "Conduza com suavidade a um tema ou atividade real que tranquilize",
        "Se estiver aumentando, compartilhe com o médico e a família e considere uma consulta"
      ],
      dont: [
        "Discutir que «não há nada ali»",
        "Entrar na história e aumentá-la",
        "Rir ou minimizar"
      ],
      after: [
        "Anote o conteúdo, a hora e a frequência (após uma troca de medicação? está dormindo?)",
        "Conteúdos de comando («uma voz manda eu morrer»): a atendimento médico sem demora"
      ],
      why: "Para a pessoa, de fato ouve e vê. A questão não é verdadeiro ou falso, mas a ansiedade que traz. A tranquilidade vem primeiro.",
      src: "Orientações gerais sobre psicose / esquizofrenia (para famílias) e QualityRights da OMS"
    },
    {
      id: "hyperventilation",
      title: "Hiperventilação", emoji: "😮‍💨",
      do: [
        "A um lugar calmo. Sente-a e fique ao lado",
        "«Calma. Vamos soltar o ar devagar» — acompanhe a expiração",
        "Fique com ela até se acalmar"
      ],
      dont: [
        "Colocar um saco de papel na boca (o método do saco arrisca hipóxia e já não é recomendado)",
        "Dizer com firmeza «Se acalme!»",
        "Deixá-la ali sozinha"
      ],
      after: [
        "Se for a primeira vez, houver doença de base ou não recuperar: atendimento médico",
        "Anote o desencadeante (ansiedade, cansaço, aglomeração)",
        "Se se repetir, registre e compartilhe com a equipe e o responsável"
      ],
      outdoor: [
        "Sente-a num banco ou degrau, longe da multidão",
        "A quem está por perto, um breve «Está tudo bem, com um descanso se acalma»"
      ],
      why: "A hiperventilação em si raramente é fatal, mas a pessoa está dentro do medo de «vou morrer». Uma voz calma e sua companhia são o melhor remédio.",
      src: "Divulgação médica sobre a síndrome de hiperventilação (o saco de papel não é recomendado)"
    },
    {
      id: "medication",
      title: "Recusa da medicação", emoji: "💊",
      do: [
        "Recue uma vez (deixe passar um tempo e tente de novo)",
        "Experimente outra forma, outro momento ou outra pessoa para ajudar",
        "Se continuar, não decida sozinha: consulte o médico ou o farmacêutico (mudar a forma, apoio à tomada)"
      ],
      dont: [
        "Segurá-la para fazê-la engolir",
        "Misturar na comida sem avisar (gera desconfiança; só com o acordo do médico e da família)",
        "Barganhar («Sem o remédio, não tem ___»)"
      ],
      after: [
        "Anote como recusou (o sabor? o tamanho? o humor? — pode ser sinal de efeitos colaterais)",
        "Comente sempre na próxima consulta"
      ],
      why: "A recusa tem um motivo (difícil de engolir, efeitos duros, não entende para quê). Forçar perde mais do que uma dose. Busque a causa junto à equipe médica.",
      src: "Orientações gerais de apoio à medicação (conselhos de farmácia, etc.)"
    },
    {
      id: "anxiety",
      title: "Muita ansiedade / «quero ir para casa»", emoji: "🏠",
      do: [
        "Acolha o sentimento como é («Você quer ir para casa»)",
        "Mostre o que vem, em concreto («Depois do lanche, o ônibus»)",
        "Faça uma ponte para um objeto de conforto ou uma atividade preferida"
      ],
      dont: [
        "Enrolá-la com «Só mais um pouco»",
        "Convencê-la com razões",
        "Dar uma hora falsa (perde a confiança)"
      ],
      after: [
        "Anote as horas e os dias em que a ansiedade sobe",
        "Compartilhe pequenas formas de acrescentar calma com objetos ou o ambiente"
      ],
      outdoor: [
        "Dê o que vem em unidades visíveis («Mais duas paradas», «ao virar esta esquina»)",
        "Num dia de muita ansiedade, a coragem de encurtar a saída também é apoio"
      ],
      why: "«Quero ir para casa» costuma ser uma palavra para pedir segurança, mais do que um lugar. Vamos acrescentando, um a um, os apoios que a fazem sentir «aqui é seguro».",
      src: "Orientações gerais de apoio a pessoas com alta ansiedade"
    }
  ],

  traits: [
    {
      id: "asd", name: "Transtorno do espectro autista (TEA)", emoji: "🧩",
      short: "Estilo social, fixações e sensorialidade próprios",
      what: [
        "Um perfil em que um estilo social/comunicativo próprio se sobrepõe a interesses e fixações intensos e a uma sensibilidade (ou hipossensibilidade) sensorial. Algumas pessoas têm deficiência intelectual; outras não.",
        "Como se manifesta varia muito de pessoa para pessoa («espectro», um contínuo). Não presuma; olhe para esta pessoa.",
        "Para ela, o mundo é difícil de prever e muito estimulante: reduzir essa ansiedade é o cerne do apoio."
      ],
      prepare: [
        "Diante de um lugar novo ou de uma saída, «prepare» com fotos ou uma visita prévia. Compartilhe antes o roteiro, de forma visível.",
        "Quando uma mudança for inevitável, avise cedo e deixe margem para escolher (uma mudança repentina é o maior estressor).",
        "Não a apresse nem a assuste. Um plano que ela possa percorrer com compreensão cria a calma do dia."
      ],
      comm: [
        "Curto, concreto, um de cada vez («quando o relógio marcar 3», não «depois»)",
        "De forma visível mais do que com palavras (desenhos, fotos, texto, objetos reais)",
        "Rodeios, piadas e ironia não chegam; use frases claras e afirmativas («Vamos andar», não «Não corra»)",
        "Responder pode levar tempo. Não a apresse; espere"
      ],
      env: [
        "Mostre a agenda com antecedência (estruture-a)",
        "Reduza os estímulos (som, luz, aglomeração). Tenha à mão abafadores ou um lugar calmo",
        "Acompanhe sempre as mudanças com um aviso prévio. A mudança repentina é o maior estresse"
      ],
      scenes: ["panic", "runaway", "fixation", "shouting", "selfharm", "freeze"],
      ng: [
        "Forçar o contato visual",
        "Cortar uma fixação à força",
        "Repreender de forma abstrata («Comporte-se», «Leia o ambiente»)"
      ],
      src: "NICE NG11 (PBS) / apoio estruturado para o autismo (TEACCH) / DSM-5"
    },
    {
      id: "adhd", name: "TDAH (déficit de atenção / hiperatividade)", emoji: "⚡",
      short: "Desatenção, hiperatividade e impulsividade marcadas",
      what: [
        "Um perfil em que a desatenção (distrai-se, esquece) e a hiperatividade/impulsividade (custa ficar parada, esperar) são fortes para a idade.",
        "Não é preguiça nem caráter: uma diferença em como funcionam as «funções executivas» do cérebro.",
        "É fácil perder a confiança de tanto ser repreendida. Reparar no que consegue funciona."
      ],
      comm: [
        "Uma instrução por vez, curta. Apoie-se em notas e lembretes",
        "Elogie no exato momento em que consegue, em concreto (chega pior após uma pausa)",
        "Não repreenda de frente. Em vez de culpar o comportamento, pensem juntas o como"
      ],
      env: [
        "Reduza os estímulos que distraem (lugar, objetos, som)",
        "Torne visível (listas de tarefas, temporizadores, folhas de checagem)",
        "Preveja momentos frequentes para se mexer e descansar"
      ],
      scenes: ["shouting", "runaway", "anxiety"],
      ng: [
        "Repreender várias vezes com «Quantas vezes preciso dizer?»",
        "Explicações longas / várias instruções de uma vez",
        "Tomar o comportamento impulsivo como um defeito de caráter"
      ],
      src: "NICE (guia de TDAH, Reino Unido) / DSM-5"
    },
    {
      id: "id", name: "Deficiência intelectual", emoji: "📘",
      short: "A compreensão e o juízo se desenvolvem devagar",
      what: [
        "Um perfil em que a compreensão, o juízo, ler/escrever/calcular e o manejo de dinheiro e tempo se desenvolvem devagar, com momentos cotidianos «difíceis de captar».",
        "O grau e as forças/fraquezas variam de pessoa para pessoa. Não um trato infantil, mas um respeito conforme a idade.",
        "Muitas vezes não consegue dizer «não entendo» e fica travada em silêncio. Mude o modo de transmitir e chega."
      ],
      prepare: [
        "Compartilhe o que vão fazer «mostrando» de antemão com fotos ou objetos reais. Evite fazer de repente no mesmo dia.",
        "Divida os passos em pequeno e prepare para que ela possa ter êxito, antes de começar.",
        "Um plano com folga, que ela possa percorrer no próprio ritmo."
      ],
      comm: [
        "Devagar, curto, com palavras simples. Evite palavras difíceis ou muito de uma vez",
        "O concreto antes do abstrato (objetos reais, desenhos, demonstração). Mostre a ela",
        "Mais do que «entendeu?», deixe-a fazer e confirme",
        "Trate-a com a cortesia própria da idade (sem linguagem infantil)"
      ],
      env: [
        "Ponha os passos de forma visível (instruções com fotos, folhas de checagem)",
        "Estreite as opções para ser fácil escolher",
        "Divida em passos pequenos e alcançáveis"
      ],
      scenes: ["runaway", "fixation", "anxiety", "freeze"],
      ng: [
        "Trato infantil ou tom condescendente",
        "Apressá-la / dar muitas instruções de uma vez",
        "Recriminar com «eu disse há pouco»"
      ],
      src: "NICE NG11 (PBS) / DSM-5 (deficiência intelectual do desenvolvimento)"
    },
    {
      id: "ld", name: "Dificuldade de aprendizagem (transtorno específico)", emoji: "✏️",
      short: "Aprendizados específicos (ler, escrever, calcular) muito difíceis",
      what: [
        "Um perfil em que, sem um atraso geral marcante, «aprendizados específicos» — ler, escrever ou calcular — são muito difíceis.",
        "Não é falta de esforço nem problema de inteligência: um desequilíbrio de forças e fraquezas em como o cérebro processa a informação.",
        "Não culpe o ponto fraco; com uma via alternativa ela mostra suas forças."
      ],
      comm: [
        "Custa ler → leitura em voz alta, guia fonético, áudio. Custa escrever → digitar, fotos, gravar",
        "Transmita tanto de viva voz quanto por escrito",
        "Cuide de não fazê-la fazer o difícil diante de outros"
      ],
      env: [
        "Use as TIC (tablet, ditado por voz, calculadora)",
        "Letra grande, muito espaçamento, layout simples",
        "Formas de participar pela via em que ela é boa"
      ],
      scenes: ["anxiety"],
      ng: [
        "Concluir que «está enrolando»",
        "Forçá-la a ler em voz alta ou copiar do quadro",
        "Compará-la com outros"
      ],
      src: "DSM-5 (transtorno específico da aprendizagem) / princípios de acomodações razoáveis (CRPD)"
    },
    {
      id: "scz", name: "Esquizofrenia", emoji: "🌫️",
      short: "Ondas de alucinações, delírios e queda de motivação",
      what: [
        "Uma doença mental em que podem ocorrer alucinações (p. ex. ouvir vozes que não estão), delírios, um pensamento difícil de encadear e queda de motivação.",
        "Vai em ondas, também com épocas boas. Com o tratamento e o apoio certos, vive-se com calma.",
        "«Para a pessoa é real»: não discuta; acompanhe a ansiedade. Essa é a base."
      ],
      comm: [
        "Diante de alucinações/delírios, nem negar nem confirmar: responda ao sentimento («Dá medo»)",
        "Curto, sereno, com poucos estímulos",
        "Atente para se ela segue a medicação e se dorme"
      ],
      env: [
        "Um ambiente calmo e seguro. Evite mudanças bruscas e estímulos fortes",
        "Perceba cedo as mudanças de estado (não dorme, aumentam as queixas de perseguição)",
        "Articule-se com a pessoa, a família e o médico"
      ],
      scenes: ["hallucination", "anxiety", "panic"],
      ng: [
        "Tentar rebater um delírio com lógica",
        "Entrar na história e aumentá-la",
        "Confundir com preguiça e forçar atividades"
      ],
      src: "NICE (guia de psicose / esquizofrenia, Reino Unido) / QualityRights da OMS"
    },
    {
      id: "mood", name: "Depressão / transtorno bipolar (do humor)", emoji: "🌗",
      short: "Quedas intensas / oscilações do humor",
      what: [
        "Há a «depressão» — uma queda intensa e duradoura com perda de vontade e interesse — e o «bipolar», que oscila entre depressão e euforia (mania).",
        "Não se cura pela vontade. «Força» às vezes encurrala a pessoa.",
        "Entender as ondas, não forçar e acompanhar: é isso que sustenta."
      ],
      comm: [
        "Não diga «força» nem «é questão de atitude». Primeiro acolha a dor",
        "Não exija decisões ou tarefas complexas",
        "Em estado maníaco, freiem juntas as grandes decisões e os gastos"
      ],
      env: [
        "Um ambiente que permita descansar, no ritmo dela. Não a culpe por um dia que não dá conta",
        "Ajude a organizar o ritmo de vida e o sono",
        "Não passe por cima de um «quero morrer»: a atendimento médico e à família de imediato"
      ],
      scenes: ["anxiety", "selfharm"],
      ng: [
        "Encorajar demais ou repreender",
        "Comparar com «todo mundo passa por dificuldade»",
        "Deixar passar em silêncio a ideação suicida"
      ],
      src: "NICE (guias de depressão / transtorno bipolar, Reino Unido) / prevenção do suicídio"
    },
    {
      id: "anx", name: "Transtornos de ansiedade / TOC", emoji: "🫧",
      short: "Ansiedade excessiva, rituais de checagem",
      what: [
        "Um perfil em que uma ansiedade e um medo excessivos (crises de pânico, checagens que não consegue parar) viram a vida do avesso.",
        "Não é «preocupar-se demais»: o freio da ansiedade do cérebro funciona pior.",
        "Ao acumular tranquilidade, aos poucos alivia."
      ],
      comm: [
        "Não negue a ansiedade («Estou com você», não «Não é nada»)",
        "Dê o que vem em concreto («Termina em dez minutos»)",
        "Não corte de frente o ritual de checagem"
      ],
      env: [
        "Um ambiente previsível e seguro",
        "Reduza estímulos e pressão",
        "Um lugar calmo onde possa serenar a respiração"
      ],
      scenes: ["anxiety", "hyperventilation", "panic", "fixation"],
      ng: [
        "Encerrar com «você se preocupa demais»",
        "Forçá-la a encarar a situação temida",
        "Proibir à força a checagem"
      ],
      src: "NICE (guias de ansiedade / TOC, Reino Unido)"
    },
    {
      id: "ptsd", name: "TEPT / dificuldades de apego", emoji: "🕯️",
      short: "Experiências dolorosas do passado ainda agindo hoje",
      what: [
        "Um estado em que experiências dolorosas passadas (maltrato, catástrofe, acidente) continuam como memórias intrusivas, hipervigilância e evitação. Algumas pessoas carregam feridas do apego.",
        "Não é «exagero» nem «coisa do passado»: é uma reação que ainda acontece hoje.",
        "A segurança, a tranquilidade e acumular confiança — «esta pessoa é de confiança» — são a base da recuperação."
      ],
      comm: [
        "Não a toque de repente nem se aproxime por trás (não a assuste)",
        "Deixe margem para escolher e para dizer não (a sensação de controle traz calma)",
        "Cumpra o prometido. Vá empilhando pequenas confianças"
      ],
      env: [
        "Um ambiente seguro e previsível. Evite vozes altas e aproximações bruscas",
        "Tenha em mente que certos sons, lugares ou situações podem ser gatilhos",
        "Numa memória intrusiva, diga com calma «Agora você está a salvo»"
      ],
      scenes: ["panic", "anxiety", "selfharm"],
      ng: [
        "Forçá-la a contar a experiência",
        "Assustá-la / ter um contato físico repentino",
        "Tratar a reação como «birra»"
      ],
      src: "NICE (guia de TEPT, Reino Unido) / cuidado informado pelo trauma"
    },
    {
      id: "epi", name: "Epilepsia", emoji: "🧠",
      short: "Crises por uma alteração elétrica breve do cérebro",
      what: [
        "Um quadro em que uma alteração elétrica breve do cérebro provoca «crises». Vão de convulsões a um instante de ausência.",
        "Fora das crises, muitas pessoas vivem normalmente. Não são «perigosas».",
        "Importa conhecer o atendimento sereno na crise e a «regra dos 5 minutos»."
      ],
      comm: [
        "A crise não é vontade da pessoa. Mantenha a calma e vigie",
        "Depois pode ficar aturdida. Não a apresse; deixe descansar",
        "Conheça de antemão o «tipo de crise» dela e as orientações do médico"
      ],
      env: [
        "Previna lesões (quinas, água, alturas, o banho)",
        "Compartilhe um registro das crises (hora, como foi)",
        "Apoie a gestão da medicação com discrição"
      ],
      scenes: ["medical"],
      ng: [
        "Colocar algo na boca (um erro: causa asfixia e lesões)",
        "Segurá-la",
        "Dar comida ou bebida logo após uma crise"
      ],
      src: "Epilepsy Foundation e CDC (EUA) «Stay·Safe·Side» / Associação Japonesa de Epilepsia"
    },
    {
      id: "abi", name: "Lesão cerebral adquirida (disfunção cerebral superior)", emoji: "🧭",
      short: "Uma deficiência pouco visível após acidente ou doença",
      what: [
        "Um estado em que, após um acidente ou doença (traumatismo craniano, AVC, etc.), a memória, a atenção, o planejamento e o controle emocional ficam afetados de modo pouco visível.",
        "Difícil de notar por fora e fácil de mal interpretar como «mudou». A pessoa também está desconcertada.",
        "Muita capacidade permanece. Com apoios para suprir o fraco, a vida se abre."
      ],
      comm: [
        "Um de cada vez, curto. Apoie-se em notas e lembretes",
        "Quando a emoção sobe, reduza estímulos e não repreenda",
        "Não recrimine o «eu disse há pouco» (é um transtorno da memória)"
      ],
      env: [
        "Ponha os passos e a agenda de forma visível (notas, agenda, alarmes)",
        "Um ambiente calmo e sem distrações",
        "Estabilize-a com a mesma rotina, o mesmo lugar"
      ],
      scenes: ["shouting", "anxiety", "freeze"],
      ng: [
        "Mal interpretar como «preguiça» ou «birra»",
        "Dar muitas instruções de uma vez",
        "Apontar repetidamente o que não consegue"
      ],
      src: "Orientações gerais de apoio à lesão cerebral adquirida"
    },
    {
      id: "sbd", name: "Comportamento desafiador grave", emoji: "🆘",
      short: "Autolesão, agressão, etc. tão intensas que exigem apoio especial",
      what: [
        "Um «estado» em que a autolesão, a agressão, as fixações intensas e a destruição ocorrem com frequência e intensidade muito altas, de modo que se precisa de um apoio especialmente intensivo (não é um diagnóstico).",
        "A pessoa não é «difícil»: está em dificuldade. Por trás há uma falta de vias para se comunicar e um descompasso com o ambiente.",
        "Com Apoio Comportamental Positivo (PBS) — ler o motivo do comportamento e adaptar o ambiente — muda muito."
      ],
      prepare: [
        "O verdadeiro trabalho do apoio é «antes de acontecer». Uma saída ou um evento começa por planejá-lo com cuidado, dentro dos limites dela.",
        "Para que ela possa ter uma previsão e entrar com compreensão (compartilhe antes: onde, o quê, quanto tempo, e o que acontece ao terminar).",
        "Organize para evitar estímulos difíceis, aglomerações e esperas. Decida de antemão onde ela pode descansar, quando voltar e uma via de saída.",
        "Não tente resolver depois do pânico: só dói em todos. Registre o que foi bem e o que custou, e leve ao próximo plano."
      ],
      comm: [
        "Busque a «função» (o motivo) do comportamento (pedir, evitar, atenção, sensação)",
        "Faça crescer um modo de comunicar (cartões, dispositivos)",
        "Interaja com mais dedicação justamente quando as coisas vão bem"
      ],
      env: [
        "Reduza estímulos, exigências e previsões quebradas (estrutura, baixa ativação)",
        "Registre desencadeante → comportamento → resultado e analise em equipe",
        "Não recorra à contenção nem à repreensão. Articule-se com profissionais e com o médico"
      ],
      scenes: ["selfharm", "aggression", "runaway", "panic", "fixation", "shouting"],
      ng: [
        "Submetê-la à força / pará-la com repreensões",
        "Continuar atendendo o pedido para sair da situação",
        "Carregar sozinha / dentro de um único serviço"
      ],
      src: "NICE NG11 (PBS) — Apoio Comportamental Positivo"
    }
  ],

  hints: [
    "As pistas de apoio são só tendências. A pessoa à sua frente é sempre o melhor livro-texto.",
    "Há sempre um motivo por trás do comportamento. Ver «uma pessoa em dificuldade» em vez de «uma pessoa difícil» já muda como você responde.",
    "As pessoas se acalmam quando veem o que vem. Dizer primeiro «o que vai acontecer» é a maior prevenção.",
    "Acompanhe as mudanças com um aviso, não com surpresas. Uma «mudança repentina» costuma ser o maior estressor.",
    "A forma visível vence as palavras. Desenhos, fotos, texto e objetos reais às vezes chegam muito mais que a fala.",
    "«Vamos andar» vence «Não corra». O comportamento que você quer, dito no positivo, chega melhor que a negação.",
    "Um de cada vez. Que as instruções sejam curtas e concretas. «Bem» e «com cuidado» são, na verdade, dos mais difíceis de captar.",
    "Elogie no exato momento em que consegue, em concreto. Após uma pausa, o elogio chega pior.",
    "É justamente quando passa o tempo com calma que mais se deve interagir. Se você só interage quando há problema, isso vira «o jeito de interagir».",
    "Segurar alguém está a um passo da lesão, da perda de confiança e do maltrato. Comece por reduzir distância e estímulos.",
    "Em pleno pânico, a explicação e a persuasão não chegam. Primeiro reduza estímulos e espere ela se acalmar.",
    "O verdadeiro trabalho do apoio é «antes de acontecer». A preparação e o plano criam a calma do dia.",
    "Planeje as saídas com cuidado. Decidir de antemão onde descansar, quando voltar e uma via de saída dá tranquilidade.",
    "Melhor que uma boa resposta é não fazer o que faz mal. Só com isso, os acidentes caem muito.",
    "Um registro pode levar menos de um minuto. Deixar «desencadeante → comportamento → resultado» facilita o próximo apoio.",
    "Não carregue sozinha. Compartilhe o que a inquieta com a equipe e o responsável. Compartilhar cedo protege a pessoa.",
    "Seu «não» e seu «não entendo» são sinais importantes. Primeiro acolha que ela conseguiu dizer.",
    "Poder escolher traz tranquilidade. «A ou B?» vence «é a única opção».",
    "Os sentidos diferem em cada pessoa. Brilho demais, barulho demais, algo que raspa: para ela pode ser um estímulo doloroso.",
    "Um comportamento que parece «birra» pode ser o próprio motivo dela ou um recurso. Não presuma.",
    "Uma fixação é um modo de tornar previsível um mundo que angustia. Em vez de tirar, amplie a tranquilidade.",
    "«Força» às vezes encurrala a pessoa. A quem está abatido, acolha primeiro a dor.",
    "Diante de alucinações e delírios, nem negar nem confirmar. Acompanhe o sentimento com «Dá medo».",
    "Engula o «eu disse há pouco». Esquecer pode ser parte da condição.",
    "Não trate adultos como crianças. Ainda que a compreensão seja lenta, ofereça um respeito conforme a idade.",
    "Esperar também é um grande apoio. Há quem consiga se mover; só demora a mudar de tarefa.",
    "Não force o contato visual. Para alguns, olhar nos olhos é doloroso.",
    "Não a assuste. Evite chegar de repente por trás ou tocar sem avisar.",
    "Cumpra o prometido. Pequenos momentos de «foi cumprido», empilhados, viram confiança.",
    "Numa crise, colocar algo na boca é um erro: causa asfixia e lesões. Mantenha a calma e cronometre.",
    "O saco de papel para a hiperventilação já não vale: arrisca hipóxia. Acompanhe-a para soltar o ar devagar.",
    "O médico é médico; o apoio é apoio. Diante de uma situação médica duvidosa, não hesite: o número de emergência local e as orientações do médico.",
    "Ao crescer as vias de comunicar, os gritos e a agressão costumam ir diminuindo. Cartões e dispositivos também são «palavras».",
    "Os «gostos» dela são seu maior aliado. Uma atividade, um objeto ou um tema favorito são um atalho para a calma.",
    "Sua calma é, naquele momento, a maior fonte de tranquilidade.",
    "Cuide de você também. Se o cuidador cai, o apoio para. Descansar também é parte do trabalho.",
    "O comportamento dá «sinais prévios» (inquietação, voz subindo, movimentos mudando). As pequenas respostas antes de a onda subir são as que mais funcionam.",
    "Logo depois de acalmar vem um período de recuperação frágil, fácil de reacender. Primeiro água e descanso; retome atividades e demandas aos poucos.",
    "Antes de tocar para ajudar, avise sempre com uma palavra («vou tocar seu braço agora»). O contato sem aviso semeia medo e reações defensivas.",
    "Em vez de ficar de frente, fique na diagonal ou lado a lado. A pressão diminui — e dá para conversar olhando a mesma paisagem.",
    "O tom de voz chega antes do conteúdo. Baixo, devagar e com poucas palavras.",
    "Se o comportamento aumentar de repente, suspeite primeiro do corpo (dor, fome, sono, prisão de ventre, calor). O mal-estar que não se consegue dizer sai como comportamento.",
    "Etiquetas, costuras e tecidos da roupa também podem ser sensibilidade sensorial. O conforto da roupa é parte do apoio.",
    "Num lugar novo, confira primeiro as saídas, os banheiros e um canto tranquilo para descansar — tranquiliza os dois.",
    "Trate como adulto. Pode precisar de ajuda, mas quem decide é a própria pessoa.",
    "Não fale da pessoa na frente dela como se ela não estivesse ali. A dignidade mora nos detalhes.",
    "Quando algo não funciona, revise o desenho do apoio, não a pessoa. No momento em que vira «culpa dela», o apoio para.",
    "Nos registros, separe o que você viu (fatos) do que pensou (suposições) — rende no próximo apoio.",
    "Experimente as novidades uma de cada vez. Mudando tudo de uma vez, nunca se sabe o que funcionou.",
    "Revezar não é derrota: é técnica. Quando emperrar, trocar de pessoa muda o ar. Essa margem é a força da equipe.",
    "Antes de falar, diga o nome. Só de saber que as palavras são para ela, elas chegam de outro jeito.",
    "Melhor «quando o timer tocar» do que «mais cinco minutos». O tempo chega quando vira ferramenta visível.",
    "Torne a espera visível — que se veja o que está sendo esperado. Tempo em branco vira tempo de ansiedade.",
    "O lugar de sempre, o assento de sempre. Lugar fixo é alicerce de segurança. Não mude sem necessidade.",
    "Abafadores de ouvido e óculos escuros não são «mimo»: são ferramentas, como os óculos. Que se usem de cabeça erguida.",
    "Tenha uma lista de sons, luzes e cheiros difíceis (um mapa sensorial). Ajustar o ambiente fica bem mais rápido.",
    "«Mais uma vez e acabamos» — anunciar o fim importa tanto quanto anunciar o começo.",
    "Registre também os dias bons. As respostas que funcionaram são o tesouro da equipe.",
    "Não é «não consegue», é «ainda não aprendeu». Muda o olhar e o próximo passo aparece.",
    "Escada se sobe degrau por degrau. Pule os passos pequenos e a subida fica impossível.",
    "Não ajude demais. Mesmo que demore, o «eu consegui sozinho» vira a força seguinte.",
    "No cronograma visual, retire (ou vire) os itens concluídos. A sensação de avanço vira segurança.",
    "Como prêmio, tempo de atividade favorita vale mais que coisas. Dura mais e enrosca menos.",
    "Viu os sinais, mude de lugar. Trocar de ambiente é a jogada mais simples e poderosa que existe.",
    "No meio do choro e dos gritos, não precisa achar as palavras certas. O que é preciso é segurança e tempo.",
    "Sente ao lado e olhem a mesma coisa. O «tempo em paralelo» cria confiança em silêncio.",
    "Não falar não significa não entender. A capacidade de compreender e a de expressar são coisas distintas.",
    "Não confie demais no «sim». Há sins ditos só porque não havia outra coisa a dizer. Confirme pela ação.",
    "Gestos, apontar, objetos reais. A palavra é só uma das ferramentas de comunicação.",
    "Sono desregulado leva direto a comportamento desregulado. Saber se dorme também é apoio.",
    "Seletividade alimentar pode ser questão sensorial, não birra. Em vez de forçar, ajuste forma, temperatura e textura.",
    "Perspectiva também no transporte: «aonde, para quê, quanto tempo» — antes de embarcar.",
    "O «bem-vindo de volta» no retorno. Uma recepção estável sustenta a tranquilidade da próxima saída.",
    "A compreensão do entorno não se constrói num dia. Tenha à mão um símbolo de ajuda ou um cartão breve de explicação.",
    "Escrever registros é só metade. Eles ganham vida quando a equipe reserva tempo para revê-los.",
    "Se pensar «de novo não», é sinal de descanso. A fadiga embota o julgamento em silêncio.",
    "Depois de um atendimento difícil, sempre passe o bastão. Cansaço e informação pesam menos compartilhados.",
    "O dinheiro e as coisas dela: não «administrar», mas «pensar juntos como usar». Os direitos são dela.",
    "O que funcionou no ano passado pode não funcionar hoje. As pessoas mudam — o apoio também pode mudar.",
    "Não esqueça o «obrigado» entre colegas. O ar da equipe chega à pessoa exatamente como é."
  ],

  quizzes: [
    {
      q: "Alguém entra num pânico intenso. O que você faz primeiro?",
      options: ["Gritar alto: «Se acalme!»", "Parar de falar, reduzir pessoas e estímulos, e esperar ela se acalmar", "Agarrá-la pelo braço e tirá-la do local"],
      answer: 1,
      explain: "Em pleno pânico, as palavras e os estímulos não podem ser processados e pioram as coisas. Primeiro pare de falar, reduza pessoas, som e luz, e fique em silêncio ao lado dela num lugar seguro. Esperar ela se acalmar é a resposta mais rápida."
    },
    {
      q: "Uma fixação com uma ordem fixa impede seguir a atividade. O que é bom?",
      options: ["Cortá-la à força e passar ao seguinte", "Se for seguro, acompanhar e mostrar o fim de forma visível («mais três vezes»)", "Trocar por outra coisa às escondidas"],
      answer: 1,
      explain: "Uma fixação é o modo dela de se sentir segura. Cortá-la à força ou com engano perde a confiança e da próxima vez é mais forte. Acompanhe e use um temporizador ou «mais ___ vezes» para tornar o «fim» visível: esse é o truque."
    },
    {
      q: "Há uma agressão e chegam duas pessoas de reforço. O que primeiro?",
      options: ["Todos cercarem a pessoa para pará-la", "Dividir papéis (uma atende a pessoa; as outras afastam os demais usuários)", "Todos abandonarem o local"],
      answer: 1,
      explain: "Quando chega o reforço, dividir papéis é mais seguro do que todos se juntarem num ponto. Uma atende a pessoa com calma enquanto as outras afastam os demais usuários ou os transeuntes. Cercá-la e atrair a atenção só aviva a agitação."
    },
    {
      q: "Alguém foge de repente para fora. Como você a segue?",
      options: ["Persegui-la a toda velocidade logo atrás", "Mantê-la à vista, ir ao lado e bloquear direções perigosas como a via", "Gritar o nome sem parar para não perdê-la"],
      answer: 1,
      explain: "Perseguir logo atrás vira uma «corrida» e pode acelerá-la; gritar pode reforçar a fuga. Entre no campo de visão pelo lado enquanto bloqueia primeiro via, trilhos e água. E chame reforço e avise cedo."
    },
    {
      q: "Começa uma crise convulsiva. O que você NÃO deve fazer?",
      options: ["Cronometrar olhando o relógio", "Colocar na boca palitos ou uma toalha", "Se puder cair, amparar e afastar os objetos perigosos"],
      answer: 1,
      explain: "Colocar algo na boca «para não morder a língua» é um erro: causa asfixia e machuca dentes ou mandíbula. O que fazer: garantir a área e cronometrar a crise. Mais de 5 minutos, repetir, lesão ou na água → emergência."
    },
    {
      q: "Uma crise de hiperventilação. Qual é a resposta correta?",
      options: ["Colocar um saco de papel na boca para respirar", "Ficar ao lado e guiá-la a soltar o ar devagar", "Dizer com firmeza «Se acalme!» para reagir"],
      answer: 1,
      explain: "O método do saco de papel arrisca hipóxia e já não é recomendado. O que fazer: num lugar calmo, ficar com ela e guiar — «Vamos soltar o ar devagar» — acompanhando a expiração. Fique até ela se acalmar."
    },
    {
      q: "Você leva uma pessoa com comportamento desafiador grave a um lugar novo. O que é mais importante?",
      options: ["Improvisar conforme o que surgir no dia", "Planejar com cuidado de antemão para que ela possa ter uma previsão e entrar com compreensão", "Encher a agenda para ser um dia cheio"],
      answer: 1,
      explain: "O verdadeiro trabalho do apoio é «antes de acontecer». Atender depois que o comportamento começou é difícil e doloroso para todos. Compartilhe antes onde, o quê e quanto tempo, e o que acontece ao terminar, e decida de antemão onde ela pode descansar e quando voltar. Esse é o maior apoio."
    },
    {
      q: "«Espere mais um pouco, comporte-se». Qual é uma forma mais clara?",
      options: ["«Quando o relógio marcar 3, vamos. Até lá, esperamos sentados na cadeira.»", "«Seja bonzinho.»", "«Já termina, aguente.»"],
      answer: 0,
      explain: "«Bem», «mais um pouco» e «seja bonzinho» são, na verdade, dos mais difíceis de captar. O quando, o quê e o como — ditos em concreto e de forma visível — é que chegam."
    },
    {
      q: "Para elogiar o que ela fez bem, quando?",
      options: ["Tudo junto no fim do dia", "No exato momento em que consegue, em concreto", "Na próxima vez que falhar, por comparação"],
      answer: 1,
      explain: "O elogio chega pior após uma pausa. Não «muito bem», mas «você calçou o sapato sozinho», no momento do êxito e em concreto. Quando ela pode saber o que foi elogiado, isso se transfere para a próxima vez."
    },
    {
      q: "O que convém evitar dizer a alguém profundamente abatido?",
      options: ["Acolher com «Foi difícil»", "Encorajar: «Força! Todo mundo passa por dificuldade!»", "Só ficar em silêncio ao lado"],
      answer: 1,
      explain: "A depressão não se cura pela vontade. «Força» e a comparação com outros podem encurralar mais a pessoa. Primeiro acolha a dor. E não passe por cima de um «quero morrer»: a atendimento médico e à família de imediato."
    },
    {
      q: "«Ouço xingamentos de dentro da parede», diz com medo. O que você faz?",
      options: ["Ensinar os fatos: «Não existe tal voz»", "Acompanhar o sentimento («Dá medo») e conduzir a algo que tranquilize", "Perguntar «O que ela diz?» e escutar com ela"],
      answer: 1,
      explain: "Para a pessoa, de fato ouve. Nem rebater nem aumentar a história. A questão não é verdadeiro ou falso, mas a ansiedade. Acompanhe o sentimento e conduza com suavidade a uma atividade real que tranquilize. Se estiver aumentando, sugira uma consulta."
    },
    {
      q: "No supermercado, ela de repente fica inquieta e tapa os ouvidos. O que você suspeita primeiro?",
      options: ["Que está incomodando de propósito", "Um desconforto sensorial: som, luz, multidão", "Que só está com fome"],
      answer: 1,
      explain: "No autismo e em outros casos, os sentidos podem ser muito sensíveis. A música de fundo, a iluminação e o burburinho podem ser um estímulo doloroso para ela. Movam-se a um lugar calmo, usem abafadores: formas de reduzir o estímulo."
    },
    {
      q: "A situação se acalmou. Que coisa importante você pode fazer em menos de um minuto?",
      options: ["Não é preciso fazer nada em especial", "Registrar desencadeante → comportamento → resultado, e compartilhar", "Fazer com que escreva um pedido de desculpas"],
      answer: 1,
      explain: "Só deixar brevemente «qual foi o desencadeante» já abre a próxima prevenção. Ao acumular registros de desencadeante × resposta, viram o «manual» daquela pessoa. Não carregue sozinha: compartilhe com a equipe."
    },
    {
      q: "Ela recusa de vez a medicação. Qual é uma boa resposta?",
      options: ["Segurá-la e fazê-la engolir", "Recuar e deixar passar um tempo; se continuar, consultar o médico ou o farmacêutico", "Misturar na comida sem avisar"],
      answer: 1,
      explain: "A recusa tem um motivo (difícil de engolir, efeitos duros, não entende para quê). Forçar perde a confiança. Recue e deixe passar um tempo, mude a forma ou o momento. Se continuar, não decida sozinha: pergunte ao médico ou ao farmacêutico. Misturar às escondidas, só com o acordo do médico e da família."
    },
    {
      q: "Está inquieto e a voz vai subindo — você notou os «sinais prévios». Quando agir?",
      options: ["Nada aconteceu ainda, então só observo", "Na fase dos sinais: reduzo estímulos e convido para uma pausa", "Espero o comportamento começar e respondo com tudo"],
      answer: 1,
      explain: "O comportamento sobe como uma onda. Depois do pico, palavras e recursos mal chegam. As pequenas respostas na fase dos sinais (menos estímulos, uma pausa, mudar de lugar) funcionam com o menor desgaste. Registrar e compartilhar os padrões dos sinais vira um tesouro da equipe."
    },
    {
      q: "O pânico acabou de se acalmar. Próximo passo?",
      options: ["Retomar imediatamente a atividade interrompida", "Água e descanso; retomar devagar, observando como está", "Cobrar reflexão para que não aconteça de novo"],
      answer: 1,
      explain: "Logo depois de acalmar vem um «período de recuperação»: corpo e mente esgotados, fácil de reacender. Retomar as demandas cedo demais pode trazer tudo de volta. Primeiro água e descanso; retomar por etapas. Sermões e reflexão não chegam nesse momento."
    },
    {
      q: "Antes de tocar o corpo para ajudar a trocar de roupa, o que vem primeiro?",
      options: ["Avisar com uma palavra: «vou tocar seu braço agora»", "Terminar rápido e em silêncio para não assustar", "Segurar por trás e mover a pessoa primeiro"],
      answer: 0,
      explain: "O contato sem aviso dispara medo e reações defensivas (se soltar, bater). Especialmente com pessoas com trauma ou sensibilidade sensorial, a base é: de onde ela veja você, e depois de avisar. Priorize a velocidade da segurança sobre a velocidade da tarefa."
    },
    {
      q: "Ao oferecer atividades para escolher, qual jeito funciona melhor?",
      options: ["Reduzir a duas: «A ou B — qual você prefere?»", "Enfileirar o máximo de opções para escolha livre", "Decidir pela pessoa para não a preocupar"],
      answer: 0,
      explain: "Poder escolher traz segurança — mas opções demais viram uma nova ansiedade. Com duas (no máximo três), escolhe-se com calma. A própria sensação de «fui eu que decidi» dá força ao próximo passo."
    },
    {
      q: "Nestes dias o comportamento aumentou de repente. O que verificar primeiro?",
      options: ["Achar que ficou mais teimoso", "Endurecer os castigos para frear", "Verificar o corpo (dor, fome, sono, prisão de ventre) e mudanças no ambiente"],
      answer: 2,
      explain: "Uma mudança brusca de comportamento aponta primeiro para desconforto físico ou mudança de ambiente. Dor de dente, otite, prisão de ventre, sono perdido — o mal-estar que não se diz aparece como comportamento. Não é «a personalidade mudou»: «algo está acontecendo». Confira também o histórico médico."
    },
    {
      q: "No trem, tapou os ouvidos e se agachou. Gente começa a se juntar. Primeiro?",
      options: ["Levantar a pessoa — prioridade é descer na próxima estação", "Fazer de parede com o corpo, cortar os olhares e dizer breve: «está tudo bem»", "Explicar a situação em voz alta para todos"],
      answer: 1,
      explain: "Os olhares que se juntam são, por si só, um estímulo forte. Primeiro seja uma parede: corte as linhas de visão e as pessoas, com uma frase curta para o entorno. Mover pode esperar acalmar; a decisão de descer vem depois."
    },
    {
      q: "Uma crise epiléptica terminou em 3 minutos; a pessoa está atordoada. Agora?",
      options: ["Levantar e fazer andar já, para checar a consciência", "Vigiar na posição de recuperação; registrar duração e detalhes", "Dar água e açúcar"],
      answer: 1,
      explain: "Depois da crise, o atordoamento pode continuar. Vigie em silêncio na posição de recuperação, registre quanto durou e como foi, e informe o médico e a família. Comer ou beber logo traz risco de engasgo; forçar a andar, risco de queda."
    },
    {
      q: "Qual jeito de escrever registros ajuda mais o próximo apoio?",
      options: ["Centrado em impressões: «ficou bravo o tempo todo»", "Com fatos: «15h, antes do lanche, voz alta 10 min, acalmou ao trocar de lugar»", "Longo e detalhado, como uma história"],
      answer: 1,
      explain: "O truque é separar o que você viu (fatos) do que pensou (suposições). Quando, onde, o quê e o que ajudou — em breve. Os fatos acumulados revelam padrões de gatilho: a planta do próximo apoio."
    },
    {
      q: "Um colega no meio do atendimento está emperrando; o rosto endurece. O que é bom?",
      options: ["Dizer «eu assumo» e revezar", "Deixar que ele conclua sozinho até o fim", "Não dizer nada agora e apontar depois na reunião"],
      answer: 0,
      explain: "A tensão e a irritação do apoiador também chegam à pessoa. Revezar quando se emperra não é derrota: é técnica. Só de trocar a pessoa, o ar muda — e muito. Uma equipe onde o revezamento pode ser oferecido e aceito protege a pessoa."
    },
    {
      q: "Um familiar confidencia: «em casa é muito difícil… talvez eu tenha criado errado». Primeiro?",
      options: ["Corrigir: «o método de vocês precisa mudar»", "Reconhecer — «você sustentou isso até aqui» — e perguntar o que funciona em casa", "Explicar unilateralmente o método da instituição"],
      answer: 1,
      explain: "A família é a apoiadora mais veterana de todas — quem há mais tempo sustenta a pessoa. Antes de corrigir ou instruir, reconheça. O que funciona em casa é pista preciosa. No fim, a relação de parceria é o que melhor sustenta a pessoa."
    },
    {
      q: "Você quer começar cartões com figuras, um horário novo e troca de lugar, tudo junto. O que fazer?",
      options: ["Mudar tudo de uma vez para maximizar o efeito", "Experimentar um de cada vez, conferindo o efeito", "Não mudar nada — mudança confunde"],
      answer: 1,
      explain: "Mudando muita coisa de uma vez, não se sabe o que funcionou (nem o que não combinou), e o peso sobre a pessoa cresce. Novidades uma a uma, confirmadas pelos registros. O truque não é evitar mudar: é mudar em ordem."
    },
    {
      q: "A pessoa murmura: «quero morrer». O que fazer?",
      options: ["Mudar de assunto: «não diga isso»", "Levar a sério, escutar e conectar logo com a chefia e a área médica", "Como é frequente, deixar passar"],
      answer: 1,
      explain: "Toda menção a querer morrer é levada a sério, seja qual for a frequência. Sem negar nem desviar: primeiro escutar. E não carregar sozinho: informe a chefia no mesmo dia e compartilhe com a medicina e a família. «Nunca deixar passar» é o primeiro passo para proteger uma vida."
    },
    {
      q: "Planejando um passeio a um lugar novo. O que tranquiliza decidir primeiro?",
      options: ["A loja de lembrancinhas", "Onde descansar, quando voltar e por onde sair", "Os pontos de foto"],
      answer: 1,
      explain: "Tão importante quanto planejar a diversão: onde descansar se cansar, o que sinaliza a hora de voltar, por onde se sai. Decidir antes as rotas de fuga e o encerramento dá margem ao apoiador — e essa margem vira a tranquilidade da pessoa."
    },
    {
      q: "O apoio não anda bem há dias. Um bom jeito de pensar?",
      options: ["Concluir que você não serve para isso", "Encarar como chance de revisar o desenho do apoio e conversar com a equipe", "Desistir — a deficiência é grave demais"],
      answer: 1,
      explain: "Quando algo não funciona, o que se revisa é o desenho (ambiente, comunicação, horário, estímulos) — não uma pessoa. Culpar a si ou à pessoa não move nada. Levar os registros e revisar em equipe: é assim que os profissionais atravessam seus «dias ruins»."
    },
    {
      q: "Para dizer «o próximo» a alguém que travou, como?",
      options: ["«Anda logo, vamos nos atrasar!»", "«Depois disso, o chá» — curto, uma coisa só, de forma visível", "Explicar toda a agenda do dia, do começo ao fim"],
      answer: 1,
      explain: "Quando a transição está demorando a processar, mais informação transborda. Só a próxima coisa: curta, concreta e, se possível, visível. Palavras de pressa só deixam o processamento mais pesado."
    },
    {
      q: "Durante o atendimento, transeuntes bem-intencionados se aproximam: «está tudo bem?!». Boa resposta?",
      options: ["Explicar em detalhe o diagnóstico e o ocorrido para que entendam", "Dizer breve: «está tudo bem, um instante e ele se acalma», e cortar os olhares", "Ignorar e focar no atendimento"],
      answer: 1,
      explain: "A atenção bem-intencionada também é estímulo para a pessoa. Uma frase curta tranquiliza o entorno e desfaz a rodinha e os olhares — isso é apoio de verdade. Não é preciso contar dados privados como o diagnóstico. Ignorar pode acabar em chamado à polícia, então uma frase — só uma — é a medida certa."
    },
    {
      q: "Você deu uma instrução e não houve resposta. O que revisa primeiro?",
      options: ["Repetir com voz mais alta", "Dizer o nome, confirmar que a atenção está em você e falar breve", "Pegar pela mão e conduzir"],
      answer: 1,
      explain: "Palavras que chegam de qualquer lugar são difíceis de reconhecer como «para mim». Primeiro o nome. Confirme que a atenção está em você e fale curto. O que importa não é o volume — é a ordem de chegada."
    },
    {
      q: "Respondeu «sim» ao «entendeu?», mas a ação não veio. Como pensar?",
      options: ["Pode ter sido um «sim» sem outra saída. Confirmar fazendo de verdade", "Mentiu, então repreender", "Explicar de novo em voz mais alta"],
      answer: 0,
      explain: "Há sins que se dizem porque a pergunta não deixa outra saída. Não culpe — mude o jeito de confirmar. Mais do que perguntar «entendeu?», peça que faça de verdade. A ação confirma a compreensão melhor que as palavras."
    },
    {
      q: "Só come arroz branco e pão. Uma boa resposta?",
      options: ["Pela saúde, não servir nada até comer outras coisas", "Pode ser sensorial. Sem forçar: ajustar forma e temperatura e consultar medicina e nutrição", "É escolha dele, então não fazer nada"],
      answer: 1,
      explain: "A seletividade extrema costuma não ser birra, mas sensibilidade sensorial a sabor, textura ou aparência. Forçar transforma a própria refeição em medo. Pequenos ajustes de forma e temperatura, e o lado nutricional com os profissionais."
    },
    {
      q: "A família conta que ele não anda dormindo. O dia também está agitado. Primeiro?",
      options: ["Aumentar a atividade diurna para cansar", "Endurecer a resposta ao comportamento", "Registrar o sono e compartilhar com o médico"],
      answer: 2,
      explain: "Sono desregulado leva direto a comportamento desregulado. Primeiro registre quando dorme, quando acorda e como vai a noite — e leve ao médico. A causa (remédio, saúde, ambiente, ansiedade) se estuda com a medicina. Endurecer só o dia não muda a raiz."
    },
    {
      q: "No cronograma visual, qual uso traz mais segurança?",
      options: ["Retirar (ou virar) os itens concluídos", "Deixar o cronograma inteiro como está", "Não deixar a pessoa tocar"],
      answer: 0,
      explain: "Ver até onde avançou dá perspectiva do que falta — e isso dá segurança. Se a própria pessoa retira ou vira os itens, há também senso de conquista. O cronograma não é a planilha do apoiador: é a ferramenta da pessoa."
    },
    {
      q: "Como prêmio pelo esforço, o que dura mais?",
      options: ["Comprar algo caro", "Tempo de atividade favorita (música, passeio…)", "Doces toda vez"],
      answer: 1,
      explain: "Prêmios de coisas e comida tendem a escalar ou enroscar com a saúde. O «tempo de atividade favorita» é a própria alegria da pessoa, cabe no cotidiano e dura. Saber do que ela gosta já é força de apoio."
    },
    {
      q: "Uma tarefa está demorando. Até onde ajudar?",
      options: ["Acompanhar de perto, ajudando o mínimo só onde trava", "É desperdício de tempo: fazer tudo por ela", "Não tocar em nada até conseguir"],
      answer: 0,
      explain: "Fazer tudo por ela rouba a experiência do «eu consegui», e as habilidades vão encolhendo. Mas abandonar também não é. Observar, e apoiar de leve só no ponto exato do tropeço. Demorar não é fracassar."
    },
    {
      q: "Início da relação. Qual convivência cria confiança?",
      options: ["Fazer muitas perguntas para reunir informação", "Sentar ao lado e acumular tempo fazendo a mesma atividade juntos", "Manter distância e só observar"],
      answer: 1,
      explain: "Perguntas de frente podem soar como interrogatório. O «tempo em paralelo» — lado a lado, olhando a mesma coisa — constrói o «essa pessoa é segura» mesmo sem palavras. A confiança vem antes da coleta de dados."
    },
    {
      q: "As viagens de trem tendem a ficar agitadas. Prevenção eficaz?",
      options: ["Fazer prometer que desce na próxima se fizer barulho", "Não falar nada durante o trajeto", "Antes de embarcar, dizer «aonde, para quê, quanto tempo» e levar algo tranquilizador"],
      answer: 2,
      explain: "Trajeto sem perspectiva é uma lata de ansiedade. Antes de embarcar, mostre destino e duração de forma visível e leve algo que acalme (fones, brinquedo, cartões). A prevenção começa antes de embarcar. Ameaçar castigo só soma ansiedade."
    },
    {
      q: "Ao sair, o que convém ter pronto para a compreensão do entorno?",
      options: ["Um símbolo de ajuda ou um cartão breve de explicação", "Cópia do laudo médico detalhado", "Nada em particular"],
      answer: 0,
      explain: "Na hora não há tempo para explicações longas. Um símbolo de ajuda, ou um cartão curto tipo «desculpe se assustamos — é parte da deficiência dele», vira ponte num instante. Não é preciso carregar documentos privados detalhados como laudos."
    },
    {
      q: "Os registros foram se acumulando. O próximo passo?",
      options: ["Apagar os antigos", "Criar tempo de equipe para rever e achar padrões", "Guardar num caderno pessoal"],
      answer: 1,
      explain: "Escrever registros é só metade. Só quando a equipe revê e encontra os padrões de gatilho e as respostas que funcionaram é que os registros viram apoio. Mesmo breve — mantenha uma revisão periódica."
    },
    {
      q: "No meio do atendimento, sobe um «de novo não». Isso é…?",
      options: ["Sinal de fadiga. Considerar pausa ou revezamento", "Sentimento natural: seguir como está", "Esmagar na força de vontade"],
      answer: 0,
      explain: "O «de novo não» não significa que você é ruim nisso — significa que está cansado. A fadiga embota o julgamento, escorre para a voz e o rosto, e chega à pessoa. Considerar pausa ou troca não é fraqueza: é técnica que protege a pessoa."
    },
    {
      q: "Um método que funcionava até o ano passado está perdendo efeito. Como pensar?",
      options: ["Insistir no mesmo método, mais forte, até funcionar", "A pessoa pode ter mudado (crescimento, novas circunstâncias). Atualizar o olhar", "Concluir que o quadro piorou"],
      answer: 1,
      explain: "Pessoas mudam. O crescimento faz um método deixar de servir; ambiente e saúde também mudam. Método sem efeito não é piora. Reveja os registros e atualize o olhar e o método para quem ela é hoje. O apoio é coisa viva."
    },
    {
      q: "Preocupa como ele gasta a mesada. Um bom envolvimento?",
      options: ["A instituição administra tudo", "Deixar gastar livre e não se envolver", "Pensar juntos (a vontade dele no centro; falhas pequenas viram aprendizado)"],
      answer: 2,
      explain: "Dinheiro é direito dele. Administrar tudo é seguro, mas rouba o poder de decidir. Soltar de vez arrisca exploração. O eixo é «pensar juntos» — acompanhar as falhas pequenas como aprendizado e ser quebra-mar só nos riscos grandes (exploração, contratos caros)."
    },
    {
      q: "Sobre conviver com alguém que não fala, o que é correto?",
      options: ["Compreender e expressar são capacidades distintas. Ler também comportamento, expressão e olhar", "Não fala = não entende, então dá para pular explicações", "Falando alto e devagar, chega"],
      answer: 0,
      explain: "Não falar e não entender são coisas diferentes. Muita gente entende muito bem o que você diz. Não pule explicações na frente dela nem trate como criança — receba as «respostas» também pela expressão, pelo olhar e pela postura."
    },
    {
      q: "Um colega diz que o abafador de ouvido é «mimo». Como responder?",
      options: ["Pode ser, então tirar", "Explicar que é «ferramenta, como óculos» — adaptação razoável para a sensibilidade sensorial — e compartilhar com a equipe", "Deixar passar"],
      answer: 1,
      explain: "Ninguém chama de «mimo» corrigir a visão com óculos. Compensar a sensibilidade auditiva com abafador é exatamente a mesma coisa. Quando a equipe compartilha o sentido da ferramenta, a pessoa pode usá-la de cabeça erguida."
    },
    {
      q: "Insiste no mesmo assento e na mesma rotina toda vez. A postura básica?",
      options: ["Lugar fixo e rotina são alicerce de segurança. Não mudar sem necessidade", "Trocar de assento toda vez para não enjoar", "Quebrar de propósito para corrigir a insistência"],
      answer: 0,
      explain: "«Como sempre» é um mundo previsível — a própria segurança. Quebrar sem necessidade é arrancar o alicerce. Só quando a mudança é realmente necessária: com aviso prévio, um pouco de cada vez."
    },
    {
      q: "Primeira conversa com uma pessoa nova. O que priorizar perguntar?",
      options: ["A lista detalhada de comportamentos-problema", "Do que gosta, o que a acalma, no que é boa", "Toda a história de vida"],
      answer: 1,
      explain: "A informação dos problemas se reúne depois. O que se quer primeiro é «gostos, calmarias, talentos» — a entrada do apoio e a saída do pânico costumam estar aí. O apoio que começa pelas forças também constrói a relação mais rápido."
    },
    {
      q: "Voltaram sãos e salvos do passeio. A revisão que leva ao próximo?",
      options: ["Deu certo, então sem revisão", "Listar só os sustos", "Registrar também o que deu certo e levar ao próximo plano"],
      answer: 2,
      explain: "Um passeio que deu certo é uma mina de ouro. Guardar «o que foi bom» (horário, rota, pertences, palavras usadas) vira a base do próximo plano. Registros de sustos e de acertos: juntos formam o «manual de instruções»."
    },
    {
      q: "Como é uma pessoa «boa de apoio»?",
      options: ["A que consegue parar o comportamento na força", "A que sabe aumentar o tempo em que a pessoa fica tranquila", "A que se antecipa a tudo e faz tudo por ela"],
      answer: 1,
      explain: "Mais que habilidade vistosa de crise: construir um cotidiano que nem chega a ferver. Quanto mais tempo a pessoa passa em segurança, menos momentos difíceis existem ao todo. Parece simples — e é a perícia mais verdadeira."
    }
  ],

  phraseGroups: [
    { id: "feel",  label: "Sentimentos", emoji: "💙", items: ["Feliz", "Triste", "Com medo", "Não gosto", "Estou bem", "Estou com raiva"] },
    { id: "body",  label: "Corpo", emoji: "🩹", items: ["Dói", "Estou cansado(a)", "Banheiro", "Estou com fome", "Estou com sede", "Com sono", "Estou passando mal"] },
    { id: "ask",   label: "Pedidos", emoji: "🙏", items: ["Me ajude, por favor", "Quero uma pausa", "Fale devagar, por favor", "Repita, por favor", "Escreva, por favor", "Silêncio, por favor"] },
    { id: "reply", label: "Respostas", emoji: "💬", items: ["Sim", "Não", "Não entendo", "Espere um momento", "Obrigado(a)", "Desculpe"] }
  ],

  logOptions: {
    triggers: ["Som / luz", "Pessoas perto / multidão", "Mudança de plano", "Um pedido não atendido", "Dor / mal-estar", "Espera", "Não sei", "Outro"],
    durations: ["Menos de 5 min", "Menos de 15 min", "Menos de 30 min", "Mais"],
    responses: ["Reduzi estímulos", "Mudei de lugar", "Vigiei", "Mostrei o que vinha", "Usei escrita / apoios visuais", "Acionei médico / emergência", "Outro"],
    injuries: ["Nenhuma", "Lesão da pessoa", "Lesão de outros", "Dano material"]
  }
};
