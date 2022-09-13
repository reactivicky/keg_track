import * as S from './styled'
import { useSelector } from "react-redux";
import { RootState } from "../../app/store";


const Location = () => {
  const selectedKeg = useSelector(
		(state: RootState) => state.kegState.selectedKeg
	);
  return (
    <S.Container>
      <h2>Location of the device</h2>
      <S.LatLong>
        Latitude, Longitude
      </S.LatLong>
      <p>{selectedKeg.latitude}</p>
    </S.Container>
  )
}

export default Location