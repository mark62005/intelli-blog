"use client";
import { cn } from "@/lib/utils";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Button } from "../ui/button";

type SubscribeCTAProps = {
	className?: string;
};

const SubscribeCTA = ({ className }: SubscribeCTAProps) => {
	return (
		<div
			className={cn(
				"flex flex-col items-center gap-4 px-6 py-10 bg-secondary text-center",
				className
			)}
		>
			<h4 className="font-semibold text-base">Subscribe to our Newsletter</h4>
			<Label className="text-base text-slate-600 w-5/6">
				Enter your email for your curated dose of AI brilliance.
			</Label>

			<Input
				placeholder="Enter your Email"
				className="w-5/6 py-6 px-2 border-2"
			/>

			<Button
				onClick={() => console.log("Subscribe CTA button clicked.")}
				className="text-base bg-accent-orange font-semibold w-5/6"
			>
				SUBSCRIBE
			</Button>
		</div>
	);
};
export default SubscribeCTA;
