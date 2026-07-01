import Link from "next/link";
import { Download, FileText, Target } from "lucide-react";
import { reports } from "@/data/reports";

export default function ReportsPage() {
  return (
    <main className="min-h-screen bg-[#f8f5ef] px-6 py-12 text-[#062B5F] md:px-16 lg:px-24">
      <div className="mx-auto max-w-7xl">
        <Link href="/" className="font-semibold text-[#0B4EA2]">
          Back to Home
        </Link>

        <p className="mt-12 text-sm font-semibold uppercase tracking-[0.3em] text-[#B88A2E]">
          Reports Library
        </p>

        <h1 className="mt-4 text-4xl font-bold md:text-6xl">
          Project Reports & Publications
        </h1>

        <p className="mt-6 max-w-4xl text-lg leading-8 text-gray-700">
          Explore official reports published by Sarauniya Charity Foundation.
          These reports document our humanitarian interventions, project
          outcomes, impact, and contribution to the United Nations Sustainable
          Development Goals (SDGs).
        </p>

        <div className="mt-12 grid gap-8">
          {reports.map((report) => (
            <div
              key={report.title}
              className="rounded-[2rem] bg-white p-8 shadow-xl"
            >
              <div className="flex flex-col gap-6 lg:flex-row lg:justify-between">
                <div className="max-w-4xl">
                  <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#B88A2E]">
                    {report.type}
                  </p>

                  <h2 className="mt-3 text-3xl font-bold text-[#0B4EA2]">
                    {report.title}
                  </h2>

                  <p className="mt-4 leading-8 text-gray-600">
                    {report.description}
                  </p>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {report.sdgs.map((sdg) => (
                      <span
                        key={sdg}
                        className="rounded-full bg-[#0B4EA2]/10 px-4 py-2 text-sm font-semibold text-[#0B4EA2]"
                      >
                        <Target className="mr-2 inline h-4 w-4" />
                        {sdg}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="min-w-[220px] rounded-3xl bg-[#f8f5ef] p-6">
                  <FileText className="h-10 w-10 text-[#B88A2E]" />

                  <p className="mt-5">
                    <strong>Year:</strong> {report.year}
                  </p>

                  <p className="mt-2">
                    <strong>Status:</strong> {report.status}
                  </p>

                  {report.href !== "#" ? (
                    <a
                      href={report.href}
                      target="_blank"
                      className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#0B4EA2] px-6 py-3 font-semibold text-white"
                    >
                      <Download className="h-5 w-5" />
                      View Report
                    </a>
                  ) : (
                    <span className="mt-8 inline-block rounded-full bg-gray-200 px-6 py-3 font-semibold text-gray-500">
                      Coming Soon
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        <section className="mt-16 rounded-[2rem] bg-[#062B5F] p-8 text-white">
          <h2 className="text-3xl font-bold">
            Our Commitment to Evidence-Based Impact
          </h2>

          <p className="mt-5 max-w-4xl leading-8 text-white/80">
            Sarauniya Charity Foundation believes that documenting humanitarian
            work is as important as implementing it. Our reports help donors,
            partners, communities, and government institutions understand the
            measurable outcomes of our interventions and how they contribute to
            sustainable development across Nigeria.
          </p>
        </section>
      </div>
    </main>
  );
}

