import Link from "next/link";
import {
  BarChart3,
  FileText,
  Handshake,
  LockKeyhole,
  Scale,
  ShieldCheck,
} from "lucide-react";
import {
  accountabilityAreas,
  publicDocuments,
  transparencyPrinciples,
} from "@/data/transparency";

export default function TransparencyPage() {
  return (
    <main className="min-h-screen bg-[#f8f5ef] px-6 py-12 text-[#062B5F] md:px-16 lg:px-24">
      <div className="mx-auto max-w-7xl">
        <Link href="/" className="font-semibold text-[#0B4EA2]">
          Back to Home
        </Link>

        <p className="mt-12 text-sm font-semibold uppercase tracking-[0.3em] text-[#B88A2E]">
          Transparency Centre
        </p>

        <h1 className="mt-4 text-4xl font-bold md:text-6xl">
          Openness, Accountability and Responsible Impact
        </h1>

        <p className="mt-6 max-w-4xl text-lg leading-8 text-gray-700">
          Sarauniya Charity Foundation is committed to responsible governance,
          transparent documentation, ethical use of resources, community
          accountability, and clear reporting of humanitarian impact.
        </p>

        <section className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {transparencyPrinciples.map((item) => (
            <div key={item.title} className="rounded-3xl bg-white p-7 shadow-lg">
              <ShieldCheck className="h-9 w-9 text-[#B88A2E]" />

              <h2 className="mt-5 text-xl font-bold text-[#0B4EA2]">
                {item.title}
              </h2>

              <p className="mt-4 leading-7 text-gray-600">{item.text}</p>
            </div>
          ))}
        </section>

        <section className="mt-14 grid gap-8 lg:grid-cols-2">
          <div className="rounded-[2rem] bg-[#062B5F] p-8 text-white shadow-xl">
            <Scale className="h-10 w-10 text-[#B88A2E]" />

            <h2 className="mt-4 text-3xl font-bold">
              Accountability Areas
            </h2>

            <p className="mt-4 leading-8 text-white/75">
              SCF uses internal systems and policy documents to guide financial,
              operational, programmatic, and institutional accountability.
            </p>

            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {accountabilityAreas.map((area) => (
                <div key={area} className="rounded-2xl bg-white/10 px-5 py-4">
                  {area}
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[2rem] bg-white p-8 shadow-xl">
            <BarChart3 className="h-10 w-10 text-[#B88A2E]" />

            <h2 className="mt-4 text-3xl font-bold text-[#0B4EA2]">
              Impact Reporting
            </h2>

            <p className="mt-4 leading-8 text-gray-600">
              SCF will continue to publish project reports, impact statistics,
              annual reports, and selected accountability records as they become
              available for public sharing.
            </p>

            <Link
              href="/reports"
              className="mt-6 inline-block rounded-full bg-[#0B4EA2] px-6 py-3 font-semibold text-white"
            >
              View Reports
            </Link>
          </div>
        </section>

        <section className="mt-14">
          <div className="flex items-center gap-3">
            <FileText className="h-9 w-9 text-[#B88A2E]" />
            <h2 className="text-3xl font-bold text-[#0B4EA2]">
              Public Documents
            </h2>
          </div>

          <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {publicDocuments.map((doc) => (
              <div key={doc.title} className="rounded-3xl bg-white p-7 shadow-lg">
                <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#B88A2E]">
                  {doc.status}
                </p>

                <h3 className="mt-3 text-2xl font-bold text-[#0B4EA2]">
                  {doc.title}
                </h3>

                <p className="mt-3 text-gray-600">{doc.type}</p>

                {doc.href !== "#" ? (
                  <a
                    href={doc.href}
                    target="_blank"
                    className="mt-6 inline-block rounded-full bg-[#0B4EA2] px-5 py-3 font-semibold text-white"
                  >
                    View Document
                  </a>
                ) : (
                  <span className="mt-6 inline-block rounded-full bg-gray-200 px-5 py-3 font-semibold text-gray-500">
                    Coming Soon
                  </span>
                )}
              </div>
            ))}
          </div>
        </section>

        <section className="mt-14 grid gap-8 lg:grid-cols-2">
          <div className="rounded-[2rem] bg-white p-8 shadow-xl">
            <LockKeyhole className="h-10 w-10 text-[#B88A2E]" />

            <h2 className="mt-4 text-3xl font-bold text-[#0B4EA2]">
              Internal Documents
            </h2>

            <p className="mt-4 leading-8 text-gray-600">
              Staff handbooks, detailed operational guidelines, internal
              procurement files, personnel records, and sensitive administrative
              documents are not published publicly. They remain controlled
              internal documents for authorized organizational use.
            </p>
          </div>

          <div className="rounded-[2rem] bg-[#0B4EA2] p-8 text-white shadow-xl">
            <Handshake className="h-10 w-10 text-[#B88A2E]" />

            <h2 className="mt-4 text-3xl font-bold">
              Donor and Partner Confidence
            </h2>

            <p className="mt-4 leading-8 text-white/80">
              This centre is designed to help donors, partners, communities,
              government institutions, and stakeholders understand how SCF
              approaches responsible service delivery, documentation, and
              accountability.
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}

