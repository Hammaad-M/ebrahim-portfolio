import { motion } from 'framer-motion'
import Section from './Section'
import { education } from '../content'

export default function Education() {
  const { degree, planned, plannedNote } = education
  return (
    <Section id="education" label={education.label} title={education.title} decor={1}>
      <div className="max-w-3xl">
        <div className="rounded-3xl border border-copper/25 bg-bg-secondary p-6 shadow-[0_18px_44px_-28px_rgba(61,75,68,0.55)] sm:p-8">
          <div className="flex flex-wrap items-baseline justify-between gap-2">
            <p className="font-mono text-[11px] tracking-[0.22em] text-teal">
              {degree.code}
            </p>
            <p className="font-mono text-[11px] tracking-[0.18em] text-muted">
              {degree.status.toUpperCase()}
            </p>
          </div>
          <h3 className="mt-4 font-display text-2xl font-medium sm:text-3xl">
            {degree.institution}
          </h3>
          <p className="mt-2 text-muted">{degree.program}</p>
        </div>

        <div className="mt-6 grid gap-6 sm:grid-cols-2">
          {planned.map((track, i) => (
            <motion.div
              key={track.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '0px 0px -8% 0px' }}
              transition={{ duration: 0.6, delay: i * 0.15, ease: [0.22, 1, 0.36, 1] }}
              className="rounded-3xl border border-muted/20 bg-bg-secondary/80 p-6 shadow-[0_14px_36px_-28px_rgba(61,75,68,0.5)]"
            >
              <p className="font-mono text-[11px] tracking-[0.22em] text-copper">
                {track.code}
              </p>
              <h4 className="mt-3 text-lg font-medium text-ivory">{track.name}</h4>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                {track.detail}
              </p>
            </motion.div>
          ))}
        </div>
        <p className="mt-5 font-mono text-xs leading-relaxed tracking-wide text-muted">
          {plannedNote}
        </p>
      </div>
    </Section>
  )
}
