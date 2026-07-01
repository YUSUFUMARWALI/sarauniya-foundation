import Image from "next/image";
import Link from "next/link";

const gallery = [
  {
    category: "Water Projects",
    images: [
      "/images/water-projects/water-project 1.jpg",
      "/images/water-projects/water-project 2.jpg",
      "/images/water-projects/water-project 3.jpg",
    ],
  },
  {
    category: "Medical Outreach",
    images: [
      "/images/medical-outreach/medial-outreach 1.jpg",
      "/images/medical-outreach/medical-outreach 2.jpg",
      "/images/medical-outreach/medical-outreach 3.jpg",
    ],
  },
  {
    category: "Education",
    images: [
      "/images/education/education 1.jpg",
      "/images/education/education 2.jpg",
      "/images/education/education 3.jpg",
    ],
  },
  {
    category: "Gender Equality",
    images: [
      "/images/gender-equality/gender equality 1.jpg",
      "/images/gender-equality/gender equality 2.jpg",
      "/images/gender-equality/gender equality 3.jpg",
    ],
  },
  {
    category: "IDPs Initiative",
    images: [
      "/images/idps/idps initiatives 1.jpg",
      "/images/idps/idps initiatives 2.jpg",
      "/images/idps/idps initiatives 3.jpg",
    ],
  },
  {
    category: "Maiduguri Disaster Response",
    images: [
      "/images/maiduguri-disaster/feeding victims of maiduguri disaster 1.jpg",
      "/images/maiduguri-disaster/feeding victims of maiduguri disaster 2.jpg",
      "/images/maiduguri-disaster/feeding victims of maiduguri disaster 3.jpg",
    ],
  },
  {
    category: "Youth Empowerment",
    images: [
      "/images/youth-empowerment/youth emowerment & job creation 1.jpg",
      "/images/youth-empowerment/youth emowerment & job creation 2.jpg",
    ],
  },
  {
    category: "Climate Change",
    images: [
      "/images/climate-change/climate change.jpg",
    ],
  },
  {
    category: "Food Donations",
    images: [
      "/images/food-donations/food donation 1.jpg",
      "/images/food-donations/food donation 4.jpg",
      "/images/food-donations/food donation 5.jpg",
    ],
  },
  {
    category: "Almajiri Initiative",
    images: [
      "/images/almajiri/almajiri initiatives.jpg",
    ],
  },
  {
    category: "Orphan Support",
    images: [
      "/images/orphans/orphans of azare 1.jpg",
    ],
  },
];

export default function GalleryPage() {
  return (
    <main className="min-h-screen bg-[#f8f5ef] px-6 py-12 text-[#062B5F] md:px-16 lg:px-24">
      <div className="mx-auto max-w-7xl">
        <Link href="/" className="font-semibold text-[#0B4EA2]">
          ? Back to Home
        </Link>

        <p className="mt-12 text-sm font-semibold uppercase tracking-[0.3em] text-[#B88A2E]">
          Gallery
        </p>

        <h1 className="mt-4 text-5xl font-bold">
          SCF Project Gallery
        </h1>

        <p className="mt-6 max-w-3xl text-lg leading-8 text-gray-700">
          Explore selected photos from Sarauniya Charity Foundation projects,
          humanitarian outreaches, relief interventions and community programs.
        </p>

        <div className="mt-14 space-y-16">
          {gallery.map((section) => (
            <section key={section.category}>
              <div className="mb-6 flex items-center justify-between gap-4">
                <h2 className="text-3xl font-bold text-[#0B4EA2]">
                  {section.category}
                </h2>

                <span className="rounded-full bg-white px-4 py-2 text-sm font-semibold text-[#B88A2E] shadow">
                  {section.images.length} Photos
                </span>
              </div>

              <div className="grid gap-6 md:grid-cols-3">
                {section.images.map((src, index) => (
                  <div
                    key={src}
                    className="group overflow-hidden rounded-3xl bg-white shadow-lg"
                  >
                    <div className="relative h-72">
                      <Image
                        src={src}
                        alt={`${section.category} ${index + 1}`}
                        fill
                        className="object-cover transition duration-500 group-hover:scale-105"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>
    </main>
  );
}

