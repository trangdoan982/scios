"use client";
import Image from "next/image";
import Button from "../button";

const SupporterSection = () => {
	return (
		<div className="flex flex-col gap-5">
			<h1 className="w-full text-center pb-18">Supported by</h1>
			<div className="flex flex-col gap-4 md:flex-row md:gap-32 justify-center items-center">
				<a href="https://www.protocol.ai/" target="_blank">
					<img src="/images/ProtocolLabs.png" alt="Protocol Labs" />
				</a>
				<a href="opsci.xyz" target="_blank">
					<img
						src="/images/Opsci.png"
						alt="Opsci"
						// className="w-60 h-20 object-fit"
					/>
				</a>
			</div>
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
