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
					<h1 className="main-title">Space Jam Basketball League</h1>
					<div className="image-container">
						<img src="/images/misc/home-1.png" />
					</div>
				</div>
			</main>

			<footer></footer>
		</PageContainer>
	);
}
