import Link from "next/link";
import {
  Camera,
  Video,
  Mic,
  HeartHandshake,
  Newspaper,
  Award,
  Images,
  FileText,
} from "lucide-react";
import { mediaCategories } from "@/data/media";

const highlights = [
  {
    title: "Photo Gallery",
    description: "Browse selected photos from SCF humanitarian interventions.",
    href: "/gallery",
    icon: Images,
  },
  {
    title: "Videos",
    description: "Watch outreach videos, ceremonies, speeches, and project clips.",
    href: "/videos",
    icon: Video,
  },
  {
    title: "Beneficiary Stories",
    description: "Stories and feedback from people reached through SCF support.",
    href: "/impact-stories",
    icon: HeartHandshake,
  },
  {
    title: "Awards & Recognition",
    description: "Awards, certificates, and public recognition of SCF impact.",
    href: "/awards",
    icon: Award,
  },
];

export default function MediaPage() {
  return (
    <main className="min-h-screen bg-[#f8f5ef] px-6 py-12 text-[#062B5F] md:px-16 lg:px-24">
      <div className="mx-auto max-w-7xl">
        <Link href="/" className="font-semibold text-[#0B4EA2]">
          Back to Home
        </Link>

        <p className="mt-12 text-sm font-semibold uppercase tracking-[0.3em] text-[#B88A2E]">
          Media Centre
        </p>

        <h1 className="mt-4 text-4xl font-bold md:text-6xl">
          Stories, Photos, Videos and Impact Records
        </h1>

        <p className="mt-6 max-w-3xl text-lg leading-8 text-gray-700">
          Explore Sarauniya Charity Foundation&apos;s media archive, including
          project photos, outreach videos, award ceremonies, public speeches,
          beneficiary feedback, and impact stories.
        </p>

        <section className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {highlights.map(({ title, description, href, icon: Icon }) => (
            <Link
              key={title}
              href={href}
              className="rounded-3xl bg-white p-7 shadow-lg transition hover:-translate-y-1 hover:shadow-2xl"
            >
              <Icon className="h-9 w-9 text-[#B88A2E]" />

              <h2 className="mt-5 text-2xl font-bold text-[#0B4EA2]">
                {title}
              </h2>

              <p className="mt-4 leading-7 text-gray-600">
                {description}
              </p>

              <span className="mt-6 inline-block font-semibold text-[#B88A2E]">
                Open
              </span>
            </Link>
          ))}
        </section>

        <section className="mt-16 rounded-[2rem] bg-[#062B5F] p-8 text-white">
          <Camera className="h-10 w-10 text-[#B88A2E]" />

          <h2 className="mt-4 text-3xl font-bold">
            Media Categories
          </h2>

          <p className="mt-4 max-w-3xl leading-8 text-white/75">
            Media files are organized by intervention area so photos and videos
            can be replaced or expanded over time without restructuring the
            website.
          </p>

          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {mediaCategories.map((item) => (
              <div
                key={item.title}
                className="rounded-3xl bg-white/10 p-5"
              >
                <h3 className="font-bold text-[#B88A2E]">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-white/70">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-16 grid gap-8 lg:grid-cols-3">
          <div className="rounded-[2rem] bg-white p-8 shadow-xl">
            <Mic className="h-9 w-9 text-[#B88A2E]" />
            <h2 className="mt-4 text-2xl font-bold text-[#0B4EA2]">
              Speeches
            </h2>
            <p className="mt-4 leading-7 text-gray-600">
              Founder speeches and public messages will be added as official
              media files are organized.
            </p>
          </div>

          <div className="rounded-[2rem] bg-white p-8 shadow-xl">
            <Newspaper className="h-9 w-9 text-[#B88A2E]" />
            <h2 className="mt-4 text-2xl font-bold text-[#0B4EA2]">
              Latest Activities
            </h2>
            <p className="mt-4 leading-7 text-gray-600">
              New outreach activities and project updates will appear here as
              they are published.
            </p>
          </div>

          <div className="rounded-[2rem] bg-white p-8 shadow-xl">
            <FileText className="h-9 w-9 text-[#B88A2E]" />
            <h2 className="mt-4 text-2xl font-bold text-[#0B4EA2]">
              Reports
            </h2>
            <p className="mt-4 leading-7 text-gray-600">
              Annual reports and official project documents can be published in
              future updates.
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}
