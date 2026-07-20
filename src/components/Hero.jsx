import { useRef } from 'react'
import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion'
import { hero } from '../content'
import { Erlenmeyer, Benzene, Atom, Molecule, Pipette, Bubbles, CoolingTower, PlantSkyline } from './ChemSprites'

// The hero apparatus: a small tabletop lab scene assembled on load, each piece
// flying in from its own direction, then settling into ambient motion. This is
// the page's thesis — chemistry, rendered soft and in colour.
export default function Hero() {
  const ref = useRef(null)
  const reduce = useReducedMotion()
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  })
  const yScene = useTransform(scrollYProgress, [0, 1], [0, reduce ? 0 : 140])
  const yWatermark = useTransform(scrollYProgress, [0, 1], [0, reduce ? 0 : 220])

  const enter = (delay) => ({
    initial: { opacity: 0, y: reduce ? 0 : 22 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] },
  })

  // scene pieces: [Component, position classes, fly-in offset, delay]
  const pieces = [
    { C: Erlenmeyer, pos: 'bottom-4 left-1/2 h-[300px] w-[240px] -translate-x-1/2', from: { x: 0, y: 120, r: 0 }, d: 0.35 },
    { C: Pipette, pos: 'top-0 left-[46%] h-[150px] w-[64px]', from: { x: -40, y: -110, r: 12 }, d: 0.7 },
    { C: Benzene, pos: 'top-6 right-2 h-[150px] w-[150px]', from: { x: 120, y: -50, r: -20 }, d: 0.55 },
    { C: Atom, pos: 'top-[38%] -left-2 h-[130px] w-[130px]', from: { x: -130, y: 20, r: 20 }, d: 0.65 },
    { C: Molecule, pos: 'bottom-14 -right-2 h-[110px] w-[150px]', from: { x: 120, y: 60, r: 14 }, d: 0.8 },
    { C: CoolingTower, pos: 'bottom-0 left-1 h-[120px] w-[110px]', from: { x: -80, y: 70, r: -10 }, d: 0.9 },
    { C: Bubbles, pos: 'top-[30%] right-[16%] h-[110px] w-[70px]', from: { x: 40, y: 70, r: 0 }, d: 1 },
  ]

  return (
    <div
      ref={ref}
      className="relative flex min-h-[94svh] items-center overflow-hidden"
    >
      {/* faint plant-skyline watermark behind everything */}
      <motion.div
        aria-hidden="true"
        style={{ y: yWatermark }}
        className="pointer-events-none absolute -right-16 bottom-16 hidden h-[360px] w-[680px] opacity-[0.05] lg:block"
      >
        <PlantSkyline />
      </motion.div>

      <div className="relative z-10 grid w-full grid-cols-1 items-center gap-10 pb-16 pl-12 pr-5 pt-28 sm:pl-24 sm:pr-10 lg:grid-cols-[1.05fr_0.95fr] lg:pl-32 lg:pr-16">
        {/* copy */}
        <div>
          <motion.p
            {...enter(0)}
            className="inline-flex items-center gap-2 rounded-full border border-copper/40 bg-white/50 px-3.5 py-1.5 font-mono text-[11px] tracking-[0.22em] text-copper"
          >
            {hero.drawingNo} · {hero.location}
          </motion.p>
          <motion.h1
            {...enter(0.12)}
            className="mt-6 max-w-4xl font-display text-5xl font-medium leading-[1.02] text-ink sm:text-7xl lg:text-8xl"
          >
            {hero.name}
          </motion.h1>
          <motion.p
            {...enter(0.24)}
            className="mt-5 font-mono text-sm tracking-[0.16em] text-teal"
          >
            {hero.identity.toUpperCase()}
          </motion.p>
          <motion.p
            {...enter(0.36)}
            className="mt-6 max-w-xl text-lg leading-relaxed text-muted"
          >
            {hero.thesis}
          </motion.p>
          <motion.div {...enter(0.48)} className="mt-10 flex flex-wrap gap-4">
            <a
              href="#contact"
              className="rounded-full bg-copper px-7 py-3 font-mono text-sm tracking-wide text-white shadow-[0_10px_28px_-12px_rgba(226,145,77,0.7)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-copper/90 hover:shadow-[0_16px_36px_-12px_rgba(226,145,77,0.65)]"
            >
              Get in touch
            </a>
            <a
              href="#vision"
              className="rounded-full border border-teal/45 bg-white/40 px-7 py-3 font-mono text-sm tracking-wide text-teal transition-all duration-300 hover:-translate-y-0.5 hover:border-teal hover:bg-sage/15"
            >
              Follow the reaction ↓
            </a>
          </motion.div>
        </div>

        {/* apparatus scene */}
        <motion.div
          aria-hidden="true"
          style={{ y: yScene }}
          className="relative mx-auto h-[340px] w-full max-w-[420px] sm:h-[440px] lg:h-[520px]"
        >
          {pieces.map(({ C, pos, from, d }, i) => (
            <motion.div
              key={i}
              className={`absolute ${pos}`}
              initial={{
                opacity: 0,
                x: reduce ? 0 : from.x,
                y: reduce ? 0 : from.y,
                rotate: reduce ? 0 : from.r,
                scale: reduce ? 1 : 0.8,
              }}
              animate={{ opacity: 1, x: 0, y: 0, rotate: 0, scale: 1 }}
              transition={{ duration: reduce ? 0 : 1, delay: d, ease: [0.22, 1, 0.36, 1] }}
            >
              <C />
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* soft hand-off gradient into the page */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent to-bg-primary/70"
      />
    </div>
  )
}
