import { Mail, ArrowRight } from 'lucide-react'
import { GithubIcon, LinkedinIcon } from './BrandIcons'
import { profile } from '../data/profile'
import Container from './Container'
import neuralBg from '../assets/neural-bg.svg'

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-navy pb-24 pt-36 text-white">
      <img
        src={neuralBg}
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 h-full w-full object-cover"
      />
      <Container className="relative">
        <div className="max-w-3xl">
          <p className="mb-4 flex items-center gap-2 text-sm text-slate-300">
            <span className="h-2 w-2 rounded-full bg-emerald-400" />
            Disponible pour de nouvelles opportunités
          </p>

          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl">
            Asma Rachidi
          </h1>
          <p className="mt-3 text-xl font-medium text-sky-300">
            Data Scientist — Machine Learning & NLP
          </p>

          <p className="mt-6 text-lg leading-relaxed text-slate-300">
            J'analyse, structure et modélise des données complexes pour en extraire
            des insights à forte valeur ajoutée. 3 ans d'expérience en open data et en santé.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-2.5 font-medium text-white hover:bg-primary-dark"
            >
              Voir mes projets
              <ArrowRight size={16} />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-lg border border-white/30 px-5 py-2.5 font-medium text-white hover:border-white/60"
            >
              <Mail size={16} />
              Me contacter
            </a>
            <span className="mx-1 hidden h-5 w-px bg-white/20 sm:block" />
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="text-slate-300 hover:text-white"
            >
              <GithubIcon size={20} />
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="text-slate-300 hover:text-white"
            >
              <LinkedinIcon size={20} />
            </a>
          </div>
        </div>
      </Container>
    </section>
  )
}
