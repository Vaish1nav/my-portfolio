'use client'
import { motion } from 'framer-motion'

const projects = [
  {
    num: '01',
    title: 'Train Delay Analytics & Prediction System',
    desc: 'End-to-end data pipeline ingesting real-time train schedules, computing delay metrics, and predicting future delays using ML models. Includes interactive dashboard for operations team.',
    tech: ['Python', 'PostgreSQL', 'Apache Airflow', 'scikit-learn', 'Power BI'],
    link: 'https://github.com/Vaish1nav',
    color: '#F5C400'
  },
  {
    num: '02',
    title: 'E-commerce Analytics Warehouse',
    desc: 'Built a star-schema data warehouse for India e-commerce operations tracking 8 KPIs across 5 regions. Automated weekly reporting pipeline with Excel and Power BI dashboards.',
    tech: ['Python', 'SQLite', 'SQL CTEs', 'Power BI', 'openpyxl'],
    link: 'https://github.com/Vaish1nav/india-ops-kpi-dashboard',
    color: '#E8611A'
  },
  {
    num: '03',
    title: 'Incremental Log Processing Pipeline',
    desc: 'Designed an incremental ETL pipeline for processing server logs, implementing change data capture patterns and automated data quality checks with alerting for anomalies.',
    tech: ['Python', 'Apache Airflow', 'Docker', 'PostgreSQL', 'AWS S3'],
    link: 'https://github.com/Vaish1nav',
    color: '#2D7A3A'
  },
  {
    num: '04',
    title: 'Payment Transaction Monitoring System',
    desc: 'Real-time payment transaction pipeline with fraud detection rules engine, aggregated analytics dashboard, and automated alerts for suspicious patterns across payment channels.',
    tech: ['Python', 'PostgreSQL', 'Redis', 'Docker', 'Power BI'],
    link: 'https://github.com/Vaish1nav',
    color: '#2255CC'
  },
]

export default function ProjectsSection() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      id="projects"
      style={{
        gridColumn: '1 / -1',
        borderRadius: '16px',
        border: '3px solid #1A1A1A',
        boxShadow: '6px 6px 0 #1A1A1A',
        overflow: 'hidden'
      }}
    >
      {/* Header */}
      <div style={{
        background: '#1A1A1A',
        color: '#F5C400',
        padding: '20px 28px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between'
      }}>
        <div style={{
          fontFamily: 'Impact, monospace',
          fontWeight: 'bold',
          fontSize: '36px',
          letterSpacing: '3px',
          color: '#F5C400'
        }}>
          PROJECTS
        </div>
        <div style={{
          fontFamily: 'monospace',
          fontSize: '14px',
          color: '#888'
        }}>
          // 04 FEATURED BUILDS
        </div>
      </div>

      {/* Single Column Cards */}
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        background: '#FDF6E3'
      }}>
        {projects.map((p, i) => (
          <motion.div
            key={p.num}
            whileHover={{ x: 4 }}
            transition={{ duration: 0.15 }}
            style={{
              padding: '24px 28px',
              borderBottom: i < projects.length - 1
                ? `3px solid ${p.color}` : 'none',
              position: 'relative',
              background: '#FDF6E3'
            }}
          >
            {/* Number */}
            <div style={{
              position: 'absolute',
              top: '16px', right: '20px',
              fontFamily: 'monospace',
              fontSize: '36px',
              color: 'rgba(0,0,0,0.07)',
              lineHeight: 1
            }}>
              {p.num}
            </div>

            {/* Title */}
            <div style={{
              fontFamily: 'Impact, monospace',
              fontWeight: '900',
              fontSize: '20px',
              color: '#1A1A1A',
              marginBottom: '8px',
              paddingRight: '50px',
              letterSpacing: '0.5px'
            }}>
              {p.title}
            </div>

            {/* Description */}
            <div style={{
              fontSize: '12px',
              lineHeight: '1.7',
              color: '#444',
              marginBottom: '14px',
              fontFamily: 'monospace'
            }}>
              {p.desc}
            </div>

            {/* Tech Stack */}
            <div style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '6px',
              marginBottom: '14px'
            }}>
              {p.tech.map(t => (
                <span key={t} style={{
                  background: 'white',
                  border: '2px solid #1A1A1A',
                  borderRadius: '6px',
                  padding: '3px 10px',
                  fontFamily: 'monospace',
                  fontSize: '11px',
                  fontWeight: 'bold',
                  color: '#1A1A1A',
                  boxShadow: '2px 2px 0 #1A1A1A'
                }}>
                  {t}
                </span>
              ))}
            </div>

            {/* GitHub Link */}
            <a href={p.link} target="_blank" style={{
              fontFamily: 'monospace',
              fontSize: '13px',
              color: '#2255CC',
              textDecoration: 'none',
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              fontWeight: 'bold'
            }}>
              🐙 VIEW ON GITHUB →
            </a>

          </motion.div>
        ))}
      </div>

    </motion.div>
  )
}