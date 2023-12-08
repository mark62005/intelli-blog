import Link from "next/link";
import { buttonVariants } from "../ui/button";
import { NAV_LINKS } from "@/config";
import MaxWidthContainer from "../MaxWidthContainer";
import MobileNavMenu from "./MobileNavMenu";
import SocialLinks from "./SocialLinks";

const Navbar = () => {
	return (
		<header className="sticky z-50 top-0 inset-x-0 mb-5 grid grid-cols-1 bg-white">
			<MaxWidthContainer className="relative">
				<SocialLinks />
				<div className="flex justify-between items-center w-full py-2 border-b border-gray-300">
					{/* LEFT SIDE */}
					<Link
						href="/"
						className="text-xl font-bold hover:opacity-50"
					>
						LOGO
					</Link>

					{/* RIGHT SIDE */}
					<nav className="hidden lg:flex lg:justify-between lg:items-center lg:gap-6">
						{NAV_LINKS.map((link) => (
							<Link
								key={link.label}
								href={link.href}
								className={buttonVariants({
									variant: link.variant,
								})}
							>
								{link.label}
							</Link>
						))}
					</nav>

					{/* TODO: Add Mobile Nav */}
					<MobileNavMenu />
				</div>
			</MaxWidthContainer>
		</header>
	);
};
export default Navbar;
