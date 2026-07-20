import { useRef } from 'react'
import { motion, useInView, useReducedMotion } from 'framer-motion'
import ChemDecor from './ChemDecor'

// The droplet the burette flow-line passes through at each section — fills
// with copper once its section has been reached, sending out a soft ripple.
function NodeMarker({ active }) {
  return (
    <div
      aria-hidden="true"
      className="absolute left-5 top-16 z-10 -translate-x-1/2 sm:left-10 sm:top-[6.5rem]"
    >
      <div
        className={`relative flex h-[24px] w-[24px] items-center justify-center rounded-full border-2 bg-bg-primary transition-colors duration-700 ${
          active ? 'border-copper' : 'border-faint/50'
        }`}
      >
        {active && (
          <span
            aria-hidden="true"
            className="node-ping absolute -inset-1 rounded-full border border-copper"
          />
        )}
        <span
          className={`h-2.5 w-2.5 rounded-full bg-copper transition-all duration-700 ${
            active ? 'scale-100 opacity-100' : 'scale-0 opacity-0'
          }`}
        />
      </div>
    </div>
  )
}

export default function Section({ id, label, title, children, decor = 0 }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '0px 0px -55% 0px' })
  const reduce = useReducedMotion()

  const heading = {
    hidden: {},
    show: { transition: { staggerChildren: reduce ? 0 : 0.14 } },
  }
  const labelV = {
    hidden: { opacity: 0, x: reduce ? 0 : -16 },
    show: { opacity: 1, x: 0, transition: { duration: 0.5, ease: 'easeOut' } },
  }
  const titleV = {
    hidden: {
      opacity: 0,
      y: reduce ? 0 : 30,
      clipPath: reduce ? 'inset(-10% 0 -20% 0)' : 'inset(0 0 100% 0)',
    },
    show: {
      opacity: 1,
      y: 0,
      clipPath: 'inset(-10% 0 -20% 0)',
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
    },
  }
  const ruleV = {
    hidden: { scaleX: 0 },
    show: {
      scaleX: 1,
      transition: { duration: reduce ? 0 : 0.9, ease: [0.22, 1, 0.36, 1] },
    },
  }
  const markV = {
    hidden: { opacity: 0, scale: 0, rotate: reduce ? 0 : -90 },
    show: {
      opacity: 0.75,
      scale: 1,
      rotate: 0,
      transition: { duration: 0.5, ease: [0.34, 1.56, 0.64, 1] },
    },
  }

  return (
    <section
      id={id}
      ref={ref}
      className="relative overflow-hidden scroll-mt-16 py-16 sm:py-24"
    >
      <ChemDecor target={ref} variant={decor} />
      <NodeMarker active={inView} />
      <div className="relative pl-12 pr-5 sm:pl-24 sm:pr-10 lg:pl-32 lg:pr-16">
        <motion.header
          variants={heading}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '0px 0px -12% 0px' }}
          className="relative"
        >
          <motion.p
            variants={labelV}
            className="font-mono text-xs tracking-[0.22em] text-teal"
          >
            {label}
          </motion.p>
          <motion.h2
            variants={titleV}
            className="mt-3 max-w-2xl font-display text-3xl font-medium leading-tight text-ink sm:text-4xl lg:text-[2.75rem]"
          >
            {title}
            <motion.span
              aria-hidden="true"
              variants={markV}
              className="ml-4 inline-block align-middle"
            >
              {/* molecular hexagon mark */}
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path
                  d="M10 1.5l7 4v9l-7 4-7-4v-9z"
                  stroke="#e2914d"
                  strokeWidth="1.4"
                  strokeLinejoin="round"
                />
                <circle cx="10" cy="10" r="2.4" fill="#e2914d" opacity="0.5" />
              </svg>
            </motion.span>
          </motion.h2>
          {/* soft copper rule that draws in under the heading */}
          <motion.div
            aria-hidden="true"
            variants={ruleV}
            className="mt-5 flex h-[9px] w-40 origin-left items-center"
          >
            <span className="h-[9px] w-px bg-copper/70" />
            <span className="h-px flex-1 bg-copper/60" />
            <span className="h-2 w-2 -translate-x-1 rounded-full bg-copper/70" />
          </motion.div>
        </motion.header>
        <motion.div
          initial={{ opacity: 0, y: reduce ? 0 : 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '0px 0px -10% 0px' }}
          transition={{ duration: 0.7, delay: reduce ? 0 : 0.25, ease: [0.22, 1, 0.36, 1] }}
          className="mt-8"
        >
          {children}
        </motion.div>
      </div>
    </section>
  )
}
