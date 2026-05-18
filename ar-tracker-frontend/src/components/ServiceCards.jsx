import { ClipboardCheck, FileCheck2, RefreshCw, ShieldCheck } from 'lucide-react'
import { serviceCards } from '../data/mockData.js'

const icons = [ClipboardCheck, FileCheck2, RefreshCw, ShieldCheck]

export default function ServiceCards() {
  return (
    <section id="services" className="mx-auto max-w-7xl px-5 py-20">
      <div className="max-w-3xl">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-600">Service concept</p>
        <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">Designed as a visibility layer, not a full accounting system.</h2>
        <p className="mt-4 text-lg leading-8 text-muted">
          The public UX focuses on how a client could understand the deliverables: what is open, what is matched, what is missing, and what needs review.
        </p>
      </div>
      <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
        {serviceCards.map((card, index) => {
          const Icon = icons[index]
          return (
            <article key={card.title} className="rounded-3xl border border-line bg-white p-6 shadow-soft transition hover:-translate-y-1 hover:shadow-lg">
              <div className="mb-5 grid h-12 w-12 place-items-center rounded-2xl bg-brand-50 text-brand-600">
                <Icon size={22} />
              </div>
              <h3 className="text-lg font-bold">{card.title}</h3>
              <p className="mt-3 leading-7 text-muted">{card.text}</p>
            </article>
          )
        })}
      </div>
    </section>
  )
}
