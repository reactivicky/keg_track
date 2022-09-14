import * as S from "./styled";
import { useSelector } from "react-redux";
import { RootState } from "../../app/store";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";

const Location = () => {
	const { latitude, longitude } = useSelector(
		(state: RootState) => state.kegState.selectedKeg
	);
	const { isLoaded } = useLoadScript({
		googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || "",
	});

	if (!isLoaded) return <div>Loading...</div>;
	return (
		<S.Container>
			<h2>Location of the device</h2>
			<S.LatLong>Latitude, Longitude</S.LatLong>
			<GoogleMap zoom={10} center={{ lat: latitude, lng: longitude }} mapContainerClassName="map-container" />
		</S.Container>
	);
};

export default Location;
