import { Mail, FileDown } from 'lucide-react'
import Section from './Section'
import { contact, contactSection } from '../content'

// lucide-react no longer ships brand icons, so LinkedIn is inlined here.
function LinkedinIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4V8h4v2a6 6 0 0 1 2-2z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  )
}

export default function Contact() {
  return (
    <Section id="contact" label={contactSection.label} title={contactSection.title} decor={5}>
      <div className="max-w-3xl rounded-3xl border border-copper/25 bg-bg-secondary p-6 shadow-[0_22px_50px_-30px_rgba(61,75,68,0.55)] sm:p-10">
        <p className="max-w-xl leading-relaxed text-muted">{contactSection.intro}</p>
        <div className="mt-8 flex flex-wrap gap-4">
          <a
            href={`mailto:${contact.email}`}
            className="inline-flex items-center gap-2.5 rounded-full bg-copper px-6 py-3 font-mono text-sm text-white shadow-[0_10px_28px_-12px_rgba(226,145,77,0.7)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-copper/90 hover:shadow-[0_16px_36px_-12px_rgba(226,145,77,0.6)]"
          >
            <Mail size={16} aria-hidden="true" />
            Email me
          </a>
          <a
            href={contact.linkedin}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2.5 rounded-full border border-teal/50 px-6 py-3 font-mono text-sm text-teal transition-all duration-300 hover:-translate-y-0.5 hover:border-teal hover:bg-teal/10"
          >
            <LinkedinIcon />
            LinkedIn
          </a>
          <a
            href={contact.resumeUrl}
            download
            className="inline-flex items-center gap-2.5 rounded-full border border-muted/40 px-6 py-3 font-mono text-sm text-ivory transition-all duration-300 hover:-translate-y-0.5 hover:border-muted"
          >
            <FileDown size={16} aria-hidden="true" />
            Resume
          </a>
        </div>
        <p className="mt-6 font-mono text-[11px] tracking-wide text-muted">
          {contact.email}
        </p>
      </div>
    </Section>
  )
}
