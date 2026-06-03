"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export type NavigateFeatures = {
	href: string;
	label: string;
};
type NavigateProps = {
	featuresNav: NavigateFeatures[];
};

export function Navigate({ featuresNav }: NavigateProps) {
	const pathname = usePathname();
	return (
		<nav className="flex items-center justify-center gap-6 lg:gap-15">
			{featuresNav?.map((item) => {
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
