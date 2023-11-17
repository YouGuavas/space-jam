import { useState } from 'react';
import styles from '../styles/Card.module.scss';

export default function Card(props: any) {
	const [theme] = useState(styles.modernCard);
	const handleNumberDecimal = () => {
		const n = props.player.height.$numberDecimal;
		const preDecimal = Math.floor(Math.abs(n));
		const postDecimal = (n - preDecimal) * 12;
		const p = `${preDecimal}'${postDecimal}"`;
		return p;
	};
	return (
		<div className={theme}>
			<h1 className="title">{props.player.name}</h1>
			<div className={styles.imgWrapper}>
				<img src={props.player.photo}></img>
			</div>
			<h2>{`Position: ${props.player.position}`}</h2>
			<h3>{`Overall: ${props.player.overall}`}</h3>
			<h3>{`Height: ${handleNumberDecimal()}`}</h3>
		</div>
	);
}
