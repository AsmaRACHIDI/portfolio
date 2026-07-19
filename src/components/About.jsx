import { motion } from 'framer-motion'
import { profile } from '../data/profile'
import Container from './Container'
import SectionHeading from './SectionHeading'

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
            className="grid grid-cols-2 gap-4 lg:col-span-2"
          >
            {profile.stats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-2xl border border-zinc-100 bg-white p-5 text-center shadow-sm transition-shadow hover:shadow-md"
              >
                <div className="text-gradient text-2xl font-bold">{stat.value}</div>
                <div className="mt-1 text-sm text-zinc-500">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </Container>
    </section>
  )
}
