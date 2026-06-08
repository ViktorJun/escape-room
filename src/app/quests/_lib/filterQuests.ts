export type Quest = {
	slug: string;
	title: string;
	playersMin: string;
	playersMax: string;
	genre: string;
	level: string;
	imageSrc: string;
	imageAlt: string;
};
export function filterQuests(quests: Quest[], activeGenre: string): Quest[] {
	if (!activeGenre) {
		return quests;
	}
	return quests.filter((quest) => quest.genre === activeGenre);
}
