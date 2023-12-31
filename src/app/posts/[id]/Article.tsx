import { Editor, EditorContent } from "@tiptap/react";
import { cn } from "@/lib/utils";
import EditorMenuBar from "./EditorMenuBar";
import ContentGenerator from "./ContentGenerator";

type ArticleProps = {
	editor: Editor | null;
	isEditable: boolean;
	title: string;
	setContent: (content: string) => void;
	contentError: string;
};

const Article = ({
	editor,
	isEditable,
	title,
	setContent,
	contentError,
}: ArticleProps) => {
	if (!editor) return null;

	return (
		<div>
			{/* AI Generator */}
			{isEditable ? (
				<ContentGenerator
					editor={editor}
					title={title}
					setContent={setContent}
				/>
			) : null}

			<div
				className={cn(
					isEditable ? "border-2 rounded-md bg-white p-3" : "w-full max-w-full"
				)}
			>
				{isEditable ? (
					<>
						<EditorMenuBar editor={editor} />
						<hr className="border mt-2 mb-5" />
					</>
				) : null}
				<EditorContent editor={editor} />
			</div>

			{contentError ? (
				<p className="mt-1 text-slate-700">{contentError}</p>
			) : null}
		</div>
	);
};
export default Article;
