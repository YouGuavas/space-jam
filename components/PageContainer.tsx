import React, { ReactNode } from 'react';

import { useEffect, useState } from 'react';

import { getTheme } from '../redux/themeSlice';
import { useSelector } from 'react-redux';
import { setTheme } from '../redux/themeSlice';
import { useDispatch } from 'react-redux';
import styles from '../styles/Page.module.scss';

export default function PageContainer({ children }: { children: ReactNode }) {
	const dispatch = useDispatch();
	const theme = useSelector(getTheme);
	const [themeLoaded, setThemeLoaded] = useState(false);

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

	if (!themeLoaded) {
		// If theme is not loaded yet, you can render a loading state or return null
		return null;
	}

	return (
		<div className={theme === 'retro' ? styles.retro : styles.modern}>
			{children}
		</div>
	);
}
