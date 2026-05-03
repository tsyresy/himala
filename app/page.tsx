import TopNavigation from "@/components/TopNavigation";
import { Hero } from "@/components/Hero";
import ScrollyTelling from "@/components/ScrollyTelling";
import SignaturePieces from "@/components/SignaturePieces";
import Testimonials from "@/components/Testimonials";
import { TestimonialsColumn } from "@/components/TestimonialsColumn";

export default function Home() {
  return (
    <main className="bg-black min-h-screen selection:bg-white/20">
      <TopNavigation />
      <Hero />
      <ScrollyTelling />
      <SignaturePieces />
      <Testimonials />
      <TestimonialsColumn />
    </main>
  );
}
