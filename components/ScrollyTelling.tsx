"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import { motion, useScroll, useTransform, useMotionValueEvent } from "framer-motion";
import { Loader2 } from "lucide-react";

const FRAME_COUNT = 40;

export default function ScrollyTelling() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [imagesLoaded, setImagesLoaded] = useState(false);
  const imagesRef = useRef<HTMLImageElement[]>([]);
  const rafIdRef = useRef<number>(0);
  const lastFrameRef = useRef<number>(-1);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Preload images on mount — stored in ref to avoid module-level leak
  useEffect(() => {
    let loadedCount = 0;
    const images: HTMLImageElement[] = [];

    for (let i = 1; i <= FRAME_COUNT; i++) {
      const img = new Image();
      const frameNum = i.toString().padStart(3, "0");
      img.src = `/animated/ezgif-frame-${frameNum}.jpg`;
      img.onload = () => {
        loadedCount++;
        if (loadedCount === FRAME_COUNT) {
          setImagesLoaded(true);
        }
      };
      images.push(img);
    }

    imagesRef.current = images;

    return () => {
      // Cleanup: cancel any pending rAF and clear refs
      if (rafIdRef.current) cancelAnimationFrame(rafIdRef.current);
      imagesRef.current = [];
    };
  }, []);

  // Stable draw function
  const drawFrame = useCallback((frameNum: number) => {
    const canvas = canvasRef.current;
    const images = imagesRef.current;
    if (!canvas || !images.length) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const img = images[frameNum];
    if (!img) return;

    const hRatio = canvas.width / img.width;
    const vRatio = canvas.height / img.height;
    const ratio = Math.min(hRatio, vRatio);
    const centerX = (canvas.width - img.width * ratio) / 2;
    const centerY = (canvas.height - img.height * ratio) / 2;

    ctx.fillStyle = "#000000";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(img, 0, 0, img.width, img.height, centerX, centerY, img.width * ratio, img.height * ratio);
  }, []);

  // Map scroll progress to frame index (0 to 39)
  const frameIndex = useTransform(scrollYProgress, [0, 1], [0, FRAME_COUNT - 1]);

  // Throttled scroll-driven rendering via requestAnimationFrame
  useMotionValueEvent(frameIndex, "change", (latest) => {
    if (!imagesLoaded) return;

    const currentFrame = Math.round(latest);
    // Skip if same frame (avoids redundant draws)
    if (currentFrame === lastFrameRef.current) return;

    // Cancel any pending rAF to coalesce rapid scroll events
    if (rafIdRef.current) cancelAnimationFrame(rafIdRef.current);

    rafIdRef.current = requestAnimationFrame(() => {
      lastFrameRef.current = currentFrame;
      drawFrame(currentFrame);
    });
  });

  // Resize canvas to match window
  useEffect(() => {
    const handleResize = () => {
      if (canvasRef.current) {
        canvasRef.current.width = window.innerWidth;
        canvasRef.current.height = window.innerHeight;
        // Re-draw current frame after resize
        if (imagesLoaded && lastFrameRef.current >= 0) {
          drawFrame(lastFrameRef.current);
        } else if (imagesLoaded) {
          drawFrame(Math.round(frameIndex.get()));
        }
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [imagesLoaded, frameIndex, drawFrame]);

  // Text Animations based on scrollYProgress
  const text2Opacity = useTransform(scrollYProgress, [0.15, 0.25, 0.35, 0.45], [0, 1, 1, 0]);
  const text2Y = useTransform(scrollYProgress, [0.15, 0.25, 0.35, 0.45], [50, 0, 0, -50]);

  const text3Opacity = useTransform(scrollYProgress, [0.45, 0.55, 0.65, 0.75], [0, 1, 1, 0]);
  const text3Y = useTransform(scrollYProgress, [0.45, 0.55, 0.65, 0.75], [50, 0, 0, -50]);

  const text4Opacity = useTransform(scrollYProgress, [0.75, 0.85, 1], [0, 1, 1]);
  const text4Y = useTransform(scrollYProgress, [0.75, 0.85, 1], [50, 0, 0]);

  return (
    <div ref={containerRef} className="h-[400vh] w-full bg-black relative">
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        
        {!imagesLoaded && (
          <div className="absolute inset-0 z-50 flex flex-col items-center justify-center bg-black text-white/60">
            <Loader2 className="w-8 h-8 animate-spin mb-4 text-white" />
            <p className="text-sm uppercase tracking-[0.2em]">Preparing the Miracle</p>
          </div>
        )}

        <canvas ref={canvasRef} className="w-full h-full object-cover" />

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
