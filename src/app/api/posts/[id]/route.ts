import { db } from "@/lib/prisma";
import { NextResponse } from "next/server";

type TParams = {
	params: {
		id: string;
	};
};

export async function PATCH(req: Request, { params }: TParams) {
	try {
		const { id } = params;
		const { title, content } = await req.json();

		const post = await db.post.update({
			where: {
				id,
			},
			data: {
				title,
				content,
			},
		});

		return NextResponse.json(post, { status: 200 });
	} catch (error) {
		console.error("Request Error: ", error);
		NextResponse.json({ error: "Error updating post: " }, { status: 500 });
	}
}
