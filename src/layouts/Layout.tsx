import {BrowserRouter} from 'react-router-dom';
import {LayoutStyles} from './LayoutStyles';
// import {Header} from './components/Header';
// import {Footer} from './components/Footer';
import {Router} from './Router';
import {EmailConfirm, NoGiveaway} from '../components';
import {useRefreshToken} from 'helpers/hooks';

export const Layout = () => {
	useRefreshToken()

	return (
		<LayoutStyles>
			<BrowserRouter>
				{/*<Header />*/}
				<Router />
				{/*<Footer />*/}
				<EmailConfirm />
				<NoGiveaway/>
			</BrowserRouter>
		</LayoutStyles>
	)
}
