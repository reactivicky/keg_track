import { configureStore } from "@reduxjs/toolkit";
import KegSlice from "./KegSlice";

export const store = configureStore({
	reducer: {
		kegState: KegSlice,
	},
});

export type RootState = ReturnType<typeof store.getState>
