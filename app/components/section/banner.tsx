import { getLogos, nameMapping } from "@/lib/getLogos";
import Image from "next/image";

const Banner = () => {
	const logos = getLogos();

	return (
		<div className="flex flex-col bg-white">
			<h4 className="w-full text-center">
				Connecting academics and technicians from
			</h4>
			<div className="overflow-hidden bg-white py-8">
				<div className="animate-marquee flex items-center gap-8">
					{logos.map((logo, index) => (
						<a href={nameMapping[logo]} target="_blank" key={index}>
							<img
								src={`/banner/${logo}`}
								alt={`Logo ${index + 1}`}
								className="w-16 h-auto grayscale hover:grayscale-0 transition duration-300"
							/>
						</a>
					))}
					{/* Repeat the logos to create a seamless loop */}
					{logos.map((logo, index) => (
						<a
							href={nameMapping[logo]}
							target="_blank"
							key={index + logos.length}
						>
							<img
								src={`/banner/${logo}`}
								alt={`Logo ${index + 1}`}
								className="w-16 h-auto grayscale hover:grayscale-0 transition duration-300"
							/>
						</a>
					))}
				</div>
			</div>
		</div>
	);
};

export default Banner;
