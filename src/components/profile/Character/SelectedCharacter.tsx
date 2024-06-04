import React, {useEffect, Fragment, useState} from 'react';
import {Field, Formik} from 'formik';
import {Button} from 'components';
import {ReactComponent as Checkmark} from 'assets/svg/icon-checked.svg';
import {ReactComponent as ArrowBack} from 'assets/svg/arrow-back.svg';

import {ProfileInformer} from 'pages/profile/ProfileStyles';
import {
	SelectedButton,
	FormStyles,
	CharacterTitle,
	CharacterInfo,
} from './CharacterStyles';
import {ReactComponent as InfoIcon} from 'assets/svg/info-icon.svg';
import basketman from 'assets/img/character/basketman.png';
import chefburger from 'assets/img/character/chefburger.png';
import twisterella from 'assets/img/character/twisterella.png';
import coffee from 'assets/img/character/coffee.png';
import {windowResize, isMobileSm} from 'helpers/utils';
import Cookies from 'js-cookie';
import {useUser} from 'helpers/hooks';
import axios from 'axios';

type Character = {
	character: string
}

export const SelectedCharacter = () => {
	const [isLoading, setIsLoading] = useState(false)
	const { mutationTrigger } = useUser()
	const [isMobile, setIsMobile] = useState<boolean>(isMobileSm);
	useEffect(() => {
		windowResize(setIsMobile, 660);
	}, [setIsMobile]);

	const handleSubmit = async (values: Character) => {
		const accessToken = Cookies.get('_kfc_token')
		setIsLoading(true)
		await axios.post('/avatar/select', {avatar_type: values.character}, {
			headers: {
				Authorization: `Bearer ${accessToken}`,
			}
		})
		.then(()=> mutationTrigger())
		.catch(console.log)
		.finally(()=> setIsLoading(false))
	}

	return (
		<Fragment>
			<CharacterTitle children={'Выберите своего персонажа!'}/>
			<CharacterInfo>
				<ProfileInformer>
					<div className="flex">
						<InfoIcon/>
						<span>
		            Замена героя возможна только на первом уровне, со второго уровня героя поменять нельзя!
				</span>
					</div>
				</ProfileInformer>
			</CharacterInfo>

			<Formik
				initialValues={{character: ''}}
				onSubmit={values => handleSubmit(values)}>
				{({values, setFieldValue}) => (
					<FormStyles>
						<div className="form-wrap">
							{isMobile
								? mobileButtons(CHARACTER_DATA, values.character)
								: desktopButtons(CHARACTER_DATA, values.character)}
						</div>
						<div className="form-button">
							{isMobile ? (
								<Button
									type="button"
									disabled={isLoading}
									variant="black"
									className={!!values?.character ? 'is-show' : ''}
									onClick={() => setFieldValue('character', '')}
									children={'Назад'}
									icon={<ArrowBack/>}
								/>
							) : null}

							<Button
								type="submit"
								isLoading={isLoading}
								children={'Выбрать'}
								className={!!values?.character ? 'is-show' : ''}
							/>
						</div>
					</FormStyles>
				)}
			</Formik>
		</Fragment>
	);
};

const CHARACTER_DATA = [
	{
		name: 'Баскетмэн',
		gif: basketman,
		value: 'basketman',
	},
	{
		name: 'ШЕФБУРГЕР',
		gif: chefburger,
		value: 'chefburger',
	},
	{
		name: 'Ролланда',
		gif: twisterella,
		value: 'rollanda',
	},
	{
		name: 'КОФЕЯ',
		gif: coffee,
		value: 'cofea',
	},
];

const mobileButtons = (data: any, value: string) => {
	return data.map((data: any, i: number) => (
		<Fragment key={`${data.value} + ${i}`}>
			{data.value === value || value === '' ? (
				<SelectedButton>
					<Field type="radio" name="character" value={data.value}/>
					<div className="btn-wrap">
						<div className="btn-img">
							<img src={data.gif} alt="" loading="lazy"/>
						</div>
						<Checkmark className="btn-check"/>
						<span className="btn-name">{data.name}</span>
					</div>
				</SelectedButton>
			) : null}
		</Fragment>
	));
};

const desktopButtons = (data: any, value: string) => {
	return data.map((data: any, i: number) => (
		<SelectedButton key={`${data.value} + ${i}`}>
			<Field
				type="radio"
				name="character"
				value={data.value}
				checked={data.value === value}
			/>
			<div className="btn-wrap">
				<div className="btn-img">
					<img src={data.gif} alt="" loading="lazy"/>
				</div>
				<Checkmark className="btn-check"/>
				<span className="btn-name">{data.name}</span>
			</div>
		</SelectedButton>
	));
};
