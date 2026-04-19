import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { FiGithub, FiStar, FiGitBranch, FiExternalLink, FiCode } from 'react-icons/fi'
import { useScrollReveal, fadeUpVariants } from '../hooks/useScrollReveal'

const LANG_COLORS = {
  Python: '#3572A5',
  'Jupyter Notebook': '#DA5B0B',
  R: '#198CE7',
  SQL: '#e38c00',
  JavaScript: '#f1e05a',
  TypeScript: '#3178c6',
  Shell: '#89e051',
  Default: '#818cf8',
}

const FALLBACK_REPOS = [
  { id: 1, name: 'llm-risk-intelligence', description: 'NLP-powered LLM evaluation framework with SHAP explainability for scoring AI outputs across 8 quality dimensions.', language: 'Python', stargazers_count: 12, forks_count: 3, html_url: 'https://github.com/viru9192', topics: ['nlp', 'llm', 'mlops'] },
  { id: 2, name: 'budget-forecasting-ml', description: 'Ensemble ML pipeline (XGBoost + Prophet) for institutional budget forecasting — 92% accuracy on $50M+ dataset.', language: 'Python', stargazers_count: 8, forks_count: 2, html_url: 'https://github.com/viru9192', topics: ['xgboost', 'forecasting', 'time-series'] },
  { id: 3, name: 'banking-etl-pipeline', description: 'Azure-based ETL framework processing 2M+ daily banking records with automated data quality gates.', language: 'Python', stargazers_count: 15, forks_count: 5, html_url: 'https://github.com/viru9192', topics: ['azure', 'etl', 'sql'] },
  { id: 4, name: 'attribution-model', description: 'Shapley value multi-touch attribution using Markov chain models for marketing spend optimization.', language: 'Python', stargazers_count: 6, forks_count: 1, html_url: 'https://github.com/viru9192', topics: ['causal-inference', 'marketing'] },
  { id: 5, name: 'student-analytics-dashboard', description: 'Power BI dashboard suite for 50K+ student enrollment data with automated Azure Synapse refresh.', language: 'Jupyter Notebook', stargazers_count: 4, forks_count: 1, html_url: 'https://github.com/viru9192', topics: ['power-bi', 'analytics'] },
  { id: 6, name: 'supply-chain-forecasting', description: 'Hierarchical ARIMA+LSTM ensemble for demand forecasting, deployed via REST API on AWS.', language: 'Python', stargazers_count: 9, forks_count: 3, html_url: 'https://github.com/viru9192', topics: ['lstm', 'arima', 'aws'] },
]

function RepoCard({ repo, index }) {
  const langColor = LANG_COLORS[repo.language] || LANG_COLORS.Default
  return (
    <motion.a
      href={repo.html_url}
      target="_blank"
      rel="noreferrer"
      className="card-outlined p-5 flex flex-col gap-3 group cursor-pointer"
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45, delay: index * 0.06 }}
      whileHover={{ y: -2 }}
    >
      <div className="flex items-start justify-between gap-2">
        <div className="flex items-center gap-2">
          <FiCode size={13} style={{ color: '#818cf8' }} className="flex-shrink-0" />
          <h3
            className="text-sm font-semibold leading-tight transition-colors duration-150"
            style={{ color: 'var(--text-1)' }}
          >
            {repo.name}
          </h3>
        </div>
        <FiExternalLink size={11} style={{ color: 'var(--text-3)' }} className="flex-shrink-0 mt-0.5 opacity-0 group-hover:opacity-100 transition-opacity" />
      </div>

      <p className="text-xs leading-relaxed flex-1" style={{ color: 'var(--text-3)' }}>
        {repo.description || 'No description.'}
      </p>

      {repo.topics?.length > 0 && (
        <div className="flex flex-wrap gap-1">
          {repo.topics.slice(0, 3).map((t) => (
            <span
              key={t}
              className="text-[10px] font-mono px-2 py-0.5 rounded-md"
              style={{ color: '#a78bfa', background: 'rgba(167,139,250,0.08)', border: '1px solid rgba(167,139,250,0.2)' }}
            >
              {t}
            </span>
          ))}
        </div>
      )}

      <div className="flex items-center gap-4 pt-2" style={{ borderTop: '1px solid var(--border)' }}>
        {repo.language && (
          <div className="flex items-center gap-1.5">
            <div className="w-2 h-2 rounded-full flex-shrink-0" style={{ backgroundColor: langColor }} />
            <span className="text-[11px]" style={{ color: 'var(--text-3)' }}>{repo.language}</span>
          </div>
        )}
        <div className="flex items-center gap-1 text-[11px]" style={{ color: 'var(--text-3)' }}>
          <FiStar size={11} />{repo.stargazers_count}
        </div>
        <div className="flex items-center gap-1 text-[11px]" style={{ color: 'var(--text-3)' }}>
          <FiGitBranch size={11} />{repo.forks_count}
        </div>
      </div>
    </motion.a>
  )
}

export default function GitHub() {
  const [repos, setRepos] = useState([])
  const [loading, setLoading] = useState(true)
  const [stats, setStats] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [reposRes, userRes] = await Promise.all([
          fetch('https://api.github.com/users/viru9192/repos?sort=updated&per_page=6'),
          fetch('https://api.github.com/users/viru9192'),
        ])
        setRepos(reposRes.ok ? (await reposRes.json()).filter((r) => !r.fork).slice(0, 6) : FALLBACK_REPOS)
        if (userRes.ok) {
          const u = await userRes.json()
          setStats({ repos: u.public_repos, followers: u.followers })
        }
      } catch {
        setRepos(FALLBACK_REPOS)
      } finally {
        setLoading(false)
      }
    }
    fetchData()
  }, [])

  return (
    <section
      id="github"
      className="py-28 sm:py-36 px-6 sm:px-10"
      style={{ background: 'var(--surface)', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)' }}
    >
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-12">
          <div>
            <motion.p
              className="eyebrow mb-3"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              Open Source
            </motion.p>
            <motion.h2
              className="section-title text-3xl sm:text-4xl"
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              GitHub Activity
            </motion.h2>
          </div>

          {/* Profile strip */}
          <motion.div
            className="flex items-center gap-5"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
          >
            <div className="flex items-center gap-3">
              <div
                className="w-9 h-9 rounded-xl flex items-center justify-center"
                style={{ background: 'rgba(79,127,255,0.1)', border: '1px solid rgba(79,127,255,0.2)' }}
              >
                <FiGithub size={16} style={{ color: '#818cf8' }} />
              </div>
              <div>
                <p className="text-sm font-medium" style={{ color: 'var(--text-1)' }}>viru9192</p>
                {stats && (
                  <p className="text-xs" style={{ color: 'var(--text-3)' }}>
                    {stats.repos} repos · {stats.followers} followers
                  </p>
                )}
              </div>
            </div>
            <a
              href="https://github.com/viru9192"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1.5 text-sm font-medium transition-colors cursor-pointer"
              style={{ color: 'var(--text-3)' }}
              onMouseEnter={e => e.currentTarget.style.color = 'var(--text-1)'}
              onMouseLeave={e => e.currentTarget.style.color = 'var(--text-3)'}
            >
              View Profile
              <FiExternalLink size={12} />
            </a>
          </motion.div>
        </div>

        {/* Grid */}
        {loading ? (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="card-outlined p-5 h-36 animate-pulse">
                <div className="h-3 rounded w-3/4 mb-3" style={{ background: 'var(--border)' }} />
                <div className="h-2 rounded w-full mb-2" style={{ background: 'var(--border)' }} />
                <div className="h-2 rounded w-5/6" style={{ background: 'var(--border)' }} />
              </div>
            ))}
          </div>
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {repos.map((repo, i) => (
              <RepoCard key={repo.id} repo={repo} index={i} />
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
