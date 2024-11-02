"use client";
import { Dialog, DialogPanel } from "@headlessui/react";
import { Dispatch, SetStateAction, useState } from "react";
import { ProjectCardProps } from "./project";
import CloseIcon from "./../../public/icons/close.svg";
import Hyperlink, { isExternalLink } from "./hyperlink";
import { Contributor } from "./contributors";
import Button from "./button";
import Image from "next/image";

interface ProjectPopoverProps extends ProjectCardProps {
	isOpen: boolean;
	setIsOpen: Dispatch<SetStateAction<boolean>>;
}
const ProjectPopover: React.FC<ProjectPopoverProps> = ({
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
	isOpen,
	setIsOpen,
}) => {
	return (
		<>
			<Dialog open={isOpen} onClose={() => {}} className="relative z-50">
				<div className="fixed inset-0 flex w-full items-center justify-center p-4 bg-slate-600/80">
					<DialogPanel className="w-full h-full md:w-2/3 md:h-3/4 border bg-snow p-12 overflow-auto">
						<div className="flex flex-col gap-4">
							<div className="flex flex-row justify-end">
								<button
									onClick={() => {
										setIsOpen(false);
									}}
								>
									<CloseIcon className="w-6 h-6" />
								</button>
							</div>
							<div className="flex flex-row justify-between items-center">
								<h4>{title}</h4>
								<Button
									text={status.toString() ?? "Active"}
									color={
										status === "Active"
											? "secondary"
											: status === "Paused"
											? "accent"
											: "accent-2"
									}
									classname="h-fit"
								/>
							</div>
							<img
								src={image}
								alt={title}
								className="rounded-lg h-96 object-cover"
							/>
							<div className="flex flex-col-reverse gap-4 md:flex-row md:justify-between md:items-center">
								<div className="flex flex-col gap-3">
									<Button
										text={ctaText}
										onClick={() => {
											window.open(
												ctaLink,
												isExternalLink(ctaLink) ? "_blank" : "_self"
											);
										}}
										color="primary"
									/>
								</div>
								<div className="flex flex-col gap-2">
									<p className="text-sm text-dark-grey">Contributors</p>
									<div className="grid grid-cols-2 gap-4">
										{contributors.map((person, index) => {
											return (
												<div key={index.toString()}>
													<Contributor
														name={person.name}
														url={person.url}
														image={person.image}
													/>
												</div>
											);
										})}
									</div>
								</div>
							</div>
							<div className="w-full">{description}</div>
							<div className="flex flex-col gap-1">
								<p className="font-bold">Resources:</p>
								{hyperlinks.map((hyperlink, index) => {
									return (
										<div key={index.toString()}>
											<Hyperlink
												text={hyperlink.text}
												url={hyperlink.href}
												className="text-dark-grey"
											/>
										</div>
									);
								})}
							</div>
							{previousWorkshops && (
								<div className="flex flex-col gap-2">
									<p className="font-bold">Previous workshops:</p>
									<p
										dangerouslySetInnerHTML={{ __html: previousWorkshops }}
									></p>
								</div>
							)}
							{upcomingWorkshops && (
								<div className="flex flex-col gap-2">
									<p className="font-bold">Upcoming workshops:</p>
									<p
										dangerouslySetInnerHTML={{ __html: upcomingWorkshops }}
									></p>
								</div>
							)}
						</div>
					</DialogPanel>
				</div>
			</Dialog>
		</>
	);
};

export default ProjectPopover;
