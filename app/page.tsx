"use client";

import Image from "next/image";
import Link from "next/link";
import { Droplets, GraduationCap, HeartHandshake, Stethoscope, Users, MapPin } from "lucide-react";
import HomeHeroSlideshow from "@/components/home/HomeHeroSlideshow";

const links = [
  ["Home", "/"],
  ["About", "/about"],
  ["Founder", "/founder"],
  ["Leadership", "/leadership"],
  ["Programs", "/programs"],
  ["Media Centre", "/media"],
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

          <nav className="mt-4 flex flex-wrap justify-center gap-4 border-t border-blue-100 pt-4 text-sm font-medium">
            {links.map(([label, href]) => (
              <Link key={label} href={href} className="hover:text-[#B88A2E]">
                {label}
              </Link>
            ))}
          </nav>

          
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
              Sarauniya Charity Foundation supports vulnerable communities through
              clean water, education, healthcare, women and youth empowerment,
              orphan support, emergency relief, and sustainable community development.
            </p>

            <div className="mt-8 grid gap-5 md:grid-cols-2">
              <div className="rounded-3xl bg-white p-6 shadow-lg">
                <h2 className="text-xl font-bold text-[#0B4EA2]">Mission</h2>
                <p className="mt-3 leading-7 text-gray-600">
                  To empower marginalized communities in Nigeria by providing access
                  to healthcare, education, economic opportunities, clean water,
                  sanitation, and essential humanitarian services.
                </p>
              </div>

              <div className="rounded-3xl bg-[#062B5F] p-6 text-white shadow-lg">
                <h2 className="text-xl font-bold text-[#B88A2E]">Vision</h2>
                <p className="mt-3 leading-7 text-white/75">
                  A Nigeria where every individual, regardless of background, has the
                  opportunity to live a healthy, fulfilling, and dignified life.
                </p>
              </div>
            </div>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/programs"
                className="rounded-full bg-[#0B4EA2] px-7 py-3 font-semibold text-white shadow-lg"
              >
                Explore Programs
              </Link>

              <Link
                href="/donate"
                className="rounded-full border border-[#0B4EA2] px-7 py-3 font-semibold text-[#0B4EA2]"
              >
                Support Our Mission
              </Link>
            </div>
          </div>

          <HomeHeroSlideshow />
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

      <section className="px-6 py-16 md:px-16 lg:px-24">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-center text-4xl font-bold">Featured Programs</h2>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {[
              ["Water & Sanitation", "3,246 wells, 720 boreholes, and 1,000 renovated boreholes.", Droplets],
              ["Quality Education", "Scholarships and learning support for underserved communities.", GraduationCap],
              ["Medical Outreach", "Free healthcare outreach and support for hard-to-reach communities.", Stethoscope],
            ].map(([title, text, Icon]) => (
              <Link key={title as string} href="/programs" className="rounded-3xl bg-white p-8 shadow-lg transition hover:-translate-y-1 hover:shadow-2xl">
                <Icon className="h-9 w-9 text-[#B88A2E]" />
                <h3 className="mt-5 text-2xl font-bold text-[#0B4EA2]">{title as string}</h3>
                <p className="mt-4 leading-7 text-gray-600">{text as string}</p>
                <span className="mt-5 inline-block font-semibold text-[#B88A2E]">Open</span>
              </Link>
            ))}
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
      </section>      <section className="bg-white px-6 py-16 md:px-16 lg:px-24">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-center text-4xl font-bold">
            Awards and Recognition
          </h2>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            <div className="rounded-3xl bg-[#f8f5ef] p-8 shadow-lg">
              <h3 className="font-bold text-[#0B4EA2]">
                Award of Honor
              </h3>
              <p className="mt-3 text-gray-600">
                Recognition for humanitarian service and community impact.
              </p>
            </div>

            <div className="rounded-3xl bg-[#f8f5ef] p-8 shadow-lg">
              <h3 className="font-bold text-[#0B4EA2]">
                Certificate of Recognition
              </h3>
              <p className="mt-3 text-gray-600">
                Honouring SCF contributions to charity, advocacy and development.
              </p>
            </div>

            <div className="rounded-3xl bg-[#f8f5ef] p-8 shadow-lg">
              <h3 className="font-bold text-[#0B4EA2]">
                Distinguished Merit Award 2025
              </h3>
              <p className="mt-3 text-gray-600">
                Awarded by the Sir Ahmadu Bello Memorial Foundation.
              </p>
            </div>
          </div>

          <div className="mt-8 text-center">
            <Link
              href="/awards"
              className="rounded-full bg-[#B88A2E] px-6 py-3 font-semibold text-white"
            >
              View All Awards
            </Link>
          </div>
        </div>
      </section>



    </main>
  );
}













