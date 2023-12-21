import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { Category } from "@prisma/client";
import { PostWithCategory } from "@/types/PostWithCategory";

type TrendingCardProps = {
	post: PostWithCategory;
	category: Category;
	className?: string;
};

const TrendingCard = ({ post, category, className }: TrendingCardProps) => {
	return (
		<Link
			href={`/posts/${post?.id}`}
			className={cn(
				"relative block w-full h-96 lg:h-auto hover:opacity-75",
				className
			)}
		>
			{/* BACKGROUND IMAGE */}
			<div className="relative z-0 w-full h-full">
				<Image
					src={post?.imageUrl}
					alt={post?.title}
					placeholder="blur"
					fill
					sizes="
						(max-width: 480px) 100vw,
						(max-width: 768px) 75vw,
						(max-width: 1060px) 50vw,
						33vw
					"
					className="object-cover"
				/>
			</div>

			{/* CONTENT */}
			<div className="absolute z-1 bottom-0 left-0 p-4">
				<h4 className="inline-block px-5 py-1 font-semibold bg-accent-yellow">
					{category?.name}
				</h4>
				<div className="text-gray-200 mt-2 line-clamp-1">{post?.title}</div>
			</div>
		</Link>
	);
};
export default TrendingCard;
