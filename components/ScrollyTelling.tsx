"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform, useMotionValueEvent } from "framer-motion";
import { Loader2 } from "lucide-react";

const FRAME_COUNT = 40;

const preloadedImages: HTMLImageElement[] = [];

export default function ScrollyTelling() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [imagesLoaded, setImagesLoaded] = useState(false);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Preload images on mount
  useEffect(() => {
    let loadedCount = 0;
    for (let i = 1; i <= FRAME_COUNT; i++) {
      const img = new Image();
      // Format number to be 3 digits
      const frameNum = i.toString().padStart(3, "0");
      img.src = `/animated/ezgif-frame-${frameNum}.jpg`;
      img.onload = () => {
        loadedCount++;
        if (loadedCount === FRAME_COUNT) {
          setImagesLoaded(true);
        }
      };
      preloadedImages.push(img);
    }
  }, []);

  // Map scroll progress to frame index (0 to 39)
  const frameIndex = useTransform(scrollYProgress, [0, 1], [0, FRAME_COUNT - 1]);

  useMotionValueEvent(frameIndex, "change", (latest) => {
    if (!imagesLoaded || !canvasRef.current) return;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const currentFrame = Math.round(latest);
    const img = preloadedImages[currentFrame];
    if (!img) return;

    // Draw the image filling the canvas while maintaining aspect ratio (object-fit: contain behavior)
    // Actually for a seamless blend with black bg, cover or contain is fine. Let's do contain.
    const hRatio = canvas.width / img.width;
    const vRatio = canvas.height / img.height;
    const ratio = Math.min(hRatio, vRatio);
    const centerShift_x = (canvas.width - img.width * ratio) / 2;
    const centerShift_y = (canvas.height - img.height * ratio) / 2;

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    // Fill with black to ensure seamless background
    ctx.fillStyle = "#000000";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.drawImage(
      img,
      0,
      0,
      img.width,
      img.height,
      centerShift_x,
      centerShift_y,
      img.width * ratio,
      img.height * ratio
    );
  });

  // Resize canvas to match window
  useEffect(() => {
    const handleResize = () => {
      if (canvasRef.current) {
        canvasRef.current.width = window.innerWidth;
        canvasRef.current.height = window.innerHeight;
        // Trigger a re-draw for the current frame
        const currentFrame = Math.round(frameIndex.get());
        if (imagesLoaded && preloadedImages[currentFrame]) {
            const ctx = canvasRef.current.getContext("2d");
            if (ctx) {
                const img = preloadedImages[currentFrame];
                const hRatio = canvasRef.current.width / img.width;
                const vRatio = canvasRef.current.height / img.height;
                const ratio = Math.min(hRatio, vRatio);
                const centerShift_x = (canvasRef.current.width - img.width * ratio) / 2;
                const centerShift_y = (canvasRef.current.height - img.height * ratio) / 2;
                ctx.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);
                ctx.fillStyle = "#000000";
                ctx.fillRect(0, 0, canvasRef.current.width, canvasRef.current.height);
                ctx.drawImage(img, 0, 0, img.width, img.height, centerShift_x, centerShift_y, img.width * ratio, img.height * ratio);
            }
        }
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [imagesLoaded, frameIndex]);

  // Text Animations based on scrollYProgress
  const text1Opacity = useTransform(scrollYProgress, [0, 0.05, 0.1], [1, 1, 0]);
  const text1Y = useTransform(scrollYProgress, [0, 0.1], [0, -50]);

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
            <h2 className="text-3xl md:text-4xl font-light tracking-tight text-white/90 mb-6 drop-shadow-lg">
              Born from a Miracle, Distilled into Light
            </h2>
            <p className="text-base md:text-lg text-white/60 leading-relaxed font-light drop-shadow-md">
              Himala translates to Miracle. It was the name bestowed to celebrate the
              extraordinary strength of a daughter from her very first breath. As a small
              child, she was mesmerized by the way light dances through a fine gemstone—that
              spark of wonder became the very heartbeat of Maison Himala. Every jewel we
              create carries that same radiance: a miracle of fire and brilliance, designed
              to capture light the way a child’s eyes first captured a dream.
            </p>
          </div>
        </motion.div>

        {/* Text Section 3: 60% - Right Aligned */}
        <motion.div
          style={{ opacity: text3Opacity, y: text3Y }}
          className="absolute inset-0 flex flex-col justify-center items-end pointer-events-none p-8 md:p-24 text-right"
        >
          <div className="max-w-xl">
            <h2 className="text-3xl md:text-4xl font-light tracking-tight text-white/90 mb-6 drop-shadow-lg">
              A Vetting Process Worthy of a Luxury Asset
            </h2>
            <p className="text-base md:text-lg text-white/60 leading-relaxed font-light drop-shadow-md">
              We treat every piece in our collection as a wearable investment. Our curation is
              built on uncompromising technical precision: we personally verify the refractive
              index of each gemstone and inspect the purity and structural integrity of every
              precious metal setting. Sourced by hand from the world’s most reputable
              suppliers, every diamond or moissanite, every solid gold or silver element,
              must meet our exacting standard of fire, clarity, and composition. Nothing is
              left to chance; what reaches you is perfection, certified and without
              compromise.
            </p>
          </div>
        </motion.div>

        {/* Text Section 4: 90% - Center */}
        <motion.div
          style={{ opacity: text4Opacity, y: text4Y }}
          className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none p-8 md:p-24 text-center bg-gradient-to-t from-black via-black/50 to-transparent"
        >
          <div className="max-w-3xl mt-auto pb-24">
            <h2 className="text-3xl md:text-5xl font-light tracking-tight text-white/90 mb-8 drop-shadow-lg">
              A Living Legacy, Woven with You
            </h2>
            <p className="text-base md:text-lg text-white/60 leading-relaxed font-light drop-shadow-md">
              Maison Himala is not a distant inheritance to be handed down someday—it is a
              journey we are living together right now. At almost six years old, our
              daughter is already at our side, learning the brilliance of a master cut and
              the spirit of true entrepreneurship. When you choose a piece from this
              collection, you acquire far more than a jewel. You support a father’s deep
              expertise and a daughter’s luminous dream, united by an unwavering commitment
              to quality. You become an essential part of a story still unfolding—a legacy of
              excellence in which you now hold a precious place.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
