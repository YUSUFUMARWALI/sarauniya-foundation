import Image from "next/image";
import Link from "next/link";
import { Crown, ShieldCheck, Users, BriefcaseBusiness, Megaphone, Building2 } from "lucide-react";

const trustees = [
  {
    name: "Haj. Rabiatu Umar Saidu",
    role: "President / Founder",
    image: "/images/trustees/rabiatu.jpg",
    href: "/leadership/rabiatu",
  },
  {
    name: "Zainab Abubakar",
    role: "Trustee",
    image: "/images/trustees/zainab.jpg",
    href: "/leadership/zainab",
  },
  {
    name: "Fadila Umar Saeedu",
    role: "Trustee",
    image: "/images/trustees/fadila.jpg",
    href: "/leadership/fadila",
  },
  {
    name: "Amb. Yusuf Yau",
    role: "Secretary",
    image: "/images/trustees/yusuf.jpg",
    href: "/leadership/yusuf",
  },
];

const sections = [
  {
    title: "Patronage & Governance",
    icon: Crown,
    members: ["Grand Patron", "Patron", "Board of Trustees", "Trustees"],
  },
  {
    title: "Executive Leadership",
    icon: ShieldCheck,
    members: ["President", "Vice President", "General Secretary", "Treasurer", "Financial Secretary", "Publicity Secretary", "Director Projects"],
  },
  {
    title: "Secretariat",
    icon: Building2,
    members: ["Admin Officer", "Desk Officer", "Office Clerks", "ICT Officer", "Project Drivers", "HR Manager", "Finance Officer", "Auditor"],
  },
  {
    title: "Media & Field Team",
    icon: Megaphone,
    members: ["Zonal Coordinators", "Media Crews", "State Liaison Officer", "State Coordinators"],
  },
];

export default function LeadershipPage() {
  return (
    <main className="min-h-screen bg-[#f8f5ef] px-6 py-12 text-[#062B5F] md:px-16 lg:px-24">
      <div className="mx-auto max-w-7xl">
        <Link href="/" className="text-sm font-semibold text-[#0B4EA2]">
          Back to Home
        </Link>

        <p className="mt-12 text-sm font-semibold uppercase tracking-[0.3em] text-[#B88A2E]">
          Leadership & Governance
        </p>

        <h1 className="mt-4 text-4xl font-bold md:text-6xl">
          Organizational Structure
        </h1>

        <p className="mt-6 max-w-3xl text-lg leading-8 text-gray-700">
          Sarauniya Charity Foundation operates through a structured leadership system covering patronage, trustees, executive leadership, secretariat operations, and media/field coordination.
        </p>

        <section className="mt-14 rounded-[2rem] bg-[#0B4EA2] p-8 text-white shadow-2xl">
          <div className="text-center">
            <Crown className="mx-auto h-10 w-10 text-[#B88A2E]" />
            <h2 className="mt-4 text-3xl font-bold">Founder / President</h2>
            <p className="mt-2 text-white/80">Hajiya Rabiatu Umar Saidu</p>

            <Link
              href="/founder"
              className="mt-6 inline-block rounded-full bg-white px-6 py-3 text-sm font-semibold text-[#0B4EA2]"
            >
              View Founder Profile
            </Link>
          </div>
        </section>

        <section className="mt-14">
          <div className="flex items-center gap-3">
            <Users className="h-8 w-8 text-[#B88A2E]" />
            <h2 className="text-3xl font-bold text-[#0B4EA2]">
              Board of Trustees
            </h2>
          </div>

          <div className="mt-8 grid gap-6 md:grid-cols-4">
            {trustees.map((person) => (
              <Link
                key={person.name}
                href={person.href}
                className="group overflow-hidden rounded-3xl bg-white shadow-lg transition hover:-translate-y-1 hover:shadow-2xl"
              >
                <div className="relative h-64 w-full bg-blue-50">
                  <Image
                    src={person.image}
                    alt={person.name}
                    fill
                    className="object-cover transition duration-500 group-hover:scale-105"
                  />
                </div>

                <div className="p-6 text-center">
                  <h3 className="font-bold">{person.name}</h3>
                  <p className="mt-2 text-sm text-gray-600">{person.role}</p>
                  <span className="mt-4 inline-block text-sm font-semibold text-[#B88A2E]">
                    View Profile 
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </section>

        <section className="mt-14 grid gap-6 md:grid-cols-2">
          {sections.map(({ title, icon: Icon, members }) => (
            <div key={title} className="rounded-3xl bg-white p-8 shadow-lg">
              <Icon className="h-8 w-8 text-[#B88A2E]" />
              <h2 className="mt-4 text-2xl font-bold text-[#0B4EA2]">
                {title}
              </h2>

              <div className="mt-6 grid gap-3">
                {members.map((member) => (
                  <div
                    key={member}
                    className="rounded-2xl border border-blue-100 bg-[#f8f5ef] px-4 py-3 font-medium"
                  >
                    {member}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </section>

        <section className="mt-14 rounded-3xl bg-[#062B5F] p-8 text-white">
          <BriefcaseBusiness className="h-8 w-8 text-[#B88A2E]" />
          <h2 className="mt-4 text-2xl font-bold">
            Institutional Governance
          </h2>
          <p className="mt-4 max-w-3xl leading-8 text-white/80">
            The leadership system supports accountability, operational coordination, field implementation, project management, public communication, and community engagement across SCF programs.
          </p>
        </section>
      </div>
    </main>
  );
}
