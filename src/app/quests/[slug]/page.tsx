import { notFound } from "next/navigation";
import { aboutQuests } from "@/app/quests/_data/aboutQuests";
import { Fragment } from "react";
import { QuestInfo, type QuestInfoProps } from "@/components/layout/QuestInfo";
import { QuestBooking } from "@/app/quests/_components/QuestBooking";

type QuestPageProps = {
	params: Promise<{
		slug: string;
	}>;
};

export default async function QuestPage({ params }: QuestPageProps) {
	const { slug } = await params;

	const quest = aboutQuests.find((quest) => quest.slug === slug);

	if (!quest) {
		notFound();
	}
	const QuestInfoFeatures: QuestInfoProps[] = [
		{
			src: "/icons/quests/icon-clock.svg",
			alt: "Clock",
			information: `${quest.duration} хв`,
		},
		{
			src: "/icons/quests/icon-person.svg",
			alt: "Person",
			information: `${quest.playersMin}-${quest.playersMax} осіб`,
		},
		{
			src: "/icons/quests/icon-puzzle.svg",
			alt: "Puzzle",
			information: `${quest.level}`,
		},
	];
	return (
		<main
			className="relative min-h-screen bg-cover bg-center bg-no-repeat pt-40"
			style={{ backgroundImage: `url(${quest.backgroundSrc})` }}
		>
			<div className="absolute inset-0 bg-black/60" />
			<div className="relative z-10 mx-auto grid w-full max-w-[1536px] grid-cols-1 px-4 lg:grid-cols-2">
				<section className="flex flex-col gap-7 lg:col-start-2 lg:px-8">
					<h3 className="text-accent text-lg pb-4">{quest.genre}</h3>
					<h1 className="text-9xl font-bold">{quest.title}</h1>
					<div className="flex items-center gap-5">
						{QuestInfoFeatures?.map((item, index) => {
							return (
								<Fragment key={item.information}>
									{index > 0 && (
										<span className="h-8 w-px bg-white/60" />
									)}
									<QuestInfo
										src={item.src}
										alt={item.alt}
										information={item.information}
									/>
								</Fragment>
							);
						})}
					</div>
					<p className="text-lg">{quest.description}</p>
					<QuestBooking />
				</section>
			</div>
		</main>
	);
}
