import { GenreFilter } from "@/app/quests/_components/GenreFilter";

export default async function QuestsPage({
	searchParams,
}: {
	searchParams: Promise<{ genre?: string }>;
}) {
	const { genre = "" } = await searchParams;
	return (
		<main className="flex flex-col gap-3 mx-auto max-w-[1536px] px-45 pt-10">
			<h3 className="text-accent text-lg">Квести у Києві</h3>
			<h1 className="text-7xl font-bold">Виберіть тематику</h1>
			<GenreFilter activeGenre={genre} />
		</main>
	);
}
