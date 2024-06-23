import { generateFiles } from 'fumadocs-openapi';
 
try {
	void generateFiles({
		input: ["./api.json"],
		output: "./content/docs",
		per: "tag",
		name: (tag,name) => {
			return  `${name}`;
		}
	});
	
} catch (error) {
	 console.error(error);
}
