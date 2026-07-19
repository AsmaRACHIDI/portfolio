import { motion } from 'framer-motion'
import { GraduationCap, Award } from 'lucide-react'
import { education, certifications } from '../data/education'
import Container from './Container'
import SectionHeading from './SectionHeading'

export default function Education() {
  return (
    <section id="education" className="py-24">
      <Container>
        <SectionHeading
          eyebrow="Formation"
          title="Diplômes & certifications"
        />

        <div className="grid gap-6 md:grid-cols-3">
          {education.map((edu, i) => (
            <motion.div
              key={edu.school + edu.period}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="flex flex-col rounded-2xl border border-zinc-100 bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
            >
              <span className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500 to-violet-600 text-white">
                <GraduationCap size={20} />
              </span>
              <span className="text-sm font-semibold text-violet-600">{edu.period}</span>
              <h3 className="mt-1 text-lg font-bold text-zinc-900">{edu.degree}</h3>
              <p className="mt-1 text-sm text-zinc-500">{edu.school}</p>
              {edu.details.length > 0 && (
                <ul className="mt-4 space-y-1.5">
                  {edu.details.map((d) => (
                    <li key={d} className="flex gap-2 text-sm text-zinc-600">
                      <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-violet-400" />
                      {d}
                    </li>
                  ))}
                </ul>
              )}
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="mt-8 flex flex-col items-center gap-4 rounded-2xl bg-gradient-to-r from-violet-50 via-indigo-50 to-pink-50 p-6 sm:flex-row sm:justify-center"
        >
          {certifications.map((cert) => (
            <div
              key={cert.code}
              className="flex items-center gap-3 rounded-xl bg-white px-5 py-3 shadow-sm"
            >
              <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-pink-500 to-violet-600 text-white">
                <Award size={16} />
              </span>
              <div className="text-left">
                <div className="text-sm font-bold text-zinc-900">{cert.code}</div>
                <div className="text-xs text-zinc-500">{cert.name} · {cert.year}</div>
              </div>
            </div>
          ))}
        </motion.div>
      </Container>
    </section>
  )
}
