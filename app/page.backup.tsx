"use client";

import Image from "next/image";
import Link from "next/link";

const links = [
  ["Home", "/"],
  ["About", "/about"],
  ["Founder", "/founder"],
  ["Leadership", "/leadership"],
  ["Programs", "/programs"],
  ["Projects", "/projects"],
  ["Gallery", "/gallery"],
  ["Impact Stories", "/impact-stories"],
  ["Awards", "/awards"],
  ["Contact", "/contact"],
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f8f5ef] text-[#062B5F]">
      <header className="sticky top-0 z-50 bg-white/90 shadow-sm backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/images/logo/logo.jpg"
              alt="Sarauniya Foundation Logo"
              width={48}
              height={48}
              className="rounded-full"
            />
            <span className="font-bold text-[#0B4EA2]">
              Sarauniya Foundation
            </span>
          </Link>

          <nav className="hidden gap-5 text-sm font-medium lg:flex">
            {links.map(([label, href]) => (
              <Link key={label} href={href} className="hover:text-[#B88A2E]">
                {label}
              </Link>
            ))}
          </nav>

          <Link
            href="/donate"
            className="rounded-full bg-[#B88A2E] px-5 py-2 text-sm font-semibold text-white"
          >
            Donate
          </Link>
        </div>
      </header>

      <section className="px-6 py-16 md:px-16 lg:px-24">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="font-semibold uppercase tracking-[0.3em] text-[#B88A2E]">
              Helping the Less Privileged
            </p>

            <h1 className="mt-4 text-5xl font-bold leading-tight md:text-7xl">
              Empowering Communities, Transforming Lives.
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-9 text-gray-700">
              Sarauniya Charity Foundation supports vulnerable communities
              through clean water, education, healthcare, empowerment, orphan
              support, relief aid, and community development.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/projects"
                className="rounded-full bg-[#0B4EA2] px-7 py-3 font-semibold text-white shadow-lg"
              >
                View Our Impact
              </Link>

              <Link
                href="/founder"
                className="rounded-full border border-[#0B4EA2] px-7 py-3 font-semibold text-[#0B4EA2]"
              >
                Meet the Founder
              </Link>
            </div>
          </div>

          <div className="rounded-[2rem] bg-white p-5 shadow-2xl">
            <Image
              src="/images/founder/founder.jpg"
              alt="Hajiya Rabiatu Umar Saidu"
              width={650}
              height={760}
              className="rounded-[1.5rem] scale-x-[-1]"
            />
          </div>
        </div>
      </section>
    </main>
  );
}

