import Link from 'next/link';
import styles from '../styles/Nav.module.scss';
import { NavProps } from '../utils/types';
import { useEffect, useState } from 'react';

import { getTheme, setTheme } from '../redux/themeSlice';
import { useDispatch, useSelector } from 'react-redux';

export default function Nav(props: NavProps) {
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
		<nav
			className={`${styles.nav} ${
				theme === 'modern' ? styles.modern : styles.retro
			}`}
		>
			<ul>
				{props.links.map((link: string, index: number) => {
					if (link !== 'Home') {
						return (
							<li key={index}>
								<Link href={`/${link.replace(' ', '-').toLowerCase()}`}>
									{link}
								</Link>
							</li>
						);
					} else {
						return (
							<li key={index}>
								<Link href={`/`}>{link}</Link>
							</li>
						);
					}
				})}
			</ul>
		</nav>
	);
}
