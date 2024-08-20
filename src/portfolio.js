const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: 'https://rjshkhr.github.io/cleanfolio',
  title: 'DS',
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'Daniel Salvatori',
  role: 'Cientista de dados',
  description:
    'Sou formado em Sistemas de Informação com MBA em Gestão Empresarial. Atualmente venho desenvolvendo projetos autônomos onde busco através de análises técnicas de Machine Learning ou estatísticas, solucionar problemas de negócio para as empresas. Aqui você irá encontrar meu portifólio e estudos que venho desenvolvendo.',
  resume: 'https://example.com',
  social: {
    linkedin: 'https://www.linkedin.com/in/daniel-salvatori/',
    github: 'https://github.com/daniel-Salvatori/',
  },
}


const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: 'Monitoramento progresso alunos',
    description:
      ' Construção de um ETL e um painel de visualização para acompanhamento do progresso dos alunos na Comunidade DS.',
    stack: ['Python', 'CSS', 'Docker', 'BigQuery', 'Streamlit'],
    sourceCode: 'https://github.com/Daniel-Salvatori/Progresso_Alunos_CDS',
  },
  {
    name: 'Programa de Fidelidade de E-commerce',
    description:
      'Clusterização de clientes e criação de um programa de fidelidade para um e-commerce.',
    stack: ['Python', 'SQL', 'AWS', 'KMeans', 'DBSCAN', 'PCA', 'PowerBI'],
    sourceCode: 'https://github.com/Daniel-Salvatori/Insiders_clusterization',
  },
  {
    name: 'Cross-selling de Seguros',
    description:
      'Ranqueamento de interesse em seguro veicular para novos clientes, a partir de dados de uma pesquisa realizada com clientes antigos.',
    stack: ['Python', 'Machine Learning', 'Google Sheets', 'API'],
    sourceCode: 'https://github.com/Daniel-Salvatori/Shield_Insurance',
  },
  {
    name: 'Previsão de Vendas de Rede Farmacêutica',
    description:
      'Previsão de vendas de uma rede de farmácias para as próximas 6 semanas.',
    stack: ['Python', 'Machine Learning', 'Telegram', 'Flask', 'Render Cloud'],
    sourceCode: 'https://github.com/Daniel-Salvatori/Rossmann_predict_sales'
  },
  {
    name: 'Previsão casos de dengue',
    description:
      'Previsão de casos de dengue para os próximos 1500 dias.',
    stack: ['Python', 'Machine Learning', 'Optuna', 'Estatística'],
    sourceCode: 'https://github.com/Daniel-Salvatori/dengue_predictions'
  },
  {
    name: 'Insights para imobiliária',
    description:
      'Determinar quais são os imóveis mais vantajosos para aquisição e identificar o melhor momento para revenda.',
    stack: ['Python', 'Analise de dados', 'PowerBI', 'Render Cloud', 'Streamlit'],
    sourceCode: 'https://github.com/Daniel-Salvatori/P01_house_rocket_insights'
  },
]

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  'Python',
  'SQL',
  'Excel',
  'PowerBI',
  'Streamlit',
  'GIT',
  'Github',
  'API',
  'Git',
  'Machine Learning',
  'Estatística',
  'Clusterização',
  'Classificação',
  'Regressão',
  'Analise de dados',
  'Visualização de dados',
  'BigQuery',
  'AWS',
  'ETL',



]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'danielfelipesalvatori@mail.com',
}

export { header, about, projects, skills, contact }
