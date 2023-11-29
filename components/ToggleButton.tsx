import styles from '../styles/ToggleButton.module.scss';
import { useEffect, useState } from 'react';

import { getTheme } from '../redux/themeSlice';
import { useSelector } from 'react-redux';
import { setTheme } from '../redux/themeSlice';
import { useDispatch } from 'react-redux';

export default function ToggleButton() {
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

	const changeTheme = (theme: string) => {
		dispatch(setTheme(theme));
		localStorage.setItem('theme', theme);
	};
	return (
		<div className={styles.container}>
			<button
				className={`${styles.toggleButton} ${
					theme === 'retro'
						? `${styles.retroButton}`
						: `${styles.active} ${styles.modernButton}`
				}`}
				onClick={() => changeTheme('modern')}
			>
				Modern
			</button>
			<button
				className={
					theme === 'retro'
						? `${styles.active} ${styles.retroButton}`
						: `${styles.modernButton}`
				}
				onClick={() => changeTheme('retro')}
			>
				Retro
			</button>
		</div>
	);
}
