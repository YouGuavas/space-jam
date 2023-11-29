import Head from 'next/head';
import styles from '../styles/Page.module.scss';
import Card from './Card';
import PageContainer from './PageContainer';

export default function Home(props: any) {
	return (
		<PageContainer>
			<Head>
				<title>SJBL | Monstars</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<main>
				<h1>Monstars</h1>
				{props.roster.length > 0 ? (
					<div className={styles.cardContainer}>
						{props.roster.map((player: any, index: any) => (
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
