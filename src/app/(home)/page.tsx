import MaxWidthContainer from "@/components/MaxWidthContainer";
import HeroSection from "./Hero";
import Trending from "./Trending";

export default function Home() {
	return (
		<main className="relative min-h-screen">
			<MaxWidthContainer>
				<HeroSection />
				<hr className="border" />
				<Trending />
			</MaxWidthContainer>
		</main>
	);
}
