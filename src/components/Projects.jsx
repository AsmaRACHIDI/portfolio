import { useState } from 'react'
import { ExternalLink, Sparkles } from 'lucide-react'
import { GithubIcon } from './BrandIcons'
import { projectCategories } from '../data/projects'
import { profile } from '../data/profile'
import Container from './Container'
import SectionHeading from './SectionHeading'

export default function Projects() {
  const [activeId, setActiveId] = useState(projectCategories[0].id)
  const activeCategory = projectCategories.find((c) => c.id === activeId)

  return (
    <section id="projects" className="border-t border-zinc-100 py-20">
      <Container>
        <SectionHeading
          title="Projets"
          subtitle="Rangés par type : exploration de données, machine learning, deep learning & IA générative."
        />

        <div className="mb-4 flex flex-wrap gap-2">
          {projectCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveId(cat.id)}
              className={`rounded-lg px-4 py-2 text-sm font-medium ${
                cat.id === activeId
                  ? 'bg-zinc-900 text-white'
                  : 'border border-zinc-200 text-zinc-600 hover:border-zinc-300'
              }`}
            >
              {cat.title}
            </button>
          ))}
        </div>

        <p className="mb-8 text-sm text-zinc-400">{activeCategory.subtitle}</p>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {activeCategory.projects.map((project, i) => (
            <div
              key={project.title + i}
              className={`flex flex-col rounded-xl p-6 ${
                project.comingSoon
                  ? 'border border-dashed border-zinc-300 bg-zinc-50/50'
                  : 'border border-zinc-200 bg-white'
              }`}
            >
              <div className="mb-3 flex items-center justify-between">
                <span className="rounded-md bg-violet-50 px-2.5 py-1 text-xs font-medium text-violet-700">
                  {project.tag}
                </span>
                {project.comingSoon && (
                  <span className="flex items-center gap-1 text-xs text-zinc-400">
                    <Sparkles size={12} /> Bientôt
                  </span>
                )}
              </div>

              <h3 className={`font-semibold ${project.comingSoon ? 'text-zinc-400' : 'text-zinc-900'}`}>
                {project.title}
              </h3>
              <p className={`mt-2 flex-1 text-sm leading-relaxed ${project.comingSoon ? 'text-zinc-400' : 'text-zinc-600'}`}>
                {project.description}
              </p>

              {project.stack?.length > 0 && (
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.stack.map((s) => (
                    <span key={s} className="rounded-md bg-zinc-100 px-2 py-0.5 text-xs text-zinc-600">
                      {s}
                    </span>
                  ))}
                </div>
              )}

              {!project.comingSoon && (project.github || project.demo) && (
                <div className="mt-4 flex gap-4 border-t border-zinc-100 pt-4">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-1.5 text-sm text-zinc-600 hover:text-zinc-900"
                    >
                      <GithubIcon size={15} /> Code
                    </a>
                  )}
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-1.5 text-sm text-zinc-600 hover:text-zinc-900"
                    >
                      <ExternalLink size={15} /> Démo
                    </a>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-8">
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 text-sm font-medium text-violet-700 hover:text-violet-900"
          >
            <GithubIcon size={16} />
            Voir tous mes projets sur GitHub →
          </a>
        </div>
      </Container>
    </section>
  )
}
