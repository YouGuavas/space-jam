import '../styles/globals.scss';
import Layout from '../components/Layout';
import type { AppProps } from 'next/app';

import { wrapper } from '../redux/store';

function App({ Component, pageProps }: AppProps) {
	return (
		<Layout>
			<Component {...pageProps} />
		</Layout>
	);
}

export default wrapper.withRedux(App);
