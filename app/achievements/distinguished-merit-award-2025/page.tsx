import Link from "next/link";
import { Award, CalendarDays, Users } from "lucide-react";

export default function DistinguishedMeritAwardPage() {
  return (
    <main className="min-h-screen bg-[#f8f5ef] px-6 py-12 text-[#062B5F] md:px-16 lg:px-24">
      <article className="mx-auto max-w-4xl">
        <Link href="/achievements" className="font-semibold text-[#0B4EA2]">
          Back to Achievements
        </Link>

        <p className="mt-12 text-sm font-semibold uppercase tracking-[0.3em] text-[#B88A2E]">
          Award Recognition
        </p>

        <h1 className="mt-4 text-4xl font-bold leading-tight md:text-6xl">
          A Moment of Honor and Gratitude
        </h1>

        <div className="mt-8 flex flex-wrap gap-4">
          <span className="rounded-full bg-white px-5 py-2 text-sm font-semibold shadow">
            <CalendarDays className="mr-2 inline h-4 w-4 text-[#B88A2E]" />
            24 February 2025
          </span>
          <span className="rounded-full bg-white px-5 py-2 text-sm font-semibold shadow">
            <Award className="mr-2 inline h-4 w-4 text-[#B88A2E]" />
            Distinguished Merit Award
          </span>
        </div>

        <div className="mt-10 space-y-7 text-lg leading-9 text-gray-700">
          <p>
            On February 24th, 2025, the prestigious Sir Ahmadu Bello Memorial Foundation bestowed upon Sarauniya Charity Foundation the Distinguished Merit Award. This accolade marks a significant milestone, acknowledging both the personal philanthropic journey of the founder and the relentless efforts of the foundation.
          </p>

          <p>
            The award celebrates the foundation's unwavering dedication to transforming lives and fostering positive change within Nigeria. It symbolizes commitment to advocacy, charity and social impact, while reflecting the power of collective action for a greater cause.
          </p>

          <p>
            The event was attended by prominent figures including HRH Umar Faruk II, Emir of Katagum, Arc Audu Sule, Vizier of Katagum, and HE Bala Mohammed, Governor of Bauchi State, among others.
          </p>

          <p>
            This recognition strengthens the foundation's determination to advocate for those in need, provide support and drive sustainable development. It is a reminder of the impact that can be achieved when communities, partners and supporters work together.
          </p>
        </div>

        <div className="mt-12 rounded-3xl bg-[#0B4EA2] p-8 text-white">
          <Users className="h-8 w-8 text-[#B88A2E]" />
          <h2 className="mt-4 text-2xl font-bold">
            Together for a Brighter Future
          </h2>
          <p className="mt-4 leading-8 text-white/80">
            Sarauniya Charity Foundation remains committed to uplifting vulnerable communities, strengthening humanitarian response and ensuring that no one is left behind.
          </p>
        </div>
      </article>
    </main>
  );
}

