import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ExternalLink, Sparkles } from 'lucide-react'
import { GithubIcon } from './BrandIcons'
import { projectCategories } from '../data/projects'
import { profile } from '../data/profile'
import Container from './Container'
import SectionHeading from './SectionHeading'

const colorMap = {
  blue: { active: 'bg-blue-600', badge: 'bg-blue-50 text-blue-700' },
  violet: { active: 'bg-violet-600', badge: 'bg-violet-50 text-violet-700' },
  fuchsia: { active: 'bg-fuchsia-600', badge: 'bg-fuchsia-50 text-fuchsia-700' },
}

export default function Projects() {
  const [activeId, setActiveId] = useState(projectCategories[0].id)
  const activeCategory = projectCategories.find((c) => c.id === activeId)
  const c = colorMap[activeCategory.color]

  return (
    <section id="projects" className="py-24">
      <Container>
        <SectionHeading
          eyebrow="Projets"
          title="Projets par domaine"
          subtitle="Rangés par type de projet data science : exploration de données, machine learning et deep learning / IA générative."
        />

        <div className="mb-10 flex flex-wrap justify-center gap-3">
          {projectCategories.map((cat) => {
            const isActive = cat.id === activeId
            const cc = colorMap[cat.color]
            return (
              <button
                key={cat.id}
                onClick={() => setActiveId(cat.id)}
                className={`rounded-full px-5 py-2.5 text-sm font-semibold transition-all ${
                  isActive
                    ? `${cc.active} text-white shadow-md`
                    : 'bg-zinc-100 text-zinc-600 hover:bg-zinc-200'
                }`}
              >
                {cat.title}
              </button>
            )
          })}
        </div>

        <p className="mb-8 text-center text-sm font-medium uppercase tracking-wide text-zinc-400">
          {activeCategory.subtitle}
        </p>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeId}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.35 }}
            className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
          >
            {activeCategory.projects.map((project, i) => (
              <div
                key={project.title + i}
                className={`flex flex-col rounded-2xl p-6 ${
                  project.comingSoon
                    ? 'border-2 border-dashed border-zinc-200 bg-zinc-50/60'
                    : 'border border-zinc-100 bg-white shadow-sm hover:shadow-md'
                } transition-shadow`}
              >
                <div className="mb-3 flex items-center justify-between">
                  <span className={`rounded-full px-3 py-1 text-xs font-semibold ${c.badge}`}>
                    {project.tag}
                  </span>
                  {project.comingSoon && (
                    <span className="flex items-center gap-1 text-xs font-medium text-zinc-400">
                      <Sparkles size={12} /> Bientôt
                    </span>
                  )}
                </div>

                <h3 className={`text-lg font-bold ${project.comingSoon ? 'text-zinc-400' : 'text-zinc-900'}`}>
                  {project.title}
                </h3>
                <p className={`mt-2 flex-1 text-sm leading-relaxed ${project.comingSoon ? 'text-zinc-400' : 'text-zinc-600'}`}>
                  {project.description}
                </p>

                {project.stack?.length > 0 && (
                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.stack.map((s) => (
                      <span key={s} className="rounded-full bg-zinc-100 px-2.5 py-0.5 text-xs text-zinc-600">
                        {s}
                      </span>
                    ))}
                  </div>
                )}

                {!project.comingSoon && (project.github || project.demo) && (
                  <div className="mt-5 flex gap-4 border-t border-zinc-100 pt-4">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center gap-1.5 text-sm font-medium text-zinc-600 hover:text-violet-600"
                      >
                        <GithubIcon size={16} /> Code
                      </a>
                    )}
                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center gap-1.5 text-sm font-medium text-zinc-600 hover:text-violet-600"
                      >
                        <ExternalLink size={16} /> Démo
                      </a>
                    )}
                  </div>
                )}
              </div>
            ))}
          </motion.div>
        </AnimatePresence>

        <div className="mt-10 text-center">
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-zinc-300 px-6 py-3 text-sm font-semibold text-zinc-700 transition-colors hover:border-violet-300 hover:text-violet-700"
          >
            <GithubIcon size={18} />
            Voir tous mes projets sur GitHub
          </a>
        </div>
      </Container>
    </section>
  )
}
