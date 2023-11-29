import { fetchData } from '../utils/functions';
import { Props } from '../utils/types';
import type { InferGetServerSidePropsType, GetServerSideProps } from 'next';

import TeamPage from '../components/TeamPage';
export const getServerSideProps: GetServerSideProps<Props> = async () => {
	const { props, error } = await fetchData('Tune Squad');

	if (error) {
		console.error(error);
	}

	return { props };
};
export default function Home({
	roster,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
	return <TeamPage roster={roster} />;
}
