"use client";
import { useState } from "react";
import Button from "./button";
import ContributorsStack, { ContributorProps } from "./contributors";
import Hyperlink, { isExternalLink } from "./hyperlink";
import ProjectPopover from "./projectPopover";
import Image from "next/image";

export interface ProjectCardProps {
	title: string;
	hyperlinks: Array<{ href: string; text: string }>;
	image: string;
	ctaText: string;
	ctaLink: string;
	contributors: ContributorProps[];
	description: string;
	status?: "Active" | "Paused" | "Completed";
	previousWorkshops?: string;
	upcomingWorkshops?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
	title,
	hyperlinks,
	image,
	ctaText,
	ctaLink,
	contributors,
	description,
	status = "Active",
	previousWorkshops,
	upcomingWorkshops,
}) => {
	const maxDescriptionLength = 310;
	const [openPopover, setOpenPopover] = useState(false);
	return (
		<>
			<div className="bg-snow h-[700px] overflow-hidden shadow-lg flex flex-col gap-4 py-4 px-6 hover:shadow-3xl hover:bg-accent-2">
				<h3>{title}</h3>
				<img
					src={image}
					alt={title}
					onClick={() => {
						setOpenPopover(true);
					}}
					className="rounded-lg h-80 object-cover"
				/>
				<p
					className="pt-12"
					onClick={() => {
						setOpenPopover(true);
					}}
				>
					{description.slice(0, maxDescriptionLength)}
					{description.length > maxDescriptionLength && (
						<span className="text-dark-grey">...Read more</span>
					)}
				</p>
			</div>
			<ProjectPopover
				isOpen={openPopover}
				setIsOpen={setOpenPopover}
				title={title}
				hyperlinks={hyperlinks}
				image={image}
				ctaText={ctaText}
				ctaLink={ctaLink}
				contributors={contributors}
				description={description}
				status={status}
				previousWorkshops={previousWorkshops}
				upcomingWorkshops={upcomingWorkshops}
			/>
		</>
	);
};

export default ProjectCard;
