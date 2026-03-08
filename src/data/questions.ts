import { Question } from "@/types";

export const QUESTIONS: Question[] = [
  // === LEGISLAÇÃO — Lei Orgânica de Blumenau/SC ===

  // --- EASY ---
  {
    id: "leg-1",
    category: "LEGISLACAO",
    difficulty: "EASY",
    question:
      "Quem promulga a Lei Orgânica do Município de Blumenau/SC?",
    options: [
      "O Prefeito Municipal",
      "Os Vereadores eleitos integrantes do Poder Legislativo",
      "O Governador do Estado de Santa Catarina",
      "O Tribunal de Contas do Estado",
    ],
    correctAnswerIndex: 1,
    explanation:
      "Conforme o Preâmbulo da Lei Orgânica, 'a Comunidade Blumenauense… promulga e adota, através dos Vereadores eleitos e integrantes do Poder Legislativo, a seguinte Lei Orgânica do Município de Blumenau'.",
    xp: 10,
  },
  {
    id: "leg-2",
    category: "LEGISLACAO",
    difficulty: "EASY",
    question:
      "O Preâmbulo da Lei Orgânica de Blumenau invoca a proteção de qual entidade?",
    options: [
      "Estado de Santa Catarina",
      "União Federal",
      "Deus",
      "Supremo Tribunal Federal",
    ],
    correctAnswerIndex: 2,
    explanation:
      "O Preâmbulo afirma que 'a Comunidade Blumenauense, sob a proteção de Deus e consciente da sua responsabilidade, promulga e adota… a seguinte Lei Orgânica'.",
    xp: 10,
  },
  {
    id: "leg-3",
    category: "LEGISLACAO",
    difficulty: "EASY",
    question:
      "Qual é o caráter possível das Frentes Parlamentares na Câmara Municipal de Blumenau?",
    options: [
      "Apenas permanente",
      "Apenas temporário",
      "Permanente ou temporário",
      "Somente após aprovação do Prefeito",
    ],
    correctAnswerIndex: 2,
    explanation:
      "O Art. 20-A da Lei Orgânica dispõe que 'a Câmara Municipal poderá ter Frentes Parlamentares, de caráter permanente ou temporário', criadas por Decreto Legislativo.",
    xp: 10,
  },
  {
    id: "leg-4",
    category: "LEGISLACAO",
    difficulty: "EASY",
    question:
      "Qual é a composição mínima de vereadores exigida para se constituir uma Frente Parlamentar em Blumenau?",
    options: [
      "1/4 dos membros da Câmara",
      "1/5 dos membros da Câmara",
      "1/3 dos membros da Câmara",
      "Metade dos membros da Câmara",
    ],
    correctAnswerIndex: 1,
    explanation:
      "Segundo o §1º do Art. 20-A, 'a Frente Parlamentar será composta por, no mínimo, 1/5 (um quinto) e, no máximo, 1/3 (um terço) dos membros da Câmara'.",
    xp: 10,
  },
  {
    id: "leg-5",
    category: "LEGISLACAO",
    difficulty: "EASY",
    question:
      "Qual instrumento normativo o Executivo de Blumenau utiliza para o provimento e vacância de cargos públicos?",
    options: ["Decreto", "Lei Ordinária", "Portaria", "Resolução"],
    correctAnswerIndex: 2,
    explanation:
      "Conforme a Lei Orgânica, o Prefeito age por portaria quando se trata de 'provimento e vacância de cargos públicos e demais atos de gestão de pessoal'.",
    xp: 10,
  },
  {
    id: "leg-6",
    category: "LEGISLACAO",
    difficulty: "EASY",
    question:
      "Por qual instrumento normativo o Executivo de Blumenau cria, altera ou extingue órgãos da Prefeitura quando autorizado em lei?",
    options: ["Portaria", "Resolução", "Decreto", "Circular administrativa"],
    correctAnswerIndex: 2,
    explanation:
      "A Lei Orgânica prevê que o Prefeito age por decreto para 'criação, alteração e extinção de órgãos da Prefeitura, quando autorizadas em lei'.",
    xp: 10,
  },
  {
    id: "leg-7",
    category: "LEGISLACAO",
    difficulty: "EASY",
    question:
      "Qual órgão emite o parecer prévio sobre as contas do Município de Blumenau?",
    options: [
      "Ministério Público Estadual",
      "Câmara Municipal",
      "Tribunal de Contas",
      "Poder Judiciário",
    ],
    correctAnswerIndex: 2,
    explanation:
      "A Lei Orgânica determina que, vencido o prazo de exame público, 'as contas e as questões levantadas serão enviadas ao Tribunal de Contas para emissão de parecer prévio'.",
    xp: 10,
  },
  {
    id: "leg-8",
    category: "LEGISLACAO",
    difficulty: "EASY",
    question:
      "Qual é o prazo que a autoridade responsável tem para prestar esclarecimentos à Comissão Legislativa Permanente diante de indícios de despesas não autorizadas?",
    options: ["2 dias", "3 dias", "5 dias", "15 dias"],
    correctAnswerIndex: 2,
    explanation:
      "O Art. 49 da Lei Orgânica estabelece que 'a Comissão Legislativa Permanente competente… poderá solicitar da autoridade responsável que, no prazo de 5 (cinco) dias, preste os esclarecimentos'.",
    xp: 10,
  },

  // --- MEDIUM ---
  {
    id: "leg-9",
    category: "LEGISLACAO",
    difficulty: "MEDIUM",
    question:
      "Após receber o parecer prévio do Tribunal de Contas, qual é o prazo para a Comissão Legislativa Permanente emitir seu parecer sobre as contas municipais?",
    options: ["5 dias", "10 dias", "15 dias", "30 dias"],
    correctAnswerIndex: 2,
    explanation:
      "O §3º da Lei Orgânica determina que 'recebido o parecer prévio a Comissão Legislativa Permanente responsável dará sobre ele e sobre as contas seu parecer em 15 (quinze) dias'.",
    xp: 25,
  },
  {
    id: "leg-10",
    category: "LEGISLACAO",
    difficulty: "MEDIUM",
    question:
      "Após emitir seu parecer sobre as contas municipais, para onde a Comissão Legislativa Permanente encaminha o processo?",
    options: [
      "Diretamente ao Prefeito para ciência",
      "Ao Tribunal de Contas para revisão",
      "À Mesa Diretora e ao Plenário para deliberação",
      "Ao Ministério Público para acompanhamento",
    ],
    correctAnswerIndex: 2,
    explanation:
      "O §3º determina que a Comissão encaminha o parecer 'à Mesa Diretora e ao Plenário para deliberação'.",
    xp: 25,
  },
  {
    id: "leg-11",
    category: "LEGISLACAO",
    difficulty: "MEDIUM",
    question:
      "Segundo a Lei Orgânica de Blumenau, as Frentes Parlamentares têm a finalidade de firmar parcerias com quais entidades?",
    options: [
      "Apenas órgãos do Governo Federal",
      "Exclusivamente empresas privadas e multinacionais",
      "Movimento Social Organizado, ONGs e Órgãos Governamentais",
      "Somente partidos políticos registrados no TSE",
    ],
    correctAnswerIndex: 2,
    explanation:
      "O Art. 20-A estabelece que as Frentes Parlamentares firmam parcerias com o 'Movimento Social Organizado, Organizações Não Governamentais e Órgãos Governamentais para a aglutinação de forças necessárias ao enfrentamento de problemas sociais determinados'.",
    xp: 25,
  },
  {
    id: "leg-12",
    category: "LEGISLACAO",
    difficulty: "MEDIUM",
    question:
      "Qual instrumento cria a Frente Parlamentar na Câmara Municipal de Blumenau e define suas competências e atribuições?",
    options: [
      "Resolução da Mesa Diretora",
      "Decreto Legislativo",
      "Portaria do Presidente da Câmara",
      "Emenda à Lei Orgânica",
    ],
    correctAnswerIndex: 1,
    explanation:
      "O §1º do Art. 20-A prevê que as competências e atribuições da Frente Parlamentar são 'definidas no Decreto Legislativo de que resultar a sua criação'.",
    xp: 25,
  },
  {
    id: "leg-13",
    category: "LEGISLACAO",
    difficulty: "MEDIUM",
    question:
      "Segundo a Lei Orgânica de Blumenau, qualquer contribuinte pode examinar as contas municipais e questionar a sua legitimidade. Essa prerrogativa está prevista com qual finalidade?",
    options: [
      "Permitir que contribuintes reduzam seus impostos",
      "Garantir o controle social sobre a gestão dos recursos públicos",
      "Autorizar a revisão judicial automática das contas",
      "Substituir a função fiscalizatória do Tribunal de Contas",
    ],
    correctAnswerIndex: 1,
    explanation:
      "A Lei Orgânica dispõe que as contas ficarão 'a disposição de qualquer contribuinte para exame e apreciação, o qual poderá questionar-lhes a legitimidade, na forma da lei', expressando o princípio do controle social.",
    xp: 25,
  },
  {
    id: "leg-14",
    category: "LEGISLACAO",
    difficulty: "MEDIUM",
    question:
      "Qual órgão interno da Câmara de Blumenau dispõe sobre o procedimento do exame público das contas municipais?",
    options: [
      "A Constituição Estadual de Santa Catarina",
      "O Regimento Interno da Câmara",
      "A Lei de Responsabilidade Fiscal",
      "O Tribunal de Contas do Estado",
    ],
    correctAnswerIndex: 1,
    explanation:
      "O §1º da Lei Orgânica determina que 'o Regimento Interno da Câmara disporá sobre o procedimento do exame público das contas municipais, observadas as normas desta Lei Orgânica'.",
    xp: 25,
  },
  {
    id: "leg-15",
    category: "LEGISLACAO",
    difficulty: "MEDIUM",
    question:
      "A Câmara Municipal de Blumenau tem competência para receber demandas de quais tipos de entidades da sociedade civil?",
    options: [
      "Apenas sindicatos de trabalhadores urbanos",
      "Somente empresas do setor privado com CNPJ ativo",
      "Sindicatos, órgãos de classe, associações e ONGs",
      "Exclusivamente partidos políticos com representação parlamentar",
    ],
    correctAnswerIndex: 2,
    explanation:
      "A Lei Orgânica prevê que a Câmara atua sobre demandas 'encaminhadas por entidades civis, como sindicatos, órgãos de classe, associações e organizações não-governamentais (ONG`s)'.",
    xp: 25,
  },
  {
    id: "leg-16",
    category: "LEGISLACAO",
    difficulty: "MEDIUM",
    question:
      "O Preâmbulo da Lei Orgânica de Blumenau enumera valores a serem assegurados pela comunidade. Qual dos seguintes NÃO está expressamente mencionado?",
    options: [
      "Repúdio ao terrorismo e à violência",
      "Proteção ao meio ambiente",
      "Pluralismo político",
      "Monopólio estatal dos serviços essenciais",
    ],
    correctAnswerIndex: 3,
    explanation:
      "O Preâmbulo menciona autonomia municipal, direitos sociais e individuais, liberdade, segurança, bem-estar, desenvolvimento, igualdade, justiça, dignidade da pessoa humana, valores sociais do trabalho e da livre iniciativa, pluralismo político, defesa da democracia, proteção ao meio ambiente e repúdio ao terrorismo, à violência, ao tóxico e ao racismo. Monopólio estatal não é mencionado.",
    xp: 25,
  },

  // --- HARD ---
  {
    id: "leg-17",
    category: "LEGISLACAO",
    difficulty: "HARD",
    question:
      "O Prefeito de Blumenau emite uma portaria criando um novo órgão da administração direta sem autorização legislativa. À luz da Lei Orgânica, esse ato é:",
    options: [
      "Válido, pois portaria e decreto têm equivalência hierárquica",
      "Válido, se referendado pela Câmara em 30 dias",
      "Inválido: o instrumento correto seria decreto E ainda exigiria autorização em lei",
      "Inválido apenas quanto ao instrumento, podendo ser ratificado por decreto posterior",
    ],
    correctAnswerIndex: 2,
    explanation:
      "A Lei Orgânica determina que a criação de órgãos da Prefeitura se dá por decreto 'quando autorizadas em lei'. Assim, o ato é duplamente viciado: utiliza instrumento impróprio (portaria, destinada a atos de pessoal) e carece de autorização legislativa.",
    xp: 50,
  },
  {
    id: "leg-18",
    category: "LEGISLACAO",
    difficulty: "HARD",
    question:
      "Diante de indícios de despesas não autorizadas, a Comissão Legislativa Permanente solicita esclarecimentos. A autoridade não os presta no prazo legal. Qual consequência está expressamente prevista na Lei Orgânica de Blumenau?",
    options: [
      "Aprovação tácita da despesa pelo decurso do prazo",
      "Afastamento imediato e cautelar do gestor responsável",
      "A Comissão pode adotar providências para apuração e responsabilização",
      "Remessa obrigatória ao Ministério Público em 48 horas",
    ],
    correctAnswerIndex: 2,
    explanation:
      "O Art. 49 prevê que, 'não prestados os esclarecimentos ou considerados estes insuficientes, a Comissão Legislativa Permanente' pode adotar as providências cabíveis para responsabilização. A lei não prevê aprovação tácita nem afastamento imediato automático.",
    xp: 50,
  },
  {
    id: "leg-19",
    category: "LEGISLACAO",
    difficulty: "HARD",
    question:
      "Considere a seguinte afirmação: 'A Lei Orgânica de Blumenau pode ser alterada por lei ordinária de iniciativa do Prefeito, desde que aprovada por 2/3 dos vereadores.' Essa afirmação é:",
    options: [
      "Verdadeira, pois o quórum qualificado supre a diferença de instrumento",
      "Falsa, pois a Lei Orgânica somente pode ser modificada por Emenda à Lei Orgânica",
      "Verdadeira, pois leis ordinárias têm eficácia equivalente quando aprovadas por maioria qualificada",
      "Falsa apenas em relação às disposições sobre o Poder Legislativo",
    ],
    correctAnswerIndex: 1,
    explanation:
      "A Lei Orgânica Municipal, por ser a norma constitucional do Município, somente pode ser modificada por Emenda à Lei Orgânica, jamais por lei ordinária — independentemente do quórum de aprovação. O quórum não altera a natureza do instrumento normativo.",
    xp: 50,
  },
  {
    id: "leg-20",
    category: "LEGISLACAO",
    difficulty: "HARD",
    question:
      "O processo de controle das contas municipais em Blumenau envolve: exame público pelos contribuintes → envio ao TCE → parecer prévio → parecer da Comissão Legislativa em 15 dias → deliberação do Plenário. Esse fluxo ilustra a combinação de quais formas de controle?",
    options: [
      "Exclusivamente controle interno do Executivo",
      "Apenas controle externo pelo Tribunal de Contas",
      "Controle social (contribuintes), controle técnico-institucional (TCE) e controle político (Câmara)",
      "Controle judicial prévio e controle administrativo posterior",
    ],
    correctAnswerIndex: 2,
    explanation:
      "A Lei Orgânica combina: (1) controle social — qualquer contribuinte pode examinar e questionar as contas; (2) controle técnico-institucional — o Tribunal de Contas emite parecer prévio; e (3) controle político — a Câmara Municipal delibera sobre as contas com base nos pareceres recebidos.",
    xp: 50,
  },
];
