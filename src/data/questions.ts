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

  // --- EASY (leg-21 a leg-32) ---
  {
    id: "leg-21",
    category: "LEGISLACAO",
    difficulty: "EASY",
    question:
      "Segundo a Lei Orgânica de Blumenau, qual é a finalidade da Câmara Municipal ao promover estudos e debates?",
    options: [
      "Elaborar o orçamento anual do Município",
      "Acompanhar temas jurídicos, éticos e sociais de interesse da comunidade",
      "Fiscalizar exclusivamente as finanças do Executivo",
      "Nomear os secretários municipais",
    ],
    correctAnswerIndex: 1,
    explanation:
      "A Lei Orgânica prevê que a Câmara Municipal tem competência para 'promover estudos e debates sobre temas jurídicos, éticos, sociais de interesse da comunidade', cumprindo função representativa e de mediação social.",
    xp: 10,
  },
  {
    id: "leg-22",
    category: "LEGISLACAO",
    difficulty: "EASY",
    question:
      "Na Lei Orgânica de Blumenau, qual instrumento normativo o Prefeito utiliza para aprovação dos regulamentos e regimentos dos órgãos da administração direta?",
    options: ["Portaria", "Resolução", "Decreto", "Lei Ordinária"],
    correctAnswerIndex: 2,
    explanation:
      "A Lei Orgânica establece que compete ao Prefeito, por decreto, a 'aprovação de regulamentos e regimentos dos órgãos da administração direta', disciplinando seu funcionamento interno.",
    xp: 10,
  },
  {
    id: "leg-23",
    category: "LEGISLACAO",
    difficulty: "EASY",
    question:
      "Qual é a hierarquia da Lei Orgânica Municipal em relação às demais leis do Município de Blumenau?",
    options: [
      "É equivalente a uma lei ordinária municipal",
      "É a norma constitucional do Município, de hierarquia superior às demais leis locais",
      "Está abaixo das leis complementares municipais",
      "Tem a mesma hierarquia dos decretos do Prefeito",
    ],
    correctAnswerIndex: 1,
    explanation:
      "A Lei Orgânica é a norma constitucional do Município, situada no topo do ordenamento jurídico local. Todas as demais leis, decretos e atos administrativos municipais devem observar e respeitar seus preceitos.",
    xp: 10,
  },
  {
    id: "leg-24",
    category: "LEGISLACAO",
    difficulty: "EASY",
    question:
      "De acordo com a Lei Orgânica de Blumenau, o Executivo municipal pode fixar preços de serviços públicos prestados diretamente pelo Município mediante qual instrumento?",
    options: [
      "Portaria do Secretário responsável",
      "Lei Complementar da Câmara",
      "Decreto do Prefeito",
      "Resolução conjunta Executivo-Legislativo",
    ],
    correctAnswerIndex: 2,
    explanation:
      "A Lei Orgânica prevê que compete ao Prefeito, por decreto, a 'fixação e alteração dos preços dos serviços públicos prestados pelo Município e aprovação dos preços dos serviços concedidos ou autorizados'.",
    xp: 10,
  },
  {
    id: "leg-25",
    category: "LEGISLACAO",
    difficulty: "EASY",
    question:
      "Segundo a Lei Orgânica de Blumenau, a permissão para exploração de serviços públicos e uso de bens municipais autorizados em lei é formalizada por qual instrumento?",
    options: [
      "Portaria do Secretário Municipal",
      "Lei Complementar",
      "Decreto do Prefeito",
      "Resolução da Câmara Municipal",
    ],
    correctAnswerIndex: 2,
    explanation:
      "A Lei Orgânica atribui ao Prefeito a competência de, por decreto, conceder 'permissão para exploração de serviços públicos e para uso de bens municipais, autorizados em lei'.",
    xp: 10,
  },
  {
    id: "leg-26",
    category: "LEGISLACAO",
    difficulty: "EASY",
    question:
      "O Preâmbulo da Lei Orgânica de Blumenau menciona o 'repúdio ao tóxico'. No contexto municipal, esse valor representa comprometimento com:",
    options: [
      "Controle de substâncias químicas industriais",
      "Fiscalização de agrotóxicos na agricultura",
      "Combate ao uso e ao tráfico de drogas ilícitas",
      "Regulamentação de alimentos ultraprocessados",
    ],
    correctAnswerIndex: 2,
    explanation:
      "O termo 'tóxico' no Preâmbulo da Lei Orgânica expressa o repúdio da comunidade blumenauense ao uso e ao tráfico de drogas ilícitas, valores que fundamentam as políticas públicas de saúde e segurança do Município.",
    xp: 10,
  },
  {
    id: "leg-27",
    category: "LEGISLACAO",
    difficulty: "EASY",
    question:
      "Qual é o objetivo principal das Frentes Parlamentares conforme a Lei Orgânica de Blumenau?",
    options: [
      "Substituir as Comissões Legislativas Permanentes",
      "Aglutinar forças para enfrentamento de problemas sociais determinados",
      "Fiscalizar diretamente o orçamento do Executivo",
      "Elaborar projetos de lei de iniciativa popular",
    ],
    correctAnswerIndex: 1,
    explanation:
      "O Art. 20-A estabelece que as Frentes Parlamentares têm por finalidade 'a aglutinação de forças necessárias ao enfrentamento de problemas sociais determinados', por meio de parcerias com o Movimento Social Organizado, ONGs e Órgãos Governamentais.",
    xp: 10,
  },
  {
    id: "leg-28",
    category: "LEGISLACAO",
    difficulty: "EASY",
    question:
      "De acordo com a Lei Orgânica de Blumenau, quem pode examinar as contas municipais e questionar sua legitimidade?",
    options: [
      "Apenas vereadores e o Prefeito",
      "Somente auditores do Tribunal de Contas",
      "Qualquer contribuinte",
      "Exclusivamente advogados habilitados na OAB",
    ],
    correctAnswerIndex: 2,
    explanation:
      "A Lei Orgânica garante que as contas ficarão 'a disposição de qualquer contribuinte para exame e apreciação, o qual poderá questionar-lhes a legitimidade, na forma da lei', assegurando o controle social.",
    xp: 10,
  },
  {
    id: "leg-29",
    category: "LEGISLACAO",
    difficulty: "EASY",
    question:
      "Segundo a Lei Orgânica, qual instrumento normativo é usado pelo Executivo de Blumenau para a aprovação dos estatutos dos órgãos da administração descentralizada?",
    options: ["Portaria", "Decreto", "Lei Ordinária", "Instrução Normativa"],
    correctAnswerIndex: 1,
    explanation:
      "A Lei Orgânica prevê que compete ao Prefeito, por decreto, a 'aprovação dos estatutos dos órgãos da administração descentralizada', regulando o funcionamento das entidades da administração indireta.",
    xp: 10,
  },
  {
    id: "leg-30",
    category: "LEGISLACAO",
    difficulty: "EASY",
    question:
      "O Preâmbulo da Lei Orgânica de Blumenau assegura a 'defesa da democracia'. No contexto municipal, isso implica:",
    options: [
      "Limitar a participação política ao período eleitoral",
      "Fundamentar a participação popular nas decisões municipais",
      "Autorizar intervenção estadual em disputas eleitorais locais",
      "Restringir a atuação de partidos de oposição na Câmara",
    ],
    correctAnswerIndex: 1,
    explanation:
      "A defesa da democracia, como valor do Preâmbulo, fundamenta mecanismos de participação popular nas decisões municipais, como audiências públicas, iniciativa popular de lei e o próprio controle das contas por contribuintes.",
    xp: 10,
  },
  {
    id: "leg-31",
    category: "LEGISLACAO",
    difficulty: "EASY",
    question:
      "Conforme a Lei Orgânica de Blumenau, as normas de efeitos externos não privativas de lei são estabelecidas pelo Executivo municipal mediante:",
    options: [
      "Portaria do Secretário competente",
      "Lei Ordinária da Câmara",
      "Decreto do Prefeito",
      "Instrução Normativa Secretarial",
    ],
    correctAnswerIndex: 2,
    explanation:
      "A Lei Orgânica prevê que o Prefeito age por decreto para o 'estabelecimento de normas de efeitos externos, não privativas da lei', abrangendo atos que afetam diretamente os direitos e obrigações dos cidadãos.",
    xp: 10,
  },
  {
    id: "leg-32",
    category: "LEGISLACAO",
    difficulty: "EASY",
    question:
      "Segundo a Lei Orgânica de Blumenau, qual é o instrumento normativo utilizado pelo Executivo para aprovação de planos de trabalho dos órgãos da administração direta?",
    options: ["Portaria", "Decreto", "Resolução", "Circular"],
    correctAnswerIndex: 1,
    explanation:
      "A Lei Orgânica atribui ao Prefeito a competência de, por decreto, realizar a 'aprovação de planos de trabalho dos órgãos da administração direta', orientando as ações de cada órgão municipal.",
    xp: 10,
  },

  // --- MEDIUM (leg-33 a leg-44) ---
  {
    id: "leg-33",
    category: "LEGISLACAO",
    difficulty: "MEDIUM",
    question:
      "A Lei Orgânica de Blumenau prevê que o Executivo pode, por decreto, realizar a 'criação, extinção, declaração ou modificação de direitos dos administrados, não privativas de lei'. Qual princípio constitucional limita esse poder?",
    options: [
      "Princípio da eficiência administrativa",
      "Princípio da legalidade, que exige lei para restringir direitos individuais",
      "Princípio da impessoalidade na administração pública",
      "Princípio da supremacia do interesse público sobre o privado",
    ],
    correctAnswerIndex: 1,
    explanation:
      "Embora a Lei Orgânica autorize o Executivo a criar ou modificar direitos dos administrados por decreto quando não privativo de lei, o princípio da legalidade (CF/88, art. 5º, II) impõe que ninguém seja obrigado a fazer ou deixar de fazer algo senão em virtude de lei, limitando esse poder regulamentar.",
    xp: 25,
  },
  {
    id: "leg-34",
    category: "LEGISLACAO",
    difficulty: "MEDIUM",
    question:
      "O §3º da Lei Orgânica de Blumenau determina que a Comissão Legislativa Permanente encaminhe seu parecer sobre as contas 'à Mesa Diretora e ao Plenário para deliberação'. Qual a consequência se o Plenário rejeitar as contas?",
    options: [
      "O Prefeito é automaticamente afastado do cargo",
      "O processo é encaminhado ao Tribunal de Contas para novas providências",
      "Pode ensejar responsabilização político-administrativa do gestor",
      "As contas são automaticamente aprovadas na sessão seguinte",
    ],
    correctAnswerIndex: 2,
    explanation:
      "A rejeição das contas pelo Plenário da Câmara pode ensejar responsabilização político-administrativa do gestor, sendo possível abertura de processo por improbidade administrativa ou representação ao Ministério Público, conforme a gravidade das irregularidades apontadas.",
    xp: 25,
  },
  {
    id: "leg-35",
    category: "LEGISLACAO",
    difficulty: "MEDIUM",
    question:
      "Segundo a Lei Orgânica, o Prefeito de Blumenau define as competências dos órgãos e atribuições dos servidores da Prefeitura 'não privativas de lei'. Isso significa que:",
    options: [
      "O Prefeito pode criar cargos por decreto sem autorização legislativa",
      "Apenas as atribuições não reservadas à lei podem ser reguladas por decreto",
      "A Câmara Municipal não pode legislar sobre atribuições dos servidores",
      "Os servidores não precisam de lei para serem demitidos",
    ],
    correctAnswerIndex: 1,
    explanation:
      "A expressão 'não privativas de lei' significa que o Prefeito somente pode regulamentar por decreto as matérias que a Constituição Federal, a Constituição Estadual e a própria Lei Orgânica não reservaram exclusivamente à lei. Matérias como criação de cargos e vencimentos exigem lei.",
    xp: 25,
  },
  {
    id: "leg-36",
    category: "LEGISLACAO",
    difficulty: "MEDIUM",
    question:
      "A Lei Orgânica de Blumenau prevê que as Frentes Parlamentares firmam parcerias para 'aglutinação de forças necessárias ao enfrentamento de problemas sociais determinados'. Qual é a natureza jurídica desse instrumento?",
    options: [
      "São órgãos permanentes da estrutura da Câmara Municipal",
      "São grupos informais sem respaldo normativo",
      "São organismos criados por Decreto Legislativo, de caráter permanente ou temporário",
      "São comissões especiais com poderes investigativos plenos",
    ],
    correctAnswerIndex: 2,
    explanation:
      "Segundo o Art. 20-A, as Frentes Parlamentares são criadas por Decreto Legislativo, com caráter permanente ou temporário, e suas competências são definidas no próprio decreto de criação, diferindo das Comissões Legislativas Permanentes.",
    xp: 25,
  },
  {
    id: "leg-37",
    category: "LEGISLACAO",
    difficulty: "MEDIUM",
    question:
      "O Art. 49 da Lei Orgânica de Blumenau menciona 'despesas não autorizadas, ainda que sob forma de investimentos, não programados ou de subsídios não aprovados'. Qual princípio da gestão pública esse artigo protege?",
    options: [
      "Princípio da eficiência",
      "Princípio da legalidade orçamentária",
      "Princípio da publicidade",
      "Princípio da impessoalidade",
    ],
    correctAnswerIndex: 1,
    explanation:
      "O Art. 49 protege o princípio da legalidade orçamentária, segundo o qual nenhuma despesa pode ser realizada sem prévia autorização legislativa por meio da Lei Orçamentária Anual (LOA) ou lei específica, conforme exigido pela Lei de Responsabilidade Fiscal e pela Constituição Federal.",
    xp: 25,
  },
  {
    id: "leg-38",
    category: "LEGISLACAO",
    difficulty: "MEDIUM",
    question:
      "A Lei Orgânica de Blumenau prevê que o Regimento Interno da Câmara disporá sobre o procedimento do exame público das contas. Esse instrumento deve observar:",
    options: [
      "Apenas as normas do Tribunal de Contas do Estado",
      "As normas da própria Lei Orgânica",
      "Exclusivamente a Lei de Responsabilidade Fiscal",
      "Os critérios definidos pelo Prefeito Municipal",
    ],
    correctAnswerIndex: 1,
    explanation:
      "O §1º da Lei Orgânica determina expressamente que 'o Regimento Interno da Câmara disporá sobre o procedimento do exame público das contas municipais, observadas as normas desta Lei Orgânica', garantindo conformidade com a norma constitucional municipal.",
    xp: 25,
  },
  {
    id: "leg-39",
    category: "LEGISLACAO",
    difficulty: "MEDIUM",
    question:
      "Segundo a Lei Orgânica de Blumenau, a Câmara Municipal tem competência para 'fiscalizar e acompanhar o cumprimento das leis aprovadas no município'. Essa função é denominada:",
    options: [
      "Função legislativa típica",
      "Função administrativa delegada",
      "Função fiscalizatória ou de controle externo",
      "Função jurisdicional supletiva",
    ],
    correctAnswerIndex: 2,
    explanation:
      "A competência de fiscalizar o cumprimento das leis é denominada função fiscalizatória ou de controle externo do Poder Legislativo sobre o Executivo, distinta da função legislativa (criação de leis) e da função administrativa.",
    xp: 25,
  },
  {
    id: "leg-40",
    category: "LEGISLACAO",
    difficulty: "MEDIUM",
    question:
      "A Lei Orgânica de Blumenau prevê que o Prefeito pode, por decreto, adotar 'medidas executórias do Plano Diretor'. Qual é a função principal do Plano Diretor no contexto municipal?",
    options: [
      "Definir exclusivamente a política tributária municipal",
      "Nortear o desenvolvimento urbano, territorial e ambiental do Município",
      "Regular apenas as obras públicas do Executivo",
      "Estabelecer o quadro de pessoal da Prefeitura",
    ],
    correctAnswerIndex: 1,
    explanation:
      "O Plano Diretor é o instrumento básico da política de desenvolvimento urbano do Município (CF/88, art. 182), norteando o uso e a ocupação do solo, o desenvolvimento territorial, ambiental e socioeconômico. As medidas executórias são implementadas por decreto do Prefeito.",
    xp: 25,
  },
  {
    id: "leg-41",
    category: "LEGISLACAO",
    difficulty: "MEDIUM",
    question:
      "A Lei Orgânica de Blumenau menciona que a Câmara recebe demandas de 'órgãos de classe'. Qual é um exemplo típico de órgão de classe no contexto de saúde?",
    options: [
      "Secretaria Municipal de Saúde",
      "Conselho Regional de Enfermagem (COREN)",
      "Ministério Público Estadual",
      "Tribunal Regional do Trabalho",
    ],
    correctAnswerIndex: 1,
    explanation:
      "Órgãos de classe são entidades que representam categorias profissionais, como o COREN (enfermagem), CRM (medicina) e CRF (farmácia). Essas entidades podem encaminhar demandas à Câmara Municipal conforme a Lei Orgânica de Blumenau.",
    xp: 25,
  },
  {
    id: "leg-42",
    category: "LEGISLACAO",
    difficulty: "MEDIUM",
    question:
      "Conforme a Lei Orgânica de Blumenau, após vencido o prazo de exame público das contas, estas são enviadas ao Tribunal de Contas. Em seguida, qual é a sequência correta do processo?",
    options: [
      "TCE emite parecer prévio → Câmara vota imediatamente → resultado publicado",
      "TCE emite parecer prévio → Comissão dá seu parecer em 15 dias → Plenário delibera",
      "Comissão emite parecer → TCE ratifica → Prefeito homologa",
      "TCE emite parecer → Prefeito responde em 5 dias → Câmara arquiva",
    ],
    correctAnswerIndex: 1,
    explanation:
      "A sequência prevista na Lei Orgânica é: (1) TCE emite parecer prévio; (2) Comissão Legislativa Permanente emite seu parecer sobre as contas em 15 dias; (3) encaminhamento à Mesa Diretora e ao Plenário para deliberação final.",
    xp: 25,
  },
  {
    id: "leg-43",
    category: "LEGISLACAO",
    difficulty: "MEDIUM",
    question:
      "A Lei Orgânica de Blumenau prevê que o Prefeito pode aprovar, por decreto, os estatutos dos órgãos da administração descentralizada. Qual é o limite desse poder regulamentar?",
    options: [
      "Pode criar a entidade descentralizada por decreto, sem necessidade de lei anterior",
      "Pode apenas regulamentar entidades já criadas por lei, sem contrariar a norma legal",
      "Pode estabelecer qualquer estrutura sem restrições normativas",
      "Está limitado apenas ao Plano Diretor Municipal",
    ],
    correctAnswerIndex: 1,
    explanation:
      "O poder regulamentar do Prefeito para aprovar estatutos das entidades descentralizadas é limitado: a criação da entidade exige lei, e o decreto deve respeitar os parâmetros legais. O decreto apenas complementa e organiza o que a lei determinou.",
    xp: 25,
  },
  {
    id: "leg-44",
    category: "LEGISLACAO",
    difficulty: "MEDIUM",
    question:
      "O Preâmbulo da Lei Orgânica de Blumenau assegura 'os valores sociais do trabalho e da livre iniciativa'. Essa combinação reflete qual princípio da ordem econômica?",
    options: [
      "Intervenção estatal máxima na economia municipal",
      "Equilíbrio entre proteção ao trabalhador e liberdade econômica",
      "Proibição de qualquer forma de monopólio privado",
      "Estatização obrigatória dos serviços essenciais",
    ],
    correctAnswerIndex: 1,
    explanation:
      "Essa combinação espelha o art. 1º, IV da CF/88, que eleva os valores sociais do trabalho e da livre iniciativa à condição de fundamentos da República. No âmbito municipal, isso impõe políticas que protejam trabalhadores sem sufocar a atividade econômica privada.",
    xp: 25,
  },

  // --- HARD (leg-45 a leg-50) ---
  {
    id: "leg-45",
    category: "LEGISLACAO",
    difficulty: "HARD",
    question:
      "Um Prefeito de Blumenau emite decreto fixando atribuições de servidores que são expressamente reservadas à lei pelo Estatuto dos Servidores Municipais. À luz da Lei Orgânica, esse decreto é:",
    options: [
      "Válido, pois a Lei Orgânica autoriza o Prefeito a definir atribuições por decreto",
      "Inválido, pois a ressalva 'não privativas de lei' impede o decreto de invadir matéria reservada à lei",
      "Válido se aprovado por maioria simples da Câmara dentro de 30 dias",
      "Inválido apenas quanto aos servidores efetivos, sendo válido para os comissionados",
    ],
    correctAnswerIndex: 1,
    explanation:
      "A Lei Orgânica autoriza o Prefeito a definir atribuições por decreto somente quando 'não privativas de lei'. Quando o Estatuto reserva determinadas matérias à lei, o decreto que as invade é inválido por violação ao princípio da legalidade e à hierarquia normativa.",
    xp: 50,
  },
  {
    id: "leg-46",
    category: "LEGISLACAO",
    difficulty: "HARD",
    question:
      "Considerando que a Frente Parlamentar de Blumenau é criada por Decreto Legislativo, analise: 'Uma Frente Parlamentar pode ser extinta antes do prazo por decisão unilateral do seu coordenador, sem necessidade de novo Decreto Legislativo.' Essa afirmação é:",
    options: [
      "Verdadeira, pois o coordenador tem poder de dissolução unilateral",
      "Falsa, pois o mesmo instrumento que cria (Decreto Legislativo) deve ser usado para extinguir",
      "Verdadeira, se aprovada por maioria dos membros da Frente",
      "Falsa apenas para Frentes de caráter permanente",
    ],
    correctAnswerIndex: 1,
    explanation:
      "O princípio da simetria das formas jurídicas exige que o ato de extinção tenha, no mínimo, a mesma natureza do ato de criação. Como a Frente é criada por Decreto Legislativo, sua extinção antecipada também requer Decreto Legislativo, não sendo possível por decisão unilateral do coordenador.",
    xp: 50,
  },
  {
    id: "leg-47",
    category: "LEGISLACAO",
    difficulty: "HARD",
    question:
      "A Lei Orgânica de Blumenau permite ao Executivo estabelecer, por decreto, 'normas de efeitos externos não privativas de lei'. Qual situação NÃO poderia ser regulada por decreto com base nessa competência?",
    options: [
      "Regulamentação do horário de funcionamento de estabelecimentos comerciais",
      "Normas de trânsito para vias municipais de baixo volume",
      "Criação de taxa municipal não prevista em lei",
      "Disciplina do uso de praças e logradouros públicos",
    ],
    correctAnswerIndex: 2,
    explanation:
      "A criação de tributos (inclusive taxas) é matéria de reserva absoluta de lei (CF/88, art. 150, I; art. 97 do CTN). O decreto não pode criar tributos, mesmo que tenha efeitos externos. As demais opções envolvem poder de polícia administrativo que pode ser exercido por decreto regulamentar.",
    xp: 50,
  },
  {
    id: "leg-48",
    category: "LEGISLACAO",
    difficulty: "HARD",
    question:
      "Diante de indícios de despesas não autorizadas, a Comissão Legislativa Permanente solicita esclarecimentos. A autoridade responde, mas a Comissão considera a resposta insuficiente. Qual é o padrão mínimo exigido pela Lei Orgânica para a abertura do procedimento de responsabilização?",
    options: [
      "Prova cabal e definitiva da irregularidade, com laudo técnico pericial",
      "Denúncia formal de contribuinte, com firma reconhecida em cartório",
      "Meros indícios de despesas não autorizadas, sem necessidade de prova conclusiva prévia",
      "Parecer prévio desfavorável do Tribunal de Contas do Estado",
    ],
    correctAnswerIndex: 2,
    explanation:
      "O Art. 49 dispõe que a Comissão age 'diante de indícios de despesas não autorizadas', expressão que indica um padrão probatório baixo para abertura do procedimento — suficiente a existência de indícios, sem exigência de prova conclusiva prévia. A responsabilização posterior é que exigirá prova robusta.",
    xp: 50,
  },
  {
    id: "leg-49",
    category: "LEGISLACAO",
    difficulty: "HARD",
    question:
      "O processo de controle das contas municipais em Blumenau combina exame público por contribuintes, parecer técnico do TCE e deliberação política da Câmara. Essa estrutura multifásica visa proteger qual conjunto de princípios?",
    options: [
      "Apenas eficiência e economicidade",
      "Publicidade, controle social, legalidade e responsabilidade fiscal",
      "Somente impessoalidade e moralidade administrativa",
      "Exclusivamente a separação dos Poderes Municipais",
    ],
    correctAnswerIndex: 1,
    explanation:
      "A estrutura multifásica do controle das contas em Blumenau protege: (1) publicidade — contas disponíveis a qualquer contribuinte; (2) controle social — direito de questionamento; (3) legalidade — parecer técnico do TCE verifica conformidade legal; e (4) responsabilidade fiscal — deliberação política da Câmara impõe accountability ao gestor.",
    xp: 50,
  },
  {
    id: "leg-50",
    category: "LEGISLACAO",
    difficulty: "HARD",
    question:
      "Analise: 'O Prefeito de Blumenau pode, por decreto, fixar subsídios dos vereadores, pois a Lei Orgânica autoriza o Executivo a fixar preços e valores por decreto.' Essa interpretação é:",
    options: [
      "Correta, pois a competência regulamentar do Prefeito é ampla",
      "Incorreta, pois a fixação de subsídios de agentes políticos é matéria de lei de iniciativa da Câmara",
      "Correta, desde que o decreto seja referendado pelo Plenário da Câmara",
      "Incorreta apenas se o valor superar o teto constitucional",
    ],
    correctAnswerIndex: 1,
    explanation:
      "A competência do Prefeito para fixar preços por decreto refere-se a preços de serviços públicos e concedidos, não a subsídios de agentes políticos. A fixação de subsídios de vereadores é matéria de reserva legal de iniciativa da própria Câmara (CF/88, art. 29, VI e VII), não podendo ser feita por decreto do Executivo.",
    xp: 50,
  },
];
