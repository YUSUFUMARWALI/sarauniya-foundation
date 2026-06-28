import Link from "next/link";
import { Camera, Film, Images, Trophy } from "lucide-react";
import MediaGallery from "@/components/media/MediaGallery";

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
          Photos, Videos, Awards and Project Stories
        </h1>

        <p className="mt-6 max-w-4xl text-lg leading-8 text-gray-700">
          Explore Sarauniya Charity Foundation&apos;s media archive, including
          project photos, outreach videos, awards, events, before-and-after
          records, and community impact stories.
        </p>

        <section className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {[
            ["Photo Gallery", "Browse project images and field activities.", Images],
            ["Video Gallery", "Watch outreach clips and community stories.", Film],
            ["Before & After", "See transformation evidence from projects.", Camera],
            ["Awards", "View recognition, awards, and ceremonies.", Trophy],
          ].map(([title, text, Icon]) => (
            <div key={title as string} className="rounded-3xl bg-white p-7 shadow-lg">
              <Icon className="h-9 w-9 text-[#B88A2E]" />
              <h2 className="mt-5 text-xl font-bold text-[#0B4EA2]">
                {title as string}
              </h2>
              <p className="mt-3 leading-7 text-gray-600">{text as string}</p>
            </div>
          ))}
        </section>

        <MediaGallery />
      </div>
    </main>
  );
}
