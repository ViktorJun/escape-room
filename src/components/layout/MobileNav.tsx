"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from 'react';

export type NavigateFeatures = {
    href: string;
    label: string;
};
type NavigateProps = {
    featuresNav: NavigateFeatures[];
};

export function MobileNav({ featuresNav }: NavigateProps) {
    const pathname = usePathname();
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div>
            <button
                type="button"
                aria-label={isOpen ? "Закрити меню" : "Відкрити меню"}
                aria-expanded={isOpen}
                onClick={() => setIsOpen((value) => !value)}
                className="relative flex h-10 w-10 items-center justify-center"
            >
                <span
                    className={`absolute h-0.5 w-6 rounded-full bg-foreground transition-transform duration-300 ${
                        isOpen ? "translate-y-0 rotate-45" : "-translate-y-2 rotate-0"
                    }`}
                />
                <span
                    className={`absolute h-0.5 rounded-full bg-foreground transition-all duration-300 ${
                        isOpen ? "w-0 opacity-0" : "w-6 opacity-100"
                    }`}
                />
                <span
                    className={`absolute h-0.5 w-6 rounded-full bg-foreground transition-transform duration-300 ${
                        isOpen ? "translate-y-0 -rotate-45" : "translate-y-2 rotate-0"
                    }`}
                />
            </button>
            {isOpen && (
                <nav className="absolute left-0 top-full z-50 w-full border-t border-border bg-background px-4 py-4 sm:hidden">
                    <div className="flex flex-col gap-4">
                        {featuresNav?.map((item) => {
                            const isActive =
                                item.href === "/"
                                    ? pathname === item.href
                                    : pathname.startsWith(item.href);
                            return (
                                <Link
                                    key={item.href}
                                    href={item.href}
                                    onClick={() => setIsOpen(false)}
                                    className={
                                        isActive
                                            ? "text-accent"
                                            : "text-foreground hover:text-text-secondary"
                                    }
                                >
                                    {item.label.toUpperCase()}
                                </Link>
                            );
                        })}
                    </div>
                </nav>
            )}
        </div>
    );
}
