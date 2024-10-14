import Navigation from "./components/navigation";
import Product from "./components/product";
import ProjectSection from "./components/projectSection";
import Footer from "./components/footer";
import EventSection from "./components/eventSection";
import SupporterSection from "./components/supporterSection";
import Banner from "./components/banner";
import BlobBackground from "./components/background";
import ConnectIcon from "@/assets/icons/connect.svg";
import BuildIcon from "@/assets/icons/build.svg";
import ShareIcon from "@/assets/icons/share.svg";

export default function Home() {
	return (
		<>
			<div className="absolute sticky top-0 bg-white w-full px-6 md:px-16 z-50">
				<Navigation />
			</div>
			<div className="flex flex-col w-full gap-14">
				{/* Intro */}
				<div className="flex flex-col w-full relative">
					{/* Blob background */}
					<BlobBackground />

					{/* Intro Section */}
					<section
						className="relative w-full md:w-2/3 py-32 md:pt-64 md:pb-48 px-6 md:px-16 z-10"
						id="about"
					>
						<h1>We facilitate infrastructure for open science</h1>
						<h2 className="font-openSans font-medium text-[28px]">
							We support collaborative, open source technological solutions to
							streamline the research process and foster open science practices
						</h2>
					</section>
				</div>

				<div>
					<Banner />
				</div>

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
						icon={ConnectIcon}
						text={
							"Network of researchers and technologists who want to and can create technology for the Open Science community."
						}
						imageSrc={"connect.png"}
						ctaText="Join our network"
					/>
					<Product
						title="Build"
						icon={BuildIcon}
						text="Our workshops lead to clear outputs. Every workshop, working group, and hackathon is grounded in the results the community needs instead of declarations on what we already know we should do."
						imageSrc="build.png"
						hyperlink="#projects"
						hyperlinkText="See supporting projects"
						reverse={true}
					/>
					<Product
						title="Share"
						icon={ShareIcon}
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
					<EventSection />
				</section>
				<section className="pt-24 px-6 md:px-16">
					<SupporterSection />
				</section>
				<Footer />
			</div>
		</>
	);
}
