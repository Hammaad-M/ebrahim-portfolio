import { footer, hero } from '../content'

// Styled like the title block of an engineering drawing sheet.
export default function Footer() {
  const { titleBlock } = footer
  const cells = [
    ['KEPT BY', titleBlock.drawnBy],
    ['VOLUME', titleBlock.date],
  ]

  return (
    <footer className="relative z-10 mt-8 px-5 pb-10 sm:px-10">
      <div className="ml-7 overflow-hidden rounded-3xl border border-copper/25 bg-bg-secondary/70 font-mono shadow-[0_18px_44px_-30px_rgba(61,75,68,0.5)] backdrop-blur-sm sm:ml-14">
        <div className="border-b border-muted/20 px-5 py-3.5">
          <p className="text-[10px] tracking-[0.2em] text-faint">LAB NOTEBOOK</p>
          <p className="mt-1 text-xs tracking-[0.14em] text-ink">
            {hero.name.toUpperCase()} · {titleBlock.title}
          </p>
        </div>
        <dl className="grid grid-cols-2">
          {cells.map(([k, v], i) => (
            <div
              key={k}
              className={`px-5 py-3.5 ${i > 0 ? 'border-l border-muted/20' : ''}`}
            >
              <dt className="text-[10px] tracking-[0.2em] text-faint">{k}</dt>
              <dd className="mt-1 text-xs text-ink">{v}</dd>
            </div>
          ))}
        </dl>
      </div>
    </footer>
  )
}
