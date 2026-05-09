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

      {/* Founder Section */}
      <section className="py-24 bg-white/5 border-y border-white/5">
        <div className="container mx-auto px-8 max-w-5xl">
          <div className="flex flex-col md:flex-row items-center gap-16">
            <div className="w-full md:w-1/2">
              <div className="relative aspect-[3/4] w-full max-w-md mx-auto rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
                <Image
                  src="/animated/maxime.png"
                  alt="Maxime Boulanger, CEO & Founder"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <div className="w-full md:w-1/2 space-y-6">
              <h2 className="text-4xl font-luxury text-gold-gradient">Maxime Boulanger</h2>
              <p className="text-primary uppercase tracking-widest text-sm font-bold">CEO & Founder, Maison Himala</p>
              <div className="space-y-4 text-white/70 font-light leading-relaxed">
                <p>
                  As an entrepreneur with a deep-rooted passion for fine craftsmanship, I built Maison Himala to redefine how luxury jewelry is curated and presented to the world.
                </p>
                <p>
                  My vision was never simply to offer jewelry, but to provide thoroughly vetted, premium wearable assets. I personally oversee our strict quality control and technical verification processes, ensuring that every piece that carries the Maison Himala name meets an uncompromising standard of excellence.
                </p>
                <p>
                  For me, transparency and authenticity are the true hallmarks of luxury, and this commitment is at the core of everything we do.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
