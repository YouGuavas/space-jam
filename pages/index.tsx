import Head from 'next/head';
import PageContainer from '../components/PageContainer';
import { useEffect, useState } from 'react';

import { getTheme, setTheme } from '../redux/themeSlice';
import { useDispatch, useSelector } from 'react-redux';

export default function Home() {
	const dispatch = useDispatch();
	const theme = useSelector(getTheme);
	const [themeLoaded, setThemeLoaded] = useState(false);

	useEffect(() => {
		if (!themeLoaded) {
			// Try to get the theme from localStorage
			const storedTheme = localStorage.getItem('theme');

			if (storedTheme) {
				// If the theme is found in localStorage, set it in the Redux store
				dispatch(setTheme(storedTheme));
			}

			// Mark the theme as loaded
			setThemeLoaded(true);
		}
	}, [dispatch, themeLoaded]);
	if (!themeLoaded) {
		// If theme is not loaded yet, you can render a loading state or return null
		return null;
	}
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
							🚀🏀 Welcome to the Space Jam Basketball League: Where Toons and
							Titans Collide! 🏀🚀
						</p>

						<p>
							Get ready to slam, jam, and welcome back the iconic Space Jam
							Basketball League! In a cosmic crossover of epic proportions, your
							favorite Looney Tunes characters are lacing up their sneakers
							alongside legendary ballers from across the universe! 🏆
						</p>
					</div>
					<div className="image-container">
						<img
							src={
								theme === 'modern'
									? '/images/misc/home-1.png'
									: '/images/misc/home-2.png'
							}
						/>
					</div>
					<div className="text-container">
						<p>
							Join Bugs, Daffy, and the gang as they team up with basketball
							titans, trading hoops and hilarity in a celestial showdown that
							will have you on the edge of your seat!
						</p>

						<p>
							From Michael Jordan's gravity-defying slams to LeBron James taking
							the game to interstellar heights, relive the magic of the Space
							Jam movies as they come to life on the court!
						</p>

						<p>
							Witness the Monstars return, more formidable than ever,
							challenging a new generation of hoop dreams. Will the Tune Squad
							rise to the occasion, or will the Monstars once again dominate the
							galaxy?
						</p>

						<p>
							Don't miss out on the nostalgia, the cosmic crossovers, and the
							jaw-dropping moments that will transport you back to the golden
							age of Looney Tunes meets NBA!
						</p>

						<p>
							Secure your tickets now and be a part of the Space Jam legacy –
							where the court is a stage, and the game is played in a whole new
							dimension! Get ready to Jam!
						</p>
					</div>
				</section>
			</main>

			<footer></footer>
		</PageContainer>
	);
}
