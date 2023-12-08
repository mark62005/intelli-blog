import Link from "next/link";
import Image from "next/image";
import { SOCIAL_LINKS } from "@/config";

const SocialLinks = () => {
	return (
		<div className="hidden border-b border-gray-300 lg:flex lg:justify-start lg:items-center lg:gap-4">
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
						className="brightness-0 opacity-75 hover:opacity-50"
					/>
				</Link>
			))}
		</div>
	);
};
export default SocialLinks;
