import { Fragment } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import Section from './Section'
import { vision } from '../content'

// A process-flow reading of the career path: feed → transformation → product.
// Three stage cards connected by animated streams, laid out left-to-right on
// large screens and top-to-bottom on smaller ones. Every stage shows its full
// detail inline, so the space stays filled and evenly padded at any width.

function Connector({ label }) {
  return (
    <div className="flex shrink-0 items-center justify-center py-1 lg:w-20 lg:py-0">
      {/* vertical stream (stacked layout) */}
      <div className="flex flex-col items-center lg:hidden">
        <span className="font-mono text-[10px] tracking-[0.2em] text-faint">{label}</span>
        <svg width="14" height="34" viewBox="0 0 14 34" className="mt-1" fill="none" aria-hidden="true">
          <line x1="7" y1="0" x2="7" y2="26" stroke="#7fb79e" strokeWidth="1.5" />
          <line x1="7" y1="0" x2="7" y2="26" stroke="#e2914d" strokeWidth="2" strokeDasharray="4 10" className="stroke-flow" />
          <path d="M1 24l6 8 6-8" stroke="#7fb79e" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
      {/* horizontal stream (row layout) */}
      <div className="hidden flex-col items-center lg:flex">
        <span className="mb-1.5 font-mono text-[10px] tracking-[0.2em] text-faint">{label}</span>
        <svg width="64" height="14" viewBox="0 0 64 14" fill="none" aria-hidden="true">
          <line x1="0" y1="7" x2="54" y2="7" stroke="#7fb79e" strokeWidth="1.5" />
          <line x1="0" y1="7" x2="54" y2="7" stroke="#e2914d" strokeWidth="2" strokeDasharray="4 10" className="stroke-flow" />
          <path d="M52 1l10 6-10 6" stroke="#7fb79e" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
    </div>
  )
}

export default function Vision() {
  const reduce = useReducedMotion()

  return (
    <Section id="vision" label={vision.label} title={vision.title} decor={4}>
      <p className="max-w-2xl leading-relaxed text-muted">{vision.intro}</p>

      <div className="mt-10 flex flex-col items-stretch gap-1 lg:flex-row lg:gap-0">
        {vision.stages.map((s, i) => {
          const now = s.phase === 'NOW'
          return (
            <Fragment key={s.id}>
              <motion.article
                initial={{ opacity: 0, y: reduce ? 0 : 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '0px 0px -10% 0px' }}
                transition={{ duration: 0.6, delay: reduce ? 0 : i * 0.18, ease: [0.22, 1, 0.36, 1] }}
                className={`flex flex-1 flex-col rounded-3xl border p-6 shadow-[0_16px_40px_-28px_rgba(61,75,68,0.5)] transition-all duration-300 hover:-translate-y-1 sm:p-7 ${
                  now
                    ? 'border-copper/50 bg-copper/[0.06]'
                    : 'border-muted/20 bg-bg-secondary hover:border-copper/40'
                }`}
              >
                <div className="flex items-center justify-between gap-3">
                  <span className="font-mono text-[11px] tracking-[0.22em] text-teal">
                    {s.id} · {s.phase}
                  </span>
                  <span
                    className={`rounded-full px-2.5 py-0.5 font-mono text-[9px] tracking-[0.18em] ${
                      now ? 'bg-copper/15 text-copper' : 'bg-muted/10 text-faint'
                    }`}
                  >
                    {String(i + 1).padStart(2, '0')} / {String(vision.stages.length).padStart(2, '0')}
                  </span>
                </div>
                <h3 className="mt-4 font-display text-2xl font-medium text-ink sm:text-[1.65rem]">
                  {s.name}
                </h3>
                <p className="mt-1 font-mono text-xs tracking-wide text-copper">{s.summary}</p>
                <p className="mt-4 text-sm leading-relaxed text-muted">{s.detail}</p>
              </motion.article>
              {i < vision.stages.length - 1 && <Connector label={vision.streams[i]} />}
            </Fragment>
          )
        })}
      </div>
    </Section>
  )
}
