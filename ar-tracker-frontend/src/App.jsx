import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import ServiceCards from './components/ServiceCards.jsx'
import MockDashboard from './components/MockDashboard.jsx'
import ReportPreview from './components/ReportPreview.jsx'
import Workflow from './components/Workflow.jsx'
import Boundaries from './components/Boundaries.jsx'
import ContactCTA from './components/ContactCTA.jsx'
import Footer from './components/Footer.jsx'

export default function App() {
  return (
    <div className="min-h-screen bg-panel text-ink">
      <Header />
      <main>
        <Hero />
        <ServiceCards />
        <MockDashboard />
        <ReportPreview />
        <Workflow />
        <Boundaries />
        <ContactCTA />
      </main>
      <Footer />
    </div>
  )
}
