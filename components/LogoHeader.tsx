import styles from '../styles/Page.module.scss';
import { LogoProps } from '../types/types';

export default function LogoHeader(props: LogoProps) {
	if (!props.logo) return <h1>{props.team}</h1>;
	else {
		return (
			<h1 className={styles.logoHeader}>
				<img src={props.logo} alt={`Logo for ${props.team}`} />
			</h1>
		);
	}
}
