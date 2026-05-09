"use client";

import React from "react";
import { cn } from "@/lib/utils";

export const testimonials = [
  {
    name: "Eleanor Richards",
    role: "Art Collector",
    text: "The sheer brilliance of the Celestia Necklace is breathtaking. Every facet reflects Maison Himala's unwavering commitment to absolute perfection.",
    image: "https://res.cloudinary.com/djillj6xt/image/upload/v1778295707/user_ajcb01.png",
  },
  {
    name: "Victoria Kensington",
    role: "Philanthropist",
    text: "I was moved by the story behind the brand. Knowing that this miracle of light is a legacy being actively built makes wearing their pieces profoundly special.",
    image: "https://res.cloudinary.com/djillj6xt/image/upload/v1778295707/user_ajcb01.png",
  },
  {
    name: "Alistair DuPont",
    role: "Gemologist",
    text: "As an expert in the field, I am rarely impressed. Maison Himala's refractive index verifications are stringent, and the results speak for themselves.",
    image: "https://res.cloudinary.com/djillj6xt/image/upload/v1778295707/user_ajcb01.png",
  },
  {
    name: "Sophia Laurent",
    role: "Fashion Editor",
    text: "Bold elegance redefined indeed. Their signature rings are absolute showstoppers on any red carpet. Simply unmatched in today's market.",
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
