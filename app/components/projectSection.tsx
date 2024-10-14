// "use client";

import getAllProjects from "../api/project/getAllProjects";
import ProjectCard from "./project";

export default async function ProjectSection() {
	const projects = await getAllProjects();
	return (
		<div className="flex flex-col gap-28">
			<h1 className="w-full text-center">Projects we support</h1>
			<div className="grid grid-cols-1 md:grid-cols-2 gap-12">
				{projects?.map((project) => {
					return (
						<ProjectCard
							title={project.title}
							hyperlinks={project.hyperlinks}
							image={project.image}
							ctaLink={project.ctaLink}
							ctaText={project.ctaText}
							contributors={project.contributors}
							description={project.description}
							status={project.status}
							previousWorkshops={project.previousWorkshops}
							upcomingWorkshops={project.upcomingWorkshops}
						/>
					);
				})}

				{/* <ProjectCard
					title={
						"Open Source Permanent Versionable Containers and Attestation Platform"
					}
					hyperlinks={[]}
					image="/images/project_holder.png"
					ctaText={"Placeholder"}
					ctaLink=""
					contributors={[
						// TODO: replace with real data here
						{
							name: "Ellie",
							image: "/contributors/ellie.jpg",
							url: "holder",
						},
						{
							name: "Ellie",
							image: "/contributors/ellie.jpg",
							url: "holder",
						},
						{
							name: "Ellie",
							image: "/contributors/ellie.jpg",
							url: "holder",
						},
						{
							name: "Ellie",
							image: "/contributors/ellie.jpg",
							url: "holder",
						},
					]}
					description={
						"The Open Source Permanent Versionable Containers and Attestation Platform is an immutable, permanent repository that transforms how researchers and developers discover, validate, and track software tools. Users can create versionable digital containers encompassing GitHub repositories and resources relevant to their project, while claiming attestations such as “foundational machine learning package.” Community validation of attestations add a layer of trust, helping users identify impactful projects, complementary tools, and potential alternatives. This platform not only preserves the evolution of software over time but also fosters collaboration and innovation across research domains."
					}
				/>
				<ProjectCard
					title={"Open Source Security Dashboard"}
					hyperlinks={[]}
					image="/images/build.png"
					ctaText={"Placeholder"}
					ctaLink=""
					contributors={[
						// TODO: replace with real data here
						{
							name: "Ellie",
							image: "/contributors/ellie.jpg",
							url: "holder",
						},
						{
							name: "Ellie",
							image: "/contributors/ellie.jpg",
							url: "holder",
						},
						{
							name: "Ellie",
							image: "/contributors/ellie.jpg",
							url: "holder",
						},
						{
							name: "Ellie",
							image: "/contributors/ellie.jpg",
							url: "holder",
						},
					]}
					description={
						"The Open Source Security Dashboard empowers companies to proactively manage and secure their open-source software dependencies. By automatically mapping software inventories and visualizing dependencies, the dashboard identifies projects that may pose security risks due to poor practices, lack of recent support, or funding shortfalls. With customizable metrics and actionable insights, organizations can intervene by supporting critical projects or seamlessly transitioning to safer alternatives—ensuring the integrity and reliability of their software ecosystem."
					}
				/> */}
			</div>
		</div>
	);
}
