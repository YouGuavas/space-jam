import Head from 'next/head';
import styles from '../styles/Page.module.scss';
import Card from './Card';
import LogoHeader from './LogoHeader';
import { TeamPageProps, Player } from '../types/types';

export default function TeamPage(props: TeamPageProps) {
	return (
		<>
			<Head>
				<title>SJBL | {props.team}</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<main className={props.team.toLowerCase()}>
				<LogoHeader logo={props.logo} team={props.team} />

				{props.roster.length > 0 ? (
					<div className={styles.cardContainer}>
						{props.roster.map((player: Player, index: number) => (
							<Card key={index} player={props.roster[index]} />
						))}
					</div>
				) : (
					<h2 className="subtitle">
						You are NOT connected to MongoDB. Check the <code>README.md</code>{' '}
						for instructions.
					</h2>
				)}
			</main>

			<footer></footer>
		</>
	);
}
