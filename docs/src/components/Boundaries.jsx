const doItems = [
  'Use mock/demo data only in the public repo',
  'Show clear service concepts and sample deliverables',
  'Keep UI simple, trustworthy, and businesslike',
  'Encourage frontend and UX contributions',
]

const avoidItems = [
  'No real client data',
  'No backend/API code',
  'No Excel-processing logic or private rules',
  'No login or upload features in this prototype',
]

export default function Boundaries() {
  return (
    <section className="mx-auto max-w-7xl px-5 py-20">
      <div className="grid gap-6 lg:grid-cols-2">
        <BoundaryCard title="Public frontend should include" items={doItems} />
        <BoundaryCard title="Keep private or out of scope" items={avoidItems} muted />
      </div>
    </section>
  )
}

function BoundaryCard({ title, items, muted = false }) {
  return (
    <div className={`rounded-3xl border border-line p-6 shadow-soft ${muted ? 'bg-ink text-white' : 'bg-white'}`}>
      <h2 className="text-2xl font-bold">{title}</h2>
      <ul className="mt-5 space-y-3">
        {items.map((item) => (
          <li key={item} className={`rounded-2xl p-4 ${muted ? 'bg-white/8 text-white/80' : 'bg-panel text-muted'}`}>
            {item}
          </li>
        ))}
      </ul>
    </div>
  )
}
