import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {bookingSchema, type BookingFormValues} from "@/app/quests/_schemas/bookingSchema";
import {CheckboxModal} from "@/components/layout/CheckboxModal";

type BookingModalProps = {
	isOpen: boolean;
	onClose: () => void;
};
type BookingFormType = {
	id: keyof BookingFormValues;
	label: string;
	placeholder: string;
	type: string;
}
const BookingFormFeatures: BookingFormType[] = [
	{
		id: 'name',
		label: `Ваше Ім'я`,
		placeholder: `Ім'я`,
		type: 'text',
	},
	{
		id: 'phone',
		label: 'Контактний телефон',
		placeholder: 'Телефон',
		type: 'text',
	},
	{
		id: 'numbOfPeople',
		label: 'Кількість учасників',
		placeholder: 'Кількість учасників',
		type: 'text',
	},
]

export function BookingModal({ isOpen, onClose }: BookingModalProps) {
	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm<BookingFormValues>({
		resolver: zodResolver(bookingSchema),
		mode: 'onChange',
		defaultValues: {
			name: '',
			phone: '',
			numbOfPeople: 1,
			agreement: false,
		},
	});
	function onSubmit(data: BookingFormValues) {
		console.log(data);
		reset();
	}
	function handleClose() {
		reset();
		onClose();
	}
	if (!isOpen) return null;
	return (
		<div className="fixed inset-0 z-50 flex items-center justify-center bg-overlay px-4">
			<div
				role="dialog"
				aria-modal="true"
				aria-labelledby="booking-modal-title"
				className="bg-surface flex flex-col max-w-[500px] px-10 pb-5 sm:pb-7 pt-5 sm:pt-12 gap-5 sm:gap-12"
			>
				<div className="flex items-center justify-between">
					<h2 id="booking-modal-title" className='font-bold text-3xl'>Залишити заявку</h2>
					<button
						type="button"
						onClick={handleClose}
						aria-label="Закрити"
						className="relative h-10 w-10"
					>
						<span className="absolute left-1/2 top-1/2 h-0.5 w-6 -translate-x-1/2 -translate-y-1/2 rotate-45 bg-foreground" />
						<span className="absolute left-1/2 top-1/2 h-0.5 w-6 -translate-x-1/2 -translate-y-1/2 -rotate-45 bg-foreground" />
					</button>
				</div>
				<form className="flex flex-col w-full gap-6" onSubmit={handleSubmit(onSubmit)}>
					{BookingFormFeatures?.map((item) => {
						return (
							<div className="flex flex-col w-full" key={item.id}>
								<label htmlFor={item.id} className='pb-3'>{item.label}</label>
								<input
									{...register(
										item.id,
										item.id === "numbOfPeople" ? { valueAsNumber: true } : undefined
									)}
									id={item.id}
									type={item.type}
									placeholder={item.placeholder}
									className={`${errors[item.id] ? "" : "mb-6"} px-6 py-4 border-2 border-border-light outline-none focus:border-border rounded-sm lining-nums tabular-nums`}
								/>
								{errors[item.id] && (
									<p className="text-sm text-error lining-nums tabular-nums pt-1">{errors[item.id]?.message}</p>
								)}
							</div>
						)
					})}
					<div className="flex items-center justify-center pt-5">
						<button type="submit" className='bg-accent hover:bg-accent-hover px-12 py-4 font-bold rounded-4xl'>
							{"Надіслати заявку".toUpperCase()}
						</button>
					</div>
					<CheckboxModal register={register} error={errors.agreement?.message}/>
				</form>
			</div>
		</div>
	);
}
