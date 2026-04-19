import { motion } from 'framer-motion'
import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi'
import { personal } from '../data/portfolioData'

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer
      className="px-6 sm:px-10 py-10"
      style={{ background: 'var(--surface)', borderTop: '1px solid var(--border)' }}
    >
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
        {/* Brand */}
        <div className="flex items-center gap-3">
          <div className="w-7 h-7 rounded-lg bg-indigo-600 flex items-center justify-center text-xs font-bold font-mono text-white">
            VM
          </div>
          <div>
            <p className="text-sm font-semibold" style={{ color: 'var(--text-1)' }}>Viranchi More</p>
            <p className="text-xs" style={{ color: 'var(--text-3)' }}>Data Scientist & ML Engineer</p>
          </div>
        </div>

        {/* Copyright */}
        <p className="text-xs order-last sm:order-none" style={{ color: 'var(--text-3)' }}>
          © {year} Viranchi More
        </p>

        {/* Socials */}
        <div className="flex items-center gap-1">
          {[
            { Icon: FiGithub, href: personal.github, label: 'GitHub' },
            { Icon: FiLinkedin, href: personal.linkedin, label: 'LinkedIn' },
            { Icon: FiMail, href: `mailto:${personal.email}`, label: 'Email' },
          ].map(({ Icon, href, label }) => (
            <motion.a
              key={label}
              href={href}
              target="_blank"
              rel="noreferrer"
              className="p-2.5 rounded-lg transition-colors cursor-pointer"
              style={{ color: 'var(--text-3)' }}
              whileHover={{ scale: 1.1, color: 'var(--text-1)' }}
              whileTap={{ scale: 0.9 }}
              aria-label={label}
            >
              <Icon size={16} />
            </motion.a>
          ))}
        </div>
      </div>
    </footer>
  )
}
