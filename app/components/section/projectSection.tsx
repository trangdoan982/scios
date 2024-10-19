import getAllProjects from "../../api/project/getAllProjects";
import ProjectCard from "../project";

export default async function ProjectSection() {
	const projects = await getAllProjects();
	return (
		<div className="flex flex-col gap-28">
			<h1 className="w-full text-center">Projects we support</h1>
			<div className="grid grid-cols-1 lg:grid-cols-2 gap-20 px-4 md:px-16">
				{projects?.map((project, index) => {
					return (
						<div key={index.toString()}>
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
						</div>
					);
				})}
			</div>
		</div>
	);
}
