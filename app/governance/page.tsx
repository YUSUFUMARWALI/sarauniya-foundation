import Link from "next/link";
import {
  Building2,
  FileCheck,
  Landmark,
  Scale,
  ShieldCheck,
  Users,
} from "lucide-react";
import {
  complianceCertificates,
  departments,
  governanceHighlights,
} from "@/data/governance";

export default function GovernancePage() {
  return (
    <main className="min-h-screen bg-[#f8f5ef] px-6 py-12 text-[#062B5F] md:px-16 lg:px-24">
      <div className="mx-auto max-w-7xl">
        <Link href="/" className="font-semibold text-[#0B4EA2]">
          Back to Home
        </Link>

        <p className="mt-12 text-sm font-semibold uppercase tracking-[0.3em] text-[#B88A2E]">
          Governance & Compliance
        </p>

        <h1 className="mt-4 text-4xl font-bold md:text-6xl">
          Responsible Governance, Transparency and Accountability
        </h1>

        <p className="mt-6 max-w-4xl text-lg leading-8 text-gray-700">
          Sarauniya Charity Foundation maintains documented governance,
          financial, procurement, operational, and compliance procedures to
          support responsible humanitarian work, donor confidence, and
          sustainable community impact.
        </p>

        <section className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {governanceHighlights.map((item) => (
            <div key={item.title} className="rounded-3xl bg-white p-7 shadow-lg">
              <ShieldCheck className="h-9 w-9 text-[#B88A2E]" />

              <h2 className="mt-5 text-xl font-bold text-[#0B4EA2]">
                {item.title}
              </h2>

              <p className="mt-4 leading-7 text-gray-600">{item.text}</p>
            </div>
          ))}
        </section>

        <section className="mt-14 rounded-[2rem] bg-[#062B5F] p-8 text-white shadow-xl">
          <Users className="h-10 w-10 text-[#B88A2E]" />

          <h2 className="mt-4 text-3xl font-bold">Organizational Structure</h2>

          <p className="mt-4 max-w-3xl leading-8 text-white/75">
            SCF&apos;s structure is designed to support strategic oversight,
            operational leadership, field implementation, financial control,
            communications, compliance, and community-level coordination.
          </p>

          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {departments.map((department) => (
              <div
                key={department}
                className="rounded-2xl bg-white/10 px-5 py-4 font-semibold"
              >
                {department}
              </div>
            ))}
          </div>
        </section>

        <section className="mt-14 grid gap-8 lg:grid-cols-2">
          <div className="rounded-[2rem] bg-white p-8 shadow-xl">
            <Landmark className="h-10 w-10 text-[#B88A2E]" />

            <h2 className="mt-4 text-3xl font-bold text-[#0B4EA2]">
              Financial Accountability
            </h2>

            <p className="mt-4 leading-8 text-gray-600">
              The Foundation follows documented financial management procedures
              covering budgeting, income management, expenditure control, bank
              reconciliation, internal reporting, asset management, reserves,
              audit readiness, and Board-level oversight.
            </p>
          </div>

          <div className="rounded-[2rem] bg-white p-8 shadow-xl">
            <Scale className="h-10 w-10 text-[#B88A2E]" />

            <h2 className="mt-4 text-3xl font-bold text-[#0B4EA2]">
              Procurement Standards
            </h2>

            <p className="mt-4 leading-8 text-gray-600">
              SCF&apos;s procurement approach emphasizes transparent purchasing,
              value for money, competitive quotations, proper documentation,
              vendor accountability, conflict-of-interest control, and ethical
              sourcing where applicable.
            </p>
          </div>
        </section>

        <section className="mt-14">
          <div className="flex items-center gap-3">
            <FileCheck className="h-9 w-9 text-[#B88A2E]" />
            <h2 className="text-3xl font-bold text-[#0B4EA2]">
              Compliance Certificates
            </h2>
          </div>

          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {complianceCertificates.map((certificate) => (
              <div
                key={certificate.title}
                className="rounded-3xl bg-white p-7 shadow-lg"
              >
                <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#B88A2E]">
                  {certificate.status}
                </p>

                <h3 className="mt-3 text-2xl font-bold text-[#0B4EA2]">
                  {certificate.title}
                </h3>

                <div className="mt-5 grid gap-3 text-gray-700">
                  <p>
                    <span className="font-semibold">Issuer:</span>{" "}
                    {certificate.issuer}
                  </p>
                  <p>
                    <span className="font-semibold">Certificate No:</span>{" "}
                    {certificate.certificateNo}
                  </p>
                  <p>
                    <span className="font-semibold">Date Issued:</span>{" "}
                    {certificate.dateIssued}
                  </p>
                  <p>
                    <span className="font-semibold">Expiry Date:</span>{" "}
                    {certificate.expiryDate}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-14 rounded-[2rem] bg-[#0B4EA2] p-8 text-white shadow-xl">
          <Building2 className="h-10 w-10 text-[#B88A2E]" />

          <h2 className="mt-4 text-3xl font-bold">
            Institutional Commitment
          </h2>

          <p className="mt-4 max-w-4xl leading-8 text-white/80">
            SCF is committed to ethical operations, responsible leadership,
            transparent documentation, accountable use of resources, community
            participation, donor confidence, and sustainable humanitarian
            delivery across its intervention areas.
          </p>
        </section>
      </div>
    </main>
  );
}

