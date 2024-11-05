"use client";
import { useState, useRef, useEffect } from "react";
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
			<div
				className="bg-snow h-[710px] shadow-2xl flex flex-col gap-4 py-4 px-6 hover:shadow-3xl hover:bg-accent-2 transition-transform duration-100 hover:-translate-x-1 hover:-translate-y-1"
				onClick={() => {
					setOpenPopover(true);
				}}
			>
				<h3 className="md:min-h-[3lh] min-h-[5lh] line-clamp-5 md:line-clamp-3 flex items-center md:items-center md:flex">
					{title}
				</h3>
				<img src={image} alt={title} className="rounded-lg h-80 object-cover" />
				<p className={`pt-6 line-clamp-4 md:line-clamp-6`}>{description}</p>
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
