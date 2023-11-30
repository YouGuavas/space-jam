import React, { ReactNode } from 'react';
import Nav from './Nav';
import ToggleButton from './ToggleButton';
import styles from '../styles/Layout.module.scss';
import { useEffect, useState } from 'react';

import { getTheme, setTheme } from '../redux/themeSlice';
import { useDispatch, useSelector } from 'react-redux';

const Layout = ({ children }: { children: ReactNode }) => {
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
		<>
			<div
				className={`${styles.container} ${
					theme === 'modern' ? styles.modern : styles.retro
				}`}
			>
				<div>
					<ToggleButton />

					<Nav links={['Home', 'Monstars', 'Tune Squad']} />
				</div>
				{children}
			</div>
		</>
	);
};
export default Layout;
