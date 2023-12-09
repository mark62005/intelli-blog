import MaxWidthContainer from "@/components/MaxWidthContainer";
import HeroSection from "./Hero";

export default function Home() {
	return (
		<main className="relative min-h-screen">
			<MaxWidthContainer>
				<HeroSection />
				<hr className="border" />
			</MaxWidthContainer>
		</main>
	);
}
