"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Search, Heart, ShoppingBag, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/blog", label: "Blog" },
  { href: "/about", label: "About Us" },
  { href: "/contact", label: "Contact" },
];

const secondaryLinks = [
  { href: "/certification", label: "Certification" },
  { href: "/booking", label: "Booking" },
  { href: "/standard", label: "The Standard" },
  { href: "/privacy", label: "Privacy Policy" },
];

export default function TopNavigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  // Close mobile menu on resize to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsMobileMenuOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 glass-panel border-b border-white/10 px-4 sm:px-8 py-4 sm:py-6 flex justify-between items-center transition-all duration-300">

        {/* Mobile Hamburger Button */}
        <button
          id="mobile-menu-toggle"
          onClick={() => setIsMobileMenuOpen(true)}
          className="lg:hidden flex items-center justify-center w-10 h-10 text-white/70 hover:text-primary transition-colors"
          aria-label="Open menu"
        >
          <Menu className="w-6 h-6" strokeWidth={1.5} />
        </button>

        {/* Left Links (Desktop only) */}
        <div className="hidden lg:flex items-center gap-8 text-sm font-medium tracking-widest text-white/70 uppercase">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="hover:text-primary transition-colors">
              {link.label}
            </Link>
          ))}
        </div>

        {/* Center Logo */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          <Link href="/" className="flex items-center">
            <Image
              src="/animated/logo.png"
              alt="Maison Himala Logo"
              width={110}
              height={40}
              className="object-contain drop-shadow-[0_0_8px_rgba(212,175,55,0.3)] w-[80px] sm:w-[110px]"
              priority
            />
          </Link>
        </div>

        {/* Right Actions */}
        <div className="flex items-center gap-3 sm:gap-6">
          <div className="hidden sm:flex items-center gap-4 text-white/70">
            <button className="hover:text-primary transition-colors" aria-label="Search">
              <Search className="w-5 h-5" strokeWidth={1.5} />
            </button>
            <button className="hover:text-primary transition-colors" aria-label="Favorites">
              <Heart className="w-5 h-5" strokeWidth={1.5} />
            </button>
            <button className="hover:text-primary transition-colors" aria-label="Cart">
              <ShoppingBag className="w-5 h-5" strokeWidth={1.5} />
            </button>
          </div>
          <Link
            href="https://www.etsy.com/shop/MaisonHimala"
            className="flex items-center gap-2 bg-gold-gradient text-black px-3 sm:px-5 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-semibold hover:opacity-90 transition-opacity"
          >
            <motion.div
              animate={{
                x:      [0, 0, -8, -12, -10, -12, -10, -8, 0, 0],
                y:      [0, 0, -14, -20, -18, -20, -18, -14, 0, 0],
                rotate: [0, 0, -10, -15, -12, -15, -12, -10, 0, 0],
                scale:  [1, 1, 1.3, 1.4, 1.35, 1.4, 1.35, 1.3, 1, 1],
                filter: [
                  "drop-shadow(0 0 0px rgba(255,140,0,0))",
                  "drop-shadow(0 0 2px rgba(255,140,0,0.3))",
                  "drop-shadow(0 0 8px rgba(255,140,0,0.7))",
                  "drop-shadow(0 0 14px rgba(255,140,0,1))",
                  "drop-shadow(0 0 12px rgba(255,140,0,0.9))",
                  "drop-shadow(0 0 14px rgba(255,140,0,1))",
                  "drop-shadow(0 0 12px rgba(255,140,0,0.9))",
                  "drop-shadow(0 0 8px rgba(255,140,0,0.7))",
                  "drop-shadow(0 0 2px rgba(255,140,0,0.3))",
                  "drop-shadow(0 0 0px rgba(255,140,0,0))",
                ],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                repeatDelay: 2,
                ease: [0.22, 1, 0.36, 1],
                times: [0, 0.08, 0.18, 0.3, 0.42, 0.54, 0.66, 0.78, 0.9, 1],
              }}
              className="flex-shrink-0 z-10"
            >
              <Image
                src="/animated/etsy-logo.png"
                alt="Etsy"
                width={22}
                height={22}
                className="w-[18px] h-[18px] sm:w-[22px] sm:h-[22px] object-contain"
              />
            </motion.div>
            Shop on Etsy
          </Link>
        </div>

      </nav>

      {/* Mobile Sidebar Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              key="mobile-backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 z-[60] bg-black/60 backdrop-blur-sm"
              onClick={() => setIsMobileMenuOpen(false)}
            />

            {/* Sidebar Panel */}
            <motion.aside
              key="mobile-sidebar"
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="fixed top-0 left-0 bottom-0 z-[70] w-[min(320px,85vw)] bg-[#0a0a0a]/95 backdrop-blur-xl border-r border-white/10 flex flex-col overflow-y-auto"
            >
              {/* Sidebar Header */}
              <div className="flex items-center justify-between px-6 py-5 border-b border-white/10">
                <Link href="/" onClick={() => setIsMobileMenuOpen(false)}>
                  <Image
                    src="/animated/logo.png"
                    alt="Maison Himala Logo"
                    width={90}
                    height={32}
                    className="object-contain drop-shadow-[0_0_8px_rgba(212,175,55,0.3)]"
                  />
                </Link>
                <button
                  id="mobile-menu-close"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex items-center justify-center w-10 h-10 text-white/50 hover:text-white transition-colors"
                  aria-label="Close menu"
                >
                  <X className="w-5 h-5" strokeWidth={1.5} />
                </button>
              </div>

              {/* Primary Navigation */}
              <div className="px-6 pt-8 pb-4">
                <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-primary/60 mb-4">
                  Navigation
                </p>
                <nav className="flex flex-col gap-1">
                  {navLinks.map((link, index) => (
                    <motion.div
                      key={link.href}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 + index * 0.05 }}
                    >
                      <Link
                        href={link.href}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="flex items-center py-3 px-3 text-base font-medium tracking-wider text-white/80 hover:text-primary hover:bg-white/5 rounded-lg transition-all duration-200 uppercase"
                      >
                        {link.label}
                      </Link>
                    </motion.div>
                  ))}
                </nav>
              </div>

              {/* Divider */}
              <div className="mx-6 border-t border-white/5" />

              {/* Secondary Navigation */}
              <div className="px-6 pt-6 pb-4">
                <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-primary/60 mb-4">
                  Explore
                </p>
                <nav className="flex flex-col gap-1">
                  {secondaryLinks.map((link, index) => (
                    <motion.div
                      key={link.href}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.25 + index * 0.05 }}
                    >
                      <Link
                        href={link.href}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="flex items-center py-2.5 px-3 text-sm tracking-wider text-white/50 hover:text-primary hover:bg-white/5 rounded-lg transition-all duration-200"
                      >
                        {link.label}
                      </Link>
                    </motion.div>
                  ))}
                </nav>
              </div>

              {/* Divider */}
              <div className="mx-6 border-t border-white/5" />

              {/* Action Icons (visible on mobile sidebar) */}
              <div className="px-6 pt-6 pb-4">
                <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-primary/60 mb-4">
                  Quick Actions
                </p>
                <div className="flex items-center gap-5 px-3 text-white/50">
                  <button className="hover:text-primary transition-colors" aria-label="Search">
                    <Search className="w-5 h-5" strokeWidth={1.5} />
                  </button>
                  <button className="hover:text-primary transition-colors" aria-label="Favorites">
                    <Heart className="w-5 h-5" strokeWidth={1.5} />
                  </button>
                  <button className="hover:text-primary transition-colors" aria-label="Cart">
                    <ShoppingBag className="w-5 h-5" strokeWidth={1.5} />
                  </button>
                </div>
              </div>

              {/* CTA at bottom */}
              <div className="mt-auto px-6 pb-8 pt-4">
                <Link
                  href="https://www.etsy.com/shop/MaisonHimala"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex items-center justify-center gap-2.5 w-full bg-gold-gradient text-black px-6 py-3 rounded-full text-sm font-semibold hover:opacity-90 transition-opacity shadow-[0_0_20px_rgba(212,175,55,0.2)]"
                >
                  <motion.div
                    animate={{
                      x:      [0, 0, -8, -12, -10, -12, -10, -8, 0, 0],
                      y:      [0, 0, -14, -20, -18, -20, -18, -14, 0, 0],
                      rotate: [0, 0, -10, -15, -12, -15, -12, -10, 0, 0],
                      scale:  [1, 1, 1.3, 1.4, 1.35, 1.4, 1.35, 1.3, 1, 1],
                      filter: [
                        "drop-shadow(0 0 0px rgba(255,140,0,0))",
                        "drop-shadow(0 0 2px rgba(255,140,0,0.3))",
                        "drop-shadow(0 0 8px rgba(255,140,0,0.7))",
                        "drop-shadow(0 0 14px rgba(255,140,0,1))",
                        "drop-shadow(0 0 12px rgba(255,140,0,0.9))",
                        "drop-shadow(0 0 14px rgba(255,140,0,1))",
                        "drop-shadow(0 0 12px rgba(255,140,0,0.9))",
                        "drop-shadow(0 0 8px rgba(255,140,0,0.7))",
                        "drop-shadow(0 0 2px rgba(255,140,0,0.3))",
                        "drop-shadow(0 0 0px rgba(255,140,0,0))",
                      ],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      repeatDelay: 2,
                      ease: [0.22, 1, 0.36, 1],
                      times: [0, 0.08, 0.18, 0.3, 0.42, 0.54, 0.66, 0.78, 0.9, 1],
                    }}
                    className="flex-shrink-0 z-10"
                  >
                    <Image
                      src="/animated/etsy-logo.png"
                      alt="Etsy"
                      width={24}
                      height={24}
                      className="w-6 h-6 object-contain"
                    />
                  </motion.div>
                  Shop on Etsy
                </Link>
                <p className="text-center text-[10px] text-white/20 mt-4 uppercase tracking-widest">
                  © 2026 Maison Himala
                </p>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
