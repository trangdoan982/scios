import React from "react";

const BlobBackground: React.FC = () => {
	return (
		<div className="absolute inset-0 -z-10 w-full h-full overflow-hidden">
			<div className="animate-blobs bg-blobs w-full h-full"></div>
		</div>
	);
};

export default BlobBackground;
