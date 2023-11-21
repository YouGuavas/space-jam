import React from 'react';

import Nav from './Nav';
import ToggleButton from './ToggleButton';
import styles from '../styles/Layout.module.scss';

const Layout = ({ children }) => {
	return (
		<>
			<div className={styles.container}>
				<ToggleButton />
			</div>

			{children}
		</>
	);
};
export default Layout;
