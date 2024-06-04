import React, {useState} from 'react';
import {Formik, FormikHelpers, FormikValues} from 'formik';
import {Button, TextField} from 'components';
import {FormStyles} from '../FormStyles';
import {dataFetch} from 'helpers/utils';
import {useUser} from 'helpers/hooks';
import {useNavigate} from 'react-router-dom';

interface LoginFormProps {
	onClose: ()=> void
}

export const LoginForm = ({onClose}: LoginFormProps) => {
	const navigation = useNavigate()
	const { mutationTrigger } = useUser()
	const [isLoading, setLoading] = useState(false)

	const handleSubmit = async (values: FormikValues, {setErrors}: FormikHelpers<any>) => {
		setLoading(true)
		await dataFetch.post('/test/login', { id: Number(values.login) })
			.then(({ access_token })=> {

				navigation('/profile')
				mutationTrigger(access_token).then(()=> {
					setLoading(false)
					onClose()
				})
			})
			.catch(setErrors)
	}

	return (
		<Formik
			initialValues={{ login: '' }}
			onSubmit={handleSubmit}
			enableReinitialize
		>
			{({values}) => (
				<FormStyles>
                    <TextField name="login" disabled={isLoading} placeholder="Login" />

					<Button
						variant="red"
						type="submit"
						isLoading={isLoading}
						// disabled={values.login.length === 0}
						children={'Войти'}
					/>
				</FormStyles>
			)}
		</Formik>
	);
};
