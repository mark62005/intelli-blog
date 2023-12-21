import { ChangeEvent, useState } from "react";
import { Editor } from "@tiptap/react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Rocket } from "lucide-react";

type ContentGeneratorProps = {
	editor: Editor | null;
	title: string;
	setContent: (content: string) => void;
};

const ContentGenerator = ({
	editor,
	title,
	setContent,
}: ContentGeneratorProps) => {
	const [role, setRole] = useState<string>("I am a helpful assistant.");

	const handleOnRoleChange = (e: ChangeEvent<HTMLInputElement>) => {
		setRole(e.target.value.trim());
	};

	const handleOnGenerateAIContentButtonClicked = async () => {
		editor
			?.chain()
			.focus()
			.setContent("Generating AI Content. Please Wait...")
			.run();

		const response = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/openai`, {
			method: "POST",
			body: JSON.stringify({
				title: title,
				role: role,
			}),
		});
		const data = await response.json();

		editor?.chain().focus().setContent(data.content).run();
		setContent(data.content);
	};

	return (
		<div className="border-2 rounded-md bg-slate-100 p-3 mb-3">
			<h4 className="">Generate AI Content</h4>
			<p className="my-1">What type of writer do you want?</p>
			<div className="flex justify-between gap-5">
				<Input
					value={role}
					onChange={handleOnRoleChange}
					placeholder="I am a helpful assistant."
					className=""
				/>
				<Button
					type="button"
					onClick={handleOnGenerateAIContentButtonClicked}
					variant="ghost"
					className="hover:bg-slate-200"
				>
					<Rocket className="h-6 w-6 text-accent-yellow" />
				</Button>
			</div>
		</div>
	);
};
export default ContentGenerator;
