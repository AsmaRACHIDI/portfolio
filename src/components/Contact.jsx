import { useState } from 'react'
import { Mail, Copy, Check } from 'lucide-react'
import { GithubIcon, LinkedinIcon } from './BrandIcons'
import { profile } from '../data/profile'
import Container from './Container'
import neuralBg from '../assets/neural-bg.svg'

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
    <section id="contact" className="relative overflow-hidden bg-navy py-20 text-white">
      <img
        src={neuralBg}
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 h-full w-full object-cover"
      />
      <Container className="relative">
        <div className="max-w-2xl">
          <h2 className="text-2xl font-bold sm:text-3xl">Contact</h2>
          <p className="mt-3 text-lg text-slate-300">
            Ouverte aux opportunités en Data Science, Machine Learning et NLP.
            N'hésitez pas à me contacter, je réponds rapidement.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href={gmailComposeUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-2.5 font-medium text-white hover:bg-primary-dark"
            >
              <Mail size={16} />
              Écrire un email
            </a>
            <button
              onClick={copyEmail}
              className="inline-flex items-center gap-2 rounded-lg border border-white/30 px-5 py-2.5 font-medium text-white hover:border-white/60"
            >
              {copied ? <Check size={16} className="text-emerald-400" /> : <Copy size={16} />}
              {copied ? 'Email copié !' : profile.email}
            </button>
          </div>

          <div className="mt-8 flex items-center gap-4">
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
