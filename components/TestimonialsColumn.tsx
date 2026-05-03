"use client";

import React from "react";
import { motion } from "framer-motion";

export const testimonials = [
  {
    name: "Eleanor Richards",
    role: "Art Collector",
    text: "The sheer brilliance of the Celestia Necklace is breathtaking. Every facet reflects Maison Himala's unwavering commitment to absolute perfection.",
    image: "https://i.pravatar.cc/150?u=a042581f4e29026024d",
  },
  {
    name: "Victoria Kensington",
    role: "Philanthropist",
    text: "I was moved by the story behind the brand. Knowing that this miracle of light is a legacy being actively built makes wearing their pieces profoundly special.",
    image: "https://i.pravatar.cc/150?u=a042581f4e29026704d",
  },
  {
    name: "Alistair DuPont",
    role: "Gemologist",
    text: "As an expert in the field, I am rarely impressed. Maison Himala's refractive index verifications are stringent, and the results speak for themselves.",
    image: "https://i.pravatar.cc/150?u=a04258114e29026702d",
  },
  {
    name: "Sophia Laurent",
    role: "Fashion Editor",
    text: "Bold elegance redefined indeed. Their signature rings are absolute showstoppers on any red carpet. Simply unmatched in today's market.",
    image: "https://i.pravatar.cc/150?img=47",
  },
];

import { cn } from "@/lib/utils";

export const TestimonialsColumn = (props: {
  className?: string;
  duration?: number;
}) => {
  return (
    <div className={cn("overflow-hidden w-full py-10", props.className)}
         style={{ maskImage: "linear-gradient(to right, transparent, black 10%, black 90%, transparent), linear-gradient(to bottom, transparent, black 10%, black 90%, transparent)", WebkitMaskImage: "linear-gradient(to right, transparent, black 5%, black 95%, transparent)" }}
    >
      <motion.div
        animate={{
          translateX: "-50%",
        }}
        transition={{
          duration: props.duration || 35,
          repeat: Infinity,
          ease: "linear",
          repeatType: "loop",
        }}
        className="flex flex-row gap-8 items-stretch w-max px-4"
      >
        {[
          ...new Array(3).fill(0).map((_, index) => (
            <React.Fragment key={index}>
              {testimonials.map(({ text, image, name, role }, i) => (
                <div className="p-10 rounded-3xl border border-white/10 shadow-lg shadow-primary/10 w-[400px] flex-shrink-0 bg-[#0a0a0a] flex flex-col justify-between" key={i}>
                  <div className="text-white/80 font-light italic text-lg leading-relaxed mb-8">"{text}"</div>
                  <div className="flex items-center gap-4 mt-auto">
                    <img
                      width={56}
                      height={56}
                      src={image}
                      alt={name}
                      className="h-14 w-14 rounded-full border border-[#BF953F]/30 object-cover"
                    />
                    <div className="flex flex-col">
                      <div className="font-medium tracking-wide text-white/90 leading-5">{name}</div>
                      <div className="leading-5 text-[#BF953F] text-sm tracking-wide mt-1">{role}</div>
                    </div>
                  </div>
                </div>
              ))}
            </React.Fragment>
          )),
        ]}
      </motion.div>
    </div>
  );
};
