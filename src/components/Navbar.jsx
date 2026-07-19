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
    <header className="fixed inset-x-0 top-0 z-50 border-b border-zinc-100 bg-white/95 backdrop-blur">
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <a href="#top" className="font-bold text-zinc-900">
          Asma Rachidi
        </a>

        <div className="hidden items-center gap-7 md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-zinc-600 hover:text-zinc-900"
            >
              {link.label}
            </a>
          ))}
          <span className="h-4 w-px bg-zinc-200" />
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="text-zinc-500 hover:text-zinc-900"
          >
            <GithubIcon size={18} />
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="text-zinc-500 hover:text-zinc-900"
          >
            <LinkedinIcon size={18} />
          </a>
        </div>

        <button
          className="text-zinc-700 md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Ouvrir le menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-zinc-100 bg-white md:hidden">
          <div className="flex flex-col px-6 py-3">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="py-2.5 text-zinc-700 hover:text-zinc-900"
              >
                {link.label}
              </a>
            ))}
            <div className="mt-2 flex items-center gap-4 border-t border-zinc-100 py-3">
              <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub" className="text-zinc-500">
                <GithubIcon size={20} />
              </a>
              <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="text-zinc-500">
                <LinkedinIcon size={20} />
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
