"use client";

import { useMemo, useState } from "react";
import { ImageIcon, PlayCircle, X } from "lucide-react";
import { mediaFiles } from "@/data/mediaFiles";

const tabs = [
  { label: "All", value: "all" },
  { label: "Photos", value: "image" },
  { label: "Videos", value: "video" },
  { label: "Awards", value: "awards" },
  { label: "Events", value: "events" },
  { label: "Before & After", value: "before-after" },
];

export default function MediaGallery() {
  const [active, setActive] = useState("all");
  const [selected, setSelected] = useState<(typeof mediaFiles)[number] | null>(
    null
  );

  const filtered = useMemo(() => {
    if (active === "all") return mediaFiles;
    if (active === "image") return mediaFiles.filter((item) => item.type === "image");
    if (active === "video") return mediaFiles.filter((item) => item.type === "video");

    return mediaFiles.filter((item) =>
      item.src.toLowerCase().includes(active.toLowerCase()) ||
      item.category.toLowerCase().includes(active.toLowerCase())
    );
  }, [active]);

  const imageCount = mediaFiles.filter((item) => item.type === "image").length;
  const videoCount = mediaFiles.filter((item) => item.type === "video").length;
  const awardCount = mediaFiles.filter((item) =>
    item.src.toLowerCase().includes("awards")
  ).length;
  const eventCount = mediaFiles.filter((item) =>
    item.src.toLowerCase().includes("events")
  ).length;

  return (
    <section className="mt-12">
      <div className="grid gap-5 md:grid-cols-4">
        <div className="rounded-3xl bg-white p-6 text-center shadow-lg">
          <ImageIcon className="mx-auto h-8 w-8 text-[#B88A2E]" />
          <p className="mt-3 text-3xl font-bold text-[#0B4EA2]">{imageCount}</p>
          <p className="text-gray-600">Photos</p>
        </div>

        <div className="rounded-3xl bg-white p-6 text-center shadow-lg">
          <PlayCircle className="mx-auto h-8 w-8 text-[#B88A2E]" />
          <p className="mt-3 text-3xl font-bold text-[#0B4EA2]">{videoCount}</p>
          <p className="text-gray-600">Videos</p>
        </div>

        <div className="rounded-3xl bg-white p-6 text-center shadow-lg">
          <ImageIcon className="mx-auto h-8 w-8 text-[#B88A2E]" />
          <p className="mt-3 text-3xl font-bold text-[#0B4EA2]">{awardCount}</p>
          <p className="text-gray-600">Awards</p>
        </div>

        <div className="rounded-3xl bg-white p-6 text-center shadow-lg">
          <ImageIcon className="mx-auto h-8 w-8 text-[#B88A2E]" />
          <p className="mt-3 text-3xl font-bold text-[#0B4EA2]">{eventCount}</p>
          <p className="text-gray-600">Events</p>
        </div>
      </div>

      <div className="mt-10 flex flex-wrap gap-3">
        {tabs.map((tab) => (
          <button
            key={tab.value}
            onClick={() => setActive(tab.value)}
            className={`rounded-full px-5 py-3 font-semibold transition ${
              active === tab.value
                ? "bg-[#0B4EA2] text-white"
                : "bg-white text-[#0B4EA2] shadow"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {filtered.map((item) => (
          <button
            key={item.src}
            onClick={() => setSelected(item)}
            className="group overflow-hidden rounded-3xl bg-white text-left shadow-lg transition hover:-translate-y-1 hover:shadow-2xl"
          >
            <div className="relative h-56 bg-blue-50">
              {item.type === "video" ? (
                <>
                  <video
                    src={item.src}
                    className="h-full w-full object-cover"
                    muted
                    playsInline
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-black/35">
                    <PlayCircle className="h-14 w-14 text-white" />
                  </div>
                </>
              ) : (
                <img
                  src={item.src}
                  alt={item.title}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />
              )}
            </div>

            <div className="p-5">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#B88A2E]">
                {item.category}
              </p>
              <h3 className="mt-2 line-clamp-2 font-bold text-[#0B4EA2]">
                {item.title}
              </h3>
            </div>
          </button>
        ))}
      </div>

      {filtered.length === 0 && (
        <div className="mt-10 rounded-3xl bg-white p-10 text-center shadow-lg">
          <p className="text-gray-600">No media found for this category yet.</p>
        </div>
      )}

      {selected && (
        <div
          onClick={() => setSelected(null)}
          className="fixed inset-0 z-[120] flex items-center justify-center bg-black/80 px-4"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative max-h-[90vh] w-full max-w-5xl overflow-hidden rounded-[2rem] bg-white"
          >
            <button
              onClick={() => setSelected(null)}
              className="absolute right-4 top-4 z-10 rounded-full bg-white p-3 text-[#0B4EA2] shadow-lg"
            >
              <X className="h-5 w-5" />
            </button>

            {selected.type === "video" ? (
              <video
                src={selected.src}
                className="max-h-[80vh] w-full bg-black object-contain"
                controls
                autoPlay
              />
            ) : (
              <img
                src={selected.src}
                alt={selected.title}
                className="max-h-[80vh] w-full object-contain"
              />
            )}

            <div className="p-5">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#B88A2E]">
                {selected.category}
              </p>
              <h3 className="mt-2 font-bold text-[#0B4EA2]">
                {selected.title}
              </h3>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
