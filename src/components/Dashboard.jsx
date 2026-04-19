import { memo } from 'react'
import { motion } from 'framer-motion'
import {
  AreaChart, Area, BarChart, Bar, PieChart, Pie, Cell,
  XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
} from 'recharts'
import CountUp from 'react-countup'
import { useInView } from 'react-intersection-observer'
import { kpiData, performanceChartData, techStackDistribution } from '../data/portfolioData'
import { FiZap, FiTarget, FiCheckCircle, FiTrendingUp, FiRefreshCw } from 'react-icons/fi'

const KPI_ICONS = [FiZap, FiTarget, FiCheckCircle, FiTrendingUp]

const CustomTooltip = ({ active, payload, label }) => {
  if (!active || !payload?.length) return null
  return (
    <motion.div
      initial={{ opacity: 0, y: -6, scale: 0.96 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      className="px-4 py-3 rounded-2xl shadow-2xl"
      style={{ background: 'var(--surface)', border: '1px solid var(--border-strong)', minWidth: 148 }}
    >
      <p className="text-[11px] font-semibold mb-2.5" style={{ color: 'var(--text-1)' }}>{label}</p>
      {payload.map((p) => (
        <div key={p.dataKey} className="flex items-center justify-between gap-5 mb-1">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full" style={{ background: p.color }} />
            <span className="text-[11px]" style={{ color: 'var(--text-2)' }}>{p.name}</span>
          </div>
          <span className="text-[11px] font-bold tabular" style={{ color: p.color }}>
            {p.value}{p.dataKey !== 'dashboards' ? '%' : ''}
          </span>
        </div>
      ))}
    </motion.div>
  )
}

/* Custom label rendered inside/outside pie slices */
const PieLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, value, index }) => {
  const RADIAN = Math.PI / 180
  const radius = innerRadius + (outerRadius - innerRadius) * 1.35
  const x = cx + radius * Math.cos(-midAngle * RADIAN)
  const y = cy + radius * Math.sin(-midAngle * RADIAN)
  const color = techStackDistribution[index]?.color || '#fff'
  return (
    <text x={x} y={y} fill={color} textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central" fontSize={11} fontWeight={700} fontFamily="JetBrains Mono, monospace">
      {value}%
    </text>
  )
}

const KpiCard = memo(function KpiCard({ kpi, index }) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 })
  const Icon = KPI_ICONS[index]
  return (
    <motion.div
      ref={ref}
      className="relative rounded-2xl p-5 cursor-default overflow-hidden group"
      style={{ background: 'var(--card-bg)', border: '1px solid var(--border)' }}
      initial={{ opacity: 0, y: 22 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.55, delay: index * 0.09, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -4, boxShadow: `0 16px 40px ${kpi.color}18`, transition: { duration: 0.2 } }}
    >
      {/* top colored line */}
      <motion.div
        className="absolute top-0 left-0 h-0.5 rounded-t-2xl"
        style={{ background: `linear-gradient(90deg, ${kpi.color}, transparent)` }}
        initial={{ width: '0%' }}
        animate={inView ? { width: '100%' } : {}}
        transition={{ duration: 0.9, delay: 0.3 + index * 0.09 }}
      />
      {/* blob glow */}
      <div className="absolute -top-8 -right-8 w-28 h-28 rounded-full blur-3xl opacity-0 group-hover:opacity-15 transition-opacity duration-500" style={{ background: kpi.color }} />

      <div className="flex items-start justify-between mb-4 relative">
        <motion.div
          className="w-9 h-9 rounded-xl flex items-center justify-center"
          style={{ background: `${kpi.color}18`, border: `1px solid ${kpi.color}30` }}
          whileHover={{ rotate: 8, scale: 1.1 }}
          transition={{ type: 'spring', stiffness: 400, damping: 15 }}
        >
          <Icon size={15} style={{ color: kpi.color }} />
        </motion.div>
        <div className="flex items-center gap-1 text-[10px] font-mono" style={{ color: 'var(--text-3)' }}>
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          live
        </div>
      </div>

      <div className="text-3xl font-bold tabular mb-1" style={{ color: kpi.color }}>
        {inView
          ? <CountUp end={kpi.value} duration={2.2} delay={0.1 + index * 0.09} suffix={kpi.suffix} />
          : <span>0{kpi.suffix}</span>}
      </div>
      <p className="text-xs font-medium mb-4" style={{ color: 'var(--text-2)' }}>{kpi.label}</p>

      <div className="h-1 rounded-full overflow-hidden" style={{ background: 'var(--border)' }}>
        <motion.div
          className="h-full rounded-full"
          style={{ background: `linear-gradient(90deg, ${kpi.color}, ${kpi.color}70)` }}
          initial={{ width: '0%' }}
          animate={inView ? { width: `${kpi.value}%` } : {}}
          transition={{ duration: 1.8, delay: 0.5 + index * 0.09, ease: [0.22, 1, 0.36, 1] }}
        />
      </div>
    </motion.div>
  )
})

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.07 } },
}
const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
}

export default function Dashboard() {
  const { ref: chartsRef, inView: chartsInView } = useInView({ triggerOnce: true, threshold: 0.08 })

  return (
    <section id="dashboard" className="py-28 sm:py-36 px-6 sm:px-10" style={{ background: 'var(--bg)' }}>
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-12">
          <div>
            <motion.p className="eyebrow mb-3" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
              BI Showcase
            </motion.p>
            <motion.h2
              className="section-title text-3xl sm:text-4xl"
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55 }}
            >
              Live Analytics Dashboard
            </motion.h2>
          </div>
          <motion.p
            className="text-sm max-w-xs leading-relaxed"
            style={{ color: 'var(--text-3)' }}
            initial={{ opacity: 0, x: 10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
          >
            Executive-grade BI I build daily — scroll to trigger live counters &amp; charts.
          </motion.p>
        </div>

        {/* Chrome bar */}
        <motion.div
          className="rounded-2xl mb-5 flex items-center justify-between px-4 py-3"
          style={{ background: 'var(--surface)', border: '1px solid var(--border)' }}
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
        >
          <div className="flex items-center gap-3">
            <div className="flex gap-1.5">
              {['#ff5f57', '#febc2e', '#28c840'].map((c) => (
                <motion.div key={c} className="w-3 h-3 rounded-full" style={{ background: c }} whileHover={{ scale: 1.3 }} transition={{ type: 'spring', stiffness: 400 }} />
              ))}
            </div>
            <span className="text-xs sm:text-sm font-mono" style={{ color: 'var(--text-2)' }}>vm_analytics_dashboard.pbix</span>
          </div>
          <div className="flex items-center gap-3 text-xs font-mono" style={{ color: 'var(--text-3)' }}>
            <span className="hidden sm:block">Jan – Jul 2024</span>
            <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg" style={{ background: 'rgba(52,211,153,0.08)', border: '1px solid rgba(52,211,153,0.22)', color: '#16a34a' }}>
              <FiRefreshCw size={10} className="animate-spin" style={{ animationDuration: '3s' }} />
              Live
            </div>
          </div>
        </motion.div>

        {/* KPI row */}
        <motion.div
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-5"
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
        >
          {kpiData.map((kpi, i) => <KpiCard key={kpi.label} kpi={kpi} index={i} />)}
        </motion.div>

        {/* Charts */}
        <div ref={chartsRef} className="grid lg:grid-cols-3 gap-4">

          {/* Area chart */}
          <motion.div
            className="rounded-2xl p-5 lg:col-span-2"
            style={{ background: 'var(--surface)', border: '1px solid var(--border)' }}
            initial={{ opacity: 0, x: -22 }}
            animate={chartsInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.65, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="flex items-center justify-between mb-6">
              <div>
                <h3 className="text-sm font-semibold" style={{ color: 'var(--text-1)' }}>Performance Trend</h3>
                <p className="text-xs mt-0.5" style={{ color: 'var(--text-3)' }}>Pipeline efficiency vs forecast accuracy</p>
              </div>
              <motion.span
                className="text-[10px] font-mono px-2.5 py-1 rounded-lg"
                style={{ color: '#818cf8', background: 'rgba(99,102,241,0.1)', border: '1px solid rgba(99,102,241,0.22)' }}
                initial={{ opacity: 0 }}
                animate={chartsInView ? { opacity: 1 } : {}}
                transition={{ delay: 0.4 }}
              >
                2024
              </motion.span>
            </div>
            <ResponsiveContainer width="100%" height={230}>
              <AreaChart data={performanceChartData} margin={{ top: 5, right: 10, left: -22, bottom: 0 }}>
                <defs>
                  <linearGradient id="gPipeline" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#6366f1" stopOpacity={0.3} />
                    <stop offset="95%" stopColor="#6366f1" stopOpacity={0.02} />
                  </linearGradient>
                  <linearGradient id="gAccuracy" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#06b6d4" stopOpacity={0.3} />
                    <stop offset="95%" stopColor="#06b6d4" stopOpacity={0.02} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(128,128,128,0.07)" />
                <XAxis dataKey="month" tick={{ fill: '#7880a0', fontSize: 11 }} axisLine={false} tickLine={false} />
                <YAxis tick={{ fill: '#7880a0', fontSize: 11 }} axisLine={false} tickLine={false} domain={[65, 100]} />
                <Tooltip content={<CustomTooltip />} />
                <Area type="monotone" dataKey="pipeline" name="Pipeline %" stroke="#6366f1" strokeWidth={2.5} fill="url(#gPipeline)" dot={false} activeDot={{ r: 6, fill: '#6366f1', strokeWidth: 2, stroke: '#fff' }} animationDuration={chartsInView ? 1600 : 0} />
                <Area type="monotone" dataKey="accuracy" name="Accuracy %" stroke="#06b6d4" strokeWidth={2.5} fill="url(#gAccuracy)" dot={false} activeDot={{ r: 6, fill: '#06b6d4', strokeWidth: 2, stroke: '#fff' }} animationDuration={chartsInView ? 1900 : 0} />
              </AreaChart>
            </ResponsiveContainer>

            {/* Animated legend */}
            <motion.div
              className="flex items-center gap-5 mt-4 pt-4"
              style={{ borderTop: '1px solid var(--border)' }}
              initial={{ opacity: 0 }}
              animate={chartsInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.7 }}
            >
              {[{ color: '#6366f1', label: 'Pipeline %' }, { color: '#06b6d4', label: 'Accuracy %' }].map((l) => (
                <div key={l.label} className="flex items-center gap-2">
                  <div className="w-6 h-0.5 rounded-full" style={{ background: l.color }} />
                  <span className="text-xs" style={{ color: 'var(--text-3)' }}>{l.label}</span>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Donut — with colored labels */}
          <motion.div
            className="rounded-2xl p-5"
            style={{ background: 'var(--surface)', border: '1px solid var(--border)' }}
            initial={{ opacity: 0, x: 22 }}
            animate={chartsInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.65, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          >
            <h3 className="text-sm font-semibold mb-0.5" style={{ color: 'var(--text-1)' }}>Skill Allocation</h3>
            <p className="text-xs mb-4" style={{ color: 'var(--text-3)' }}>Time split by domain</p>

            <ResponsiveContainer width="100%" height={185}>
              <PieChart>
                <Pie
                  data={techStackDistribution}
                  cx="50%" cy="50%"
                  innerRadius={50} outerRadius={72}
                  paddingAngle={4}
                  dataKey="value"
                  labelLine={false}
                  label={<PieLabel />}
                  animationBegin={chartsInView ? 0 : 9999}
                  animationDuration={1400}
                  strokeWidth={0}
                >
                  {techStackDistribution.map((e, i) => (
                    <Cell key={i} fill={e.color} opacity={0.9} />
                  ))}
                </Pie>
                <Tooltip
                  formatter={(v, name) => [`${v}%`, name]}
                  contentStyle={{ background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: 12, fontSize: 11 }}
                  itemStyle={{ color: 'inherit' }}
                />
              </PieChart>
            </ResponsiveContainer>

            <motion.div
              className="space-y-2 mt-2"
              variants={stagger}
              initial="hidden"
              animate={chartsInView ? 'visible' : 'hidden'}
            >
              {techStackDistribution.map((item) => (
                <motion.div key={item.name} className="flex items-center justify-between" variants={fadeUp}>
                  <div className="flex items-center gap-2">
                    <motion.div
                      className="w-2.5 h-2.5 rounded-sm flex-shrink-0"
                      style={{ background: item.color }}
                      whileHover={{ scale: 1.4, borderRadius: '50%' }}
                      transition={{ type: 'spring', stiffness: 400 }}
                    />
                    <span className="text-xs" style={{ color: 'var(--text-2)' }}>{item.name}</span>
                  </div>
                  <span className="text-xs font-mono font-bold tabular" style={{ color: item.color }}>{item.value}%</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Bar chart */}
          <motion.div
            className="rounded-2xl p-5 lg:col-span-3"
            style={{ background: 'var(--surface)', border: '1px solid var(--border)' }}
            initial={{ opacity: 0, y: 22 }}
            animate={chartsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.65, delay: 0.22, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="flex items-center justify-between mb-5">
              <div>
                <h3 className="text-sm font-semibold" style={{ color: 'var(--text-1)' }}>Cumulative Dashboards Delivered</h3>
                <p className="text-xs mt-0.5" style={{ color: 'var(--text-3)' }}>VP-stakeholder facing BI assets shipped · 2024</p>
              </div>
              <motion.span
                className="text-[10px] font-mono font-bold px-2.5 py-1 rounded-lg"
                style={{ color: '#34d399', background: 'rgba(52,211,153,0.08)', border: '1px solid rgba(52,211,153,0.22)' }}
                animate={{ opacity: [1, 0.5, 1] }}
                transition={{ duration: 2.5, repeat: Infinity }}
              >
                15 Total
              </motion.span>
            </div>
            <ResponsiveContainer width="100%" height={165}>
              <BarChart data={performanceChartData} barSize={34} margin={{ top: 0, right: 10, left: -22, bottom: 0 }}>
                <defs>
                  <linearGradient id="dGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#10b981" stopOpacity={1} />
                    <stop offset="100%" stopColor="#10b981" stopOpacity={0.12} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(128,128,128,0.07)" vertical={false} />
                <XAxis dataKey="month" tick={{ fill: '#7880a0', fontSize: 11 }} axisLine={false} tickLine={false} />
                <YAxis tick={{ fill: '#7880a0', fontSize: 11 }} axisLine={false} tickLine={false} />
                <Tooltip content={<CustomTooltip />} cursor={{ fill: 'rgba(128,128,128,0.04)', radius: 6 }} />
                <Bar dataKey="dashboards" name="Dashboards" fill="url(#dGrad)" radius={[5, 5, 0, 0]} animationDuration={chartsInView ? 1500 : 0} />
              </BarChart>
            </ResponsiveContainer>
          </motion.div>

        </div>

        {/* Footer note */}
        <motion.p
          className="text-[11px] font-mono text-center mt-6"
          style={{ color: 'var(--text-3)' }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          Data reflects real project outcomes · 2021–2026 · Binghamton University &amp; TCS
        </motion.p>
      </div>
    </section>
  )
}
