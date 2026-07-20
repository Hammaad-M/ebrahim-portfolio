import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion'
import {
  Erlenmeyer,
  RoundFlask,
  DistillColumn,
  Benzene,
  Molecule,
  Atom,
  CoolingTower,
  Smokestack,
  StorageTank,
  ReactorTank,
  HeatExchanger,
  PipeRack,
  PressureGauge,
  PlantSkyline,
} from './ChemSprites'

// Per-section sprite arrangements. Each item flies in from its own direction as
// the section scrolls into view, then drifts on a slow parallax plane while its
// internal ambient motion keeps running. The mix moves from bench glassware in
// the early sections toward plant-scale equipment (towers, tanks, reactors,
// pipe racks) as the story reaches industry and scale.
const SETS = [
  // 0 · About — bench meets plant: a flask, a molecule, a storage tank
  [
    { C: Erlenmeyer, pos: '-top-2 -right-6 h-56 w-48', from: { x: 90, y: -30, r: 8 }, depth: 1 },
    { C: Molecule, pos: 'top-44 right-[19%] h-24 w-36', from: { x: 60, y: 40, r: -6 }, depth: 1.7 },
    { C: StorageTank, pos: 'top-16 right-[3%] h-28 w-40', from: { x: 40, y: 60, r: 4 }, depth: 2.2 },
  ],
  // 1 · Education — column, reactor, atom
  [
    { C: DistillColumn, pos: '-top-4 -right-2 h-60 w-40', from: { x: 100, y: -20, r: -6 }, depth: 1 },
    { C: ReactorTank, pos: 'top-48 right-[22%] h-44 w-36', from: { x: -50, y: 40, r: 10 }, depth: 1.6 },
    { C: Atom, pos: 'top-20 right-[7%] h-24 w-24', from: { x: 50, y: -50, r: 0 }, depth: 2.1 },
  ],
  // 2 · Research — sustainability: green flask, cooling tower, benzene
  [
    { C: RoundFlask, pos: 'top-2 -right-6 h-56 w-48', from: { x: 90, y: 30, r: 8 }, depth: 1 },
    { C: CoolingTower, pos: 'top-48 right-[21%] h-48 w-40', from: { x: -50, y: -30, r: -10 }, depth: 1.6 },
    { C: Benzene, pos: 'top-14 right-[6%] h-24 w-24', from: { x: 40, y: 50, r: -12 }, depth: 2.3 },
  ],
  // 3 · Credentials — techno-commercial: gauge, storage tank, molecule
  [
    { C: PressureGauge, pos: '-top-2 -right-2 h-52 w-44', from: { x: 100, y: -30, r: -8 }, depth: 1 },
    { C: StorageTank, pos: 'top-48 right-[22%] h-32 w-48', from: { x: -60, y: 40, r: 6 }, depth: 1.5 },
    { C: Molecule, pos: 'top-16 right-[6%] h-24 w-32', from: { x: 50, y: 50, r: -6 }, depth: 2.2 },
  ],
  // 4 · Vision — industry at scale: full skyline, pipe rack, reactor
  [
    { C: PlantSkyline, pos: 'top-0 -right-8 h-40 w-[22rem]', from: { x: 110, y: -20, r: -4 }, depth: 1 },
    { C: PipeRack, pos: 'top-44 right-[20%] h-36 w-56', from: { x: -60, y: 40, r: 6 }, depth: 1.6 },
    { C: ReactorTank, pos: 'top-24 right-[4%] h-44 w-32', from: { x: 50, y: -50, r: 8 }, depth: 2.1 },
  ],
  // 5 · Contact — send-off: heat exchanger, smokestack, atom
  [
    { C: HeatExchanger, pos: 'top-6 -right-8 h-36 w-64', from: { x: 100, y: -20, r: -6 }, depth: 1 },
    { C: Smokestack, pos: 'top-40 right-[22%] h-44 w-28', from: { x: -40, y: 40, r: 8 }, depth: 1.6 },
    { C: Atom, pos: 'top-14 right-[6%] h-24 w-24', from: { x: 30, y: 60, r: 0 }, depth: 2.3 },
  ],
]

function Sprite({ item, progress, reduce }) {
  const { C, pos, from, depth } = item
  const y = useTransform(progress, [0, 1], [reduce ? 0 : 60 * depth, reduce ? 0 : -60 * depth])
  return (
    <motion.div
      className={`absolute ${pos}`}
      style={{ y }}
      initial={{ opacity: 0, x: reduce ? 0 : from.x, y: reduce ? 0 : from.y, rotate: reduce ? 0 : from.r }}
      whileInView={{ opacity: 0.96, x: 0, rotate: from.r * 0.15 }}
      viewport={{ once: true, margin: '0px 0px -18% 0px' }}
      transition={{ duration: reduce ? 0 : 1.1, ease: [0.22, 1, 0.36, 1] }}
    >
      <C />
    </motion.div>
  )
}

export default function ChemDecor({ target, variant = 0 }) {
  const reduce = useReducedMotion()
  const { scrollYProgress } = useScroll({
    target,
    offset: ['start end', 'end start'],
  })
  const set = SETS[variant % SETS.length]

  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 hidden overflow-hidden lg:block">
      {set.map((item, i) => (
        <Sprite key={i} item={item} progress={scrollYProgress} reduce={reduce} />
      ))}
    </div>
  )
}
