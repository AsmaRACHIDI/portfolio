import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Copy, Check } from 'lucide-react'
import { GithubIcon, LinkedinIcon } from './BrandIcons'
import { profile } from '../data/profile'
import Container from './Container'

const gmailComposeUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${profile.email}&su=${encodeURIComponent(
  'Prise de contact depuis votre portfolio'
)}`

export default function Contact() {
  const [copied, setCopied] = useState(false)

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      // clipboard indisponible, l'utilisateur peut toujours cliquer sur "Écrire un email"
    }
  }

  return (
    <section id="contact" className="py-24">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-violet-600 via-indigo-600 to-pink-500 px-6 py-16 text-center shadow-xl sm:px-12"
        >
          <div className="pointer-events-none absolute -left-16 -top-16 h-64 w-64 rounded-full bg-white/10 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-20 -right-10 h-72 w-72 rounded-full bg-white/10 blur-3xl" />

          <h2 className="text-3xl font-bold text-white sm:text-4xl">Discutons de votre prochain projet data</h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-violet-100">
            Ouverte aux opportunités en Data Science, Machine Learning et NLP. N'hésitez pas à me contacter.
          </p>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <a
              href={gmailComposeUrl}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 rounded-full bg-white px-7 py-3 font-semibold text-violet-700 shadow-lg transition-transform hover:scale-105"
            >
              <Mail size={18} />
              Écrire un email
            </a>

            <button
              onClick={copyEmail}
              className="flex items-center gap-2 rounded-full border border-white/40 px-7 py-3 font-semibold text-white transition-colors hover:bg-white/10"
            >
              {copied ? <Check size={18} /> : <Copy size={18} />}
              {copied ? 'Email copié !' : profile.email}
            </button>
          </div>

          <div className="mt-8 flex items-center justify-center gap-6">
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="text-violet-100 transition-colors hover:text-white"
            >
              <GithubIcon size={24} />
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="text-violet-100 transition-colors hover:text-white"
            >
              <LinkedinIcon size={24} />
            </a>
          </div>
        </motion.div>
      </Container>
    </section>
  )
}
