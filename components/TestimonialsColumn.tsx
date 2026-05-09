"use client";

import React from "react";
import { cn } from "@/lib/utils";

export const testimonials = [
  {
    name: "Claude Dupont",
    role: "🇨🇦 Canada",
    text: "The craftsmanship is unparalleled. Knowing this is a thoroughly vetted investment gives me complete confidence in my purchase. Truly exceptional service and quality.",
    image: "https://res.cloudinary.com/djillj6xt/image/upload/v1778295707/user_ajcb01.png",
  },
  {
    name: "John Martinez",
    role: "🇲🇽 Mexique",
    text: "A seamless and highly professional experience from start to finish. The technical verification provides absolute peace of mind, and the piece itself is outstanding.",
    image: "https://res.cloudinary.com/djillj6xt/image/upload/v1778295707/user_ajcb01.png",
  },
  {
    name: "Sarah Jeanne",
    role: "🇫🇷 France",
    text: "Exquisite attention to detail and rigorous standards. The investment value is clear, and the physical certificate of authenticity is a testament to their professionalism.",
    image: "https://res.cloudinary.com/djillj6xt/image/upload/v1778295707/user_ajcb01.png",
  },
  {
    name: "Mateo Rivera",
    role: "🇺🇸 USA",
    text: "Maison Himala delivers on every promise. The curation process ensures that each piece is a genuine luxury asset. I am deeply satisfied with my acquisition.",
    image: "https://res.cloudinary.com/djillj6xt/image/upload/v1778295707/user_ajcb01.png",
  },
];

export const TestimonialsColumn = (props: {
  className?: string;
  duration?: number;
}) => {
  const speed = props.duration || 35;

  return (
    <div className={cn("overflow-hidden w-full py-10", props.className)}
      style={{
        maskImage: "linear-gradient(to right, transparent, black 10%, black 90%, transparent), linear-gradient(to bottom, transparent, black 10%, black 90%, transparent)",
        WebkitMaskImage: "linear-gradient(to right, transparent, black 5%, black 95%, transparent)",
      }}
    >
      <div
        className="flex flex-row gap-8 items-stretch w-max px-4 testimonials-scroll"
        style={{
          animationDuration: `${speed}s`,
        }}
      >
        {/* Render 2 sets for seamless loop (reduced from 3) */}
        {[0, 1].map((setIndex) => (
          <React.Fragment key={setIndex}>
            {testimonials.map(({ text, image, name, role }, i) => (
              <div
                className="p-6 sm:p-10 rounded-2xl sm:rounded-3xl border border-white/10 shadow-lg shadow-primary/10 w-[280px] sm:w-[400px] flex-shrink-0 bg-[#0a0a0a] flex flex-col justify-between will-change-transform"
                key={`${setIndex}-${i}`}
              >
                <div className="text-white/80 font-light italic text-base sm:text-lg leading-relaxed mb-6 sm:mb-8">
                  &quot;{text}&quot;
                </div>
                <div className="flex items-center gap-4 mt-auto">
                  <img
                    width={56}
                    height={56}
                    src={image}
                    alt={name}
                    className="h-14 w-14 rounded-full border border-[#BF953F]/30 object-cover"
                    loading="lazy"
                  />
                  <div className="flex flex-col">
                    <div className="font-medium tracking-wide text-white/90 leading-5">{name}</div>
                    <div className="leading-5 text-[#BF953F] text-sm tracking-wide mt-1">{role}</div>
                  </div>
                </div>
              </div>
            ))}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};
