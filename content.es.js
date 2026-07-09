/*
 * Apoyo para profesionales del cuidado (edición discapacidad) - Contenido (Español)
 * Principios: son tendencias y pistas, nunca etiquetas. La persona que tienes delante es lo primero.
 *  No toma decisiones médicas. Ante la duda, guía al número de emergencias local / al médico.
 *  La estructura (id / emoji / índices de respuesta / referencias de escena) es idéntica a content.ja.js.
 */
window.SHIEN_CONTENT = window.SHIEN_CONTENT || {};
window.SHIEN_CONTENT.es = {
  version: 1,

  basis: [
    "NICE NG10 (Reino Unido) «Violencia y agresión: manejo a corto plazo» (2015) — primero la desescalada, sin sujeción. La contención física es el último recurso.",
    "NICE NG11 (Reino Unido) «Conducta desafiante y discapacidad intelectual» (2015) — Apoyo Conductual Positivo (PBS): entender el motivo de la conducta y adaptar el entorno. Incluye apoyo a familias y cuidadores.",
    "Apoyo Conductual Positivo (PBS) / enfoque de baja activación (Low Arousal) — reducir demandas y estímulos; no confrontar.",
    "Apoyo estructurado para el autismo (TEACCH) / Entrenamiento en Comunicación Funcional (FCT).",
    "Primeros auxilios en crisis epilépticas: «Stay·Safe·Side» de la Epilepsy Foundation y los CDC (EE. UU.) y la regla de los 5 minutos.",
    "Convención de la ONU sobre los Derechos de las Personas con Discapacidad (CRPD) / QualityRights de la OMS — proteger la dignidad y la autonomía; evitar la coerción y la sujeción siempre que sea posible."
  ],

  scenes: [
    {
      id: "medical", medical: true,
      title: "Crisis, lesión o alteración de la consciencia", emoji: "🚑",
      lead: "Esta app no toma decisiones médicas. Ante la duda, llama a emergencias: esa es la decisión correcta.",
      do: [
        "Si puede caer, sostenla y recuéstala con cuidado; aparta objetos peligrosos (quita las gafas, afloja el cuello)",
        "Cuando cesen las convulsiones, ponla de lado (posición de recuperación)",
        "Anota la hora en que empezó la crisis (cronométrala)"
      ],
      call119: [
        "Una primera crisis",
        "Convulsiones que duran más de 5 minutos",
        "Crisis que se repiten, o no recupera la consciencia",
        "Lesión, o dificultad para respirar",
        "Una crisis en el agua o en la bañera"
      ],
      note: "Si la persona tiene indicaciones concretas de su médico (medicación de rescate, supositorios, etc.), síguelas.",
      dont: [
        "Meterle algo en la boca («para que no se muerda la lengua» es un mito: provoca asfixia y lesiones)",
        "Sujetarla para intentar detener la crisis",
        "Darle comida o bebida justo después de una crisis"
      ],
      after: [
        "Anota la duración y los detalles (cuántos minutos, qué movimientos, la consciencia después)",
        "Informa a su médico y a la familia",
        "Si tiene sueño, deja que descanse en un lugar seguro"
      ],
      outdoor: [
        "Aléjala del borde del andén, la calzada y las escaleras (muévela solo si hay peligro donde está)",
        "En una estación, pide ayuda al personal; en la calle, a los transeúntes (di con claridad: «Llamen a una ambulancia, por favor»)",
        "Da a emergencias el nombre del lugar, el número de salida y un punto de referencia"
      ],
      why: "Lo más importante en una crisis no es «detenerla», sino mantenerla a salvo, cronometrarla y transmitirlo. Que tú estés en calma es la mayor ayuda.",
      src: "Asociación Japonesa de Epilepsia / Epilepsy Foundation y CDC (EE. UU.) «Stay·Safe·Side»"
    },
    {
      id: "panic",
      title: "Crisis de pánico / desbordamiento", emoji: "🌀",
      do: [
        "Pon a salvo a la persona y a quienes la rodean (aparta objetos peligrosos)",
        "Reduce los estímulos (deja de hablar, aparta a la gente, baja el sonido y la luz)",
        "Espera. Quédate en silencio a su lado hasta que se calme"
      ],
      dont: [
        "Gritar o regañar para pararla (aumenta la angustia)",
        "Sujetarla (lesiones, pérdida de confianza; a un paso del maltrato)",
        "Bombardearla con preguntas o razones (no puede procesarlo y empeora)",
        "Rodearla o atraer la atención"
      ],
      after: [
        "Ofrécele agua y descanso",
        "Anota qué lo desencadenó (¿ruido? ¿personas? ¿un cambio de plan? ¿dolor?)",
        "Compártelo con el equipo"
      ],
      outdoor: [
        "Muévete fuera del flujo de gente: junto a una pared, tras una columna, un banco",
        "Si no puede moverse, no la fuerces; hazte tú de «pared», bloqueando miradas y personas",
        "Di algo breve a quienes rodean («Está bien, se calmará en un momento»): evita la intromisión bienintencionada o una llamada a emergencias"
      ],
      why: "El pánico no es «un capricho»: es una respuesta a estímulos, ansiedad o una pérdida de lo que viene después que supera lo que puede procesar. Quien más sufre es la persona. Un entorno tranquilo y tiempo son el mejor apoyo.",
      src: "NICE NG11 (Apoyo Conductual Positivo, Reino Unido) y marcos afines"
    },
    {
      id: "selfharm",
      title: "Autolesión", emoji: "🤕",
      do: [
        "Valora si peligra la vida (ante golpes en la cabeza o mordiscos fuertes, amortigua físicamente con un cojín)",
        "Reduce los estímulos y lleva la situación a un lugar más tranquilo",
        "Vigila en silencio y cura la lesión una vez calmada"
      ],
      dont: [
        "Gritar «¡Para!» (la atención puede reforzar la conducta)",
        "Seguir sujetándole el brazo por la fuerza",
        "Castigar o reprender"
      ],
      after: [
        "Comprueba y cura las lesiones",
        "Anota qué ocurría justo antes",
        "Si se repite, plantea revisar el plan de apoyo (médico, coordinación de apoyo)"
      ],
      outdoor: [
        "Aléjala de superficies duras: asfalto, columnas, barandillas (un bolso o una chaqueta en medio ayudan)",
        "Si se forma corro, di algo breve («Está bien»): que la miren ya es un estímulo"
      ],
      why: "La autolesión suele tener una «función»: expresar malestar, pedir algo, comprobar una sensación, buscar atención. Lo esencial es hacer crecer una alternativa que cubra esa misma necesidad (idea del análisis conductual aplicado).",
      src: "NICE NG11 (PBS, Reino Unido) y marcos afines"
    },
    {
      id: "aggression",
      title: "Agresión a otros / romper cosas", emoji: "💥",
      do: [
        "Primero toma distancia (al menos un brazo). Aparta a los demás y asegura el entorno",
        "Pide refuerzos de inmediato e informa a tu responsable (puedes hacerlo mientras atiendes; no cargues sola)",
        "Voz baja, palabras cortas; o no hables y reduce los estímulos"
      ],
      dont: [
        "Forcejear de frente o inmovilizar (riesgo de lesión y de maltrato)",
        "Gritar, reprender o sostenerle la mirada",
        "Interrogar con «¡¿Por qué haces esto?!»"
      ],
      after: [
        "Comprueba lesiones o daños; informa según las normas del centro",
        "Anota el desencadenante y cómo se desarrolló",
        "Comparte con el equipo las señales de aviso (cara, voz, movimientos)"
      ],
      outdoor: [
        "Lo primero es alejar a los transeúntes («Disculpen, apártense, por favor», con claridad)",
        "En una estación, pide ayuda al personal o a seguridad (fuera, no lo atiendas sola)"
      ],
      why: "La mayoría de las agresiones son la «explosión» de una petición no atendida, un malestar o un miedo. Más que dirigirse a las personas, acaban recayendo en ellas. Conocer las señales de aviso es el primer paso de la prevención.",
      src: "NICE NG11 (PBS) / NG10 (manejo a corto plazo de la agresión: primero la desescalada)"
    },
    {
      id: "runaway",
      title: "Fugarse / desaparecer", emoji: "🏃",
      do: [
        "No la persigas justo por detrás (se convierte en carrera y puede acelerarla). Mantenla a la vista y ve a su lado; bloquea primero las direcciones peligrosas (calzada, agua, vías)",
        "Pide refuerzos de inmediato e informa a tu responsable (mientras atiendes está bien; no cargues sola)",
        "Si la pierdes de vista, no dudes: avisa según las normas del centro (policía) y empieza a buscar"
      ],
      dont: [
        "Seguir gritando su nombre (puede reforzar la huida)",
        "Cargar sola / retrasar el aviso",
        "Reñir al volver (aprende «volver = pasa algo malo»)"
      ],
      after: [
        "Al encontrarla, reúnete en silencio y comprueba si hay lesiones",
        "Anota la ruta y la hora (adónde se dirigió es una pista de apoyo)",
        "También las familias: no cargar solas; pedir ayuda o indicaciones a las personas implicadas (coordinación de apoyo, ayuda a domicilio) o, según el caso, al médico, es también una opción",
        "Revisa las salidas y la supervisión"
      ],
      outdoor: [
        "En una estación, si la pierdes de vista, acude enseguida al personal (el andén, los tornos y las cámaras los comprueban ellos más rápido)",
        "Da su ropa, complexión y adónde suele ir, y pide ayuda (no dudes: los minutos pueden ser vida o muerte)"
      ],
      why: "La fuga suele tener un «estímulo del que huir» o un «destino al que ir». Más que culpar, encontrar el motivo lleva a la siguiente prevención.",
      src: "Guías de seguridad ante fugas en autismo (p. ej. AWAARE) y PBS"
    },
    {
      id: "freeze",
      title: "Bloqueada, sin poder moverse", emoji: "🧊",
      do: [
        "Espera (fija antes un límite, por ejemplo cinco minutos)",
        "Reduce estímulos y demandas (no la metas prisa, no la toques)",
        "Dale solo un paso siguiente, corto y visible («Cuando terminemos, un té»)"
      ],
      dont: [
        "Tirar de su mano para moverla",
        "Un aluvión de indicaciones («Vamos, deprisa, por aquí»)",
        "Comentar con otros por encima de su cabeza"
      ],
      after: [
        "Anota qué la puso en marcha (¿el tiempo? ¿algo que le mostraste? ¿que cambió la persona?)",
        "Reúne y comparte las situaciones en que tiende a bloquearse"
      ],
      outdoor: [
        "Si está en medio de un paso, guíala con suavidad fuera del flujo (a una pared). Si no puede moverse, hazte de escudo y espera",
        "En vez de meterle prisa, di «Hay tiempo». A quienes rodean, un breve «Solo estamos esperando un momento»"
      ],
      why: "El bloqueo no suele ser rechazo: a menudo cambiar de tarea le lleva tiempo de procesar. De quienes pueden moverse cuando se les da tiempo, aprendemos a ser cuidadores que saben esperar.",
      src: "Apoyo estructurado para el autismo (TEACCH)"
    },
    {
      id: "shouting",
      title: "Gritos / vocalizaciones", emoji: "📢",
      do: [
        "Sospecha primero del entorno (¿calor? ¿ruido? ¿hambre? ¿dolor?)",
        "Guíala a un lugar tranquilo o baja los estímulos alrededor",
        "Justo cuando está tranquila es cuando más hay que relacionarse"
      ],
      dont: [
        "Responder a lo alto con lo alto",
        "Repetir «¡Silencio!»",
        "Atender la petición cada vez para callarla (aprende «hacer ruido funciona»)"
      ],
      after: [
        "Anota la hora, el lugar y lo ocurrido justo antes (si es una hora fija, sospecha de factores de salud o del entorno)",
        "Revisa si hay antecedentes de dolor (dientes, oídos, barriga)",
        "Registra lo llamativo y compártelo con el equipo y el responsable"
      ],
      outdoor: [
        "Muévete a un sitio tranquilo (un extremo del andén, fuera de los tornos, fuera de la tienda)",
        "No discutas con quien se queje; un breve «Disculpe, es parte de su condición». Mostrar una tarjeta de ayuda también sirve"
      ],
      why: "La voz es el recurso más fácil de usar. A medida que crece un modo de comunicar (tarjetas, señalar, dispositivos), las vocalizaciones suelen disminuir.",
      src: "Entrenamiento en Comunicación Funcional (FCT) y enfoques afines"
    },
    {
      id: "fixation",
      title: "Atascada en una fijación", emoji: "🔁",
      do: [
        "Si es seguro, síguele primero la corriente (una fijación es su modo de sentirse a salvo)",
        "Muestra el final de forma visible (un temporizador, «tres veces más»)",
        "Para un cambio realmente necesario, avisa con antelación y da dos opciones («¿A o B?»)"
      ],
      dont: [
        "Cortarla por la fuerza",
        "Quitársela con engaños (pierdes su confianza y la próxima vez es más fuerte)",
        "Hacer una promesa falsa para salir del paso"
      ],
      after: [
        "Anota el objeto y las condiciones de la fijación (cuándo, dónde, con qué)",
        "Plantea un sistema de aviso previo (pictogramas, una agenda)",
        "Registra las dificultades y compártelas con el equipo y el responsable"
      ],
      outdoor: [
        "Ante una fijación con un tren, ruta u orden concretos, dejar tiempo de sobra es la mejor prevención",
        "Cuando haga falta un cambio, no lo fuerces ahí; usa un plan («Hoy la ruta A; la próxima, la B»)"
      ],
      why: "Una fijación es su forma de hacer predecible un mundo que le angustia. En vez de quitársela, ampliamos su base de seguridad y añadimos opciones poco a poco.",
      src: "NICE NG11 (PBS) / apoyo estructurado (TEACCH)"
    },
    {
      id: "hallucination",
      title: "Alucinación / relato tipo delirio", emoji: "💭",
      do: [
        "Ni lo niegues ni lo confirmes («Así que eso oyes. Da miedo» — responde al sentimiento)",
        "Deriva con suavidad hacia un tema o actividad real que tranquilice",
        "Si va en aumento, compártelo con el médico y la familia y valora una consulta"
      ],
      dont: [
        "Discutir que «ahí no hay nada»",
        "Seguirle la corriente y agrandar la historia",
        "Reírte o quitarle importancia"
      ],
      after: [
        "Anota el contenido, la hora y la frecuencia (¿tras un cambio de medicación? ¿duerme?)",
        "Contenidos de tipo orden («una voz me dice que me muera»): a atención médica sin demora"
      ],
      why: "Para la persona, de verdad lo oye y lo ve. El asunto no es verdadero o falso, sino la ansiedad que trae. La tranquilidad es lo primero.",
      src: "Guías generales sobre psicosis / esquizofrenia (para familias) y QualityRights de la OMS"
    },
    {
      id: "hyperventilation",
      title: "Hiperventilación", emoji: "😮‍💨",
      do: [
        "A un lugar tranquilo. Siéntala y quédate a su lado",
        "«Tranquila. Vamos a soltar el aire despacio» — acompaña la exhalación",
        "Quédate con ella hasta que se calme"
      ],
      dont: [
        "Ponerle una bolsa de papel en la boca (el método de la bolsa arriesga hipoxia y ya no se recomienda)",
        "Decirle con firmeza «¡Cálmate!»",
        "Dejarla allí sola"
      ],
      after: [
        "Si es la primera vez, tiene una enfermedad de base o no se recupera: atención médica",
        "Anota el desencadenante (ansiedad, cansancio, aglomeración)",
        "Si se repite, regístralo y compártelo con el equipo y el responsable"
      ],
      outdoor: [
        "Siéntala en un banco o escalón, lejos del gentío",
        "A quienes rodean, un breve «Está bien, con un descanso se calmará»"
      ],
      why: "La hiperventilación en sí rara vez es mortal, pero la persona está dentro del miedo a «me voy a morir». Una voz tranquila y tu compañía son la mejor medicina.",
      src: "Divulgación médica sobre el síndrome de hiperventilación (no se recomienda la bolsa de papel)"
    },
    {
      id: "medication",
      title: "Rechazo de la medicación", emoji: "💊",
      do: [
        "Retírate una vez (deja pasar un rato y vuelve a intentarlo)",
        "Prueba otra forma, otro momento u otra persona que ayude",
        "Si continúa, no decidas sola: consulta al médico o al farmacéutico (cambio de forma, apoyo a la toma)"
      ],
      dont: [
        "Sujetarla para hacerla tragar",
        "Mezclarla en la comida sin decírselo (genera desconfianza; solo con el acuerdo del médico y la familia)",
        "Regatear («Sin la medicina, no hay ___»)"
      ],
      after: [
        "Anota cómo rechazó (¿el sabor? ¿el tamaño? ¿su ánimo? — puede ser señal de efectos secundarios)",
        "Coméntalo siempre en la próxima consulta"
      ],
      why: "El rechazo tiene un motivo (cuesta tragar, los efectos son duros, no entiende para qué). Forzar pierde más que una sola toma. Busca la causa junto al equipo médico.",
      src: "Guías generales de apoyo a la medicación (colegios de farmacéuticos, etc.)"
    },
    {
      id: "anxiety",
      title: "Mucha ansiedad / «quiero ir a casa»", emoji: "🏠",
      do: [
        "Acoge el sentimiento tal cual («Quieres irte a casa»)",
        "Muéstrale lo que viene, en concreto («Después de la merienda, el autobús»)",
        "Tiende un puente hacia un objeto de calma o una actividad que le guste"
      ],
      dont: [
        "Darle largas con «Un poco más»",
        "Convencerla con razones",
        "Darle una hora falsa (pierdes su confianza)"
      ],
      after: [
        "Anota las horas y los días en que sube la ansiedad",
        "Comparte pequeñas formas de añadir calma con objetos o el entorno"
      ],
      outdoor: [
        "Da lo que viene en unidades visibles («Dos paradas más», «al doblar esta esquina»)",
        "Un día de mucha ansiedad, el valor de acortar la salida también es apoyo"
      ],
      why: "«Quiero ir a casa» suele ser una palabra para pedir seguridad, más que un lugar. Vamos añadiendo, uno a uno, los apoyos que le hacen sentir «aquí es seguro».",
      src: "Guías generales de apoyo a personas con alta ansiedad"
    }
  ],

  traits: [
    {
      id: "asd", name: "Trastorno del espectro autista (TEA)", emoji: "🧩",
      short: "Estilo social, fijaciones y sensorialidad particulares",
      what: [
        "Un perfil donde un estilo social/comunicativo particular se superpone con intereses y fijaciones intensos y una sensibilidad (o hiposensibilidad) sensorial. Algunas personas tienen discapacidad intelectual; otras no.",
        "Cómo se manifiesta varía mucho de una persona a otra («espectro», un continuo). No des por sentado; mira a esta persona.",
        "Para ella, el mundo es difícil de prever y muy estimulante: reducir esa ansiedad es el corazón del apoyo."
      ],
      prepare: [
        "Ante un lugar nuevo o una salida, «prepáralo» con fotos o una visita previa. Comparte antes el recorrido, de forma visible.",
        "Cuando un cambio sea inevitable, avisa pronto y deja margen para elegir (un cambio repentino es el mayor estresor).",
        "No la metas prisa ni la asustes. Un plan que pueda recorrer con comprensión crea la calma del día."
      ],
      comm: [
        "Corto, concreto, de uno en uno («cuando el reloj marque las 3», no «luego»)",
        "En forma visible más que con palabras (dibujos, fotos, texto, objetos reales)",
        "Los rodeos, las bromas y la ironía no llegan; usa frases claras y afirmativas («Caminamos», no «No corras»)",
        "Responder puede llevarle tiempo. No la metas prisa; espera"
      ],
      env: [
        "Muestra la agenda con antelación (estructúrala)",
        "Reduce los estímulos (sonido, luz, aglomeración). Ten a mano orejeras o un lugar tranquilo",
        "Acompaña siempre los cambios con un aviso previo. El cambio repentino es el mayor estrés"
      ],
      scenes: ["panic", "runaway", "fixation", "shouting", "selfharm", "freeze"],
      ng: [
        "Forzar el contacto visual",
        "Cortar una fijación por la fuerza",
        "Reprender en abstracto («Pórtate bien», «Lee el ambiente»)"
      ],
      src: "NICE NG11 (PBS) / apoyo estructurado para el autismo (TEACCH) / DSM-5"
    },
    {
      id: "adhd", name: "TDAH (déficit de atención / hiperactividad)", emoji: "⚡",
      short: "Inatención, hiperactividad e impulsividad marcadas",
      what: [
        "Un perfil donde la inatención (se distrae, olvida) y la hiperactividad/impulsividad (le cuesta estarse quieta, esperar) son fuertes para su edad.",
        "No es pereza ni carácter: una diferencia en cómo funcionan las «funciones ejecutivas» del cerebro.",
        "Es fácil que pierda confianza de tanto que la regañan. Fijarse en lo que logra funciona."
      ],
      comm: [
        "Una indicación a la vez, corta. Apóyate en notas y recordatorios",
        "Elogia en el mismo momento en que lo logra, en concreto (llega peor tras una pausa)",
        "No la regañes de frente. En vez de culpar la conducta, buscad juntas el cómo"
      ],
      env: [
        "Reduce los estímulos que distraen (sitio, objetos, sonido)",
        "Hazlo visible (listas de tareas, temporizadores, hojas de control)",
        "Prevé ratos frecuentes para moverse y descansar"
      ],
      scenes: ["shouting", "runaway", "anxiety"],
      ng: [
        "Regañar una y otra vez con «¿Cuántas veces te lo tengo que decir?»",
        "Explicaciones largas / varias indicaciones a la vez",
        "Tomar la conducta impulsiva como un defecto de carácter"
      ],
      src: "NICE (guía de TDAH, Reino Unido) / DSM-5"
    },
    {
      id: "id", name: "Discapacidad intelectual", emoji: "📘",
      short: "La comprensión y el juicio se desarrollan despacio",
      what: [
        "Un perfil donde la comprensión, el juicio, leer/escribir/calcular y el manejo del dinero y el tiempo se desarrollan despacio, con momentos cotidianos «difíciles de captar».",
        "El grado y las fortalezas/debilidades varían de una persona a otra. No un trato infantil, sino un respeto acorde a su edad.",
        "A menudo no puede decir «no lo entiendo» y se queda atascada en silencio. Cambia el modo de transmitir y llega."
      ],
      prepare: [
        "Comparte lo que vais a hacer «mostrándoselo» de antemano con fotos u objetos reales. Evita hacerlo de repente el mismo día.",
        "Divide los pasos en pequeño y prepáralo para que pueda tener éxito, antes de empezar.",
        "Un plan con margen, que pueda recorrer a su propio ritmo."
      ],
      comm: [
        "Despacio, corto, con palabras sencillas. Evita palabras difíciles o demasiado a la vez",
        "Lo concreto antes que lo abstracto (objetos reales, dibujos, demostración). Muéstraselo",
        "Más que «¿lo has entendido?», que lo haga y comprueba",
        "Trátala con la cortesía propia de su edad (sin lenguaje infantil)"
      ],
      env: [
        "Pon los pasos en forma visible (instrucciones con fotos, hojas de control)",
        "Estrecha las opciones para que sea fácil elegir",
        "Divide en pasos pequeños y alcanzables"
      ],
      scenes: ["runaway", "fixation", "anxiety", "freeze"],
      ng: [
        "Trato infantil o tono condescendiente",
        "Meterle prisa / dar muchas indicaciones a la vez",
        "Reprochar «te lo he dicho hace un momento»"
      ],
      src: "NICE NG11 (PBS) / DSM-5 (discapacidad intelectual del desarrollo)"
    },
    {
      id: "ld", name: "Dificultad de aprendizaje (trastorno específico)", emoji: "✏️",
      short: "Aprendizajes concretos (leer, escribir, calcular) muy difíciles",
      what: [
        "Un perfil donde, sin un retraso general marcado, «aprendizajes concretos» —leer, escribir o calcular— resultan muy difíciles.",
        "No es falta de esfuerzo ni un problema de inteligencia: un desequilibrio de fortalezas y debilidades en cómo el cerebro procesa la información.",
        "No culpes el punto débil; con una vía alternativa muestra sus fortalezas."
      ],
      comm: [
        "Le cuesta leer → lectura en voz alta, guía fonética, audio. Le cuesta escribir → teclear, fotos, grabar",
        "Transmite tanto de palabra como por escrito",
        "Cuida de no hacerle hacer lo difícil delante de otros"
      ],
      env: [
        "Usa las TIC (tableta, dictado por voz, calculadora)",
        "Letra grande, mucho interlineado, formato sencillo",
        "Formas de participar por la vía en que es buena"
      ],
      scenes: ["anxiety"],
      ng: [
        "Dar por hecho que «está holgazaneando»",
        "Forzarla a leer en voz alta o copiar de la pizarra",
        "Compararla con otros"
      ],
      src: "DSM-5 (trastorno específico del aprendizaje) / principios de ajustes razonables (CRPD)"
    },
    {
      id: "scz", name: "Esquizofrenia", emoji: "🌫️",
      short: "Olas de alucinaciones, delirios y bajada de motivación",
      what: [
        "Una enfermedad mental en la que pueden darse alucinaciones (p. ej. oír voces que no están), delirios, un pensamiento difícil de hilar y bajada de motivación.",
        "Va por olas, también con épocas buenas. Con el tratamiento y el apoyo adecuados, se vive con calma.",
        "«Para la persona es real»: no discutas; acompaña la ansiedad. Esa es la base."
      ],
      comm: [
        "Ante alucinaciones/delirios, ni negar ni confirmar: responde al sentimiento («Da miedo»)",
        "Corto, sereno, con pocos estímulos",
        "Atiende a si sigue con la medicación y si duerme"
      ],
      env: [
        "Un entorno tranquilo y seguro. Evita cambios bruscos y estímulos fuertes",
        "Detecta pronto los cambios de estado (no duerme, aumentan las quejas de persecución)",
        "Coordínate con la persona, la familia y su médico"
      ],
      scenes: ["hallucination", "anxiety", "panic"],
      ng: [
        "Intentar rebatir un delirio con lógica",
        "Seguirle la corriente y agrandar la historia",
        "Confundirlo con pereza y forzar actividades"
      ],
      src: "NICE (guía de psicosis / esquizofrenia, Reino Unido) / QualityRights de la OMS"
    },
    {
      id: "mood", name: "Depresión / trastorno bipolar (del estado de ánimo)", emoji: "🌗",
      short: "Bajones intensos / oscilaciones del ánimo",
      what: [
        "Está la «depresión» —un bajón intenso y duradero con pérdida de ganas e interés— y el «bipolar», que oscila entre depresión y euforia (manía).",
        "No se cura con voluntad. «Ánimo» puede acorralar a la persona.",
        "Entender las olas, no forzar y acompañar: eso es lo que sostiene."
      ],
      comm: [
        "No digas «esfuérzate» ni «es cuestión de actitud». Primero acoge el dolor",
        "No le exijas decisiones ni tareas complejas",
        "En estado maníaco, frenad juntas las grandes decisiones y los gastos"
      ],
      env: [
        "Un entorno que permita descansar, a su ritmo. No la culpes por un día que no puede",
        "Ayúdala a ordenar el ritmo de vida y el sueño",
        "No pases por alto un «quiero morir»: a atención médica y a la familia de inmediato"
      ],
      scenes: ["anxiety", "selfharm"],
      ng: [
        "Animar de más o reprender",
        "Comparar con «todo el mundo lo pasa mal»",
        "Dejar pasar en silencio la ideación suicida"
      ],
      src: "NICE (guías de depresión / trastorno bipolar, Reino Unido) / prevención del suicidio"
    },
    {
      id: "anx", name: "Trastornos de ansiedad / TOC", emoji: "🫧",
      short: "Ansiedad excesiva, rituales de comprobación",
      what: [
        "Un perfil donde una ansiedad y un miedo excesivos (crisis de pánico, comprobaciones que no puede parar) le trastocan la vida.",
        "No es «preocuparse de más»: el freno de la ansiedad del cerebro funciona peor.",
        "Al acumular tranquilidad, poco a poco se alivia."
      ],
      comm: [
        "No niegues la ansiedad («Estoy contigo», no «No pasa nada»)",
        "Da lo que viene en concreto («Termina en diez minutos»)",
        "No cortes de frente el ritual de comprobación"
      ],
      env: [
        "Un entorno predecible y seguro",
        "Reduce estímulos y presión",
        "Un lugar tranquilo donde pueda serenar la respiración"
      ],
      scenes: ["anxiety", "hyperventilation", "panic", "fixation"],
      ng: [
        "Zanjarlo con «te preocupas demasiado»",
        "Forzarla a enfrentar la situación temida",
        "Prohibir por la fuerza la comprobación"
      ],
      src: "NICE (guías de ansiedad / TOC, Reino Unido)"
    },
    {
      id: "ptsd", name: "TEPT / dificultades del apego", emoji: "🕯️",
      short: "Experiencias dolorosas del pasado que siguen actuando hoy",
      what: [
        "Un estado en que experiencias dolorosas pasadas (maltrato, catástrofe, accidente) continúan como recuerdos intrusivos, hipervigilancia y evitación. Algunas personas cargan heridas del apego.",
        "No es «exagerar» ni «cosa del pasado»: es una reacción que sigue ocurriendo hoy.",
        "La seguridad, la calma y acumular confianza —«esta persona es de fiar»— son la base de la recuperación."
      ],
      comm: [
        "No la toques de repente ni te acerques por detrás (no la asustes)",
        "Deja margen para elegir y para decir no (la sensación de control da calma)",
        "Cumple lo prometido. Ve apilando pequeñas confianzas"
      ],
      env: [
        "Un entorno seguro y predecible. Evita voces altas y acercamientos bruscos",
        "Ten presente que ciertos sonidos, lugares o situaciones pueden ser detonantes",
        "En un recuerdo intrusivo, di con calma «Ahora estás a salvo»"
      ],
      scenes: ["panic", "anxiety", "selfharm"],
      ng: [
        "Forzarla a contar la experiencia",
        "Asustarla / tener un contacto físico repentino",
        "Tratar la reacción como «un capricho»"
      ],
      src: "NICE (guía de TEPT, Reino Unido) / atención informada por el trauma"
    },
    {
      id: "epi", name: "Epilepsia", emoji: "🧠",
      short: "Crisis por una alteración eléctrica breve del cerebro",
      what: [
        "Un cuadro en que una alteración eléctrica breve del cerebro provoca «crisis». Van desde convulsiones hasta un instante de ausencia.",
        "Fuera de las crisis, muchas personas viven con normalidad. No son «peligrosas».",
        "Importa conocer la atención serena en la crisis y la «regla de los 5 minutos»."
      ],
      comm: [
        "La crisis no es voluntad de la persona. Mantente en calma y vigílala",
        "Después puede quedar aturdida. No la metas prisa; deja que descanse",
        "Conoce de antemano su «tipo de crisis» y las indicaciones de su médico"
      ],
      env: [
        "Prevén lesiones (esquinas, agua, alturas, el baño)",
        "Comparte un registro de las crisis (hora, cómo fue)",
        "Apoya la gestión de la medicación con discreción"
      ],
      scenes: ["medical"],
      ng: [
        "Meterle algo en la boca (un error: causa asfixia y lesiones)",
        "Sujetarla",
        "Darle comida o bebida justo después de una crisis"
      ],
      src: "Epilepsy Foundation y CDC (EE. UU.) «Stay·Safe·Side» / Asociación Japonesa de Epilepsia"
    },
    {
      id: "abi", name: "Daño cerebral adquirido (disfunción cerebral superior)", emoji: "🧭",
      short: "Una discapacidad poco visible tras accidente o enfermedad",
      what: [
        "Un estado en que, tras un accidente o enfermedad (traumatismo craneal, ictus, etc.), la memoria, la atención, la planificación y el control emocional quedan afectados de forma poco visible.",
        "Difícil de notar por fuera y fácil de malinterpretar como «ha cambiado». La persona también está desconcertada.",
        "Le queda mucha capacidad. Con apoyos para suplir lo débil, la vida se abre."
      ],
      comm: [
        "De una en una, corto. Apóyate en notas y recordatorios",
        "Cuando la emoción sube, reduce estímulos y no reprendas",
        "No reproches el «te lo he dicho hace un momento» (es un trastorno de la memoria)"
      ],
      env: [
        "Pon los pasos y la agenda en forma visible (notas, agenda, alarmas)",
        "Un entorno tranquilo y sin distracciones",
        "Estabilízala con la misma rutina, el mismo lugar"
      ],
      scenes: ["shouting", "anxiety", "freeze"],
      ng: [
        "Malinterpretarlo como «pereza» o «capricho»",
        "Dar muchas indicaciones a la vez",
        "Señalar una y otra vez lo que no puede"
      ],
      src: "Guías generales de apoyo al daño cerebral adquirido"
    },
    {
      id: "sbd", name: "Conducta desafiante grave", emoji: "🆘",
      short: "Autolesión, agresión, etc. tan intensas que requieren apoyo especial",
      what: [
        "Un «estado» en que la autolesión, la agresión, las fijaciones intensas y la destrucción se dan con muchísima frecuencia e intensidad, de modo que se necesita un apoyo especialmente intensivo (no es un diagnóstico).",
        "La persona no es «difícil»: está en dificultad. Detrás hay una falta de vías para comunicarse y un desajuste con el entorno.",
        "Con Apoyo Conductual Positivo (PBS) —leer el motivo de la conducta y adaptar el entorno— cambia mucho."
      ],
      prepare: [
        "La verdadera labor del apoyo es «antes de que ocurra». Una salida o un evento empiezan por planificarlo con cuidado, dentro de sus límites.",
        "Para que pueda tener una previsión y entrar con comprensión (comparte antes: dónde, qué, cuánto, y qué pasa al terminar).",
        "Organiza para evitar estímulos difíciles, aglomeraciones y esperas. Decide de antemano dónde puede descansar, cuándo volver y una vía de salida.",
        "No trates de arreglarlo tras el pánico: solo duele a todos. Registra qué fue bien y qué costó, y llévalo al siguiente plan."
      ],
      comm: [
        "Busca la «función» (el motivo) de la conducta (pedir, evitar, atención, sensación)",
        "Haz crecer un modo de comunicar (tarjetas, dispositivos)",
        "Relaciónate con más dedicación justo cuando las cosas van bien"
      ],
      env: [
        "Reduce estímulos, demandas y previsiones rotas (estructura, baja activación)",
        "Registra desencadenante → conducta → resultado y analízalo en equipo",
        "No recurras a la sujeción ni a la reprimenda. Coordínate con profesionales y con lo médico"
      ],
      scenes: ["selfharm", "aggression", "runaway", "panic", "fixation", "shouting"],
      ng: [
        "Someterla por la fuerza / pararlo con reprimendas",
        "Seguir atendiendo la petición para salir del paso",
        "Cargar sola / dentro de un solo servicio"
      ],
      src: "NICE NG11 (PBS) — Apoyo Conductual Positivo"
    }
  ],

  hints: [
    "Las pistas de apoyo son solo tendencias. La persona que tienes delante es siempre el mejor libro de texto.",
    "Siempre hay un motivo tras la conducta. Ver «una persona en dificultad» en vez de «una persona difícil» cambia cómo respondes.",
    "La gente se calma cuando ve lo que viene. Decir primero «qué va a pasar» es la mayor prevención.",
    "Acompaña los cambios con un aviso, no con sorpresas. Un «cambio repentino» suele ser el mayor estresor.",
    "La forma visible gana a las palabras. Dibujos, fotos, texto y objetos reales llegan a veces mucho más que el habla.",
    "«Caminamos» gana a «No corras». La conducta que quieres, dicha en positivo, llega mejor que la negación.",
    "De una en una. Que las indicaciones sean cortas y concretas. «Bien» y «con cuidado» son, de hecho, de lo más difícil de captar.",
    "Elogia en el mismo instante en que lo logra, en concreto. Tras una pausa, el elogio llega peor.",
    "Justo cuando pasa el rato tranquila es cuando más hay que relacionarse. Si solo te relacionas al haber problema, eso se vuelve «la forma de relacionarse».",
    "Sujetar a alguien está a un paso de la lesión, la pérdida de confianza y el maltrato. Empieza por reducir distancia y estímulos.",
    "En pleno pánico, la explicación y la persuasión no llegan. Primero reduce estímulos y espera a que se calme.",
    "La verdadera labor del apoyo es «antes de que ocurra». La preparación y el plan crean la calma del día.",
    "Planifica las salidas con cuidado. Decidir de antemano dónde descansar, cuándo volver y una vía de salida da tranquilidad.",
    "Mejor que una buena respuesta es no hacer lo dañino. Solo con eso, los accidentes bajan mucho.",
    "Un registro puede llevar menos de un minuto. Dejar «desencadenante → conducta → resultado» facilita el siguiente apoyo.",
    "No cargues sola. Comparte lo que te inquieta con el equipo y el responsable. Compartir pronto protege a la persona.",
    "Su «no» y su «no entiendo» son señales importantes. Primero acoge que haya podido decirlo.",
    "Poder elegir da tranquilidad. «¿A o B?» gana a «es la única opción».",
    "Los sentidos difieren en cada persona. Demasiado brillo, demasiado ruido, algo que raspa: para ella puede ser un estímulo doloroso.",
    "Una conducta que parece «un capricho» puede ser su propio motivo o su recurso. No lo des por sentado.",
    "Una fijación es un modo de hacer predecible un mundo que angustia. En vez de quitarla, amplía la tranquilidad.",
    "«Esfuérzate» a veces acorrala a la persona. A quien está hundido, acógele primero el dolor.",
    "Ante alucinaciones y delirios, ni negar ni confirmar. Acompaña el sentimiento con «Da miedo».",
    "Trágate el «te lo he dicho hace un momento». Olvidar puede ser parte de la condición.",
    "No trates a los adultos como niños. Aunque la comprensión sea lenta, ofrece un respeto acorde a su edad.",
    "Esperar también es un gran apoyo. Hay quien puede moverse; solo tarda en cambiar de tarea.",
    "No fuerces el contacto visual. Para algunos, mirar a los ojos es doloroso.",
    "No la asustes. Evita acercarte de golpe por detrás o tocarla sin avisar.",
    "Cumple lo prometido. Pequeños momentos de «se cumplió», apilados, se vuelven confianza.",
    "En una crisis, meter algo en la boca es un error: causa asfixia y lesiones. Mantén la calma y cronométrala.",
    "La bolsa de papel para la hiperventilación ya no vale: arriesga hipoxia. Acompáñala para soltar el aire despacio.",
    "Lo médico es médico; el apoyo es apoyo. Ante una situación médica dudosa, no dudes: el número de emergencias local y las indicaciones del médico.",
    "Al crecer las vías de comunicar, los gritos y la agresión suelen ir menguando. Las tarjetas y los dispositivos también son «palabras».",
    "Sus «gustos» son tu mayor aliado. Una actividad, un objeto o un tema favorito son un atajo a la calma.",
    "Tu calma es, en ese momento, la mayor fuente de tranquilidad.",
    "Cuídate también tú. Si el cuidador cae, el apoyo se detiene. Descansar también es parte del trabajo.",
    "La conducta tiene «señales previas» (inquietud, voz que sube, movimientos que cambian). Las pequeñas respuestas antes de que suba la ola son las que mejor funcionan.",
    "Justo después de calmarse llega un período de recuperación frágil, fácil de reavivar. Primero agua y descanso; retoma actividades y demandas poco a poco.",
    "Antes de tocar para asistir, avisa siempre con una palabra («voy a tocarte el brazo»). El contacto sin aviso siembra miedo y reacciones defensivas.",
    "Mejor que ponerse de frente, colócate en diagonal o al lado. Baja la presión y se puede hablar mirando el mismo paisaje.",
    "El tono de voz llega antes que el contenido. Bajo, lento y con pocas palabras.",
    "Si la conducta aumenta de golpe, sospecha primero del cuerpo (dolor, hambre, sueño, estreñimiento, calor). El malestar que no se puede decir suele salir como conducta.",
    "Las etiquetas, costuras y telas de la ropa también pueden ser sensibilidad sensorial. La comodidad de la ropa es parte del apoyo.",
    "En un lugar nuevo, localiza primero las salidas, los baños y un rincón tranquilo para descansar: tranquiliza a ambos.",
    "Trátala como a una persona adulta. Puede necesitar ayuda, pero quien decide es ella.",
    "No hables de la persona delante de ella como si no estuviera. La dignidad vive en los detalles.",
    "Cuando algo no funciona, revisa el diseño del apoyo, no a la persona. En el momento en que es «culpa suya», el apoyo se detiene.",
    "En los registros, separa lo que viste (hechos) de lo que pensaste (suposiciones): rinde en el siguiente apoyo.",
    "Prueba las novedades de una en una. Si cambias todo a la vez, nunca sabrás qué funcionó.",
    "Relevarse no es una derrota: es técnica. Cuando te atascas, cambiar de persona cambia el aire. Ese margen es la fuerza del equipo.",
    "Antes de hablar, di su nombre. Solo con saber que las palabras van dirigidas a ella, llegan de otra manera.",
    "Mejor «cuando suene el temporizador» que «cinco minutos más». El tiempo llega cuando se vuelve una herramienta visible.",
    "Haz visible la espera: que se vea qué se está esperando. El tiempo en blanco se convierte en tiempo de ansiedad.",
    "El asiento de siempre, el sitio de siempre. El lugar fijo es cimiento de seguridad. No lo cambies sin necesidad.",
    "Los cascos antirruido y las gafas de sol no son «mimos»: son herramientas, como las gafas. Que se usen con la cabeza alta.",
    "Ten una lista de sonidos, luces y olores difíciles (un mapa sensorial). Ajustar el entorno se vuelve mucho más rápido.",
    "«Una vez más y terminamos»: anunciar el final importa tanto como anunciar el comienzo.",
    "Registra también los días buenos. Las respuestas que funcionaron son el tesoro del equipo.",
    "No es «no puede», es «aún no lo ha aprendido». Cambia la mirada y aparece el siguiente paso.",
    "Las escaleras se suben peldaño a peldaño. Si saltas los pasos pequeños, la subida se vuelve imposible.",
    "No ayudes de más. Aunque lleve tiempo, el «lo hice yo» se convierte en la fuerza siguiente.",
    "En el horario visual, retira (o da la vuelta a) lo terminado. La sensación de avanzar se vuelve seguridad.",
    "Como premio, el tiempo de una actividad favorita gana a las cosas. Dura más y se enreda menos.",
    "Si ves las señales, cambia de lugar. El cambio de entorno es la jugada más simple y poderosa.",
    "En pleno llanto y gritos, no hace falta buscar las palabras correctas. Lo que hace falta es seguridad y tiempo.",
    "Siéntate al lado y mirad lo mismo. El «tiempo en paralelo» cría la confianza en silencio.",
    "No hablar no significa no entender. La capacidad de comprender y la de expresar son cosas distintas.",
    "No te fíes demasiado del «sí». Hay síes que se dicen porque no había otra cosa que decir. Confirma con la acción.",
    "Gestos, señalar, objetos reales. La palabra es solo una de las herramientas para comunicar.",
    "El sueño desordenado lleva directo a la conducta desordenada. Saber si duerme también es apoyo.",
    "La comida selectiva puede ser un asunto sensorial, no un capricho. En vez de forzar, juega con forma, temperatura y textura.",
    "También en el transporte, perspectiva: «adónde, a qué y cuánto tiempo», antes de subir.",
    "El «bienvenido a casa» al volver. Un recibimiento estable sostiene la tranquilidad de la próxima salida.",
    "La comprensión del entorno no se construye en un día. Ten a mano un distintivo de ayuda o una tarjeta breve de explicación.",
    "Escribir registros es solo la mitad. Cobran vida cuando el equipo se da tiempo para releerlos.",
    "Si piensas «otra vez no», es señal de descanso. La fatiga embota el juicio en silencio.",
    "Tras una intervención dura, siempre pasa el relevo. El cansancio y la información pesan menos compartidos.",
    "Su dinero y sus cosas: no «administrarlos», sino «pensar juntos cómo usarlos». Los derechos son suyos.",
    "Lo que funcionó el año pasado puede no funcionar hoy. Las personas cambian; el apoyo también puede cambiar.",
    "No olvides el «gracias» entre compañeros. El aire del equipo llega a la persona tal cual es."
  ],

  quizzes: [
    {
      q: "Alguien entra en un pánico intenso. ¿Qué haces primero?",
      options: ["Gritar en voz alta: «¡Cálmate!»", "Dejar de hablar, reducir personas y estímulos, y esperar a que se calme", "Agarrarla del brazo y sacarla del sitio"],
      answer: 1,
      explain: "En pleno pánico, las palabras y los estímulos no pueden procesarse y empeoran las cosas. Primero deja de hablar, reduce personas, sonido y luz, y quédate en silencio a su lado en un lugar seguro. Esperar a que se calme es la respuesta más rápida."
    },
    {
      q: "Una fijación con un orden fijo impide seguir la actividad. ¿Qué es bueno?",
      options: ["Cortarla por la fuerza y pasar a lo siguiente", "Si es seguro, seguirle la corriente y mostrar el final de forma visible («tres veces más»)", "Cambiárselo por otra cosa a escondidas"],
      answer: 1,
      explain: "Una fijación es su modo de sentirse a salvo. Cortarla por la fuerza o con engaños pierde su confianza y la próxima vez es más fuerte. Síguele la corriente y usa un temporizador o «___ veces más» para hacer visible el «final»: ese es el truco."
    },
    {
      q: "Hay una agresión y llegan dos personas de refuerzo. ¿Qué primero?",
      options: ["Que todos rodeen a la persona para pararla", "Repartir papeles (una atiende a la persona; las demás alejan a los otros usuarios)", "Que todos abandonen el sitio"],
      answer: 1,
      explain: "Cuando llega el refuerzo, repartir papeles es más seguro que juntarse todos en un punto. Una atiende a la persona con calma mientras las demás alejan a los otros usuarios o a los transeúntes. Rodearla y atraer la atención solo aviva la agitación."
    },
    {
      q: "Alguien se fuga de repente al exterior. ¿Cómo la sigues?",
      options: ["Perseguirla a toda velocidad justo por detrás", "Mantenerla a la vista, ir a su lado y bloquear direcciones peligrosas como la calzada", "Gritar su nombre sin parar para no perderla"],
      answer: 1,
      explain: "Perseguir justo por detrás se vuelve una «carrera» y puede acelerarla; gritar puede reforzar la huida. Entra en su campo de visión por el lado mientras bloqueas primero calzada, vías y agua. Y pide refuerzos e informa pronto."
    },
    {
      q: "Empieza una crisis convulsiva. ¿Qué NO debes hacer?",
      options: ["Cronometrarla mirando el reloj", "Meterle en la boca palillos o una toalla", "Si puede caer, sostenerla y apartar los objetos peligrosos"],
      answer: 1,
      explain: "Meter algo en la boca «para que no se muerda la lengua» es un error: causa asfixia y daña dientes o mandíbula. Lo que hay que hacer: asegurar la zona y cronometrar la crisis. Más de 5 minutos, que se repita, lesión o en el agua → emergencias."
    },
    {
      q: "Una crisis de hiperventilación. ¿Cuál es la respuesta correcta?",
      options: ["Ponerle una bolsa de papel en la boca para que respire", "Quedarte a su lado y guiarla a soltar el aire despacio", "Decirle con firmeza «¡Cálmate!» para que reaccione"],
      answer: 1,
      explain: "El método de la bolsa de papel arriesga hipoxia y ya no se recomienda. Lo que hay que hacer: en un lugar tranquilo, quedarte con ella y guiarla —«Vamos a soltar el aire despacio»— acompañando la exhalación. Quédate hasta que se calme."
    },
    {
      q: "Llevas a una persona con conducta desafiante grave a un lugar nuevo. ¿Qué es lo más importante?",
      options: ["Improvisar según lo que surja el mismo día", "Planificar con cuidado de antemano para que pueda tener una previsión y entrar con comprensión", "Llenar la agenda para que sea un día completo"],
      answer: 1,
      explain: "La verdadera labor del apoyo es «antes de que ocurra». Atender después de que la conducta ha empezado es difícil y doloroso para todos. Comparte antes dónde, qué y cuánto, y qué pasa al terminar, y decide de antemano dónde puede descansar y cuándo volver. Ese es el mayor apoyo."
    },
    {
      q: "«Espera un poco más, pórtate bien». ¿Cuál es una forma más clara?",
      options: ["«Cuando el reloj marque las 3, nos vamos. Hasta entonces, esperamos sentados en la silla.»", "«Sé bueno.»", "«Termina enseguida, aguanta.»"],
      answer: 0,
      explain: "«Bien», «un poco más» y «sé bueno» son, de hecho, de lo más difícil de captar. El cuándo, el qué y el cómo —dichos en concreto y de forma visible— sí llegan."
    },
    {
      q: "Para elogiar lo que hizo bien, ¿cuándo?",
      options: ["Todo junto al final del día", "En el mismo momento en que lo logra, en concreto", "La próxima vez que falle, por comparación"],
      answer: 1,
      explain: "El elogio llega peor tras una pausa. No «bien hecho», sino «te has puesto tú solo los zapatos», en el momento del logro y en concreto. Cuando puede saber qué se le elogió, se traslada a la próxima vez."
    },
    {
      q: "¿Qué conviene evitar decirle a alguien profundamente hundido?",
      options: ["Acogerlo con «Qué duro fue»", "Animarlo: «¡Ánimo, todos lo pasan mal!»", "Solo quedarte en silencio a su lado"],
      answer: 1,
      explain: "La depresión no se cura con voluntad. «Ánimo» y la comparación con otros pueden acorralar más a la persona. Primero acoge el dolor. Y no pases por alto un «quiero morir»: a atención médica y a la familia de inmediato."
    },
    {
      q: "«Oigo insultos desde dentro de la pared», dice con miedo. ¿Qué haces?",
      options: ["Enseñarle los hechos: «No hay tal voz»", "Acompañar el sentimiento («Da miedo») y derivar hacia algo que tranquilice", "Preguntar «¿Qué dice?» y escuchar con ella"],
      answer: 1,
      explain: "Para la persona, de verdad lo oye. Ni rebatirlo ni agrandar la historia. El asunto no es verdadero o falso, sino la ansiedad. Acompaña el sentimiento y deriva con suavidad hacia una actividad real que tranquilice. Si va en aumento, sugiere una consulta."
    },
    {
      q: "En un supermercado, de repente se inquieta y se tapa los oídos. ¿Qué sospechas primero?",
      options: ["Que molesta a propósito", "Un malestar sensorial: sonido, luz, gentío", "Que solo tiene hambre"],
      answer: 1,
      explain: "En el autismo y otros casos, los sentidos pueden ser muy sensibles. La música de fondo, la iluminación y el bullicio pueden ser un estímulo doloroso para ella. Mueveos a un lugar tranquilo, usad orejeras: formas de reducir el estímulo."
    },
    {
      q: "Se ha calmado la situación. ¿Qué cosa importante puedes hacer en menos de un minuto?",
      options: ["No hace falta hacer nada en especial", "Registrar desencadenante → conducta → resultado, y compartirlo", "Hacer que escriba una disculpa"],
      answer: 1,
      explain: "Con solo dejar brevemente «cuál fue el desencadenante» ya se abre la siguiente prevención. Al acumular registros de desencadenante × respuesta, se convierten en el «manual» de esa persona. No cargues sola: comparte con el equipo."
    },
    {
      q: "Rechaza en redondo la medicación. ¿Cuál es una buena respuesta?",
      options: ["Sujetarla y hacérsela tragar", "Retirarte y dejar pasar un rato; si continúa, consultar al médico o al farmacéutico", "Mezclarla en la comida sin decírselo"],
      answer: 1,
      explain: "El rechazo tiene un motivo (cuesta tragar, efectos duros, no entiende para qué). Forzar pierde su confianza. Retírate y deja pasar un rato, cambia la forma o el momento. Si continúa, no decidas sola: pregunta al médico o al farmacéutico. Mezclarla a escondidas, solo con el acuerdo del médico y la familia."
    },
    {
      q: "Está inquieta y su voz va subiendo: has notado las «señales previas». ¿Cuándo actúas?",
      options: ["Aún no ha pasado nada, así que observo", "En la fase de señales: reduzco estímulos e invito a un descanso", "Espero a que empiece la conducta y respondo con todo"],
      answer: 1,
      explain: "La conducta sube como una ola. Una vez en la cresta, las palabras y los recursos apenas llegan. Las pequeñas respuestas en la fase de señales (menos estímulos, un descanso, cambiar de sitio) funcionan con el menor desgaste. Registrar y compartir los patrones de señales se convierte en un tesoro del equipo."
    },
    {
      q: "El pánico acaba de calmarse. ¿Siguiente paso?",
      options: ["Retomar de inmediato la actividad interrumpida", "Agua y descanso; retomar despacio, observando cómo está", "Hacerle reflexionar para que no vuelva a pasar"],
      answer: 1,
      explain: "Justo después de calmarse llega un «período de recuperación»: cuerpo y mente agotados, fácil de reavivar. Retomar las demandas demasiado pronto puede reactivarlo. Primero agua y descanso; retomar por etapas. Los sermones y la reflexión no llegan en ese momento."
    },
    {
      q: "Antes de tocar el cuerpo para ayudar a cambiarse de ropa, ¿qué va primero?",
      options: ["Avisar con una palabra: «voy a tocarte el brazo»", "Terminar rápido y en silencio para no asustar", "Sujetar desde atrás y moverla primero"],
      answer: 0,
      explain: "El contacto sin aviso provoca miedo y reacciones defensivas (zafarse, golpear). En especial con personas con trauma o sensibilidad sensorial, la base es: desde donde te vea, y tras avisar. Prioriza la velocidad de la tranquilidad sobre la velocidad de la tarea."
    },
    {
      q: "Al ofrecer actividades para elegir, ¿qué manera funciona mejor?",
      options: ["Reducir a dos: «¿A o B, cuál prefieres?»", "Poner tantas opciones como sea posible para que elija libremente", "Decidir por ella para que no se agobie"],
      answer: 0,
      explain: "Poder elegir da seguridad, pero demasiadas opciones se convierten en una nueva ansiedad. Con dos (tres como mucho) se elige con calma. La sensación misma de «lo decidí yo» impulsa el siguiente paso."
    },
    {
      q: "Estos días la conducta ha aumentado de golpe. ¿Qué compruebas primero?",
      options: ["Pensar que se ha vuelto más caprichosa", "Endurecer los castigos para frenar la conducta", "Revisar el cuerpo (dolor, hambre, sueño, estreñimiento) y los cambios del entorno"],
      answer: 2,
      explain: "Un cambio brusco de conducta apunta primero a malestar físico o cambios del entorno. Un dolor de muelas, una otitis, estreñimiento, falta de sueño: el malestar que no se puede decir sale como conducta. No es que «cambió su carácter»: «algo está pasando». Revisa también el historial médico."
    },
    {
      q: "En el tren se tapa los oídos y se agacha. Empieza a juntarse gente. ¿Primero?",
      options: ["Levantarla: la prioridad es bajar en la próxima estación", "Hacer de pared con tu cuerpo para cortar las miradas y decir breve: «está bien»", "Explicar la situación en voz alta a todos"],
      answer: 1,
      explain: "Las miradas que se juntan son, en sí mismas, un estímulo potente. Primero sé una pared: corta las líneas de visión y la gente, con una frase corta al entorno. Moverla puede esperar a que se calme; la decisión de bajar viene después."
    },
    {
      q: "Una crisis epiléptica terminó a los 3 minutos; la persona está aturdida. ¿Ahora?",
      options: ["Levantarla y hacerla caminar para comprobar la conciencia", "Vigilar en posición lateral de seguridad; registrar duración y detalles", "Darle agua y azúcar"],
      answer: 1,
      explain: "Tras la crisis puede continuar el aturdimiento. Vigila en silencio en posición lateral de seguridad, registra cuánto duró y cómo fue, e informa a su médico y a la familia. Comer o beber enseguida trae riesgo de atragantamiento; forzar la marcha, riesgo de caída."
    },
    {
      q: "¿Qué forma de escribir registros ayuda más al siguiente apoyo?",
      options: ["Centrada en impresiones: «estuvo enfadada todo el rato»", "Con hechos: «15:00, antes de la merienda, voz alta 10 min, se calmó al cambiar de sitio»", "Larga y detallada, como un relato"],
      answer: 1,
      explain: "El truco es separar lo que viste (hechos) de lo que pensaste (suposiciones). Cuándo, dónde, qué y qué ayudó: en breve. Los hechos acumulados dejan ver patrones de desencadenantes: el plano del siguiente apoyo."
    },
    {
      q: "Una compañera se está atascando en plena intervención; su cara se endurece. ¿Qué es bueno?",
      options: ["Decir «te relevo» y hacer el cambio", "Dejar que lo termine sola hasta el final", "No decir nada y señalarlo después en la reunión"],
      answer: 0,
      explain: "La tensión y la irritación del apoyo también llegan a la persona. Relevarse cuando uno se atasca no es derrota: es técnica. Solo con cambiar de persona, el aire cambia muchas veces. Un equipo donde el relevo se puede ofrecer y aceptar protege a la persona."
    },
    {
      q: "Una familiar confiesa: «en casa es muy duro… quizá la crie mal». ¿Primero?",
      options: ["Corregirla: «debe cambiar su método»", "Reconocerla — «ha sostenido esto hasta hoy» — y preguntarle qué funciona en casa", "Explicar unilateralmente el método del centro"],
      answer: 1,
      explain: "La familia es la «cuidadora más veterana», la que más tiempo lleva sosteniendo a la persona. Antes de corregir o instruir, reconoce su esfuerzo. Lo que funciona en casa es una pista valiosa. Al final, la relación de colaboración es lo que mejor sostiene a la persona."
    },
    {
      q: "Quieres empezar a la vez tarjetas con dibujos, un horario nuevo y un cambio de sitio. ¿Qué haces?",
      options: ["Cambiarlo todo de una vez para maximizar el efecto", "Probar de uno en uno, comprobando el efecto", "No cambiar nada: los cambios confunden"],
      answer: 1,
      explain: "Si cambias muchas cosas a la vez, no sabrás qué funcionó (ni qué no le sentó bien), y la carga para la persona crece. Las novedades, de una en una, confirmadas con registros. El truco no es no cambiar: es cambiar en orden."
    },
    {
      q: "La persona murmura: «quiero morirme». ¿Qué haces?",
      options: ["Cambiar de tema: «no digas esas cosas»", "Tomarlo en serio, escuchar y conectar pronto con la dirección y la atención médica", "Como es habitual, dejarlo pasar"],
      answer: 1,
      explain: "Toda mención de querer morir se toma en serio, sea cual sea su frecuencia. Sin negar ni desviar: primero escuchar. Y no cargarlo a solas: informa a tu superior ese mismo día y compártelo con la medicina y la familia. «No dejarlo pasar» es el primer paso para proteger una vida."
    },
    {
      q: "Planificas una salida a un lugar nuevo. ¿Qué tranquiliza decidir primero?",
      options: ["La tienda de recuerdos", "Dónde descansar, cuándo volver y por dónde salir", "Los sitios para fotos"],
      answer: 1,
      explain: "Tan importante como planear la diversión: dónde descansar si se cansa, qué señala que toca volver, por dónde se sale. Decidir antes las vías de escape y el final da margen al apoyo, y ese margen se convierte en la tranquilidad de la persona."
    },
    {
      q: "El apoyo lleva días sin funcionar. ¿Una buena manera de pensarlo?",
      options: ["Concluir que no sirves para esto", "Tomarlo como ocasión de revisar el diseño del apoyo y consultarlo en equipo", "Rendirse: la discapacidad es demasiado severa"],
      answer: 1,
      explain: "Cuando algo no funciona, lo que se revisa es el diseño (entorno, comunicación, horario, estímulos), no una persona. Culparte o culparla no hace avanzar nada. Llevar los registros y revisarlos en equipo: así pasan sus «malos días» los profesionales."
    },
    {
      q: "Para decirle «lo siguiente» a alguien que se ha quedado bloqueado, ¿cómo?",
      options: ["«¡Date prisa, que llegamos tarde!»", "«Después de esto, el té»: corto, una sola cosa y en forma visible", "Explicar todo el plan del día de principio a fin"],
      answer: 1,
      explain: "Cuando la transición está tardando en procesarse, más información desborda. Solo la siguiente cosa: corta, concreta y, si se puede, visible. Las palabras de prisa hacen el procesamiento aún más pesado."
    },
    {
      q: "Durante la intervención se acercan transeúntes con buena intención: «¡¿Está bien?!». ¿Una buena respuesta?",
      options: ["Explicar con detalle el diagnóstico y lo ocurrido para que entiendan", "Decir breve: «estamos bien, en un momento se calma», y cortar las miradas", "Ignorarlos y concentrarse en la intervención"],
      answer: 1,
      explain: "La atención bienintencionada también es estímulo para la persona. Una frase corta tranquiliza al entorno y reduce el corro y las miradas: eso es apoyo de verdad. No hace falta contar datos privados como el diagnóstico. Ignorar puede acabar en una llamada a emergencias, así que una frase — solo una — es el punto justo."
    },
    {
      q: "Diste una indicación y no hay respuesta. ¿Qué revisas primero?",
      options: ["Repetirla con voz más fuerte", "Decir su nombre, comprobar que su atención está en ti y decirlo breve", "Tomarla de la mano y moverla"],
      answer: 1,
      explain: "Las palabras que llegan de cualquier parte cuesta reconocerlas como «dirigidas a mí». Primero el nombre. Comprueba que la atención está en ti y dilo corto. Lo que importa no es el volumen, sino el orden en que llegan las cosas."
    },
    {
      q: "Respondió «sí» a «¿entendido?», pero la acción no acompaña. ¿Cómo pensarlo?",
      options: ["Quizá fue un «sí» sin otra opción. Confirmar haciéndolo de verdad", "Mintió, así que corregirla", "Explicar de nuevo con voz más fuerte"],
      answer: 0,
      explain: "Hay síes que se dicen porque la pregunta no deja otra salida. No culpes: cambia la forma de confirmar. Más que preguntar «¿entendido?», que lo haga de verdad. La acción confirma la comprensión mejor que las palabras."
    },
    {
      q: "Solo come arroz blanco y pan. ¿Una buena respuesta?",
      options: ["Por su salud, no servir nada hasta que coma otras cosas", "Puede ser sensorial. Sin forzar: ajustar forma y temperatura y consultar con medicina y nutrición", "Es su elección, así que no hacer nada"],
      answer: 1,
      explain: "La selectividad extrema con la comida no suele ser capricho, sino sensibilidad sensorial al sabor, la textura o el aspecto. Forzar convierte la propia comida en miedo. Pequeños ajustes de forma y temperatura, y lo nutricional, con los profesionales."
    },
    {
      q: "La familia dice que últimamente no duerme. El día también está agitado. ¿Primero?",
      options: ["Aumentar la actividad diurna para cansarla", "Endurecer la respuesta a la conducta", "Registrar el sueño y compartirlo con su médico"],
      answer: 2,
      explain: "El sueño desordenado lleva directo a la conducta desordenada. Primero registrar cuándo duerme, cuándo despierta y cómo va la noche — y al médico. La causa (medicación, salud, entorno, ansiedad) se estudia con la medicina. Endurecer solo el día no cambia la raíz."
    },
    {
      q: "Con el horario visual, ¿qué uso da más seguridad?",
      options: ["Retirar (o dar la vuelta a) los elementos terminados", "Dejar todo el horario tal cual", "No dejar que lo toque"],
      answer: 0,
      explain: "Ver cuánto se ha avanzado da perspectiva de lo que queda, y eso da seguridad. Si es la propia persona quien retira o gira lo terminado, además hay logro. El horario no es la tabla del apoyo: es la herramienta de la persona."
    },
    {
      q: "Como premio al esfuerzo, ¿qué dura más?",
      options: ["Comprar algo caro", "Tiempo de una actividad favorita (música, paseo…)", "Golosinas cada vez"],
      answer: 1,
      explain: "Los premios de cosas y comida tienden a escalar o a enredarse con la salud. El «tiempo de actividad favorita» es la propia alegría de la persona, encaja en el día a día y dura. Saber qué le gusta ya es fuerza de apoyo."
    },
    {
      q: "Una tarea está llevando mucho tiempo. ¿Hasta dónde ayudar?",
      options: ["Acompañar con la mirada y ayudar lo mínimo solo donde tropieza", "Es una pérdida de tiempo: hacérselo todo", "No intervenir en absoluto hasta que lo logre"],
      answer: 0,
      explain: "Hacérselo todo le roba la experiencia de «lo hice yo», y lo que sabe hacer va menguando. Pero abandonarla tampoco es. Mirar, y sostener suave solo en el punto del tropiezo. Tardar no es fracasar."
    },
    {
      q: "Inicio de la relación. ¿Qué trato cría confianza?",
      options: ["Preguntar mucho para reunir información", "Sentarse al lado y acumular tiempo haciendo juntos la misma actividad", "Mantener distancia y limitarse a observar"],
      answer: 1,
      explain: "Las preguntas de frente pueden sentirse como interrogatorio. El «tiempo en paralelo» — sentados lado a lado mirando lo mismo — construye el «esta persona es segura» aun sin palabras. La confianza va antes que la recogida de datos."
    },
    {
      q: "Los viajes en tren tienden a alborotarse. ¿Prevención eficaz?",
      options: ["Hacerle prometer que si alborota se baja en la próxima", "No hablarle nada durante el trayecto", "Antes de subir, decir «adónde, a qué, cuánto tiempo» y llevar algo tranquilizador"],
      answer: 2,
      explain: "Un trayecto sin perspectiva es una lata de ansiedad. Antes de subir, mostrar destino y duración de forma visible, y llevar algo que calme (auriculares, un juguete, tarjetas). La prevención empieza antes de subir. Anunciar castigos solo añade ansiedad."
    },
    {
      q: "Al salir, ¿qué conviene llevar preparado para la comprensión del entorno?",
      options: ["Un distintivo de ayuda o una tarjeta breve de explicación", "Una copia del informe médico detallado", "Nada en particular"],
      answer: 0,
      explain: "En el momento no hay tiempo para explicaciones largas. Un distintivo de ayuda o una tarjeta breve tipo «disculpen si les hemos sobresaltado: es parte de su discapacidad» tiende un puente al instante. No hace falta cargar con informes médicos detallados."
    },
    {
      q: "Los registros se van acumulando. ¿El siguiente paso?",
      options: ["Borrar los antiguos", "Crear tiempo de equipo para releerlos y buscar patrones", "Guardarlos en una libreta personal"],
      answer: 1,
      explain: "Escribir registros es solo la mitad. Solo cuando el equipo los relee y encuentra los patrones de desencadenantes y las respuestas que funcionaron, se convierten en apoyo. Aunque sea breve: revisión periódica."
    },
    {
      q: "En plena intervención te sube un «otra vez no». ¿Esto es…?",
      options: ["Señal de fatiga. Considerar descanso o relevo", "Un sentimiento natural: seguir tal cual", "Aplastarlo con fuerza de voluntad"],
      answer: 0,
      explain: "El «otra vez no» no significa que seas mala en esto: significa que estás cansada. La fatiga embota el juicio, se filtra en la voz y la cara, y llega a la persona. Considerar descanso o relevo no es debilidad: es técnica que protege a la persona."
    },
    {
      q: "Un método que funcionó hasta el año pasado pierde efecto. ¿Cómo pensarlo?",
      options: ["Insistir con el mismo método, más fuerte, hasta que funcione", "Quizá la persona cambió (creció, cambió su situación). Actualizar la mirada", "Concluir que su estado empeoró"],
      answer: 1,
      explain: "Las personas cambian. Con el crecimiento un método deja de encajar; también cambian entorno y salud. Que un método pierda efecto no es empeorar. Releer los registros y actualizar mirada y método a quien es hoy. El apoyo es un ser vivo."
    },
    {
      q: "Te preocupa cómo gasta su dinero de bolsillo. ¿Un buen trato?",
      options: ["Que el centro administre todo", "Dejar que gaste libre y no intervenir", "Pensarlo juntos (su voluntad al centro; los fallos pequeños, aprendizaje)"],
      answer: 2,
      explain: "El dinero es su derecho. Administrarlo todo es seguro, pero roba la capacidad de decidir. Dejarla sola arriesga explotación. El eje es «pensar juntos»: acompañar los fallos pequeños como aprendizaje y hacer de rompeolas solo ante riesgos grandes (explotación, contratos costosos)."
    },
    {
      q: "Sobre trabajar con alguien que no habla, ¿qué es cierto?",
      options: ["Comprender y expresar son capacidades distintas. Leer también conducta, expresión y mirada", "No hablar = no entender, así que se pueden saltar las explicaciones", "Hablando alto y despacio, llega"],
      answer: 0,
      explain: "No hablar y no entender son cosas distintas. Muchas personas entienden muy bien lo que dices. No te saltes explicaciones delante de ella ni la trates como a una niña: recibe sus «respuestas» también por la expresión, la mirada y la postura."
    },
    {
      q: "Una compañera dice que los cascos antirruido son «mimarla». ¿Cómo respondes?",
      options: ["Quizá tenga razón: que se los quite", "Explicar que son «una herramienta, como las gafas» — un ajuste razonable para la sensibilidad sensorial — y compartirlo con el equipo", "Dejarlo pasar"],
      answer: 1,
      explain: "Nadie llama «mimo» a corregir la vista con gafas. Compensar la sensibilidad auditiva con cascos es exactamente lo mismo. Cuando el equipo comparte el sentido de la herramienta, la persona puede usarla con la cabeza bien alta."
    },
    {
      q: "Insiste en el mismo asiento y la misma rutina cada vez. ¿La postura básica?",
      options: ["Lugar fijo y rutina son cimiento de seguridad. No cambiarlos sin necesidad", "Cambiar de asiento cada vez para que no se aburra", "Romper la rutina a propósito para corregir la insistencia"],
      answer: 0,
      explain: "«Como siempre» es un mundo predecible: seguridad en estado puro. Romperlo sin necesidad es quitarle el cimiento. Solo cuando el cambio es de verdad necesario: con aviso previo y poco a poco."
    },
    {
      q: "Primera entrevista con una persona nueva. ¿Qué priorizas preguntar?",
      options: ["La lista detallada de conductas problema", "Qué le gusta, qué la calma, qué se le da bien", "Toda su historia de vida"],
      answer: 1,
      explain: "La información de los problemas se reúne después. Lo primero: «gustos, calma, fortalezas» — la entrada del apoyo y la salida del pánico suelen estar ahí. El apoyo que empieza por las fortalezas también construye la relación más rápido."
    },
    {
      q: "Volvisteis sanos y salvos de la salida. ¿La revisión que lleva a la próxima?",
      options: ["Salió bien: no hace falta revisar", "Listar solo los sustos", "Registrar también lo que salió bien y volcarlo en el próximo plan"],
      answer: 2,
      explain: "Una salida que salió bien es una mina de oro. Guardar «qué estuvo bien» (la hora, la ruta, lo que llevabais, las palabras) se vuelve la base del próximo plan. Registros de sustos y de aciertos: juntos hacen el «manual de instrucciones»."
    },
    {
      q: "¿Cómo es una persona «buena apoyando»?",
      options: ["La que puede parar la conducta por la fuerza", "La que sabe aumentar el tiempo en que la persona está tranquila", "La que se adelanta a todo y lo hace todo por ella"],
      answer: 1,
      explain: "Más que destrezas vistosas de crisis: construir un día a día que no hierva. Cuanto más tiempo pasa la persona sintiéndose segura, menos momentos difíciles hay en total. Parece sencillo — y es la pericia más verdadera."
    }
  ],

  phraseGroups: [
    { id: "feel",  label: "Sentimientos", emoji: "💙", items: ["Contento/a", "Triste", "Con miedo", "No me gusta", "Estoy bien", "Estoy enfadado/a"] },
    { id: "body",  label: "Cuerpo", emoji: "🩹", items: ["Me duele", "Estoy cansado/a", "Baño", "Tengo hambre", "Tengo sed", "Sueño", "Me encuentro mal"] },
    { id: "ask",   label: "Peticiones", emoji: "🙏", items: ["Ayúdame, por favor", "Quiero un descanso", "Habla despacio, por favor", "Repítelo, por favor", "Escríbelo, por favor", "Silencio, por favor"] },
    { id: "reply", label: "Respuestas", emoji: "💬", items: ["Sí", "No", "No entiendo", "Espera un momento", "Gracias", "Perdón"] }
  ],

  logOptions: {
    triggers: ["Sonido / luz", "Personas cerca / gentío", "Cambio de plan", "No se atendió una petición", "Dolor / malestar", "Espera", "No lo sé", "Otro"],
    durations: ["Menos de 5 min", "Menos de 15 min", "Menos de 30 min", "Más"],
    responses: ["Reduje estímulos", "Cambié de lugar", "Vigilé", "Mostré lo que venía", "Usé escritura / apoyos visuales", "Avisé a médico / emergencias", "Otro"],
    injuries: ["Ninguna", "Lesión de la persona", "Lesión de otros", "Daño material"]
  }
};
