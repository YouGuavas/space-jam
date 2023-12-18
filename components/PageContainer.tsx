import React from 'react';

import { useEffect, useState } from 'react';

import { getTheme, setTheme } from '../redux/themeSlice';
import { useSelector, useDispatch } from 'react-redux';
import styles from '../styles/Page.module.scss';
import TeamPage from './TeamPage';
import { PageContainerProps, Roster } from '../types/types';

export default function PageContainer({
	team,
	logo,
	children,
}: PageContainerProps) {
	const dispatch = useDispatch();
	const theme = useSelector(getTheme);
	const [themeLoaded, setThemeLoaded] = useState(false);

	const renderPages = () => {
		if (children) return children;
		//Render children if there are any (such as on index)//

		return <TeamPage team={team} logo={logo} />;
		//If there are no children, render the TeamPage component//
	};

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

	return <div>{renderPages()}</div>;
}
