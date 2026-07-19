import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Mail, ChevronDown } from 'lucide-react'
import { GithubIcon, LinkedinIcon } from './BrandIcons'
import { profile } from '../data/profile'
import Container from './Container'

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0)

  useEffect(() => {
    const id = setInterval(() => {
      setRoleIndex((i) => (i + 1) % profile.roles.length)
    }, 2400)
    return () => clearInterval(id)
  }, [])

  return (
    <section id="top" className="relative flex min-h-screen items-center overflow-hidden pt-24">
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -left-32 -top-24 h-96 w-96 animate-blob rounded-full bg-violet-300/50 blur-3xl" />
        <div className="absolute -right-24 top-32 h-96 w-96 animate-blob rounded-full bg-pink-300/50 blur-3xl [animation-delay:4s]" />
        <div className="absolute bottom-0 left-1/3 h-96 w-96 animate-blob rounded-full bg-indigo-300/50 blur-3xl [animation-delay:8s]" />
      </div>

      <Container className="flex flex-col items-center text-center">
        <motion.span
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-6 inline-flex items-center gap-2 rounded-full border border-violet-200 bg-white/70 px-4 py-1.5 text-sm font-medium text-violet-700 shadow-sm backdrop-blur"
        >
          <span className="h-2 w-2 rounded-full bg-emerald-500" />
          Disponible pour de nouvelles opportunités
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-5xl font-bold leading-tight text-zinc-900 sm:text-6xl lg:text-7xl"
        >
          Salut, je suis <span className="text-gradient">{profile.name}</span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-5 h-10 text-xl font-semibold text-zinc-600 sm:text-2xl"
        >
          Data Scientist ·{' '}
          <span key={roleIndex} className="inline-block animate-[fadeSlide_0.5s_ease]">
            {profile.roles[roleIndex]}
          </span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-4"
        >
          <a
            href="#projects"
            className="group flex items-center gap-2 rounded-full bg-gradient-to-r from-violet-600 to-pink-500 px-7 py-3 font-semibold text-white shadow-lg shadow-violet-300/50 transition-transform hover:scale-105"
          >
            Voir mes projets
            <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
          </a>
          <a
            href="#contact"
            className="flex items-center gap-2 rounded-full border border-zinc-300 bg-white px-7 py-3 font-semibold text-zinc-700 shadow-sm transition-colors hover:border-violet-300 hover:text-violet-700"
          >
            <Mail size={18} />
            Me contacter
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-8 flex items-center gap-5"
        >
          <a href={profile.github} target="_blank" rel="noreferrer" className="text-zinc-400 transition-colors hover:text-violet-600" aria-label="GitHub">
            <GithubIcon size={22} />
          </a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer" className="text-zinc-400 transition-colors hover:text-violet-600" aria-label="LinkedIn">
            <LinkedinIcon size={22} />
          </a>
        </motion.div>
      </Container>

      <motion.a
        href="#about"
        aria-label="Défiler vers le bas"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 1.8, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-zinc-400 hover:text-violet-600"
      >
        <ChevronDown size={28} />
      </motion.a>
    </section>
  )
}
