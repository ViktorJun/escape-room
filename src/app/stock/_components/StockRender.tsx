import {
	StockCard,
	type StockCardType,
} from "@/app/stock/_components/StockCard";

type StockRenderProps = {
	arrayStock: StockCardType[];
};

export function StockRender({ arrayStock }: StockRenderProps) {
	return (
		<section className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3 pt-3">
			{arrayStock?.map((stock) => {
				return (
					<StockCard
						key={stock.title}
						title={stock.title}
						description={stock.description}
						footnote={stock.footnote}
						stock={stock.stock}
						imageSrc={stock.imageSrc}
						imageAlt={stock.imageAlt}
					/>
				);
			})}
		</section>
	);
}
