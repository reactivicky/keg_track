import * as S from "./styled";
import { useSelector } from "react-redux";
import { RootState } from "../../app/store";

const Temperature = () => {
	const { temperature, statusTime } = useSelector(
		(state: RootState) => state.kegState.selectedKeg
	);

	return (
		<S.Container>
			<h2>Temperature (&#8451;)</h2>
			<S.ThermometerContainer>
				<S.Logo>
					<S.Bar>
						<S.InnerBar animate={{ height: `${temperature * 20}px` }} />
					</S.Bar>
					<S.Circle>
						<S.InnerCircle />
					</S.Circle>
				</S.Logo>
				<S.TemperatureReading>
					<S.Temperature>{temperature}&#8451;</S.Temperature>
					<p>Last updated {statusTime}</p>
				</S.TemperatureReading>
			</S.ThermometerContainer>
		</S.Container>
	);
};

export default Temperature;
