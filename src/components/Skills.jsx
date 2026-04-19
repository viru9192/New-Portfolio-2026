import { motion } from 'framer-motion'
import { useScrollReveal, fadeUpVariants } from '../hooks/useScrollReveal'
import { skills } from '../data/portfolioData'
import { FiCode, FiCpu, FiBarChart2, FiCloud } from 'react-icons/fi'

const CATEGORIES = [
  {
    key: 'programming',
    label: 'Programming',
    Icon: FiCode,
    accent: '#4f7fff',
    items: ['Python', 'SQL', 'R', 'Scala', 'Bash / Shell'],
  },
  {
    key: 'mlAi',
    label: 'ML / AI',
    Icon: FiCpu,
    accent: '#a78bfa',
    items: ['XGBoost / LightGBM', 'NLP & Transformers', 'SHAP / Explainability', 'Time Series (Prophet, ARIMA)', 'LLM Evaluation', 'Causal Inference'],
  },
  {
    key: 'dataTools',
    label: 'Data Tools',
    Icon: FiBarChart2,
    accent: '#06b6d4',
    items: ['Power BI', 'Tableau', 'Spark / PySpark', 'MLflow', 'dbt', 'Apache Airflow'],
  },
  {
    key: 'cloud',
    label: 'Cloud & DevOps',
    Icon: FiCloud,
    accent: '#34d399',
    items: ['Azure (Synapse, ADF, Blob)', 'AWS (S3, Glue, Redshift)', 'Docker / Kubernetes', 'GitHub Actions / CI/CD'],
  },
]

export default function Skills() {
  const { ref, controls } = useScrollReveal()

  return (
    <section
      id="skills"
      className="py-28 sm:py-36 px-6 sm:px-10"
      style={{ background: 'var(--surface)', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)' }}
    >
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-16">
          <div>
            <motion.p
              className="eyebrow mb-3"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              Skills
            </motion.p>
            <motion.h2
              className="section-title text-3xl sm:text-4xl"
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.05 }}
            >
              Full-Stack Data Expertise
            </motion.h2>
          </div>
          <motion.p
            className="text-sm max-w-xs leading-relaxed"
            style={{ color: 'var(--text-3)' }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            End-to-end proficiency across data engineering,
            ML modeling, BI, and cloud platforms.
          </motion.p>
        </div>

        {/* 4-column grid */}
        <motion.div
          ref={ref}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
          initial="hidden"
          animate={controls}
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.1 } } }}
        >
          {CATEGORIES.map(({ key, label, Icon, accent, items }) => (
            <motion.div
              key={key}
              variants={fadeUpVariants}
              className="card-outlined p-5 flex flex-col gap-4 group"
              style={{ borderTop: `2px solid ${accent}` }}
              whileHover={{ y: -4, boxShadow: `0 12px 36px ${accent}14`, transition: { duration: 0.2 } }}
            >
              {/* Category header */}
              <div className="flex items-center gap-2.5">
                <div
                  className="w-8 h-8 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ background: `${accent}14`, border: `1px solid ${accent}25` }}
                >
                  <Icon size={14} style={{ color: accent }} />
                </div>
                <h3 className="text-sm font-semibold" style={{ color: 'var(--text-1)' }}>{label}</h3>
              </div>

              {/* Divider */}
              <div style={{ borderTop: '1px solid var(--border)' }} />

              {/* Tech list */}
              <ul className="space-y-2">
                {items.map((tech, ti) => (
                  <motion.li
                    key={tech}
                    className="flex items-center gap-2 text-sm cursor-default"
                    style={{ color: 'var(--text-2)' }}
                    initial={{ opacity: 0, x: -6 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: ti * 0.04 }}
                    whileHover={{ x: 3, color: 'var(--text-1)', transition: { duration: 0.15 } }}
                  >
                    <span className="w-1 h-1 rounded-full flex-shrink-0" style={{ background: accent, opacity: 0.6 }} />
                    {tech}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>

        {/* Certifications strip */}
        <motion.div
          className="mt-16 pt-8"
          style={{ borderTop: '1px solid var(--border)' }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <p className="eyebrow mb-4">Certifications & Focus Areas</p>
          <div className="flex flex-wrap gap-2">
            {[
              'Azure Data Fundamentals',
              'Statistical Modeling & Inference',
              'ML Ops & Model Governance',
              'Advanced Power BI (DAX + M)',
              'Feature Engineering',
              'Causal Inference',
            ].map((cert, i) => (
              <motion.span
                key={cert}
                className="tag-accent text-xs"
                initial={{ opacity: 0, scale: 0.88 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: i * 0.06 }}
                whileHover={{ scale: 1.05 }}
              >
                {cert}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
