import { PostWithCategory } from "@/types/PostWithCategory";
import { db } from "@/lib/prisma";

import MaxWidthContainer from "@/components/MaxWidthContainer";
import HeroSection from "./Hero";
import TrendingSection from "./Trending";
import TechSection from "./Tech";
import TravelSection from "./Travel";
import OtherSection from "./Other";
import SubscribeCTA from "@/components/landing/SubscribeCTA";
import Sidebar from "./Sidebar";

const getPosts = async (): Promise<PostWithCategory[]> => {
	const posts = await db.post.findMany({
		include: {
			category: true,
		},
	});

	const formattedPosts = await Promise.all(
		posts.map(async (post: PostWithCategory) => {
			const imageModule = require(`../../../public${post.imageUrl}`);

			return {
				...post,
				imageUrl: imageModule.default,
			};
		})
	);

	return formattedPosts;
};

export default async function Home() {
	const posts = await getPosts();

	const getPostsInCategories = (): PostWithCategory[][] => {
		const trendingPosts: PostWithCategory[] = [];
		const techPosts: PostWithCategory[] = [];
		const travelPosts: PostWithCategory[] = [];
		const otherPosts: PostWithCategory[] = [];

		posts.forEach((post: PostWithCategory, index: number) => {
			const isTechPostAndIsVacant =
				post.category.name === "Tech" && techPosts.length < 4;
			const isTravelPostAndIsVacant =
				post.category.name === "Travel" && travelPosts.length < 4;
			const isOtherPostAndIsVacant =
				post.category.name !== ("Tech" || "Travel") && otherPosts.length < 4;

			if (index < 4) {
				trendingPosts.push(post);
			}
			if (isTechPostAndIsVacant) {
				techPosts.push(post);
			} else if (isTravelPostAndIsVacant) {
				travelPosts.push(post);
			} else if (isOtherPostAndIsVacant) {
				otherPosts.push(post);
			}
		});

		return [trendingPosts, techPosts, travelPosts, otherPosts];
	};

	const [trendingPosts, techPosts, travelPosts, otherPosts] =
		getPostsInCategories();

	return (
		<main className="relative min-h-screen">
			<MaxWidthContainer>
				<HeroSection />
				<hr className="border" />
				<TrendingSection posts={trendingPosts} />
				<hr className="border" />
				<div className="my-10 lg:flex lg:gap-10">
					<div className="basis-3/4">
						<TechSection posts={techPosts} />
						<hr className="border" />
						<TravelSection posts={travelPosts} />
						<hr className="border" />
						<OtherSection posts={otherPosts} />

						<SubscribeCTA className="mt-16 hidden lg:flex" />
					</div>

					<Sidebar className="basis-1/4" />
				</div>
			</MaxWidthContainer>
		</main>
	);
}
