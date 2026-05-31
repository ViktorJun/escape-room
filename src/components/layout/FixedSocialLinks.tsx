import type { ComponentType, SVGProps } from "react";
import { InstagramIcon } from "@/components/icons/InstagramIcon";
import { YoutubeIcon } from "@/components/icons/YoutubeIcon";
import { TwitterIcon } from "@/components/icons/TwitterIcon";

type iconsType = {
	href: string;
	label: string;
	hoverClassName: string;
	Icon: ComponentType<SVGProps<SVGSVGElement>>;
};
const icons: iconsType[] = [
	{
		href: "https://www.instagram.com/",
		label: "Instagram",
		hoverClassName:
			"hover:text-hover-instagram hover:drop-shadow-[0_0_10px_var(--hover-instagram)]",
		Icon: InstagramIcon,
	},
	{
		href: "https://x.com/",
		label: "Twitter",
		hoverClassName:
			"hover:text-hover-twitter hover:drop-shadow-[0_0_10px_var(--hover-twitter)]",
		Icon: TwitterIcon,
	},
	{
		href: "https://www.youtube.com/",
		label: "YouTube",
		hoverClassName:
			"hover:text-hover-youtube hover:drop-shadow-[0_0_10px_var(--hover-youtube)]",
		Icon: YoutubeIcon,
	},
];
export function FixedSocialLinks() {
	return (
		<div className="fixed bottom-6 left-6 z-50 flex gap-4 2xl:left-[calc((100vw-1536px)/2+24px)]">
			{icons?.map(({ href, label, hoverClassName, Icon }) => (
				<a
					key={label}
					href={href}
					target="_blank"
					rel="noreferrer"
					aria-label={label}
					className={`text-[#535353] transition-colors duration-200 ${hoverClassName}`}
				>
					<Icon
						className="h-5 w-5"
						aria-hidden="true"
						focusable="false"
					/>
				</a>
			))}
		</div>
	);
}
