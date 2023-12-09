import MaxWidthContainer from "@/components/MaxWidthContainer";
import HeroSection from "./Hero";
import TrendingSection from "./Trending";
import TechSection from "./Tech";
import TravelSection from "./Travel";
import OtherSection from "./Other";
import SubscribeCTA from "@/components/landing/SubscribeCTA";
import Sidbar from "./Sidbar";

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

						<SubscribeCTA className="mt-16 hidden lg:flex" />
					</div>

					<Sidbar className="basis-1/4" />
				</div>
			</MaxWidthContainer>
		</main>
	);
}
