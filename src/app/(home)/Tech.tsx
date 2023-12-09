import TechCard from "@/components/landing/TechCard";

const Tech = () => {
	return (
		<section className="">
			{/*  HEADER */}
			<div className="flex items-center gap-3 my-8">
				<h4 className="bg-accent-yellow font-bold text-base py-2 px-6">HOT</h4>
				<p className="font-bold text-2xl">Latest News in Technology</p>
			</div>

			{/* CONTENT */}
			<div className="grid grid-cols-1 gap-8 my-4 lg:grid-cols-2 lg:grid-rows-3">
				<TechCard
					variant="lg"
					className="lg:col-span-1 lg:row-span-3"
				/>
				<TechCard className="flex justify-between gap-3 lg:col-span-1 lg:row-span-1" />
				<TechCard className="flex justify-between gap-3 lg:col-span-1 lg:row-span-1" />
				<TechCard className="flex justify-between gap-3 lg:col-span-1 lg:row-span-1" />
			</div>
		</section>
	);
};
export default Tech;