"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function ScrollyTelling() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Text Animations based on scrollYProgress
  const text2Opacity = useTransform(scrollYProgress, [0.15, 0.25, 0.35, 0.45], [0, 1, 1, 0]);
  const text2Y = useTransform(scrollYProgress, [0.15, 0.25, 0.35, 0.45], [50, 0, 0, -50]);

  const text3Opacity = useTransform(scrollYProgress, [0.45, 0.55, 0.65, 0.75], [0, 1, 1, 0]);
  const text3Y = useTransform(scrollYProgress, [0.45, 0.55, 0.65, 0.75], [50, 0, 0, -50]);

  const text4Opacity = useTransform(scrollYProgress, [0.75, 0.85, 1], [0, 1, 1]);
  const text4Y = useTransform(scrollYProgress, [0.75, 0.85, 1], [50, 0, 0]);

  return (
    <div ref={containerRef} className="h-[400vh] w-full bg-black relative">
      <div className="sticky top-0 h-screen w-full overflow-hidden bg-black">
        
        {/* Animated Golden Gradient Background */}
        <motion.div 
          className="absolute inset-0 opacity-40"
          animate={{
            backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
          }}
          transition={{
            duration: 15,
            ease: "linear",
            repeat: Infinity,
          }}
          style={{
            backgroundImage: "radial-gradient(circle at center, rgba(212,175,55,0.4) 0%, rgba(0,0,0,1) 70%)",
            backgroundSize: "200% 200%",
          }}
        />

        {/* Text Section 2: 30% - Left Aligned */}
        <motion.div
          style={{ opacity: text2Opacity, y: text2Y }}
          className="absolute inset-0 flex flex-col justify-center pointer-events-none p-8 md:p-24"
        >
          <div className="max-w-xl">
            <h2 className="text-4xl md:text-5xl font-luxury text-gold-gradient mb-8 drop-shadow-lg">
              The Pinnacle of Curation
            </h2>
            <p className="text-base md:text-xl text-white/70 leading-relaxed font-light drop-shadow-md">
              At Maison Himala, we are not mere collectors; we are master curators. 
              Every stone in our collection is hand-selected from the world&apos;s most boutique suppliers, 
              chosen for its &quot;Miracle of Light.&quot; We treat every piece as a high-investment luxury asset, 
              personally vetting the refractive index and structural integrity of every setting. 
              When you choose a Himala piece, you acquire technical perfection distilled 
              through a father&apos;s expertise and a daughter&apos;s dream.
            </p>
          </div>
        </motion.div>

        {/* Text Section 3: 60% - Right Aligned */}
        <motion.div
          style={{ opacity: text3Opacity, y: text3Y }}
          className="absolute inset-0 flex flex-col justify-center items-end pointer-events-none p-8 md:p-24 text-right"
        >
          <div className="max-w-xl">
            <h2 className="text-4xl md:text-5xl font-luxury text-gold-gradient mb-8 drop-shadow-lg">
              Commemorating Your Union
            </h2>
            <p className="text-base md:text-xl text-white/70 leading-relaxed font-light drop-shadow-md">
              A wedding is the ultimate miracle—a union of two souls bound by light. 
              There is no moment more worthy of technical perfection. Whether you seek the 
              extreme fire of our VVS1+ Moissanite or the timeless prestige of an 
              IGI-certified Diamond, our jewelry is designed to capture the radiance 
              of your commitment. Trust in a vetting process that leaves nothing to chance, 
              so your only focus is the brilliance of the promise you make.
            </p>
          </div>
        </motion.div>

        {/* Text Section 4: 90% - Center */}
        <motion.div
          style={{ opacity: text4Opacity, y: text4Y }}
          className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none p-8 md:p-24 text-center bg-gradient-to-t from-black via-black/50 to-transparent"
        >
          <div className="max-w-4xl mt-auto pb-24">
            <h2 className="text-4xl md:text-6xl font-luxury text-gold-gradient mb-10 drop-shadow-lg">
              A Legacy Worthy of Your Love
            </h2>
            <p className="text-base md:text-xl text-white/70 leading-relaxed font-light drop-shadow-md">
              Your wedding jewelry is the first chapter of your family&apos;s living legacy. 
              It is more than a jewel; it is a serialized guarantee of authenticity and quality 
              that will be cherished for generations. From solid 18K gold to precision-cut stones, 
              Maison Himala provides the technical standard required of a true luxury asset. 
              Join us in this journey of excellence—a legacy of light that begins with your 
              vows and shines forever.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
