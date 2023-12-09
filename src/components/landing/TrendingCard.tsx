import { cn } from "@/lib/utils";
import Link from "next/link";

type TrendingCardProps = {
	className?: string;
};
const TrendingCard = ({ className }: TrendingCardProps) => {
	return (
		<Link
			href=""
			// href={`${process.env.NEXT_PUBLIC_URL}/posts/${post?.id}`}
			className={cn(
				"relative block w-full h-96 lg:h-auto hover:opacity-75",
				className
			)}
		>
			{/* BACKGROUND IMAGE */}
			<div className="relative z-0 w-full h-full bg-gray-700">Image</div>

			{/* CONTENT */}
			<div className="absolute z-1 bottom-0 left-0 p-4">
				<h4 className="inline-block px-5 py-1 font-semibold bg-accent-yellow">
					Category
				</h4>
				<div className="text-gray-200 mt-2 line-clamp-1">
					Lorem ipsum dolor sit amet consectetur, adipisicing elit.
				</div>
			</div>
		</Link>
	);
};
export default TrendingCard;
