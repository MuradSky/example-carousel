import {Label} from '../Label';
import {PatternFormat} from 'react-number-format';
import {Field, useField} from 'formik';
import React, {useState} from 'react';

interface TP extends TTextField {
	format?: string
	hideMark?: boolean
}

export const NumericMask = ({ name, placeholder, disabled, format, hideMark }: TP) => {
	const [, , { setValue, setTouched }] = useField(name);
	const [isEmpty, setIsEmpty] = useState<boolean>(false);
	const [phoneValue, setPhoneValue] = useState<string | null>(null);

	return (
		<Label
			name={name}
			placeholder={placeholder}
			disabled={disabled}
			hideMark={hideMark}
			textFiled={
				<PatternFormat
					type="text"
					format={format ?? ''}
					mask="_"
					value={phoneValue}
					allowEmptyFormatting={isEmpty}
					onFocus={() => setIsEmpty(true)}
					onBlur={() => setIsEmpty(false)}
					onValueChange={values => {
						setTouched(true);
						setValue(values.value);
						const prepValue = values.formattedValue
							? values.formattedValue.toString()
							: '';
						setPhoneValue(prepValue);
					}}
					customInput={Field}
					disabled={disabled}
				/>
			}
		/>
	);
}
