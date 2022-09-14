import { createSlice } from "@reduxjs/toolkit";

interface InventoryState {
	selectedInventory: string | null;
}

const initialState: InventoryState = {
	selectedInventory: null
};

const InventorySlice = createSlice({
	name: "InventoryState",
	initialState,
	reducers: {
		update: (state, action) => {
			state.selectedInventory = action.payload;
		},
	},
});

export const { update } = InventorySlice.actions;

export default InventorySlice.reducer
