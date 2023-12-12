import { configureStore } from '@reduxjs/toolkit';
import { themeSlice } from './themeSlice';
import { teamSlice } from './teamSlice';
import { createWrapper } from 'next-redux-wrapper';

const makeStore = () =>
	configureStore({
		reducer: {
			[themeSlice.name]: themeSlice.reducer,
			[teamSlice.name]: teamSlice.reducer,
		},
		devTools: true,
	});

export type AppStore = ReturnType<typeof makeStore>;
export type AppState = ReturnType<AppStore['getState']>;
export const wrapper = createWrapper<AppStore>(makeStore);
