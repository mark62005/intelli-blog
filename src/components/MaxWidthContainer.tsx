import { cn } from "@/lib/utils";
import { ReactNode } from "react";

type MaxWidthContainerProps = {
	className?: string;
	children: ReactNode;
};

const MaxWidthContainer = ({ className, children }: MaxWidthContainerProps) => {
	return (
		<div
			className={cn("w-full max-w-screen-2xl mx-auto px-4 md:px-20", className)}
		>
			{children}
		</div>
	);
};

export default MaxWidthContainer;
