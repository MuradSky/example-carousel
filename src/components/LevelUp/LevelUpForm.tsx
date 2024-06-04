import React, {useState} from 'react';
import {Form, Formik, FormikHelpers, FormikValues} from 'formik';
import {Button} from '../Button';
import {useUser} from 'helpers/hooks';
import axios from 'axios';
import Cookies from 'js-cookie';
import {ReactComponent as ArrIcon} from 'assets/svg/arrow-back-1.svg';

interface TLevelUpForm {
	onSuccessPromo: ()=> void
	openError: ()=> void
}
const vendor = 'tinkoff_promo'

export const LevelUpForm = ({ onSuccessPromo, openError }: TLevelUpForm) => {
	const { mutationTrigger } = useUser()
	const [isLoading, setIsLoading] = useState(false)

	const onChange = (setFieldValue: any)=> (e: any)=> {
		const value = e.currentTarget.value
		if (value.length > 12) return console.log('finish')
		setFieldValue('promo_code', value.replace(/[^A-Za-z0-9]+/g, ''))
	}

	const onSubmit = async ({ promo_code }: FormikValues, { setFieldValue }: FormikHelpers<any>)=> {
		setIsLoading(true)
		const accessToken = Cookies.get('_kfc_token')
		await axios.post('/user/partner/offer', {
			vendor,
			code: promo_code,
		}, {
			headers: {
				Authorization: `Bearer ${accessToken}`
			}
		}).then(()=> {
			setFieldValue('promo_code', '')
			onSuccessPromo()
			setTimeout(()=> {
				mutationTrigger()
			}, 1500)
		}).catch(()=> {
			openError()
		}).finally(()=> {
			setIsLoading(false)
		})
	}

	return (
		<div className="form">
			<Formik initialValues={{ promo_code: '' }}  onSubmit={onSubmit} >
				{({values, setFieldValue})=>  (
					<Form >
						<input
							name="promo_code"
							onChange={onChange(setFieldValue)}
							value={values.promo_code}
							className={`form-input${values.promo_code.length > 0 ? ' is-valid' : ''}`}
							disabled={isLoading}
							placeholder="Ведите промокод"
						/>

						<Button
							type="submit"
							className={`form-btn${values.promo_code.length > 0 ? ' is-valid' : ''}`}
							disabled={values.promo_code.length < 12}
							icon={<ArrIcon/>}
							isLoading={isLoading}
						/>
					</Form>
				)}
			</Formik>
		</div>
	)
}
