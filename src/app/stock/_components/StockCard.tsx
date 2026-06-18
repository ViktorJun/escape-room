import Image from "next/image";

export type StockCardType = {
	title: string;
	description: string;
	footnote: string;
	stock: string;
	imageSrc: string;
	imageAlt: string;
};

export function StockCard({
	title,
	description,
	footnote,
	stock,
	imageSrc,
	imageAlt,
}: StockCardType) {
	return (
		<div className="group relative aspect-[4/3] overflow-hidden rounded">
			<Image
				src={imageSrc}
				alt={imageAlt}
				fill
				className="object-cover transition-transform duration-500 ease-out"
				sizes="(min-width: 1280px) 33vw, (min-width: 768px) 50vw, 100vw"
			/>
			<div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
			<div className="absolute left-4 top-5">
				<p className="bg-accent inline px-2 py-2 rounded lining-nums tabular-nums">
					{stock}
				</p>
			</div>
			<div className="absolute bottom-0 left-0 max-w-[80%] px-3 py-4">
				<h1 className="text-xl font-semibold ">{title}</h1>
				<h2 className="text-lg font-semibold text-gray-500 lining-nums tabular-nums">
					{description}
				</h2>
				<p className="text-md font-semibold text-accent lining-nums tabular-nums">
					{footnote}
				</p>
			</div>
		</div>
	);
}
