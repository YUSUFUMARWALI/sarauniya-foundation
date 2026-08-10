import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, ArrowUpRight, Play } from "lucide-react";
import { youtubeVideos } from "@/data/youtubeVideos";

export default function VideosPage() {
  return (
    <main className="min-h-screen bg-[#06101f] text-white">
      <div className="mx-auto max-w-7xl px-5 py-8 md:px-8 md:py-12">

        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm font-semibold text-white/70 transition hover:text-white"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Home
        </Link>

        <section className="mt-10 rounded-[2rem] border border-white/10 bg-[#0a1b31] p-7 shadow-2xl md:p-12">
          <p className="text-sm font-bold uppercase tracking-[0.3em] text-[#B88A2E]">
            Media Centre
          </p>

          <h1 className="mt-4 text-4xl font-bold tracking-tight md:text-6xl">
            Videos & Stories
          </h1>

          <p className="mt-5 max-w-3xl text-base leading-8 text-white/65 md:text-lg">
            Explore stories, activities and humanitarian work from Sarauniya
            Charity Foundation through our YouTube videos and Shorts.
          </p>

          <a
            href="https://youtube.com/@sarauniyacfou"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-7 inline-flex items-center gap-2 rounded-full bg-[#B88A2E] px-6 py-3 font-semibold text-white transition hover:bg-[#9d7424]"
          >
            Visit YouTube Channel
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </section>

        <section className="mt-12">
          <div className="mb-7">
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#B88A2E]">
              Latest Video Stories
            </p>
            <h2 className="mt-2 text-3xl font-bold md:text-4xl">
              From the Field
            </h2>
          </div>

          <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
            {youtubeVideos.map((video, index) => (
              <a
                key={video.id}
                href={`https://www.youtube.com/watch?v=${video.id}`}
                target="_blank"
                rel="noopener noreferrer"
                className="group overflow-hidden rounded-3xl border border-white/10 bg-[#0a1b31] shadow-xl transition duration-300 hover:-translate-y-1 hover:border-[#B88A2E]/50"
              >
                <div className="relative aspect-video overflow-hidden bg-black">
                  <Image
                    src={`https://i.ytimg.com/vi/${video.id}/hqdefault.jpg`}
                    alt={`Sarauniya Charity Foundation ${video.type.toLowerCase()} ${index + 1}`}
                    fill
                    className="object-cover transition duration-500 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />

                  <div className="absolute inset-0 bg-black/20 transition group-hover:bg-black/35" />

                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="flex h-16 w-16 items-center justify-center rounded-full bg-[#FF0000] shadow-2xl transition duration-300 group-hover:scale-110">
                      <Play
                        className="ml-1 h-7 w-7 fill-white text-white"
                      />
                    </span>
                  </div>

                  <span className="absolute left-4 top-4 rounded-full bg-black/70 px-3 py-1 text-xs font-bold uppercase tracking-wider text-white backdrop-blur-sm">
                    {video.type}
                  </span>
                </div>

                <div className="p-5">
                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#B88A2E]">
                    Sarauniya Charity Foundation
                  </p>

                  <h3 className="mt-2 text-lg font-bold text-white">
                    {video.type === "Short"
                      ? "SCF Community Short"
                      : "SCF Video Story"}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-white/55">
                    Watch this Sarauniya Charity Foundation story on YouTube.
                  </p>

                  <span className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-white">
                    Watch on YouTube
                    <ArrowUpRight className="h-4 w-4 text-[#B88A2E]" />
                  </span>
                </div>
              </a>
            ))}
          </div>
        </section>

      </div>
    </main>
  );
}
