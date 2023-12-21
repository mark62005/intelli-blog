import Link from "next/link";
import Image from "next/image";
import { cn, formatDate } from "@/lib/utils";
import { PostWithCategory } from "@/types/PostWithCategory";

type TechCardProps = {
	section: "tech" | "travel" | "other";
	variant?: "primary" | "secondary";
	post: PostWithCategory;
	className?: string;
};

const TechCard = ({
	section,
	variant = "primary",
	post,
	className,
}: TechCardProps) => {
	const { id, title, snippet, imageUrl, author, createdAt } = post || {};
	const formattedDate = formatDate(createdAt);

	return (
		<Link
			href={`/posts/${id}`}
			className={cn("hover:opacity-75", className)}
		>
			{/* IMAGE */}
			<div
				className={cn("basis-full relative w-auto h-48 mb-3", {
					"h-96": section === "tech" && variant === "secondary",
					"h-80":
						(section === "travel" && variant === "secondary") ||
						section === "other",
				})}
			>
				<Image
					src={imageUrl}
					alt={title}
					fill
					placeholder="blur"
					sizes="
						(max-width: 480px) 100vw,
						(max-width: 768px) 75vw,
						(max-width: 1060px) 50vw,
						33vw
					"
					className="object-cover"
				/>
			</div>

			<div className="basis-full">
				{/* TITLE */}
				<h4
					className={cn("font-bold text-accent-green text-base line-clamp-2", {
						"text-lg line-clamp-none": variant === "secondary",
					})}
				>
					{title}
				</h4>
				{/* AUTHOR */}
				<div
					className={cn("my-2 gap-3", {
						"flex my-3": variant === "secondary",
					})}
				>
					<h5 className="font-semibold text-xs">{author}</h5>
					<h6 className="text-muted-foreground text-xs">{formattedDate}</h6>
					<p
						className={cn("text-slate-600 line-clamp-3", {
							"line-clamp-5": variant === "secondary",
						})}
					>
						{snippet}
					</p>
				</div>
			</div>
		</Link>
	);
};
export default TechCard;
