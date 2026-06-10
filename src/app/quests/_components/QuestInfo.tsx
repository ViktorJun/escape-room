import Image from "next/image";

export type QuestInfoProps = {
	src: string;
	alt: string;
	information: string;
};

export function QuestInfo({ src, alt, information }: QuestInfoProps) {
	return (
		<div className="flex items-center gap-2">
			<Image
				src={src}
				alt={alt}
				width={20}
				height={20}
				aria-hidden="true"
			/>
			<p className="lining-nums tabular-nums">{information}</p>
		</div>
	);
}
