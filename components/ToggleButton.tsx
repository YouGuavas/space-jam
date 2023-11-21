import { getTheme } from '../redux/themeSlice';
import { useSelector } from 'react-redux';
import { setTheme } from '../redux/themeSlice';
import { useDispatch } from 'react-redux';

export default function ToggleButton() {
	const theme: any = useSelector(getTheme);
	const dispatch = useDispatch();

	const changeTheme = (theme: string) => {
		dispatch(setTheme(theme));
	};
	return (
		<div className="">
			<button onClick={() => changeTheme('modern')}>Modern</button>
			<button onClick={() => changeTheme('retro')}>Retro</button>
		</div>
	);
}
