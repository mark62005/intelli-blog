import Link from "next/link";
import { cn } from "@/lib/utils";
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
	const { id, title, snippet, image, author, createdAt } = post || {};
	const formattedDate = new Date(createdAt).toLocaleDateString("en-US", {
		year: "numeric",
		month: "long",
		day: "numeric",
	});

	return (
		<Link
			href={`/posts/${id}`}
			className={cn("hover:opacity-75", className)}
		>
			<div
				className={cn("relative w-full h-48 mb-3 bg-slate-600", {
					"h-96": section === "tech" && variant === "secondary",
					"h-80":
						(section === "travel" && variant === "secondary") ||
						section === "other",
				})}
			>
				Image
			</div>
			<div>
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
