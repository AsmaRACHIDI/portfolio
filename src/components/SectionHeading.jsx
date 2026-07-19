import { motion } from 'framer-motion'

export default function SectionHeading({ eyebrow, title, subtitle, align = 'center' }) {
  const alignment = align === 'center' ? 'items-center text-center' : 'items-start text-left'

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`flex flex-col ${alignment} mb-14`}
    >
      {eyebrow && (
        <span className="mb-3 inline-block rounded-full bg-violet-100 px-4 py-1 text-sm font-semibold tracking-wide text-violet-700">
          {eyebrow}
        </span>
      )}
      <h2 className="text-3xl font-bold text-zinc-900 sm:text-4xl">{title}</h2>
      {subtitle && (
        <p className="mt-4 max-w-2xl text-lg text-zinc-500">{subtitle}</p>
      )}
    </motion.div>
  )
}
