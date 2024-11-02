import Image from "next/image";
import PersonIcon from "./../../public/icons/person.svg";
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
	const maxVisible = 3;
	const size = 40;
	const visibleContributors = contributors.slice(0, maxVisible);
	const remainingCount = Math.max(0, contributors.length - maxVisible);
	return (
		<div className="flex relative" style={{ width: size, height: size }}>
			{visibleContributors.map((contributor, index) => (
				<div
					key={index}
					className="absolute rounded-full border-2 border-white overflow-hidden"
					style={{
						width: size,
						height: size,
						left: `${index * (size / 2)}px`,
						zIndex: index,
					}}
				>
					<img
						src={contributor.image ?? ""}
						alt={contributor.name}
						width={size}
						height={size}
						className="object-cover"
					/>
				</div>
			))}
			{remainingCount > 0 && (
				<div
					className="bg-gray-200 rounded-full absolute flex items-center justify-center text-sm font-medium text-gray-800 border-2 border-white "
					style={{
						width: size,
						height: size,
						left: `${maxVisible * (size / 2)}px`,
						zIndex: maxVisible,
					}}
				>
					+{remainingCount}
				</div>
			)}
		</div>
	);
};

export default ContributorsStack;
