'use client'
import { motion } from 'framer-motion'

export default function ContactSection() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      id="contact"
      style={{
        gridColumn: '1 / -1',
        background: '#1A1A1A',
        borderRadius: '16px',
        border: '3px solid #1A1A1A',
        boxShadow: '6px 6px 0 #555',
        padding: '36px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        gap: '24px'
      }}
    >
      {/* Left */}
      <div>
        <div style={{
          fontFamily: 'monospace', fontWeight: 'bold',
          fontSize: '36px', color: '#F5C400',
          letterSpacing: '3px', marginBottom: '6px'
        }}>
          LET'S CONNECT_
        </div>
        <div style={{
          fontFamily: 'monospace', fontSize: '14px',
          color: '#888', letterSpacing: '1px'
        }}>
          // AVAILABLE FOR INTERNSHIPS & FULL-TIME ROLES
        </div>
      </div>

      {/* Buttons */}
<div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
  {[
    { label: '📧 EMAIL ME',   href: 'mailto:vaishnavsudha2003@gmail.com', bg: '#F5C400', color: '#1A1A1A', shadow: '#a88a00' },
    { label: '🐙 GITHUB',     href: 'https://github.com/Vaish1nav',                      bg: 'transparent', color: '#F0E6CC', shadow: '#222' },
    { label: '💼 LINKEDIN',   href: 'https://linkedin.com/in/vaishnav-s-7ab082299',      bg: 'transparent', color: '#F0E6CC', shadow: '#222' },
    { label: '📄 RESUME PDF', href: '/resume.pdf',                                        bg: '#E8611A',     color: 'white',   shadow: '#9a3d0e' },
  ].map(btn => (
    <motion.a
      key={btn.label}
      href={btn.href}
      target="_blank"
      download={btn.label === '📄 RESUME PDF' ? 'Vaishnav_resume.pdf' : undefined}
      whileHover={{ scale: 1.05, y: -3, backgroundColor: '#F5C400', color: '#1A1A1A' }}
      whileTap={{ scale: 0.95 }}
      transition={{ duration: 0.15 }}
      style={{
        padding: '10px 20px',
        border: '2px solid #444',
        borderRadius: '8px',
        background: btn.bg,
        color: btn.color,
        fontFamily: 'monospace',
        fontSize: '14px',
        fontWeight: 'bold',
        textDecoration: 'none',
        display: 'flex',
        alignItems: 'center',
        gap: '8px',
        boxShadow: `4px 4px 0 ${btn.shadow}`,
        cursor: 'pointer'
      }}
    >
      {btn.label}
    </motion.a>
  ))}
</div>

    </motion.div>
  )
}