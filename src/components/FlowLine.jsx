import { motion, useScroll, useSpring, useTransform } from 'framer-motion'

// A glass burette running down the page. A faint glass track, a pastel liquid
// column that rises with scroll progress, small bubbles drifting up inside the
// filled region, and a bright meniscus highlight riding the surface.
export default function FlowLine() {
  const { scrollYProgress } = useScroll()
  const progress = useSpring(scrollYProgress, { stiffness: 65, damping: 22 })
  const clipPath = useTransform(progress, (v) => `inset(${(1 - v) * 100}% 0 0 0)`)

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-y-0 left-5 z-0 w-1.5 -translate-x-1/2 overflow-hidden rounded-full sm:left-10"
    >
      {/* glass track */}
      <div className="absolute inset-0 rounded-full bg-faint/20" />
      {/* liquid column, revealed from the top down by scroll */}
      <motion.div
        style={{ clipPath }}
        className="absolute inset-0 rounded-full bg-gradient-to-b from-sage via-sky to-lilac"
      >
        {/* flowing highlight */}
        <div className="flow-dashes absolute inset-0 rounded-full opacity-70" />
        {/* rising bubbles */}
        {[
          { left: '10%', bottom: '8%', s: 4, d: '0s' },
          { left: '55%', bottom: '20%', s: 3, d: '1.1s' },
          { left: '25%', bottom: '38%', s: 4, d: '2.1s' },
          { left: '60%', bottom: '58%', s: 3, d: '0.6s' },
          { left: '20%', bottom: '74%', s: 4, d: '1.6s' },
        ].map((b, i) => (
          <span
            key={i}
            className="flow-bubble absolute rounded-full bg-white/80"
            style={{ left: b.left, bottom: b.bottom, width: b.s, height: b.s, animationDelay: b.d }}
          />
        ))}
      </motion.div>
    </div>
  )
}
