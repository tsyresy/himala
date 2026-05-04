import Link from "next/link";
import Image from "next/image";
import { Mail, MapPin, Phone } from "lucide-react";

const XIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" />
  </svg>
);

const InstagramIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

const LinkedinIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect width="4" height="12" x="2" y="9" /><circle cx="4" cy="4" r="2" />
  </svg>
);

export default function Footer() {
  return (
    <div className="bg-black pt-20 px-4">
      <footer className="bg-[#0a0a0a] w-full max-w-container mx-auto text-white pt-12 lg:pt-20 px-4 sm:px-8 md:px-16 lg:px-28 rounded-tl-[3rem] rounded-tr-[3rem] overflow-hidden border-t border-white/5 relative">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-6 gap-12 md:gap-16 relative z-10">

          <div className="lg:col-span-3 space-y-8">
            <Link href="/" className="block">
              <Image
                src="/animated/logo.png"
                alt="Maison Himala Logo"
                width={180}
                height={60}
                className="object-contain brightness-110"
              />
            </Link>
            <p className="text-base/relaxed text-white/50 max-w-md font-light tracking-wide">
              Maison Himala is a curator of fine jewelry and luxury assets, dedicated to the "Miracle of Light". Every piece is technically vetted and verified to meet our uncompromising standards.
            </p>
            <div className="flex gap-6">
              <a href="#" className="text-white/40 hover:text-primary transition-colors">
                <XIcon />
              </a>
              <a href="#" className="text-white/40 hover:text-primary transition-colors">
                <InstagramIcon />
              </a>
              <a href="#" className="text-white/40 hover:text-primary transition-colors">
                <LinkedinIcon />
              </a>
            </div>
          </div>

          <div className="lg:col-span-3 grid grid-cols-2 md:grid-cols-3 gap-12 items-start">
            {/* Curation */}
            <div>
              <h3 className="font-semibold text-sm mb-6 uppercase tracking-widest text-primary">Curation</h3>
              <ul className="space-y-4 text-sm text-white/50">
                <li><Link href="/blog" className="hover:text-white transition-colors">The Blog</Link></li>
                <li><Link href="/certification" className="hover:text-white transition-colors">Certification</Link></li>
                <li><Link href="/vetting" className="hover:text-white transition-colors">Technical Vetting</Link></li>
              </ul>
            </div>

            {/* Legacy */}
            <div>
              <h3 className="font-semibold text-sm mb-6 uppercase tracking-widest text-primary">Legacy</h3>
              <ul className="space-y-4 text-sm text-white/50">
                <li><Link href="/about" className="hover:text-white transition-colors">Our Story</Link></li>
                <li><Link href="/standard" className="hover:text-white transition-colors">The Standard</Link></li>
                <li><Link href="/craft" className="hover:text-white transition-colors">Craftsmanship</Link></li>
              </ul>
            </div>

            {/* Company */}
            <div className="col-span-2 md:col-span-1">
              <h3 className="font-semibold text-sm mb-6 uppercase tracking-widest text-primary">Company</h3>
              <ul className="space-y-4 text-sm text-white/50">
                <li><Link href="/contact" className="hover:text-white transition-colors">Contact Us</Link></li>
                <li><Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                  <span className="text-[11px] font-bold tracking-tighter text-primary uppercase">Bespoke Orders Open</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 relative z-10 pb-12">
          <p className="text-white/30 text-xs tracking-widest uppercase">© 2026 MAISON HIMALA. ALL RIGHTS RESERVED.</p>
          <p className='text-xs text-white/30 tracking-widest uppercase italic'>Curated Excellence, Technical Precision.</p>
        </div>

        {/* Decorative Background Elements */}
        <div className="absolute inset-x-0 bottom-0 mx-auto w-full max-w-4xl h-64 bg-primary/10 rounded-full blur-[120px] pointer-events-none translate-y-32" />

        <div className="relative mt-8 select-none pointer-events-none overflow-hidden">
          <h3 className="text-center font-extrabold leading-none text-transparent text-[clamp(4rem,18vw,18rem)] opacity-10 uppercase tracking-tighter" style={{ WebkitTextStroke: '1px rgba(212, 175, 55, 0.3)' }}>
            HIMALA
          </h3>
        </div>
      </footer>
    </div>
  );
}
