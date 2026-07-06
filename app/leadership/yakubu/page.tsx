import Link from "next/link";

export default function YakubuPage() {
  return (
    <main className="min-h-screen bg-[#f8f5ef] px-6 py-12 text-[#062B5F] md:px-16 lg:px-24">
      <div className="mx-auto max-w-4xl">
        <Link href="/leadership" className="text-sm font-semibold text-[#0B4EA2]">
          Back to Leadership
        </Link>

        <p className="mt-12 text-sm font-semibold uppercase tracking-[0.3em] text-[#B88A2E]">
          Board of Trustees
        </p>

        <h1 className="mt-4 text-4xl font-bold md:text-6xl">
          Hon. Yakubu Abubakar
        </h1>

        <p className="mt-4 text-xl font-semibold text-[#B88A2E]">
          Secretary
        </p>

        <p className="mt-8 leading-8 text-gray-700">
          Hon. Yakubu Abubakar serves as Secretary on the Board of Trustees of Sarauniya Charity Foundation.
        </p>
      </div>
    </main>
  );
}
