import { cn } from "@/lib/utils";
import Link from "next/link";

type TechCardProps = {
	section: "tech" | "travel" | "other";
	variant?: "primary" | "secondary";
	className?: string;
};

const TechCard = ({
	section,
	variant = "primary",
	className,
}: TechCardProps) => {
	return (
		<Link
			href="/"
			// href={`${process.env.NEXT_PUBLIC_URL}/posts/${post?.id}`}
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
			<div className="">
				{/* TITLE */}
				<h4
					className={cn("font-bold text-accent-green text-base line-clamp-2", {
						"text-lg line-clamp-none": variant === "secondary",
					})}
				>
					Sample Post Title
				</h4>
				{/* AUTHOR */}
				<div
					className={cn("my-2 gap-3", {
						"flex my-3": variant === "secondary",
					})}
				>
					<h5 className="font-semibold text-xs">John Doe</h5>
					<h6 className="text-muted-foreground text-xs">December 1, 2023</h6>
					<p
						className={cn("text-slate-600 line-clamp-3", {
							"line-clamp-5": variant === "secondary",
						})}
					>
						Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora
						assumenda, officiis molestiae rem molestias laudantium quae dolor
						eum distinctio accusamus enim, explicabo, esse atque dolorum quam
						ratione consequatur eveniet temporibus. Accusantium repellat dolorum
						veritatis fugit mollitia quisquam saepe corporis odit.
					</p>
				</div>
			</div>
		</Link>
	);
};
export default TechCard;
