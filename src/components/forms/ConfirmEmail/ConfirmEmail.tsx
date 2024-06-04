import React, {useState} from 'react';
import {Form, Formik, FormikHelpers, FormikValues} from 'formik';
import {Button, Checkbox, TextField} from 'components';
import {useUser} from 'helpers/hooks';
import Cookies from 'js-cookie';
import axios from 'axios';
import {recordTimeFixed} from 'helpers/utils';
// @ts-ignore
import file1 from "assets/files/Pravila-Akcii-Chiken-Tamagochi.pdf"
// @ts-ignore
import file2 from "assets/files/Polzovatelskoe-Soglashenie-Chiken-Tamagochi.pdf"
import {useConfirmModal} from 'store';

const validation = (values: any) => {
	const errors: any = {};
	const emailRegExp = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;

	if (!values.email) {
		errors.email = 'Обязательное поле';
	}
	if (values.email && !emailRegExp.test(values.email)) {
		errors.email = 'Не верный адрес электронной почты';
	}
	if (!values.confirm_email) {
		errors.confirm_email = 'Обязательно поставить галочку';
	}
	return errors
}

const template = {
	"subscriptions": [
		{
			"brand": "KFC",
			"pointOfContact": "Email"
		},
		{
			"brand": "KFC",
			"pointOfContact": "SMS"
		},
		{
			"brand": "KFC",
			"pointOfContact": "Viber"
		},
		{
			"brand": "KFC",
			"pointOfContact": "Mobilepush"
		}
	]
}

export const ConfirmEmail = () => {
	const [addModalType]  = useConfirmModal((state: any) => [state.addModalType])
	const [isLoading, setIsLoading] = useState(false)
	const { mutationTrigger } = useUser()
	const onSubmit = async (values: FormikValues, { setFieldError }: FormikHelpers<any>) => {
		setIsLoading(true)
		const deviceData = JSON.parse(String(localStorage.getItem('_device_data')))

		const data = {
			email: values.email,
			confirm_email: values.confirm_email,
			device_id: deviceData?.device_id || localStorage.getItem('_device_uuid')
		}
		if (values.is_advertising) Object.assign(data, template)

		await axios.post('/auth/email/send-confirmation',  {...data}, {
			headers: {
				Authorization: `Bearer ${Cookies.get('_kfc_token')}`
			}
		}).then(()=> {
			addModalType('success')
			mutationTrigger()
			localStorage.setItem('_email_send', recordTimeFixed())
		}).catch(err=> {
			setFieldError('email', err.response.data.message)
		}).finally(()=> setIsLoading(false))
	}

	return (
		<Formik
			initialValues={{ email: '', confirm_email: true, is_advertising: true }}
			onSubmit={onSubmit}
			validate={validation}
		>
			{({values, errors})=> (
				<Form>
					<TextField name="email" placeholder="Е-mail" disabled={isLoading} />
					<Checkbox
						styled={{marginTop: 15}}
						value={values.confirm_email}
						name="confirm_email"
					>
						Я согласен с <a href={file1} rel="noopener noreferrer" target="_blank">Правилами акции</a> и <a href={file2} rel="noopener noreferrer" target="_blank">Политикой обработки персональных данных</a>
					</Checkbox>
					<Checkbox
						value={values.is_advertising}
						name="is_advertising"
					>
						Согласен на получение <a href="https://www.kfc.ru/legal/advertisement" rel="noopener noreferrer" target="_blank">рекламных сообщений</a>
					</Checkbox>
					<Button
						type="submit"
						className="btn-center"
						disabled={!values.email.length || !!errors.email}
						isLoading={isLoading}
					>
						Подтвердить
					</Button>
				</Form>
			)}
		</Formik>
	)
}
