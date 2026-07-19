import { ArrowDown } from 'lucide-react'
import { profile } from '../data/profile'
import Container from './Container'
import SectionHeading from './SectionHeading'

// Couleur du texte par groupe et taille par importance.
// Classes écrites en toutes lettres pour le scanner Tailwind.
const textStyles = {
  blue: 'text-blue-600',
  indigo: 'text-indigo-600',
  sky: 'text-sky-600',
  cyan: 'text-cyan-600',
  teal: 'text-teal-600',
}

const dotStyles = {
  blue: 'bg-blue-500',
  indigo: 'bg-indigo-500',
  sky: 'bg-sky-500',
  cyan: 'bg-cyan-500',
  teal: 'bg-teal-500',
}

const sizeStyles = {
  3: 'text-3xl font-bold',
  2: 'text-xl font-semibold',
  1: 'text-sm font-medium',
}

export default function About() {
  const { groups, rows } = profile.skillCloud
  const colorOf = (groupId) => groups.find((g) => g.id === groupId).color
  let wordIndex = 0

  return (
    <section id="about" className="border-t border-zinc-100 py-20">
      <Container>
        <SectionHeading title="À propos de moi" />
        <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
          <p className="text-lg leading-relaxed text-zinc-600">{profile.bio}</p>

          <div className="text-center">
            <div className="mx-auto max-w-xl">
              {rows.map((row, r) => (
                <div key={r} className="flex flex-wrap items-baseline justify-center gap-x-4">
                  {row.map((word) => {
                    const i = wordIndex++
                    return (
                      <span
                        key={word.label}
                        className={`inline-block ${sizeStyles[word.size]} ${textStyles[colorOf(word.group)]} ${
                          word.size === 1 ? (i % 2 === 0 ? '-rotate-3' : 'rotate-3') : ''
                        } transition-opacity hover:opacity-60`}
                      >
                        {word.label}
                      </span>
                    )
                  })}
                </div>
              ))}
            </div>

            <div className="mt-6 flex flex-wrap justify-center gap-x-5 gap-y-1.5">
              {groups.map((group) => (
                <span key={group.id} className="flex items-center gap-1.5 text-xs text-zinc-500">
                  <span className={`h-2 w-2 rounded-full ${dotStyles[group.color]}`} />
                  {group.name}
                </span>
              ))}
            </div>

            <a
              href="#skills"
              className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:text-primary-dark"
            >
              Voir toutes mes compétences
              <ArrowDown size={15} />
            </a>
          </div>
        </div>
      </Container>
    </section>
  )
}
