import Link from "next/link";

const trustees = [
  ["Haj. Rabiatu Umar Saidu", "President / Founder"],
  ["Zainab Abubakar", "Trustee"],
  ["Fadila Umar Saeedu", "Trustee"],
  ["Amb. Yusuf Yau", "Secretary"],
];

export default function TrusteesPage() {
  return (
    <main className="min-h-screen bg-[#f8f5ef] px-6 py-12 text-[#062B5F] md:px-16 lg:px-24">
      <div className="mx-auto max-w-7xl">
        <Link href="/" className="text-sm font-semibold text-[#0B4EA2]">Back to Home</Link>
        <h1 className="mt-10 text-4xl font-bold md:text-6xl">Board of Trustees</h1>
        <div className="mt-10 grid gap-6 md:grid-cols-4">
          {trustees.map(([name, role]) => (
            <div key={name} className="rounded-3xl bg-white p-6 text-center shadow-lg">
              <div className="mx-auto mb-5 flex h-24 w-24 items-center justify-center rounded-full bg-[#0B4EA2] text-3xl font-bold text-[#B88A2E]">
                {name.charAt(0)}
              </div>
              <h2 className="font-bold">{name}</h2>
              <p className="mt-2 text-sm text-gray-600">{role}</p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}

