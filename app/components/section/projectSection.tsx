"use client";

import { useEffect, useState } from "react";
import ProjectCard from "../project";
import { HyperlinkProps } from "../hyperlink";
import { ContributorProps } from "../contributors";

type Project = {
	title: string;
	hyperlinks: Array<{ href: string; text: string }>;
	image: string;
	ctaText: string;
	ctaLink: string;
	contributors: ContributorProps[];
	description: string;
	status: string;
	previousWorkshops: string;
	upcomingWorkshops: string;
};

export default function ProjectSection() {
	const [projects, setProjects] = useState<Project[]>([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState<string | null>(null);

	useEffect(() => {
		const fetchProjects = async () => {
			try {
				const response = await fetch("/api/project");
				if (!response.ok) {
					throw new Error("Failed to fetch projects");
				}
				const data = await response.json();
				setProjects(data);
			} catch (err) {
				setError(
					err instanceof Error ? err.message : "Failed to fetch projects"
				);
			} finally {
				setLoading(false);
			}
		};

		fetchProjects();
	}, []);

	if (loading) {
		return (
			<div className="flex flex-col gap-28">
				<div className="w-48 h-8 bg-gray-200 rounded animate-pulse mx-auto"></div>
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-20 px-4 md:px-16">
					{[1, 2, 3, 4].map((i) => (
						<div key={i} className="flex flex-col gap-4 animate-pulse">
							<div className="w-full h-64 bg-gray-200 rounded"></div>
							<div className="h-8 w-3/4 bg-gray-200 rounded"></div>
							<div className="h-4 w-1/2 bg-gray-200 rounded"></div>
							<div className="h-24 w-full bg-gray-200 rounded"></div>
							<div className="flex justify-between items-center">
								<div className="h-10 w-32 bg-gray-200 rounded"></div>
								<div className="h-8 w-24 bg-gray-200 rounded"></div>
							</div>
						</div>
					))}
				</div>
			</div>
		);
	}

	if (error) {
		return <div>Error: {error}</div>; // Consider a better error UI
	}

	return (
		<div className="flex flex-col gap-28">
			<h1 className="w-full text-center">Projects we support</h1>
			<div className="grid grid-cols-1 lg:grid-cols-2 gap-20 px-4 md:px-16">
				{projects?.map((project, index) => (
					<div key={index.toString()}>
						<ProjectCard
							title={project.title}
							hyperlinks={project.hyperlinks}
							image={project.image}
							ctaLink={project.ctaLink}
							ctaText={project.ctaText}
							contributors={project.contributors}
							description={project.description}
							// @ts-expect-error
							status={project.status}
							previousWorkshops={project.previousWorkshops}
							upcomingWorkshops={project.upcomingWorkshops}
						/>
					</div>
				))}
			</div>
		</div>
	);
}
