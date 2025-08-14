import Navigation from "@/components/navigation"
import Hero from "@/components/hero"
import QuickStats from "@/components/quick-stats"
import FeaturedProjects from "@/components/featured-projects"
import CallToAction from "@/components/call-to-action"

export default function HomePage() {
  return (
    <div className="min-h-screen pixel-grid">
      <Navigation />
      <main>
        <Hero />
        <QuickStats />
        <FeaturedProjects />
        <CallToAction />
      </main>
    </div>
  )
}
