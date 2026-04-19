import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiGithub, FiArrowRight, FiChevronDown } from 'react-icons/fi'
import { projects } from '../data/portfolioData'

const FILTERS = ['All', 'ML', 'SQL', 'BI']

const ACCENT_MAP = {
  indigo: { text: '#818cf8', bg: 'rgba(99,102,241,0.08)', border: 'rgba(99,102,241,0.2)' },
  cyan:   { text: '#22d3ee', bg: 'rgba(6,182,212,0.08)',  border: 'rgba(6,182,212,0.2)'  },
  violet: { text: '#a78bfa', bg: 'rgba(139,92,246,0.08)', border: 'rgba(139,92,246,0.2)' },
  emerald:{ text: '#34d399', bg: 'rgba(52,211,153,0.08)', border: 'rgba(52,211,153,0.2)' },
  rose:   { text: '#fb7185', bg: 'rgba(251,113,133,0.08)', border: 'rgba(251,113,133,0.2)'},
}

function ProjectRow({ project, index }) {
  const [open, setOpen] = useState(false)
  const accent = ACCENT_MAP[project.color] || ACCENT_MAP.indigo
  const mainMetric = Object.values(project.metrics)[0]

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.5, delay: index * 0.06, ease: [0.22, 1, 0.36, 1] }}
    >
      {/* Main row */}
      <div
        className="group py-6 sm:py-8 px-4 -mx-4 rounded-2xl grid grid-cols-[2rem_1fr] sm:grid-cols-[3rem_1fr_auto] gap-4 sm:gap-6 cursor-pointer transition-colors duration-200 hover:bg-[var(--surface-alt)]"
        onClick={() => setOpen(!open)}
      >
        {/* Index number */}
        <span
          className="text-sm font-mono mt-1 tabular select-none"
          style={{ color: 'var(--text-3)' }}
        >
          {String(index + 1).padStart(2, '0')}
        </span>

        {/* Content */}
        <div className="min-w-0">
          {/* Title row */}
          <div className="flex flex-wrap items-center gap-3 mb-2">
            <h3
              className="text-base sm:text-lg font-semibold transition-colors duration-150"
              style={{ color: 'var(--text-1)' }}
            >
              {project.title}
            </h3>
            <span
              className="text-[10px] font-mono font-semibold px-2 py-0.5 rounded-md"
              style={{ color: accent.text, background: accent.bg, border: `1px solid ${accent.border}` }}
            >
              {project.category}
            </span>
          </div>

          {/* Killer metric */}
          <div
            className="text-xl sm:text-2xl font-bold font-mono tabular mb-2"
            style={{ color: accent.text }}
          >
            {mainMetric}
          </div>

          {/* Problem — always visible */}
          <p className="text-sm leading-relaxed max-w-2xl" style={{ color: 'var(--text-2)' }}>
            {project.problem}
          </p>

          {/* Tech stack */}
          <div className="flex flex-wrap gap-x-3 gap-y-1 mt-3">
            {project.stack.map((tech) => (
              <span key={tech} className="text-xs font-mono" style={{ color: 'var(--text-3)' }}>
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Actions — desktop */}
        <div className="hidden sm:flex flex-col items-end gap-3 flex-shrink-0">
          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            onClick={e => e.stopPropagation()}
            className="flex items-center gap-1.5 text-xs font-medium transition-colors duration-150 cursor-pointer"
            style={{ color: 'var(--text-3)' }}
            onMouseEnter={e => e.currentTarget.style.color = 'var(--text-1)'}
            onMouseLeave={e => e.currentTarget.style.color = 'var(--text-3)'}
          >
            <FiGithub size={13} />
            Code
          </a>
          <motion.div
            animate={{ rotate: open ? 180 : 0 }}
            transition={{ duration: 0.2 }}
            style={{ color: 'var(--text-3)' }}
          >
            <FiChevronDown size={15} />
          </motion.div>
        </div>
      </div>

      {/* Expandable: approach + full impact */}
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <div
              className="pb-8 pl-8 sm:pl-12 space-y-4"
            >
              {/* Approach */}
              <div>
                <p className="eyebrow mb-2">Approach</p>
                <p className="text-sm leading-relaxed max-w-2xl" style={{ color: 'var(--text-2)' }}>
                  {project.approach}
                </p>
              </div>

              {/* Impact */}
              <div>
                <p className="eyebrow mb-2">Business Impact</p>
                <ul className="space-y-1.5">
                  {project.impact.map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm" style={{ color: 'var(--text-2)' }}>
                      <span className="mt-1.5 w-1 h-1 rounded-full flex-shrink-0" style={{ background: accent.text }} />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Rule between items */}
      <hr className="rule" />
    </motion.div>
  )
}

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('All')

  const filtered = projects.filter(
    (p) => activeFilter === 'All' || p.category === activeFilter
  )

  return (
    <section id="projects" className="py-28 sm:py-36 px-6 sm:px-10" style={{ background: 'var(--bg)' }}>
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
              Selected Work
            </motion.p>
            <motion.h2
              className="section-title text-3xl sm:text-4xl"
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              Impact-Driven Projects
            </motion.h2>
          </div>

          {/* Filter */}
          <div className="flex gap-1 p-1 rounded-xl" style={{ background: 'var(--surface)', border: '1px solid var(--border)' }}>
            {FILTERS.map((f) => (
              <button
                key={f}
                onClick={() => setActiveFilter(f)}
                className="px-3 py-1.5 rounded-lg text-sm font-medium transition-all duration-150 cursor-pointer"
                style={{
                  background: activeFilter === f ? 'rgba(79,127,255,0.15)' : 'transparent',
                  color: activeFilter === f ? '#818cf8' : 'var(--text-3)',
                  border: activeFilter === f ? '1px solid rgba(79,127,255,0.25)' : '1px solid transparent',
                }}
              >
                {f}
              </button>
            ))}
          </div>
        </div>

        {/* Project list */}
        <hr className="rule mb-0" />
        <AnimatePresence mode="wait">
          <div key={activeFilter}>
            {filtered.map((project, i) => (
              <ProjectRow key={project.id} project={project} index={i} />
            ))}
          </div>
        </AnimatePresence>

        {/* Footer CTA */}
        <motion.div
          className="pt-10 flex items-center justify-between"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
        >
          <p className="text-sm" style={{ color: 'var(--text-3)' }}>
            {filtered.length} project{filtered.length !== 1 ? 's' : ''} shown
          </p>
          <a
            href="https://github.com/viru9192"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 text-sm font-medium transition-colors cursor-pointer"
            style={{ color: 'var(--text-3)' }}
            onMouseEnter={e => e.currentTarget.style.color = 'var(--text-1)'}
            onMouseLeave={e => e.currentTarget.style.color = 'var(--text-3)'}
          >
            <FiGithub size={14} />
            All repos on GitHub
            <FiArrowRight size={13} />
          </a>
        </motion.div>
      </div>
    </section>
  )
}
