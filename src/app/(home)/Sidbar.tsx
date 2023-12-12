import SocialLinks from "@/components/SocialLinks";
import SubscribeCTA from "@/components/landing/SubscribeCTA";

type SidebarProps = {
	className?: string;
};

const Sidbar = ({ className }: SidebarProps) => {
	return (
		<section className="basis-1/4 flex flex-col gap-6">
			{/* SUBSCRIBE */}
			<>
				<h4 className="bg-slate-700 text-slate-200 font-bold text-base text-center py-3 px-6">
					Subscribe and Follow
				</h4>
				<SocialLinks
					variant="sidebar"
					className="flex justify-between items-center m-4 lg:my-4 lg:mx-2"
				/>
				<SubscribeCTA />
			</>

			<div className="bg-slate-600">Advert Image</div>

			{/* ABOUT */}
			<>
				<h4 className="bg-slate-700 text-slate-200 font-bold text-base text-center py-3 px-6">
					ABOUT THE AUTHOR
				</h4>
				{/* TODO: replace placeholder image */}
				<div className="bg-slate-600">AUTHOR Image</div>
				<h5 className="font-bold text-base text-center text-slate-800 px-6">
					John Doe
				</h5>
				<p className="px-4 text-center text-sm text-slate-800">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, ex aut
					et perspiciatis delectus placeat voluptatum perferendis officiis illo
					asperiores.
				</p>
			</>
		</section>
	);
};
export default Sidbar;
