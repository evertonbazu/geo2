const questions = [
  {
    q: "O Brasil é considerado um país:",
    options: [
      "Pouco populoso e muito povoado",
      "Muito populoso e pouco povoado",
      "Pouco populoso e pouco povoado",
      "Muito povoado e pouco populoso"
    ],
    correct: 1,
    feedback: "O Brasil tem muitos habitantes, mas sua população é pouco distribuída pelo território."
  },
  {
    q: "O censo demográfico no Brasil é realizado:",
    options: [
      "A cada cinco anos",
      "A cada dez anos",
      "A cada vinte anos",
      "Todos os anos"
    ],
    correct: 1,
    feedback: "O censo é realizado a cada dez anos pelo IBGE."
  },
  {
    q: "O órgão responsável pelo censo demográfico no Brasil é:",
    options: [
      "INEP",
      "IBGE",
      "IPEA",
      "MEC"
    ],
    correct: 1,
    feedback: "O IBGE é o órgão oficial de estatísticas do Brasil."
  },
  {
    q: "A maioria da população brasileira se concentra:",
    options: [
      "No interior do país",
      "Próxima ao litoral",
      "Na Região Norte",
      "No Centro-Oeste"
    ],
    correct: 1,
    feedback: "A maior parte da população vive próxima ao litoral, especialmente no Sudeste e Nordeste."
  },
  {
    q: "Uma das principais razões para a baixa densidade populacional na Região Norte é:",
    options: [
      "O clima frio",
      "A presença da Floresta Amazônica",
      "A falta de rios",
      "O excesso de indústrias"
    ],
    correct: 1,
    feedback: "A Floresta Amazônica dificulta a ocupação humana na Região Norte."
  },
  {
    q: "O censo demográfico coleta informações sobre:",
    options: [
      "Apenas idade e sexo",
      "Apenas renda",
      "Diversos aspectos, como idade, sexo, cor/raça, escolaridade, renda, entre outros",
      "Apenas profissão"
    ],
    correct: 2,
    feedback: "O censo coleta uma variedade de informações sobre a população."
  },
  {
    q: "A autodeclaração de cor ou raça no Brasil é feita com base em:",
    options: [
      "Testes genéticos",
      "Observação do recenseador",
      "Declaração da própria pessoa",
      "Documentos oficiais"
    ],
    correct: 2,
    feedback: "A pessoa declara com qual cor ou raça se identifica."
  },
  {
    q: "Entre 2000 e 2022, a população brasileira:",
    options: [
      "Diminuiu",
      "Permaneceu igual",
      "Cresceu",
      "Oscilou muito"
    ],
    correct: 2,
    feedback: "A população brasileira aumentou nesse período."
  },
  {
    q: "A principal cidade do Brasil em número de habitantes é:",
    options: [
      "Brasília",
      "Salvador",
      "São Paulo",
      "Belo Horizonte"
    ],
    correct: 2,
    feedback: "São Paulo é a cidade mais populosa do país."
  },
  {
    q: "A migração do campo para a cidade no Brasil foi intensificada principalmente:",
    options: [
      "Entre 1900 e 1920",
      "Entre 1950 e 1980",
      "Após 2000",
      "No século XIX"
    ],
    correct: 1,
    feedback: "Esse movimento ocorreu principalmente entre 1950 e 1980."
  },
  {
    q: "O movimento de pessoas que entram em um país é chamado de:",
    options: [
      "Emigração",
      "Imigração",
      "Urbanização",
      "Êxodo"
    ],
    correct: 1,
    feedback: "Imigração é a entrada de pessoas em um país."
  },
  {
    q: "O movimento de saída de pessoas de um país é chamado de:",
    options: [
      "Imigração",
      "Emigração",
      "Migração interna",
      "Refúgio"
    ],
    correct: 1,
    feedback: "Emigração é a saída de pessoas de um país."
  },
  {
    q: "Refugiados são pessoas que:",
    options: [
      "Viajam a turismo",
      "Mudam de país por opção",
      "Saem de seu país por perseguição, guerra ou desastres",
      "Mudam de cidade por trabalho"
    ],
    correct: 2,
    feedback: "Refugiados fogem de situações de risco em seus países de origem."
  },
  {
    q: "A maioria dos brasileiros, segundo o IBGE, se identifica como:",
    options: [
      "Preta",
      "Branca",
      "Parda ou branca",
      "Indígena"
    ],
    correct: 2,
    feedback: "A maioria se declara parda ou branca."
  },
  {
    q: "A classificação de cor/raça utilizada pelo IBGE inclui:",
    options: [
      "Branca, preta, parda, indígena e amarela",
      "Branca, preta, asiática, africana e indígena",
      "Branca, negra, mestiça, indígena e asiática",
      "Branca, negra, parda, asiática e europeia"
    ],
    correct: 0,
    feedback: "Essas são as cinco categorias oficiais do IBGE."
  },
  {
    q: "A região brasileira com maior taxa de alfabetização é:",
    options: [
      "Norte",
      "Nordeste",
      "Sul",
      "Centro-Oeste"
    ],
    correct: 2,
    feedback: "A Região Sul apresenta a maior taxa de alfabetização."
  },
  {
    q: "A região que mais precisa de investimentos em alfabetização é:",
    options: [
      "Sul",
      "Sudeste",
      "Norte",
      "Nordeste"
    ],
    correct: 3,
    feedback: "O Nordeste apresenta os maiores desafios em alfabetização."
  },
  {
    q: "O Índice de Desenvolvimento Humano (IDH) considera:",
    options: [
      "Apenas a renda",
      "Apenas a saúde",
      "Saúde, educação e renda",
      "Apenas a educação"
    ],
    correct: 2,
    feedback: "O IDH é composto por saúde, educação e renda."
  },
  {
    q: "Quanto mais próximo de 1, o IDH de um país indica:",
    options: [
      "Baixo desenvolvimento",
      "Alto desenvolvimento",
      "Médio desenvolvimento",
      "Nenhum desenvolvimento"
    ],
    correct: 1,
    feedback: "IDH próximo de 1 indica alto desenvolvimento humano."
  },
  {
    q: "A desigualdade social pode ser percebida quando:",
    options: [
      "Todos têm acesso igual a serviços",
      "Parte da população tem acesso limitado a serviços básicos",
      "Não há diferenças de renda",
      "Todos vivem em áreas rurais"
    ],
    correct: 1,
    feedback: "A desigualdade ocorre quando há diferenças no acesso a serviços e renda."
  },
  {
    q: "O principal motivo histórico para o povoamento do litoral brasileiro foi:",
    options: [
      "A presença de minérios",
      "A instalação das primeiras atividades econômicas pelos portugueses",
      "O clima seco",
      "A ausência de rios"
    ],
    correct: 1,
    feedback: "O litoral foi o local das primeiras atividades econômicas no Brasil."
  },
  {
    q: "A migração das cidades para o campo tem ocorrido devido:",
    options: [
      "À falta de oportunidades no campo",
      "À busca por vida mais tranquila e novas oportunidades rurais",
      "Ao excesso de indústrias rurais",
      "À urbanização acelerada"
    ],
    correct: 1,
    feedback: "Muitas pessoas buscam qualidade de vida e novas oportunidades no campo."
  },
  {
    q: "O Brasil faz fronteira com todos os países da América do Sul, exceto:",
    options: [
      "Chile e Bolívia",
      "Chile e Equador",
      "Uruguai e Paraguai",
      "Argentina e Peru"
    ],
    correct: 1,
    feedback: "O Brasil não faz fronteira com Chile e Equador."
  },
  {
    q: "A pesquisa que atualiza informações populacionais entre os censos é:",
    options: [
      "ENEM",
      "PNAD Contínua",
      "SARESP",
      "PISA"
    ],
    correct: 1,
    feedback: "A PNAD Contínua atualiza dados entre os censos."
  },
  {
    q: "O aumento da expectativa de vida no Brasil está relacionado:",
    options: [
      "À redução do acesso à saúde",
      "À melhoria das condições de vida",
      "Ao aumento da mortalidade infantil",
      "À diminuição da escolaridade"
    ],
    correct: 1,
    feedback: "Melhores condições de vida aumentam a expectativa de vida."
  },
  {
    q: "A maioria da população brasileira está na faixa etária de:",
    options: [
      "0 a 9 anos",
      "10 a 19 anos",
      "20 a 39 anos",
      "60 anos ou mais"
    ],
    correct: 2,
    feedback: "A maior parte está entre 20 e 39 anos."
  },
  {
    q: "A densidade demográfica é:",
    options: [
      "O número de habitantes por quilômetro quadrado",
      "O número total de habitantes",
      "O número de cidades em uma região",
      "O número de escolas por região"
    ],
    correct: 0,
    feedback: "Densidade demográfica é a relação entre população e área."
  },
  {
    q: "O acesso à água tratada e saneamento básico:",
    options: [
      "É igual em todas as regiões",
      "É maior nas regiões urbanas",
      "É maior nas áreas rurais",
      "Não influencia a qualidade de vida"
    ],
    correct: 1,
    feedback: "O acesso é maior nas áreas urbanas."
  },
  {
    q: "A principal contribuição dos imigrantes para o Brasil é:",
    options: [
      "Apenas cultural",
      "Apenas econômica",
      "Cultural e econômica",
      "Apenas política"
    ],
    correct: 2,
    feedback: "Imigrantes contribuem cultural e economicamente."
  },
  {
    q: "O IBGE utiliza a autodeclaração para:",
    options: [
      "Escolaridade",
      "Cor ou raça",
      "Renda",
      "Profissão"
    ],
    correct: 1,
    feedback: "A cor ou raça é autodeclarada nas pesquisas do IBGE."
  },
  {
    q: "O Brasil é o _______ país mais populoso do mundo.",
    options: [
      "Terceiro",
      "Sétimo",
      "Décimo",
      "Quinto"
    ],
    correct: 1,
    feedback: "O Brasil é o sétimo país mais populoso do mundo."
  },
  {
    q: "A migração interna no Brasil foi marcada, entre 1950 e 1980, pelo deslocamento:",
    options: [
      "Do litoral para o interior",
      "Do campo para as cidades",
      "Das cidades para o campo",
      "Do Sul para o Norte"
    ],
    correct: 1,
    feedback: "Ocorreu principalmente do campo para as cidades."
  },
  {
    q: "O principal fator que atrai pessoas para as capitais brasileiras é:",
    options: [
      "O clima",
      "A infraestrutura e oportunidades de emprego",
      "A presença de rios",
      "O custo de vida baixo"
    ],
    correct: 1,
    feedback: "Infraestrutura e empregos atraem pessoas para as capitais."
  },
  {
    q: "O termo “parda” na classificação do IBGE refere-se a:",
    options: [
      "Pessoas de origem asiática",
      "Pessoas de origem indígena",
      "Pessoas de origem mista, principalmente entre brancos, pretos e indígenas",
      "Pessoas de origem europeia"
    ],
    correct: 2,
    feedback: "Parda refere-se à mistura de diferentes origens."
  },
  {
    q: "O acesso desigual à educação no Brasil:",
    options: [
      "Não influencia a qualidade de vida",
      "É um dos fatores da desigualdade social",
      "É igual em todas as regiões",
      "Não é considerado nas pesquisas"
    ],
    correct: 1,
    feedback: "A desigualdade educacional contribui para a desigualdade social."
  },
  {
    q: "O Brasil recebe refugiados principalmente de:",
    options: [
      "Venezuela, Síria e Cuba",
      "Estados Unidos, Canadá e México",
      "Argentina, Chile e Uruguai",
      "Portugal, Espanha e Itália"
    ],
    correct: 0,
    feedback: "Esses são os principais países de origem dos refugiados no Brasil."
  },
  {
    q: "A principal razão para a emigração de venezuelanos para o Brasil é:",
    options: [
      "O clima",
      "A busca por lazer",
      "A crise econômica e social em seu país",
      "O turismo"
    ],
    correct: 2,
    feedback: "A crise na Venezuela motiva a emigração para o Brasil."
  },
  {
    q: "O IDH do Brasil, em relação aos outros países da América do Sul, é:",
    options: [
      "O mais alto",
      "O mais baixo",
      "Intermediário",
      "O mesmo que o da Argentina"
    ],
    correct: 2,
    feedback: "O IDH do Brasil é intermediário na América do Sul."
  },
  {
    q: "A desigualdade social pode ser observada em:",
    options: [
      "Diferenças de renda, acesso à saúde e educação",
      "Igualdade de oportunidades",
      "Ausência de problemas sociais",
      "Apenas em áreas rurais"
    ],
    correct: 0,
    feedback: "A desigualdade se manifesta em vários aspectos sociais."
  },
  {
    q: "O censo demográfico é importante porque:",
    options: [
      "Não influencia políticas públicas",
      "Ajuda a planejar ações para melhorar a qualidade de vida da população",
      "Serve apenas para estatísticas",
      "Não é utilizado pelo governo"
    ],
    correct: 1,
    feedback: "O censo orienta políticas públicas e investimentos."
  },
  {
    q: "A região menos populosa do Brasil é:",
    options: [
      "Sudeste",
      "Sul",
      "Norte",
      "Nordeste"
    ],
    correct: 2,
    feedback: "A Região Norte é a menos populosa do país."
  },
  {
    q: "O termo “migração” refere-se a:",
    options: [
      "Apenas deslocamentos internacionais",
      "Apenas deslocamentos internos",
      "Deslocamentos internos e internacionais",
      "Apenas deslocamentos rurais"
    ],
    correct: 2,
    feedback: "Migração inclui deslocamentos internos e internacionais."
  },
  {
    q: "O acesso à saúde é:",
    options: [
      "Igual em todo o Brasil",
      "Um dos fatores que compõem o IDH",
      "Irrelevante para a qualidade de vida",
      "Maior nas áreas rurais"
    ],
    correct: 1,
    feedback: "A saúde é um dos componentes do IDH."
  },
  {
    q: "A maioria dos brasileiros vive:",
    options: [
      "Em áreas rurais",
      "Em áreas urbanas",
      "Em áreas indígenas",
      "Em áreas de difícil acesso"
    ],
    correct: 1,
    feedback: "A maior parte da população vive em áreas urbanas."
  },
  {
    q: "A autodeclaração de cor/raça é importante para:",
    options: [
      "Excluir pessoas de pesquisas",
      "Conhecer a diversidade da população",
      "Definir salários",
      "Escolher representantes políticos"
    ],
    correct: 1,
    feedback: "A autodeclaração permite conhecer a diversidade do país."
  },
  {
    q: "O aumento da população urbana no Brasil foi causado principalmente por:",
    options: [
      "Migração do campo para a cidade",
      "Migração da cidade para o campo",
      "Crescimento das áreas rurais",
      "Redução da natalidade"
    ],
    correct: 0,
    feedback: "A urbanização foi impulsionada pela migração do campo para a cidade."
  },
  {
    q: "O acesso desigual a serviços básicos pode resultar em:",
    options: [
      "Igualdade social",
      "Desigualdade social",
      "Crescimento econômico igual",
      "Redução da população"
    ],
    correct: 1,
    feedback: "A desigualdade no acesso a serviços gera desigualdade social."
  },
  {
    q: "O IDH é calculado com base em dados de:",
    options: [
      "Apenas um ano",
      "Vários anos e diferentes indicadores",
      "Apenas a renda",
      "Apenas a saúde"
    ],
    correct: 1,
    feedback: "O IDH utiliza dados de diferentes anos e indicadores."
  },
  {
    q: "A principal função do recenseador é:",
    options: [
      "Analisar dados",
      "Coletar informações junto à população",
      "Planejar políticas públicas",
      "Divulgar resultados"
    ],
    correct: 1,
    feedback: "O recenseador coleta dados diretamente com a população."
  },
  {
    q: "O conhecimento das características da população ajuda:",
    options: [
      "Apenas os pesquisadores",
      "No planejamento de políticas públicas e investimentos",
      "Apenas as escolas",
      "Apenas as empresas"
    ],
    correct: 1,
    feedback: "Essas informações são essenciais para políticas públicas."
  }
];
