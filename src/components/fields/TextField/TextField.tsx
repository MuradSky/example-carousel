import React from 'react';
import { Field } from 'formik';
import { Label } from '../Label';

export const TextField: React.FC<TTextField> = ({
  type= "text",
  name,
  placeholder,
  value,
  ...props
}) => {
  return (
    <Label
      name={name}
      placeholder={placeholder}
      {...props}
      textFiled={<Field type={type} value={value} name={name} {...props}/>}
    />
  )
}
