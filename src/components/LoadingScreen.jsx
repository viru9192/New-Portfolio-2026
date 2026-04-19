import { motion, AnimatePresence } from 'framer-motion'
import { useEffect, useState } from 'react'

const STREAM_CHARS = ['0', '1', '%', '#', '@', '>', '<', '/', '\\', '|', '{', '}']

function StreamColumn({ delay }) {
  const chars = Array.from({ length: 12 }, () =>
    STREAM_CHARS[Math.floor(Math.random() * STREAM_CHARS.length)]
  )
  return (
    <div className="flex flex-col gap-1 opacity-30">
      {chars.map((char, i) => (
        <motion.span
          key={i}
          className="text-xs font-mono text-indigo-400"
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 1, 0] }}
          transition={{ duration: 1.5, delay: delay + i * 0.1, repeat: Infinity }}
        >
          {char}
        </motion.span>
      ))}
    </div>
  )
}

export default function LoadingScreen({ onComplete }) {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const steps = [15, 35, 55, 75, 90, 100]
    const timers = steps.map((target, i) =>
      setTimeout(() => {
        setProgress(target)
        if (target === 100) setTimeout(onComplete, 400)
      }, i * 300 + 200)
    )
    return () => timers.forEach(clearTimeout)
  }, [onComplete])

  const loadingSteps = [
    { label: 'Initializing data pipelines...', threshold: 15 },
    { label: 'Loading ML models...', threshold: 35 },
    { label: 'Connecting to dashboards...', threshold: 55 },
    { label: 'Processing analytics...', threshold: 75 },
    { label: 'Rendering visualizations...', threshold: 90 },
    { label: 'Ready.', threshold: 100 },
  ]

  const currentStep = loadingSteps.findLast((s) => progress >= s.threshold) || loadingSteps[0]

  return (
    <motion.div
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-navy-950 overflow-hidden"
      exit={{ opacity: 0, scale: 1.05 }}
      transition={{ duration: 0.5, ease: 'easeInOut' }}
    >
      {/* Background data streams */}
      <div className="absolute inset-0 flex justify-around items-start pt-4 pointer-events-none overflow-hidden">
        {Array.from({ length: 20 }).map((_, i) => (
          <StreamColumn key={i} delay={i * 0.15} />
        ))}
      </div>

      {/* Radial glow */}
      <div className="absolute inset-0 bg-gradient-radial from-indigo-900/20 via-transparent to-transparent pointer-events-none" />

      {/* Center content */}
      <div className="relative z-10 flex flex-col items-center gap-8">
        {/* Logo / Monogram */}
        <motion.div
          className="relative w-24 h-24 flex items-center justify-center"
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-indigo-600 to-violet-700 opacity-20 blur-xl animate-pulse-slow" />
          <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-indigo-600/30 to-violet-600/30 border border-indigo-500/30 flex items-center justify-center backdrop-blur-sm">
            <span className="font-mono font-bold text-3xl gradient-text">VM</span>
          </div>
        </motion.div>

        {/* Name */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          <h1 className="text-2xl font-bold text-slate-100">Viranchi More</h1>
          <p className="text-sm font-mono text-slate-400 mt-1">Data Scientist & ML Engineer</p>
        </motion.div>

        {/* Progress bar */}
        <motion.div
          className="w-64 flex flex-col gap-3"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <div className="w-full h-1 bg-slate-800 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-gradient-to-r from-indigo-500 via-violet-500 to-cyan-500"
              initial={{ width: '0%' }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.4, ease: 'easeOut' }}
            />
          </div>
          <div className="flex justify-between text-xs font-mono text-slate-500">
            <motion.span
              key={currentStep.label}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-indigo-400"
            >
              {currentStep.label}
            </motion.span>
            <span>{progress}%</span>
          </div>
        </motion.div>
      </div>
    </motion.div>
  )
}
