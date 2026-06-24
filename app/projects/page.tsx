import Link from "next/link";

const projects = [
  "Access to Clean Portable Water",
  "Free Medical Outreach & Drugs Donation",
  "Scholarship and Education Support",
  "Women and Youth Empowerment",
  "Relief Materials Distribution",
  "Almajiri and Orphan Support",
];

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-[#f8f5ef] px-6 py-12 text-[#062B5F] md:px-16 lg:px-24">
      <div className="mx-auto max-w-7xl">
        <Link href="/" className="text-sm font-semibold text-[#0B4EA2]">Back to Home</Link>
        <h1 className="mt-10 text-4xl font-bold md:text-6xl">Projects</h1>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {projects.map((project) => (
            <div key={project} className="rounded-3xl bg-white p-7 shadow-lg">
              <div className="mb-5 h-44 rounded-2xl bg-[#dbe7f7]" />
              <h2 className="text-xl font-bold text-[#0B4EA2]">{project}</h2>
              <p className="mt-4 text-gray-600">Project photos and full details will be added from the extracted PDF assets.</p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
