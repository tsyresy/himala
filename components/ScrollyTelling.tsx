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
