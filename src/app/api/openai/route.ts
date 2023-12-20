import { NextResponse } from "next/server";
import { openai } from "@/lib/openai";

export async function POST(request: Request) {
	try {
		const { title, role } = await request.json();
		const chatCompletion = await openai.chat.completions.create({
			messages: [
				{
					role: "user",
					// content: `Create small blog post with html tags based on this title: ${title}`,
					content: `Create 3 line blog post with html tags based on this title: ${title}`,
				},
				{
					role: "system",
					content: `${
						role ?? "I am a helpful assistant"
					}. Write with html tags.`,
				},
			],
			model: "gpt-3.5-turbo",
		});
		const contentResponse = chatCompletion.choices[0].message?.content;

		return NextResponse.json({ content: contentResponse }, { status: 200 });
	} catch (error) {
		console.error("Request Error: ", error);
		NextResponse.json(
			{ error: "Error generating AI content." },
			{ status: 500 }
		);
	}
}
