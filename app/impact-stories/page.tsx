import Image from "next/image";
import Link from "next/link";

const stories = [
  {
    title: "Aisha Salisu",
    image: "/images/impact-stories/story of aisha salisu who was out of school.jpg",
    story:
      "Aisha Salisu was once out of school and faced significant barriers to education. Through support and intervention, she gained access to learning opportunities that changed the direction of her future.",
  },
  {
    title: "Hamsatu Musa",
    image:
      "/images/impact-stories/story of hamsatu musa who was a victim of the maiduguri flood 2024.jpg",
    story:
      "Hamsatu Musa was among those affected by the Maiduguri flood disaster. Emergency support, food assistance and humanitarian relief helped her family during a difficult period.",
  },
  {
    title: "Orphans of Azare",
    image: "/images/orphans/orphans of azare 1.jpg",
    story:
      "Sarauniya Charity Foundation continues to support vulnerable orphaned children through welfare assistance, educational support and community development initiatives.",
  },
];

export default function ImpactStoriesPage() {
  return (
    <main className="min-h-screen bg-[#f8f5ef] px-6 py-12 text-[#062B5F] md:px-16 lg:px-24">
      <div className="mx-auto max-w-7xl">

        <Link href="/" className="font-semibold text-[#0B4EA2]">
          ? Back to Home
        </Link>

        <p className="mt-12 text-sm font-semibold uppercase tracking-[0.3em] text-[#B88A2E]">
          Impact Stories
        </p>

        <h1 className="mt-4 text-5xl font-bold">
          Stories of Hope & Transformation
        </h1>

        <p className="mt-6 max-w-3xl text-lg leading-8 text-gray-700">
          Behind every statistic is a life transformed. These stories highlight
          the human impact of Sarauniya Charity Foundation interventions.
        </p>

        <div className="mt-14 space-y-14">

          {stories.map((item) => (
            <div
              key={item.title}
              className="overflow-hidden rounded-[2rem] bg-white shadow-xl"
            >
              <div className="grid lg:grid-cols-2">

                <div className="relative h-[400px]">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover"
                  />
                </div>

                <div className="flex items-center p-10">
                  <div>
                    <h2 className="text-3xl font-bold text-[#0B4EA2]">
                      {item.title}
                    </h2>

                    <p className="mt-6 leading-8 text-gray-700">
                      {item.story}
                    </p>

                    <div className="mt-8">
                      <span className="rounded-full bg-[#B88A2E] px-5 py-2 text-sm font-semibold text-white">
                        Impact Story
                      </span>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          ))}

        </div>
      </div>
    </main>
  );
}
