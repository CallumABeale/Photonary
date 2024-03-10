export interface Result {
	resources: [
		{
			public_id: string;
			filename: string;
			context: {
				alt: string;
			};
		}
	];
}
