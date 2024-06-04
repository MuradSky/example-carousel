export const validation = (values: any) => {
	const errors: any = {};

	if (!values.last_name) {
		errors.last_name = 'Обязательное поле';
	}
	if (!values.first_name) {
		errors.first_name = 'Обязательное поле';
	}

	if (!values.patronymic) {
		errors.patronymic = 'Обязательное поле';
	}

	if (!values.city) {
		errors.city = 'Обязательное поле';
	}

	if (!values.address) {
		errors.address = 'Обязательное поле';
	}

	if (!values.postal_code) {
		errors.postal_code = 'Обязательное поле';
	} else if (/[^0-9]/g.test(values.postal_code)) {
		errors.postal_code = 'Только цифры';
	}


	if (!values.building) {
		errors.building = 'Обязательное поле';
	}

	if (!values.phone) {
		errors.phone = 'Обязательное поле';
	}

	if (!values.personal_data) {
		errors.personal_data = 'Обязательное поле';
	}

	if (!values.rules) {
		errors.rules = 'Обязательное поле';
	}

	return errors
}
