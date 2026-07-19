import { Check } from 'lucide-react'
import { profile } from '../data/profile'
import Container from './Container'
import SectionHeading from './SectionHeading'

export default function About() {
  return (
    <section id="about" className="border-t border-zinc-100 py-20">
      <Container>
        <SectionHeading title="À propos" />
        <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
          <p className="text-lg leading-relaxed text-zinc-600">{profile.bio}</p>

          <div className="overflow-hidden rounded-xl border border-zinc-200 shadow-sm">
            <div className="border-b border-zinc-200 bg-slate-50 px-5 py-3">
              <h3 className="text-sm font-semibold text-navy">
                Ce sur quoi je travaille au quotidien
              </h3>
            </div>
            <ul className="grid gap-x-6 gap-y-2.5 bg-white p-5 sm:grid-cols-2">
              {profile.topSkills.map((skill) => (
                <li key={skill} className="flex items-center gap-2.5 text-sm text-zinc-700">
                  <Check size={15} className="shrink-0 text-primary" strokeWidth={3} />
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </section>
  )
}
