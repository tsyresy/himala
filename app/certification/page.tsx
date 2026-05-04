"use client"

import { useState } from "react"
import { ShieldCheck, Search, Info, AlertTriangle, CheckCircle2, XCircle } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

export default function CertificationPage() {
  const [serial, setSerial] = useState("")
  const [status, setStatus] = useState<"idle" | "verifying" | "valid" | "invalid">("idle")

  const handleVerify = (e: React.FormEvent) => {
    e.preventDefault()
    if (!serial) return
    setStatus("verifying")
    
    // Simulate verification logic
    setTimeout(() => {
      if (serial.toUpperCase().startsWith("MH")) {
        setStatus("valid")
      } else {
        setStatus("invalid")
      }
    }, 1500)
  }

  return (
    <main className="min-h-screen bg-black text-white relative overflow-hidden flex flex-col items-center">
      {/* Liquid Glass Background Elements */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/20 rounded-full blur-[120px] animate-pulse" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-primary/10 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '2s' }} />
      
      <div className="relative z-10 w-full max-w-5xl px-6 pt-32 pb-24">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-8"
          >
            <ShieldCheck className="w-4 h-4 text-primary" />
            <span className="text-xs font-bold tracking-[0.2em] uppercase text-primary">Authenticity Portal</span>
          </motion.div>
          <h1 className="text-5xl md:text-7xl font-luxury font-bold text-gold-gradient mb-6">
            Verify Your Piece
          </h1>
          <p className="text-lg text-white/50 font-light max-w-2xl mx-auto">
            Each Maison Himala creation is assigned a unique technical serial number. Enter yours below to access its digital provenance record.
          </p>
        </div>

        {/* Verification Card - Liquid Glass Effect */}
        <motion.div
          layout
          className="relative max-w-2xl mx-auto mb-20 p-1 md:p-1.5 rounded-[2.5rem] bg-gradient-to-br from-white/20 via-white/5 to-transparent border border-white/10 backdrop-blur-3xl shadow-2xl overflow-hidden"
        >
          <div className="bg-black/40 rounded-[2.2rem] p-8 md:p-12 relative z-10">
            <form onSubmit={handleVerify} className="space-y-8">
              <div className="relative">
                <input
                  type="text"
                  value={serial}
                  onChange={(e) => setSerial(e.target.value)}
                  placeholder="Enter Serial Number (e.g., MH-8820-X)"
                  className="w-full bg-white/5 border border-white/10 rounded-2xl py-5 px-6 pl-14 text-xl font-mono tracking-wider focus:outline-none focus:border-primary/50 transition-all placeholder:text-white/20 uppercase"
                />
                <Search className="absolute left-6 top-1/2 -translate-y-1/2 w-5 h-5 text-white/30" />
              </div>

              <button
                type="submit"
                disabled={status === "verifying"}
                className="w-full py-5 bg-gold-gradient text-black font-bold rounded-2xl text-lg hover:opacity-90 transition-all shadow-xl disabled:opacity-50"
              >
                {status === "verifying" ? (
                  <span className="flex items-center justify-center gap-3">
                    <span className="w-5 h-5 border-2 border-black border-t-transparent rounded-full animate-spin" />
                    Querying Blockchain Records...
                  </span>
                ) : "Verify Authenticity"}
              </button>
            </form>

            <AnimatePresence mode="wait">
              {status === "valid" && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="mt-12 p-8 rounded-3xl bg-green-500/10 border border-green-500/30 flex flex-col items-center text-center gap-4"
                >
                  <CheckCircle2 className="w-16 h-16 text-green-500 mb-2" />
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">Verified Authentic</h3>
                    <p className="text-white/60 font-light">This piece belongs to the 2024 Aurora Collection. It has been successfully vetted and certified by Maison Himala curators.</p>
                  </div>
                  <div className="mt-4 flex gap-4">
                    <button className="px-6 py-2 rounded-full bg-white/10 text-xs font-bold uppercase tracking-widest hover:bg-white/20 transition-colors">Download Certificate</button>
                    <button className="px-6 py-2 rounded-full bg-white/10 text-xs font-bold uppercase tracking-widest hover:bg-white/20 transition-colors">View Lab Report</button>
                  </div>
                </motion.div>
              )}

              {status === "invalid" && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="mt-12 p-8 rounded-3xl bg-red-500/10 border border-red-500/30 flex flex-col items-center text-center gap-4"
                >
                  <XCircle className="w-16 h-16 text-red-500 mb-2" />
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">Record Not Found</h3>
                    <p className="text-white/60 font-light">The serial number entered does not match any records in our database. Please contact our technical support if you believe this is an error.</p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Liquid highlight line */}
          <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/40 to-transparent" />
        </motion.div>

        {/* Info Sections */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="glass-panel p-8 rounded-[2rem] border border-white/5 space-y-4">
            <div className="flex items-center gap-3 text-primary">
              <Info className="w-5 h-5" />
              <h4 className="font-bold uppercase tracking-widest text-xs">Security Features</h4>
            </div>
            <p className="text-sm text-white/40 font-light leading-relaxed">
              Maison Himala pieces use microscopic laser engravings and encrypted NFC chips to ensure physical-to-digital parity.
            </p>
          </div>
          <div className="glass-panel p-8 rounded-[2rem] border border-white/5 space-y-4">
            <div className="flex items-center gap-3 text-primary">
              <AlertTriangle className="w-5 h-5" />
              <h4 className="font-bold uppercase tracking-widest text-xs">Anti-Counterfeit</h4>
            </div>
            <p className="text-sm text-white/40 font-light leading-relaxed">
              Never share your serial number publicly. Authentic certification can only be verified through this official portal.
            </p>
          </div>
          <div className="glass-panel p-8 rounded-[2rem] border border-white/5 space-y-4">
            <div className="flex items-center gap-3 text-primary">
              <ShieldCheck className="w-5 h-5" />
              <h4 className="font-bold uppercase tracking-widest text-xs">Legal Disclaimer</h4>
            </div>
            <p className="text-sm text-white/40 font-light leading-relaxed">
              Verification results are for information purposes only. Official ownership records are maintained in our private ledger.
            </p>
          </div>
        </div>

        <div className="mt-20 pt-12 border-t border-white/10 text-center">
          <p className="text-xs text-white/20 uppercase tracking-[0.3em] mb-4">Maison Himala Technical Standards</p>
          <div className="flex justify-center gap-8 opacity-30 grayscale">
            {/* Mock Lab Logos */}
            <span className="font-bold text-sm tracking-tighter">GIA GRADUATED</span>
            <span className="font-bold text-sm tracking-tighter">ISO 9001 CERTIFIED</span>
            <span className="font-bold text-sm tracking-tighter">TECHNICAL VETTING OK</span>
          </div>
        </div>
      </div>
    </main>
  )
}
