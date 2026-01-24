import { HeroSection } from "@/components/hero-section"
import { SignalsSection } from "@/components/signals-section"
import { WorkSection } from "@/components/work-section"
import { VideoSection } from "@/components/video-section"
import { PrinciplesSection } from "@/components/principles-section"
import { RevenueSection } from "@/components/revenue-section"
import { ColophonSection } from "@/components/colophon-section"
import { SideNav } from "@/components/side-nav"

export default function Page() {
  return (
    <main className="relative min-h-screen">
      <SideNav />
      <div className="grid-bg fixed inset-0 opacity-30" aria-hidden="true" />

      <div className="relative z-10">
        <HeroSection />
        <SignalsSection />
        <WorkSection />
        <VideoSection />
        <PrinciplesSection />
        <RevenueSection />
        <ColophonSection />
      </div>
    </main>
  )
}
