"use client"

import { useState } from "react"
import { Check, Calendar, User, Mail, MapPin, Sparkles } from "lucide-react"
import { motion } from "framer-motion"

export default function BookingPage() {
  const [formStep, setFormStep] = useState<"idle" | "submitting" | "success">("idle")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setFormStep("submitting")
    setTimeout(() => {
      setFormStep("success")
    }, 2000)
  }

  return (
    <main className="min-h-screen bg-black text-white pt-32 pb-24 px-6 md:px-12 flex flex-col items-center">
      <div className="max-w-4xl w-full text-center mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-5xl md:text-7xl font-luxury font-bold text-gold-gradient mb-6">
            Private Consultation
          </h1>
          <p className="text-xl text-white/60 font-light max-w-2xl mx-auto">
            Secure your place in the legacy. Our private concierge service is dedicated to curating the perfect acquisition for your portfolio.
          </p>
        </motion.div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 w-full max-w-6xl">
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="space-y-12"
        >
          <div>
            <h2 className="text-3xl font-luxury mb-6">Why Book with Us?</h2>
            <div className="space-y-8">
              <div className="flex gap-6">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center border border-primary/20 shrink-0">
                  <Sparkles className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Bespoke Curation</h3>
                  <p className="text-white/50 font-light">Access pieces not available to the public, hand-selected by our top curators.</p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center border border-primary/20 shrink-0">
                  <Calendar className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Flexible Scheduling</h3>
                  <p className="text-white/50 font-light">Choose a time that suits your global lifestyle, for virtual or in-person viewings.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="p-8 rounded-[2rem] bg-gold-gradient/5 border border-primary/10">
            <p className="text-lg italic font-light text-white/80 leading-relaxed">
              "The booking process was as seamless as the craftsmanship of the ring itself. A truly elite experience."
            </p>
            <div className="mt-6 flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-black font-bold">JD</div>
              <span className="font-semibold text-primary">Julian de Vere</span>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="glass-panel p-8 md:p-12 rounded-[3rem] border border-white/10 shadow-2xl relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 blur-3xl -mr-16 -mt-16" />
          
          {formStep === "success" ? (
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="h-full flex flex-col items-center justify-center text-center space-y-6 py-12"
            >
              <div className="w-20 h-20 bg-gold-gradient rounded-full flex items-center justify-center shadow-lg">
                <Check className="w-10 h-10 text-black" strokeWidth={3} />
              </div>
              <h3 className="text-3xl font-luxury">Booking Confirmed</h3>
              <p className="text-white/60 font-light">Our concierge will contact you within 24 hours to finalize your private viewing.</p>
              <button 
                onClick={() => setFormStep("idle")}
                className="mt-8 px-8 py-3 rounded-full border border-white/20 hover:bg-white/5 transition-colors text-sm uppercase tracking-widest"
              >
                Schedule Another
              </button>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="space-y-6">
                <div className="relative">
                  <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-primary/50" />
                  <input 
                    required
                    type="text"
                    placeholder="Full Name"
                    className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 pl-12 pr-6 focus:outline-none focus:border-primary/50 transition-colors"
                  />
                </div>
                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-primary/50" />
                  <input 
                    required
                    type="email"
                    placeholder="Email Address"
                    className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 pl-12 pr-6 focus:outline-none focus:border-primary/50 transition-colors"
                  />
                </div>
                <div className="relative">
                  <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-primary/50" />
                  <input 
                    type="text"
                    placeholder="Preferred Location (or Virtual)"
                    className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 pl-12 pr-6 focus:outline-none focus:border-primary/50 transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-primary mb-3 uppercase tracking-widest ml-1">Area of Interest</label>
                  <select className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 px-6 focus:outline-none focus:border-primary/50 transition-colors appearance-none cursor-pointer text-white/70">
                    <option className="bg-black">High Jewelry</option>
                    <option className="bg-black">Investment Assets</option>
                    <option className="bg-black">Bespoke Commissions</option>
                    <option className="bg-black">Estate Curations</option>
                  </select>
                </div>
              </div>

              <button
                type="submit"
                disabled={formStep === "submitting"}
                className="w-full py-5 bg-gold-gradient text-black font-bold rounded-full hover:opacity-90 transition-all shadow-[0_0_30px_rgba(212,175,55,0.3)] disabled:opacity-50"
              >
                {formStep === "submitting" ? "Processing..." : "Request Private Viewing"}
              </button>
              
              <p className="text-[10px] text-center text-white/40 uppercase tracking-[0.2em]">
                Secure & Confidential Inquiries Only
              </p>
            </form>
          )}
        </motion.div>
      </div>
    </main>
  )
}
