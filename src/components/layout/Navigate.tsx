"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

type navigateFeatures = {
	href: string;
	label: string;
};

const features: navigateFeatures[] = [
	{
		href: "/quests",
		label: "Квести",
	},
	{
		href: "/reviews",
		label: "Відгуки",
	},
	{
		href: "/contacts",
		label: "Контакти",
	},
	{
		href: "/stock",
		label: "Акції",
	},
];

export function Navigate() {
	const pathname = usePathname();
	return (
		<nav className="flex items-center justify-center gap-6 lg:gap-15">
			{features?.map((item) => {
				const isActive =
					item.href === "/"
						? pathname === item.href
						: pathname.startsWith(item.href);
				return (
					<Link
						key={item.href}
						href={item.href}
						className={`text-lg ${isActive ? "text-accent" : "hover:text-text-secondary"}`}
					>
						{item.label.toUpperCase()}
					</Link>
				);
			})}
		</nav>
	);
}
