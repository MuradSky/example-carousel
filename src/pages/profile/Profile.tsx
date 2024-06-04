import React, {useEffect, useState} from 'react';
import {ProfileData, Character, UserChecks, LevelUpSecond, Loader, SuccessModal, PromoModals} from 'components';
import {ProfileLevelUp, ProfileLoader, ProfileStyles, ProfileWrapper} from './ProfileStyles';
import {useUser} from 'helpers/hooks';
import {gsap} from "gsap";

export const Profile = () => {
	const [isAvatarSelect, setIsAvatarSelect] = useState(false)
	const [isPromoSuccess, setPromoSuccess] = useState(false)
	const { isLogged, user, isLoading } = useUser()

	useEffect(()=> {
		setIsAvatarSelect(!!user?.avatar)
	}, [setIsAvatarSelect, user])

	useEffect(()=> {
		isLogged && !isLoading && gsap.fromTo('.fade-in',{ opacity: 0, scale: .95, duration: 0.5 }, { opacity: 1, scale: 1, duration: .5 })
	}, [isLogged, isLoading])

	const onChangeAvatar = ()=> setIsAvatarSelect(false)

	if (!isLogged) return null

	return (
		<ProfileStyles className="content">
			{isLoading ? <ProfileLoader children={<Loader isSm />} /> :
				<>
					<ProfileWrapper className="fade-in">
						<ProfileData onChangeAvatar={onChangeAvatar} />
						<Character isAvatarSelect={isAvatarSelect} />
					</ProfileWrapper>

					{!!user?.email_verified_at &&
						<>
							{!user.tinkoff_promo_used &&
                                <ProfileLevelUp>
                                    <LevelUpSecond setPromoSuccess={setPromoSuccess} />
                                </ProfileLevelUp>
							}
                            <ProfileWrapper className="fade-in">
                                <UserChecks />
                            </ProfileWrapper>
						</>
					}
				</>
			}

			<SuccessModal type="promoCode" isOpen={isPromoSuccess} />

			<PromoModals />
		</ProfileStyles>
	);
};
