import Head from 'next/head';
import PageContainer from '../components/PageContainer';

export default function Home() {
	return (
		<PageContainer>
			<Head>
				<title>SJBL | Home</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<main>
				<section className="">
					<h1 className="main-title">Space Jam Basketball League</h1>
					<div className="text-container">
						<p>
							🚀🏀 Welcome to the Jam Galaxy: Where Toons and Titans Collide!
							🏀🚀
						</p>

						<p>
							Get ready to slam, jam, and welcome back the iconic Space Jam
							Basketball League! In a cosmic crossover of epic proportions, your
							favorite Looney Tunes characters are lacing up their sneakers
							alongside legendary ballers from across the universe! 🏆
						</p>
					</div>
					<div className="image-container">
						<img src="/images/misc/home-1.png" />
					</div>
					<div className="text-container">
						<p>
							👽 Join Bugs, Daffy, and the gang as they team up with basketball
							titans, trading hoops and hilarity in a celestial showdown that
							will have you on the edge of your seat!
						</p>

						<p>
							🛸 From Michael Jordan's gravity-defying slams to LeBron James
							taking the game to interstellar heights, relive the magic of the
							Space Jam movies as they come to life on the court!
						</p>

						<p>
							Witness the Monstars return, more formidable than ever,
							challenging a new generation of hoop dreams. Will the Tune Squad
							rise to the occasion, or will the Monstars once again dominate the
							galaxy? 🪐🏀
						</p>

						<p>
							Don't miss out on the nostalgia, the cosmic crossovers, and the
							jaw-dropping moments that will transport you back to the golden
							age of Looney Tunes meets NBA!
						</p>

						<p>
							👉 Secure your tickets now and be a part of the Space Jam legacy –
							where the court is a stage, and the game is played in a whole new
							dimension! 🌍✨ Get ready to Jam, Space Jam style!
						</p>
					</div>
				</section>
			</main>

			<footer></footer>
		</PageContainer>
	);
}
