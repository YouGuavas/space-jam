import { createSlice } from '@reduxjs/toolkit';
import { AppState } from './store';
import { TeamState } from '../types/types';

// ## Define the initial state of Theme State
const initialState: TeamState = {
	teams: [],
};

export const teamSlice = createSlice({
	name: 'teams',
	initialState,
	reducers: {
		setTeams(state, action) {
			state.teams = action.payload;
		},
	},
});

export const { setTeams } = teamSlice.actions;

export const getTeams = (state: AppState) => state.teams;

export default teamSlice.reducer;
