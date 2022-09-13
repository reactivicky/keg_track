import { useSelector } from "react-redux";
import { RootState } from "../../app/store";
import * as S from "./styled";

const Battery = () => {
  const selectedKeg = useSelector(
		(state: RootState) => state.kegState.selectedKeg
	);
  return (
    <S.Container>
      <h2>Battery (%)</h2>
      <p>{selectedKeg.battery}%</p>
    </S.Container>
  )
}

export default Battery