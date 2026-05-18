import { FileSpreadsheet } from 'lucide-react'

const links = [
  { href: '#services', label: 'Services' },
  { href: '#dashboard', label: 'Dashboard Preview' },
  { href: '#reports', label: 'Sample Reports' },
  { href: '#workflow', label: 'How It Works' },
]

export default function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-line bg-white/90 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4">
        <a href="#top" className="flex items-center gap-3 font-semibold tracking-tight">
          <span className="grid h-10 w-10 place-items-center rounded-2xl bg-brand-600 text-white shadow-soft">
            <FileSpreadsheet size={20} />
          </span>
          <span className="text-lg">AR Tracker</span>
        </a>
        <nav className="hidden items-center gap-7 text-sm font-medium text-muted md:flex">
          {links.map((link) => (
            <a key={link.href} href={link.href} className="transition hover:text-ink">
              {link.label}
            </a>
          ))}
        </nav>
        <a href="#contact" className="focus-ring rounded-full bg-ink px-4 py-2 text-sm font-semibold text-white transition hover:bg-brand-700">
          Request diagnostic
        </a>
      </div>
    </header>
  )
}
