"use server";
import { Category } from "@prisma/client";
import { db } from "../prisma";
import { PostWithCategory } from "@/types/PostWithCategory";
import { PostsNotFoundError } from "../errors";

export const getPosts = async (): Promise<PostWithCategory[]> => {
	const posts = await db.post.findMany({
		include: {
			category: true,
		},
	});
	if (posts.length < 1) throw PostsNotFoundError;

	return posts;
};

export const getPostsOfACategory = async (
	categoryName?: Category["name"]
): Promise<PostWithCategory[]> => {
	let posts: PostWithCategory[];

	if (categoryName === undefined) {
		posts = await db.post.findMany({
			include: {
				category: true,
			},
			take: 4,
		});
	} else {
		posts = await db.post.findMany({
			where: {
				category: {
					name: categoryName,
				},
			},
			include: {
				category: true,
			},
		});
	}
	if (posts.length < 1) throw PostsNotFoundError;

	return posts;
};
