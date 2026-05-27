import Dashboard from './components/Dashboard.jsx'
import './styles.css'

export default function App() {
  return (
    <main className="shell">
      <header className="topbar">
        <div className="brand">
          <div className="logo">IB</div>
          <div>
            <h1>InvoiceBuddy</h1>
            <p>AR Tracker public UX prototype</p>
          </div>
        </div>
        <nav className="nav" aria-label="Prototype sections">
          <span>Invoices</span><span>Payments</span><span>Exceptions</span><span>Reports</span>
        </nav>
      </header>

      <section className="hero">
        <div className="card hero-copy">
          <div className="eyebrow">Prototype ready for GitHub Pages</div>
          <h2>Receivables visibility for small B2B teams.</h2>
          <p>Track open invoices, incoming payments, remittance notes, payment exceptions, and CPA-ready reporting in one clean operating view.</p>
          <div className="actions">
            <button className="button primary">Review dashboard</button>
            <button className="button secondary">Export weekly report</button>
          </div>
        </div>
        <Dashboard />
      </section>

      <div className="section-title"><div><h2>Immediate small-scale workflow</h2><p>Designed to test the product idea before building the full platform.</p></div></div>
      <section className="grid-3">
        <article className="card feature"><span>①</span><h3>Import invoices</h3><p>Start with a simple CSV or spreadsheet export from the client’s accounting system.</p></article>
        <article className="card feature"><span>②</span><h3>Match payments</h3><p>Compare deposits and remittance notes against open invoices to flag clean matches.</p></article>
        <article className="card feature"><span>③</span><h3>Surface exceptions</h3><p>Highlight short pays, missing remittance, overdue balances, and items ready for CPA review.</p></article>
      </section>
    </main>
  )
}
