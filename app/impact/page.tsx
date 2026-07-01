import Link from "next/link";
import { BarChart3, MapPin, ShieldCheck, TrendingUp } from "lucide-react";
import { statistics } from "@/data/statistics";

export default function ImpactPage() {
  return (
    <main className="min-h-screen bg-[#f8f5ef] px-6 py-12 text-[#062B5F] md:px-16 lg:px-24">
      <div className="mx-auto max-w-7xl">
        <Link href="/" className="font-semibold text-[#0B4EA2]">
          Back to Home
        </Link>

        <p className="mt-12 text-sm font-semibold uppercase tracking-[0.3em] text-[#B88A2E]">
          Impact Dashboard
        </p>

        <h1 className="mt-4 text-4xl font-bold md:text-6xl">
          Measuring Lives Touched and Communities Reached
        </h1>

        <p className="mt-6 max-w-4xl text-lg leading-8 text-gray-700">
          Sarauniya Charity Foundation tracks its humanitarian interventions
          through measurable outcomes across clean water, healthcare, education,
          empowerment, emergency relief, and community development.
        </p>

        <section className="mt-12 grid gap-5 md:grid-cols-3 lg:grid-cols-4">
          {statistics.map(([number, label]) => (
            <div
              key={label as string}
              className="rounded-3xl bg-white p-7 text-center shadow-lg"
            >
              <BarChart3 className="mx-auto h-8 w-8 text-[#B88A2E]" />
              <p className="mt-4 text-4xl font-bold text-[#0B4EA2]">
                {number as string}
              </p>
              <p className="mt-3 text-gray-600">{label as string}</p>
            </div>
          ))}
        </section>

        <section className="mt-14 grid gap-8 lg:grid-cols-3">
          <div className="rounded-[2rem] bg-[#062B5F] p-8 text-white shadow-xl">
            <TrendingUp className="h-10 w-10 text-[#B88A2E]" />
            <h2 className="mt-4 text-3xl font-bold">Evidence of Growth</h2>
            <p className="mt-4 leading-8 text-white/75">
              These figures represent documented areas of intervention and will
              continue to be updated as new projects are completed and verified.
            </p>
          </div>

          <div className="rounded-[2rem] bg-white p-8 shadow-xl">
            <MapPin className="h-10 w-10 text-[#B88A2E]" />
            <h2 className="mt-4 text-3xl font-bold text-[#0B4EA2]">
              Geographic Reach
            </h2>
            <p className="mt-4 leading-8 text-gray-600">
              SCF projects cover multiple communities across Northern Nigeria,
              including water, education, healthcare, empowerment, and relief
              interventions.
            </p>
          </div>

          <div className="rounded-[2rem] bg-white p-8 shadow-xl">
            <ShieldCheck className="h-10 w-10 text-[#B88A2E]" />
            <h2 className="mt-4 text-3xl font-bold text-[#0B4EA2]">
              Verified Impact
            </h2>
            <p className="mt-4 leading-8 text-gray-600">
              Impact data is drawn from project reports, internal records,
              outreach documentation, beneficiary stories, and field activities.
            </p>
          </div>
        </section>

        <section className="mt-14 rounded-[2rem] bg-[#0B4EA2] p-8 text-white shadow-xl">
          <h2 className="text-3xl font-bold">Impact Reporting Commitment</h2>
          <p className="mt-5 max-w-4xl leading-8 text-white/80">
            The Foundation will continue strengthening monitoring, evaluation,
            reporting, and public documentation so donors, partners,
            communities, and stakeholders can clearly understand the scale and
            value of its humanitarian work.
          </p>
        </section>
      </div>
    </main>
  );
}

