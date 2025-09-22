import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap
{
    return [
        {
            url: "https://leedshack.com",
            lastModified: new Date(),
            changeFrequency: "daily",
            priority: 1,
            images: [
                "https://leedshack.com/structured-data/leeds-hack-2026.jpg"
            ]
        },
        {
            url: "https://leedshack.com/2025",
            lastModified: new Date(),
            changeFrequency: "daily",
            priority: 0.9,
            images: [
                "https://leedshack.com/structured-data/leeds-hack-2025.jpg"
            ]
        },
        {
            url: "https://leedshack.com/committee",
            lastModified: new Date(),
            changeFrequency: "monthly",
            priority: 0.8
        },
    ];
};