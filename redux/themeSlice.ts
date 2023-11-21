import { createSlice } from '@reduxjs/toolkit';
import { AppState } from './store';

// ## CartState Interface
export interface ThemeState {
	theme: string;
}

// ## Define the initial state of Cart State
const initialState: ThemeState = {
	theme: 'modern',
};

export const themeSlice = createSlice({
	name: 'theme',
	initialState,
	reducers: {
		setTheme(state, action) {
			state.theme = action.payload;
		},
	},
});

export const { setTheme } = themeSlice.actions;

export const getTheme = (state: AppState) => state.theme.theme;

export default themeSlice.reducer;
