import {BrowserRouter} from 'react-router-dom';
import {LayoutStyles} from './LayoutStyles';
import {Router} from './Router';
import {useRefreshToken} from 'helpers/hooks';

export const Layout = () => {
	useRefreshToken()
	return (
		<LayoutStyles>
			<BrowserRouter>
				<Router />
			</BrowserRouter>
		</LayoutStyles>
	)
}
