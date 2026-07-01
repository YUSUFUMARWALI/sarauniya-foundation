import Link from "next/link";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#f8f5ef] px-6 py-12 text-[#062B5F] md:px-16 lg:px-24">
      <div className="mx-auto max-w-5xl">
        <Link href="/" className="text-sm font-semibold text-[#0B4EA2]">
           Back to Home
        </Link>

        <p className="mt-12 text-sm font-semibold uppercase tracking-[0.3em] text-[#b88a2e]">
          About SCF
        </p>

        <h1 className="mt-4 text-4xl font-bold md:text-6xl">
          Sarauniya Charity Foundation
        </h1>

        <p className="mt-8 text-lg leading-9 text-gray-700">
          Sarauniya Charity Foundation is a non-governmental organization
          registered under the CAMA Act with registration number RC:182958.
          SCF provides access to safe drinking water and sanitation, assistance
          to the less privileged, women and youth empowerment, community
          projects, advocacy programs, free medical outreach, capacity building,
          and research.
        </p>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          <div className="rounded-3xl bg-white p-8 shadow-lg">
            <h2 className="text-2xl font-bold text-[#0B4EA2]">Vision</h2>
            <p className="mt-4 leading-8 text-gray-600">
              To empower vulnerable persons with specific needs and improve
              their living conditions and that of their communities.
            </p>
          </div>

          <div className="rounded-3xl bg-white p-8 shadow-lg">
            <h2 className="text-2xl font-bold text-[#0B4EA2]">Mission</h2>
            <p className="mt-4 leading-8 text-gray-600">
              Improving the social and living standards of orphans, widows,
              less privileged people, vulnerable groups, and elderly people in
              the society.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}

