import { AlertTriangle, CheckCircle2, Clock3, Download } from 'lucide-react'
import { dashboardStats, sampleExceptions } from '../data/mockData.js'

export default function MockDashboard() {
  return (
    <section id="dashboard" className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-5">
        <div className="mb-10 flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-600">Mock dashboard</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">A simple monthly command center.</h2>
            <p className="mt-4 max-w-2xl text-lg leading-8 text-muted">
              This is only a UI preview. It shows the kind of summary a future frontend might display using mock data.
            </p>
          </div>
          <button className="inline-flex items-center justify-center gap-2 rounded-full border border-line bg-panel px-5 py-3 font-semibold text-ink">
            <Download size={18} /> Download packet
          </button>
        </div>
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {dashboardStats.map((stat) => (
            <div key={stat.label} className="rounded-3xl border border-line bg-panel p-6">
              <p className="text-sm font-medium text-muted">{stat.label}</p>
              <p className="mt-2 text-3xl font-bold">{stat.value}</p>
              <p className="mt-2 text-sm text-muted">{stat.note}</p>
            </div>
          ))}
        </div>
        <div className="mt-8 grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="rounded-3xl border border-line bg-panel p-6">
            <h3 className="text-xl font-bold">Report status</h3>
            <div className="mt-6 space-y-4">
              <Status icon={CheckCircle2} label="Invoice data imported" note="Data current through May 31, 2026" />
              <Status icon={CheckCircle2} label="Payment data imported" note="Data current through May 29, 2026" />
              <Status icon={Clock3} label="Remittance review" note="4 payments missing remittance detail" />
              <Status icon={AlertTriangle} label="Follow-up hold" note="6 invoices require review before reminders" />
            </div>
          </div>
          <div className="rounded-3xl border border-line bg-white p-6 shadow-soft">
            <h3 className="text-xl font-bold">Exceptions preview</h3>
            <div className="mt-5 overflow-hidden rounded-2xl border border-line">
              <table className="w-full min-w-[680px] text-left text-sm">
                <thead className="bg-panel text-muted">
                  <tr>
                    <th className="px-4 py-3 font-semibold">ID</th>
                    <th className="px-4 py-3 font-semibold">Type</th>
                    <th className="px-4 py-3 font-semibold">Invoice</th>
                    <th className="px-4 py-3 font-semibold">Action</th>
                    <th className="px-4 py-3 font-semibold">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {sampleExceptions.map((row) => (
                    <tr key={row.id} className="border-t border-line">
                      <td className="px-4 py-3 font-medium">{row.id}</td>
                      <td className="px-4 py-3">{row.type}</td>
                      <td className="px-4 py-3">{row.invoice}</td>
                      <td className="px-4 py-3 text-muted">{row.action}</td>
                      <td className="px-4 py-3"><span className="rounded-full bg-brand-50 px-3 py-1 text-xs font-semibold text-brand-700">{row.status}</span></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function Status({ icon: Icon, label, note }) {
  return (
    <div className="flex gap-3 rounded-2xl bg-white p-4">
      <Icon className="mt-1 text-brand-600" size={20} />
      <div>
        <p className="font-semibold">{label}</p>
        <p className="text-sm text-muted">{note}</p>
      </div>
    </div>
  )
}
