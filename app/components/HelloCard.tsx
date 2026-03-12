'use client'
import { motion } from 'framer-motion'

export default function HelloCard() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: 0.1 }}
      id="hello"
      style={{
        borderRadius: '16px',
        border: '3px solid #1A1A1A',
        boxShadow: '6px 6px 0 #1A1A1A',
        padding: '28px 32px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        background: 'linear-gradient(135deg, #ff6b6b, #ffd93d, #6bcb77, #4d96ff)',
        backgroundSize: '300% 300%',
        animation: 'gradShift 4s ease infinite'
      }}
    >
      {/* Hello World Text */}
      <div>
        <div style={{
          fontFamily: 'monospace', fontWeight: 'bold',
          fontSize: 'clamp(36px, 5vw, 64px)',
          color: 'white', lineHeight: 1,
          textShadow: '4px 4px 0 rgba(0,0,0,0.25)',
          letterSpacing: '2px'
        }}>
          Hello<br/>World_
        </div>
      </div>

      {/* Right Side */}
      <div style={{
        display: 'flex', flexDirection: 'column',
        alignItems: 'flex-end', gap: '8px'
      }}>
        <div style={{
          fontSize: '56px',
          animation: 'float 3s ease-in-out infinite',
          filter: 'drop-shadow(3px 3px 0 rgba(0,0,0,0.2))'
        }}>
          🖥️
        </div>
        <div style={{
          background: 'rgba(0,0,0,0.25)', color: 'white',
          fontFamily: 'monospace', fontSize: '12px',
          padding: '4px 10px', borderRadius: '20px'
        }}>
          // DATA ENGINEER
        </div>
        <div style={{
          background: 'rgba(0,0,0,0.25)', color: 'white',
          fontFamily: 'monospace', fontSize: '12px',
          padding: '4px 10px', borderRadius: '20px'
        }}>
          // PYTHON · SQL · ETL
        </div>
      </div>

      <style>{`
        @keyframes gradShift {
          0%   { background-position: 0% 50% }
          50%  { background-position: 100% 50% }
          100% { background-position: 0% 50% }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0) }
          50%       { transform: translateY(-8px) }
        }
      `}</style>
    </motion.div>
  )
}