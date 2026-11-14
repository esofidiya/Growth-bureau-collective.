import { Nav } from "@/components/layout/Nav";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/home/Hero";

export default function HomePage() {
  return (
    <>
      <Nav />
      <main id="main" className="flex-1">
        <Hero />
        {/* The remaining homepage sections from the brief go here. */}
      </main>
      <Footer />
    </>
  );
}
