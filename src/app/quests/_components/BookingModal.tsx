type BookingModalProps = {
	isOpen: boolean;
	onClose: () => void;
};

export function BookingModal({ isOpen, onClose }: BookingModalProps) {
	if (!isOpen) return null;
	return (
		<div className="fixed inset-0 z-50 bg-black/70">
			<div
				role="dialog"
				aria-modal="true"
				aria-labelledby="booking-modal-title"
				className=""
			>
				<div>
					<h2 id="booking-modal-title">Залишити заявку</h2>
					<button type="button" onClick={onClose}>
						Закрити
					</button>
				</div>
				<form>
					<div>
						<label htmlFor="">{`Ваше Ім'я`}</label>
						<input type="text" placeholder={`Ім'я`} />
					</div>
					<div>
						<label htmlFor="">Контактний телефон</label>
						<input type="text" placeholder="Телефон" />
					</div>
					<div>
						<label htmlFor="">Кількість учасників</label>
						<input type="text" placeholder="Кількість учасників" />
					</div>
					<button type="submit">
						{"Надіслати заявку".toUpperCase()}
					</button>
				</form>
			</div>
		</div>
	);
}
