import MaxWidthContainer from "@/components/MaxWidthContainer";
import HeroSection from "./Hero";
import TrendingSection from "./Trending";
import TechSection from "./Tech";
import TravelSection from "./Travel";
import OtherSection from "./Other";

export default function Home() {
	return (
		<main className="relative min-h-screen">
			<MaxWidthContainer>
				<HeroSection />
				<hr className="border" />
				<TrendingSection />
				<hr className="border" />

				<div className="my-10 lg:flex lg:gap-10">
					<div className="basis-3/4">
						<TechSection />
						<hr className="border" />
						<TravelSection />
						<hr className="border" />
						<OtherSection />
						<div className="hidden lg:block">{/* SUBSCRIBE CTA */}</div>
					</div>

					<div className="basis-1/4">{/* SIDEBAR */}</div>
				</div>
			</MaxWidthContainer>
		</main>
	);
}
