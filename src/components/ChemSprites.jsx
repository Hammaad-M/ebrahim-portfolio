// ---------------------------------------------------------------------------
// Chemistry glassware + molecule sprite library.
// Each sprite is a self-contained SVG that fills its container, drawn in a
// soft "riso" style: pastel fills sitting slightly behind an ink outline,
// every one carrying its own ambient motion. Reduced-motion is handled by the
// animation classes in index.css (they no-op under prefers-reduced-motion).
// ---------------------------------------------------------------------------

const INK = '#3d4b44'

// Common wrapper so every sprite shares stroke conventions.
function S({ viewBox, children, className = '' }) {
  return (
    <svg
      viewBox={viewBox}
      className={`h-full w-full ${className}`}
      fill="none"
      stroke={INK}
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {children}
    </svg>
  )
}

// Erlenmeyer (conical) flask with bubbling sage liquid.
export function Erlenmeyer() {
  return (
    <S viewBox="0 0 140 170">
      <clipPath id="erl-body">
        <path d="M56 24h28v40l32 74a10 10 0 0 1-9 14H33a10 10 0 0 1-9-14l32-74z" />
      </clipPath>
      {/* liquid */}
      <g clipPath="url(#erl-body)">
        <g className="liquid-sway" style={{ transformOrigin: '70px 130px' }}>
          <path d="M8 108h124v70H8z" fill="#7fb79e" opacity="0.85" />
          <path d="M8 108q31 12 62 0t62 0v10H8z" fill="#a6d0bd" opacity="0.9" />
        </g>
        <g className="rise">
          <circle cx="52" cy="150" r="4" fill="#eef7f1" opacity="0.9" />
          <circle cx="86" cy="156" r="3" fill="#eef7f1" opacity="0.8" />
        </g>
        <g className="rise" style={{ animationDelay: '1.3s' }}>
          <circle cx="70" cy="150" r="5" fill="#eef7f1" opacity="0.85" />
          <circle cx="98" cy="150" r="3" fill="#eef7f1" opacity="0.7" />
        </g>
      </g>
      {/* glass outline */}
      <path d="M56 24h28v40l32 74a10 10 0 0 1-9 14H33a10 10 0 0 1-9-14l32-74z" />
      <path d="M50 16h40" strokeWidth="2.6" />
      <path d="M56 40h28" strokeWidth="1.4" opacity="0.5" />
      {/* graduation ticks */}
      <path d="M44 120h12M40 134h12M52 106h8" strokeWidth="1.4" opacity="0.55" />
      {/* escaping vapor */}
      <path d="M64 12c-4-6 4-10 0-16M78 12c4-6-4-10 0-16" strokeWidth="1.6" opacity="0.45" className="pulse-soft" />
    </S>
  )
}

// Round-bottom flask on a ring, lilac contents swirling.
export function RoundFlask() {
  return (
    <S viewBox="0 0 150 170">
      <clipPath id="rb-body">
        <circle cx="75" cy="108" r="48" />
      </clipPath>
      <g clipPath="url(#rb-body)">
        <g className="liquid-sway" style={{ transformOrigin: '75px 120px' }}>
          <path d="M20 118h110v50H20z" fill="#c3aedd" opacity="0.8" />
          <path d="M20 118q27 11 55 0t55 0v10H20z" fill="#d6c6ea" opacity="0.9" />
        </g>
        <g className="rise" style={{ animationDelay: '0.6s' }}>
          <circle cx="66" cy="132" r="4" fill="#f3eefb" opacity="0.9" />
          <circle cx="90" cy="138" r="3" fill="#f3eefb" opacity="0.8" />
        </g>
      </g>
      <circle cx="75" cy="108" r="48" />
      <path d="M63 62V26h24v36" />
      <path d="M57 20h36" strokeWidth="2.6" />
      <path d="M63 40h24" strokeWidth="1.4" opacity="0.5" />
      {/* support ring + stand */}
      <path d="M40 150h70" strokeWidth="1.6" opacity="0.55" />
      <ellipse cx="75" cy="150" rx="34" ry="7" strokeWidth="1.6" opacity="0.55" />
    </S>
  )
}

// Graduated beaker with sky-blue liquid and a lone bubble.
export function Beaker() {
  return (
    <S viewBox="0 0 140 160">
      <clipPath id="bk-body">
        <path d="M30 34h80v92a12 12 0 0 1-12 12H42a12 12 0 0 1-12-12z" />
      </clipPath>
      <g clipPath="url(#bk-body)">
        <g className="liquid-sway" style={{ transformOrigin: '70px 90px' }}>
          <path d="M22 78h96v80H22z" fill="#9dbbd9" opacity="0.82" />
          <path d="M22 78q24 10 48 0t48 0v10H22z" fill="#bcd3e8" opacity="0.9" />
        </g>
        <g className="rise" style={{ animationDelay: '0.9s' }}>
          <circle cx="80" cy="120" r="4" fill="#eef4fa" opacity="0.9" />
        </g>
      </g>
      <path d="M30 34h80v92a12 12 0 0 1-12 12H42a12 12 0 0 1-12-12z" />
      <path d="M26 34h88" strokeWidth="2.6" />
      <path d="M110 40c10 2 10 12 2 14" strokeWidth="1.8" opacity="0.6" />
      {/* graduation marks */}
      <path d="M96 62h14M96 82h10M96 102h14M96 122h10" strokeWidth="1.4" opacity="0.5" />
    </S>
  )
}

// A rack of three test tubes with different pastel reagents.
export function TestTubes() {
  const tubes = [
    { x: 34, fill: '#f3c29e', top: 96 },
    { x: 70, fill: '#7fb79e', top: 78 },
    { x: 106, fill: '#c3aedd', top: 108 },
  ]
  return (
    <S viewBox="0 0 150 170">
      {/* rack */}
      <path d="M18 44h114" strokeWidth="2.4" />
      <path d="M22 44v-8h106v8" strokeWidth="1.6" opacity="0.6" />
      {tubes.map((t, i) => (
        <g key={t.x}>
          <clipPath id={`tt-${i}`}>
            <path d={`M${t.x - 12} 44v78a12 12 0 0 0 24 0V44`} />
          </clipPath>
          <g clipPath={`url(#tt-${i})`}>
            <g className="liquid-sway" style={{ transformOrigin: `${t.x}px 120px` }}>
              <path d={`M${t.x - 14} ${t.top}h28v52h-28z`} fill={t.fill} opacity="0.85" />
              <path
                d={`M${t.x - 14} ${t.top}q14 7 28 0v8h-28z`}
                fill="#ffffff"
                opacity="0.35"
              />
            </g>
            <g className="rise" style={{ animationDelay: `${i * 0.7}s` }}>
              <circle cx={t.x} cy={t.top + 34} r="3" fill="#ffffff" opacity="0.75" />
            </g>
          </g>
          <path d={`M${t.x - 12} 40v82a12 12 0 0 0 24 0V40`} />
        </g>
      ))}
    </S>
  )
}

// Fractionating / distillation column with trays and rising vapor.
export function DistillColumn() {
  return (
    <S viewBox="0 0 120 190">
      <clipPath id="dc-body">
        <rect x="42" y="26" width="36" height="118" rx="16" />
      </clipPath>
      <g clipPath="url(#dc-body)">
        <rect x="38" y="96" width="44" height="52" fill="#f0ce86" opacity="0.5" />
      </g>
      <rect x="42" y="26" width="36" height="118" rx="16" />
      {/* trays */}
      <path d="M42 56h36M42 78h36M42 100h36M42 122h36" strokeWidth="1.4" opacity="0.55" strokeDasharray="4 5" />
      {/* rising vapor dots */}
      <g className="rise">
        <circle cx="60" cy="120" r="3.5" fill="#f0ce86" opacity="0.85" />
        <circle cx="68" cy="128" r="2.5" fill="#f0ce86" opacity="0.7" />
      </g>
      <g className="rise" style={{ animationDelay: '1.1s' }}>
        <circle cx="54" cy="126" r="3" fill="#f0ce86" opacity="0.8" />
      </g>
      {/* overhead take-off + reboiler stub */}
      <path d="M60 26v-14h34" />
      <path d="M60 144v20h-30" />
      <path d="M92 20l10 6-10 6" strokeWidth="1.8" opacity="0.6" className="pulse-soft" />
      {/* side nozzles */}
      <path d="M78 68h16M78 112h16" strokeWidth="1.6" opacity="0.6" />
    </S>
  )
}

// Liebig condenser: inner tube through a water jacket, coolant flowing.
export function Condenser() {
  return (
    <S viewBox="0 0 200 130" className="float-bob" >
      <g style={{ ['--tilt']: '0deg' }}>
        {/* jacket */}
        <path d="M24 44h150a10 10 0 0 1 0 42H24a10 10 0 0 1 0-42z" fill="#9dbbd9" opacity="0.35" />
        <path d="M24 44h150a10 10 0 0 1 0 42H24a10 10 0 0 1 0-42z" />
        {/* inner tube */}
        <path d="M6 58h188M6 72h188" strokeWidth="1.8" opacity="0.7" />
        {/* coolant path dashes */}
        <path d="M6 65h188" strokeWidth="2" strokeDasharray="6 12" opacity="0.7" className="stroke-flow" stroke="#9dbbd9" />
        {/* water in / out ports */}
        <path d="M40 44v-20M158 86v20" strokeWidth="2" opacity="0.7" />
      </g>
    </S>
  )
}

// Pipette / dropper releasing a droplet.
export function Pipette() {
  return (
    <S viewBox="0 0 70 180">
      {/* bulb */}
      <ellipse cx="35" cy="30" rx="18" ry="22" />
      <path d="M35 52v18" />
      <clipPath id="pp-stem">
        <path d="M27 70h16v58l-8 18-8-18z" />
      </clipPath>
      <g clipPath="url(#pp-stem)">
        <rect x="20" y="96" width="30" height="60" fill="#f3c29e" opacity="0.8" />
      </g>
      <path d="M27 70h16v58l-8 18-8-18z" />
      {/* forming + falling droplet */}
      <g className="drip">
        <path d="M35 150c4 5 6 8 6 12a6 6 0 0 1-12 0c0-4 2-7 6-12z" fill="#f3c29e" opacity="0.9" />
      </g>
    </S>
  )
}

// Separatory funnel with two immiscible layers and a stopcock.
export function SepFunnel() {
  return (
    <S viewBox="0 0 140 180">
      <clipPath id="sf-body">
        <path d="M40 34h60l-24 76a8 8 0 0 1-12 0z" />
      </clipPath>
      <g clipPath="url(#sf-body)">
        <path d="M32 34h76v40H32z" fill="#f0ce86" opacity="0.7" />
        <path d="M32 74h76v40H32z" fill="#c3aedd" opacity="0.7" />
        <path d="M32 70h76v8H32z" fill="#ffffff" opacity="0.4" />
      </g>
      <path d="M40 34h60l-24 76a8 8 0 0 1-12 0z" />
      <path d="M34 26h72" strokeWidth="2.6" />
      {/* stem + stopcock + drip */}
      <path d="M70 118v22" />
      <circle cx="70" cy="132" r="8" />
      <path d="M62 132h16" strokeWidth="1.8" opacity="0.7" />
      <path d="M70 140v14" />
      <g className="drip" style={{ animationDelay: '0.8s' }}>
        <circle cx="70" cy="160" r="4" fill="#c3aedd" opacity="0.85" />
      </g>
    </S>
  )
}

// Bunsen burner with a soft blue flame.
export function Burner() {
  return (
    <S viewBox="0 0 120 180">
      {/* flame */}
      <g className="flame" style={{ transformOrigin: '60px 78px' }}>
        <path d="M60 34c16 20 20 30 20 44a20 20 0 0 1-40 0c0-14 4-24 20-44z" fill="#9dbbd9" opacity="0.55" />
        <path d="M60 52c9 12 11 18 11 26a11 11 0 0 1-22 0c0-8 2-14 11-26z" fill="#c3aedd" opacity="0.7" />
      </g>
      {/* barrel + base */}
      <path d="M50 96h20v44H50z" />
      <path d="M36 140h48l8 22H28z" />
      <path d="M54 108h12M54 120h12" strokeWidth="1.4" opacity="0.5" />
      <path d="M84 128h16" strokeWidth="1.8" opacity="0.6" />
    </S>
  )
}

// Benzene ring (aromatic hexagon) — slow rotation.
export function Benzene() {
  return (
    <S viewBox="0 0 160 160">
      <g className="spin-slow" style={{ transformOrigin: '80px 80px' }}>
        <path d="M80 16l55 32v64l-55 32-55-32V48z" fill="#7fb79e" opacity="0.16" />
        <path d="M80 16l55 32v64l-55 32-55-32V48z" />
        <circle cx="80" cy="80" r="34" strokeWidth="2" opacity="0.7" />
        {/* vertex atoms */}
        {[
          [80, 16],
          [135, 48],
          [135, 112],
          [80, 144],
          [25, 112],
          [25, 48],
        ].map(([x, y]) => (
          <circle key={`${x}-${y}`} cx={x} cy={y} r="6" fill="#f7f4ec" />
        ))}
      </g>
    </S>
  )
}

// Ball-and-stick molecule chain — gentle float.
export function Molecule() {
  const atoms = [
    { x: 28, y: 96, r: 13, fill: '#e2914d' },
    { x: 72, y: 62, r: 16, fill: '#7fb79e' },
    { x: 116, y: 96, r: 13, fill: '#9dbbd9' },
    { x: 160, y: 60, r: 11, fill: '#c3aedd' },
    { x: 72, y: 118, r: 10, fill: '#f0ce86' },
  ]
  return (
    <S viewBox="0 0 190 150" className="float-bob">
      <g style={{ ['--tilt']: '-3deg' }}>
        {/* bonds */}
        <path d="M28 96L72 62L116 96L160 60M72 62v56" strokeWidth="3" opacity="0.75" />
        {atoms.map((a) => (
          <g key={`${a.x}-${a.y}`}>
            <circle cx={a.x} cy={a.y} r={a.r} fill={a.fill} opacity="0.9" />
            <circle cx={a.x} cy={a.y} r={a.r} />
            <circle cx={a.x - a.r * 0.35} cy={a.y - a.r * 0.35} r={a.r * 0.3} fill="#ffffff" opacity="0.5" stroke="none" />
          </g>
        ))}
      </g>
    </S>
  )
}

// Atom with orbiting electrons.
export function Atom() {
  return (
    <S viewBox="0 0 160 160">
      <circle cx="80" cy="80" r="12" fill="#e2914d" opacity="0.9" />
      <circle cx="80" cy="80" r="12" />
      {[0, 60, 120].map((deg) => (
        <g key={deg} transform={`rotate(${deg} 80 80)`}>
          <ellipse cx="80" cy="80" rx="64" ry="26" strokeWidth="1.8" opacity="0.6" />
        </g>
      ))}
      <g className="spin-orbit" style={{ transformOrigin: '80px 80px' }}>
        <circle cx="144" cy="80" r="6" fill="#7fb79e" />
      </g>
      <g className="spin-orbit" style={{ transformOrigin: '80px 80px', animationDelay: '-3s' }}>
        <circle cx="112" cy="135" r="5" fill="#9dbbd9" />
      </g>
      <g className="spin-orbit" style={{ transformOrigin: '80px 80px', animationDelay: '-6s' }}>
        <circle cx="48" cy="135" r="5" fill="#c3aedd" />
      </g>
    </S>
  )
}

// Small cluster of rising bubbles — ambient filler.
export function Bubbles() {
  return (
    <S viewBox="0 0 90 130">
      <g className="rise">
        <circle cx="30" cy="100" r="9" fill="#9dbbd9" opacity="0.5" />
        <circle cx="58" cy="112" r="6" fill="#7fb79e" opacity="0.5" />
      </g>
      <g className="rise" style={{ animationDelay: '1.4s' }}>
        <circle cx="46" cy="104" r="12" fill="#c3aedd" opacity="0.45" />
        <circle cx="66" cy="96" r="7" fill="#f0ce86" opacity="0.5" />
      </g>
      <g className="rise" style={{ animationDelay: '0.7s' }}>
        <circle cx="24" cy="108" r="5" fill="#f3c29e" opacity="0.5" />
      </g>
    </S>
  )
}

// Hexagon molecule chain (cyclo- structure) — slow counter-rotation.
export function HexChain() {
  const hex = (cx, cy, r) =>
    Array.from({ length: 6 }, (_, i) => {
      const a = (Math.PI / 3) * i - Math.PI / 2
      return `${cx + r * Math.cos(a)},${cy + r * Math.sin(a)}`
    }).join(' ')
  return (
    <S viewBox="0 0 200 130">
      <g className="spin-slow-rev" style={{ transformOrigin: '100px 65px' }}>
        <polygon points={hex(62, 65, 34)} fill="#f0ce86" opacity="0.18" />
        <polygon points={hex(62, 65, 34)} />
        <polygon points={hex(128, 65, 34)} fill="#7fb79e" opacity="0.18" />
        <polygon points={hex(128, 65, 34)} />
        {[
          [62, 31],
          [128, 31],
          [95, 65],
        ].map(([x, y]) => (
          <circle key={`${x}-${y}`} cx={x} cy={y} r="5" fill="#e2914d" opacity="0.85" />
        ))}
      </g>
    </S>
  )
}

// ---------------------------------------------------------------------------
// Industrial / plant sprites — chemical engineering at the scale it actually
// runs: towers, tanks, reactors, exchangers and pipe racks, not just glassware.
// ---------------------------------------------------------------------------

// Hyperbolic cooling tower venting steam.
export function CoolingTower() {
  return (
    <S viewBox="0 0 150 180">
      {/* steam plume */}
      <g className="smoke" style={{ transformOrigin: '75px 34px' }}>
        <circle cx="66" cy="34" r="11" fill="#cdd9e6" opacity="0.6" stroke="none" />
        <circle cx="84" cy="28" r="9" fill="#cdd9e6" opacity="0.5" stroke="none" />
        <circle cx="75" cy="22" r="12" fill="#e2e9f1" opacity="0.55" stroke="none" />
      </g>
      <clipPath id="ct-body">
        <path d="M40 40C46 88 52 96 62 120l-6 44h38l-6-44c10-24 16-32 22-80z" />
      </clipPath>
      <g clipPath="url(#ct-body)">
        <rect x="30" y="90" width="90" height="80" fill="#9dbbd9" opacity="0.35" />
        <path d="M30 118h90M30 140h90" stroke="#3d4b44" strokeWidth="1" opacity="0.3" />
      </g>
      <path d="M40 40C46 88 52 96 62 120l-6 44h38l-6-44c10-24 16-32 22-80z" />
      <ellipse cx="75" cy="40" rx="35" ry="8" />
      <path d="M56 164h38" strokeWidth="2.4" />
      {/* support slats at the air intake */}
      <path d="M56 150v14M66 150v14M84 150v14M94 150v14" strokeWidth="1.4" opacity="0.55" />
    </S>
  )
}

// Smokestack / chimney with drifting emissions.
export function Smokestack() {
  return (
    <S viewBox="0 0 120 190">
      <g className="smoke" style={{ transformOrigin: '60px 30px' }}>
        <circle cx="52" cy="30" r="9" fill="#c9cfca" opacity="0.55" stroke="none" />
        <circle cx="68" cy="24" r="7" fill="#c9cfca" opacity="0.45" stroke="none" />
        <circle cx="60" cy="18" r="10" fill="#dce0dc" opacity="0.5" stroke="none" />
      </g>
      <path d="M46 40h28l6 130H40z" />
      <path d="M42 40h36" strokeWidth="2.4" />
      {/* hazard bands + access ladder */}
      <path d="M43 70h34M44 96h32M45 122h30" strokeWidth="1.4" opacity="0.5" />
      <path d="M84 60v106M90 60v106M84 74h6M84 90h6M84 106h6M84 122h6M84 138h6" strokeWidth="1.1" opacity="0.55" />
    </S>
  )
}

// Bulk storage tank with a level gauge and inlet/outlet nozzles.
export function StorageTank() {
  return (
    <S viewBox="0 0 180 160">
      <clipPath id="st-body">
        <path d="M28 56a12 8 0 0 1 124 0v78a12 8 0 0 1-124 0z" />
      </clipPath>
      <g clipPath="url(#st-body)">
        <g className="liquid-sway" style={{ transformOrigin: '90px 110px' }}>
          <rect x="20" y="96" width="140" height="60" fill="#f0ce86" opacity="0.7" />
          <path d="M20 96q35 8 70 0t70 0v8H20z" fill="#f6e2ac" opacity="0.9" />
        </g>
      </g>
      <path d="M28 56v78a12 8 0 0 0 124 0V56" />
      <ellipse cx="90" cy="56" rx="62" ry="8" />
      {/* shell seams */}
      <path d="M28 90h124M28 120h124" strokeWidth="1" opacity="0.35" />
      {/* roof nozzle + inlet */}
      <path d="M90 48v-16h26" strokeWidth="2" opacity="0.7" />
      {/* external level gauge */}
      <path d="M158 74v70M152 74h12M152 144h12" strokeWidth="1.4" opacity="0.6" />
      <circle cx="158" cy="118" r="3" fill="#e2914d" stroke="none" className="pulse-soft" />
      {/* bottom outlet */}
      <path d="M60 148v14h-22" strokeWidth="2" opacity="0.7" />
    </S>
  )
}

// Continuous stirred-tank reactor: drive motor on top, rotating agitator,
// heating jacket, feed and product nozzles.
export function ReactorTank() {
  return (
    <S viewBox="0 0 150 190">
      {/* motor + drive */}
      <rect x="60" y="14" width="30" height="20" rx="4" />
      <path d="M75 34v18" strokeWidth="2.4" />
      <clipPath id="rt-body">
        <path d="M40 52h70v78a35 30 0 0 1-70 0z" />
      </clipPath>
      <g clipPath="url(#rt-body)">
        <g className="liquid-sway" style={{ transformOrigin: '75px 118px' }}>
          <rect x="32" y="104" width="86" height="70" fill="#7fb79e" opacity="0.7" />
          <path d="M32 104q21 8 43 0t43 0v8H32z" fill="#a6d0bd" opacity="0.9" />
        </g>
      </g>
      {/* jacket (double wall) */}
      <path d="M34 52h82v76a41 34 0 0 1-82 0z" strokeWidth="1.2" opacity="0.4" />
      <path d="M40 52h70v78a35 30 0 0 1-70 0z" />
      <path d="M34 52h82" strokeWidth="2.4" />
      {/* rotating agitator */}
      <g className="spin-med" style={{ transformOrigin: '75px 118px' }}>
        <path d="M75 92v40M56 128h38" strokeWidth="2" opacity="0.75" />
        <path d="M56 128l8-6M94 128l-8-6" strokeWidth="1.6" opacity="0.6" />
      </g>
      {/* nozzles */}
      <path d="M52 52v-14h14M110 92h16" strokeWidth="1.8" opacity="0.6" />
      <path d="M124 90l8 2-8 2" strokeWidth="1.6" opacity="0.6" className="pulse-soft" />
    </S>
  )
}

// Shell-and-tube heat exchanger with coolant flowing through.
export function HeatExchanger() {
  return (
    <S viewBox="0 0 210 120" className="float-bob">
      <g style={{ ['--tilt']: '2deg' }}>
        {/* shell */}
        <rect x="34" y="34" width="146" height="52" rx="14" fill="#f3c29e" opacity="0.28" />
        <rect x="34" y="34" width="146" height="52" rx="14" />
        {/* channel heads */}
        <path d="M34 46v28M180 46v28" strokeWidth="1.4" opacity="0.5" />
        {/* tube bundle */}
        <path d="M40 48h134M40 60h134M40 72h134" strokeWidth="1.4" opacity="0.6" />
        <path d="M40 60h134" strokeWidth="2" stroke="#f3c29e" strokeDasharray="6 12" className="stroke-flow" />
        {/* nozzles */}
        <path d="M60 34v-18M154 86v18M20 60h14M176 60h14" strokeWidth="2" opacity="0.6" />
      </g>
    </S>
  )
}

// Elevated pipe rack: parallel process lines on supports, valves and flow.
export function PipeRack() {
  return (
    <S viewBox="0 0 210 150">
      {/* three parallel lines */}
      <path d="M6 44h198M6 66h198M6 88h198" strokeWidth="2" opacity="0.85" />
      {/* flowing product in the middle line */}
      <path d="M6 66h198" strokeWidth="2.4" stroke="#7fb79e" strokeDasharray="7 16" className="stroke-flow" />
      {/* support bents */}
      <path d="M40 34v96M40 130h-10M40 130h10M170 34v96M170 130h-10M170 130h10" strokeWidth="1.6" opacity="0.6" />
      <path d="M34 100h142" strokeWidth="1.4" opacity="0.4" />
      {/* inline valve on top line */}
      <path d="M96 36l16 8-16 8V36zM128 36l-16 8 16 8V36z" strokeWidth="1.6" opacity="0.8" />
      <path d="M112 44v-12" strokeWidth="1.4" opacity="0.6" />
      {/* flange marks */}
      <path d="M70 62v8M74 62v8M150 84v8M154 84v8" strokeWidth="1.2" opacity="0.55" />
    </S>
  )
}

// Pressure gauge with a sweeping copper needle.
export function PressureGauge() {
  return (
    <S viewBox="0 0 150 160">
      <circle cx="75" cy="70" r="58" />
      <circle cx="75" cy="70" r="50" strokeWidth="1" opacity="0.4" />
      {Array.from({ length: 21 }, (_, i) => {
        const a = Math.PI * 0.75 - (i * Math.PI * 1.5) / 20
        const major = i % 5 === 0
        const x1 = 75 + Math.cos(a) * 50
        const y1 = 70 - Math.sin(a) * 50
        const x2 = 75 + Math.cos(a) * (major ? 40 : 45)
        const y2 = 70 - Math.sin(a) * (major ? 40 : 45)
        return (
          <path
            key={i}
            d={`M${x1} ${y1}L${x2} ${y2}`}
            strokeWidth={major ? 1.4 : 0.9}
            opacity={major ? 0.9 : 0.5}
          />
        )
      })}
      {/* red-line band */}
      <path d="M96 33a50 50 0 0 1 20 30" stroke="#e2914d" strokeWidth="3" opacity="0.6" />
      {/* needle */}
      <g className="gauge-sweep" style={{ transformOrigin: '75px 70px' }}>
        <path d="M75 70L52 40" stroke="#e2914d" strokeWidth="2.4" />
      </g>
      <circle cx="75" cy="70" r="6" fill="#e2914d" stroke="none" />
      {/* connector */}
      <path d="M75 128v22M64 150h22" strokeWidth="2" opacity="0.7" />
    </S>
  )
}

// A little plant skyline — the discipline at scale: tower, tank, reactor and
// a stack, tied together by a grade-level pipe. Wide aspect for backdrops.
export function PlantSkyline() {
  return (
    <S viewBox="0 0 280 170">
      {/* smokestack + emissions */}
      <g className="smoke" style={{ transformOrigin: '38px 24px' }}>
        <circle cx="32" cy="24" r="7" fill="#c9cfca" opacity="0.5" stroke="none" />
        <circle cx="44" cy="18" r="6" fill="#dce0dc" opacity="0.45" stroke="none" />
      </g>
      <path d="M30 40h16l3 96H27z" />
      <path d="M28 40h20" strokeWidth="2" />
      {/* fractionating tower */}
      <rect x="74" y="24" width="30" height="112" rx="13" />
      <path d="M74 48h30M74 70h30M74 92h30M74 114h30" strokeWidth="1.1" opacity="0.45" strokeDasharray="4 5" />
      <path d="M89 24v-12h18" strokeWidth="1.6" opacity="0.6" />
      {/* storage tank */}
      <path d="M132 78a10 6 0 0 1 44 0v58h-44z" />
      <ellipse cx="154" cy="78" rx="22" ry="6" />
      <path d="M132 104h44" strokeWidth="1" opacity="0.35" />
      {/* reactor with motor */}
      <rect x="206" y="52" width="16" height="10" rx="2" />
      <path d="M214 62v6" />
      <path d="M198 68h32v46a16 13 0 0 1-32 0z" />
      <path d="M198 68h32" strokeWidth="1.8" />
      <g className="spin-med" style={{ transformOrigin: '214px 96px' }}>
        <path d="M214 78v26M202 100h24" strokeWidth="1.6" opacity="0.7" />
      </g>
      {/* grade line + tie-in pipe */}
      <path d="M12 148h256" strokeWidth="2" opacity="0.7" />
      <path d="M49 136v12M89 136v12M154 136v12M214 122v14" strokeWidth="1.4" opacity="0.5" />
      <path d="M60 142h150" strokeWidth="1.6" stroke="#7fb79e" strokeDasharray="6 14" className="stroke-flow" opacity="0.8" />
    </S>
  )
}

