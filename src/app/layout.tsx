import type { Metadata } from "next";

import { DOMAIN_BASE_URL } from "@/lib/constants";
import "../styles/globals.css";

import {
	PoppinsThin,
	PoppinsThinItalic,
	PoppinsExtraLight,
	PoppinsExtraLightItalic,
	PoppinsLight,
	PoppinsLightItalic,
	PoppinsRegular,
	PoppinsRegularItalic,
	PoppinsMedium,
	PoppinsMediumItalic,
	PoppinsSemiBold,
	PoppinsSemiBoldItalic,
	PoppinsBold,
	PoppinsBoldItalic,
	PoppinsExtraBold,
	PoppinsExtraBoldItalic,
	PoppinsBlack,
	PoppinsBlackItalic,
} from "@/lib/fonts";

export const metadata: Metadata = {
	metadataBase: new URL(DOMAIN_BASE_URL),
	applicationName: "npm.watch",
	title: "NPM.watch – Track Downloads and Discover Packages",
	description: "Monitor npm package downloads, search libraries, and view repository trends with real-time insights.",
	keywords: [
		"npm watch",
		"npm analytics",
		"npm package stats",
		"npm downloads",
		"npm trends",
		"npm statistics",
		"javascript packages",
		"npm search",
		"package analytics",
		"repository analytics",
		"package monitoring",
		"package downloads tracker",
	],

	generator: "Next.js",
	twitter: {
		card: "summary",
		title: "NPM.watch – Track Downloads and Discover Packages",
		//prettier-ignore
		description: "Monitor npm package downloads, search libraries, and view repository trends with real-time insights.",
		images: `${DOMAIN_BASE_URL}/Logo-Symbol.png`,
	},
	appleWebApp: {
		title: "NPM.watch – Track Downloads and Discover Packages",
		statusBarStyle: "black-translucent",
	},
	openGraph: {
		siteName: "npm.watch",
		title: "NPM.watch – Track Downloads and Discover Packages",
		//prettier-ignore
		description: "Monitor npm package downloads, search libraries, and view repository trends with real-time insights.",
		type: "website",
		locale: "en",
		images: [
			{
				url: `${DOMAIN_BASE_URL}/Logo-Symbol.png`,
				width: 512,
				height: 512,
				alt: "NPM.watch",
				type: "image/png",
			},
		],
	},
	alternates: {
		canonical: DOMAIN_BASE_URL,
	},
	publisher: "Vercel",
	category: "NPM Statistics",
	icons: [
		{
			rel: "icon",
			type: "image/png",
			sizes: "96x96",
			url: "/favicons/favicon-96x96.png",
		},
		{
			rel: "icon",
			type: "image/x-icon",
			sizes: "any",
			url: "/favicons/favicon.ico",
		},
		{
			rel: "icon",
			type: "image/svg+xml",
			sizes: "any",
			url: "/favicons/favicon.svg",
		},
	],
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
	return (
		<html lang="en">
			<body
				suppressHydrationWarning={true}
				className={`${PoppinsThin.className} ${PoppinsThinItalic.className} ${PoppinsExtraLight.className} ${PoppinsExtraLightItalic.className} ${PoppinsLight.className} ${PoppinsLightItalic.className} ${PoppinsRegular.className} ${PoppinsRegularItalic.className} ${PoppinsMedium.className} ${PoppinsMediumItalic.className} ${PoppinsSemiBold.className} ${PoppinsSemiBoldItalic.className} ${PoppinsBold.className} ${PoppinsBoldItalic.className} ${PoppinsExtraBold.className} ${PoppinsExtraBoldItalic.className} ${PoppinsBlack.className} ${PoppinsBlackItalic.className} antialiased`}
			>
				<main>{children}</main>
			</body>
		</html>
	);
}
