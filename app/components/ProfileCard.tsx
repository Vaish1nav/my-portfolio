'use client'
import { motion } from 'framer-motion'

export default function ProfileCard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      id="profile"
      style={{
        background: '#FDF6E3',
        borderRadius: '16px',
        border: '3px solid #1A1A1A',
        boxShadow: '6px 6px 0 #1A1A1A',
        padding: '24px',
        display: 'flex',
        flexDirection: 'column',
        gap: '16px'
      }}
    >
      {/* Top Row */}
      <div style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
        
        {/* Avatar */}
        <div style={{
          width: '90px', height: '90px',
          borderRadius: '12px', border: '3px solid #1A1A1A',
          background: '#F5C400', display: 'flex',
          alignItems: 'center', justifyContent: 'center',
          fontSize: '40px', flexShrink: 0
        }}>
          👨‍💻
        </div>

        {/* Info */}
        <div>
          <div style={{ 
            fontFamily: 'Impact, monospace', 
            fontWeight: '900',
            fontSize: '24px', 
            marginBottom: '4px',
            color: '#000000',
            letterSpacing: '1px'
        }}>
        VAISHNAV S
        </div>
          <div style={{ 
                        fontFamily: 'monospace', 
                        fontSize: '13px',
                        fontWeight: '700',
                        color: '#E8611A', 
                        marginBottom: '8px',
                        letterSpacing: '2px' }}>
            DATA ENGINEER
          </div>
          <div style={{ fontSize: '11px', color: '#555',
            display: 'flex', flexDirection: 'column', gap: '3px' }}>
            <span>📍 Kerala, India</span>
            <span>🎓 B.Tech ECE</span>
            <span>💼 Available Now</span>
          </div>
        </div>
      </div>

      {/* Description */}
      <div style={{
        fontSize: '11px', lineHeight: '1.7', color: '#333',
        background: 'rgba(0,0,0,0.04)', padding: '10px 12px',
        borderRadius: '8px', borderLeft: '3px solid #E8611A'
      }}>
        Passionate Data Engineer building robust ETL pipelines, 
        analytics warehouses, and real-time data systems. 
        Turning raw data into business insights using Python, SQL, 
        and modern data stack tools.
      </div>

      {/* Open to Work Badge */}
      <div style={{
        background: '#4ade80', color: '#1A1A1A',
        fontFamily: 'monospace', fontSize: '12px',
        padding: '6px 12px', border: '2px solid #1A1A1A',
        borderRadius: '20px', boxShadow: '2px 2px 0 #1A1A1A',
        display: 'flex', alignItems: 'center', gap: '6px',
        width: 'fit-content'
      }}>
        <div style={{ width: '8px', height: '8px',
          borderRadius: '50%', background: '#1A1A1A' }}/>
        OPEN TO OPPORTUNITIES
      </div>

      {/* Social Buttons */}
      <div style={{ display: 'flex', gap: '8px' }}>
        {[
  { label: 'GITHUB',   href: 'https://github.com/Vaish1nav' },
  { label: 'LINKEDIN', href: 'https://linkedin.com/in/vaishnav-s-7ab082299' },
  { label: 'EMAIL',    href: 'mailto:vaishnavsudha2003@gmail.com' }
].map(btn => (
  <motion.a
    key={btn.label}
    href={btn.href}
    target="_blank"
    whileHover={{ 
      scale: 1.05,
      backgroundColor: '#F5C400',
      color: '#1A1A1A',
      y: -3
    }}
    whileTap={{ scale: 0.95 }}
    transition={{ duration: 0.15 }}
    style={{
      flex: 1,
      padding: '8px 6px',
      border: '2px solid #1A1A1A',
      borderRadius: '8px',
      background: '#1A1A1A',
      color: '#F5C400',
      fontFamily: 'monospace',
      fontSize: '12px',
      textDecoration: 'none',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      boxShadow: '3px 3px 0 #555',
      cursor: 'pointer'
    }}
  >
    {btn.label}
  </motion.a>
))}
      </div>

      {/* Stickers */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
        {[
          { text: '⚡ Python',  bg: '#F5C400', color: '#1A1A1A' },
          { text: '🗄 SQL',     bg: '#E8611A', color: 'white' },
          { text: '📊 Power BI',bg: '#2D7A3A', color: 'white' },
          { text: '☁️ AWS',     bg: '#2255CC', color: 'white' },
          { text: '🐳 Docker',  bg: '#FF6B9D', color: 'white' },
          { text: '🔄 ETL',     bg: '#F5C400', color: '#1A1A1A' },
        ].map(s => (
          <div key={s.text} style={{
            background: s.bg, color: s.color,
            fontFamily: 'monospace', fontSize: '11px',
            padding: '4px 8px', border: '2px solid #1A1A1A',
            borderRadius: '20px', boxShadow: '2px 2px 0 #1A1A1A',
            cursor: 'default'
          }}>
            {s.text}
          </div>
        ))}
      </div>

    </motion.div>
  )
}