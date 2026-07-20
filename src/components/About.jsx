import Section from './Section'
import ProfilePhoto from './ProfilePhoto'
import { about } from '../content'

export default function About() {
  return (
    <Section id="about" label={about.label} title={about.title} decor={0}>
      <div className="flex flex-col gap-10 lg:flex-row lg:items-start lg:gap-16">
        <div className="max-w-2xl space-y-5 text-muted">
          {about.paragraphs.map((p) => (
            <p key={p.slice(0, 24)} className="leading-relaxed">
              {p}
            </p>
          ))}
        </div>
        <div className="w-60 shrink-0 sm:w-72 lg:pt-2">
          <ProfilePhoto />
        </div>
      </div>
    </Section>
  )
}
