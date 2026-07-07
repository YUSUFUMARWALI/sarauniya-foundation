import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowUpRight,
  CalendarDays,
  Newspaper,
} from "lucide-react";
import {
  FaFacebookF,
  FaInstagram,
  FaTiktok,
} from "react-icons/fa6";

import { newsItems } from "@/data/news";

const socials = [
  {
    name: "Instagram",
    href: "https://www.instagram.com/sarauniyacfou",
    icon: FaInstagram,
  },
  {
    name: "Facebook",
    href: "https://www.facebook.com/share/1c2hNGHA8r/",
    icon: FaFacebookF,
  },
  {
    name: "TikTok",
    href: "https://www.tiktok.com/@sarauniyacfou",
    icon: FaTiktok,
  },
];

export default function NewsPage() {
  return (
    <main className="min-h-screen bg-[#f8f5ef] px-6 py-12 text-[#062B5F] md:px-16 lg:px-24">
      <div className="mx-auto max-w-7xl">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm font-semibold text-[#0B4EA2]"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Home
        </Link>

        <section className="mt-12 rounded-[2rem] bg-[#062B5F] p-8 text-white shadow-xl md:p-12">
          <p className="text-sm font-bold uppercase tracking-[0.3em] text-[#B88A2E]">
            Media Centre
          </p>

          <h1 className="mt-4 max-w-4xl text-4xl font-bold md:text-6xl">
            Latest News & Social Updates
          </h1>

          <p className="mt-6 max-w-3xl leading-8 text-white/75">
            Follow Sarauniya Charity Foundation&apos;s humanitarian programs,
            community activities, field projects and organizational updates.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            {socials.map(({ name, href, icon: Icon }) => (
              <a
                key={name}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-5 py-3 font-semibold transition hover:bg-white/20"
              >
                <Icon className="h-5 w-5 text-[#B88A2E]" />
                {name}
                <ArrowUpRight className="h-4 w-4" />
              </a>
            ))}
          </div>
        </section>

        {newsItems.length > 0 ? (
          <section className="mt-12 grid gap-7 md:grid-cols-2 lg:grid-cols-3">
            {newsItems.map((item) => (
              <article
                key={item.slug}
                className="overflow-hidden rounded-3xl bg-white shadow-lg"
              >
                {item.mediaType === "image" && item.media && (
                  <div className="relative h-64">
                    <Image
                      src={item.media}
                      alt={item.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                )}

                {item.mediaType === "video" && item.media && (
                  <video
                    controls
                    preload="metadata"
                    className="h-64 w-full bg-black object-cover"
                  >
                    <source src={item.media} />
                  </video>
                )}

                <div className="p-6">
                  <div className="flex items-center justify-between gap-4 text-sm">
                    <span className="font-semibold text-[#B88A2E]">
                      {item.platform}
                    </span>

                    <span className="flex items-center gap-2 text-gray-500">
                      <CalendarDays className="h-4 w-4" />
                      {item.date}
                    </span>
                  </div>

                  <h2 className="mt-4 text-2xl font-bold">{item.title}</h2>

                  <p className="mt-4 leading-7 text-gray-600">
                    {item.excerpt}
                  </p>

                  {item.originalUrl && (
                    <a
                      href={item.originalUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-6 inline-flex items-center gap-2 font-semibold text-[#0B4EA2]"
                    >
                      View Original Update
                      <ArrowUpRight className="h-4 w-4" />
                    </a>
                  )}
                </div>
              </article>
            ))}
          </section>
        ) : (
          <section className="mt-12 rounded-[2rem] border border-blue-100 bg-white p-10 text-center shadow-lg">
            <Newspaper className="mx-auto h-12 w-12 text-[#B88A2E]" />

            <h2 className="mt-5 text-3xl font-bold">News Feed Coming Online</h2>

            <p className="mx-auto mt-4 max-w-2xl leading-8 text-gray-600">
              Latest field updates, humanitarian activities and social media
              publications will appear here as the Sarauniya Charity Foundation
              news feed is expanded.
            </p>
          </section>
        )}
      </div>
    </main>
  );
}
