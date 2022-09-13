import * as S from "./styled";
import { useSelector } from "react-redux";
import { RootState } from "../../app/store";


const Temperature = () => {
	const selectedKeg = useSelector(
		(state: RootState) => state.kegState.selectedKeg
	);
	return (
		<S.Container>
			<h2>Temperature (&#8451;)</h2>
			<p>{selectedKeg.temperature}%</p>
		</S.Container>
	);
};

export default Temperature;
