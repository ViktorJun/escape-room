import { Navigate, type NavigateFeatures } from "@/components/layout/Navigate";
import { Logo } from "@/components/layout/Logo";
import { MobileNav } from "@/components/layout/MobileNav";

export const features: NavigateFeatures[] = [
	{
		href: "/quests",
		label: "Квести",
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

export function Header() {
	return (
		<header className="fixed left-0 top-0 z-50 w-full bg-background/30 backdrop-blur-xs">
			<div className="hidden sm:flex items-center justify-between mx-auto px-3 max-w-[1536px] gap-1 py-3">
				<Logo height={50} width={135} />
				<Navigate featuresNav={features} />
				<a
					href="tel:+380441234567"
					className="lining-nums tabular-nums text-lg"
				>
					+38 (044) 123-45-67
				</a>
			</div>
			<div className="flex sm:hidden items-center justify-between px-3 py-3">
				<Logo height={45} width={125} />
				<MobileNav featuresNav={features} />
			</div>
		</header>
	);
}
