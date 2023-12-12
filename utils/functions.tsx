import clientPromise from '../lib/mongodb';
import { Props } from '../types/types';
import { GetServerSideProps } from 'next';

export const fetchData = async (
	collection: string
): Promise<{ props: Props; error?: any }> => {
	try {
		const client = await clientPromise;
		const db = client.db('space-jam');
		const monstars = db.collection(collection);

		const roster = await monstars.find({}).toArray();
		const serializedRoster = JSON.parse(JSON.stringify(roster));

		return {
			props: { isConnected: true, roster: serializedRoster },
		};
	} catch (e) {
		console.error(e);
		return {
			props: { isConnected: false },
		};
	}
};

export const getServerSideProps: GetServerSideProps<Props> = async () => {
	const { props, error } = await fetchData('Monstars');

	if (error) {
		console.error(error);
	}

	return { props };
};
