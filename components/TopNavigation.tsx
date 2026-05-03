import Image from "next/image";
import Link from "next/link";
import { Search, Heart, ShoppingBag } from "lucide-react";

export default function TopNavigation() {
  const navLinks = ["Home", "Collections", "High Jewelry", "New Arrivals", "Contact"];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-panel border-b border-white/10 px-8 py-4 flex justify-between items-center transition-all duration-300">
      
      {/* Left Links */}
      <div className="hidden lg:flex items-center gap-6 text-sm font-medium tracking-wide text-white/70">
        {navLinks.map((link, i) => (
          <Link key={i} href={`#${link.toLowerCase().replace(" ", "-")}`} className="hover:text-primary transition-colors">
            {link}
          </Link>
        ))}
      </div>

      {/* Center Logo */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
        <Link href="/" className="flex items-center">
          <Image
            src="/animated/logo.png"
            alt="Maison Himala Logo"
            width={140}
            height={50}
            className="object-contain drop-shadow-[0_0_8px_rgba(212,175,55,0.3)]"
            priority
          />
        </Link>
      </div>

      {/* Right Actions */}
      <div className="flex items-center gap-6">
        <div className="hidden sm:flex items-center gap-4 text-white/70">
          <button className="hover:text-primary transition-colors">
            <Search className="w-5 h-5" strokeWidth={1.5} />
          </button>
          <button className="hover:text-primary transition-colors">
            <Heart className="w-5 h-5" strokeWidth={1.5} />
          </button>
          <button className="hover:text-primary transition-colors">
            <ShoppingBag className="w-5 h-5" strokeWidth={1.5} />
          </button>
        </div>
        <Link 
          href="#explore" 
          className="bg-gold-gradient text-black px-5 py-2 rounded-full text-sm font-semibold hover:opacity-90 transition-opacity"
        >
          Explore Now
        </Link>
      </div>

    </nav>
  );
}
