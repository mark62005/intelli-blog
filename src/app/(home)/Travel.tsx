import { PostWithCategory } from "@/types/PostWithCategory";
import Card from "@/components/landing/Card";

type TravelProps = {
	posts: PostWithCategory[];
};

const Travel = ({ posts }: TravelProps) => {
	return (
		<section className="my-10">
			{/* HEADER */}
			<div className="flex items-center gap-3 my-8">
				<h4 className="bg-accent-green font-bold text-base py-2 px-6">
					TRAVEL
				</h4>
				<p className="font-bold text-2xl">New Travel Experiences</p>
			</div>

			{/* CONTENT */}
			<>
				<div className="flex gap-8 my-4 lg:justify-between">
					{posts.map((post: PostWithCategory, index: number) => {
						if (index < 3)
							return (
								<Card
									key={post?.id}
									section="travel"
									variant="secondary"
									post={post ?? {}}
									className="basis-1/3"
								/>
							);

						return;
					})}
				</div>

				<Card
					section="travel"
					post={posts[3] ?? {}}
					className="flex items-center lg:justify-between gap-4"
				/>
			</>
		</section>
	);
};
export default Travel;
