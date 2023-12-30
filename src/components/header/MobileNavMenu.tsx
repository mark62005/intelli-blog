"use client";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { NAV_LINKS } from "@/config";

import { Button } from "../ui/button";
import Logo from "../Logo";
import { Menu, X } from "lucide-react";
import MaxWidthContainer from "../MaxWidthContainer";

const MobileNavMenu = () => {
	const [isOpen, setIsOpen] = useState<boolean>(false);
	const toggleMenu = () => setIsOpen((prev) => !prev);

	return (
		<nav className="lg:hidden">
			<Button
				size="icon"
				onClick={toggleMenu}
				className={cn(
					"rounded-full bg-accent-yellow text-secondary-foreground hover:bg-accent-yellow/80",
					{
						hidden: isOpen,
					}
				)}
				aria-hidden="true"
			>
				<Menu />
			</Button>

			{isOpen ? (
				<div className="fixed inset-x-0 bottom-0 z-20 h-full bg-white">
					<ul className="flex flex-col text-lg border-b">
						{/* CLOSE BUTTON */}
						<MaxWidthContainer>
							<li className="flex justify-between items-center h-16 mx-4">
								<Logo />

								<Button
									size="icon"
									onClick={toggleMenu}
									className="rounded-full bg-accent-yellow text-secondary-foreground hover:bg-accent-yellow/80"
									aria-hidden="true"
								>
									<X />
								</Button>
							</li>
						</MaxWidthContainer>

						{/* NAV MENU */}
						{NAV_LINKS.map((navLink, index) => (
							<li
								key={index}
								className="border-t"
							>
								<a
									href={navLink.href}
									onClick={toggleMenu}
									className={cn(
										`
										flex items-center justify-center w-full p-3 rounded-xl transition
										hover:text-gray-950 hover:bg-gray-200
										`
									)}
								>
									{navLink.label}
								</a>
							</li>
						))}
					</ul>
				</div>
			) : null}
		</nav>
	);
};
export default MobileNavMenu;
