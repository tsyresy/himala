"use client"

import { useState, useEffect } from "react"
import { X, Check, ArrowRight, Gem, ShieldCheck } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { GodRays, MeshGradient } from "@paper-design/shaders-react"

export function Hero() {
  const [isExpanded, setIsExpanded] = useState(false)
  const [formStep, setFormStep] = useState<"idle" | "submitting" | "success">("idle")

  const handleExpand = () => setIsExpanded(true)
  
  const handleClose = () => {
    setIsExpanded(false)
    setTimeout(() => setFormStep("idle"), 500)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setFormStep("submitting")
    setTimeout(() => {
      setFormStep("success")
    }, 1500)
  }

  useEffect(() => {
    if (isExpanded) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }
    return () => { document.body.style.overflow = "unset" }
  }, [isExpanded])

  return (
    <>
      <div className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-black px-4 sm:px-6 py-12 sm:py-20 transition-colors duration-300">
        
        <div className="absolute inset-0 pointer-events-none">
          <GodRays
            colorBack="#00000000"
            colors={["#BF953F40", "#FCF6BA40", "#B3872840", "#AA771C40"]}
            colorBloom="#BF953F"
            offsetX={0.85}
            offsetY={-1}
            intensity={0.5}
            spotty={0.45}
            midSize={10}
            midIntensity={0}
            density={0.38}
            bloom={0.3}
            speed={0.5}
            scale={1.6}
            frame={3332042.8159981333}
            style={{
              height: "100%",
              width: "100%",
              position: "absolute",
              top: 0,
              left: 0,
            }}
          />
        </div>

        <div className="relative z-10 flex flex-col items-center gap-6 sm:gap-8 text-center mt-20">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center rounded-full border border-[#BF953F]/20 bg-black/50 px-4 py-1.5 text-sm font-medium text-white/90 backdrop-blur-sm"
          >
            <span className="flex h-2 w-2 rounded-full bg-[#BF953F] mr-3 shadow-[0_0_10px_#BF953F]"></span>
            New: The Himala Collection
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight text-white max-w-5xl font-luxury leading-tight"
          >
            Discover the pinnacle of <br className="hidden sm:block" />
            <span className="text-gold-gradient">
              wearable investments
            </span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base sm:text-lg md:text-xl text-white/70 max-w-2xl px-4 font-light leading-relaxed"
          >
            Maison Himala presents a living legacy woven with you. A rigorous vetting process ensuring every piece is absolutely worthy of a luxury asset.
          </motion.p>

          <AnimatePresence initial={false}>
            {!isExpanded && (
              <motion.div className="inline-block relative mt-8">
                <motion.div
                  style={{ borderRadius: "100px" }}
                  layout
                  layoutId="cta-card"
                  className="absolute inset-0 bg-gold-gradient"
                />
                <motion.button
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.2 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  layout={false}
                  onClick={handleExpand}
                  className="relative flex items-center gap-3 h-14 px-10 py-3 text-lg font-bold text-black tracking-wide hover:opacity-90 transition-opacity"
                >
                  Discover the Collection
                  <ArrowRight className="w-5 h-5" />
                </motion.button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      <AnimatePresence initial={false}>
        {isExpanded && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-0 sm:p-4">
            <motion.div
              layoutId="cta-card"
              transition={{ type: "spring", bounce: 0, duration: 0.4 }}
              style={{ borderRadius: "24px" }}
              layout
              className="relative flex h-full w-full overflow-hidden bg-[#0a0a0a] sm:rounded-[24px] shadow-[0_0_50px_rgba(191,149,63,0.15)]"
            >
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="absolute inset-0 pointer-events-none opacity-40"
              >
                <MeshGradient
                  speed={0.3}
                  colors={["#BF953F", "#111111", "#B38728", "#000000"]}
                  distortion={0.5}
                  swirl={0.2}
                  grainMixer={0.15}
                  grainOverlay={0.05}
                  style={{ height: "100%", width: "100%" }}
                />
              </motion.div>

              <motion.button
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                onClick={handleClose}
                className="absolute right-4 top-4 sm:right-8 sm:top-8 z-50 flex h-12 w-12 items-center justify-center rounded-full bg-white/5 text-[#BF953F] backdrop-blur-md transition-colors hover:bg-white/10 border border-[#BF953F]/20"
              >
                <X className="h-6 w-6" />
              </motion.button>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.4 }}
                className="relative z-10 flex flex-col lg:flex-row h-full w-full max-w-7xl mx-auto overflow-y-auto lg:overflow-hidden"
              >
                <div className="flex-1 flex flex-col justify-center p-8 sm:p-12 lg:p-16 gap-10 text-white">
                  <div className="space-y-4">
                    <h2 className="text-4xl sm:text-5xl lg:text-6xl font-luxury font-bold leading-tight tracking-tight text-gold-gradient">
                      Begin Your Legacy
                    </h2>
                    <p className="text-white/70 text-xl max-w-md font-light">
                      Join an exclusive circle of collectors securing their future with Maison Himala.
                    </p>
                  </div>

                  <div className="space-y-8">
                    <div className="flex gap-5 items-start">
                      <div className="flex-shrink-0 w-14 h-14 rounded-full bg-[#BF953F]/10 flex items-center justify-center border border-[#BF953F]/30">
                        <ShieldCheck className="w-7 h-7 text-[#BF953F]" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-xl tracking-wide text-white/90">Absolute Provenance</h3>
                        <p className="text-white/60 text-base font-light leading-relaxed mt-2">
                          Every diamond is rigorously vetted, certified, and traced to ensure peerless origin.
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-5 items-start">
                      <div className="flex-shrink-0 w-14 h-14 rounded-full bg-[#BF953F]/10 flex items-center justify-center border border-[#BF953F]/30">
                        <Gem className="w-7 h-7 text-[#BF953F]" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-xl tracking-wide text-white/90">Master Craftsmanship</h3>
                        <p className="text-white/60 text-base font-light leading-relaxed mt-2">
                          Sculpted by artisans with decades of experience in high luxury jewelry design.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-auto pt-8 border-t border-[#BF953F]/20">
                    <figure>
                      <blockquote className="text-lg font-light italic leading-relaxed mb-6 text-white/80">
                        "Maison Himala's commitment to perfection is unmatched. Acquiring the Aurora Ring was more than a purchase; it was securing a masterpiece."
                      </blockquote>
                      <figcaption className="flex items-center gap-4">
                        <div className="h-14 w-14 rounded-full bg-gold-gradient flex items-center justify-center text-xl font-bold text-black">
                          MW
                        </div>
                        <div>
                          <div className="font-semibold text-white/90 tracking-wide">Margaret Windsor</div>
                          <div className="text-sm text-[#BF953F]">Private Collector</div>
                        </div>
                      </figcaption>
                    </figure>
                  </div>
                </div>

                <div className="flex-1 flex items-center justify-center p-4 sm:p-12 lg:p-16 bg-black/40 backdrop-blur-xl lg:bg-transparent lg:backdrop-blur-none border-l border-[#BF953F]/10">
                  <div className="w-full max-w-md bg-black/60 backdrop-blur-2xl border border-[#BF953F]/20 rounded-3xl p-8 sm:p-10 shadow-2xl">
                    
                    {formStep === "success" ? (
                      <motion.div 
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="flex flex-col items-center justify-center text-center h-[450px] space-y-6"
                      >
                        <div className="w-24 h-24 bg-gold-gradient rounded-full flex items-center justify-center shadow-[0_0_30px_rgba(191,149,63,0.3)]">
                          <Check className="w-12 h-12 text-black" strokeWidth={3} />
                        </div>
                        <div>
                          <h3 className="text-3xl font-luxury text-white mb-3">Inquiry Received</h3>
                          <p className="text-white/60 font-light text-lg">Our private concierge will contact you shortly to schedule an exclusive viewing.</p>
                        </div>
                        <button 
                          onClick={handleClose}
                          className="px-8 py-3 bg-white/5 hover:bg-white/10 text-white border border-white/10 rounded-full transition-colors text-sm font-semibold tracking-wide"
                        >
                          Return
                        </button>
                      </motion.div>
                    ) : (
                      <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="space-y-2 mb-8">
                          <h3 className="text-2xl font-luxury text-white">Private Inquiry</h3>
                          <p className="text-sm text-white/60 font-light">Register your interest for a private consultation.</p>
                        </div>

                        <div className="space-y-5">
                          <div>
                            <label htmlFor="name" className="block text-xs font-semibold text-[#BF953F] mb-2 uppercase tracking-widest">
                              Full Name
                            </label>
                            <input
                              required
                              type="text"
                              id="name"
                              placeholder="Your name"
                              className="w-full px-5 py-4 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-white/20 focus:outline-none focus:ring-1 focus:ring-[#BF953F] focus:border-[#BF953F] transition-all text-sm"
                            />
                          </div>

                          <div>
                            <label htmlFor="email" className="block text-xs font-semibold text-[#BF953F] mb-2 uppercase tracking-widest">
                              Email Address
                            </label>
                            <input
                              required
                              type="email"
                              id="email"
                              placeholder="you@domain.com"
                              className="w-full px-5 py-4 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-white/20 focus:outline-none focus:ring-1 focus:ring-[#BF953F] focus:border-[#BF953F] transition-all text-sm"
                            />
                          </div>

                          <div className="grid grid-cols-2 gap-5">
                            <div>
                              <label htmlFor="country" className="block text-xs font-semibold text-[#BF953F] mb-2 uppercase tracking-widest">
                                Region
                              </label>
                              <input
                                type="text"
                                id="country"
                                placeholder="Country"
                                className="w-full px-5 py-4 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-white/20 focus:outline-none focus:ring-1 focus:ring-[#BF953F] focus:border-[#BF953F] transition-all text-sm"
                              />
                            </div>
                            <div>
                              <label htmlFor="budget" className="block text-xs font-semibold text-[#BF953F] mb-2 uppercase tracking-widest">
                                Interest
                              </label>
                              <select
                                id="budget"
                                className="w-full px-5 py-4 rounded-xl bg-white/5 border border-white/10 text-white focus:outline-none focus:ring-1 focus:ring-[#BF953F] focus:border-[#BF953F] transition-all text-sm appearance-none cursor-pointer"
                              >
                                <option className="bg-[#0a0a0a]">High Jewelry</option>
                                <option className="bg-[#0a0a0a]">Bridal</option>
                                <option className="bg-[#0a0a0a]">Bespoke</option>
                                <option className="bg-[#0a0a0a]">Investment</option>
                              </select>
                            </div>
                          </div>
                        </div>

                        <button
                          disabled={formStep === "submitting"}
                          type="submit"
                          className="w-full flex items-center justify-center px-8 py-4 rounded-full bg-gold-gradient text-black font-bold tracking-wide hover:opacity-90 focus:ring-4 focus:ring-[#BF953F]/30 transition-all disabled:opacity-70 disabled:cursor-not-allowed mt-4 shadow-[0_0_20px_rgba(191,149,63,0.3)]"
                        >
                          {formStep === "submitting" ? (
                             <span className="flex items-center gap-3">
                               <span className="h-5 w-5 border-2 border-black border-t-transparent rounded-full animate-spin"></span>
                               Processing...
                             </span>
                          ) : "Request Consultation"}
                        </button>
                        
                        <p className="text-[10px] text-center text-white/40 mt-6 tracking-wide uppercase">
                          All inquiries are treated with strict confidentiality.
                        </p>
                      </form>
                    )}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  )
}
