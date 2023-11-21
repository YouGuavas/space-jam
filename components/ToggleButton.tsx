import styles from '../styles/ToggleButton.module.scss';

import { getTheme } from '../redux/themeSlice';
import { useSelector } from 'react-redux';
import { setTheme } from '../redux/themeSlice';
import { useDispatch } from 'react-redux';

export default function ToggleButton() {
	const theme: any = useSelector(getTheme);
	const dispatch = useDispatch();

	const changeTheme = (theme: string) => {
		dispatch(setTheme(theme));
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
