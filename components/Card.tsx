import { useEffect, useState } from 'react';

import { getTheme, setTheme } from '../redux/themeSlice';
import { useDispatch, useSelector } from 'react-redux';
import styles from '../styles/Card.module.scss';
import { CardProps } from '../types/types';

export default function Card(props: CardProps) {
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

	const handleNumberDecimal = (variant: string) => {
		let n = parseFloat(props.player.number.$numberDecimal);
		const preDecimal = Math.floor(Math.abs(n));
		let p = `#${preDecimal}`;
		let postDecimal;
		if (variant === 'height') {
			n = parseFloat(props.player.height.$numberDecimal);
			postDecimal = (n - preDecimal) * 12;
			p = `${preDecimal}'${postDecimal}"`;
			return p;
		}
		postDecimal = (n - preDecimal) * 1;
		if (postDecimal > 0) {
			p = `#1/2`;
			return p;
		}
		if (preDecimal === 333333) {
			return '#❤️';
		}
		if (preDecimal === 444444) {
			return '#!';
		}
		if (preDecimal === 555555) {
			return '#?';
		}
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
				<h2 className="title">{props.player.name}</h2>
			</div>
			<div className={styles.imgWrapper}>
				<img src={props.player.photo}></img>
			</div>
			<div className={styles.onTopOfWrapper}>
				<div className={styles.row}>
					<h3>{`Position:`}</h3>{' '}
					<p className={styles.attribute}>{`${props.player.position}`}</p>
				</div>
				<div className={styles.row}>
					<h3>{`Number:`}</h3>{' '}
					<p className={styles.attribute}>{`${handleNumberDecimal(
						'number'
					)}`}</p>
				</div>
				<div className={styles.row}>
					<h3>{`Overall:`}</h3>{' '}
					<p className={styles.attribute}>{`${props.player.overall}`}</p>
				</div>
				<div className={styles.row}>
					<h3>{`Height:`}</h3>{' '}
					<p className={styles.attribute}>{`${handleNumberDecimal(
						'height'
					)}`}</p>
				</div>
			</div>
		</div>
	);
}
