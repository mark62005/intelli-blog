import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import "./globals.css";

import { cn } from "@/lib/utils";
import Navbar from "@/components/header/Navbar";
import Footer from "@/components/footer/Footer";

const openSans = Open_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Intelli Blog",
	description: "Where Intelligence Meets Imagination",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body className={cn("relative antialiased", openSans.className)}>
				<Navbar />
				{children}
				<Footer />
			</body>
		</html>
	);
}
