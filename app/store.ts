import { configureStore } from "@reduxjs/toolkit";
import InventorySlice from "./InventorySlice";
import KegSlice from "./KegSlice";

export const store = configureStore({
	reducer: {
		kegState: KegSlice,
		inventoryState: InventorySlice
	},
});

export type RootState = ReturnType<typeof store.getState>
