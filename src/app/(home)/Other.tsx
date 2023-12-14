import { PostWithCategory } from "@/types/PostWithCategory";
import Card from "@/components/landing/Card";

type OtherProps = {
	posts: PostWithCategory[];
};

const Other = ({ posts }: OtherProps) => {
	return (
		<section className="my-10">
			{/* HEADER */}
			<div className="flex items-center gap-3 my-8">
				<h4 className="bg-accent-green font-bold text-base py-2 px-6">OTHER</h4>
				<p className="font-bold text-2xl">Browse More Popular Posts</p>
			</div>

			{/* CONTENT */}
			<div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
				{posts.map((post: PostWithCategory, index: number) => (
					<Card
						key={post?.id}
						section="other"
						post={post}
					/>
				))}
			</div>
		</section>
	);
};
export default Other;
