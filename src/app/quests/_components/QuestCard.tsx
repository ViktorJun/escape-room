import Image from "next/image";
import Link from "next/link";
import {Quest} from "@/app/quests/_components/_lib/filterQuests";

export type QuestCardProps = Omit<Quest, "genre">;

export function QuestCard({
	slug,
	title,
	playersMin,
	playersMax,
	level,
	imageSrc,
	imageAlt,
}: QuestCardProps) {
	return (
		<Link
			href={`quests/${slug}`}
			className="group relative aspect-[4/3] overflow-hidden rounded"
		>
			<Image
				src={imageSrc}
				alt={imageAlt}
				fill
				className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
				sizes="(min-width: 1280px) 33vw, (min-width: 768px) 50vw, 100vw"
			/>
			<div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />
			<div className="absolute bottom-0 left-0 p-5">
				<h3 className="text-xl font-semibold text-white">{title}</h3>
				<div className="mt-2 flex items-center gap-3 text-sm text-white">
					<div className="flex items-center gap-2">
						<Image
							src="/icons/quests/icon-person.svg"
							alt="Person"
							width={20}
							height={20}
							aria-hidden="true"
						/>
						<p className="lining-nums tabular-nums">
							{`${playersMin}-${playersMax} осіб`}
						</p>
					</div>
					<span className="h-4 w-px bg-white/60" />
					<div className="flex items-center gap-2">
						<Image
							src="/icons/quests/icon-puzzle.svg"
							alt="Puzzle"
							width={20}
							height={20}
							aria-hidden="true"
						/>
						<p>{level}</p>
					</div>
				</div>
			</div>
		</Link>
	);
}
