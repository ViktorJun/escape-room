import { QuestCard, QuestCardProps } from "@/app/quests/_components/QuestCard";

type QuestsRenderProps = {
	arrayQuests: QuestCardProps[];
};
export function QuestsRender({ arrayQuests }: QuestsRenderProps) {
	return (
		<section className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3 pt-3">
			{arrayQuests?.map((quest) => {
				return (
					<QuestCard
						key={quest.slug}
						slug={quest.slug}
						title={quest.title}
						playersMin={quest.playersMin}
						playersMax={quest.playersMax}
						level={quest.level}
						imageSrc={quest.imageSrc}
						imageAlt={quest.imageAlt}
					/>
				);
			})}
		</section>
	);
}
