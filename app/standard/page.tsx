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
              Every piece that enters our collection undergoes a multi-stage technical vetting process. We don't just look at aesthetics; we analyze structural integrity and long-term investment potential.
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
            <h3 className="text-2xl font-luxury text-primary uppercase tracking-widest mb-8 pl-8">Evaluation Categories</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 pl-8">
              {[
                {
                  title: "I. Diamonds",
                  desc: "Every diamond is accompanied by IGI or GIA certification. I secondary-test every stone to ensure the physical stone matches its data report perfectly."
                },
                {
                  title: "II. Moissanite",
                  desc: "I personally verify the Refractive Index and Thermal Conductivity of every stone to ensure it meets our VVS1+ brilliance standard."
                },
                {
                  title: "III. Gemstones",
                  desc: "Precious Gems (Rubies, Sapphires, Emeralds) and fine colored stones are hand-selected for saturation and clarity. Every stone is tested for authenticity."
                },
                {
                  title: "IV. Precious Metals",
                  desc: "We inspect hallmarks and chemical composition of Solid Gold (10K-22K) and Silver. We perform a full integrity audit on every setting."
                }
              ].map((item, i) => (
                <div key={i} className="glass-panel p-6 rounded-2xl space-y-4 hover:border-primary/50 transition-colors">
                  <h4 className="text-lg font-luxury text-primary">{item.title}</h4>
                  <p className="text-white/60 text-sm leading-relaxed font-light">{item.desc}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="bg-white/5 rounded-[3rem] p-12 md:p-20 text-center border border-white/10">
            <ShieldCheck className="w-16 h-16 text-primary mx-auto mb-8 opacity-80" />
            <h3 className="text-4xl font-luxury mb-6">The Final Step: The Maison Himala COA</h3>
            <p className="text-white/70 max-w-3xl mx-auto text-lg font-light leading-relaxed mb-10">
              Only after a piece clears all of the above categories do I issue the Maison Himala In-House Certificate of Authenticity. Our standard is a technical certainty. Every acquisition is accompanied by a serialized physical card of authenticity—my personal signature guaranteeing its excellence.
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
