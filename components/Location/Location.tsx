import * as S from "./styled";
import { useSelector } from "react-redux";
import { RootState } from "../../app/store";

const Location = () => {
	const { latitude, longitude } = useSelector(
		(state: RootState) => state.kegState.selectedKeg
	);

	return (
		<S.Container>
			<h2>Location of the device</h2>
			<S.LatLong>{latitude}, {longitude}</S.LatLong>
			<div>
				<iframe
					id="iframeId"
					src={`https://maps.google.com/maps?q=${latitude},${longitude}&hl=es;&output=embed`}
					title="The GeoLocation of Container"
					height="300px"
					width="500px"
				>
					Current Location Of Container
				</iframe>
			</div>
		</S.Container>
	);
};

export default Location;
