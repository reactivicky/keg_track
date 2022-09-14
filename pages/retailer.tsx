import * as S from "../styles/Retailer.styled";
import Data from "../Data/Data";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

const colors = [
	"rgba(255, 99, 132, 1)",
	"rgba(54, 162, 235, 1)",
	"rgba(255, 206, 86, 1)",
	"rgba(75, 192, 192, 1)",
	"rgba(153, 102, 255, 1)",
	"#b3ff40",
	"#5040ff",
	"#db4c0f",
	"#40ffbf",
];

const filteredData = Data.filter((obj) => {
	if (obj.location === "Retailer" && obj.volume > 90 && obj.volume <= 100) {
		return true;
	}
	return false;
});
const obj: any = {};
for (let item of filteredData) {
	if (item.Product in obj) {
		obj[item.Product] = obj[item.Product] + 1;
	} else {
		obj[item.Product] = 1;
	}
}
const ordered = Object.entries(obj)
	.sort(([, a], [, b]) => (b as any) - (a as any))
	.reduce((r, [k, v]) => ({ ...r, [k]: v }), {});

export const data = {
	labels: Object.keys(ordered),
	datasets: [
		{
			label: "# of Votes",
			data: Object.values(ordered),
			backgroundColor: colors,
			borderColor: colors,
			borderWidth: 1,
		},
	],
};

const RetailerPage = () => {
	return (
		<S.Container
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
		>
			<S.Legend>
				{Object.keys(ordered).map((key: string, i) => {
					return (
						<S.ProductName key={key}>
							<div>
								<S.ColorCircle color={colors[i]} />
								<span>{key}</span>
							</div>
							<span>{(Object.values(ordered) as any)[i]}</span>
						</S.ProductName>
					);
				})}
			</S.Legend>
			<S.DonutContainer>
				<Doughnut
					data={data}
					options={{
						plugins: {
							legend: {
								display: false,
							},
							tooltip: {
								callbacks: {
									afterBody: function (t: any) {
										const kegArray = filteredData
											.filter((obj) => obj.Product === t[0].label)
											.map((a) => a.kegtrackerId);
										return `${kegArray.join(", ")}`;
									},
								},
							},
						},
						responsive: true,
					}}
				/>
			</S.DonutContainer>
			<S.Total>Total: {filteredData.length}</S.Total>
		</S.Container>
	);
};

export default RetailerPage;
