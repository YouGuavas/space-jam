import { Int32 } from 'mongodb';
//utility
export interface Player {
	name: string;
	height: {
		$numberDecimal: string;
	};
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
