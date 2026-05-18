import { ArrowRight, CheckCircle2 } from 'lucide-react'

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(50,111,232,0.12),transparent_30%),radial-gradient(circle_at_80%_0%,rgba(23,32,51,0.08),transparent_25%)]" />
      <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-5 py-20 lg:grid-cols-[1.05fr_0.95fr] lg:py-28">
        <div>
          <div className="mb-5 inline-flex items-center rounded-full border border-line bg-panel px-4 py-2 text-sm font-medium text-muted">
            Public UX prototype · mock data only
          </div>
          <h1 className="max-w-4xl text-4xl font-bold tracking-tight text-ink sm:text-5xl lg:text-6xl">
            Turn invoice and payment data into clear AR visibility.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-muted">
            AR Tracker is a working concept for organizing invoice, payment, and remittance records into open invoice reports, Exceptions Reports, and CPA-ready summaries.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a href="#dashboard" className="focus-ring inline-flex items-center justify-center gap-2 rounded-full bg-brand-600 px-6 py-3 font-semibold text-white shadow-soft transition hover:bg-brand-700">
              View mock dashboard <ArrowRight size={18} />
            </a>
            <a href="#reports" className="focus-ring inline-flex items-center justify-center rounded-full border border-line bg-white px-6 py-3 font-semibold text-ink transition hover:bg-panel">
              See report package
            </a>
          </div>
          <div className="mt-8 grid max-w-2xl gap-3 text-sm text-muted sm:grid-cols-3">
            {['Open invoices', 'Unapplied payments', 'Exceptions review'].map((item) => (
              <div key={item} className="flex items-center gap-2">
                <CheckCircle2 className="text-brand-600" size={18} />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="rounded-[2rem] border border-line bg-white p-4 shadow-soft">
          <div className="rounded-[1.5rem] bg-ink p-5 text-white">
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <div>
                <p className="text-sm text-white/60">Monthly AR Snapshot</p>
                <p className="text-xl font-semibold">May 2026</p>
              </div>
              <span className="rounded-full bg-brand-500 px-3 py-1 text-xs font-semibold">Ready</span>
            </div>
            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              <Metric label="Open AR" value="$84,230" />
              <Metric label="Exceptions" value="12" />
              <Metric label="Past Due" value="$31,880" />
              <Metric label="CPA Packet" value="Ready" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function Metric({ label, value }) {
  return (
    <div className="rounded-2xl bg-white/8 p-4">
      <p className="text-sm text-white/60">{label}</p>
      <p className="mt-2 text-2xl font-bold">{value}</p>
    </div>
  )
}
