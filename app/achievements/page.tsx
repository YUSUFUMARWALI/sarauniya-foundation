import Link from "next/link";
import { Award } from "lucide-react";

export default function AchievementsPage() {
  return (
    <main className="min-h-screen bg-[#f8f5ef] px-6 py-12 text-[#062B5F] md:px-16 lg:px-24">
      <div className="mx-auto max-w-6xl">
        <Link href="/" className="font-semibold text-[#0B4EA2]">
          Back to Home
        </Link>

        <p className="mt-12 text-sm font-semibold uppercase tracking-[0.3em] text-[#B88A2E]">
          Achievements
        </p>

        <h1 className="mt-4 text-5xl font-bold">
          News, Awards and Recognition
        </h1>

        <Link
          href="/achievements/distinguished-merit-award-2025"
          className="mt-12 block rounded-3xl bg-white p-8 shadow-lg transition hover:-translate-y-1 hover:shadow-2xl"
        >
          <Award className="h-10 w-10 text-[#B88A2E]" />
          <p className="mt-6 text-sm font-semibold text-[#B88A2E]">
            24 February 2025
          </p>
          <h2 className="mt-2 text-3xl font-bold text-[#0B4EA2]">
            Distinguished Merit Award 2025
          </h2>
          <p className="mt-4 max-w-3xl leading-8 text-gray-700">
            Sarauniya Charity Foundation was honoured by the prestigious Sir Ahmadu Bello Memorial Foundation in recognition of philanthropy, advocacy, charity and social impact.
          </p>
          <span className="mt-6 inline-block font-semibold text-[#B88A2E]">
            Read More
          </span>
        </Link>
      </div>
    </main>
  );
}
