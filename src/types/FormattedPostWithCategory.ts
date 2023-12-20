export type FormattedPostWithCategory = {
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
	createdAt: string;
	updatedAt: string;
};
