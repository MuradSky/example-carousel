import React, { useEffect, useState } from 'react';
import { Field, useField } from 'formik';
import { PatternFormat } from 'react-number-format';
import { Label } from '../Label';

export const PhoneField: React.FC<TTextField> = ({
  name = 'phone',
  placeholder,
  disabled,
  value,
}) => {
  const [, , { setValue, setTouched }] = useField(name);
  const [isEmpty, setIsEmpty] = useState<boolean>(false);
  const [phoneValue, setPhoneValue] = useState<string | null>(null);

  useEffect(() => {
    if (phoneValue && phoneValue[4] !== '9') {
      setPhoneValue('+7 (___) ___ __ __');
    }
  }, [phoneValue]);

  return (
    <Label
      name={name}
      placeholder={placeholder}
      disabled={disabled}
      textFiled={
        <PatternFormat
          type="text"
          format="+7 (###) ### ## ##"
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
};
