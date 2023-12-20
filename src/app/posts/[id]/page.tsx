import { Post } from "@prisma/client";
import { db } from "@/lib/prisma";
import { FormattedPostWithCategory } from "@/types/FormattedPostWithCategory";
import { PostsNotFoundError } from "@/lib/errors";

import MaxWidthContainer from "@/components/MaxWidthContainer";
import Sidebar from "@/components/Sidebar";
import PostContent from "./PostContent";

type PostPageProps = { params: { id: string } };

const getPost = async (id: Post["id"]): Promise<FormattedPostWithCategory> => {
	const post = await db.post.findFirst({
		where: {
			id,
		},
		include: {
			category: true,
		},
	});
	if (!post) throw PostsNotFoundError;

	return {
		...post,
		createdAt: post.createdAt.toISOString(),
		updatedAt: post.updatedAt.toISOString(),
	};
};

const PostPage = async ({ params }: PostPageProps) => {
	const { id } = params;
	const post: FormattedPostWithCategory | null = await getPost(id);

	if (!post) {
		return <div className="">404 Post Not Found</div>;
	}

	return (
		<main className="relative min-h-screen">
			<MaxWidthContainer>
				<div className="my-10 lg:flex lg:gap-10">
					<div className="basis-3/4">
						<PostContent post={post} />
					</div>

					<Sidebar className="basis-1/4" />
				</div>
			</MaxWidthContainer>
		</main>
	);
};
export default PostPage;
