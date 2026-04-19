import { motion } from 'framer-motion'
import { useScrollReveal, fadeUpVariants } from '../hooks/useScrollReveal'
import { experience } from '../data/portfolioData'
import { FiMapPin, FiCalendar } from 'react-icons/fi'

const ACCENT = {
  indigo: { dot: '#818cf8', border: 'rgba(99,102,241,0.25)', tag: { color: '#818cf8', bg: 'rgba(99,102,241,0.08)', border: 'rgba(99,102,241,0.2)' } },
  cyan:   { dot: '#22d3ee', border: 'rgba(6,182,212,0.25)',  tag: { color: '#22d3ee', bg: 'rgba(6,182,212,0.08)',  border: 'rgba(6,182,212,0.2)'  } },
}

function ExperienceBlock({ exp, index }) {
  const a = ACCENT[exp.color] || ACCENT.indigo

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.55, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      className="grid sm:grid-cols-[200px_1fr] gap-6 sm:gap-10 py-10"
    >
      {/* Left: meta */}
      <div className="space-y-1.5 sm:pt-0.5">
        <p className="text-xs font-mono tabular" style={{ color: 'var(--text-3)' }}>{exp.period}</p>
        <p className="font-semibold text-sm" style={{ color: 'var(--text-1)' }}>{exp.company}</p>
        <div className="flex items-center gap-1 text-xs" style={{ color: 'var(--text-3)' }}>
          <FiMapPin size={10} />
          {exp.location}
        </div>
        <span
          className="inline-block text-[10px] font-mono px-2 py-0.5 rounded mt-1"
          style={{ color: a.tag.color, background: a.tag.bg, border: `1px solid ${a.tag.border}` }}
        >
          {exp.type}
        </span>
      </div>

      {/* Right: content */}
      <div>
        <h3 className="text-lg font-semibold mb-4" style={{ color: 'var(--text-1)' }}>
          {exp.role}
        </h3>

        <ul className="space-y-3 mb-5">
          {exp.bullets.map((bullet, i) => (
            <motion.li
              key={i}
              className="flex items-start gap-3 text-sm leading-relaxed"
              style={{ color: 'var(--text-2)' }}
              initial={{ opacity: 0, x: -8 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: 0.05 + i * 0.04 }}
            >
              <span
                className="w-1 h-1 rounded-full mt-2 flex-shrink-0"
                style={{ background: a.dot }}
              />
              {bullet}
            </motion.li>
          ))}
        </ul>

        {/* Tech stack */}
        <div className="flex flex-wrap gap-2">
          {exp.techStack.map((tech) => (
            <span
              key={tech}
              className="text-[11px] font-mono px-2.5 py-1 rounded-lg"
              style={{ color: 'var(--text-3)', background: 'var(--surface)', border: '1px solid var(--border)' }}
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  )
}

export default function Experience() {
  const { ref, controls } = useScrollReveal()

  return (
    <section
      id="experience"
      className="py-28 sm:py-36 px-6 sm:px-10"
      style={{ background: 'var(--surface)', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)' }}
    >
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="mb-4">
          <motion.p
            className="eyebrow mb-3"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Experience
          </motion.p>
          <motion.h2
            className="section-title text-3xl sm:text-4xl"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Where I've Made Impact
          </motion.h2>
        </div>

        {/* Experience blocks */}
        <div>
          {experience.map((exp, i) => (
            <div key={exp.id}>
              <ExperienceBlock exp={exp} index={i} />
              {i < experience.length - 1 && <hr className="rule" />}
            </div>
          ))}
        </div>

        {/* Education */}
        <hr className="rule mt-0 mb-8" />
        <motion.div
          className="grid sm:grid-cols-[200px_1fr] gap-6 sm:gap-10 py-4"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="space-y-1">
            <p className="text-xs font-mono" style={{ color: 'var(--text-3)' }}>2023 – 2025</p>
            <p className="text-sm font-semibold" style={{ color: 'var(--text-1)' }}>Binghamton University</p>
            <p className="text-xs" style={{ color: 'var(--text-3)' }}>Binghamton, NY</p>
          </div>
          <div>
            <h3 className="text-base font-semibold mb-1" style={{ color: 'var(--text-1)' }}>
              M.S. Data Science (in progress)
            </h3>
            <p className="text-sm" style={{ color: 'var(--text-2)' }}>
              Advanced coursework in Machine Learning, Data Engineering, and Statistical Modeling
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
