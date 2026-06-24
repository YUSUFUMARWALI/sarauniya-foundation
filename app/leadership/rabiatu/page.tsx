import Link from "next/link";

export default function RabiatuPage() {
  return (
    <main className="min-h-screen bg-[#f8f5ef] px-6 py-12 text-[#062B5F] md:px-16 lg:px-24">
      <div className="mx-auto max-w-4xl">
        <Link href="/leadership" className="font-semibold text-[#0B4EA2]">
          Back to Leadership
        </Link>

        <h1 className="mt-10 text-4xl font-bold text-[#0B4EA2]">
          HAJ. RABIATU UMAR SAIDU
        </h1>

        <p className="mt-4 text-lg text-gray-700">
          President and Founder, Sarauniya Charity Foundation.
        </p>
      </div>
    </main>
  );
}
