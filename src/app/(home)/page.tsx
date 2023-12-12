import { PostWithCategory } from "@/types/PostWithCategory";
import { db } from "@/lib/prisma";

import MaxWidthContainer from "@/components/MaxWidthContainer";
import HeroSection from "./Hero";
import TrendingSection from "./Trending";
import TechSection from "./Tech";
import TravelSection from "./Travel";
import OtherSection from "./Other";
import SubscribeCTA from "@/components/landing/SubscribeCTA";
import Sidbar from "./Sidbar";

const getPosts = async (): Promise<Array<PostWithCategory>> => {
	return await db.post.findMany({
		include: {
			category: true,
		},
	});
};

export default async function Home() {
	const posts = await getPosts();

	const getPostsInCategories = (): Array<Array<PostWithCategory>> => {
		const trendingPosts = new Array<PostWithCategory>();
		const techPosts = new Array<PostWithCategory>();
		const travelPosts = new Array<PostWithCategory>();
		const otherPosts = new Array<PostWithCategory>();

		posts.forEach((post: PostWithCategory, index: number) => {
			if (index < 4) {
				post;
				trendingPosts.push(post);
			}

			if (post.category.name === "Tech") {
				techPosts.push(post);
			} else if (post.categoryId === "Travel") {
				travelPosts.push(post);
			} else if (post.categoryId !== ("Tech" || "Travel")) {
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

					<Sidbar className="basis-1/4" />
				</div>
			</MaxWidthContainer>
		</main>
	);
}
