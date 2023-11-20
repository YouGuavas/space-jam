import React from 'react';

import Nav from './Nav';
import styles from '../styles/Layout.module.scss';

const Layout = ({ children }) => {
	return (
		<>
			<div className={styles.container}>
				<Header />

				<Nav
					links={['Home', 'Work', 'Skills', 'Contact']}
					pages={['skills', 'work', 'contact']}
				/>
			</div>

			{children}
		</>
	);
};
export default Layout;
