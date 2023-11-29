import Link from 'next/link';
import styles from '../styles/Card.module.scss';

export default function Nav(props: any) {
	return (
		<nav>
			<ul>
				{props.links.map((link: string, index: number) => {
					if (link !== 'Home') {
						return (
							<li key={index}>
								<Link href={`/${link.replace(' ', '-').toLowerCase()}`}>
									{link}
								</Link>
							</li>
						);
					} else {
						return (
							<li key={index}>
								<Link href={`/`}>{link}</Link>
							</li>
						);
					}
				})}
			</ul>
		</nav>
	);
}
