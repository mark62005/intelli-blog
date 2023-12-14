export type PostWithCategory = {
	id: string;
	title: string;
	content: string;
	snippet: string;
	imageUrl: string;
	author: string;
	categoryId: string;
	category: {
		id: string;
		name: string;
	};
	createdAt: Date;
	updatedAt: Date;
};
