import { motion } from 'framer-motion'
import { useScrollReveal, fadeUpVariants } from '../hooks/useScrollReveal'
import { personal } from '../data/portfolioData'
import { FiGithub, FiLinkedin, FiMapPin } from 'react-icons/fi'

const TAGS = [
  'Python', 'SQL', 'Machine Learning', 'Power BI', 'Azure',
  'NLP', 'XGBoost', 'MLflow', 'ETL Pipelines', 'GenAI', 'SHAP', 'LLMs',
]

export default function About() {
  const { ref, controls } = useScrollReveal()

  return (
    <section id="about" className="py-28 sm:py-36 px-6 sm:px-10" style={{ background: 'var(--bg)' }}>
      <div className="max-w-6xl mx-auto">

        {/* Eyebrow */}
        <motion.p
          className="eyebrow mb-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
        >
          About
        </motion.p>

        <div className="grid lg:grid-cols-[1fr_340px] gap-16 items-start">

          {/* Left: Statement */}
          <motion.div
            ref={ref}
            initial="hidden"
            animate={controls}
            variants={fadeUpVariants}
            className="space-y-6"
          >
            {/* Big pull quote */}
            <p
              className="text-2xl sm:text-3xl font-semibold font-display leading-snug tracking-tight"
              style={{ color: 'var(--text-1)' }}
            >
              "I build data systems that outlast the demo — from raw pipeline to the VP's dashboard."
            </p>

            <hr className="rule" />

            <p className="text-base leading-relaxed" style={{ color: 'var(--text-2)' }}>
              I'm a data professional with 3+ years converting messy, large-scale data into
              clean insights executives act on. My career spans two high-stakes domains:
              core banking systems at <span className="font-semibold" style={{ color: 'var(--text-1)' }}>Tata Consultancy Services</span> — where I
              engineered ETL pipelines processing <span className="font-semibold" style={{ color: 'var(--text-1)' }}>2M+ records daily</span> — and
              institutional analytics at <span className="font-semibold" style={{ color: 'var(--text-1)' }}>Binghamton University</span>, where I built
              ML models forecasting <span className="font-semibold" style={{ color: 'var(--text-1)' }}>$50M+ in revenue</span> with 92% accuracy.
            </p>

            <p className="text-base leading-relaxed" style={{ color: 'var(--text-2)' }}>
              What sets me apart isn't just technical depth — it's the ability to translate
              complex models into language executives understand: revenue protected, costs reduced,
              decisions accelerated. Currently pursuing advanced coursework in ML and Data Engineering
              at Binghamton while seeking impactful{' '}
              <span className="font-semibold" style={{ color: 'var(--text-1)' }}>Data Scientist / ML Engineer</span> roles in the US (2026).
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 pt-2">
              {TAGS.map((tag) => (
                <span key={tag} className="tech-pill text-xs">{tag}</span>
              ))}
            </div>
          </motion.div>

          {/* Right: compact info panel */}
          <motion.div
            className="space-y-5"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Identity card */}
            <div className="card-outlined p-5 space-y-4">
              <div className="flex items-start justify-between">
                <div>
                  <p className="font-semibold" style={{ color: 'var(--text-1)' }}>{personal.name}</p>
                  <p className="text-sm mt-0.5" style={{ color: 'var(--text-2)' }}>
                    {personal.title}
                  </p>
                  <div className="flex items-center gap-1 mt-1.5 text-xs" style={{ color: 'var(--text-3)' }}>
                    <FiMapPin size={10} />
                    {personal.location}
                  </div>
                </div>
                <div className="flex gap-2">
                  <a
                    href={personal.github}
                    target="_blank"
                    rel="noreferrer"
                    className="p-2 rounded-lg transition-colors cursor-pointer"
                    style={{ color: 'var(--text-3)' }}
                    onMouseEnter={e => e.currentTarget.style.color = 'var(--text-1)'}
                    onMouseLeave={e => e.currentTarget.style.color = 'var(--text-3)'}
                    aria-label="GitHub"
                  >
                    <FiGithub size={16} />
                  </a>
                  <a
                    href={personal.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="p-2 rounded-lg transition-colors cursor-pointer"
                    style={{ color: 'var(--text-3)' }}
                    onMouseEnter={e => e.currentTarget.style.color = 'var(--text-1)'}
                    onMouseLeave={e => e.currentTarget.style.color = 'var(--text-3)'}
                    aria-label="LinkedIn"
                  >
                    <FiLinkedin size={16} />
                  </a>
                </div>
              </div>

              <hr className="rule" />

              {/* Key facts */}
              {[
                { label: 'Experience', value: '3+ years' },
                { label: 'Domain', value: 'Data / ML / BI' },
                { label: 'Education', value: 'M.S. (in progress)' },
                { label: 'Availability', value: 'US · Full-time · 2026' },
              ].map(({ label, value }) => (
                <div key={label} className="flex items-center justify-between text-sm">
                  <span style={{ color: 'var(--text-3)' }}>{label}</span>
                  <span className="font-medium" style={{ color: 'var(--text-1)' }}>{value}</span>
                </div>
              ))}
            </div>

            {/* Availability */}
            <div
              className="flex items-center gap-3 px-4 py-3 rounded-xl border"
              style={{ borderColor: 'rgba(52,211,153,0.2)', background: 'rgba(52,211,153,0.04)' }}
            >
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shrink-0" />
              <div>
                <p className="text-sm font-medium text-emerald-300">Available for hire</p>
                <p className="text-xs mt-0.5" style={{ color: 'var(--text-3)' }}>
                  Actively interviewing · US work auth
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
