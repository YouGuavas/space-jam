import React, { ReactNode } from 'react';
import Nav from './Nav';
import ToggleButton from './ToggleButton';
import styles from '../styles/Layout.module.scss';

const Layout = ({ children }: { children: ReactNode }) => {
	return (
		<>
			<div className={styles.container}>
				<Nav links={['Home', 'Monstars', 'Tune Squad']} />
				<ToggleButton />
			</div>

			{children}
		</>
	);
};
export default Layout;
