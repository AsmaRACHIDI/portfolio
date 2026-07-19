import { profile } from '../data/profile'
import Container from './Container'
import SectionHeading from './SectionHeading'

// Une couleur par domaine de compétence (voir topSkillGroups dans profile.js).
// Classes écrites en toutes lettres pour le scanner Tailwind.
const pillStyles = {
  blue: 'border-blue-200 bg-blue-50 text-blue-700',
  indigo: 'border-indigo-200 bg-indigo-50 text-indigo-700',
  sky: 'border-sky-200 bg-sky-50 text-sky-700',
  cyan: 'border-cyan-200 bg-cyan-50 text-cyan-700',
  teal: 'border-teal-200 bg-teal-50 text-teal-700',
}

const dotStyles = {
  blue: 'bg-blue-500',
  indigo: 'bg-indigo-500',
  sky: 'bg-sky-500',
  cyan: 'bg-cyan-500',
  teal: 'bg-teal-500',
}

export default function About() {
  return (
    <section id="about" className="border-t border-zinc-100 py-20">
      <Container>
        <SectionHeading title="À propos" />
        <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
          <p className="text-lg leading-relaxed text-zinc-600">{profile.bio}</p>

          <div>
            <p className="mb-4 text-sm font-semibold text-navy">
              Ce sur quoi je travaille au quotidien :
            </p>
            <div className="flex flex-wrap gap-2.5">
              {profile.topSkillGroups.flatMap((group) =>
                group.skills.map((skill) => (
                  <span
                    key={skill}
                    className={`rounded-full border px-4 py-1.5 text-sm font-medium transition-transform hover:-translate-y-0.5 ${pillStyles[group.color]}`}
                  >
                    {skill}
                  </span>
                ))
              )}
            </div>

            <div className="mt-5 flex flex-wrap gap-x-5 gap-y-1.5">
              {profile.topSkillGroups.map((group) => (
                <span key={group.name} className="flex items-center gap-1.5 text-xs text-zinc-500">
                  <span className={`h-2 w-2 rounded-full ${dotStyles[group.color]}`} />
                  {group.name}
                </span>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
