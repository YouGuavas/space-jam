import { getServerSideProps } from '../utils/functions';
import type { InferGetServerSidePropsType } from 'next';

import TeamPage from '../components/TeamPage';

export default function Home() {
	if (roster) {
		return <TeamPage logo={null} team="Monstars" roster={roster} />;
	}
	{
		return <div>You are NOT connected to MongoDB.</div>;
	}
}
