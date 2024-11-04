const PrivacyPage = () => {
	return (
		<div className="w-screen h-screen overflow-auto">
			<iframe
				src="/privatePolicy.html"
				style={{ width: "100%", height: "100%", border: "none" }}
				title="Privacy Policy"
			/>
		</div>
	);
};

export default PrivacyPage;
