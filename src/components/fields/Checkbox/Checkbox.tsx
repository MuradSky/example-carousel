import React from 'react';
import {
  CheckboxBox, CheckboxContainer,
  // CheckboxContainer,
  CheckboxInput,
  CheckboxStyles,
  CheckboxText,
} from './CheckboxStyles';
import { ReactComponent as Checkmark } from 'assets/svg/icon-checkmark.svg';
import { useField } from 'formik';
import { ErrorField } from './CheckboxStyles';

export const Checkbox: React.FC<TCheckbox> = ({
  name = '',
  children,
  disabled,
  styled,
}) => {
  const [{ value }, meta, { setValue }] = useField(name);
  const onChange = () => !disabled && setValue(!value);

  return (
    <CheckboxStyles disabled={disabled} style={styled}>
      <CheckboxContainer>
        <CheckboxInput type="checkbox" name={name} onChange={onChange} />
        <CheckboxBox children={<Checkmark />} />
        <CheckboxText children={children} />
      </CheckboxContainer>

      {meta.error && meta.touched && (
        <ErrorField
          isError={!!meta.error && meta.touched}
          children={meta.error}
        />
      )}
    </CheckboxStyles>
  );
};
