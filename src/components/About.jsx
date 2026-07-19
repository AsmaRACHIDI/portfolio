import { profile } from '../data/profile'
import Container from './Container'
import SectionHeading from './SectionHeading'

// Déclinaisons de tons froids assorties à la palette marine/bleu du site.
// Classes écrites en toutes lettres pour le scanner Tailwind.
const pillStyles = [
  'border-blue-200 bg-blue-50 text-blue-700',
  'border-sky-200 bg-sky-50 text-sky-700',
  'border-indigo-200 bg-indigo-50 text-indigo-700',
  'border-cyan-200 bg-cyan-50 text-cyan-700',
  'border-teal-200 bg-teal-50 text-teal-700',
]

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
              {profile.topSkills.map((skill, i) => (
                <span
                  key={skill}
                  className={`rounded-full border px-4 py-1.5 text-sm font-medium transition-transform hover:-translate-y-0.5 ${pillStyles[i % pillStyles.length]}`}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
