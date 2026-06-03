import Link from "next/link";
import Image from "next/image";

type LogoProps = { height: number; width: number };

export function Logo({ height, width }: LogoProps) {
    return (
        <Link href="/">
            <Image
                src="/images/logo.svg"
                alt="logo"
                height={height}
                width={width}
            />
        </Link>
    )
}