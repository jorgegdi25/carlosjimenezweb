export type DiagnosticType = "pensamiento" | "consumo";
export type Category = "A" | "B" | "C" | "D";

export type Question = {
  id: string;
  category: Category;
  text: string;
};

export type Interpretation = {
  title: string;
  shortTitle: string;
  profile: string;
  strength: string;
  challenge: string;
  color: string;
};

export type Diagnostic = {
  title: string;
  shortTitle: string;
  description: string;
  questions: Question[];
  interpretations: Record<Category, Interpretation>;
};

export const categories: Category[] = ["A", "B", "C", "D"];

export const diagnostics: Record<DiagnosticType, Diagnostic> = {
  pensamiento: {
    title: "Diagnóstico de estilos de pensamiento",
    shortTitle: "Estilos de pensamiento",
    description:
      "Explora cómo procesas, organizas y creas información en entornos digitales y de aprendizaje.",
    questions: [
      {
        id: "p_A1",
        category: "A",
        text: "Cuando aprendo algo nuevo en internet, busco datos, estadísticas y hechos objetivos.",
      },
      {
        id: "p_A2",
        category: "A",
        text: "Me resulta fácil resolver problemas complejos desarmándolos con lógica y razón.",
      },
      {
        id: "p_A3",
        category: "A",
        text: "Prefiero la información directa y sin rodeos emocionales; valoro la eficiencia.",
      },
      {
        id: "p_B1",
        category: "B",
        text: "Antes de iniciar un proyecto digital, necesito estructurar un plan paso a paso.",
      },
      {
        id: "p_B2",
        category: "B",
        text: "Soy muy organizado con mis carpetas, archivos y la gestión de mi tiempo.",
      },
      {
        id: "p_B3",
        category: "B",
        text: "Prefiero seguir instrucciones claras en lugar de improvisar sobre la marcha.",
      },
      {
        id: "p_C1",
        category: "C",
        text: "En redes o equipos virtuales, me enfoco en cómo se sienten las personas y en el clima grupal.",
      },
      {
        id: "p_C2",
        category: "C",
        text: "Aprendo mucho mejor si el tema tiene una conexión humana, emocional o social.",
      },
      {
        id: "p_C3",
        category: "C",
        text: "Tomo decisiones basándome en mi intuición interpersonal y mis valores.",
      },
      {
        id: "p_D1",
        category: "D",
        text: "Me aburren los detalles técnicos; prefiero ver el panorama general y conceptual.",
      },
      {
        id: "p_D2",
        category: "D",
        text: "Conecto ideas de temas distintos para crear soluciones innovadoras.",
      },
      {
        id: "p_D3",
        category: "D",
        text: "Soy muy visual: aprendo mejor con mapas mentales, gráficos y metáforas.",
      },
    ],
    interpretations: {
      A: {
        title: "Cerebro analítico y lógico",
        shortTitle: "Analítico",
        profile:
          "Tu procesamiento tiende a ser objetivo y orientado a los datos. Buscas comprender las partes antes de aceptar una conclusión.",
        strength:
          "Puedes tomar decisiones basadas en hechos, filtrar información dudosa, optimizar procesos y detectar fallos lógicos.",
        challenge:
          "La sobreinformación puede producir parálisis por análisis. Alternar el razonamiento con actividades lúdicas ayuda a recuperar flexibilidad.",
        color: "#2d63d5",
      },
      B: {
        title: "Cerebro secuencial y procedimental",
        shortTitle: "Secuencial",
        profile:
          "Tu procesamiento suele ser estructurado, cuidadoso y orientado a convertir las ideas en acciones concretas.",
        strength:
          "Tienes facilidad para organizar rutinas, administrar recursos, cumplir procesos y prevenir errores.",
        challenge:
          "La ambigüedad puede resultarte incómoda. Explorar actividades creativas sin una receta única fortalece tu adaptación al cambio.",
        color: "#f1b72f",
      },
      C: {
        title: "Cerebro humanístico y emocional",
        shortTitle: "Humanístico",
        profile:
          "Tu procesamiento integra la empatía, los vínculos y el significado humano de la información.",
        strength:
          "Puedes liderar comunidades, comprender experiencias de usuario y crear entornos donde aprender y colaborar tenga sentido.",
        challenge:
          "La exposición digital puede generar agotamiento emocional. Conviene reservar momentos de desconexión y juego sin exigencia social.",
        color: "#e65b53",
      },
      D: {
        title: "Cerebro holístico y creativo",
        shortTitle: "Creativo",
        profile:
          "Tu procesamiento tiende a ser simultáneo, visual e intuitivo. Encuentras conexiones donde otras personas ven elementos separados.",
        strength:
          "Puedes comprender panoramas amplios, sintetizar información y producir ideas originales para innovar.",
        challenge:
          "La abundancia de ideas puede dispersar tu atención. Apoyarte en secuencias y fechas concretas facilita llevarlas hasta el final.",
        color: "#11a78f",
      },
    },
  },
  consumo: {
    title: "Diagnóstico de estilos de consumo",
    shortTitle: "Estilos de consumo",
    description:
      "Reconoce qué factores racionales, emocionales y sociales influyen en tus decisiones de compra.",
    questions: [
      {
        id: "c_A1",
        category: "A",
        text: "Antes de comprar tecnología, comparo con cuidado las especificaciones técnicas.",
      },
      {
        id: "c_A2",
        category: "A",
        text: "Mi motivación principal de compra es la relación costo-beneficio y la funcionalidad.",
      },
      {
        id: "c_A3",
        category: "A",
        text: "Desconfío de la publicidad emocional; busco reseñas objetivas y comprobables.",
      },
      {
        id: "c_B1",
        category: "B",
        text: "Prefiero marcas tradicionales que me ofrezcan garantías y seguridad.",
      },
      {
        id: "c_B2",
        category: "B",
        text: "Compro productos porque son duraderos y previenen problemas futuros.",
      },
      {
        id: "c_B3",
        category: "B",
        text: "Soy metódico en mis compras: hago listas y me apego a un presupuesto.",
      },
      {
        id: "c_C1",
        category: "C",
        text: "Compro en lugares donde la atención al cliente me hace sentir valorado.",
      },
      {
        id: "c_C2",
        category: "C",
        text: "Me influyen las recomendaciones de mis amigos o de personas que admiro.",
      },
      {
        id: "c_C3",
        category: "C",
        text: "Siento lealtad hacia marcas que apoyan causas sociales o tienen valores claros.",
      },
      {
        id: "c_D1",
        category: "D",
        text: "Estoy dispuesto a pagar más por un diseño estético, exclusivo y original.",
      },
      {
        id: "c_D2",
        category: "D",
        text: "Me atraen los productos innovadores, que son tendencia o rompen las reglas.",
      },
      {
        id: "c_D3",
        category: "D",
        text: "Puedo comprar por impulso si un producto despierta mi curiosidad e imaginación.",
      },
    ],
    interpretations: {
      A: {
        title: "Consumidor racional y funcional",
        shortTitle: "Racional",
        profile:
          "Tus decisiones tienden a priorizar la lógica, la eficiencia y el valor real del producto.",
        strength:
          "Comparas información, exiges calidad y reduces la posibilidad de decidir únicamente por presión publicitaria.",
        challenge:
          "La experiencia y el disfrute también forman parte del valor. Puedes permitirte considerar cómo te hará sentir el uso, no solo su rendimiento.",
        color: "#2d63d5",
      },
      B: {
        title: "Consumidor preventivo y tradicional",
        shortTitle: "Preventivo",
        profile:
          "Tus decisiones tienden a buscar seguridad, garantía, estabilidad y tranquilidad.",
        strength:
          "Evitas riesgos innecesarios, revisas condiciones y valoras que las marcas cumplan sus promesas.",
        challenge:
          "El apego a lo conocido puede limitar el descubrimiento de soluciones nuevas. Probar en pequeña escala reduce el riesgo sin cerrar la puerta.",
        color: "#f1b72f",
      },
      C: {
        title: "Consumidor emocional y relacional",
        shortTitle: "Relacional",
        profile:
          "Tus decisiones integran la pertenencia, la atención recibida y los valores que representa una marca.",
        strength:
          "Premias a las empresas con propósito, atención humana y vínculos genuinos con sus comunidades.",
        challenge:
          "Las campañas emocionales pueden influirte con fuerza. Hacer una pausa antes de comprar ayuda a distinguir deseo propio de validación externa.",
        color: "#e65b53",
      },
      D: {
        title: "Consumidor innovador y estético",
        shortTitle: "Innovador",
        profile:
          "Tus decisiones tienden a valorar la novedad, el diseño, la exclusividad y la curiosidad.",
        strength:
          "Impulsas tendencias, apoyas la creatividad y estás dispuesto a explorar propuestas diferentes.",
        challenge:
          "La novedad puede desplazar productos todavía útiles. Definir el problema que quieres resolver ayuda a evitar el efecto del objeto brillante.",
        color: "#11a78f",
      },
    },
  },
};
