import { mediaFiles } from "@/data/mediaFiles";

const fallbackSlides = [
  {
    title: "Community Impact",
    description: "Sarauniya Charity Foundation outreach activities across communities.",
    type: "image",
    src: "/images/logo/logo.jpg",
  },
];

const picked = mediaFiles
  .filter((item) =>
    item.src.includes("/media/homepage/") ||
    item.src.includes("/media/programs/water/after/") ||
    item.src.includes("/media/programs/women/")
  )
  .slice(0, 8);

export const homeSlides = picked.length
  ? picked.map((item) => ({
      title: item.category === "women" ? "Women Empowerment" : item.title,
      description:
        item.category === "women"
          ? "Supporting women with skills training and start-up capital."
          : "Documenting Sarauniya Charity Foundation humanitarian impact.",
      type: item.type,
      src: item.src,
    }))
  : fallbackSlides;

