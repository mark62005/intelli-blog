import { Button } from "@/components/ui/button";
import { Editor } from "@tiptap/react";
import { PenSquare } from "lucide-react";

type PostHeaderProps = {
	categoryName: string;
	editor: Editor | null;
	isEditable: boolean;
	handleIsEditable: (isEditable: boolean) => void;
	title: string;
	setTitle: (title: string) => void;
	cachedTitle: string;
	setCachedTitle: (cachedTitle: string) => void;
	cachedContent: string;
	setCachedContent: (cachedContent: string) => void;
};

const PostHeader = ({
	categoryName,
	editor,
	isEditable,
	handleIsEditable,
	title,
	setTitle,
	cachedTitle,
	setCachedTitle,
	cachedContent,
	setCachedContent,
}: PostHeaderProps) => {
	const handleEnableEdit = () => {
		handleIsEditable(!isEditable);
		setCachedTitle(title);
		setCachedContent(editor?.getHTML() ?? "");
	};

	const handleCancelEdit = () => {
		handleIsEditable(!isEditable);
		setTitle(cachedTitle);
		editor?.commands.setContent(cachedContent);
	};

	return (
		<div className="flex justify-between items-center gap-y-6">
			<h4 className="bg-accent-yellow font-bold text-base py-2 px-6">
				{categoryName}
			</h4>

			{isEditable ? (
				<div className="flex justify-between gap-3">
					<Button
						variant="ghost"
						onClick={handleCancelEdit}
					>
						<PenSquare className="h-6 w-6 text-accent-orange" />
					</Button>
				</div>
			) : (
				<Button
					variant="ghost"
					onClick={handleEnableEdit}
				>
					<PenSquare className="h-6 w-6 text-accent-orange" />
				</Button>
			)}
		</div>
	);
};
export default PostHeader;
