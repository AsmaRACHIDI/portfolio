import { motion } from 'framer-motion'
import { profile } from '../data/profile'
import Container from './Container'
import SectionHeading from './SectionHeading'

// Classes écrites en toutes lettres pour que le scanner Tailwind les détecte.
const badgeStyles = [
  'bg-violet-100 text-violet-700',
  'bg-fuchsia-100 text-fuchsia-700',
  'bg-indigo-100 text-indigo-700',
  'bg-pink-100 text-pink-700',
  'bg-blue-100 text-blue-700',
  'bg-purple-100 text-purple-700',
]

const sizeStyles = [
  'text-sm px-4 py-2',
  'text-base px-5 py-2.5 font-semibold',
  'text-sm px-4 py-2',
]

const verticalOffsets = ['translate-y-0', 'translate-y-3', '-translate-y-2', 'translate-y-1']

export default function About() {
  return (
    <section id="about" className="py-24">
      <Container>
        <SectionHeading
          eyebrow="À propos"
          title="Qui suis-je ?"
          subtitle="Data science, IA et données au service de décisions concrètes."
        />

        <div className="grid gap-12 lg:grid-cols-5 lg:items-center">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-3"
          >
            <p className="text-lg leading-relaxed text-zinc-600">{profile.bio}</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6 }}
            className="flex flex-wrap items-center justify-center gap-3 lg:col-span-2 lg:justify-start"
          >
            {profile.topSkills.map((skill, i) => (
              <span
                key={skill}
                className={`animate-float inline-block rounded-full font-medium shadow-sm ${verticalOffsets[i % verticalOffsets.length]} ${sizeStyles[i % sizeStyles.length]} ${badgeStyles[i % badgeStyles.length]}`}
                style={{
                  animationDelay: `${(i % 5) * 0.35}s`,
                  animationDuration: `${3.2 + (i % 3) * 0.5}s`,
                }}
              >
                {skill}
              </span>
            ))}
          </motion.div>
        </div>
      </Container>
    </section>
  )
}
