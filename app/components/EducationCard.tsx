'use client'
import { motion } from 'framer-motion'

export default function EducationCard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      id="education"
      style={{
        background: '#F5C400',
        borderRadius: '16px',
        border: '3px solid #1A1A1A',
        boxShadow: '6px 6px 0 #1A1A1A',
        padding: '28px',
        display: 'flex',
        alignItems: 'center',
        gap: '24px'
      }}
    >
      {/* Content */}
      <div style={{ flex: 1 }}>

        {/* Section Title */}
        <div style={{
          fontFamily: 'monospace', fontWeight: 'bold',
          fontSize: 'clamp(28px, 4vw, 44px)',
          letterSpacing: '2px', lineHeight: 1,
          marginBottom: '20px'
        }}>
          Education
        </div>

        {/* Entry */}
        <div style={{
          padding: '16px',
          background: 'rgba(0,0,0,0.06)',
          borderRadius: '10px',
          border: '2px solid rgba(0,0,0,0.1)'
        }}>
          <div style={{
            fontFamily: 'monospace', fontWeight: 'bold',
            fontSize: '16px', letterSpacing: '1px',
            marginBottom: '4px'
          }}>
            APJ Abdul Kalam<br/>Technological University
          </div>
          <div style={{
            fontFamily: 'monospace', fontSize: '12px',
            fontWeight: 'bold', marginTop: '4px'
          }}>
            B.Tech — Electronics & Communication Engineering
          </div>
          <div style={{
            fontSize: '11px', color: '#555', marginTop: '4px'
          }}>
            Specialization in Signal Processing & Embedded Systems
          </div>
          <div style={{
            display: 'inline-block',
            background: '#1A1A1A', color: '#F5C400',
            fontFamily: 'monospace', fontSize: '13px',
            padding: '2px 10px', borderRadius: '4px',
            marginTop: '8px'
          }}>
            2021 — 2025
          </div>
        </div>

      </div>

      {/* Retro Computer */}
      <div style={{
        fontSize: '80px', flexShrink: 0,
        filter: 'drop-shadow(4px 4px 0 rgba(0,0,0,0.15))',
        animation: 'float 4s ease-in-out infinite'
      }}>
        🖥️
      </div>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0) }
          50%       { transform: translateY(-8px) }
        }
      `}</style>

    </motion.div>
  )
}