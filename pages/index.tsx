import Head from 'next/head';
import Link from 'next/link';
import PageContainer from '../components/PageContainer';

export default function Home() {
	return (
		<PageContainer>
			<Head>
				<title>SJBL | Home</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<main>
				<div className="">
					<Link href="/monstars">Monstars</Link>
				</div>
			</main>

			<footer></footer>
		</PageContainer>
	);
}
