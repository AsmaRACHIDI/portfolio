export default function SectionHeading({ title, subtitle }) {
  return (
    <div className="mb-12">
      <h2 className="text-2xl font-bold text-zinc-900 sm:text-3xl">{title}</h2>
      {subtitle && <p className="mt-2 max-w-2xl text-zinc-500">{subtitle}</p>}
    </div>
  )
}
