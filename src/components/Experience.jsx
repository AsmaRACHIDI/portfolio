import { motion } from 'framer-motion'
import { experiences } from '../data/experience'
import Container from './Container'
import SectionHeading from './SectionHeading'

export default function Experience() {
  return (
    <section id="experience" className="bg-zinc-50 py-24">
      <Container>
        <SectionHeading
          eyebrow="Parcours"
          title="Expérience professionnelle"
          subtitle="Des données publiques à la santé, en passant par le NLP appliqué."
        />

        <div className="relative mx-auto max-w-3xl">
          <div className="absolute left-5 top-2 h-[calc(100%-1rem)] w-px bg-gradient-to-b from-violet-400 via-indigo-300 to-pink-300 sm:left-6" />

          <div className="space-y-12">
            {experiences.map((exp, i) => (
              <motion.div
                key={exp.title + exp.period}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="relative pl-16 sm:pl-20"
              >
                <span className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center overflow-hidden rounded-full border border-zinc-100 bg-white p-1.5 shadow-md sm:h-12 sm:w-12">
                  <img src={exp.logo} alt={`Logo ${exp.company}`} className="h-full w-full object-contain" />
                </span>

                <div className="rounded-2xl border border-zinc-100 bg-white p-6 shadow-sm">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <h3 className="text-xl font-bold text-zinc-900">{exp.title}</h3>
                    <span className="rounded-full bg-violet-50 px-3 py-1 text-sm font-semibold text-violet-700">
                      {exp.period}
                    </span>
                  </div>
                  <p className="mt-1 font-medium text-zinc-600">{exp.company}</p>
                  {exp.subCompany && (
                    <p className="text-sm text-zinc-400">{exp.subCompany}</p>
                  )}

                  <ul className="mt-4 space-y-2">
                    {exp.points.map((point) => (
                      <li key={point} className="flex gap-2 text-sm leading-relaxed text-zinc-600">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-pink-400" />
                        {point}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {exp.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full bg-zinc-100 px-3 py-1 text-xs font-medium text-zinc-600"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}
