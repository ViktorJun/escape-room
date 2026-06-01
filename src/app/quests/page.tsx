import { GenreFilter } from "@/app/quests/_components/GenreFilter";
import { filterQuests } from "@/app/quests/_components/_lib/filterQuests";
import { quests } from "@/data/quests";
import { QuestsRender } from "@/app/quests/_components/QuestsRender";

export default async function QuestsPage({
	searchParams,
}: {
	searchParams: Promise<{ genre?: string }>;
}) {
	const { genre = "" } = await searchParams;
	const questsRender = filterQuests(quests, genre);
	return (
		<main className="flex flex-col gap-3 mx-auto max-w-[1536px] px-45 pt-10">
			<h3 className="text-accent text-lg">Квести у Києві</h3>
			<h1 className="text-7xl font-bold">Виберіть тематику</h1>
			<GenreFilter activeGenre={genre} />
			<QuestsRender arrayQuests={questsRender} />
		</main>
	);
}
