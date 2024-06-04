import {Formik, FormikValues} from 'formik';
import {FormStyles} from '../FormStyles';
import {Checkbox, PhoneField, TextArea, TextField} from '../../fields';
import {Button} from '../../Button';
import React, {useState} from 'react';
import axios from 'axios';
// @ts-ignore
import file1 from 'assets/files/Pravila-Akcii-Chiken-Tamagochi.pdf';
// @ts-ignore
import file2 from 'assets/files/Polzovatelskoe-Soglashenie-Chiken-Tamagochi.pdf';
import {validation} from './validation';
import Cookies from 'js-cookie';
import {useUser} from '../../../helpers/hooks';

const values = {
	first_name: '',
	last_name: '',
	patronymic: '',
	city: '',
	address: '',
	postal_code: '',
	building: '',
	apartment: '',
	phone: '',
	// comment: '',
	personal_data: false,
	rules: false,
}

export const GetPrizeForm = ({ openSuccess, closeModal }: any) => {
	const { mutationTrigger } = useUser()
	const [isLoad, setIsLoad] = useState<boolean>(false)

	const handleSubmit = async (values: FormikValues) => {
		const formData: any = {}

		Object.keys(values).forEach(key => {
			if (key !== 'personal_data' && key !== 'rules') {
				formData[key] = values[key]
			}
		})

		setIsLoad(true)
		await axios.post('/user/personal-data', {...formData}, {
			headers: {
				Authorization: `Bearer ${Cookies.get('_kfc_token')}`
			}
		})
			.then((res)=> {
				mutationTrigger()
				closeModal()
				openSuccess()
			})
			.finally(()=>  setIsLoad(false))
	}

	return (
		<Formik
			initialValues={values}
			onSubmit={handleSubmit}
			enableReinitialize
			validate={validation}
		>
			{({values}) => (
				<FormStyles >
					<TextField
						name="first_name"
						placeholder="Фамилия"
						disabled={isLoad}
					/>
					<TextField
						name="last_name"
						placeholder="Имя"
						disabled={isLoad}
					/>
					<TextField
						name="patronymic"
						placeholder="Отчество"
						disabled={isLoad}
					/>


					<div className="form-block">
						<div className="form-block-title">Адрес доставки</div>

						<TextField
							name="city"
							placeholder="Город"
							disabled={isLoad}
						/>

						<TextField
							name="address"
							placeholder="Улица"
							disabled={isLoad}
						/>

						<div className="block-row">
							<TextField
								name="postal_code"
								placeholder="Индекс"
								disabled={isLoad}
							/>

							<TextField
								name="building"
								placeholder="№ Дома"
								disabled={isLoad}
							/>

							<TextField
								name="apartment"
								placeholder="№ Кв"
								disabled={isLoad}
								hideMark
							/>
						</div>
					</div>
					<div className="form-block">
						<div className="form-block-title">Контакты</div>

						<PhoneField
							name="phone"
							disabled={isLoad}
						/>

						<TextArea
							name="comment"
							placeholder="Ваш комментарий"
							disabled={isLoad}
							className="textarea"
							hideMark
						/>
					</div>

					<Checkbox
						styled={{marginTop: 20}}
						value={values.personal_data}
						name="personal_data"
					>
						Согласие <a href={file2} rel="noopener noreferrer" target="_blank">на обработку персональных данных</a>.
					</Checkbox>
					<Checkbox
						styled={{marginTop: 20}}
						value={values.rules}
						name="rules"
					>
						Согласие с <a href={file1} rel="noopener noreferrer" target="_blank">условиями и правилами Акции</a>.
					</Checkbox>
					<Button
						variant="red"
						type="submit"
						isLoading={isLoad}
						children={"Отправить"}
					/>
				</FormStyles>
			)}
		</Formik>
	)
}
