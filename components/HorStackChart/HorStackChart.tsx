import {
	Chart as ChartJS,
	CategoryScale,
	LinearScale,
	BarElement,
	Title,
	Tooltip,
	Legend,
} from "chart.js";
import { useRef } from "react";
import {  useDispatch } from "react-redux";
import { update } from "../../app/InventorySlice";
import { Bar, getElementAtEvent } from "react-chartjs-2";
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
    barThickness: 50,
	};
});

const labels = ["Type"];

export const data = {
	labels,
	datasets: filteredDataWithColors,
};

const HorStackChart = () => {
	const dispatch = useDispatch();
	const chartRef: any = useRef();
	const onClick = (event: any) => {
		if (getElementAtEvent(chartRef.current, event)[0]) {
			const element = filteredDataWithColors[getElementAtEvent(chartRef.current, event)[0].datasetIndex]
			dispatch(update(element.label))

		}
  }
	return (
		<Bar
			ref={chartRef}
			onClick={onClick}
			options={{
				indexAxis: "y" as const,
				maintainAspectRatio: false,
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
						ticks: {
              display: false
            },
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
