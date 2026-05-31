import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { FixedSocialLinks } from "@/components/layout/FixedSocialLinks";

const raleway = localFont({
	src: [
		{
			path: "../fonts/raleway-regular.woff2",
			weight: "400",
			style: "normal",
		},
		{
			path: "../fonts/raleway-medium.woff2",
			weight: "500",
			style: "normal",
		},
		{
			path: "../fonts/raleway-semibold.woff2",
			weight: "600",
			style: "normal",
		},
		{ path: "../fonts/raleway-bold.woff2", weight: "700", style: "normal" },
	],
	variable: "--font-raleway",
	display: "swap",
});

export const metadata: Metadata = {
	title: "Escape Room",
	description: "Сайт компанії з організації квестів",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="uk" className={raleway.variable}>
			<body className="min-h-screen bg-background text-foreground font-sans">
				<Header />
				{children}
				<FixedSocialLinks />
			</body>
		</html>
	);
}
