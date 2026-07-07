export type NewsItem = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  platform: "Instagram" | "Facebook" | "TikTok" | "Website";
  mediaType: "image" | "video" | "none";
  media?: string;
  originalUrl?: string;
};

export const newsItems: NewsItem[] = [
  {
    slug: "almajiri-initiative-update",
    title: "Almajiri Initiative Outreach",
    excerpt:
      "Sarauniya Charity Foundation continues its commitment to supporting vulnerable children through education, care and community-based humanitarian initiatives.",
    date: "2026",
    platform: "Website",
    mediaType: "image",
    media: "/images/almajiri/almajiri initiatives.jpg",
  },
  {
    slug: "girl-child-education-support",
    title: "Girl Child Education Support",
    excerpt:
      "Education remains one of SCF's core program areas, with continued attention on improving access, support and encouragement for young learners.",
    date: "2026",
    platform: "Website",
    mediaType: "image",
    media: "/images/education/education 1.jpg",
  },
  {
    slug: "school-support-activity",
    title: "School Support Activity",
    excerpt:
      "SCF supports learning environments and educational development through community-focused programs and school support activities.",
    date: "2026",
    platform: "Website",
    mediaType: "image",
    media: "/images/education/school.jpeg",
  },
  {
    slug: "food-donation-outreach",
    title: "Food Donation Outreach",
    excerpt:
      "Food donation activities reflect SCF's mission to assist vulnerable households and communities with practical humanitarian support.",
    date: "2026",
    platform: "Website",
    mediaType: "image",
    media: "/images/food-donations/food donation 1.jpg",
  },
  {
    slug: "award-of-honor",
    title: "Award of Honor Recognition",
    excerpt:
      "Sarauniya Charity Foundation's humanitarian service and community impact continue to receive recognition from partners and stakeholders.",
    date: "2026",
    platform: "Website",
    mediaType: "image",
    media: "/images/awards/award of honor 1.jpg",
  },
  {
    slug: "climate-change-awareness",
    title: "Climate Change Awareness",
    excerpt:
      "SCF continues to promote awareness around climate change, sustainability and community responsibility.",
    date: "2026",
    platform: "Website",
    mediaType: "image",
    media: "/images/climate-change/climate change.jpg",
  },
];
