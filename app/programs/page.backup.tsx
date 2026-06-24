import Image from "next/image";
import Link from "next/link";
import {
  Droplets,
  Stethoscope,
  GraduationCap,
  Users,
  Trees,
  HeartHandshake,
  Venus,
  Tent,
  Utensils,
  BookOpen,
  Home,
} from "lucide-react";

const programs = [
  {
    title: "Water & Sanitation",
    stat: "3,246 Wells  720 Boreholes  1,000 Renovated",
    description: "Clean and accessible water projects for vulnerable rural communities.",
    image: "/images/water-projects/water-project 1.jpg",
    icon: Droplets,
  },
  {
    title: "Medical Outreach",
    stat: "20,000+ Medical Beneficiaries",
    description: "Free healthcare outreach, medical support and drug donations.",
    image: "/images/medical-outreach/medial-outreach 1.jpg",
    icon: Stethoscope,
  },
  {
    title: "Quality Education",
    stat: "5,000+ Scholarships",
    description: "Scholarships, learning materials and education support for children.",
    image: "/images/education/education 1.jpg",
    icon: GraduationCap,
  },
  {
    title: "Gender Equality",
    stat: "6,500+ Widows Empowered",
    description: "Women and girls empowerment through skills, advocacy and support.",
    image: "/images/gender-equality/gender equality 1.jpg",
    icon: Venus,
  },
  {
    title: "SCF IDPs Initiative",
    stat: "Relief for displaced families",
    description: "Support for internally displaced persons and vulnerable households.",
    image: "/images/idps/idps initiatives 1.jpg",
    icon: Tent,
  },
  {
    title: "Maiduguri Disaster Response",
    stat: "5,000+ Relief Items",
    description: "Quick response support and feeding for Maiduguri disaster victims.",
    image: "/images/maiduguri-disaster/feeding victims of maiduguri disaster 1.jpg",
    icon: HeartHandshake,
  },
  {
    title: "Youth Empowerment & Job Creation",
    stat: "7,000+ Youth Empowered  3,000+ Jobs Created",
    description: "Vocational training, job creation and youth development programs.",
    image: "/images/youth-empowerment/youth emowerment & job creation 1.jpg",
    icon: Users,
  },
  {
    title: "Climate Change",
    stat: "Climate action initiatives",
    description: "Environmental awareness and climate change mitigation projects.",
    image: "/images/climate-change/climate change.jpg",
    icon: Trees,
  },
  {
    title: "Food Donations",
    stat: "50,750 Ramadan Meals Annually",
    description: "Food relief, feeding programs and Ramadan support initiatives.",
    image: "/images/food-donations/food donation 1.jpg",
    icon: Utensils,
  },
  {
    title: "SCF Almajiri Initiative",
    stat: "Education and welfare support",
    description: "Support for Almajiri children through care, learning and community aid.",
    image: "/images/almajiri/almajiri initiatives.jpg",
    icon: BookOpen,
  },
  {
    title: "Orphan Support",
    stat: "2,000+ Orphans Supported",
    description: "Care, welfare and educational support for vulnerable orphans.",
    image: "/images/orphans/orphans of azare 1.jpg",
    icon: Home,
  },
];

export default function ProgramsPage() {
  return (
    <main className="min-h-screen bg-[#f8f5ef] px-6 py-12 text-[#062B5F] md:px-16 lg:px-24">
      <div className="mx-auto max-w-7xl">
        <Link href="/" className="font-semibold text-[#0B4EA2]">
           Back to Home
        </Link>

        <p className="mt-12 text-sm font-semibold uppercase tracking-[0.3em] text-[#B88A2E]">
          Programs
        </p>

        <h1 className="mt-4 text-5xl font-bold">
          Transforming Communities Across Nigeria
        </h1>

        <p className="mt-6 max-w-3xl text-lg leading-8 text-gray-700">
          Sarauniya Charity Foundation delivers sustainable humanitarian
          interventions through healthcare, education, water projects,
          empowerment initiatives, disaster response and community development.
        </p>

        <div className="mt-12 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {programs.map((program) => {
            const Icon = program.icon;

            return (
              <div
                key={program.title}
                className="overflow-hidden rounded-3xl bg-white shadow-lg transition hover:-translate-y-1 hover:shadow-2xl"
              >
                <div className="relative h-56">
                  <Image
                    src={program.image}
                    alt={program.title}
                    fill
                    className="object-cover"
                  />
                </div>

                <div className="p-6">
                  <Icon className="h-8 w-8 text-[#B88A2E]" />

                  <h2 className="mt-4 text-2xl font-bold text-[#0B4EA2]">
                    {program.title}
                  </h2>

                  <p className="mt-3 font-semibold text-[#B88A2E]">
                    {program.stat}
                  </p>

                  <p className="mt-4 leading-7 text-gray-600">
                    {program.description}
                  </p>

                  <Link
                    href="/gallery"
                    className="mt-6 inline-block rounded-full bg-[#0B4EA2] px-5 py-2 text-sm font-semibold text-white"
                  >
                    View Gallery
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </main>
  );
}
