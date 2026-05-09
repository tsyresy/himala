"use client"

import { useState, useEffect } from "react"
import { X, Check, ArrowRight, Gem, ShieldCheck } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"
import { GodRays, MeshGradient } from "@paper-design/shaders-react"

export function Hero() {
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
            Welcome to Maison Himala
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
            Maison Himala, the world&apos;s premier curator of fine jewelry, presents a living legacy. Our rigorous technical vetting ensures every piece is absolutely worthy of being a luxury asset.
          </motion.p>


        </div>
      </div>
    </>
  )
}
