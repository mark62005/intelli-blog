import Image from "next/image";

const Hero = () => {
	return (
		<section className="flex justify-between items-center gap-8 my-5">
			{/* LEFT SIDE */}
			<div className="basis-3/5">
				<h1 className="text-slate-700 font-bold text-3xl lg:text-5xl">
					Intelli Blog
				</h1>
				<p className="text-sm mt-4 lg:mt-5">
					Unleash AI brilliance on your intellectual journey. Thoughtful
					insights redefine the way you engage with cutting-edge content daily.
				</p>
			</div>

			{/* RIGHT SIDE */}
			<div className="basis-full relative w-auto h-48">
				<Image
					fill
					alt="Image of Advert 1"
					src="/ad-1.jpg"
					sizes="(max-width: 480px) 100vw,
            (max-width: 768px) 75vw,
            (max-width: 1060px) 50vw,
            33vw"
					style={{ objectFit: "cover" }}
				/>
			</div>
		</section>
	);
};
export default Hero;
