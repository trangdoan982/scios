"use client";

import Image from "next/image";
import NewsletterSubscription from "../newsletterSubscription";

const Footer = () => {
	return (
		<footer className="flex flex-col w-full px-6 md:px-16">
			<div className="flex justify-between border-b border-dark-grey items-center">
				<img src="/logo.svg" alt="SciOS" className="pb-2" />
				<p className="text-sm font-bold text-dark-grey">@2024 SciOS</p>
			</div>
			<div className="flex items-center justify-start flex-col md:flex-row md:justify-between md:w-full gap-6 py-4">
				<div className="flex flex-col justify-center w-full md:w-fit">
					<a href="#product">Mission</a>
					<a href="#projects">Supported projects</a>
					<a href="#upcoming-events">Upcoming events</a>
					<a href="#past-events">Resources</a>
					<a
						href="https://www.papermark.io/view/cm29av6dy0008acuhayqq4oya"
						target="_blank"
					>
						Funding deck
					</a>
				</div>
				<NewsletterSubscription />
				<div className="flex flex-col w-full md:justify-center md:items-center md:w-fit">
					<a href="/privacy">Privacy Policy</a>
					<a href="/privacy">Terms of usage</a>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
