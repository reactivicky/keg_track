import React from "react";
import {
	BarChart,
	Bar,
	XAxis,
	YAxis,
	Tooltip,
	Legend,
	ResponsiveContainer,
} from "recharts";
import { useDispatch } from "react-redux";
import { update } from "../../app/InventorySlice";
import Data from "../../Data/Data";
import * as S from './styled'

const colors = [
	"#f58ae8",
	"#f1b725",
	"#64efa6",
	"#fd686c",
	"#168bef",
	"#ae1ed6",
	"#f98c3d",
];

const groupByType = Data.reduce((a: any, c) => {
	const { Type } = c;
	a[Type] = a[Type] ?? [];
	a[Type].push(c);
	return a;
}, {});

for (let key in groupByType) {
	groupByType[key] = groupByType[key].length;
}

const keyArray = Object.keys(groupByType);

const data = [
	{
		name: "Product",
		...groupByType,
	},
];

const HorStackChart = () => {
	const dispatch = useDispatch()
	let tooltip = "";

	const CustomTooltip = ({ active, payload }: any) => {
		if (!active || !tooltip) {
			return null;
		}
		for (const bar of payload) {
			if (bar.dataKey === tooltip) {
				return (
					<S.ToolTipContainer color={bar.color}>
						{bar.name}
						<br />
						{bar.value.toFixed(2)}
					</S.ToolTipContainer>
				);
			}
		}
		return null;
	};

	const handleMouseOver = (name: string) => {
		tooltip = name;
	};

	const handleClick = (e:any) => {
		dispatch(update(e.tooltipPayload[0].name))
	}

	return (
		<ResponsiveContainer width="100%" height="100%">
			<BarChart
				layout="vertical"
				data={data}
				margin={{
					top: 20,
					right: 30,
					bottom: 5,
				}}
			>
				<XAxis hide type="number" />
				<YAxis dataKey="name" type="category" tick={false} />
				<Tooltip cursor={{ fill: "transparent" }} content={<CustomTooltip/>}  />
				<Legend />
				{keyArray.map((key, i) => {
					return (
						<Bar
							key={key}
							barSize={60}
							name={key}
							onMouseOver={() => handleMouseOver(key)}
							dataKey={key}
							stackId="a"
							fill={colors[i]}
							onClick={handleClick}
						/>
					);
				})}
			</BarChart>
		</ResponsiveContainer>
	);
};

export default React.memo(HorStackChart);
