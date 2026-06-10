import { Maps } from "@/app/contacts/_components/Maps";

type ContactsInfoType = {
	title: string;
	description: string;
	href?: string;
};

const contactsInfoFeatures: ContactsInfoType[] = [
	{
		title: "Адреса",
		description: "Місто Київ,\nвулиця Володимирська, 51/53",
	},
	{
		title: "Режим роботи",
		description: "Щоденно, з 9:00 до 20:00",
	},
	{
		title: "Телефон",
		description: "+38 (044) 123-45-67",
		href: "tel:+380441234567",
	},
	{
		title: "E-mail",
		description: "info@escape-room.ua",
		href: "mailto:info@escape-room.ua",
	},
];

export default function ContactPage() {
	return (
		<main className="flex flex-col gap-4 mx-auto max-w-[1536px] px-4 md:px-45 pt-30">
			<h3 className="text-accent text-lg">Квести у Києві</h3>
			<h1 className="text-7xl font-bold">Контакти</h1>
			<span className="block h-px w-full bg-border-light my-5 sm:my-10" />
			<section className="grid gap-10 sm:gap-0 sm:grid-cols-3 px-3">
				<div className="flex flex-col gap-6 sm:gap-12">
					{contactsInfoFeatures?.map((item) => {
						return (
							<div
								className="flex flex-col gap-3"
								key={item.title}
							>
								<h4 className="font-bold text-xl">
									{item.title}
								</h4>
								{item.href ? (
									<p className="whitespace-pre-line lining-nums tabular-nums">
										{item.description}
									</p>
								) : (
									<a
										href={item.href}
										className="lining-nums tabular-nums"
									>
										{item.description}
									</a>
								)}
							</div>
						);
					})}
				</div>
				<div className="sm:col-span-2 mb-5 sm:mb-0">
					<Maps />
				</div>
			</section>
		</main>
	);
}
