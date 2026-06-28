"use client";

import { useEffect, useState } from "react";
import { homeSlides } from "@/data/homeSlideshow";

export default function HomeImpactSlideshow() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % homeSlides.length);
    }, 6000);

    return () => clearInterval(timer);
  }, []);

  const slide = homeSlides[current];

  return (
    <section className="bg-[#062B5F] px-6 py-16 text-white md:px-16 lg:px-24">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-2 lg:items-center">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#B88A2E]">
            Impact in Motion
          </p>

          <h2 className="mt-4 text-4xl font-bold md:text-5xl">
            {slide.title}
          </h2>

          <p className="mt-5 max-w-xl text-lg leading-8 text-white/75">
            {slide.description}
          </p>

          <div className="mt-8 flex gap-3">
            {homeSlides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrent(index)}
                className={`h-3 w-10 rounded-full ${
                  index === current ? "bg-[#B88A2E]" : "bg-white/30"
                }`}
              />
            ))}
          </div>
        </div>

        <div className="overflow-hidden rounded-[2rem] bg-white/10 shadow-2xl">
          {slide.type === "video" ? (
            <video
              src={slide.src}
              className="h-[360px] w-full object-cover"
              autoPlay
              muted
              loop
              playsInline
            />
          ) : (
            <img
              src={slide.src}
              alt={slide.title}
              className="h-[360px] w-full object-cover"
            />
          )}
        </div>
      </div>
    </section>
  );
}
