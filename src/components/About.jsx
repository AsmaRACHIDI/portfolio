import { profile } from '../data/profile'
import Container from './Container'
import SectionHeading from './SectionHeading'

export default function About() {
  return (
    <section id="about" className="border-t border-zinc-100 py-20">
      <Container>
        <SectionHeading title="À propos" />
        <div className="grid gap-10 lg:grid-cols-2">
          <p className="text-lg leading-relaxed text-zinc-600">{profile.bio}</p>
          <div>
            <p className="mb-3 text-sm font-medium text-zinc-500">Ce sur quoi je travaille au quotidien :</p>
            <div className="flex flex-wrap gap-2">
              {profile.topSkills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-md border border-zinc-200 bg-zinc-50 px-3 py-1.5 text-sm text-zinc-700"
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
