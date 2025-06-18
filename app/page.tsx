import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { ProductsSection } from "@/components/products-section"
import { DashboardDemo } from "@/components/dashboard-demo"
import { CompanyInfo } from "@/components/company-info"
import { TeamSection } from "@/components/team-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"
import { IndexSection } from "@/components/index-section"

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      <Header />
      <main>
        <IndexSection />
        <HeroSection />
        <ProductsSection />
        <DashboardDemo />
        <CompanyInfo />
        <TeamSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  )
}
