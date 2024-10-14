import Navigation from "./components/navigation";
import Product from "./components/product";
import Button from "./components/button";
import Link from "next/link";
import { useEffect, useState } from "react";
import ProjectCard from "./components/project";
import ProjectSection from "./components/projectSection";
import Footer from "./components/footer";
import EventSection from "./components/eventSection";
import SupporterSection from "./components/supporterSection";

export default function Home() {
	// const [bgColor, setBgColor] = useState("transparent");

	// const handleScroll = () => {
	// 	const section = document.getElementById("product");
	// 	if (section) {
	// 		const { top, height } = section.getBoundingClientRect();
	// 		const scrollY = window.scrollY;

	// 		// Change this value to set how much scroll should influence the color
	// 		const distanceFromTop = Math.max(100, height + top);
	// 		console.log("test", height + top);

	// 		// Calculate the percentage of how far you are in the section
	// 		const percentage = Math.min(1, (scrollY - distanceFromTop) / height);

	// 		// Define the start and end colors
	// 		const startColor = "rgba(255, 255, 255, 0)"; // Start transparent
	// 		const endColor = "rgba(58, 88, 55, 1)"; // End with a red background

	// 		// Interpolate between the two colors
	// 		const newColor = interpolateColor(startColor, endColor, percentage);
	// 		console.log(newColor);
	// 		setBgColor(newColor);
	// 	}
	// };

	// const interpolateColor = (
	// 	startColor: string,
	// 	endColor: string,
	// 	factor: number
	// ) => {
	// 	const start = hexToRgb(startColor);
	// 	const end = hexToRgb(endColor);
	// 	const result = start.map((startVal, index) =>
	// 		Math.round(startVal + factor * (end[index] - startVal))
	// 	);
	// 	return `rgb(${result.join(",")})`;
	// };

	// const hexToRgb = (hex: string) => {
	// 	const rgba = hex
	// 		.replace(/^rgba?\((\d+),\s*(\d+),\s*(\d+),?\s*(\d+)?\)/, "$1,$2,$3")
	// 		.split(",");
	// 	return rgba.map(Number);
	// };

	// useEffect(() => {
	// 	window.addEventListener("scroll", handleScroll);
	// 	return () => {
	// 		window.removeEventListener("scroll", handleScroll);
	// 	};
	// }, []);

	return (
		<div
			className="flex flex-col w-full gap-14"
			// style={{
			// 	backgroundColor: bgColor,
			// 	transition: "background-color 0.3s ease",
			// }}
		>
			<div className="absolute sticky top-0 bg-white w-full px-6 md:px-16 z-16">
				<Navigation />
			</div>

			{/* Intro */}
			<section
				className="w-full md:w-2/3 py-32 md:py-64 px-6 md:px-16"
				id="about"
			>
				<h1>We facilitate infrastructure for open science</h1>
				<h2 className="font-openSans font-medium text-[28px]">
					We support collaborative, open source technological solutions to
					streamline the research process and foster open science practices
				</h2>
			</section>

			{/* Product section */}
			<section
				id="product"
				className="bg-primary w-full flex flex-col gap-8 text-white justify-center pt-24 pb-36 px-6 md:px-16 "
			>
				<div className="flex flex-col p-4 md:px-36">
					<h1 className="w-full text-center">What we do</h1>
					<p className="w-full text-center">
						SciOS is a collaborative organization dedicated to ensuring the
						stable and sustainable operation of a scientific system and supply
						chain that is open, efficient, and accessible. We believe that the
						convergence of culture and technology is critical to achieve this
						vision. SciOS maintains a collaborative environment for academics,
						researchers, technologists, innovators, funders, policy makers,
						institutions, corporations, and the public. We achieve this by
					</p>
				</div>

				<Product
					title={"Connect"}
					icon={"connect.svg"}
					text={
						"Network of researchers and technologists who want to and can create technology for the Open Science community."
					}
					imageSrc={"connect.png"}
					ctaText="Join our network"
				/>
				<Product
					title="Build"
					icon="build.svg"
					text="Our workshops lead to clear outputs. Every workshop, working group, and hackathon is grounded in the results the community needs instead of declarations on what we already know we should do."
					imageSrc="build.png"
					hyperlink="#projects"
					hyperlinkText="See supporting projects"
					reverse={true}
				/>
				<Product
					title="Share"
					icon="share.svg"
					text="All technology we facilitate is open source. Our workshop outputs are synthesized into resources accessible and understandable by everyone. We then shared directly to ensure that the most engaged and impacted individuals know."
					imageSrc="share.png"
					// TODO: add link to open pop up for subscribe to newsletter
					hyperlink="placeholder"
					hyperlinkText="Subscribe to our newsletter"
				/>
			</section>

			<section id="projects" className="pt-24 px-6 md:px-16">
				<ProjectSection />
			</section>
			<section id="events" className="pt-24 px-6 md:px-16">
				<EventSection
				// events={[
				// 	{
				// 		title: "test new event",
				// 		date: "7.11.2",
				// 		hosts: ["SciOS", "Metagov"],
				// 		location: "Vermon, VT",
				// 		description: "This is an amazing event",
				// 		agenda: [
				// 			{
				// 				timeFrame: "test",
				// 				title: "test",
				// 				description: "test",
				// 				speakers: [
				// 					{
				// 						name: "test",
				// 						imageUrl: "test",
				// 						affiliation: "test",
				// 					},
				// 				],
				// 			},
				// 			{
				// 				timeFrame: "test",
				// 				title: "test",
				// 				description: "test",
				// 				speakers: [
				// 					{
				// 						name: "test",
				// 						imageUrl: "test",
				// 						affiliation: "test",
				// 					},
				// 				],
				// 			},
				// 		],
				// 	},
				// 	{
				// 		title: "test old event",
				// 		date: "test",
				// 		hosts: [],
				// 		location: "test",
				// 		description: "This is an amazing event",
				// 		isOld: true,
				// 		oldResources: [
				// 			{
				// 				href: "test",
				// 				text: "test",
				// 			},
				// 		],
				// 	},
				// 	{
				// 		title: "test old event",
				// 		date: "test",
				// 		hosts: [],
				// 		location: "test",
				// 		description: "This is an amazing event",
				// 		isOld: true,
				// 		oldResources: [
				// 			{
				// 				href: "test",
				// 				text: "test",
				// 			},
				// 		],
				// 	},
				// ]}
				/>
			</section>
			<section className="pt-24 px-6 md:px-16">
				<SupporterSection />
			</section>
			<Footer />
		</div>
	);
}
