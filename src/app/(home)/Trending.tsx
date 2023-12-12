import { PostWithCategory } from "@/types/PostWithCategory";
import TrendingCard from "@/components/landing/TrendingCard";

type TrendingProps = {
	posts: PostWithCategory[];
};

const Trending = ({ posts }: TrendingProps) => {
	return (
		<section className="py-10">
			<div className="flex items-center gap-4">
				<div className="bg-accent-yellow font-bold text-base py-2 px-8">
					TRENDING
				</div>
				<p className="text-sm">
					Unearth Tomorrow&apos;s Insights Today. Stay ahead of the curve with
					our AI-curated gems, where innovation meets information in every
					trending post.
				</p>
			</div>

			<div className="grid grid-cols-1 gap-5 my-4 lg:grid-cols-4 lg:grid-rows-2 lg:h-[600px]">
				{posts.map(async (post: PostWithCategory, index: number) => {
					switch (index) {
						case 0:
							return (
								<TrendingCard
									key={post?.id}
									post={post ?? {}}
									category={post?.category}
									className="bg-slate-600 lg:col-span-2 lg:row-span-2"
								/>
							);
						case 1:
							return (
								<TrendingCard
									key={post?.id}
									post={post ?? {}}
									category={post?.category}
									className="bg-slate-600 lg:col-span-2 lg:row-span-1"
								/>
							);

						default:
							return (
								<TrendingCard
									key={post?.id}
									post={post ?? {}}
									category={post?.category}
									className="bg-slate-600 lg:col-span-1 lg:row-span-1"
								/>
							);
					}
				})}
			</div>

			<p className="text-base">
				Lorem ipsum dolor, sit amet consectetur adipisicing elit. In quisquam
				est ipsum deserunt obcaecati vero saepe officia ducimus, deleniti
				debitis.
			</p>
		</section>
	);
};
export default Trending;
