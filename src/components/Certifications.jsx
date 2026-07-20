import { motion } from 'framer-motion'
import Section from './Section'
import { certifications } from '../content'

// Minimal triangle diagram — the three certificates as vertices of one skill set.
function SkillTriangle() {
  return (
    <svg
      viewBox="0 0 200 180"
      className="w-44 shrink-0"
      role="img"
      aria-label="Triangle diagram: core engineering, AI, and data as three vertices of one skill set"
    >
      <motion.path
        d="M100 22L182 158H18z"
        fill="none"
        stroke="#8b988f"
        strokeOpacity="0.4"
        strokeWidth="1"
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.1, ease: 'easeInOut' }}
      />
      {/* midpoint triangle and centroid ties */}
      <motion.path
        d="M141 90L100 158L59 90z"
        fill="none"
        stroke="#8b988f"
        strokeOpacity="0.25"
        strokeWidth="0.8"
        strokeDasharray="4 5"
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9, delay: 0.4, ease: 'easeInOut' }}
      />
      <motion.path
        d="M100 22L100 113M182 158L100 113M18 158L100 113"
        stroke="#8b988f"
        strokeOpacity="0.18"
        strokeWidth="0.8"
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.7, ease: 'easeInOut' }}
      />
      <circle
        cx="100"
        cy="113"
        r="3.5"
        fill="none"
        stroke="#E2914D"
        strokeWidth="1.2"
        className="pulse-soft"
      />
      {[
        { x: 100, y: 22, label: 'CORE', dy: -10, anchor: 'middle' },
        { x: 182, y: 158, label: 'AI', dy: 16, anchor: 'end' },
        { x: 18, y: 158, label: 'DATA', dy: 16, anchor: 'start' },
      ].map((v, i) => (
        <motion.g
          key={v.label}
          initial={{ opacity: 0, scale: 0.4 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 + i * 0.18, ease: [0.34, 1.56, 0.64, 1] }}
          style={{ transformOrigin: `${v.x}px ${v.y}px`, transformBox: 'view-box' }}
        >
          <circle cx={v.x} cy={v.y} r="9" fill="none" stroke="#7fb79e" strokeOpacity="0.4" strokeWidth="1" />
          <circle cx={v.x} cy={v.y} r="5" fill="#7fb79e" />
          <text
            x={v.x}
            y={v.y + v.dy}
            textAnchor={v.anchor}
            fill="#8b988f"
            fontSize="11"
            style={{ fontFamily: 'IBM Plex Mono, monospace', letterSpacing: '0.15em' }}
          >
            {v.label}
          </text>
        </motion.g>
      ))}
    </svg>
  )
}

export default function Certifications() {
  return (
    <Section
      id="certifications"
      label={certifications.label}
      title={certifications.title}
      decor={3}
    >
      <div className="flex max-w-4xl flex-col gap-8 sm:flex-row sm:items-center sm:gap-12">
        <p className="max-w-2xl leading-relaxed text-muted">{certifications.intro}</p>
        <SkillTriangle />
      </div>

      <div className="mt-10 grid max-w-5xl gap-6 md:grid-cols-3">
        {certifications.items.map((cert, i) => (
          <motion.article
            key={cert.code}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '0px 0px -8% 0px' }}
            transition={{ duration: 0.6, delay: i * 0.14, ease: [0.22, 1, 0.36, 1] }}
            className="group rounded-3xl border border-muted/20 bg-bg-secondary p-6 shadow-[0_14px_38px_-28px_rgba(61,75,68,0.5)] transition-all duration-300 hover:-translate-y-1.5 hover:border-copper/60 hover:shadow-[0_20px_46px_-16px_rgba(226,145,77,0.4)]"
          >
            <div className="flex items-baseline justify-between gap-2">
              <p className="font-mono text-[11px] tracking-[0.22em] text-teal">
                {cert.vertex}
              </p>
              <p className="font-mono text-[10px] tracking-[0.15em] text-muted">
                {cert.code}
              </p>
            </div>
            <h3 className="mt-4 text-lg font-medium leading-snug text-ivory">
              {cert.name}
            </h3>
            <p className="mt-2 font-display text-sm italic text-copper">
              {cert.angle}
            </p>
            <p className="mt-3 text-sm leading-relaxed text-muted">{cert.detail}</p>
          </motion.article>
        ))}
      </div>

      <div className="mt-8 max-w-3xl font-mono text-[11px] leading-relaxed tracking-wide text-muted">
        <p>{certifications.issuer}</p>
        <p className="mt-1 opacity-70">{certifications.signedBy}</p>
      </div>
    </Section>
  )
}
