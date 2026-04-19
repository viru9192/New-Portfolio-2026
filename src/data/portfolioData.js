export const personal = {
  name: 'Viranchi More',
  title: 'Data Scientist & ML Engineer',
  tagline: 'Turning raw data into decisions that move the needle.',
  email: 'viranchimore2112@gmail.com',
  github: 'https://github.com/viru9192',
  linkedin: 'https://www.linkedin.com/in/viranchimore/',
  location: 'Binghamton, NY',
  resumeUrl: '/Viranchi_More_Resume.pdf',
  roles: [
    'Data Scientist',
    'Data Analyst',
    'ML Engineer',
    'BI Developer',
    'Data Engineer',
  ],
}

export const stats = [
  { label: 'Years Experience', value: 3, suffix: '+' },
  { label: 'Forecasting Accuracy', value: 92, suffix: '%' },
  { label: 'Dashboards Deployed', value: 15, suffix: '+' },
  { label: 'Records Processed', value: 2, suffix: 'M+' },
]

export const about = {
  story: `I'm a data professional with 3+ years of experience converting messy,
  large-scale data into clean insights that executives act on. My career spans two
  high-stakes domains: core banking systems at Tata Consultancy Services — where I
  engineered ETL pipelines processing 2M+ records — and institutional analytics at
  Binghamton University, where I built ML models forecasting $50M+ in revenue with
  92% accuracy.`,
  highlights: [
    { icon: '🏦', title: 'Banking Scale', desc: 'Processed 2M+ banking records at TCS, reducing reporting time by 40%' },
    { icon: '🎓', title: 'Research Impact', desc: 'Drove 92% forecasting accuracy on $50M+ institutional budget at Binghamton' },
    { icon: '🤖', title: 'GenAI & LLMs', desc: 'Architected GenAI evaluation frameworks assessing LLM output quality at scale' },
    { icon: '📊', title: 'Executive BI', desc: 'Built 15+ dashboards consumed by VP-level stakeholders for strategic decisions' },
  ],
}

export const skills = {
  programming: [
    { name: 'Python', level: 95, tag: 'Core' },
    { name: 'SQL', level: 92, tag: 'Core' },
    { name: 'R', level: 72, tag: 'Statistical' },
    { name: 'Scala', level: 60, tag: 'Big Data' },
    { name: 'Bash/Shell', level: 70, tag: 'DevOps' },
  ],
  mlAi: [
    { name: 'XGBoost / LightGBM', level: 90 },
    { name: 'NLP & Transformers', level: 85 },
    { name: 'SHAP / Explainability', level: 88 },
    { name: 'Time Series (Prophet, ARIMA)', level: 85 },
    { name: 'LLM Evaluation', level: 82 },
    { name: 'Causal Inference', level: 75 },
  ],
  dataTools: [
    { name: 'Power BI', level: 93 },
    { name: 'Tableau', level: 80 },
    { name: 'Spark / PySpark', level: 78 },
    { name: 'MLflow', level: 82 },
    { name: 'dbt', level: 70 },
    { name: 'Apache Airflow', level: 72 },
  ],
  cloud: [
    { name: 'Azure (Synapse, ADF, Blob)', level: 82 },
    { name: 'AWS (S3, Glue, Redshift)', level: 72 },
    { name: 'Docker / Kubernetes', level: 65 },
    { name: 'GitHub Actions / CI/CD', level: 70 },
  ],
}

export const radarData = [
  { subject: 'ML/AI', A: 90, fullMark: 100 },
  { subject: 'SQL/Data', A: 92, fullMark: 100 },
  { subject: 'Python', A: 95, fullMark: 100 },
  { subject: 'BI/Viz', A: 88, fullMark: 100 },
  { subject: 'Cloud', A: 78, fullMark: 100 },
  { subject: 'Engineering', A: 80, fullMark: 100 },
]

export const projects = [
  {
    id: 1,
    title: 'LLM Risk Intelligence System',
    category: 'ML',
    emoji: '🧠',
    problem: 'LLM outputs lacked structured quality scoring, creating accountability gaps in production AI systems.',
    approach: 'Built an end-to-end evaluation harness using NLP classifiers + SHAP explainability to score LLM responses across 8 quality dimensions. Integrated with MLflow for experiment tracking.',
    stack: ['Python', 'Transformers', 'SHAP', 'MLflow', 'FastAPI', 'PostgreSQL'],
    impact: [
      'Automated evaluation of 10K+ LLM outputs/day',
      'Reduced manual review time by 65%',
      'Identified 3 critical model failure modes in production',
    ],
    metrics: { accuracy: '94%', throughput: '10K/day', reduction: '65%' },
    github: 'https://github.com/viru9192',
    tags: ['NLP', 'LLM', 'MLOps'],
    color: 'indigo',
  },
  {
    id: 2,
    title: 'Institutional Budget Forecasting',
    category: 'ML',
    emoji: '📈',
    problem: 'Manual $50M+ budget projections were error-prone, taking 3+ weeks per cycle with 15–20% variance.',
    approach: 'Engineered a multi-model ensemble (XGBoost + Prophet) with feature engineering on 50K+ student enrollment records. Added SHAP explainability for CFO-level transparency.',
    stack: ['Python', 'XGBoost', 'Prophet', 'SHAP', 'Power BI', 'Azure'],
    impact: [
      '92% forecasting accuracy on $50M+ institutional budget',
      'Reduced cycle time from 3 weeks to 2 days',
      'Adopted by VP Finance for annual budget planning',
    ],
    metrics: { accuracy: '92%', cycleReduction: '10x faster', budget: '$50M+' },
    github: 'https://github.com/viru9192',
    tags: ['Forecasting', 'XGBoost', 'Time Series'],
    color: 'emerald',
  },
  {
    id: 3,
    title: 'Banking ETL & Analytics Platform',
    category: 'SQL',
    emoji: '🏦',
    problem: 'SBI core banking data was siloed across 12 systems, causing 40% delays in regulatory reporting.',
    approach: 'Designed scalable ETL pipelines on Azure Data Factory ingesting 2M+ daily records. Implemented incremental loads, data quality checks, and optimized SQL stored procedures (35–40% perf gain).',
    stack: ['Azure ADF', 'SQL Server', 'Python', 'Power BI', 'SSIS'],
    impact: [
      'Processed 2M+ records daily with 99.8% SLA',
      'Reduced reporting latency by 40%',
      'Improved data accuracy by 25% via automated quality gates',
    ],
    metrics: { records: '2M+ daily', latency: '-40%', accuracy: '+25%' },
    github: 'https://github.com/viru9192',
    tags: ['ETL', 'Azure', 'SQL', 'Banking'],
    color: 'cyan',
  },
  {
    id: 4,
    title: 'Multi-Touch Attribution Model',
    category: 'ML',
    emoji: '🎯',
    problem: 'Last-click attribution was misallocating 30% of marketing budget by ignoring mid-funnel touchpoints.',
    approach: 'Implemented Shapley value-based multi-touch attribution using causal inference. Built a Markov chain model to quantify conversion probability per channel.',
    stack: ['Python', 'Causal Inference', 'Markov Chains', 'Pandas', 'Tableau'],
    impact: [
      'Reallocated 30% of budget to higher-converting channels',
      'Improved conversion rate by 18%',
      'Saved ~$200K in misallocated ad spend',
    ],
    metrics: { budgetOptimized: '30%', conversionLift: '+18%', savings: '$200K' },
    github: 'https://github.com/viru9192',
    tags: ['Attribution', 'Causal AI', 'ML'],
    color: 'violet',
  },
  {
    id: 5,
    title: 'Student Analytics Dashboard Suite',
    category: 'BI',
    emoji: '🎓',
    problem: 'University leadership had no real-time visibility into enrollment trends, retention risk, or academic outcomes.',
    approach: 'Designed 5 interconnected Power BI dashboards with DAX measures, RLS security, and automated refresh. Integrated data from 6 source systems via Azure Synapse.',
    stack: ['Power BI', 'DAX', 'Azure Synapse', 'SQL', 'Python'],
    impact: [
      '50,000+ student records visualized in real-time',
      'Used by 8 VP-level stakeholders for strategic decisions',
      'Identified at-risk student cohorts 8 weeks earlier',
    ],
    metrics: { students: '50K+', stakeholders: '8 VPs', leadTime: '8 wks earlier' },
    github: 'https://github.com/viru9192',
    tags: ['Power BI', 'DAX', 'BI'],
    color: 'rose',
  },
  {
    id: 6,
    title: 'Supply Chain Demand Forecasting',
    category: 'ML',
    emoji: '🚚',
    problem: 'Inventory over/understocking was costing ~$1.2M annually due to inaccurate demand forecasts.',
    approach: 'Built a hierarchical time series model (ARIMA + LSTM ensemble) with external regressors (weather, events). Deployed as REST API with automated retraining pipeline on Airflow.',
    stack: ['Python', 'LSTM', 'ARIMA', 'Airflow', 'FastAPI', 'AWS'],
    impact: [
      'Reduced forecast MAPE from 22% to 8.4%',
      'Cut inventory costs by ~15% ($180K/yr saved)',
      'Model retrained weekly via automated Airflow DAG',
    ],
    metrics: { mape: '8.4%', savings: '$180K/yr', automation: '100%' },
    github: 'https://github.com/viru9192',
    tags: ['Forecasting', 'LSTM', 'MLOps'],
    color: 'indigo',
  },
]

export const experience = [
  {
    id: 1,
    role: 'Data Analyst / Data Scientist',
    company: 'Binghamton University',
    period: 'Jan 2024 – Present',
    location: 'Binghamton, NY',
    type: 'Full-time',
    logo: '🎓',
    color: 'indigo',
    bullets: [
      'Architected ML forecasting pipeline achieving 92% accuracy on $50M+ institutional budget using XGBoost + Prophet ensemble',
      'Engineered ETL workflows on Azure Synapse processing 50,000+ student records with automated data quality validation',
      'Built 5 Power BI dashboards with DAX and RLS consumed by VP-level stakeholders for strategic enrollment decisions',
      'Developed GenAI evaluation framework assessing LLM outputs across 8 quality dimensions using SHAP explainability',
      'Reduced manual reporting cycle from 3 weeks to 2 days via automated Python-based report generation',
    ],
    techStack: ['Python', 'Azure', 'Power BI', 'XGBoost', 'MLflow', 'SQL'],
  },
  {
    id: 2,
    role: 'Data Analyst / Data Engineer',
    company: 'Tata Consultancy Services',
    period: 'Jun 2021 – Dec 2023',
    location: 'Mumbai, India',
    type: 'Full-time',
    logo: '🏦',
    color: 'cyan',
    bullets: [
      'Designed and deployed ETL pipelines on Azure Data Factory processing 2M+ daily SBI banking records with 99.8% SLA',
      'Optimized 40+ SQL stored procedures and indexes — improved database query performance by 35–40% on core banking tables',
      'Built 10+ Power BI reports for risk and compliance teams, reducing regulatory reporting time by 40%',
      'Implemented automated data quality framework catching 98.2% of anomalies before downstream consumption',
      'Collaborated with 3 cross-functional teams to standardize data governance policies across 12 source systems',
    ],
    techStack: ['SQL Server', 'Azure ADF', 'SSIS', 'Power BI', 'Python', 'DAX'],
  },
]

export const kpiData = [
  { label: 'Reporting Time Saved', value: 40, suffix: '%', color: '#6366f1', icon: '⚡' },
  { label: 'Forecasting Accuracy', value: 92, suffix: '%', color: '#06b6d4', icon: '🎯' },
  { label: 'Data Accuracy Gain', value: 25, suffix: '%', color: '#10b981', icon: '✅' },
  { label: 'DB Performance Boost', value: 38, suffix: '%', color: '#8b5cf6', icon: '🚀' },
]

export const performanceChartData = [
  { month: 'Jan', pipeline: 72, accuracy: 78, dashboards: 3 },
  { month: 'Feb', pipeline: 78, accuracy: 81, dashboards: 5 },
  { month: 'Mar', pipeline: 82, accuracy: 85, dashboards: 7 },
  { month: 'Apr', pipeline: 85, accuracy: 87, dashboards: 9 },
  { month: 'May', pipeline: 88, accuracy: 90, dashboards: 11 },
  { month: 'Jun', pipeline: 91, accuracy: 91, dashboards: 13 },
  { month: 'Jul', pipeline: 93, accuracy: 92, dashboards: 15 },
]

export const techStackDistribution = [
  { name: 'Python / ML', value: 35, color: '#6366f1' },
  { name: 'SQL / Data Eng', value: 28, color: '#06b6d4' },
  { name: 'Power BI / Viz', value: 20, color: '#10b981' },
  { name: 'Azure / Cloud', value: 17, color: '#8b5cf6' },
]
