'use client'
import { motion } from 'framer-motion'

const techSkills = [
  { text: '🐍 Python' },
  { text: '🗄️ SQL' },
  { text: '🔄 ETL Pipelines' },
  { text: '📊 Power BI' },
  { text: '🏭 Data Engineering' },
  { text: '📈 Data Warehousing' },
  { text: '🧹 Data Cleaning' },
  { text: '📉 KPI Design' },
]

const toolSkills = [
  { text: '🐙 Git / GitHub' },
  { text: '🐳 Docker' },
  { text: '🐘 PostgreSQL' },
  { text: '🌀 Apache Airflow' },
  { text: '☁️ AWS' },
  { text: '🔷 SQLite' },
  { text: '📦 Pandas / NumPy' },
  { text: '📓 Jupyter' },
]

const bars = [
  { label: 'Python',        pct: 92 },
  { label: 'SQL',           pct: 88 },
  { label: 'Power BI',      pct: 80 },
]

const bars2 = [
  { label: 'Git / Docker',  pct: 85 },
  { label: 'PostgreSQL',    pct: 82 },
  { label: 'AWS / Airflow', pct: 70 },
]

function SkillTag({ text }: { text: string }) {
  return (
    <div style={{
      background: 'rgba(255,255,255,0.2)',
      border: '2px solid rgba(255,255,255,0.4)',
      borderRadius: '8px', padding: '6px 12px',
      fontFamily: 'monospace', fontSize: '11px',
      fontWeight: 'bold', cursor: 'default'
    }}>
      {text}
    </div>
  )
}

function SkillBar({ label, pct }: { label: string, pct: number }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '3px' }}>
      <div style={{
        fontFamily: 'monospace', fontSize: '12px',
        display: 'flex', justifyContent: 'space-between'
      }}>
        <span>{label}</span>
        <span>{pct}%</span>
      </div>
      <div style={{
        height: '10px', background: 'rgba(0,0,0,0.2)',
        borderRadius: '4px', border: '2px solid rgba(0,0,0,0.2)',
        overflow: 'hidden'
      }}>
        <div style={{
          height: '100%', width: `${pct}%`,
          background: 'rgba(255,255,255,0.7)',
          borderRadius: '2px'
        }}/>
      </div>
    </div>
  )
}

export default function SkillsSection() {
  return (
    <div id="skills" style={{
      gridColumn: '1 / -1',
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: '16px'
    }}>

      {/* Left — Technical Skills */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        style={{
          background: '#E8611A', color: 'white',
          borderRadius: '16px', border: '3px solid #1A1A1A',
          boxShadow: '6px 6px 0 #1A1A1A', padding: '24px',
          display: 'flex', flexDirection: 'column', gap: '16px'
        }}
      >
        <div style={{
          fontFamily: 'monospace', fontWeight: 'bold',
          fontSize: '28px', letterSpacing: '2px'
        }}>
          ⚙️ Technical<br/>Skills
        </div>

        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
          {techSkills.map(s => <SkillTag key={s.text} text={s.text} />)}
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
          {bars.map(b => <SkillBar key={b.label} label={b.label} pct={b.pct} />)}
        </div>
      </motion.div>

      {/* Right — Tools */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        style={{
          background: '#2D7A3A', color: 'white',
          borderRadius: '16px', border: '3px solid #1A1A1A',
          boxShadow: '6px 6px 0 #1A1A1A', padding: '24px',
          display: 'flex', flexDirection: 'column', gap: '16px'
        }}
      >
        <div style={{
          fontFamily: 'monospace', fontWeight: 'bold',
          fontSize: '28px', letterSpacing: '2px'
        }}>
          🛠️ Tools &<br/>Platforms
        </div>

        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
          {toolSkills.map(s => <SkillTag key={s.text} text={s.text} />)}
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
          {bars2.map(b => <SkillBar key={b.label} label={b.label} pct={b.pct} />)}
        </div>
      </motion.div>

    </div>
  )
}