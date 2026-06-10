import type { UseFormRegister } from "react-hook-form";
import type {BookingFormValues} from "@/app/quests/_schemas/bookingSchema";

type CheckboxModalProps = {
    register: UseFormRegister<BookingFormValues>;
    error?: string;
};

export function CheckboxModal({ register, error }: CheckboxModalProps) {
    return (
        <>
            <label className={`flex cursor-pointer items-center gap-3`}>
                <input
                    {...register("agreement")}
                    type="checkbox"
                    id="agreement"
                    name="agreement"
                    className="peer sr-only"
                />
                <span className="flex h-5 w-5 shrink-0 items-center justify-center border border-border text-background transition-colors peer-checked:border-accent peer-checked:bg-accent peer-checked:[&>svg]:opacity-100 rounded-sm">
							<svg
                                className="h-3 w-3 opacity-0 transition-opacity"
                                viewBox="0 0 12 10"
                                fill="none"
                            >
								<path
                                    d="M1 5L4.5 8.5L11 1"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                />
							</svg>
						</span>
                <span className="text-sm leading-5">
							Я згоден з правилами обробки персональних даних та користувальницькою угодою
						</span>
            </label>
            <p className="min-h-5 text-sm text-error">
                {error ?? ""}
            </p>
        </>
    )
}