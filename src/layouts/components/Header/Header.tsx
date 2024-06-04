// import React, {useState} from 'react';
// import {AuthButton} from "components";
// import {Burger} from '../Burger';
// import {Nav} from '../Nav';
// import {ReactComponent as UserIcon} from 'assets/svg/user-icon.svg';
import logo from 'assets/img/kfc-logo.svg';
// import {useUser} from 'helpers/hooks';

import {
	HeaderContainer,
	HeaderWrap,
	HeaderLogo,
	// HeaderButtons,
	// HeaderAreaBtn,
} from './HeaderStyles';

export const Header = () => {
	// const [isNavOpen, setIsNavOpen] = useState<boolean>(false)
	// const { isLogged } = useUser()
	// const onNavClose = ()=> setIsNavOpen(false)

	return (
		<HeaderContainer>
			<HeaderWrap>
				<HeaderLogo to="/">
					<img src={logo} alt="" width={82} height={59}/>
				</HeaderLogo>
				{/*<Nav isActive={isNavOpen} setIsNavOpen={setIsNavOpen}/>*/}
				{/*<HeaderButtons>*/}
				{/*	{isLogged ?*/}
				{/*		<HeaderAreaBtn to="/profile" onClick={onNavClose}>*/}
				{/*			<span>Личный кабинет</span>*/}
				{/*			<div className="icon">*/}
				{/*				<UserIcon/>*/}
				{/*			</div>*/}
				{/*		</HeaderAreaBtn>*/}
				{/*		: <AuthButton />*/}
				{/*	}*/}
				{/*	<Burger isOpen={isNavOpen} onClick={() => setIsNavOpen(!isNavOpen)}/>*/}
				{/*</HeaderButtons>*/}
			</HeaderWrap>
		</HeaderContainer>
	);
};
