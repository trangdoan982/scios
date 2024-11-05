interface Speaker {
	imageUrl: string;
	name: string;
	affiliation: string;
}

const speakers: Speaker[] = [
	{
		imageUrl:
			"https://scios.tech/wp-content/uploads/brizy/imgs/Headshot-Square-203x203x0x1x203x201x1719427997.jpg",
		name: "Jonathan Starr",
		affiliation: "SciOS",
	},
	{
		imageUrl: "https://scios.tech/wp-content/uploads/2024/06/Ellie-150x150.jpg",
		name: "Ellie",
		affiliation: "SciOS",
	},
];
const jsonString = JSON.stringify(speakers, null, 0);

// TODO: don't copy the outer quotation marks. For example, only take
// [{"imageUrl":"https://imagelink","name":"Jon","affiliation":"SciOS"},{"imageUrl":"https://imagelink2","name":"Ellie","affiliation":"SciOS"}]
// to the final google sheets
console.log(jsonString);
