import Image from "next/image";
import Link from "next/link";
import LogoImage from "../../public/logos/logo.png";

const Logo = () => {
	return (
		<Link
			href="/"
			className="hover:opacity-50"
		>
			<Image
				src={LogoImage}
				alt="Logo of Intelli Blog"
				width={95}
				height={44}
			/>
		</Link>
	);
};
export default Logo;
