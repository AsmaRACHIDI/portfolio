import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { GithubIcon, LinkedinIcon } from './BrandIcons'
import { profile } from '../data/profile'

const links = [
  { href: '#about', label: 'À propos' },
  { href: '#experience', label: 'Expérience' },
  { href: '#skills', label: 'Compétences' },
  { href: '#projects', label: 'Projets' },
  { href: '#contact', label: 'Contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-navy">
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <a href="#top" className="font-bold text-white">
          Asma Rachidi
        </a>

        <div className="hidden items-center gap-7 md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-slate-300 hover:text-white"
            >
              {link.label}
            </a>
          ))}
          <span className="h-4 w-px bg-white/20" />
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="text-slate-300 hover:text-white"
          >
            <GithubIcon size={18} />
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="text-slate-300 hover:text-white"
          >
            <LinkedinIcon size={18} />
          </a>
        </div>

        <button
          className="text-white md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Ouvrir le menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-white/10 bg-navy md:hidden">
          <div className="flex flex-col px-6 py-3">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="py-2.5 text-slate-200 hover:text-white"
              >
                {link.label}
              </a>
            ))}
            <div className="mt-2 flex items-center gap-4 border-t border-white/10 py-3">
              <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub" className="text-slate-300">
                <GithubIcon size={20} />
              </a>
              <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="text-slate-300">
                <LinkedinIcon size={20} />
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
