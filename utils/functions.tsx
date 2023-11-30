import clientPromise from '../lib/mongodb';
import { Props } from '../types/types';

export const fetchData = async (
	collection: string
): Promise<{ props: Props; error?: any }> => {
	try {
		const client = await clientPromise;
		const db = client.db('space-jam');
		const monstars = db.collection(collection);
		// `await clientPromise` will use the default database passed in the MONGODB_URI
		// However you can use another database (e.g. myDatabase) by replacing the `await clientPromise` with the following code:
		//
		// `const client = await clientPromise`
		// `const db = client.db("myDatabase")`
		//
		// Then you can execute queries against your database like so:
		// db.find({}) or any of the MongoDB Node Driver commands
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
