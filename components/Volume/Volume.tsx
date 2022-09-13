import * as S from "./styled";
import { useSelector } from "react-redux";
import { RootState } from "../../app/store";

const Volume = () => {
	const selectedKeg = useSelector(
		(state: RootState) => state.kegState.selectedKeg
	);
	return (
		<S.Container>
			<h2>Volume (%)</h2>

			<S.Circle>
				<p>{selectedKeg.volume}%</p>
				<S.InnerCircle animate={{ height: `${selectedKeg.volume / 100 * 150}px` }} />
			</S.Circle>
		</S.Container>
	);
};

export default Volume;
