import { motion } from 'framer-motion'
import Section from './Section'
import { research } from '../content'

export default function Research() {
  return (
    <Section id="research" label={research.label} title={research.title} decor={2}>
      <div className="max-w-3xl">
        <p className="max-w-2xl leading-relaxed text-muted">{research.intro}</p>

        <ul className="mt-8 grid gap-px overflow-hidden rounded-3xl border border-muted/20 bg-muted/15 shadow-[0_18px_44px_-30px_rgba(61,75,68,0.5)] sm:grid-cols-2">
          {research.areas.map((area, i) => (
            <motion.li
              key={area.code}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '0px 0px -8% 0px' }}
              transition={{ duration: 0.55, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="bg-bg-secondary p-6"
            >
              <p className="font-mono text-[11px] tracking-[0.22em] text-teal">
                {area.code}
              </p>
              <h3 className="mt-2 text-base font-medium text-ivory">{area.name}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                {area.detail}
              </p>
            </motion.li>
          ))}
        </ul>

        <div className="mt-8 rounded-3xl border border-copper/35 bg-copper/[0.07] p-6 shadow-[0_16px_40px_-30px_rgba(226,145,77,0.5)]">
          <p className="font-mono text-[11px] tracking-[0.22em] text-copper">
            {research.seeking.heading.toUpperCase()}
          </p>
          <ul className="mt-3 space-y-2">
            {research.seeking.items.map((item) => (
              <li key={item} className="flex gap-3 text-sm text-ivory">
                <span aria-hidden="true" className="text-copper">
                  →
                </span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  )
}
