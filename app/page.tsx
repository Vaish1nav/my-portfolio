'use client'
import { useState, useEffect } from 'react'
import Nav from './components/Nav'
import ProfileCard from './components/ProfileCard'
import HelloCard from './components/HelloCard'
import EducationCard from './components/EducationCard'
import SkillsSection from './components/SkillsSection'
import ProjectsSection from './components/ProjectsSection'
import ContactSection from './components/ContactSection'

const bootLines = [
  'BIOS v2.4.1 ............. OK',
  'Loading VAISHNAV.EXE .....',
  'Checking Python .......... OK',
  'Checking SQL ............. OK',
  'Checking Power BI ........ OK',
  'Mounting portfolio ....... OK',
  'BOOT COMPLETE ✓'
]

export default function Home() {
  const [booting, setBooting] = useState(true)
  const [currentLine, setCurrentLine] = useState(0)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    if (currentLine < bootLines.length) {
      const timer = setTimeout(() => {
        setCurrentLine(prev => prev + 1)
        setProgress(((currentLine + 1) / bootLines.length) * 100)
      }, 350)
      return () => clearTimeout(timer)
    } else {
      const timer = setTimeout(() => setBooting(false), 400)
      return () => clearTimeout(timer)
    }
  }, [currentLine])

  if (booting) {
    return (
      <div style={{
        position: 'fixed', inset: 0,
        background: '#1A1A1A',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 99999,
        gap: '12px'
      }}>
        {/* Logo */}
        <div style={{
          fontFamily: 'monospace',
          fontSize: '28px',
          color: '#F5C400',
          letterSpacing: '4px',
          marginBottom: '24px',
          fontWeight: 'bold'
        }}>
          Mr. V
        </div>

        {/* Boot lines */}
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '6px',
          width: '340px'
        }}>
          {bootLines.slice(0, currentLine).map((line, i) => (
            <div key={i} style={{
              fontFamily: 'monospace',
              fontSize: '14px',
              color: i === currentLine - 1 ? '#4ade80' : '#888',
              letterSpacing: '1px',
              transition: 'color 0.3s'
            }}>
              {line}
            </div>
          ))}
        </div>

        {/* Progress bar */}
        <div style={{
          width: '340px',
          height: '12px',
          background: '#333',
          borderRadius: '4px',
          border: '2px solid #F5C400',
          marginTop: '16px',
          overflow: 'hidden'
        }}>
          <div style={{
            height: '100%',
            width: `${progress}%`,
            background: '#F5C400',
            borderRadius: '2px',
            transition: 'width 0.3s ease'
          }}/>
        </div>

        {/* Percentage */}
        <div style={{
          fontFamily: 'monospace',
          fontSize: '13px',
          color: '#F5C400',
          letterSpacing: '2px'
        }}>
          {Math.round(progress)}%
        </div>

        {/* Blinking cursor */}
        <div style={{
          fontFamily: 'monospace',
          fontSize: '20px',
          color: '#4ade80',
          animation: 'blink 1s infinite'
        }}>
          █
        </div>

        <style>{`
          @keyframes blink {
            0%, 100% { opacity: 1 }
            50% { opacity: 0 }
          }
        `}</style>
      </div>
    )
  }

  return (
    <main style={{
      backgroundImage: 'url(/bg.gif)',
      backgroundSize: 'cover',
      backgroundRepeat: 'repeat',
      backgroundAttachment: 'fixed',
      minHeight: '100vh',
      animation: 'fadeIn 0.8s ease-in-out',
    }}>
      <style>{`
        @keyframes fadeIn {
          0%   { opacity: 0; transform: scale(0.98); }
          100% { opacity: 1; transform: scale(1); }
        }
      `}</style>
      <Nav />
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '64px 16px 40px',
        display: 'grid',
        gridTemplateColumns: '340px 1fr',
        gap: '16px'
      }}>
        <ProfileCard />
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <HelloCard />
          <EducationCard />
        </div>
        <SkillsSection />
        <ProjectsSection />
        <ContactSection />
      </div>
    </main>
  )
}