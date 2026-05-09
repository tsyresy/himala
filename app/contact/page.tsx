import { Mail, MapPin, Phone, Send } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="bg-black min-h-screen">
      <section className="py-24 container mx-auto px-8">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-20">
            <h1 className="text-6xl font-luxury text-gold-gradient mb-6">Contact Us</h1>
            <p className="text-white/50 uppercase tracking-[0.3em] text-sm font-light">Get in touch for bespoke inquiries and luxury curation.</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Info */}
            <div className="space-y-12">
              <div className="space-y-8">
                <h2 className="text-3xl font-luxury text-primary">Reach Out</h2>
                <p className="text-white/60 font-light leading-relaxed">
                  Whether you are looking for a specific high-investment asset or have questions about our vetting process, we are here to assist you.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start gap-6 group">
                  <div className="w-12 h-12 rounded-full glass-panel flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-black transition-all">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-white font-medium mb-1">Our Maison</h4>
                    <p className="text-white/50 text-sm font-light leading-relaxed">
                      13345 115 Ave Surrey<br />
                      British Columbia, Canada<br />
                      V3R 0R8
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-6 group">
                  <div className="w-12 h-12 rounded-full glass-panel flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-black transition-all">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-white font-medium mb-1">Email Us</h4>
                    <p className="text-white/50 text-sm font-light">maisonhimala@gmail.com</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Simple Contact Form */}
            <div className="glass-panel p-10 border-white/5 relative overflow-hidden">
              <div className="absolute inset-0 bg-gold-gradient opacity-5" />
              <form className="space-y-6 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs uppercase tracking-widest text-white/40 font-semibold">Name</label>
                    <input type="text" className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors font-light" placeholder="Your Name" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs uppercase tracking-widest text-white/40 font-semibold">Email</label>
                    <input type="email" className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors font-light" placeholder="your@email.com" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest text-white/40 font-semibold">Subject</label>
                  <input type="text" className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors font-light" placeholder="Bespoke Inquiry" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest text-white/40 font-semibold">Message</label>
                  <textarea rows={5} className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors font-light resize-none" placeholder="How can we help you?" />
                </div>
                <button className="w-full bg-gold-gradient text-black py-4 rounded-lg font-bold uppercase tracking-widest hover:opacity-90 transition-opacity flex items-center justify-center gap-2">
                  Send Message
                  <Send className="w-4 h-4" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
