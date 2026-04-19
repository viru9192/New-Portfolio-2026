import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiSun, FiMoon, FiMenu, FiX, FiDownload } from 'react-icons/fi'

const NAV_LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Dashboard', href: '#dashboard' },
  { label: 'GitHub', href: '#github' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar({ isDark, setIsDark }) {
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('hero')
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60)
      const sections = NAV_LINKS.map((l) => l.href.slice(1))
      for (const id of [...sections].reverse()) {
        const el = document.getElementById(id)
        if (el && window.scrollY >= el.offsetTop - 140) {
          setActiveSection(id)
          break
        }
      }
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollTo = (href) => {
    setMobileOpen(false)
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <>
      <motion.nav
        className="fixed z-50 transition-all duration-500"
        style={
          scrolled
            ? { top: 12, left: '50%', transform: 'translateX(-50%)' }
            : { top: 0, left: 0, right: 0 }
        }
        initial={{ y: -70, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        <div
          className="transition-all duration-500"
          style={
            scrolled
              ? {
                  background: 'var(--navbar-glass)',
                  backdropFilter: 'blur(20px)',
                  border: '1px solid var(--border)',
                  borderRadius: 16,
                  padding: '8px 16px',
                }
              : {
                  background: 'transparent',
                  padding: '0 40px',
                  maxWidth: 1152,
                  margin: '0 auto',
                }
          }
        >
          <div className={`flex items-center ${scrolled ? 'gap-1 h-11' : 'gap-2 h-16 max-w-6xl mx-auto'}`}>
            {/* Logo */}
            <button
              className="flex items-center gap-2.5 mr-2 group cursor-pointer"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            >
              <div
                className="w-7 h-7 rounded-lg bg-indigo-600 flex items-center justify-center text-xs font-bold font-mono text-white"
              >
                VM
              </div>
              {!scrolled && (
                <span className="font-semibold text-sm hidden sm:block transition-colors" style={{ color: 'var(--text-2)' }}>
                  Viranchi More
                </span>
              )}
            </button>

            {/* Desktop nav */}
            <div className="hidden md:flex items-center">
              {NAV_LINKS.map((link) => {
                const isActive = activeSection === link.href.slice(1)
                return (
                  <button
                    key={link.href}
                    onClick={() => scrollTo(link.href)}
                    className="relative px-3 py-1.5 text-sm transition-colors duration-150 cursor-pointer rounded-lg"
                    style={{ color: isActive ? 'var(--text-1)' : 'var(--text-3)' }}
                    onMouseEnter={e => { if (!isActive) e.target.style.color = 'var(--text-2)' }}
                    onMouseLeave={e => { if (!isActive) e.target.style.color = 'var(--text-3)' }}
                  >
                    {isActive && (
                      <motion.span
                        layoutId="nav-pill"
                        className="absolute inset-0 rounded-lg"
                        style={{ background: 'rgba(79,127,255,0.1)', border: '1px solid rgba(79,127,255,0.2)' }}
                        transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                      />
                    )}
                    <span className="relative">{link.label}</span>
                  </button>
                )
              })}
            </div>

            {/* Right */}
            <div className="flex items-center gap-1.5 ml-auto">
              <button
                onClick={() => setIsDark(!isDark)}
                className="p-2 rounded-lg transition-colors cursor-pointer"
                style={{ color: 'var(--text-3)' }}
                onMouseEnter={e => e.currentTarget.style.color = 'var(--text-1)'}
                onMouseLeave={e => e.currentTarget.style.color = 'var(--text-3)'}
                aria-label="Toggle theme"
              >
                {isDark ? <FiSun size={16} /> : <FiMoon size={16} />}
              </button>

              <a
                href="/Viranchi_More_Resume.pdf"
                download
                className="hidden md:flex items-center gap-1.5 px-3.5 py-1.5 bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-semibold rounded-lg transition-all cursor-pointer"
              >
                <FiDownload size={13} />
                Resume
              </a>

              <button
                className="md:hidden p-2 rounded-lg transition-colors cursor-pointer"
                style={{ color: 'var(--text-3)' }}
                onClick={() => setMobileOpen(!mobileOpen)}
                aria-label="Toggle menu"
              >
                {mobileOpen ? <FiX size={18} /> : <FiMenu size={18} />}
              </button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="fixed inset-0 z-40 md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setMobileOpen(false)} />
            <motion.div
              className="absolute top-16 left-4 right-4 rounded-2xl p-4 shadow-2xl"
              style={{ background: 'var(--surface)', border: '1px solid var(--border)' }}
              initial={{ opacity: 0, y: -16, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -16, scale: 0.96 }}
              transition={{ duration: 0.2 }}
            >
              <div className="flex flex-col gap-0.5">
                {NAV_LINKS.map((link) => (
                  <button
                    key={link.href}
                    onClick={() => scrollTo(link.href)}
                    className="px-4 py-2.5 text-sm font-medium rounded-xl text-left transition-colors cursor-pointer"
                    style={{
                      color: activeSection === link.href.slice(1) ? '#818cf8' : 'var(--text-2)',
                      background: activeSection === link.href.slice(1) ? 'rgba(79,127,255,0.08)' : 'transparent',
                    }}
                  >
                    {link.label}
                  </button>
                ))}
                <div className="mt-2 pt-2" style={{ borderTop: '1px solid var(--border)' }}>
                  <a
                    href="/Viranchi_More_Resume.pdf"
                    download
                    className="flex items-center gap-2 px-4 py-2.5 text-sm font-semibold text-white bg-indigo-600 rounded-xl cursor-pointer"
                  >
                    <FiDownload size={14} />
                    Download Resume
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
