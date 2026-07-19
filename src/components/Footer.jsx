import { Mail } from 'lucide-react'
import { GithubIcon, LinkedinIcon } from './BrandIcons'
import { profile } from '../data/profile'
import Container from './Container'

export default function Footer() {
  return (
    <footer className="border-t border-zinc-100 py-8">
      <Container className="flex flex-col items-center justify-between gap-4 sm:flex-row">
        <p className="text-sm text-zinc-500">
          © {new Date().getFullYear()} {profile.name}
        </p>
        <div className="flex items-center gap-4">
          <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub" className="text-zinc-400 hover:text-zinc-700">
            <GithubIcon size={17} />
          </a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="text-zinc-400 hover:text-zinc-700">
            <LinkedinIcon size={17} />
          </a>
          <a href={`mailto:${profile.email}`} aria-label="Email" className="text-zinc-400 hover:text-zinc-700">
            <Mail size={17} />
          </a>
        </div>
      </Container>
    </footer>
  )
}
