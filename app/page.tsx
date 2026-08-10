"use client";

import Image from "next/image";
import Link from "next/link";
import {
  Droplets,
  GraduationCap,
  HeartHandshake,
  Stethoscope,
  Users,
  MapPin,
  Menu,
} from "lucide-react";
import HomeHeroSlideshow from "@/components/home/HomeHeroSlideshow";
import { newsItems } from "@/data/news";

const links = [
  ["Home", "/"],
  ["About", "/about"],
  ["Founder", "/founder"],
  ["Leadership", "/leadership"],
  ["Programs", "/programs"],
  ["Media Centre", "/media"],
  ["News", "/news"],
  ["Impact", "/impact"],
  ["Reports", "/reports"],
  ["Governance", "/governance"],
  ["Transparency", "/transparency"],
  ["Contact", "/contact"],
  ["Donate", "/donate"],
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f8f5ef] text-[#062B5F]">
      <header className="sticky top-0 z-50 bg-white/95 shadow-sm backdrop-blur">
        <div className="mx-auto max-w-7xl px-6 py-4">
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

          <div className="mt-4 flex justify-end border-t border-blue-100 pt-4">
  <details className="relative">
    <summary className="flex cursor-pointer list-none items-center gap-2 rounded-full bg-[#062B5F] px-5 py-3 text-sm font-semibold text-white shadow-md transition hover:bg-[#0B4EA2]">
      <Menu className="h-5 w-5" />
      Menu
    </summary>

    <div className="absolute right-0 z-50 mt-3 w-64 overflow-hidden rounded-2xl border border-gray-200 bg-white p-2 shadow-2xl">
      {links.map(([label, href]) => (
        <Link
          key={label}
          href={href}
          className="block rounded-xl px-4 py-3 text-sm font-medium text-[#062B5F] transition hover:bg-[#f8f5ef] hover:text-[#B88A2E]"
        >
          {label}
        </Link>
      ))}
    </div>
  </details>
</div>

          
        </div>
      </header>

      <section className="relative min-h-[720px] overflow-hidden">
    <div className="absolute inset-0 z-0">
      <HomeHeroSlideshow />
    </div>

    <div className="absolute inset-0 z-10 bg-[#062B5F]/55" />

    <div className="relative z-20 mx-auto flex min-h-[720px] max-w-7xl items-center px-6 py-20 md:px-16 lg:px-24">
      <div className="max-w-5xl text-white">
        <p className="font-semibold uppercase tracking-[0.3em] text-[#B88A2E]">
          Helping the Less Privileged
        </p>

        <h1 className="mt-4 text-5xl font-bold leading-tight md:text-7xl">
          Empowering Communities, Transforming Lives.
        </h1>

        <p className="mt-6 max-w-3xl text-lg leading-9 text-white/90 md:text-xl">
          Sarauniya Charity Foundation supports vulnerable communities through
          clean water, education, healthcare, women and youth empowerment,
          orphan support, emergency relief, and sustainable community development.
        </p>

        <div className="mt-8 grid max-w-4xl gap-5 md:grid-cols-2">
          <div className="rounded-3xl border border-white/20 bg-white/10 p-6 shadow-xl backdrop-blur-md">
            <h2 className="text-xl font-bold text-[#B88A2E]">
              Mission
            </h2>

            <p className="mt-3 leading-7 text-white/85">
              To empower marginalized communities in Nigeria by providing access
              to healthcare, education, economic opportunities, clean water,
              sanitation, and essential humanitarian services.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-[#062B5F]/75 p-6 text-white shadow-xl backdrop-blur-md">
            <h2 className="text-xl font-bold text-[#B88A2E]">
              Vision
            </h2>

            <p className="mt-3 leading-7 text-white/80">
              A Nigeria where every individual, regardless of background, has the
              opportunity to live a healthy, fulfilling, and dignified life.
            </p>
          </div>
        </div>

        <div className="mt-8 flex flex-wrap gap-4">
          <Link
            href="/programs"
            className="rounded-full bg-[#0B4EA2] px-7 py-3 font-semibold text-white shadow-lg transition hover:bg-[#083d82]"
          >
            Explore Programs
          </Link>

          <Link
            href="/donate"
            className="rounded-full border border-white/50 bg-white/10 px-7 py-3 font-semibold text-white backdrop-blur-sm transition hover:bg-white hover:text-[#0B4EA2]"
          >
            Support Our Mission
          </Link>
        </div>
      </div>
    </div>
  </section>
  <section className="bg-white px-6 py-14 md:px-16 lg:px-24">
        <div className="mx-auto grid max-w-7xl gap-5 md:grid-cols-3 lg:grid-cols-6">
          {[
            ["3,246+", "Wells Constructed", Droplets],
            ["720+", "Boreholes Built", Droplets],
            ["5,000+", "Scholarships", GraduationCap],
            ["20,000+", "Medical Beneficiaries", Stethoscope],
            ["6,500+", "Widows Empowered", HeartHandshake],
            ["7,000+", "Youth Empowered", Users],
          ].map(([number, label, Icon]) => (
            <div key={label as string} className="rounded-3xl bg-[#f8f5ef] p-6 text-center shadow-sm">
              <Icon className="mx-auto mb-3 h-7 w-7 text-[#B88A2E]" />
              <p className="text-3xl font-bold text-[#0B4EA2]">{number as string}</p>
              <p className="mt-2 text-sm text-gray-600">{label as string}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="px-6 py-20 md:px-16 lg:px-24">
    <div className="mx-auto max-w-7xl">
      <div className="mx-auto max-w-3xl text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#B88A2E]">
          What We Do
        </p>

        <h2 className="mt-3 text-4xl font-bold text-[#062B5F] md:text-5xl">
          Featured Programs
        </h2>

        <p className="mt-5 text-lg leading-8 text-gray-600">
          Our programs focus on practical support that improves wellbeing,
          creates opportunities, and strengthens vulnerable communities.
        </p>
      </div>

      <div className="mt-12 grid gap-7 md:grid-cols-3">
        {[
          [
            "Water & Sanitation",
            "3,246 wells, 720 boreholes, and 1,000 renovated boreholes.",
            Droplets,
          ],
          [
            "Quality Education",
            "Scholarships and learning support for underserved communities.",
            GraduationCap,
          ],
          [
            "Medical Outreach",
            "Free healthcare outreach and support for hard-to-reach communities.",
            Stethoscope,
          ],
        ].map(([title, text, Icon]) => (
          <Link
            key={title as string}
            href="/programs"
            className="group relative overflow-hidden rounded-[2rem] border border-blue-100 bg-white p-8 shadow-lg transition duration-300 hover:-translate-y-2 hover:shadow-2xl"
          >
            <div className="absolute right-0 top-0 h-24 w-24 rounded-bl-full bg-[#f8f5ef] transition duration-300 group-hover:h-32 group-hover:w-32" />

            <div className="relative">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#062B5F] shadow-md">
                <Icon className="h-7 w-7 text-[#B88A2E]" />
              </div>

              <h3 className="mt-7 text-2xl font-bold text-[#0B4EA2]">
                {title as string}
              </h3>

              <p className="mt-4 leading-7 text-gray-600">
                {text as string}
              </p>

              <span className="mt-7 inline-flex items-center gap-2 font-semibold text-[#B88A2E] transition group-hover:gap-3">
                Explore Program
                <span aria-hidden="true">→</span>
              </span>
            </div>
          </Link>
        ))}
      </div>

      <div className="mt-10 text-center">
        <Link
          href="/programs"
          className="inline-flex rounded-full bg-[#0B4EA2] px-7 py-3 font-semibold text-white shadow-md transition hover:bg-[#083d82]"
        >
          View All Programs
        </Link>
      </div>
    </div>
  </section>
  <section className="bg-[#062B5F] px-6 py-16 text-white md:px-16 lg:px-24">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#B88A2E]">
            Our Reach Across Nigeria
          </p>

          <h2 className="mt-4 text-4xl font-bold">
            Reaching hard-to-reach communities
          </h2>

          <p className="mt-5 max-w-3xl leading-8 text-white/75">
            SCF interventions have reached communities across Northern Nigeria and beyond, including Bauchi, Kano, Nasarawa, Jigawa, Maiduguri in Borno State, and Damagaram in Niger Republic.
          </p>

          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {[
              ["Bauchi State", "Flood response, community development and founder heritage"],
              ["Kano State", "Community support and outreach activities"],
              ["Borno State", "Maiduguri flood response and humanitarian aid"],
              ["Nasarawa State", "Healthcare and girls support outreach"],
              ["Jigawa State", "Flood relief and emergency aid"],
              ["Damagaram, Niger Republic", "Food donations to less privileged communities"],
            ].map(([state, detail]) => (
              <div key={state} className="rounded-3xl bg-white/10 p-6">
                <MapPin className="mb-4 h-7 w-7 text-[#B88A2E]" />
                <h3 className="text-xl font-bold">{state}</h3>
                <p className="mt-3 text-sm leading-6 text-white/70">{detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>      <section className="px-6 py-16 md:px-16 lg:px-24">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-center text-4xl font-bold">
            Impact Stories
          </h2>

          <div className="mt-10 grid gap-6 md:grid-cols-3">

            <div className="rounded-3xl bg-white p-6 shadow-lg">
              <h3 className="text-xl font-bold text-[#0B4EA2]">
                Aisha Salisu
              </h3>
              <p className="mt-4 text-gray-600">
                A former out-of-school child whose life was transformed through educational support.
              </p>
            </div>

            <div className="rounded-3xl bg-white p-6 shadow-lg">
              <h3 className="text-xl font-bold text-[#0B4EA2]">
                Hamsatu Musa
              </h3>
              <p className="mt-4 text-gray-600">
                Beneficiary of SCF emergency support during the Maiduguri flood disaster.
              </p>
            </div>

            <div className="rounded-3xl bg-white p-6 shadow-lg">
              <h3 className="text-xl font-bold text-[#0B4EA2]">
                Orphans of Azare
              </h3>
              <p className="mt-4 text-gray-600">
                Ongoing educational and welfare support for vulnerable orphaned children.
              </p>
            </div>

          </div>

          <div className="mt-8 text-center">
            <Link
              href="/impact-stories"
              className="rounded-full bg-[#0B4EA2] px-6 py-3 font-semibold text-white"
            >
              View All Stories
            </Link>
          </div>
        </div>
      </section>        <section className="bg-[#062B5F] px-6 py-20 text-white md:px-16 lg:px-24">
    <div className="mx-auto max-w-7xl">
      <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#B88A2E]">
            Stay Updated
          </p>

          <h2 className="mt-3 text-4xl font-bold md:text-5xl">
            Latest News & Updates
          </h2>

          <p className="mt-4 max-w-2xl leading-8 text-white/70">
            Discover the latest activities, humanitarian initiatives and community
            updates from Sarauniya Charity Foundation.
          </p>
        </div>

        <Link
          href="/news"
          className="inline-flex w-fit rounded-full border border-white/25 px-6 py-3 font-semibold text-white transition hover:border-[#B88A2E] hover:bg-[#B88A2E]"
        >
          View All News
        </Link>
      </div>

      <div className="mt-12 grid gap-7 md:grid-cols-2 lg:grid-cols-3">
        {newsItems.slice(0, 6).map((item) => (
          <article
            key={item.slug}
            className="overflow-hidden rounded-3xl border border-white/10 bg-white/10 shadow-xl backdrop-blur-sm transition hover:-translate-y-1 hover:bg-white/[0.14]"
          >
            <Link href={`/news/${item.slug}`} className="block">
              <div className="relative aspect-[16/10] overflow-hidden bg-[#041f45]">
                {item.mediaType === "image" && item.media ? (
                  <Image
                    src={item.media}
                    alt={item.title}
                    fill
                    className="object-cover transition duration-500 hover:scale-105"
                  />
                ) : (
                  <div className="flex h-full items-center justify-center text-sm text-white/50">
                    Sarauniya Charity Foundation
                  </div>
                )}

                <div className="absolute inset-0 bg-gradient-to-t from-[#062B5F]/70 via-transparent to-transparent" />
              </div>

              <div className="p-7">
                <div className="flex items-center justify-between gap-3">
                  <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#B88A2E]">
                    {item.platform}
                  </span>

                  <span className="text-xs text-white/50">
                    {item.date}
                  </span>
                </div>

                <h3 className="mt-4 text-2xl font-bold leading-tight">
                  {item.title}
                </h3>

                <p className="mt-4 leading-7 text-white/70">
                  {item.excerpt}
                </p>

                <span className="mt-6 inline-flex font-semibold text-[#B88A2E]">
                  Read More →
                </span>
              </div>
            </Link>
          </article>
        ))}
      </div>
    </div>
  </section>
<section className="bg-[#f8f5ef] px-6 py-20 md:px-16 lg:px-24">
    <div className="mx-auto max-w-7xl">
      <div className="mx-auto max-w-3xl text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#B88A2E]">
          Recognition
        </p>

        <h2 className="mt-3 text-4xl font-bold text-[#062B5F] md:text-5xl">
          Awards and Recognition
        </h2>

        <p className="mt-5 leading-8 text-gray-600">
          Sarauniya Charity Foundation's humanitarian service, community
          impact and contributions to development have received recognition
          from partners and stakeholders.
        </p>
      </div>

      <div className="mt-12 grid gap-6 md:grid-cols-3">
        <div className="rounded-3xl border border-[#B88A2E]/20 bg-white p-8 shadow-lg transition hover:-translate-y-1 hover:shadow-xl">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#B88A2E]/10 text-2xl">
            🏆
          </div>

          <h3 className="mt-6 text-xl font-bold text-[#0B4EA2]">
            Award of Honor
          </h3>

          <p className="mt-3 leading-7 text-gray-600">
            Recognition for humanitarian service and community impact.
          </p>
        </div>

        <div className="rounded-3xl border border-[#B88A2E]/20 bg-white p-8 shadow-lg transition hover:-translate-y-1 hover:shadow-xl">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#B88A2E]/10 text-2xl">
            🎖️
          </div>

          <h3 className="mt-6 text-xl font-bold text-[#0B4EA2]">
            Certificate of Recognition
          </h3>

          <p className="mt-3 leading-7 text-gray-600">
            Honouring SCF contributions to charity, advocacy and development.
          </p>
        </div>

        <div className="rounded-3xl border border-[#B88A2E]/20 bg-white p-8 shadow-lg transition hover:-translate-y-1 hover:shadow-xl">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#B88A2E]/10 text-2xl">
            ⭐
          </div>

          <h3 className="mt-6 text-xl font-bold text-[#0B4EA2]">
            Distinguished Merit Award 2025
          </h3>

          <p className="mt-3 leading-7 text-gray-600">
            Awarded by the Sir Ahmadu Bello Memorial Foundation.
          </p>
        </div>
      </div>

      <div className="mt-10 text-center">
        <Link
          href="/awards"
          className="inline-flex rounded-full bg-[#062B5F] px-7 py-3 font-semibold text-white shadow-lg transition hover:bg-[#0B4EA2]"
        >
          View All Awards
        </Link>
      </div>
    </div>
  </section>
</main>
  );
}

















