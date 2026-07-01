"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Crown } from "lucide-react";

const titles = [
  "Fulani", "Gimbiya", "Sarauniya", "Garkuwa", "Waziriya", "Jaruma",
  "Sadaukiya", "Innaworo", "Alkyabba", "Zinariya", "Uwar Marayu Arewa",
];

export default function FounderPage() {
  const [open, setOpen] = useState(false);

  return (
    <main className="min-h-screen bg-[#f8f5ef] px-6 py-12 text-[#062B5F] md:px-16 lg:px-24">
      <div className="mx-auto max-w-7xl">
        <Link href="/" className="font-semibold text-[#0B4EA2]">
          Back to Home
        </Link>

        <section className="mt-12 grid gap-10 lg:grid-cols-2 lg:items-center">
          <Image
            src="/images/founder/founder.jpg"
            alt="Hajiya Rabiatu Umar Saidu"
            width={480}
            height={600}
            className="mx-auto rounded-[2rem] shadow-2xl scale-x-[-1]"
          />

          <div>
            <p className="font-semibold uppercase tracking-[0.3em] text-[#B88A2E]">
              Founder and President
            </p>

            <h1 className="mt-4 text-4xl font-bold md:text-5xl">
              Hajiya Rabiatu Umar Saidu
            </h1>

            <p className="mt-6 text-base leading-7 text-gray-700">
              Hajiya Rabiatu Umar Saidu, the founder of the Sarauniya Charity
              Foundation, is a dynamic and visionary leader in the community
              service development and humanitarian intervention sectors. She
              hails from the royal family of Bauchi State in Nigeria.
            </p>

            <button
              onClick={() => setOpen(!open)}
              className="mt-6 rounded-full bg-[#0B4EA2] px-6 py-3 font-semibold text-white"
            >
              {open ? "Show Less" : "Read More"}
            </button>
          </div>
        </section>

        {open && (
          <section className="mt-12 rounded-3xl bg-white p-8 shadow-lg">
            <h2 className="text-3xl font-bold text-[#0B4EA2]">
              About The Founder
            </h2>

            <div className="mt-6 space-y-4 text-base leading-7 text-gray-700">
              <p>
                Mrs. Saidu is an active member of various women and Charity
                support groups and is known for her dedication to community
                service and her passion for empowering women, youth, and social
                development.
              </p>

              <p>
                She is the founder of several organizations, including the Women
                Traditional Title Holders of Nigeria, the Sarauniya Charity
                Foundation (her NGO), and the Association for the Support of
                Unemployed Women.
              </p>

              <p>
                The successful business ventures of Rabiatu Umar Saidu, the
                founder of Sarauniya Charity Foundation and CEO of various
                companies, are a testament to her strong entrepreneurial spirit
                and unwavering dedication.
              </p>

              <p>
                The funds for her businesses are sourced from a combination of
                personal investments, partnerships, and successful business
                operations. She has established partnerships with companies in
                Dubai, Saudi Arabia, Turkey, China, and India, which have
                contributed to the growth and sustainability of her businesses.
              </p>

              <p>
                Additionally, her companies have consistently generated profits
                and have been reinvested to further strengthen the foundation of
                her business ventures. These sources of funds have allowed
                Rabiatu Umar Saidu to not only grow her own businesses but also
                contribute to her humanitarian efforts through her NGO,
                Sarauniya Charity Foundation (SCF).
              </p>

              <p>
                Mrs. Saidu is a dedicated leader and philanthropist who has made
                a significant impact in her community. She continues to work
                tirelessly to improve the lives of those around her, and her
                passion and commitment to making a positive difference inspire
                those around her.
              </p>
            </div>

            <h2 className="mt-10 text-3xl font-bold text-[#0B4EA2]">
              Message From The Founder
            </h2>

            <div className="mt-6 space-y-4 text-base leading-7 text-gray-700">
              <p>
                The World and humanity has a story of challenges that has
                outlived our dear existence. Yet, the fact remains that, we, in
                the development sector have continued to commit our efforts to
                renewing the hope of the most vulnerable in our societies.
              </p>

              <p>
                Our burning desire remains the collective will of all of us, the
                stakeholders to go on and tackle those problems, especially in
                hard-to-reach communities.
              </p>

              <p>
                We will focus on the most immediate issues in particular because
                we think they are the biggest barriers that prevent people from
                making the most of their lives.
              </p>

              <p>
                We will continuously bring innovative ideas that could remove
                these barriers: new empowerment techniques to help women grow
                and attain self-sufficiency, new methods to help easier access
                to medical healthcare, water, sanitation, and hygiene, assist
                school-age children in their education (more especially
                girl-child) and the youth in human capacity development.
              </p>
            </div>            <div className="mt-10 grid gap-6 md:grid-cols-2">
              <div className="rounded-3xl bg-[#f8f5ef] p-6">
                <h3 className="text-2xl font-bold text-[#0B4EA2]">Vision</h3>
                <p className="mt-4 leading-7 text-gray-700">
                  An empowered persons with specific needs (vulnerable) with
                  improved living conditions and that of their communities.
                </p>
              </div>

              <div className="rounded-3xl bg-[#f8f5ef] p-6">
                <h3 className="text-2xl font-bold text-[#0B4EA2]">Mission</h3>
                <p className="mt-4 leading-7 text-gray-700">
                  Improving the social and living standard of orphans, widows,
                  less-privileged, vulnerable as well as octogenarian in the
                  society.
                </p>
              </div>
            </div>

            <div className="mt-8 rounded-3xl bg-[#062B5F] p-6 text-white">
              <h3 className="text-2xl font-bold text-[#B88A2E]">
                Critical Moments
              </h3>
              <p className="mt-4 leading-7 text-white/80">
                Critical moments calls for timely humanitarian interventions.
                We shall continuously renew our commitments and strategies, so
                that we will be able to tackle issues that concerns the most
                vulnerable in the society.
              </p>
            </div>

            <div className="mt-8 rounded-3xl bg-[#f8f5ef] p-6">
              <h3 className="text-2xl font-bold text-[#0B4EA2]">
                What We Have Been Doing
              </h3>
              <p className="mt-4 leading-7 text-gray-700">
                Over the years, we have took an active role in supporting
                communities in the areas of education, access to clean and
                portable water, free medical outreach, youth/women empowerment,
                social support services, relief materials, the SCF Almajiri
                Initiative and climate change mitigation.
              </p>
            </div>

          </section>
        )}

        <section className="mt-14">
          <h2 className="flex items-center gap-3 text-3xl font-bold text-[#0B4EA2]">
            <Crown className="text-[#B88A2E]" /> Traditional Titles
          </h2>

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {titles.map((title) => (
              <div key={title} className="rounded-2xl bg-white p-4 shadow">
                {title}
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}


