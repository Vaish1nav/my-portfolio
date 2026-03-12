'use client'

export default function Nav() {
  return (
    <nav style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
      background: '#1A1A1A', borderBottom: '3px solid #F5C400',
      padding: '0 24px', display: 'flex',
      alignItems: 'center', justifyContent: 'space-between',
      height: '48px'
    }}>

      {/* Logo */}
      <div style={{ fontFamily: 'monospace', fontSize: '18px', 
        color: '#F5C400', letterSpacing: '2px' }}>
        Mr. V
      </div>

      {/* Links */}
      <ul style={{ display: 'flex', listStyle: 'none', gap: 0 }}>
        {['PROFILE','EDUCATION','SKILLS','PROJECTS','CONTACT'].map(link => (
          <li key={link}>
            <a href={`#${link.toLowerCase()}`} style={{
              fontFamily: 'monospace', fontSize: '13px',
              color: '#F0E6CC', textDecoration: 'none',
              padding: '0 14px', height: '48px',
              display: 'flex', alignItems: 'center',
              borderLeft: '1px solid #333'
            }}>
              {link}
            </a>
          </li>
        ))}
      </ul>

      {/* Status */}
      <div style={{ display: 'flex', alignItems: 'center', 
        gap: '8px', fontFamily: 'monospace', 
        fontSize: '13px', color: '#4ade80' }}>
        <div style={{
          width: '8px', height: '8px', borderRadius: '50%',
          background: '#4ade80'
        }}/>
        OPEN TO WORK
      </div>

    </nav>
  )
}