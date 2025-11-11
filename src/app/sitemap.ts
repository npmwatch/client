import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
	return [
		{
			url: "https://www.npm.watch",
			lastModified: new Date().toISOString(),
			changeFrequency: "monthly",
			priority: 1.0,
		},
	];
}
