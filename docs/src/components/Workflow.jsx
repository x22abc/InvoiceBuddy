const steps = [
  ['1', 'Receive source data', 'Invoice, payment, and application/remittance records are gathered from approved client exports or templates.'],
  ['2', 'Review exceptions', 'Missing, duplicate, stale, short-paid, or unmatched records are separated for review instead of being treated as clean.'],
  ['3', 'Deliver report package', 'Clean views are summarized into owner, follow-up, and CPA-ready report outputs.'],
]

export default function Workflow() {
  return (
    <section id="workflow" className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-5">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-600">How it works</p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">Input → review → output.</h2>
          <p className="mt-4 text-lg leading-8 text-muted">
            The UX concept emphasizes clear data flow, not complicated accounting software.
          </p>
        </div>
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {steps.map(([number, title, text]) => (
            <div key={title} className="rounded-3xl border border-line bg-panel p-6">
              <span className="grid h-12 w-12 place-items-center rounded-2xl bg-ink text-lg font-bold text-white">{number}</span>
              <h3 className="mt-5 text-xl font-bold">{title}</h3>
              <p className="mt-3 leading-7 text-muted">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
