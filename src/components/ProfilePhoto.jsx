import { Benzene } from './ChemSprites'

// EDIT ME: swap this placeholder for a real photo —
// <img src={photo} alt="Ebrahim Sorathia" className="h-full w-full object-cover" />
export default function ProfilePhoto() {
  return (
    <figure className="relative aspect-[4/5] w-full max-w-xs overflow-hidden rounded-2xl border border-copper/25 bg-bg-secondary shadow-[0_16px_40px_-24px_rgba(61,75,68,0.5)]">
      <div
        role="img"
        aria-label="Placeholder for a photo of Ebrahim Sorathia"
        className="flex h-full w-full flex-col items-center justify-center gap-3"
        style={{
          backgroundImage:
            'radial-gradient(70% 60% at 30% 20%, rgba(243,194,158,0.35) 0%, transparent 60%), radial-gradient(70% 60% at 80% 90%, rgba(127,183,158,0.35) 0%, transparent 60%)',
        }}
      >
        <div className="h-24 w-24 opacity-70">
          <Benzene />
        </div>
        <span className="font-display text-5xl text-ink/80">ES</span>
        <span className="font-mono text-[10px] tracking-[0.25em] text-faint">
          PHOTO PENDING
        </span>
      </div>
      <figcaption className="absolute inset-x-0 bottom-0 border-t border-copper/20 bg-white/70 px-3 py-2 font-mono text-[10px] tracking-[0.2em] text-muted backdrop-blur-sm">
        FIG. 1 · E. SORATHIA, MUMBAI
      </figcaption>
    </figure>
  )
}
