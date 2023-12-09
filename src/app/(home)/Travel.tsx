import Card from "@/components/landing/Card";

const Travel = () => {
	return (
		<section className="my-10">
			{/* HEADER */}
			<div className="flex items-center gap-3 my-8">
				<h4 className="bg-accent-green font-bold text-base py-2 px-6">
					TRAVEL
				</h4>
				<p className="font-bold text-2xl">New Travel Experiences</p>
			</div>

			{/* CONTENT */}
			<>
				<div className="flex gap-8 my-4 lg:justify-between">
					<Card
						section="travel"
						variant="lg"
						className="basis-1/3"
					/>
					<Card
						section="travel"
						variant="lg"
						className="basis-1/3"
					/>
					<Card
						section="travel"
						variant="lg"
						className="basis-1/3"
					/>
				</div>

				<Card
					section="travel"
					variant="md"
					className="flex items-center lg:justify-between gap-4"
				/>
			</>
		</section>
	);
};
export default Travel;
