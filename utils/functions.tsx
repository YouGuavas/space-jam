import clientPromise from '../lib/mongodb';
import { Props, PageContainerProps } from '../types/types';
import { GetServerSideProps } from 'next';
import TeamPage from '../components/TeamPage';

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

export const getServerSideProps: GetServerSideProps<Props> = async ({
	params,
}) => {
	const team = params?.team as string;

	const { props, error } = await fetchData(team);

	if (error) {
		console.error(error);
	}

	return { props };
};
