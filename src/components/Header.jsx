import { navSections } from '../content'

export default function Header() {
  return (
    <header className="absolute inset-x-0 top-0 z-20">
      <div className="flex items-center justify-between px-5 py-5 sm:px-10">
        <a
          href="#top"
          className="font-mono text-xs tracking-[0.25em] text-ivory transition-colors hover:text-teal"
        >
          ES · 2026
        </a>
        <nav aria-label="Sections" className="hidden items-center gap-6 md:flex">
          {navSections.map((s) => (
            <a
              key={s.id}
              href={`#${s.id}`}
              className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted transition-colors hover:text-teal"
            >
              {s.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  )
}
