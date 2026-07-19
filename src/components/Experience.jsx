import { experiences } from '../data/experience'
import Container from './Container'
import SectionHeading from './SectionHeading'

export default function Experience() {
  return (
    <section id="experience" className="border-t border-zinc-100 bg-slate-50 py-20">
      <Container>
        <SectionHeading title="Expérience professionnelle" />

        <div className="space-y-8">
          {experiences.map((exp) => (
            <div
              key={exp.title + exp.period}
              className="rounded-xl border border-zinc-200 bg-white p-6 sm:p-8"
            >
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div className="flex items-center gap-4">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center overflow-hidden rounded-lg border border-zinc-200 bg-white p-1.5">
                    <img src={exp.logo} alt={`Logo ${exp.company}`} className="h-full w-full object-contain" />
                  </span>
                  <div>
                    <h3 className="text-lg font-semibold text-zinc-900">{exp.title}</h3>
                    <p className="text-sm text-zinc-600">{exp.company}</p>
                    {exp.subCompany && <p className="text-sm text-zinc-400">{exp.subCompany}</p>}
                  </div>
                </div>
                <span className="text-sm font-medium text-zinc-500">{exp.period}</span>
              </div>

              <ul className="mt-5 space-y-2">
                {exp.points.map((point) => (
                  <li key={point} className="flex gap-2.5 text-sm leading-relaxed text-zinc-600">
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-zinc-400" />
                    {point}
                  </li>
                ))}
              </ul>

              <div className="mt-5 flex flex-wrap gap-2">
                {exp.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-md bg-zinc-100 px-2.5 py-1 text-xs font-medium text-zinc-600"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}
