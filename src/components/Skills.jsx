import { skillCategories } from '../data/skills'
import Container from './Container'
import SectionHeading from './SectionHeading'

export default function Skills() {
  return (
    <section id="skills" className="border-t border-zinc-100 bg-zinc-50/50 py-20">
      <Container>
        <SectionHeading
          title="Compétences"
          subtitle="Du nettoyage de données au déploiement de modèles, en passant par le NLP et l'IA générative."
        />

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((cat) => (
            <div key={cat.title} className="rounded-xl border border-zinc-200 bg-white p-6">
              <h3 className="mb-4 font-semibold text-zinc-900">{cat.title}</h3>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-md bg-zinc-100 px-2.5 py-1 text-xs text-zinc-600"
                  >
                    {skill}
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
