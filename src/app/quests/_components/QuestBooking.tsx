"use client";

import { useState } from "react";
import { BookingModal } from "@/app/quests/_components/BookingModal";

export function QuestBooking() {
	const [isOpen, setIsOpen] = useState(false);
	return (
		<div className="flex justify-center sm:justify-start">
			<button
				type="button"
				onClick={() => {
					setIsOpen(true);
				}}
				className="px-15 py-5 bg-accent rounded-4xl font-bold text-lg hover:bg-accent-hover"
			>
				{"Забронювати".toUpperCase()}
			</button>
			<BookingModal isOpen={isOpen} onClose={() => setIsOpen(false)} />
		</div>
	);
}
