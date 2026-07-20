import { useRef, useState } from 'react'
import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useReducedMotion,
  useScroll,
  useTransform,
} from 'framer-motion'
import { processWheel } from '../content'

// Interstitial centerpiece: a circular reaction rotor — measurement ring,
// orbiting label ring, and a stirrer impeller — pinned to the viewport while
// the page scrolls through it. Scroll position selects exactly one phase
// caption at a time; AnimatePresence swaps them so captions never overlap.

const PHASE_COUNT = processWheel.phases.length

const SAGE = '#7fb79e'
const FAINT = '#8b988f'
const COPPER = '#e2914d'
const SKY = '#9dbbd9'

function TickRing() {
  const ticks = Array.from({ length: 72 }, (_, i) => {
    const a = (i * Math.PI * 2) / 72
    const long = i % 6 === 0
    const r1 = 205
    const r2 = long ? 190 : 198
    return (
      <line
        key={i}
        x1={210 + Math.cos(a) * r1}
        y1={210 + Math.sin(a) * r1}
        x2={210 + Math.cos(a) * r2}
        y2={210 + Math.sin(a) * r2}
        stroke={long ? COPPER : FAINT}
        strokeWidth={long ? 1.6 : 0.8}
        opacity={long ? 0.75 : 0.4}
      />
    )
  })
  const labels = Array.from({ length: 12 }, (_, i) => {
    const deg = i * 30
    const a = ((deg - 90) * Math.PI) / 180
    const r = 176
    return (
      <text
        key={deg}
        x={210 + Math.cos(a) * r}
        y={210 + Math.sin(a) * r}
        textAnchor="middle"
        dominantBaseline="middle"
        fill={FAINT}
        fontSize="8.5"
        opacity="0.6"
        style={{ fontFamily: 'IBM Plex Mono, monospace', letterSpacing: '0.1em' }}
      >
        {String(deg).padStart(3, '0')}
      </text>
    )
  })
  return (
    <svg viewBox="0 0 420 420" className="h-full w-full">
      <circle cx="210" cy="210" r="209" fill="none" stroke={SAGE} strokeWidth="0.8" opacity="0.3" />
      <circle cx="210" cy="210" r="205" fill="none" stroke={SAGE} strokeWidth="1" opacity="0.5" />
      {ticks}
      {labels}
    </svg>
  )
}

function TextRing() {
  const words = 'RESEARCH · SUSTAINABILITY · PROCESS · SCALE · '
  return (
    <svg viewBox="0 0 420 420" className="h-full w-full">
      <defs>
        <path id="wheel-text-path" d="M210 55a155 155 0 1 1 -0.01 0z" fill="none" />
      </defs>
      <text
        fill={FAINT}
        fontSize="14.5"
        style={{ fontFamily: 'IBM Plex Mono, monospace', letterSpacing: '0.42em' }}
      >
        <textPath href="#wheel-text-path">{words}</textPath>
      </text>
    </svg>
  )
}

function Impeller() {
  const bolts = Array.from({ length: 8 }, (_, i) => {
    const a = (i * Math.PI * 2) / 8 + Math.PI / 8
    return (
      <circle
        key={i}
        cx={210 + Math.cos(a) * 112}
        cy={210 + Math.sin(a) * 112}
        r="3.5"
        fill={SKY}
        stroke="none"
        opacity="0.7"
      />
    )
  })
  return (
    <svg viewBox="0 0 420 420" className="h-full w-full" fill="none" stroke={SAGE}>
      {/* segmented intermediate ring */}
      <circle cx="210" cy="210" r="140" strokeWidth="1" strokeDasharray="220 73" opacity="0.35" />
      {/* casing */}
      <circle cx="210" cy="210" r="118" strokeWidth="0.9" opacity="0.4" />
      <circle cx="210" cy="210" r="112" strokeWidth="1.4" opacity="0.65" />
      {bolts}
      {/* flowing dashed ring */}
      <circle
        cx="210"
        cy="210"
        r="96"
        strokeWidth="1.6"
        stroke={COPPER}
        strokeDasharray="10 18"
        opacity="0.7"
        className="wheel-dash"
      />
      {/* six curved blades */}
      {[0, 60, 120, 180, 240, 300].map((deg) => (
        <path
          key={deg}
          d="M210 210C232 184 234 148 212 118"
          strokeWidth="2"
          opacity="0.85"
          transform={`rotate(${deg} 210 210)`}
        />
      ))}
      {/* hub */}
      <circle cx="210" cy="210" r="16" strokeWidth="1.4" opacity="0.8" />
      <circle cx="210" cy="210" r="6" fill={COPPER} stroke="none" />
      <path d="M210 182v-14M210 238v14M182 210h-14M238 210h14" strokeWidth="1" opacity="0.55" />
    </svg>
  )
}

export default function ProcessWheel() {
  const ref = useRef(null)
  const reduce = useReducedMotion()
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end end'],
  })
  const outer = useTransform(scrollYProgress, [0, 1], [reduce ? 0 : -70, reduce ? 0 : 70])
  const text = useTransform(scrollYProgress, [0, 1], [reduce ? 0 : 50, reduce ? 0 : -50])
  const inner = useTransform(scrollYProgress, [0, 1], [reduce ? 0 : -150, reduce ? 0 : 150])

  const [phase, setPhase] = useState(0)
  useMotionValueEvent(scrollYProgress, 'change', (v) => {
    setPhase(Math.min(PHASE_COUNT - 1, Math.max(0, Math.floor(v * PHASE_COUNT))))
  })

  const active = processWheel.phases[phase]
  const side = phase % 2 === 0 ? 'left' : 'right'

  return (
    <div ref={ref} className="relative h-[320vh]">
      <div className="sticky top-0 flex h-screen items-center justify-center overflow-hidden">
        {/* soft pastel glow behind the rotor */}
        <div
          aria-hidden="true"
          className="absolute h-[560px] w-[560px] rounded-full opacity-70 blur-2xl"
          style={{
            background:
              'radial-gradient(circle, rgba(127,183,158,0.35) 0%, rgba(157,187,217,0.18) 45%, transparent 70%)',
          }}
        />
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: '0px 0px -20% 0px' }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="relative h-[280px] w-[280px] -translate-y-14 sm:h-[420px] sm:w-[420px] lg:translate-y-0"
          aria-hidden="true"
        >
          <motion.div style={{ rotate: outer }} className="absolute inset-0">
            <TickRing />
          </motion.div>
          <motion.div style={{ rotate: text }} className="absolute inset-0">
            <div className="spin-slow-rev h-full w-full">
              <TextRing />
            </div>
          </motion.div>
          <motion.div style={{ rotate: inner }} className="absolute inset-0">
            <div className="spin-slow h-full w-full">
              <Impeller />
            </div>
          </motion.div>
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="font-display text-4xl text-ink sm:text-5xl">ES</span>
          </div>
        </motion.div>

        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={active.code}
            initial={{ opacity: 0, y: reduce ? 0 : 26 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: reduce ? 0 : -26 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className={`pointer-events-none absolute bottom-10 left-1/2 w-80 max-w-[88vw] -translate-x-1/2 text-center lg:bottom-auto lg:top-1/2 lg:w-72 lg:-translate-y-1/2 lg:translate-x-0 ${
              side === 'left'
                ? 'lg:left-[6%] lg:text-left xl:left-[10%]'
                : 'lg:left-auto lg:right-[6%] lg:text-right xl:right-[10%]'
            }`}
          >
            <p className="font-mono text-[11px] tracking-[0.28em] text-teal">
              {active.code}
            </p>
            <h3 className="mt-3 font-display text-3xl font-medium text-ink sm:text-4xl">
              {active.title}
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-muted">{active.text}</p>
          </motion.div>
        </AnimatePresence>

        <div className="absolute top-8 left-1/2 -translate-x-1/2 text-center">
          <p className="font-mono text-[10px] tracking-[0.3em] text-faint">
            {processWheel.caption}
          </p>
          <div className="mt-3 flex justify-center gap-2" aria-hidden="true">
            {processWheel.phases.map((ph, i) => (
              <span
                key={ph.code}
                className={`h-[3px] w-7 rounded-full transition-colors duration-500 ${
                  i === phase ? 'bg-copper' : 'bg-faint/30'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
