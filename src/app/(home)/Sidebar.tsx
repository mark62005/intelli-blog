import Image from "next/image";
import { cn } from "@/lib/utils";
import AdvertImage from "../../../public/ad-2.png";
import AuthorImage from "../../../public/about-profile.jpg";
import SocialLinks from "@/components/SocialLinks";
import SubscribeCTA from "@/components/landing/SubscribeCTA";

type SidebarProps = {
	className?: string;
};

const Sidebar = ({ className }: SidebarProps) => {
	return (
		<section className={cn("flex flex-col gap-6", className)}>
			{/* SUBSCRIBE */}
			<div>
				<h4 className="bg-slate-700 text-slate-200 font-bold text-base text-center py-3 px-6">
					Subscribe and Follow
				</h4>
				<SocialLinks
					variant="sidebar"
					className="justify-between m-2 lg:my-4 lg:mx-2"
				/>
				<SubscribeCTA variant="sidebar" />
			</div>

			<Image
				src={AdvertImage}
				alt="An Advert Image"
				placeholder="blur"
				width={500}
				height={250}
				className="hidden lg:block"
			/>

			{/* ABOUT */}
			<div>
				<h4 className="bg-slate-700 text-slate-200 font-bold text-base text-center py-3 px-6">
					ABOUT THE AUTHOR
				</h4>
				<div className="flex justify-center">
					<Image
						src={AuthorImage}
						alt="An Advert Image"
						placeholder="blur"
						width={500}
						height={1000}
					/>
				</div>
				<h5 className="font-bold text-base text-center text-slate-800 px-6 my-2">
					John Doe
				</h5>
				<p className="px-4 text-center text-sm text-slate-800">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, ex aut
					et perspiciatis delectus placeat voluptatum perferendis officiis illo
					asperiores.
				</p>
			</div>
		</section>
	);
};
export default Sidebar;
