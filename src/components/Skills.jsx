import { motion } from 'framer-motion'
import { skillCategories } from '../data/skills'
import Container from './Container'
import SectionHeading from './SectionHeading'

// Classes Tailwind écrites en toutes lettres pour que le scanner JIT les détecte
// (les noms construits dynamiquement à partir des données ne seraient pas générés).
const colorMap = {
  violet: { bg: 'bg-violet-50', text: 'text-violet-700', dot: 'bg-violet-500', border: 'border-violet-100' },
  fuchsia: { bg: 'bg-fuchsia-50', text: 'text-fuchsia-700', dot: 'bg-fuchsia-500', border: 'border-fuchsia-100' },
  pink: { bg: 'bg-pink-50', text: 'text-pink-700', dot: 'bg-pink-500', border: 'border-pink-100' },
  indigo: { bg: 'bg-indigo-50', text: 'text-indigo-700', dot: 'bg-indigo-500', border: 'border-indigo-100' },
  blue: { bg: 'bg-blue-50', text: 'text-blue-700', dot: 'bg-blue-500', border: 'border-blue-100' },
  purple: { bg: 'bg-purple-50', text: 'text-purple-700', dot: 'bg-purple-500', border: 'border-purple-100' },
  rose: { bg: 'bg-rose-50', text: 'text-rose-700', dot: 'bg-rose-500', border: 'border-rose-100' },
}

export default function Skills() {
  return (
    <section id="skills" className="bg-zinc-50 py-24">
      <Container>
        <SectionHeading
          eyebrow="Compétences"
          title="Ma boîte à outils"
          subtitle="Du nettoyage de données au déploiement de modèles, en passant par le NLP et l'IA générative."
        />

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((cat, i) => {
            const c = colorMap[cat.color]
            return (
              <motion.div
                key={cat.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: (i % 3) * 0.1 }}
                className={`rounded-2xl border ${c.border} bg-white p-6 shadow-sm transition-shadow hover:shadow-md`}
              >
                <div className="mb-4 flex items-center gap-2">
                  <span className={`h-2.5 w-2.5 rounded-full ${c.dot}`} />
                  <h3 className="font-bold text-zinc-900">{cat.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill) => (
                    <span
                      key={skill}
                      className={`rounded-full ${c.bg} ${c.text} px-3 py-1 text-xs font-medium`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            )
          })}
        </div>
      </Container>
    </section>
  )
}
