"use client";
import Image from "next/image";
import Button from "./button";
import Hyperlink from "./hyperlink";
import { ReactNode } from "react";

interface ProductProps {
	title: string;
	icon: string;
	text: string;
	ctaText?: string;
	hyperlinkText?: string;
	hyperlink?: string;
	imageSrc: string;
	reverse?: boolean;
}
const Product: React.FC<ProductProps> = ({
	title,
	icon,
	text,
	ctaText,
	hyperlinkText,
	hyperlink,
	imageSrc,
	reverse = false,
}) => {
	return (
		<div
			className={`flex flex-col md:flex-row ${
				reverse ? "md:flex-row-reverse" : ""
			} items-center gap-4 md:gap-20 p-4 `}
		>
			<div className="w-full md:w-1/2 space-y-4">
				<div className="flex items-center gap-2">
					<img src={icon} alt={""} height={24} width={24} />
					<h2 className="text-2xl font-bold ">{title}</h2>
				</div>
				<p className="">{text}</p>
				{ctaText && (
					<Button
						text={ctaText}
						color="accent"
						onClick={() => {
							window.open(
								"https://airtable.com/app2OPYvNaoWHBYhg/pagQHtwSIRuWhV4L8/form",
								"_blank"
							);
						}}
					/>
				)}
				{hyperlinkText && hyperlink && (
					<Hyperlink
						text={hyperlinkText}
						url={hyperlink}
						classname="text-white"
						underline={true}
					/>
				)}
			</div>
			<div className="w-full md:w-1/2">
				<Image
					src={`/images/${imageSrc}`}
					alt={title}
					width={500}
					height={300}
					className="w-full h-auto object-cover rounded-lg"
				/>
			</div>
		</div>
	);
};

export default Product;
