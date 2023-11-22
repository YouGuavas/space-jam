import { useEffect, useState } from 'react';

import { getTheme } from '../redux/themeSlice';
import { setTheme } from '../redux/themeSlice';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import styles from '../styles/Card.module.scss';

export default function Card(props: any) {
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

	const handleNumberDecimal = () => {
		const n = props.player.height.$numberDecimal;
		const preDecimal = Math.floor(Math.abs(n));
		const postDecimal = (n - preDecimal) * 12;
		const p = `${preDecimal}'${postDecimal}"`;
		return p;
	};

	if (!themeLoaded) {
		// If theme is not loaded yet, you can render a loading state or return null
		return null;
	}
	return (
		<div
			className={`${styles.card} ${
				theme === 'modern' ? styles.modernCard : styles.retroCard
			}`}
		>
			<div className={styles.onTopOfWrapper}>
				<h1 className="title">{props.player.name}</h1>
			</div>
			<div className={styles.imgWrapper}>
				<img src={props.player.photo}></img>
			</div>
			<div className={styles.onTopOfWrapper}>
				<h2>{`Position: ${props.player.position}`}</h2>
				<h3>{`Overall: ${props.player.overall}`}</h3>
				<h3>{`Height: ${handleNumberDecimal()}`}</h3>
			</div>
		</div>
	);
}
