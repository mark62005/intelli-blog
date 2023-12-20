import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Color } from "@tiptap/extension-color";
import ListItem from "@tiptap/extension-list-item";
import TextStyle from "@tiptap/extension-text-style";
import { Editor, EditorProvider, useCurrentEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";

type EditorMenuBarProps = {
	editor?: Editor | null;
};

const buttonClassName = "px-2 py-1 h-auto";

const EditorMenuBar = ({ editor }: EditorMenuBarProps) => {
	if (!editor) {
		return null;
	}

	return (
		<div className="flex flex-wrap justify-start items-center">
			<Button
				type="button"
				variant="ghost"
				onClick={() => editor.chain().focus().toggleBold().run()}
				disabled={!editor.can().chain().focus().toggleBold().run()}
				className={cn(buttonClassName, {
					"bg-slate-500 text-slate-50": editor.isActive("bold"),
				})}
			>
				B
			</Button>
			<Button
				type="button"
				variant="ghost"
				onClick={() => editor.chain().focus().toggleItalic().run()}
				disabled={!editor.can().chain().focus().toggleItalic().run()}
				className={cn(buttonClassName, {
					"bg-slate-500 text-slate-50": editor.isActive("italic"),
				})}
			>
				/
			</Button>
			<Button
				type="button"
				variant="ghost"
				onClick={() => editor.chain().focus().setParagraph().run()}
				className={cn("px-2 py-1 h-auto", {
					"bg-slate-500 text-slate-50": editor.isActive("paragraph"),
				})}
			>
				paragraph
			</Button>
			<Button
				type="button"
				variant="ghost"
				onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
				className={cn(buttonClassName, {
					"bg-slate-500 text-slate-50": editor.isActive("heading", {
						level: 1,
					}),
				})}
			>
				h1
			</Button>
			<Button
				type="button"
				variant="ghost"
				onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
				className={cn(buttonClassName, {
					"bg-slate-500 text-slate-50": editor.isActive("heading", {
						level: 2,
					}),
				})}
			>
				h2
			</Button>
			<Button
				type="button"
				variant="ghost"
				onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}
				className={cn(buttonClassName, {
					"bg-slate-500 text-slate-50": editor.isActive("heading", {
						level: 3,
					}),
				})}
			>
				h3
			</Button>
			<Button
				type="button"
				variant="ghost"
				onClick={() => editor.chain().focus().toggleHeading({ level: 4 }).run()}
				className={cn(buttonClassName, {
					"bg-slate-500 text-slate-50": editor.isActive("heading", {
						level: 4,
					}),
				})}
			>
				h4
			</Button>
			<Button
				type="button"
				variant="ghost"
				onClick={() => editor.chain().focus().toggleHeading({ level: 5 }).run()}
				className={cn(buttonClassName, {
					"bg-slate-500 text-slate-50": editor.isActive("heading", {
						level: 5,
					}),
				})}
			>
				h5
			</Button>
			<Button
				type="button"
				variant="ghost"
				onClick={() => editor.chain().focus().toggleHeading({ level: 6 }).run()}
				className={cn(buttonClassName, {
					"bg-slate-500 text-slate-50": editor.isActive("heading", {
						level: 6,
					}),
				})}
			>
				h6
			</Button>
			<Button
				type="button"
				variant="ghost"
				onClick={() => editor.chain().focus().toggleBulletList().run()}
				className={cn(buttonClassName, {
					"bg-slate-500 text-slate-50": editor.isActive("bulletList"),
				})}
			>
				bullet list
			</Button>
			<Button
				type="button"
				variant="ghost"
				onClick={() => editor.chain().focus().toggleOrderedList().run()}
				className={cn(buttonClassName, {
					"bg-slate-500 text-slate-50": editor.isActive("orderedList"),
				})}
			>
				ordered list
			</Button>
			<Button
				type="button"
				variant="ghost"
				onClick={() => editor.chain().focus().toggleBlockquote().run()}
				className={cn(buttonClassName, {
					"bg-slate-500 text-slate-50": editor.isActive("blockquote"),
				})}
			>
				blockquote
			</Button>
			<Button
				type="button"
				variant="ghost"
				onClick={() => editor.chain().focus().undo().run()}
				disabled={!editor.can().chain().focus().undo().run()}
				className={cn(buttonClassName)}
			>
				undo
			</Button>
			<Button
				type="button"
				variant="ghost"
				onClick={() => editor.chain().focus().redo().run()}
				disabled={!editor.can().chain().focus().redo().run()}
				className={cn(buttonClassName)}
			>
				redo
			</Button>
			<Button
				type="button"
				variant="ghost"
				onClick={() => editor.chain().focus().setColor("#958DF1").run()}
				className={cn(buttonClassName, {
					"bg-slate-500 text-slate-50": editor.isActive("textStyle", {
						color: "#958DF1",
					}),
				})}
			>
				purple
			</Button>
		</div>
	);
};

export default EditorMenuBar;
