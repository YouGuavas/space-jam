import { fetchData } from '../utils/functions';
import { Props } from '../types/types';
import type { InferGetServerSidePropsType, GetServerSideProps } from 'next';

import TeamPage from '../components/TeamPage';
export const getServerSideProps: GetServerSideProps<Props> = async () => {
	const { props, error } = await fetchData('Monstars');

	if (error) {
		console.error(error);
	}

	return { props };
};
export default function Home({
	roster,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
	if (roster) {
		return (
			<TeamPage
				logo="/images/logos/monstars.png"
				team="Monstars"
				roster={roster}
			/>
		);
	}
	{
		return <div>You are NOT connected to MongoDB.</div>;
	}
}
