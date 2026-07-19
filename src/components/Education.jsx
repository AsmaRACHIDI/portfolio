import { Award } from 'lucide-react'
import { education, certifications } from '../data/education'
import Container from './Container'
import SectionHeading from './SectionHeading'

export default function Education() {
  return (
    <section id="education" className="border-t border-zinc-100 py-20">
      <Container>
        <SectionHeading title="Formation" />

        <div className="grid gap-5 md:grid-cols-3">
          {education.map((edu) => (
            <div
              key={edu.school + edu.period}
              className="rounded-xl border border-zinc-200 p-6"
            >
              <p className="text-sm font-medium text-violet-700">{edu.period}</p>
              <h3 className="mt-1.5 font-semibold text-zinc-900">{edu.degree}</h3>
              <p className="mt-1 text-sm text-zinc-500">{edu.school}</p>
              {edu.details.length > 0 && (
                <ul className="mt-4 space-y-1.5">
                  {edu.details.map((d) => (
                    <li key={d} className="flex gap-2 text-sm text-zinc-600">
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-zinc-400" />
                      {d}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>

        <div className="mt-6 flex flex-wrap gap-4">
          {certifications.map((cert) => (
            <div
              key={cert.code}
              className="flex items-center gap-3 rounded-xl border border-zinc-200 px-5 py-3"
            >
              <Award size={18} className="text-violet-700" />
              <div>
                <p className="text-sm font-semibold text-zinc-900">{cert.code}</p>
                <p className="text-xs text-zinc-500">{cert.name} · {cert.year}</p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}
