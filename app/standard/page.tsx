import { Award, CheckCircle, Search, ShieldCheck } from "lucide-react";

export default function StandardPage() {
  return (
    <main className="min-h-screen bg-black text-white pt-32 pb-24 px-6 md:px-12">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-20">
          <h1 className="text-5xl md:text-7xl font-luxury font-bold text-gold-gradient mb-6">
            The Standard
          </h1>
          <p className="text-xl text-white/60 font-light max-w-2xl mx-auto">
            Defining the benchmark for curated excellence and technical precision in luxury assets.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-24">
          <div className="glass-panel p-10 rounded-3xl border border-primary/20 flex flex-col gap-6">
            <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center border border-primary/30">
              <Search className="w-7 h-7 text-primary" />
            </div>
            <h2 className="text-3xl font-luxury text-white">Rigorous Vetting</h2>
            <p className="text-white/60 font-light leading-relaxed">
              Every piece that enters our collection undergoes a multi-stage technical vetting process. We don't just look at aesthetics; we analyze molecular structure, provenance, and long-term investment potential.
            </p>
          </div>

          <div className="glass-panel p-10 rounded-3xl border border-primary/20 flex flex-col gap-6">
            <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center border border-primary/30">
              <Award className="w-7 h-7 text-primary" />
            </div>
            <h2 className="text-3xl font-luxury text-white">Curated Selection</h2>
            <p className="text-white/60 font-light leading-relaxed">
              As top curators, we reject 98% of the pieces we evaluate. Only the absolute pinnacle of craftsmanship and material quality earns the Maison Himala seal.
            </p>
          </div>
        </div>

        <div className="space-y-16">
          <section className="relative">
            <div className="absolute -left-4 top-0 w-1 h-full bg-gold-gradient opacity-20" />
            <h3 className="text-2xl font-luxury text-primary uppercase tracking-widest mb-8 pl-8">Technical Pillars</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pl-8">
              <div className="space-y-4">
                <CheckCircle className="w-5 h-5 text-primary" />
                <h4 className="text-lg font-bold">Provenance</h4>
                <p className="text-sm text-white/50 font-light">Complete traceability from origin to artisan, ensuring ethical and historical integrity.</p>
              </div>
              <div className="space-y-4">
                <CheckCircle className="w-5 h-5 text-primary" />
                <h4 className="text-lg font-bold">Material Purity</h4>
                <p className="text-sm text-white/50 font-light">Laboratory-grade verification of all gemstones and precious metals used in our pieces.</p>
              </div>
              <div className="space-y-4">
                <CheckCircle className="w-5 h-5 text-primary" />
                <h4 className="text-lg font-bold">Investment Value</h4>
                <p className="text-sm text-white/50 font-light">Analysis of market trends and rarity to ensure each piece remains a viable luxury asset.</p>
              </div>
            </div>
          </section>

          <section className="bg-white/5 rounded-[3rem] p-12 md:p-20 text-center border border-white/10">
            <ShieldCheck className="w-16 h-16 text-primary mx-auto mb-8 opacity-80" />
            <h3 className="text-4xl font-luxury mb-6">Guaranteed Authenticity</h3>
            <p className="text-white/70 max-w-3xl mx-auto text-lg font-light leading-relaxed mb-10">
              Our standard is not just a promise; it is a technical certainty. Every acquisition is accompanied by a comprehensive digital and physical certification file.
            </p>
            <div className="inline-block px-8 py-3 rounded-full border border-primary/50 text-primary font-bold tracking-widest text-sm uppercase">
              Maison Himala Certified
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
