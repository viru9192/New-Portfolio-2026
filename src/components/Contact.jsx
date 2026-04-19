import { useState } from 'react'
import { motion } from 'framer-motion'
import { FiMail, FiGithub, FiLinkedin, FiArrowRight, FiCopy, FiCheck } from 'react-icons/fi'
import { useScrollReveal, fadeUpVariants } from '../hooks/useScrollReveal'
import { personal } from '../data/portfolioData'

const LINKS = [
  {
    Icon: FiMail,
    label: 'Email',
    display: personal.email,
    href: `mailto:${personal.email}`,
    copyText: personal.email,
  },
  {
    Icon: FiLinkedin,
    label: 'LinkedIn',
    display: 'linkedin.com/in/viranchimore',
    href: personal.linkedin,
    copyText: 'linkedin.com/in/viranchimore',
  },
  {
    Icon: FiGithub,
    label: 'GitHub',
    display: 'github.com/viru9192',
    href: personal.github,
    copyText: 'github.com/viru9192',
  },
]

function CopyBtn({ text }) {
  const [copied, setCopied] = useState(false)
  const copy = async () => {
    await navigator.clipboard.writeText(text)
    setCopied(true)
    setTimeout(() => setCopied(false), 1800)
  }
  return (
    <button
      onClick={copy}
      className="p-1.5 rounded-lg transition-all cursor-pointer opacity-0 group-hover:opacity-100"
      style={{ color: copied ? '#34d399' : 'var(--text-3)' }}
      aria-label="Copy"
    >
      {copied ? <FiCheck size={13} /> : <FiCopy size={13} />}
    </button>
  )
}

export default function Contact() {
  const { ref, controls } = useScrollReveal()

  return (
    <section id="contact" className="py-28 sm:py-36 px-6 sm:px-10" style={{ background: 'var(--bg)' }}>
      <div className="max-w-6xl mx-auto">

        {/* Eyebrow */}
        <motion.p
          className="eyebrow mb-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          Contact
        </motion.p>

        <div className="grid lg:grid-cols-2 gap-16 items-start">

          {/* Left: statement */}
          <motion.div
            ref={ref}
            initial="hidden"
            animate={controls}
            variants={fadeUpVariants}
          >
            <h2 className="section-title text-3xl sm:text-5xl mb-6 leading-tight">
              Let's work<br />
              <span className="gradient-text">together.</span>
            </h2>
            <p className="text-base leading-relaxed mb-8 max-w-md" style={{ color: 'var(--text-2)' }}>
              I'm actively targeting <span className="font-semibold" style={{ color: 'var(--text-1)' }}>Data Scientist</span>,{' '}
              <span className="font-semibold" style={{ color: 'var(--text-1)' }}>ML Engineer</span>, and{' '}
              <span className="font-semibold" style={{ color: 'var(--text-1)' }}>BI Developer</span> roles in the United States
              for 2026. Whether you have a position, a project, or just want to talk data — reach out.
            </p>

            {/* Availability pill */}
            <div
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium"
              style={{ background: 'rgba(52,211,153,0.06)', border: '1px solid rgba(52,211,153,0.2)', color: '#34d399' }}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              Available · Full-time · US Work Authorization
            </div>
          </motion.div>

          {/* Right: contact links */}
          <motion.div
            className="space-y-3"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            {LINKS.map(({ Icon, label, display, href, copyText }) => (
              <div
                key={label}
                className="group card-outlined flex items-center justify-between p-4"
              >
                <div className="flex items-center gap-4 min-w-0">
                  <div
                    className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ background: 'rgba(79,127,255,0.08)', border: '1px solid rgba(79,127,255,0.15)' }}
                  >
                    <Icon size={15} style={{ color: '#818cf8' }} />
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs mb-0.5" style={{ color: 'var(--text-3)' }}>{label}</p>
                    <a
                      href={href}
                      target={label !== 'Email' ? '_blank' : undefined}
                      rel="noreferrer"
                      className="text-sm font-medium truncate block transition-colors cursor-pointer"
                      style={{ color: 'var(--text-1)' }}
                      onMouseEnter={e => e.target.style.color = '#818cf8'}
                      onMouseLeave={e => e.target.style.color = 'var(--text-1)'}
                    >
                      {display}
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-1 flex-shrink-0">
                  <CopyBtn text={copyText} />
                  <a
                    href={href}
                    target={label !== 'Email' ? '_blank' : undefined}
                    rel="noreferrer"
                    className="p-1.5 rounded-lg transition-all cursor-pointer"
                    style={{ color: 'var(--text-3)' }}
                    onMouseEnter={e => e.currentTarget.style.color = 'var(--text-1)'}
                    onMouseLeave={e => e.currentTarget.style.color = 'var(--text-3)'}
                    aria-label={`Open ${label}`}
                  >
                    <FiArrowRight size={13} />
                  </a>
                </div>
              </div>
            ))}

            {/* Quick email CTA */}
            <motion.a
              href={`mailto:${personal.email}?subject=Opportunity for Viranchi More`}
              className="btn-primary w-full justify-center mt-4"
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.98 }}
            >
              Send an Email
              <FiArrowRight size={15} />
            </motion.a>

            <p className="text-xs text-center" style={{ color: 'var(--text-3)' }}>
              Typical response within 24 hours.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
