import Link from "next/link";
import {
  ArrowLeft,
  CheckCircle2,
  Download,
  Droplets,
  MapPinned,
  Quote,
  Target,
} from "lucide-react";
import { waterProgram } from "@/data/water";

export default function WaterSanitationPage() {
  return (
    <main className="min-h-screen bg-[#f8f5ef] text-[#062B5F]">
      <section className="bg-[#062B5F] px-6 py-20 text-white md:px-16 lg:px-24">
        <div className="mx-auto max-w-7xl">
          <Link
            href="/programs"
            className="inline-flex items-center gap-2 text-white/80 hover:text-white"
          >
            <ArrowLeft className="h-5 w-5" />
            Back to Programs
          </Link>

          <p className="mt-8 text-sm font-semibold uppercase tracking-[0.3em] text-[#B88A2E]">
            Water & Sanitation
          </p>

          <h1 className="mt-4 text-5xl font-bold md:text-7xl">
            {waterProgram.subtitle}
          </h1>

          <p className="mt-8 max-w-4xl text-lg leading-9 text-white/80">
            {waterProgram.description}
          </p>

          <a
            href={waterProgram.reportHref}
            target="_blank"
            className="mt-10 inline-flex items-center gap-3 rounded-full bg-[#B88A2E] px-8 py-4 font-semibold text-[#062B5F]"
          >
            <Download className="h-5 w-5" />
            View Water Report
          </a>
        </div>
      </section>

      <section className="px-6 py-16 md:px-16 lg:px-24">
        <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-2 lg:grid-cols-4">
          {waterProgram.stats.map(([number, label]) => (
            <div
              key={label as string}
              className="rounded-3xl bg-white p-7 text-center shadow-lg"
            >
              <Droplets className="mx-auto h-8 w-8 text-[#B88A2E]" />
              <p className="mt-4 text-4xl font-bold text-[#0B4EA2]">
                {number}
              </p>
              <p className="mt-3 text-gray-600">{label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-white px-6 py-16 md:px-16 lg:px-24">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-4xl font-bold">
            Why Clean Water Matters
          </h2>

          <div className="mt-10 grid gap-5">
            {waterProgram.whyItMatters.map((item) => (
              <div
                key={item}
                className="flex gap-4 rounded-3xl bg-[#f8f5ef] p-6"
              >
                <CheckCircle2 className="mt-1 h-6 w-6 text-[#B88A2E]" />
                <p className="leading-8 text-gray-700">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-16 md:px-16 lg:px-24">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-4xl font-bold">
            Our Water Interventions
          </h2>

          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {waterProgram.interventions.map((item) => (
              <div
                key={item}
                className="flex gap-4 rounded-3xl bg-white p-6 shadow"
              >
                <CheckCircle2 className="mt-1 h-6 w-6 text-[#B88A2E]" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-16 md:px-16 lg:px-24">
        <div className="mx-auto max-w-7xl">
          <div className="flex items-center gap-3">
            <MapPinned className="h-8 w-8 text-[#B88A2E]" />
            <h2 className="text-4xl font-bold">
              Areas of Intervention
            </h2>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {waterProgram.locations.map((state) => (
              <div
                key={state.state}
                className="rounded-3xl bg-white p-7 shadow-lg"
              >
                <h3 className="text-2xl font-bold text-[#0B4EA2]">
                  {state.state}
                </h3>

                <ul className="mt-5 space-y-2">
                  {state.areas.map((area) => (
                    <li key={area}>• {area}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-16 md:px-16 lg:px-24">
        <div className="mx-auto max-w-7xl">
          <div className="flex items-center gap-3">
            <Target className="h-8 w-8 text-[#B88A2E]" />
            <h2 className="text-4xl font-bold">
              SDGs Supported
            </h2>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            {waterProgram.sdgs.map((sdg) => (
              <span
                key={sdg}
                className="rounded-full bg-[#0B4EA2] px-5 py-3 font-semibold text-white"
              >
                {sdg}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-16 md:px-16 lg:px-24">
        <div className="mx-auto max-w-7xl">
          <div className="flex items-center gap-3">
            <Quote className="h-8 w-8 text-[#B88A2E]" />
            <h2 className="text-4xl font-bold">
              Voices from the Communities
            </h2>
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {waterProgram.testimonials.map((story) => (
              <div
                key={story.quote}
                className="rounded-3xl bg-[#062B5F] p-8 text-white"
              >
                <p className="leading-8 text-white/85">
                  "{story.quote}"
                </p>

                <div className="mt-6">
                  <p className="font-bold">{story.name}</p>
                  <p className="text-sm text-white/70">
                    {story.location}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

