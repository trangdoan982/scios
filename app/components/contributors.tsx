import Image from "next/image";
import PersonIcon from "./../../public/icons/person.svg";
import { useState } from "react";
export interface ContributorProps {
	name: string;
	image?: string;
	url: string;
}
interface ContributorsProps {
	contributors: ContributorProps[];
}
export const Contributor: React.FC<ContributorProps> = ({
	name,
	image,
	url,
}) => {
	return (
		<a href={url} className="flex flex-row items-center gap-1">
			{image ? (
				<img alt={name} src={image} className="w-8 h-8 rounded-full" />
			) : (
				<PersonIcon className="w-8 h-8 bg-light-grey rounded-full" />
			)}
			<p>{name}</p>
		</a>
	);
};

const ContributorsStack: React.FC<ContributorsProps> = ({ contributors }) => {
	const maxVisible = 10;
	const size = 40;
	const visibleContributors = contributors.slice(0, maxVisible);
	const remainingCount = Math.max(0, contributors.length - maxVisible);
	const [showName, setShowName] = useState(false);
	return (
		<div className="flex relative w-fit" style={{ height: size + 10 }}>
			{/* Remaining Count Bubble */}
			{remainingCount > 0 && (
				<div
					className="bg-gray-200 rounded-full absolute flex items-center justify-center text-sm font-medium text-gray-800 border-2 border-white"
					style={{
						width: size,
						height: size,
						right: `0px`,
						zIndex: maxVisible + 1,
					}}
				>
					+{remainingCount}
				</div>
			)}

			{/* Contributor Images */}
			{visibleContributors.map((contributor, index) => (
				<div
					key={index}
					className="absolute rounded-full border-2 border-white overflow-hidden group"
					style={{
						width: size,
						height: size,
						right: `${(index + Number(remainingCount > 0)) * (size / 2)}px`,
						zIndex: maxVisible - index,
					}}
				>
					<a
						href={contributor.url}
						className="relative block w-full h-full group"
					>
						{/* Contributor Image */}
						<img
							src={contributor.image ?? ""}
							alt={contributor.name}
							width={size}
							height={size}
							className="object-cover"
						/>

						{/* Contributor Name Tooltip (visible on hover) */}
						<div
							className="absolute left-1/2 -translate-x-1/2 mt-2 px-2 py-1 bg-white shadow-lg rounded 
							text-black opacity-0 group-hover:opacity-100 transition-opacity
							pointer-events-none"
							style={{
								whiteSpace: "nowrap",
								zIndex: 1000,
							}}
						>
							{contributor.name}
						</div>
					</a>
				</div>
			))}
		</div>
	);
};

export default ContributorsStack;
