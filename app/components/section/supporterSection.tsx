"use client";
import Image from "next/image";
import Button from "../button";

const SupporterSection = () => {
	return (
		<div className="flex flex-col gap-5">
			<h1 className="w-full text-center  pb-18">Supported by</h1>
			<div className="flex flex-col gap-4 md:flex-row md:gap-32 justify-center items-center">
				<img src="/images/ProtocolLabs.png" alt="Protocol Labs" />
				<img
					src="/images/Opsci.png"
					alt="Opsci"
					className="w-60 h-20 object-fit"
				/>
			</div>
			{/* TODO: link to funding deck when have the link */}
			<div className="flex flex-col items-center">
				<Button
					text="Support what matters"
					onClick={() => {
						window.open(
							"https://www.papermark.io/view/cm29av6dy0008acuhayqq4oya",
							"_blank"
						);
					}}
					color="primary"
				/>
			</div>
		</div>
	);
};
export default SupporterSection;
