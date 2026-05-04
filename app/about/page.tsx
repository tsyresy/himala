import Image from "next/image";

export default function AboutPage() {
  return (
    <div className="bg-black min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gold-gradient opacity-10 blur-3xl" />
        <div className="container mx-auto px-8 relative z-10 text-center">
          <h1 className="text-6xl md:text-8xl font-luxury text-gold-gradient mb-6">Our Story</h1>
          <p className="text-xl text-white/60 max-w-2xl mx-auto font-light tracking-wide uppercase">
            A Living Legacy, Woven with You.
          </p>
        </div>
      </section>

      {/* The Story */}
      <section className="py-24 container mx-auto px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="space-y-8">
            <h2 className="text-4xl font-luxury text-primary">The Meaning of Himala</h2>
            <div className="space-y-6 text-lg text-white/70 font-light leading-relaxed">
              <p>
                Himala translates to <span className="text-primary italic">Miracle</span>. 
                I chose this name because it is my daughter’s middle name—a name given to celebrate the miracle of her life and the strength she showed from the moment she was born. Since she was a toddler, she has been captivated by the way light dances through a gemstone; that spark in her eyes is the heartbeat of this brand.
              </p>
              <p>
                Maison Himala isn’t just a legacy I hope to pass down; it is a journey I am taking with her right now. At almost six years old, she is already by my side, learning the brilliance of a cut and the spirit of entrepreneurship.
              </p>
              <p>
                As the founder, I treat every piece in the collection as a luxury asset. My curation process is rooted in technical precision—from verifying the refractive index of gemstones to inspecting the purity and structural integrity of every precious metal setting.
              </p>
            </div>
          </div>
          <div className="relative aspect-square rounded-2xl overflow-hidden glass-panel p-2">
             <div className="absolute inset-0 bg-gold-gradient opacity-20" />
             <div className="w-full h-full bg-black/40 backdrop-blur-md rounded-xl flex items-center justify-center p-12 text-center border border-white/10">
                <p className="text-3xl font-luxury italic text-primary">"When you choose a piece from this collection, you are supporting a father’s expertise and a daughter’s dream."</p>
             </div>
          </div>
        </div>
      </section>

      {/* Certification Standard */}
      <section className="py-24 bg-white/5 border-y border-white/5">
        <div className="container mx-auto px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-luxury text-gold-gradient mb-4">The Maison Himala Standard</h2>
            <p className="text-white/40 uppercase tracking-widest text-sm">Every piece is a curated luxury asset.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
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
              <div key={i} className="glass-panel p-8 space-y-6 hover:border-primary/50 transition-colors">
                <h3 className="text-xl font-luxury text-primary">{item.title}</h3>
                <p className="text-white/60 text-sm leading-relaxed font-light">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-20 glass-panel p-12 max-w-4xl mx-auto text-center border-primary/30">
            <h3 className="text-2xl font-luxury text-primary mb-6">The Final Step: The Maison Himala COA</h3>
            <p className="text-white/70 leading-relaxed max-w-2xl mx-auto font-light">
              Only after a piece clears all of the above categories do I issue the Maison Himala In-House Certificate of Authenticity. This serialized card is my personal signature—a guarantee that every gemstone and every gram of metal has been vetted, verified, and approved by the founder.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
