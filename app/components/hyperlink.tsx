import { useState } from "react";
import ArrowIcon from "@/assets/icons/arrow.svg";
import ChevronIcon from "@/assets/icons/chevron.svg";

export interface HyperlinkProps {
	text: string;
	url: string;
	classname?: string;
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
	classname,
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
			className={`flex flex-row ${classname} font-openSans items-center gap-1`}
			onMouseEnter={onHover}
			onMouseLeave={onUnhover}
		>
			<span
				className={`${
					underline ? "underline underline-offset-8" : ""
				} text-sm font-bold ${classname}`}
			>
				{text}
			</span>

			{hovered ? (
				<ArrowIcon classname={classname} />
			) : (
				<ChevronIcon classname={`w-2 h-2 text-white ${classname}`} />
			)}
		</a>
	);
};

export default Hyperlink;
