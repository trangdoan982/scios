const Footer = () => {
	return (
		<footer className="flex flex-col w-full px-6 md:px-16">
			<div className="flex justify-between border-b border-dark-grey items-center">
				<img src="/logo.svg" alt="SciOS" className="pb-2" />
				<p className="text-sm font-bold text-dark-grey">
					@2024 SciOS 501(c)(3)
				</p>
			</div>
			<div className="flex items-center justify-start flex-col md:flex-row md:justify-between md:w-full">
				<div className="flex flex-col justify-center w-full md:w-fit">
					<a href="#product">Mission</a>
					<a href="#projects">Supporting projects</a>
					<a href="#upcoming-events">Upcoming events</a>
					<a href="#past-events">Resources</a>
					<a href="" target="_blank">
						Funding deck
					</a>
				</div>
				<iframe
					src="https://trangdoan.substack.com/embed"
					width="480"
					height="200"
					style={{
						backgroundColor: "white",
					}}
					frameBorder="0"
					scrolling="no"
				></iframe>
				<div className="flex flex-col w-full md:justify-center md:items-center md:w-fit">
					<a href="">Privacy Policy</a>
					<a href="">Terms of usage</a>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
