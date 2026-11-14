import { Approach } from "@/components/home/Approach";
import { ConsultationCta } from "@/components/home/ConsultationCta";
import { FeaturedServices } from "@/components/home/FeaturedServices";
import { GrowthHubIntro } from "@/components/home/GrowthHubIntro";
import { Hero } from "@/components/home/Hero";
import { Philosophy } from "@/components/home/Philosophy";
import { PortfolioShowcase } from "@/components/home/PortfolioShowcase";
import { Process } from "@/components/home/Process";
import { Testimonials } from "@/components/home/Testimonials";
import { WhyGbc } from "@/components/home/WhyGbc";
import { Footer } from "@/components/layout/Footer";
import { Nav } from "@/components/layout/Nav";

export default function HomePage() {
  return (
    <>
      <Nav />
      <main id="main" className="flex-1">
        <Hero />
        <Philosophy />
        <Approach />
        <FeaturedServices />
        <WhyGbc />
        <Process />
        <PortfolioShowcase />
        <GrowthHubIntro />
        <Testimonials />
        <ConsultationCta />
      </main>
      <Footer />
    </>
  );
}
