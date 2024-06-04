import React, {useState} from 'react';
import {
	ProfileDataButton,
	ProfileDataContact,
	ProfileDataStyles,
	ProfileDataTitle,
	ProfileDataUser,
	ChangeStyles,
} from './ProfileDataStyles';
import {ReactComponent as EmailIcon} from 'assets/svg/email-icon.svg';
import {ReactComponent as Checkmark} from 'assets/svg/checkmark.svg';
import {ReactComponent as ExitIcon} from 'assets/svg/exit-icon.svg';
import {Button, LogoutModal, Shared, SpecialPrize} from 'components';
import {useUser} from 'helpers/hooks';
import {EmailSend} from './EmailSend';
import {ReactComponent as Loader} from 'assets/svg/arrow-loader.svg';

export const ProfileData = ({ onChangeAvatar }: { onChangeAvatar: ()=> void }) => {
	const [isOpenLogout, setIsOpenLogout] = useState(false)
	const { user } = useUser()
	const onToggleLogout = (toggle: boolean)=> ()=> setIsOpenLogout(toggle)

	const isChange = !!user.avatar && user.level < 2

	return (
		<ProfileDataStyles>
			<ProfileDataTitle children={'Профиль'}/>
			<div className="mob-wrap">
				<ProfileDataUser>
					<span>{user?.name}</span>
					<span>{user?.surname}</span>
				</ProfileDataUser>

				{user?.email_verified_at &&
                    <div className="profile-contacts">
                        <ProfileDataContact className="mb-10">
                            <EmailIcon/>
                            <span>{user?.email}</span>
	                        {user?.is_verified && <Checkmark/>}
                        </ProfileDataContact>
                    </div>
				}
				{!!user && !user?.email_verified_at && <EmailSend/>}


				<SpecialPrize />

				<div className="profile-buttons" style={{ margin: '20px 0'  }}>
					<ProfileDataButton onClick={onToggleLogout(true)}>
						<span>Выйти</span>
						<ExitIcon/>
					</ProfileDataButton>
				</div>
			</div>

			{isChange &&
                <ChangeStyles>
                    <Button onClick={onChangeAvatar} variant="black">
                        <Loader/>
                        <span>Сменить героя</span>
                    </Button>
                </ChangeStyles>
			}

			{user?.avatar && user?.email_verified_at && <Shared/>}
			<LogoutModal
				isOpen={isOpenLogout}
				onClose={onToggleLogout(false)}
			/>
		</ProfileDataStyles>
	)
};
