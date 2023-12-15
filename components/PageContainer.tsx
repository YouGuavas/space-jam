import React, { ReactNode } from 'react';

import { useEffect, useState } from 'react';

import { getTheme, setTheme } from '../redux/themeSlice';
import { useSelector, useDispatch } from 'react-redux';
import styles from '../styles/Page.module.scss';
import { getTeams, setTeams } from '../redux/teamSlice';
import { InferGetServerSidePropsType } from 'next';
import { getServerSideProps } from '../utils/functions';
import { PageContainerProps } from '../types/types';

export default function PageContainer({ children }: PageContainerProps) {
	const dispatch = useDispatch();
	const theme = useSelector(getTheme);

	const [themeLoaded, setThemeLoaded] = useState(false);
	const [teamsLoaded, setTeamsLoaded] = useState(false);

	useEffect(() => {
		if (!themeLoaded) {
			// Try to get the theme from localStorage
			const storedTheme = localStorage.getItem('theme');

			if (storedTheme) {
				// If the theme is found in localStorage, set it in the Redux store
				dispatch(setTheme(storedTheme));
			}

			// Mark the theme as loaded
			setThemeLoaded(true);
		}
	}, [dispatch, themeLoaded]);
	useEffect(() => {
		if (!teamsLoaded) {
			setTeamsLoaded(true);
		}
	}, [dispatch, teamsLoaded]);

	if (!themeLoaded || !teamsLoaded) {
		// If theme is not loaded yet, you can render a loading state or return null
		return null;
	}

	return (
		<div className={theme === 'retro' ? styles.retro : styles.modern}>
			{children}
		</div>
	);
}
