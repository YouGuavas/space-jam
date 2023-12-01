import Head from 'next/head';
import styles from '../styles/Page.module.scss';
import Card from './Card';
import PageContainer from './PageContainer';
import { PageProps, Player } from '../types/types';

export default function Home(props: PageProps) {
	return (
		<PageContainer>
			<Head>
				<title>SJBL | {props.team}</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<main>
				<h1>{props.team}</h1>
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
		</PageContainer>
	);
}
