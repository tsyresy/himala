"use client";

import * as React from 'react';
import { useMemo } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';

// --- TYPE DEFINITIONS ---
interface Testimonial {
  imgSrc: string;
  alt: string;
}

interface AnimatedTestimonialGridProps {
  testimonials: Testimonial[];
  badgeText?: string;
  title: React.ReactNode;
  description: React.ReactNode;
  ctaText: string;
  ctaHref: string;
  className?: string;
}

// --- PRE-DEFINED POSITIONS FOR THE IMAGES ---
const imagePositions = [
  { top: '5%', left: '15%', className: 'hidden lg:block w-24 h-24' },
  { top: '15%', left: '35%', className: 'hidden md:block w-20 h-20' },
  { top: '5%', left: '55%', className: 'hidden md:block w-16 h-16' },
  { top: '10%', right: '15%', className: 'hidden lg:block w-28 h-28' },
  { top: '25%', right: '5%', className: 'hidden md:block w-20 h-20' },
  { top: '45%', right: '10%', className: 'hidden lg:block w-24 h-24' },
  { top: '50%', left: '5%', className: 'hidden md:block w-28 h-28' },
  { bottom: '5%', left: '20%', className: 'hidden lg:block w-20 h-20' },
  { bottom: '15%', left: '45%', className: 'hidden md:block w-16 h-16' },
  { bottom: '10%', right: '30%', className: 'hidden md:block w-24 h-24' },
  { bottom: '2%', right: '15%', className: 'hidden lg:block w-20 h-20' },
  { top: '10%', left: '5%', className: 'block md:hidden w-16 h-16' },
  { top: '5%', right: '10%', className: 'block md:hidden w-20 h-20' },
  { bottom: '5%', left: '10%', className: 'block md:hidden w-20 h-20' },
  { bottom: '10%', right: '5%', className: 'block md:hidden w-16 h-16' },
];

// --- PRE-COMPUTED floating animation parameters (stable, no re-renders) ---
const floatingParams = imagePositions.map((_, i) => ({
  yOffset: -((i * 7 + 5) % 15) - 5, // deterministic pseudo-random offset
  duration: ((i * 3 + 5) % 4) + 5,   // 5–9s cycle
  delay: (i * 0.3) % 2,               // staggered entry delay
}));

// --- COMPONENT ---
export const AnimatedTestimonialGrid = ({
  testimonials,
  badgeText = 'Testimonials',
  title,
  description,
  ctaText,
  ctaHref,
  className,
}: AnimatedTestimonialGridProps) => {

  // Memoize the image elements to prevent re-creation on parent re-renders
  const imageElements = useMemo(() => (
    testimonials.slice(0, imagePositions.length).map((testimonial, index) => {
      const params = floatingParams[index];
      return (
        <motion.div
          key={index}
          className={cn('absolute rounded-lg shadow-xl overflow-hidden will-change-transform', imagePositions[index].className)}
          style={{
            top: imagePositions[index].top,
            left: imagePositions[index].left,
            right: imagePositions[index].right,
            bottom: imagePositions[index].bottom,
          }}
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{
            duration: 0.6,
            delay: params.delay,
            ease: 'easeOut',
          }}
        >
          <motion.img
            src={testimonial.imgSrc}
            alt={testimonial.alt}
            className="w-full h-full object-cover"
            loading="lazy"
            animate={{
              y: [0, params.yOffset, 0],
            }}
            transition={{
              duration: params.duration,
              repeat: Infinity,
              repeatType: 'reverse',
              ease: 'easeInOut',
            }}
          />
        </motion.div>
      );
    })
  ), [testimonials]);

  return (
    <section
      className={cn(
        'relative w-full max-w-7xl mx-auto py-32 sm:py-40 px-4 min-h-[800px]',
        className
      )}
    >
      {/* Absolutely Positioned Images */}
      {imageElements}

      {/* Central Content */}
      <div className="relative z-10 flex flex-col items-center text-center mt-32">
        {badgeText && (
          <div className="mb-4 inline-block rounded-full bg-secondary px-4 py-1.5 text-sm font-semibold text-secondary-foreground border border-primary/20">
            {badgeText}
          </div>
        )}
        <h1 className="text-4xl md:text-6xl font-bold tracking-tighter text-white mb-6 max-w-3xl drop-shadow-md">
          {title}
        </h1>
        <p className="max-w-xl text-lg text-white/60 mb-10 font-light">
          {description}
        </p>
        <a
          href={ctaHref}
          className="inline-flex items-center justify-center rounded-full bg-gold-gradient px-8 py-4 text-base font-medium text-black shadow-[0_0_20px_rgba(212,175,55,0.3)] transition-all hover:opacity-90 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-black"
        >
          {ctaText}
          <ArrowRight className="ml-2 h-5 w-5" />
        </a>
      </div>
    </section>
  );
};

// Wrapper Component that feeds the data
export default function Testimonials() {
  const baseImages = [
    "https://i.pinimg.com/736x/40/ba/42/40ba429be53236c5c600868594ea2c13.jpg",
    "https://i.pinimg.com/1200x/03/ac/d6/03acd6074474ddcfb748476096e4764f.jpg",
    "https://i.pinimg.com/736x/27/83/c4/2783c444174a6215fde1f011a5cd7f2d.jpg",
  ];

  // Create an array of 15 testimonials using the base images repeatedly
  const testimonialsData = useMemo(() =>
    Array.from({ length: 15 }).map((_, i) => ({
      imgSrc: baseImages[i % baseImages.length],
      alt: `Testimonial jewelry piece ${i + 1}`,
    })),
  // baseImages is stable (inline literal), so empty deps is safe
  // eslint-disable-next-line react-hooks/exhaustive-deps
  []);

  return (
    <div className="bg-black border-t border-white/5">
      <AnimatedTestimonialGrid
        testimonials={testimonialsData}
        badgeText="Our Legacy"
        title="Trusted by 1000+ customers worldwide"
        description="Discover why discerning clients choose Maison Himala for their most precious wearable investments."
        ctaText="Read Client Stories"
        ctaHref="#stories"
      />
    </div>
  );
}
