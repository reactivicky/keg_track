import { createSlice } from "@reduxjs/toolkit";

interface KegState {
	selectedKeg: {
		value: string,
		label: string,
		kegtrackerId: string,
		statusTime: string,
		location: string,
		placename: string,
		volume: number,
		temperature: number,
		battery: number,
		latitude: number,
		longitude: number,
		Size: number,
		Product: string,
		Type: string,
		BatchNumber: number,
	};
}

const initialState: KegState = {
	selectedKeg: {
		value: "Test001",
		label: "Test001",
		kegtrackerId: "Test001",
		statusTime: "05/11/2022 23:50",
		location: "Retailer",
		placename: "Whistle Punks UK Ltd",
		volume: 60,
		temperature: 6,
		battery: 100,
		latitude: 51.4835741,
		longitude: -0.1252037,
		Size: 50,
		Product: "Brewdog Pale",
		Type: "Pale Ale",
		BatchNumber: 8,
	},
};

const KegSlice = createSlice({
	name: "KegState",
	initialState,
	reducers: {
		update: (state, action) => {
			state.selectedKeg = action.payload;
		},
	},
});

export const { update } = KegSlice.actions;

export default KegSlice.reducer
