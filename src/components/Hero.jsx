import { Mail, ArrowRight } from 'lucide-react'
import { GithubIcon, LinkedinIcon } from './BrandIcons'
import { profile } from '../data/profile'
import Container from './Container'

export default function Hero() {
  return (
    <section id="top" className="pb-20 pt-36">
      <Container>
        <div className="max-w-3xl">
          <p className="mb-4 flex items-center gap-2 text-sm text-zinc-500">
            <span className="h-2 w-2 rounded-full bg-emerald-500" />
            Disponible pour de nouvelles opportunités
          </p>

          <h1 className="text-4xl font-extrabold tracking-tight text-zinc-900 sm:text-5xl">
            Asma Rachidi
          </h1>
          <p className="mt-3 text-xl font-medium text-violet-700">
            Data Scientist — Machine Learning & NLP
          </p>

          <p className="mt-6 text-lg leading-relaxed text-zinc-600">
            J'analyse, structure et modélise des données complexes pour en extraire
            des insights à forte valeur ajoutée. 3 ans d'expérience en open data et en santé.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-lg bg-violet-700 px-5 py-2.5 font-medium text-white hover:bg-violet-800"
            >
              Voir mes projets
              <ArrowRight size={16} />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-lg border border-zinc-300 px-5 py-2.5 font-medium text-zinc-700 hover:border-zinc-400"
            >
              <Mail size={16} />
              Me contacter
            </a>
            <span className="mx-1 hidden h-5 w-px bg-zinc-200 sm:block" />
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="text-zinc-500 hover:text-zinc-900"
            >
              <GithubIcon size={20} />
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="text-zinc-500 hover:text-zinc-900"
            >
              <LinkedinIcon size={20} />
            </a>
          </div>
        </div>
      </Container>
    </section>
  )
}
