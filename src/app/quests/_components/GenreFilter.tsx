import Link from "next/link";
import Image from "next/image";

type genresType = {
	title: string;
	value: string;
	icon: string;
};
type GenreFilterProps = {
	activeGenre?: string;
};

const genres: genresType[] = [
	{
		title: "Усі квести",
		value: "",
		icon: "/icons/genres/icon-all-quests.svg",
	},
	{
		title: "Пригоди",
		value: "adventures",
		icon: "/icons/genres/icon-adventures.svg",
	},
	{
		title: "Жахи",
		value: "horrors",
		icon: "/icons/genres/icon-horrors.svg",
	},
	{
		title: "Містика",
		value: "mysticism",
		icon: "/icons/genres/icon-mystic.svg",
	},
	{
		title: "Детектив",
		value: "detective",
		icon: "/icons/genres/icon-detective.svg",
	},
	{
		title: "Sci-fi",
		value: "sci-fi",
		icon: "/icons/genres/icon-scifi.svg",
	},
];

export function GenreFilter({ activeGenre = "" }: GenreFilterProps) {
	return (
		<div className="w-full overflow-x-auto xl:overflow-visible">
			<div className="flex min-w-max items-center justify-center xl:min-w-0 xl:w-full">
				{genres.map((genre) => {
					const href = genre.value
						? `/quests?genre=${genre.value}`
						: "/quests";
					const isActive = activeGenre === genre.value;
					return (
						<Link
							key={genre.value || "all"}
							href={href}
							className="relative flex shrink-0 items-center gap-4 border-r border-border px-3 pb-3 pt-2 text-sm last:border-r-0 xl:px-5 xl:text-base"
						>
							<Image
								src={genre.icon}
								alt=""
								width={26}
								height={26}
								aria-hidden="true"
							/>
							<span>{genre.title}</span>
							<span
								className={`absolute bottom-0 left-3 right-3 h-0.5 origin-left bg-accent transition-transform duration-300 ${
									isActive
										? "scale-x-100"
										: "scale-x-0 group-hover:scale-x-100"
								}`}
							/>
						</Link>
					);
				})}
			</div>
		</div>
	);
}
