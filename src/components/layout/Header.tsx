import Image from "next/image";
import Link from "next/link";
import { Navigate } from "@/components/layout/Navigate";

export function Header() {
	return (
		<header className="hidden sm:flex items-center justify-between mx-auto px-3 max-w-[1536px] gap-1 py-2">
			<Link href="/">
				<Image
					src="/images/logo.svg"
					alt="logo"
					width={135}
					height={50}
				/>
			</Link>
			<Navigate />
			<a
				href="tel:+380441234567"
				className="lining-nums tabular-nums text-lg"
			>
				+38 (044) 123-45-67
			</a>
		</header>
	);
}
