"use client";
import { MouseEventHandler } from "react";

interface ButtonProps {
	text: string;
	onClick?: MouseEventHandler<HTMLButtonElement>;
	color: "primary" | "secondary" | "accent" | "accent-2";
	textClassname?: string;
	classname?: string;
}

const Button: React.FC<ButtonProps> = ({
	text,
	onClick,
	color,
	textClassname,
	classname,
}) => {
	const colorStyles = {
		primary: "bg-primary text-white",
		secondary: "bg-secondary text-black",
		accent: "bg-accent text-black",
		"accent-2": "bg-accent-2 text-black",
	};
	return (
		<button
			onClick={onClick}
			className={
				`${colorStyles[color]} px-6 py-2 w-fit rounded-lg hover:shadow-3xl transition-transform duration-100 hover:-translate-x-0.5 hover:translate-y-0.5` +
				classname
			}
		>
			<p className={textClassname + ` font-bold font-openSans text-sm`}>
				{text}
			</p>
		</button>
	);
};

export default Button;
