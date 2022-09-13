import { useSelector } from "react-redux";
import { RootState } from "../../app/store";
import * as S from "./styled";
import BatteryGauge from "react-battery-gauge";

const batteryCustomization = {
	batteryBody: {
		strokeWidth: 8,
		cornerRadius: 0,
		fill: "none",
		strokeColor: "#30e3a8",
	},
	batteryCap: {
		fill: "none",
		strokeWidth: 4,
		strokeColor: "#30e3a8",
		cornerRadius: 0,
		capToBodyRatio: 0.5,
	},
	batteryMeter: {
		fill: "#30e3a8",
		lowBatteryValue: 15,
		lowBatteryFill: "red",
		outerGap: 3,
		noOfCells: 5, // more than 1, will create cell battery
		interCellsGap: 3,
	},
	readingText: {
		display: "none",
	},
};

const Battery = () => {
	const selectedKeg = useSelector(
		(state: RootState) => state.kegState.selectedKeg
	);
	return (
		<S.Container>
			<div>
				<h2>Battery (%)</h2>
				<p>{selectedKeg.battery}%</p>
			</div>
			<BatteryGauge
				value={selectedKeg.battery}
				size={150}
				customization={batteryCustomization}
			/>
		</S.Container>
	);
};

export default Battery;
