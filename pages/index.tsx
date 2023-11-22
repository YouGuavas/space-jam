import Head from 'next/head';
import clientPromise from '../lib/mongodb';
import type { InferGetServerSidePropsType, GetServerSideProps } from 'next';
import Link from 'next/link';

type ConnectionStatus = {
	isConnected: boolean;
};

export const getServerSideProps: GetServerSideProps<any> = async () => {
	try {
		const client = await clientPromise;
		const db = client.db('space-jam');
		// `await clientPromise` will use the default database passed in the MONGODB_URI
		// However you can use another database (e.g. myDatabase) by replacing the `await clientPromise` with the following code:
		//
		// `const client = await clientPromise`
		// `const db = client.db("myDatabase")`
		//
		// Then you can execute queries against your database like so:
		// db.find({}) or any of the MongoDB Node Driver commands

		return {
			props: { isConnected: true },
		};
	} catch (e) {
		console.error(e);
		return {
			props: { isConnected: false },
		};
	}
};

export default function Home({
	isConnected,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
	return (
		<div className="container">
			<Head>
				<title>SJBL | Home</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<main>
				{isConnected ? (
					<div className="">
						<Link href="/monstars">Monstars</Link>
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
