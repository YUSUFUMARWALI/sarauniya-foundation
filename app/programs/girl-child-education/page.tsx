import Link from "next/link";
import {
  ArrowLeft,
  BookOpen,
  CheckCircle2,
  Download,
  GraduationCap,
  HeartHandshake,
  ShieldCheck,
  Target,
} from "lucide-react";
import { educationProgram } from "@/data/education";

export default function GirlChildEducationPage() {
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
            Girl Child Education
          </p>

          <h1 className="mt-4 text-5xl font-bold md:text-7xl">
            {educationProgram.subtitle}
          </h1>

          <p className="mt-8 max-w-4xl text-lg leading-9 text-white/80">
            {educationProgram.description}
          </p>

          <a
            href={educationProgram.reportHref}
            target="_blank"
            className="mt-10 inline-flex items-center gap-3 rounded-full bg-[#B88A2E] px-8 py-4 font-semibold text-[#062B5F]"
          >
            <Download className="h-5 w-5" />
            View Education Report
          </a>
        </div>
      </section>

      <section className="px-6 py-16 md:px-16 lg:px-24">
        <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-2 lg:grid-cols-4">
          {educationProgram.stats.map(([number, label]) => (
            <div key={label} className="rounded-3xl bg-white p-7 text-center shadow-lg">
              <GraduationCap className="mx-auto h-8 w-8 text-[#B88A2E]" />
              <p className="mt-4 text-4xl font-bold text-[#0B4EA2]">{number}</p>
              <p className="mt-3 text-gray-600">{label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-white px-6 py-16 md:px-16 lg:px-24">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-4xl font-bold">Why Girl Child Education Matters</h2>

          <div className="mt-10 grid gap-5">
            {educationProgram.whyItMatters.map((item) => (
              <div key={item} className="flex gap-4 rounded-3xl bg-[#f8f5ef] p-6">
                <CheckCircle2 className="mt-1 h-6 w-6 text-[#B88A2E]" />
                <p className="leading-8 text-gray-700">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-16 md:px-16 lg:px-24">
        <div className="mx-auto max-w-7xl">
          <div className="flex items-center gap-3">
            <BookOpen className="h-8 w-8 text-[#B88A2E]" />
            <h2 className="text-4xl font-bold">SCF Education Interventions</h2>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {educationProgram.interventions.map((item) => (
              <div key={item} className="flex gap-4 rounded-3xl bg-white p-6 shadow">
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
            <ShieldCheck className="h-8 w-8 text-[#B88A2E]" />
            <h2 className="text-4xl font-bold">Impact and Sustainability</h2>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {educationProgram.impact.map((item) => (
              <div key={item} className="rounded-3xl bg-[#062B5F] p-7 text-white shadow-lg">
                <HeartHandshake className="h-7 w-7 text-[#B88A2E]" />
                <p className="mt-4 leading-8 text-white/85">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-16 md:px-16 lg:px-24">
        <div className="mx-auto max-w-7xl">
          <div className="flex items-center gap-3">
            <Target className="h-8 w-8 text-[#B88A2E]" />
            <h2 className="text-4xl font-bold">SDGs Supported</h2>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            {educationProgram.sdgs.map((sdg) => (
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
    </main>
  );
}

