import React, {useState} from 'react';
import {Formik, FormikValues} from 'formik';
import {TextArea, TextField} from 'components/fields';
import {Button} from 'components/Button';
import {FormStyles} from '../FormStyles';
import axios from 'axios';

const values = {
	name: '',
	email: '',
	comment: '',
}

export const FeedbackForm: React.FC<TModalForms> = ({changeViewType}) => {
	const [isLoad, setIsLoad] = useState<boolean>(false)

	const handleSubmit = async (values: FormikValues) => {
		setIsLoad(true)
	    await axios.post('https://jsonplaceholder.typicode.com/posts', {values})
		    .then(()=> {
			    changeViewType?.("")
		    })
		    .finally(()=>  setIsLoad(false))
	}

	return (
		<Formik
			initialValues={values}
			onSubmit={handleSubmit}
			enableReinitialize
		>
			{({values}) => (
				<FormStyles>
					<TextField
						name="name"
						placeholder="Имя"
						disabled={isLoad}
					/>
					<TextField
						name="name"
						placeholder="Е-mail"
						disabled={isLoad}
					/>
					<TextArea
						name="comment"
						placeholder="Комментарий"
						disabled={isLoad}
					/>

					<Button
						variant="red"
						type="submit"
						isLoading={isLoad}
						//disabled
						children={"Submit"}
					/>
				</FormStyles>
			)}
		</Formik>
	)
}
