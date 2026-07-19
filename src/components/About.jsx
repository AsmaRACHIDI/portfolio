import { motion } from 'framer-motion'
import { Landmark, HeartPulse, BrainCircuit, Cloud } from 'lucide-react'
import { profile } from '../data/profile'
import Container from './Container'
import SectionHeading from './SectionHeading'

const iconMap = {
  Landmark,
  HeartPulse,
  BrainCircuit,
  Cloud,
}

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
            className="divide-y divide-zinc-100 overflow-hidden rounded-2xl border border-zinc-100 bg-white shadow-sm lg:col-span-2"
          >
            {profile.highlights.map((item) => {
              const Icon = iconMap[item.icon]
              return (
                <div key={item.title} className="flex items-center gap-4 p-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-violet-600 to-pink-500 text-white">
                    <Icon size={20} />
                  </span>
                  <div className="text-left">
                    <div className="font-semibold text-zinc-900">{item.title}</div>
                    <div className="text-sm text-zinc-500">{item.subtitle}</div>
                  </div>
                </div>
              )
            })}
          </motion.div>
        </div>
      </Container>
    </section>
  )
}
