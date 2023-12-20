"use client";
import { ChangeEvent, FormEvent, useState } from "react";
import Image from "next/image";
import { FormattedPostWithCategory } from "@/types/FormattedPostWithCategory";
import { useEditor, EditorContent, EditorEvents } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { cn, formatDate } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import EditorMenuBar from "./EditorMenuBar";
import SocialLinks from "@/components/SocialLinks";
import PostHeader from "./PostHeader";
import Article from "./Article";

type PostContentProps = {
	post: FormattedPostWithCategory;
};

const PostContent = ({ post }: PostContentProps) => {
	const [isEditable, setIsEditable] = useState<boolean>(false);

	const [title, setTitle] = useState<string>(post.title);
	const [titleError, setTitleError] = useState<string>("");
	const [cachedTitle, setCachedTitle] = useState<string>("");

	const [content, setContent] = useState<string>(post.content);
	const [contentError, setContentError] = useState<string>("");
	const [cachedContent, setCachedContent] = useState<string>("");

	const formattedDate = formatDate(post?.createdAt);

	const handleOnTitleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
		e.preventDefault();

		if (title) setTitleError("");
		setTitle(e.target.value);
	};

	const handleOnContentChange = (props: EditorEvents["update"]): void => {
		const { editor } = props;
		if (!editor.isEmpty) setContentError("");
		setContent(editor.getHTML());
	};

	const handleIsEditable = (bool: boolean) => {
		setIsEditable(bool);
		editor?.setEditable(bool);
	};

	const editor = useEditor({
		extensions: [StarterKit],
		onUpdate: handleOnContentChange,
		editorProps: {
			attributes: {
				class:
					"prose prose-sm lg:prose-lg leading-8 focus:outline-none w-full max-w-full",
			},
		},
		content: content,
		editable: isEditable,
	});

	const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		// Validation checks
		if (title === "") setTitleError("This field is required.");
		if (editor?.isEmpty) setContentError("This field is required.");
		if (title === "" || editor?.isEmpty) return;

		const response = await fetch(
			`${process.env.NEXT_PUBLIC_URL}/api/posts/${post?.id}`,
			{
				method: "PATCH",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({
					title: title,
					content: content,
				}),
			}
		);

		const data = await response.json();

		handleIsEditable(false);
		setCachedTitle("");
		setCachedContent("");

		setTitle(data.title);
		setContent(data.content);
		editor?.commands.setContent(data.content);
	};

	return (
		<article className="prose mb-10">
			{/* BREADCRUMBS */}
			<h5 className="line-clamp-1">{`Home > ${post.category.name} > ${post.title}`}</h5>

			{/* CATEGORY AND EDIT BUTTON */}
			<PostHeader
				categoryName={post.category.name}
				editor={editor}
				isEditable={isEditable}
				handleIsEditable={handleIsEditable}
				title={title}
				setTitle={setTitle}
				cachedTitle={cachedTitle}
				setCachedTitle={setCachedTitle}
				cachedContent={cachedContent}
				setCachedContent={setCachedContent}
			/>

			{/* FORM */}
			<form onSubmit={handleSubmit}>
				{/* HEADER */}
				<>
					{isEditable ? (
						<div className="">
							<Textarea
								value={title}
								onChange={handleOnTitleChange}
								placeholder="Title"
								className="border-2 rounded-md bg-white p-3 w-full resize-none"
							/>
							{titleError ? (
								<p className="mt-1 text-destructive">{titleError}</p>
							) : null}
						</div>
					) : (
						<h1 className="font-bold text-3xl mt-3">{title}</h1>
					)}

					<div className="flex gap-3">
						<h5 className="font-semibold text-sm">By {post.author}</h5>
						{/* TODO: Formate date */}
						<h6 className="text-muted-foreground text-sm">{formattedDate}</h6>
					</div>
				</>

				{/* IMAGE */}
				<div className="relative w-auto mt-2 mb-16 h-96">
					<Image
						src={post.imageUrl}
						alt={post.title}
						fill
						sizes="
								(max-width: 480px) 95vw,
								(max-width: 768px) 85vw,
								(max-width: 1060px) 75vw,
								60vw
							"
						className="object-cover"
					/>
				</div>

				{/* CONTENT */}
				<Article
					editor={editor}
					isEditable={isEditable}
					title={title}
					setContent={setContent}
					contentError={contentError}
				/>

				{/* SUBMIT BUTTON */}
				{isEditable ? (
					<div className="flex justify-end">
						<Button
							type="submit"
							className="bg-accent-yellow"
						>
							SUBMIT
						</Button>
					</div>
				) : null}
			</form>

			{/* SOCIAL LINKS */}
			<div className="hidden lg:block mt-10 w-1/3">
				<SocialLinks />
			</div>
		</article>
	);
};
export default PostContent;
