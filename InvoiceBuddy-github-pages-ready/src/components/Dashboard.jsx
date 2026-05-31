import { invoices } from '../data/invoices.js'

const statusClass = {
  Paid: 'status paid',
  Review: 'status review',
  Pending: 'status'
}

export default function Dashboard() {
  return (
    <aside className="card dashboard" aria-label="AR dashboard preview">
      <div className="dash-header">
        <strong>Today’s AR snapshot</strong>
        <span className="pill">Live UX mock</span>
      </div>
      <div className="metrics">
        <div className="metric"><span>Open AR</span><b>$42.8k</b></div>
        <div className="metric"><span>Overdue</span><b>$8.4k</b></div>
        <div className="metric"><span>Matched today</span><b>18</b></div>
        <div className="metric"><span>Needs review</span><b>5</b></div>
      </div>
      <div className="invoice-list">
        {invoices.map((invoice) => (
          <div className="invoice" key={invoice.customer}>
            <div>
              <h3>{invoice.customer}</h3>
              <p>{invoice.note} · {invoice.amount}</p>
            </div>
            <span className={statusClass[invoice.status]}>{invoice.status}</span>
          </div>
        ))}
      </div>
    </aside>
  )
}
