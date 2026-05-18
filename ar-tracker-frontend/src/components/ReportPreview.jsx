import { reportPackage } from '../data/mockData.js'

export default function ReportPreview() {
  return (
    <section id="reports" className="mx-auto max-w-7xl px-5 py-20">
      <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-600">Sample report package</p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">One output package, multiple useful views.</h2>
          <p className="mt-4 text-lg leading-8 text-muted">
            A future report run could create a dated folder with owner-facing, bookkeeper-facing, and CPA-ready views. This public frontend only previews the UX and names of those outputs.
          </p>
        </div>
        <div className="rounded-3xl border border-line bg-white p-6 shadow-soft">
          <div className="rounded-2xl bg-panel p-4 font-mono text-sm text-muted">
            2026-05-31_Monthly_AR_Report_ClientName
          </div>
          <div className="mt-5 grid gap-3 sm:grid-cols-2">
            {reportPackage.map((item, index) => (
              <div key={item} className="flex items-center gap-3 rounded-2xl border border-line p-4">
                <span className="grid h-8 w-8 place-items-center rounded-xl bg-brand-50 text-sm font-bold text-brand-700">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <span className="font-medium">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
