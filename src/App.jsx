import { useState, useEffect } from 'react'
import { AnimatePresence } from 'framer-motion'
import LoadingScreen from './components/LoadingScreen'
import ScrollProgress from './components/ScrollProgress'
import CursorGlow from './components/CursorGlow'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Dashboard from './components/Dashboard'
import GitHub from './components/GitHub'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  const [loading, setLoading] = useState(true)
  const [isDark, setIsDark] = useState(true)

  useEffect(() => {
    const root = document.documentElement
    if (isDark) {
      root.classList.add('dark')
    } else {
      root.classList.remove('dark')
    }
  }, [isDark])

  return (
    <>
      <AnimatePresence mode="wait">
        {loading && (
          <LoadingScreen key="loader" onComplete={() => setLoading(false)} />
        )}
      </AnimatePresence>

      {!loading && (
        <div className="min-h-screen" style={{ background: 'var(--bg)', color: 'var(--text-1)' }}>
          <ScrollProgress />
          <CursorGlow />
          <Navbar isDark={isDark} setIsDark={setIsDark} />
          <main>
            <Hero />
            <About />
            <Skills />
            <Projects />
            <Experience />
            <Dashboard />
            <GitHub />
            <Contact />
          </main>
          <Footer />
        </div>
      )}
    </>
  )
}
