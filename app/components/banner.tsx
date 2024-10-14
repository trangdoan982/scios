import { GetStaticProps } from "next";
import { getLogos } from "../lib/getLogos";

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
						<img
							key={index}
							src={`/banner/${logo}`}
							alt={`Logo ${index + 1}`}
							className="w-16 h-auto grayscale hover:grayscale-0 transition duration-300"
						/>
					))}
					{/* Repeat the logos to create a seamless loop */}
					{logos.map((logo, index) => (
						<img
							key={index + logos.length}
							src={`/banner/${logo}`}
							alt={`Logo ${index + 1}`}
							className="w-16 h-auto grayscale hover:grayscale-0 transition duration-300"
						/>
					))}
				</div>
			</div>
		</div>
	);
};

export default Banner;
