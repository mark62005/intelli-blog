import Link from "next/link";
import Image from "next/image";
import { SOCIAL_LINKS } from "@/config";
import { cn } from "@/lib/utils";

type SocialLinksProps = {
	className?: string;
	variant?: "header" | "footer";
};

const SocialLinks = ({ className, variant = "header" }: SocialLinksProps) => {
	return (
		<div
			className={cn(
				"hidden lg:flex lg:justify-start lg:items-center lg:gap-4",
				className
			)}
		>
			{SOCIAL_LINKS.map((link, index) => (
				<Link
					key={index}
					href={link.href}
					className="py-1"
				>
					<Image
						src={link.image.src}
						alt={link.image.alt}
						width={20}
						height={20}
						className={`${
							variant === "header"
								? "brightness-0 opacity-75 hover:opacity-50"
								: "brightness-95 hover:opacity-75"
						}`}
					/>
				</Link>
			))}
		</div>
	);
};
export default SocialLinks;
