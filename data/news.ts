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

export const newsItems: NewsItem[] = [];
