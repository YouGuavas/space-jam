import Head from 'next/head';
import clientPromise from '../lib/mongodb';
import type { InferGetServerSidePropsType, GetServerSideProps } from 'next';
import styles from '../styles/Page.module.scss';
import Card from '../components/Card';

type ConnectionStatus = {
	isConnected: boolean;
};

export const getServerSideProps: GetServerSideProps<any> = async () => {
	try {
		const client = await clientPromise;
		const db = client.db('space-jam');
		const monstars = db.collection('Monstars');
		// `await clientPromise` will use the default database passed in the MONGODB_URI
		// However you can use another database (e.g. myDatabase) by replacing the `await clientPromise` with the following code:
		//
		// `const client = await clientPromise`
		// `const db = client.db("myDatabase")`
		//
		// Then you can execute queries against your database like so:
		// db.find({}) or any of the MongoDB Node Driver commands
		const monstarsRoster = await monstars.find({}).toArray();
		const serializedMonstarsRoster = JSON.parse(JSON.stringify(monstarsRoster));

		return {
			props: { isConnected: true, monstarsRoster: serializedMonstarsRoster },
		};
	} catch (e) {
		console.error(e);
		return {
			props: { isConnected: false },
		};
	}
};

export default function Home({
	monstarsRoster,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
	return (
		<div className="container">
			<Head>
				<title>SJBL | Monstars</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<main>
				{monstarsRoster.length > 0 ? (
					<div className={styles.cardContainer}>
						{monstarsRoster.map((player: any, index: any) => (
							<Card key={index} player={monstarsRoster[index]} />
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
		</div>
	);
}
