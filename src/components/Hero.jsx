import { memo } from 'react'
import { motion } from 'framer-motion'
import { TypeAnimation } from 'react-type-animation'
import { FiArrowRight, FiArrowDown, FiGithub, FiTrendingUp, FiDatabase, FiPieChart, FiDollarSign } from 'react-icons/fi'
import CountUp from 'react-countup'
import { useInView } from 'react-intersection-observer'
import { personal } from '../data/portfolioData'

const ACHIEVEMENT_CARDS = [
  { icon: FiTrendingUp, metricType: 'percent', label: 'Forecast Accuracy', sub: 'XGBoost + Prophet', color: '#4f7fff', bg: 'rgba(79,127,255,0.07)', border: 'rgba(79,127,255,0.22)' },
  { icon: FiDatabase, metricType: 'millions', label: 'Daily Records', sub: 'Azure Data Factory', color: '#06b6d4', bg: 'rgba(6,182,212,0.07)', border: 'rgba(6,182,212,0.22)' },
  { icon: FiPieChart, metricType: 'plus', label: 'VP Dashboards', sub: 'Power BI · DAX', color: '#a78bfa', bg: 'rgba(167,139,250,0.07)', border: 'rgba(167,139,250,0.22)' },
  { icon: FiDollarSign, metricType: 'dollar', label: 'Budget Modeled', sub: 'Ensemble ML', color: '#34d399', bg: 'rgba(52,211,153,0.07)', border: 'rgba(52,211,153,0.22)' },
]

const StatCard = memo(function StatCard({ card, index }) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 })
  const Icon = card.icon
  const renderNum = () => {
    if (!inView) return '—'
    if (card.metricType === 'percent') return <CountUp end={92} duration={1.8} delay={index * 0.08} suffix="%" />
    if (card.metricType === 'millions') return <CountUp end={2} duration={1.8} delay={index * 0.08} suffix="M+" />
    if (card.metricType === 'plus') return <CountUp end={15} duration={1.8} delay={index * 0.08} suffix="+" />
    return <><span>$</span><CountUp end={50} duration={1.8} delay={index * 0.08} suffix="M+" /></>
  }
  return (
    <motion.div
      ref={ref}
      className="relative rounded-2xl p-4 cursor-default overflow-hidden"
      style={{ background: card.bg, border: `1px solid ${card.border}` }}
      initial={{ opacity: 0, y: 14 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.65 + index * 0.08 }}
      whileHover={{ y: -2, transition: { duration: 0.15 } }}
    >
      <div className="absolute left-0 top-3 bottom-3 w-0.5 rounded-full" style={{ background: card.color }} />
      <div className="flex items-start justify-between mb-2">
        <div className="w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0" style={{ background: `${card.color}20` }}>
          <Icon size={13} style={{ color: card.color }} />
        </div>
        <span className="text-sm font-mono font-bold tabular" style={{ color: card.color }}>{renderNum()}</span>
      </div>
      <p className="text-xs font-semibold mb-0.5" style={{ color: 'var(--text-1)' }}>{card.label}</p>
      <p className="text-[10px] font-mono" style={{ color: 'var(--text-3)' }}>{card.sub}</p>
    </motion.div>
  )
})

const MARQUEE_ITEMS = ['92% Forecasting Accuracy', '2M+ Banking Records Processed', '$50M+ Revenue Forecasted', '15+ VP-Level Dashboards', '40% Faster Reporting', '25% Higher Data Accuracy', '35–40% DB Performance Boost', '50K+ Student Records Analyzed']

function MarqueeStrip() {
  const items = [...MARQUEE_ITEMS, ...MARQUEE_ITEMS]
  return (
    <div className="relative overflow-hidden border-y py-3" style={{ borderColor: 'var(--border)' }}>
      <div className="flex gap-12 animate-marquee whitespace-nowrap">
        {items.map((item, i) => (
          <span key={i} className="inline-flex items-center gap-3 text-xs font-mono flex-shrink-0" style={{ color: 'var(--text-2)' }}>
            <span className="w-1 h-1 rounded-full bg-indigo-400 opacity-70 flex-shrink-0" />
            {item}
          </span>
        ))}
      </div>
    </div>
  )
}

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex flex-col justify-between overflow-hidden" style={{ background: 'var(--bg)' }}>
      <div className="absolute pointer-events-none" style={{ top: '-10%', left: '-5%', width: '55%', height: '65%', background: 'radial-gradient(ellipse, rgba(79,127,255,0.05) 0%, transparent 65%)' }} />

      <div className="flex-1 flex items-center max-w-6xl mx-auto w-full px-6 sm:px-10 pt-24 pb-10">
        <div className="grid lg:grid-cols-[1fr_460px] gap-10 lg:gap-14 items-center w-full">

          {/* LEFT */}
          <div className="order-2 lg:order-1">
            <motion.div className="inline-flex mb-8" initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium" style={{ background: 'rgba(52,211,153,0.08)', border: '1px solid rgba(52,211,153,0.22)', color: '#16a34a' }}>
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                Open to US Data Roles · 2026
              </div>
            </motion.div>

            <motion.h1
              className="font-display font-bold tracking-tight leading-[1.05] mb-3"
              style={{ fontSize: 'clamp(2.5rem, 4.5vw, 3.75rem)', color: 'var(--text-1)' }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            >
              Viranchi More
            </motion.h1>

            <motion.div className="flex items-center gap-3 mb-6" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, delay: 0.3 }}>
              <div className="w-7 h-px bg-indigo-500 flex-shrink-0" />
              <span className="text-base sm:text-lg font-medium" style={{ color: 'var(--text-2)' }}>
                <TypeAnimation sequence={['Data Analyst', 2200, 'Data Scientist', 2200, 'ML Engineer', 2200, 'BI Developer', 2200]} wrapper="span" speed={55} repeat={Infinity} />
              </span>
            </motion.div>

            <motion.p className="text-sm sm:text-base leading-relaxed mb-8 max-w-lg" style={{ color: 'var(--text-2)' }} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.4 }}>
              3+ years engineering ML pipelines, ETL systems, and executive dashboards. From{' '}
              <span className="font-semibold" style={{ color: 'var(--text-1)' }}>2M+ banking records</span> at TCS to{' '}
              <span className="font-semibold" style={{ color: 'var(--text-1)' }}>$50M+ budget forecasts</span> at Binghamton.
            </motion.p>

            <motion.div className="flex flex-wrap items-center gap-3 mb-10" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, delay: 0.5 }}>
              <motion.a href="/Viranchi_More_Resume.pdf" download className="btn-primary text-sm" whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.97 }}>
                Download Resume <FiArrowRight size={14} />
              </motion.a>
              <motion.a href={personal.github} target="_blank" rel="noreferrer" className="btn-ghost text-sm" whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.97 }}>
                <FiGithub size={14} /> GitHub
              </motion.a>
              <button onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })} className="text-sm font-medium transition-colors cursor-pointer" style={{ color: 'var(--text-3)' }} onMouseEnter={e => e.currentTarget.style.color = 'var(--text-2)'} onMouseLeave={e => e.currentTarget.style.color = 'var(--text-3)'}>
                Get in touch →
              </button>
            </motion.div>

            <motion.div className="flex items-center gap-2" style={{ color: 'var(--text-3)' }} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.2 }}>
              <motion.div animate={{ y: [0, 5, 0] }} transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}>
                <FiArrowDown size={13} />
              </motion.div>
              <span className="text-[10px] font-mono tracking-widest uppercase">Scroll</span>
            </motion.div>
          </div>

          {/* RIGHT: Photo + cards */}
          <div className="order-1 lg:order-2 flex flex-col items-center gap-6">

            {/* Photo */}
            <motion.div className="relative" initial={{ opacity: 0, scale: 0.92 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}>
              <div className="absolute -inset-3 rounded-3xl blur-3xl opacity-20 animate-glow-pulse" style={{ background: 'linear-gradient(135deg, #4f7fff, #a78bfa, #06b6d4)' }} />
              <div className="relative rounded-3xl overflow-hidden" style={{ width: '220px', height: '260px', border: '2px solid rgba(99,102,241,0.3)', boxShadow: '0 24px 60px rgba(0,0,0,0.18)' }}>
                <img src="/New-Portfolio-2026/Viranchi_photo.jpeg" alt="Viranchi More" className="w-full h-full object-cover object-top" />
                <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.25) 0%, transparent 50%)' }} />
              </div>
              <div className="absolute -bottom-3.5 left-1/2 -translate-x-1/2 flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-[10px] font-semibold whitespace-nowrap shadow-lg" style={{ background: 'var(--surface)', border: '1px solid rgba(52,211,153,0.35)', color: '#16a34a' }}>
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                Available · Full-time · US Auth
              </div>
            </motion.div>

            {/* 2×2 Achievement cards */}
            <motion.div className="grid grid-cols-2 gap-3 w-full mt-1" initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.5 }}>
              {ACHIEVEMENT_CARDS.map((card, i) => (
                <StatCard key={card.label} card={card} index={i} />
              ))}
            </motion.div>

            <motion.p className="text-[10px] font-mono text-center" style={{ color: 'var(--text-3)' }} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.1 }}>
              Verified outcomes · 2021–2026
            </motion.p>
          </div>

        </div>
      </div>

      <MarqueeStrip />
    </section>
  )
}
