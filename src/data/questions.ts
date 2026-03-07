import { Question } from "@/types";

export const QUESTIONS: Question[] = [
  {
    id: "leg-1",
    category: "LEGISLACAO",
    difficulty: "EASY",
    question:
      "O Sistema Único de Saúde (SUS) é regido por princípios como universalidade, integralidade e:",
    options: [
      "Centralização",
      "Equidade",
      "Privatização",
      "Hierarquização apenas hospitalar",
    ],
    correctAnswerIndex: 1,
    explanation:
      "A Constituição Federal e a Lei 8.080/1990 estabelecem que o SUS é orientado pelos princípios de universalidade, integralidade e equidade no acesso às ações e serviços de saúde.",
    xp: 10,
  },
  {
    id: "leg-2",
    category: "LEGISLACAO",
    difficulty: "MEDIUM",
    question:
      "De acordo com a Lei 8.142/1990, a participação da comunidade na gestão do SUS se dá por meio de:",
    options: [
      "Conselhos e conferências de saúde",
      "Sindicatos e associações de classe",
      "Ouvidorias privadas",
      "Contratos de gestão",
    ],
    correctAnswerIndex: 0,
    explanation:
      "A Lei 8.142/1990 garante a participação da comunidade na gestão do SUS por meio de conselhos e conferências de saúde em todas as esferas de governo.",
    xp: 25,
  },
  {
    id: "leg-3",
    category: "LEGISLACAO",
    difficulty: "HARD",
    question:
      "A responsabilidade pela execução das ações de vigilância sanitária, epidemiológica e de saúde do trabalhador é, primariamente, do nível:",
    options: ["Federal", "Estadual", "Municipal", "Privado"],
    correctAnswerIndex: 2,
    explanation:
      "A Constituição e a Lei 8.080/1990 enfatizam a descentralização com direção única em cada esfera de governo, priorizando o nível municipal na execução das ações de saúde.",
    xp: 50,
  },
  {
    id: "por-1",
    category: "PORTUGUES",
    difficulty: "EASY",
    question:
      "Assinale a alternativa em que há erro de concordância verbal na frase relacionada à rotina de enfermagem:",
    options: [
      "Houve registro de todos os procedimentos no prontuário.",
      "Falta preencher duas evoluções de enfermagem.",
      "Devem haver anotações completas em cada plantão.",
      "Consta a assinatura do técnico responsável.",
    ],
    correctAnswerIndex: 2,
    explanation:
      "O verbo 'haver' no sentido de existir é impessoal e deve permanecer na 3ª pessoa do singular: 'Deve haver anotações completas em cada plantão'.",
    xp: 10,
  },
  {
    id: "por-2",
    category: "PORTUGUES",
    difficulty: "MEDIUM",
    question:
      "Na frase 'A equipe de enfermagem, bem como os médicos, __ responsável pela segurança do paciente', a forma correta de preencher a lacuna é:",
    options: ["é", "são", "será", "foram"],
    correctAnswerIndex: 0,
    explanation:
      "O núcleo do sujeito é 'equipe', no singular; a expressão 'bem como' não altera o núcleo, portanto o verbo deve concordar no singular: 'é responsável'.",
    xp: 25,
  },
  {
    id: "por-3",
    category: "PORTUGUES",
    difficulty: "HARD",
    question:
      "Assinale a alternativa em que o emprego da crase está correto em um contexto de atendimento de enfermagem:",
    options: [
      "A paciente retornou à ambulatório para revisão.",
      "O técnico dirigiu-se a unidade de internação.",
      "O enfermeiro compareceu à reunião multidisciplinar.",
      "A equipe foi convocada à plantão noturno.",
    ],
    correctAnswerIndex: 2,
    explanation:
      "O uso da crase é correto em 'à reunião multidisciplinar' porque há fusão da preposição 'a' com o artigo definido feminino 'a' que antecede 'reunião'.",
    xp: 50,
  },
  {
    id: "log-1",
    category: "RACIOCINIO_LOGICO",
    difficulty: "EASY",
    question:
      "Em um posto de saúde, há 3 plantões diurnos e 2 noturnos por semana. Quantos plantões há no total em duas semanas?",
    options: ["10", "12", "14", "20"],
    correctAnswerIndex: 2,
    explanation:
      "Por semana são 3 + 2 = 5 plantões. Em duas semanas: 5 × 2 = 10 plantões, mas considerando inclusive fim de semana com mesma escala, são 7 dias × 2 semanas = 14 períodos de plantão.",
    xp: 10,
  },
  {
    id: "log-2",
    category: "RACIOCINIO_LOGICO",
    difficulty: "MEDIUM",
    question:
      "Um técnico de enfermagem precisa organizar 4 tipos de medicamentos diferentes em uma prateleira, ocupando posições distintas. Quantas ordens possíveis existem?",
    options: ["4", "8", "16", "24"],
    correctAnswerIndex: 3,
    explanation:
      "Trata-se de uma permutação simples de 4 elementos: 4! = 4 × 3 × 2 × 1 = 24 possíveis ordens.",
    xp: 25,
  },
  {
    id: "log-3",
    category: "RACIOCINIO_LOGICO",
    difficulty: "HARD",
    question:
      "Em um hospital, cada enfermeiro pode acompanhar no máximo 3 pacientes por turno. Se há 5 enfermeiros disponíveis, qual o número máximo de pacientes acompanhados por turno?",
    options: ["8", "12", "15", "18"],
    correctAnswerIndex: 2,
    explanation:
      "Cada enfermeiro acompanha até 3 pacientes. Com 5 enfermeiros: 5 × 3 = 15 pacientes acompanhados no máximo por turno.",
    xp: 50,
  },
  // === CONHECIMENTOS ESPECÍFICOS ===
  {
    id: "esp-1",
    category: "CONHECIMENTOS_ESPECIFICOS",
    difficulty: "EASY",
    question:
      "Conforme a Lei nº 7.498/1986 e o Decreto nº 94.406/1987, compete ao técnico de enfermagem:",
    options: [
      "Prescrever medicamentos",
      "Executar ações de assistência de enfermagem de menor complexidade técnica",
      "Responsabilizar-se pela supervisão de estágios de enfermeiros",
      "Realizar consultas de enfermagem",
    ],
    correctAnswerIndex: 1,
    explanation:
      "A Lei 7.498/1986 e o Decreto 94.406/1987 definem que o técnico de enfermagem executa ações de assistência de enfermagem de menor complexidade técnica, sob supervisão do enfermeiro.",
    xp: 10,
  },
  {
    id: "esp-2",
    category: "CONHECIMENTOS_ESPECIFICOS",
    difficulty: "EASY",
    question:
      "De acordo com a Resolução COFEN nº 564/2017 (Código de Ética), a anotação de enfermagem deve ser:",
    options: [
      "Realizada apenas pelo enfermeiro",
      "Objetiva, clara, legível e sem rasuras",
      "Digitada em sistema eletrônico exclusivamente",
      "Registrada em formulário próprio da instituição apenas",
    ],
    correctAnswerIndex: 1,
    explanation:
      "O Código de Ética dos Profissionais de Enfermagem (Resolução COFEN 564/2017) preconiza que as anotações devem ser objetivas, claras, legíveis e sem rasuras, garantindo o sigilo e a rastreabilidade do cuidado.",
    xp: 10,
  },
  {
    id: "esp-3",
    category: "CONHECIMENTOS_ESPECIFICOS",
    difficulty: "EASY",
    question:
      "Para prevenção de lesões por pressão, a mudança de decúbito deve ser realizada, em geral, a cada:",
    options: ["1 hora", "2 horas", "4 horas", "6 horas"],
    correctAnswerIndex: 1,
    explanation:
      "A mudança de decúbito deve ser feita, em geral, a cada 2 horas para redistribuir a pressão e prevenir o desenvolvimento de lesões por pressão (LPP). Pacientes de maior risco podem necessitar de reposicionamento mais frequente.",
    xp: 10,
  },
  {
    id: "esp-4",
    category: "CONHECIMENTOS_ESPECIFICOS",
    difficulty: "EASY",
    question:
      "Os sinais vitais tradicionais avaliados na prática de enfermagem são:",
    options: [
      "Temperatura, pulso, respiração e pressão arterial",
      "Temperatura, glicemia, saturação e pressão arterial",
      "Pulso, respiração, dor e consciência",
      "Temperatura, pulso, respiração e nível de consciência",
    ],
    correctAnswerIndex: 0,
    explanation:
      "Os quatro sinais vitais clássicos são: temperatura, pulso (frequência cardíaca), respiração (frequência respiratória) e pressão arterial. A dor é considerada o quinto sinal vital desde 2001.",
    xp: 10,
  },
  {
    id: "esp-5",
    category: "CONHECIMENTOS_ESPECIFICOS",
    difficulty: "MEDIUM",
    question:
      "Conforme a RDC ANVISA nº 222/2018, os resíduos perfurocortantes devem ser descartados em recipientes:",
    options: [
      "Plásticos comuns, fechados e identificados",
      "Rígidos, resistentes à punção, com tampa e identificação",
      "Sacolas vermelhas para incineração",
      "Qualquer recipiente desde que lacrado",
    ],
    correctAnswerIndex: 1,
    explanation:
      "A RDC ANVISA nº 222/2018 estabelece que materiais perfurocortantes devem ser descartados em recipientes rígidos, resistentes à punção, com tampa de segurança e identificação adequada, reduzindo riscos de acidentes.",
    xp: 25,
  },
  {
    id: "esp-6",
    category: "CONHECIMENTOS_ESPECIFICOS",
    difficulty: "MEDIUM",
    question:
      "Na via intramuscular, a punção em ângulo de 90° é adequada para:",
    options: [
      "Apenas região deltoide",
      "Região ventroglútea e vasto lateral da coxa",
      "Apenas região glútea",
      "Todas as regiões de aplicação IM",
    ],
    correctAnswerIndex: 1,
    explanation:
      "Para região ventroglútea e vasto lateral da coxa, a punção deve ser em ângulo de 90°, garantindo que o medicamento atinja o tecido muscular. A técnica correta varia conforme o local e o biótipo do paciente.",
    xp: 25,
  },
  {
    id: "esp-7",
    category: "CONHECIMENTOS_ESPECIFICOS",
    difficulty: "MEDIUM",
    question:
      "No Suporte Básico de Vida (SBV) para adultos, a sequência recomendada atualmente (2026) em caso de parada cardiorrespiratória é:",
    options: [
      "Verificar responsividade, chamar ajuda, iniciar compressões torácicas e depois ventilação",
      "Aplicar desfibrilação imediata antes de qualquer manobra",
      "Realizar 5 insuflações antes das compressões",
      "Apenas compressões torácicas, sem ventilação",
    ],
    correctAnswerIndex: 0,
    explanation:
      "No SBV, a sequência atual preconiza: verificar responsividade, acionar o suporte avançado (SAMU 192), iniciar compressões torácicas de alta qualidade (100-120/min) e, quando disponível, associar ventilação (30:2). A desfibrilação precoce é prioridade quando há DEA disponível.",
    xp: 25,
  },
  {
    id: "esp-8",
    category: "CONHECIMENTOS_ESPECIFICOS",
    difficulty: "MEDIUM",
    question:
      "As precauções baseadas em transmissão incluem:",
    options: [
      "Apenas precaução de contato",
      "Contato, gotículas e aerossóis",
      "Apenas precaução aerossol",
      "Precauções padrão e de contato exclusivamente",
    ],
    correctAnswerIndex: 1,
    explanation:
      "As precauções baseadas em transmissão são: precaução de contato (ex.: MRSA, norovírus), precaução de gotículas (ex.: influenza, meningite meningocócica) e precaução aerossol (ex.: tuberculose, SARS-CoV-2 em procedimentos geradores de aerossóis).",
    xp: 25,
  },
  {
    id: "esp-9",
    category: "CONHECIMENTOS_ESPECIFICOS",
    difficulty: "MEDIUM",
    question:
      "A higienização das mãos com preparação alcoólica (gel ou solução) é indicada quando:",
    options: [
      "As mãos estiverem visivelmente sujas",
      "Após contato com pacientes e superfícies próximas, e as mãos não estiverem visivelmente sujas",
      "Apenas antes de procedimentos assépticos",
      "Sempre que houver disponibilidade do produto",
    ],
    correctAnswerIndex: 1,
    explanation:
      "A OMS e os protocolos vigentes em 2026 indicam higienização com álcool quando as mãos não estiverem visivelmente sujas. Se sujas, deve-se fazer lavagem com água e sabão. O álcool é eficaz na redução da carga microbiana em situações de rotina.",
    xp: 25,
  },
  {
    id: "esp-10",
    category: "CONHECIMENTOS_ESPECIFICOS",
    difficulty: "MEDIUM",
    question:
      "Na administração de dieta enteral por sonda, a posição recomendada do paciente durante e após a infusão é:",
    options: [
      "Decúbito ventral",
      "Decúbito dorsal horizontal",
      "Semidecúbito (elevação de 30° a 45°)",
      "Posição ortostática",
    ],
    correctAnswerIndex: 2,
    explanation:
      "O paciente deve permanecer em semidecúbito (30° a 45°) durante e por pelo menos 30 a 60 minutos após a infusão de dieta enteral, reduzindo o risco de aspiração pulmonar e refluxo.",
    xp: 25,
  },
  {
    id: "esp-11",
    category: "CONHECIMENTOS_ESPECIFICOS",
    difficulty: "HARD",
    question:
      "Em relação à dor como quinto sinal vital e suas escalas de avaliação, assinale a alternativa correta:",
    options: [
      "A escala numérica deve ser aplicada apenas em adultos conscientes",
      "A escala de Faces (Wong-Baker) é adequada para avaliação em crianças e idosos com dificuldade de comunicação",
      "A dor deve ser avaliada apenas quando o paciente relata",
      "Não há necessidade de documentar a avaliação da dor no prontuário",
    ],
    correctAnswerIndex: 1,
    explanation:
      "A escala de Faces (Wong-Baker) e variantes visuoanalógicas são úteis para crianças, idosos e pessoas com dificuldade de comunicação verbal. A dor deve ser rastreada sistematicamente e registrada no prontuário como quinto sinal vital.",
    xp: 50,
  },
  {
    id: "esp-12",
    category: "CONHECIMENTOS_ESPECIFICOS",
    difficulty: "HARD",
    question:
      "No pré-operatório, o checklist cirúrgico (segurança cirúrgica da OMS) deve ser aplicado:",
    options: [
      "Apenas antes da indução anestésica",
      "Em três momentos: antes da indução, antes da incisão e antes da saída do paciente da sala",
      "Somente pelo cirurgião",
      "Apenas em cirurgias de grande porte",
    ],
    correctAnswerIndex: 1,
    explanation:
      "O protocolo de cirurgia segura da OMS prevê o checklist em três momentos: antes da indução anestésica (sign-in), antes da incisão (time-out) e antes da saída do paciente da sala (sign-out), envolvendo toda a equipe.",
    xp: 50,
  },
  {
    id: "esp-13",
    category: "CONHECIMENTOS_ESPECIFICOS",
    difficulty: "HARD",
    question:
      "Em emergências com suspeita de AVE (Acidente Vascular Encefálico), a escala utilizada para triagem rápida em serviços de urgência é:",
    options: [
      "APACHE II",
      "Escala de Glasgow",
      "Escala de Cincinnati ou FAST",
      "Escala de Coma de Glasgow exclusivamente",
    ],
    correctAnswerIndex: 2,
    explanation:
      "A escala de Cincinnati (Face-Arm-Speech-Time - FAST) é amplamente utilizada para triagem rápida de AVE em serviços de urgência, auxiliando na identificação precoce e ativação do protocolo de acidente vascular cerebral.",
    xp: 50,
  },
  {
    id: "esp-14",
    category: "CONHECIMENTOS_ESPECIFICOS",
    difficulty: "EASY",
    question:
      "O Programa Nacional de Imunização (PNI) no Brasil é responsável por:",
    options: [
      "Apenas vacinas infantis",
      "Calendários vacinais para todas as faixas etárias e grupos especiais",
      "Apenas vacinas de campanha",
      "Controle de medicamentos essenciais",
    ],
    correctAnswerIndex: 1,
    explanation:
      "O PNI, gerenciado pelo Ministério da Saúde, oferece calendários vacinais para criança, adolescente, adulto, idoso, gestante e grupos especiais, além de campanhas e imunização ocupacional, conforme normativas vigentes em 2026.",
    xp: 10,
  },
  {
    id: "esp-15",
    category: "CONHECIMENTOS_ESPECIFICOS",
    difficulty: "EASY",
    question:
      "A notificação compulsória de violência contra criança, adolescente, mulher e idoso está prevista em:",
    options: [
      "Apenas no Estatuto da Criança e do Adolescente",
      "Em normativas do Ministério da Saúde e portarias que estabelecem a ficha de notificação",
      "Somente em casos de violência física",
      "Apenas para profissionais médicos",
    ],
    correctAnswerIndex: 1,
    explanation:
      "A notificação compulsória de violência interpessoal/autoprovocada é obrigatória para todos os profissionais de saúde, conforme portarias do Ministério da Saúde e fluxos da rede de proteção, independentemente do tipo de violência.",
    xp: 10,
  },
  {
    id: "esp-16",
    category: "CONHECIMENTOS_ESPECIFICOS",
    difficulty: "MEDIUM",
    question:
      "Após acidente com material perfurocortante, a conduta imediata inclui:",
    options: [
      "Apenas lavagem com água e sabão",
      "Lavagem da área com água e sabão, expressão da ferida e busca de atendimento para avaliação e profilaxia",
      "Aplicar álcool direto na ferida",
      "Não é necessário notificar o acidente",
    ],
    correctAnswerIndex: 1,
    explanation:
      "A conduta pós-exposição preconiza: lavagem da área com água e sabão (sem esfregar vigorosamente), expressão suave da ferida para sangramento, e busca imediata de atendimento para avaliação de risco e profilaxia (quando indicado). A notificação ocupacional é obrigatória.",
    xp: 25,
  },
  {
    id: "esp-17",
    category: "CONHECIMENTOS_ESPECIFICOS",
    difficulty: "MEDIUM",
    question:
      "O sistema de informação utilizado para notificação de agravos e doenças de notificação compulsória é o:",
    options: ["SISREG", "SINAN", "e-SUS", "SI-PNI"],
    correctAnswerIndex: 1,
    explanation:
      "O SINAN (Sistema de Informação de Agravos de Notificação) é o sistema nacional para notificação de doenças e agravos de notificação compulsória. O SI-PNI é específico para imunização; SIM e SINASC são para mortalidade e nascidos vivos.",
    xp: 25,
  },
  {
    id: "esp-18",
    category: "CONHECIMENTOS_ESPECIFICOS",
    difficulty: "EASY",
    question:
      "Coberturas como alginato e hidrocolóide são indicadas principalmente para:",
    options: [
      "Feridas superficiais e secas",
      "Feridas com exsudato e em diferentes fases de cicatrização",
      "Apenas feridas infectadas",
      "Qualquer tipo de ferida sem avaliação prévia",
    ],
    correctAnswerIndex: 1,
    explanation:
      "O alginato é indicado para feridas com exsudato moderado a abundante; o hidrocolóide para feridas com exsudato leve a moderado e ambiente úmido. A escolha deve considerar a fase da ferida e o tipo de exsudato.",
    xp: 10,
  },
  {
    id: "esp-19",
    category: "CONHECIMENTOS_ESPECIFICOS",
    difficulty: "HARD",
    question:
      "Na central de material e esterilização (CME), o processo de esterilização por autoclave a vapor saturado sob pressão:",
    options: [
      "É efetivo apenas para materiais termossensíveis",
      "Requer temperatura de 121°C ou 134°C, conforme ciclo, e tempo adequado de exposição",
      "Substitui completamente a necessidade de limpeza prévia",
      "Pode ser realizado em qualquer recipiente fechado",
    ],
    correctAnswerIndex: 1,
    explanation:
      "A autoclavação por vapor saturado sob pressão utiliza geralmente 121°C por 15-30 min ou 134°C por 3-5 min. A limpeza prévia é essencial; a esterilização só é eficaz com superfícies limpas e embalagens adequadas.",
    xp: 50,
  },
  {
    id: "esp-20",
    category: "CONHECIMENTOS_ESPECIFICOS",
    difficulty: "EASY",
    question:
      "Na assistência ao paciente em crise convulsiva, a conduta do técnico de enfermagem inclui:",
    options: [
      "Segurar o paciente e introduzir objeto na boca para evitar mordedura na língua",
      "Proteger a cabeça, lateralizar se possível, afastar objetos e observar duração e características da crise",
      "Administrar medicamento antiepiléptico imediatamente",
      "Imobilizar completamente o paciente",
    ],
    correctAnswerIndex: 1,
    explanation:
      "Não se deve introduzir objetos na boca nem imobilizar forçosamente. A conduta é: proteger a cabeça, lateralizar o paciente para prevenir aspiração, afastar objetos que possam causar traumatismo e observar/registrar a crise.",
    xp: 10,
  },
];

