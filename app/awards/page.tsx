import Image from "next/image";
import Link from "next/link";
import { Award, Medal, ShieldCheck } from "lucide-react";

const awards = [
  {
    title: "Award of Honor",
    image: "/images/awards/award of honor 1.jpg",
    icon: Award,
  },
  {
    title: "Award of Honor II",
    image: "/images/awards/award of honor 2.jpg",
    icon: Award,
  },
  {
    title: "Award of Honor III",
    image: "/images/awards/award of honor 3.jpg",
    icon: Medal,
  },
  {
    title: "Award of Honor IV",
    image: "/images/awards/award of honor 4.jpg",
    icon: Medal,
  },
  {
    title: "Certificate of Recognition",
    image: "/images/awards/certificate of recognition.jpg",
    icon: ShieldCheck,
  },
  {
    title: "Peace Ambassador Recognition",
    image: "/images/awards/peace ambassador.jpg",
    icon: ShieldCheck,
  },
];

export default function AwardsPage() {
  return (
    <main className="min-h-screen bg-[#f8f5ef] px-6 py-12 text-[#062B5F] md:px-16 lg:px-24">
      <div className="mx-auto max-w-7xl">
        <Link href="/" className="font-semibold text-[#0B4EA2]">
          ? Back to Home
        </Link>

        <p className="mt-12 text-sm font-semibold uppercase tracking-[0.3em] text-[#B88A2E]">
          Awards & Recognition
        </p>

        <h1 className="mt-4 text-5xl font-bold">
          Honours, Certificates & Public Recognition
        </h1>

        <p className="mt-6 max-w-3xl text-lg leading-8 text-gray-700">
          These recognitions reflect Sarauniya Charity Foundation&apos;s visible
          contribution to humanitarian service, community development, peace,
          empowerment and support for vulnerable communities.
        </p>

        <div className="mt-14 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {awards.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="overflow-hidden rounded-3xl bg-white shadow-lg transition hover:-translate-y-1 hover:shadow-2xl"
              >
                <div className="relative h-80 bg-blue-50">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-contain p-4"
                  />
                </div>

                <div className="p-6">
                  <Icon className="h-8 w-8 text-[#B88A2E]" />

                  <h2 className="mt-4 text-2xl font-bold text-[#0B4EA2]">
                    {item.title}
                  </h2>

                  <p className="mt-3 leading-7 text-gray-600">
                    Recognition for service, impact and community support.
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </main>
  );
}
