import { StockRender } from "@/app/stock/_components/StockRender";
import { Stock } from "@/app/stock/_data/stock";

export default function StockPage() {
	return (
		<main className="flex flex-col gap-4 mx-auto max-w-[1536px] px-4 md:px-45 pt-30">
			<h3 className="text-accent text-lg">Квести у Києві</h3>
			<h1 className="text-7xl font-bold">Акції та пропозиції</h1>
			<h2 className="text-gray-400">
				Слідкуйте за нашими акціями та спеціальними пропозиціями.
				<br />
				Грайте більше — платіть менше!
			</h2>
			<StockRender arrayStock={Stock} />
		</main>
	);
}
