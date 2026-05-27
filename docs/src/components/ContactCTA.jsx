export default function ContactCTA() {
  return (
    <section id="contact" className="bg-brand-600 px-5 py-20 text-white">
      <div className="mx-auto max-w-4xl text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-white/70">Next step</p>
        <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-5xl">Request an AR Diagnostic.</h2>
        <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-white/80">
          This button is a placeholder for the UX prototype. In the first public website, it can link to email, a form service, or a scheduling page.
        </p>
        <a href="mailto:hello@example.com?subject=AR%20Diagnostic%20Request" className="mt-8 inline-flex rounded-full bg-white px-7 py-3 font-bold text-brand-700 transition hover:bg-brand-50">
          Contact placeholder
        </a>
      </div>
    </section>
  )
}
