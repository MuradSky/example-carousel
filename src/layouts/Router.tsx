import React, {useEffect} from 'react';
import {Route, Routes, useLocation, Navigate} from 'react-router-dom';
import {Main} from "pages/main/Main";
// import {FAQ} from "pages/faq/FAQ";
// import {Profile} from 'pages/profile/Profile'
import {gsap} from "gsap";
// import {useUser} from 'helpers/hooks';

// const ProtectedRoute: React.FC<TProtectedRoute> = ({children}) => {
// 	const {isLogged} = useUser()
// 	return !isLogged ? <Navigate to="/" replace/> : children
// }


export const Router = () => {
	const {pathname} = useLocation();

	useEffect(() => {
		const body = document.body;
		pathname !== '/' ? body.classList.add('is-grey') : body.classList.remove('is-grey')
		gsap.fromTo(".content", { opacity: 0, scale: .99, duration: 0.5 }, { opacity: 1, scale: 1, duration: 0.5 });
		gsap.fromTo("body", { opacity: 0,  duration: 0.5 }, { opacity: 1,  duration: 0.5 });
	}, [pathname]);

	return (
		<main>
			<Routes >
				<Route
					path="/"
					element={<Main />}
				/>
				{/*<Route*/}
				{/*	path="/profile"*/}
				{/*	element={<ProtectedRoute children={<Profile/>}/>}*/}
				{/*/>*/}
				{/*<Route*/}
				{/*	path="/faq"*/}
				{/*	element={<FAQ/>}*/}
				{/*/>*/}
				<Route
					path="*"
					element={<Navigate to="/" replace />}
				/>
			</Routes>
		</main>
	);
};
