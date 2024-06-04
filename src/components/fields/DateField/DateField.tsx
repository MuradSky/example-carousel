import React from 'react';
import { useField } from 'formik';
import { Label } from '../Label';
import {DatePickerStyles} from "../Label/LabelStyles";

export const DateField: React.FC<TTextField> = ({
  name = 'date',
  placeholder,
  disabled,
}) => {
  const [field, meta, { setValue }] = useField(name);

  return (
    <Label
      name={name}
      disabled={disabled}
      // placeholder={placeholder}
      textFiled={
        <DatePickerStyles
          name={name}
          disableCalendar={true}
          yearPlaceholder={'гггг'}
          dayPlaceholder={'дд'}
          monthPlaceholder={'мм'}
          showLeadingZeros={true}
          minDate={new Date('01.01.1900')}
          maxDate={new Date()}
          // clearIcon={null}
          value={field.value}
          isError={!!meta.error && meta.touched}
          onChange={(value: any) => {
            setValue(value);
          }}
        />
      }
    />
  );
};
