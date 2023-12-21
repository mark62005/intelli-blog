import Link from "next/link";
import Image from "next/image";
import { FOOTER_NAV_LINKS } from "@/config";
import MaxWidthContainer from "../MaxWidthContainer";
import SocialLinks from "../SocialLinks";
import Logo from "../../../public/logos/logo.png";

const Footer = () => {
	const currentYear = new Date().getFullYear();

	return (
		<footer className="grid grid-cols-1 items-center bg-gray-800 text-gray-200">
			<MaxWidthContainer>
				<div className="grid grid-cols-1 pt-16 pb-12 lg:grid lg:grid-cols-12 mx-auto gap-16">
					{/* FIRST COLUMN */}
					<div className="lg:col-span-5 lg:mt-0">
						<Link
							href="/"
							className="inline-block"
						>
							<Image
								src={Logo}
								alt="Logo of Intelli Blog"
								width={130}
								height={60}
								className="bg-white rounded-lg p-1.5 mb-8 hover:opacity-75"
							/>
						</Link>

						<SocialLinks
							variant="footer"
							className="mb-2"
						/>
						<p className="text-justify">
							Unleash AI brilliance on your intellectual journey. Thoughtful
							insights redefine the way you engage with cutting-edge content
							daily.
						</p>
					</div>

					{/* SECOND COLUMN */}
					<div className="lg:col-span-4 lg:mt-0">
						<h4 className="font-bold mb-8">Links</h4>
						<div className="grid grid-cols-2 gap-2">
							{FOOTER_NAV_LINKS.map((section, index) => (
								<div
									key={index}
									className="flex flex-col gap-y-2"
								>
									{section.map((link) => (
										<Link
											key={link.label}
											href={link.href}
											className="text-base hover:opacity-75"
										>
											{link.label}
										</Link>
									))}
								</div>
							))}
						</div>
					</div>

					{/* THIRD COLUMN */}
					<div className="lg:col-span-3 lg:mt-0 ">
						<h4 className="font-bold mb-8">Contact Us</h4>

						<div className="flex flex-col gap-y-2">
							<p className="text-justify">
								Lorem ipsum, dolor sit amet consectetur adipisicing elit?
							</p>
							<p>(123) 123-1234</p>
						</div>
					</div>
				</div>
				<div className="py-2 text-xs text-center border-t border-gray-200">
					<p>{currentYear} © IntelliBlog All Rights Reserved.</p>
				</div>
			</MaxWidthContainer>
		</footer>
	);
};
export default Footer;
