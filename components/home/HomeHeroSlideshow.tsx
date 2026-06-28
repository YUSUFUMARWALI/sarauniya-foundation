"use client";

import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { homeSlides } from "@/data/homeSlideshow";

export default function HomeHeroSlideshow() {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => setCurrent((prev) => (prev + 1) % homeSlides.length);
  const prevSlide = () =>
    setCurrent((prev) => (prev - 1 + homeSlides.length) % homeSlides.length);

  useEffect(() => {
    const timer = setInterval(nextSlide, 6000);
    return () => clearInterval(timer);
  }, []);

  const slide = homeSlides[current];

  return (
    <div className="overflow-hidden rounded-[2rem] bg-[#062B5F] shadow-2xl">
      <div className="relative h-[430px]">
        {slide.type === "video" ? (
          <video
            src={slide.src}
            className="h-full w-full object-cover"
            autoPlay
            muted
            loop
            playsInline
          />
        ) : (
          <img
            src={slide.src}
            alt={slide.title}
            className="h-full w-full object-cover"
          />
        )}

        <div className="absolute inset-0 bg-gradient-to-t from-[#062B5F]/90 via-[#062B5F]/30 to-transparent" />

        <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#B88A2E]">
            Impact Story
          </p>
          <h2 className="mt-2 text-3xl font-bold">{slide.title}</h2>
          <p className="mt-3 max-w-xl leading-7 text-white/80">
            {slide.description}
          </p>
        </div>

        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 rounded-full bg-white/90 p-3 text-[#0B4EA2] shadow-lg"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>

        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 rounded-full bg-white/90 p-3 text-[#0B4EA2] shadow-lg"
        >
          <ChevronRight className="h-5 w-5" />
        </button>
      </div>

      <div className="flex justify-center gap-2 bg-[#062B5F] p-4">
        {homeSlides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`h-2 rounded-full transition-all ${
              current === index ? "w-10 bg-[#B88A2E]" : "w-4 bg-white/30"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
