import type { MetadataRoute } from "next";

const baseUrl = "https://www.sarauniyacf.org";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    "",
    "/about",
    "/founder",
    "/leadership",
    "/programs",
    "/programs/water-sanitation",
    "/programs/girl-child-education",
    "/programs/women-empowerment",
    "/programs/medical-outreach",
    "/programs/youth-empowerment",
    "/programs/ramadan-feeding",
    "/programs/emergency-response",
    "/programs/orphans-vulnerable-children",
    "/programs/sdgs",
    "/media",
    "/impact",
    "/reports",
    "/governance",
    "/transparency",
    "/donate",
    "/contact",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
  }));
}

