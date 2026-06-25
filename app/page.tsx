import { CTA } from "@/components/cta";
import { Discussions } from "@/components/forum";
import { Events } from "@/components/events";
import { Features } from "@/components/rustaceans";
import { Hero } from "@/components/hero";
import { Learn } from "@/components/materials";
import { Members } from "@/components/members";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { Stats } from "@/components/stats";


export default function Page() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />
      <main>
        <Hero />
        {/* <Stats /> */}
        <Features />
        <Discussions />
        <Events />
        <Learn />
        <Members />
        <CTA />
      </main>
      <SiteFooter />
    </div>
  )
}
