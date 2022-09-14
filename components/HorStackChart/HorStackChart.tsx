import {
	Chart as ChartJS,
	CategoryScale,
	LinearScale,
	BarElement,
	Title,
	Tooltip,
	Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import Data from "../../Data/Data";

ChartJS.register(
	CategoryScale,
	LinearScale,
	BarElement,
	Title,
	Tooltip,
	Legend
);

const colors = [
	"#f58ae8",
	"#f1b725",
	"#64efa6",
	"#fd686c",
	"#168bef",
	"#ae1ed6",
	"#f98c3d",
];

const filteredData = Data.reduce(
	(
		a: {
			label: string;
			data: number[];
		}[],
		c
	) => {
		const sameKeg: any = a.find((kegData: any) => kegData.label === c.Type);
		if (sameKeg) {
			sameKeg.data[0] = sameKeg.data[0] + 1;
		} else {
			a.push({
				label: c.Type,
				data: [1],
			});
		}
		return a;
	},
	[]
);

const filteredDataWithColors = filteredData.map((obj, i) => {
	return {
		...obj,
		backgroundColor: colors[i],
    barThickness: 50
	};
});

const labels = ["Type"];

export const data = {
	labels,
	datasets: filteredDataWithColors,
};

const HorStackChart = () => {
	return (
		<Bar
			options={{
				indexAxis: "y" as const,
				plugins: {
					legend: {
						position: "bottom" as const,
					},
				},
				responsive: true,
				scales: {
					x: {
						stacked: true,
            ticks: {
              display: false
            },
            grid: {
              display: false,
              drawBorder: false,
            },
					},
					y: {
						stacked: true,
            grid: {
              display: false
            }
					},
				},
			}}
			data={data}
		/>
	);
};

export default HorStackChart;
