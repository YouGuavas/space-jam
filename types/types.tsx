import { Decimal128, Int32 } from 'mongodb';
import { ReactNode } from 'react';

//utility
export interface Player {
	name: string;
	height: {
		$numberDecimal: string;
	};
	number: { $numberDecimal: string };
	position: string;
	overall: Int32;
	photo: string;
}
export type Roster = Array<Player>;

//nav
export interface NavProps {
	links: Array<string>;
}
//page
export interface PageProps {
	team: string;
	logo: any;
}
export interface TeamPageProps {
	team: string;
	logo: any;
	roster: Roster;
}
export interface LogoProps {
	team: string;
	logo: any;
}
export interface PageContainerProps {
	children: ReactNode;
	team: string;
	logo: any;
	roster: Roster;
}

//team
export interface Props {
	isConnected: boolean;
	roster?: Roster;
}

//card
export interface CardProps {
	player: Player;
}

// TeamState Interface
export interface TeamState {
	teams: Array<Array<any>>;
}

// ThemeState Interface
export interface ThemeState {
	theme: string;
}
