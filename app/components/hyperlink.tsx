import { useState } from "react";
import ArrowIcon from "@/assets/icons/arrow.svg";
import ChevronIcon from "@/assets/icons/chevron.svg";

export interface HyperlinkProps {
	text: string;
	url: string;
	className?: string;
	underline?: boolean;
}

export const isExternalLink = (link: string) => {
	try {
		const url = new URL(link);
		return url.protocol === "http:" || url.protocol === "https:";
	} catch (_) {
		return false;
	}
};

const Hyperlink: React.FC<HyperlinkProps> = ({
	text,
	url,
	className,
	underline = false,
}) => {
	const [hovered, setHovered] = useState(false);

	const onHover = () => {
		setHovered(true);
	};
	const onUnhover = () => {
		setHovered(false);
	};
	return (
		<a
			href={url}
			target={isExternalLink(url) ? "_blank" : "_self"}
			className={`flex flex-row ${className} font-openSans items-center gap-1`}
			onMouseEnter={onHover}
			onMouseLeave={onUnhover}
		>
			<span
				className={`${
					underline ? "underline underline-offset-8" : ""
				} text-sm font-bold ${className}`}
			>
				{text}
			</span>
			<span className="pt-1">
				{hovered ? (
					<ArrowIcon
						width={12}
						height={12}
						// classname={` text-white ${classname}`}
					/>
				) : (
					<ChevronIcon width={12} height={12} />
				)}
			</span>
		</a>
	);
};

export default Hyperlink;
