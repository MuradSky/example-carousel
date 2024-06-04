import React, { useState } from 'react';
import { Field } from 'formik';
import { Label } from '../Label';
import { ReactComponent as IconEyeClose } from 'assets/svg/icon-eye-close.svg';
import { ReactComponent as IconEye } from 'assets/svg/icon-eye.svg';

type TPass = {
  isPass: boolean;
  onClick: React.MouseEventHandler;
};

const toggle = (toggle: boolean) => (toggle ? 'password' : 'text');

const PassChange: React.FC<TPass> = ({ isPass, onClick }) => {
  return (
    <button type="button" className="icon-eye" onClick={onClick}>
      {isPass ? <IconEyeClose /> : <IconEye />}
    </button>
  );
};

export const PasswordField: React.FC<TTextField> = ({
  name,
  placeholder,
  value,
  ...props
}) => {
  const [isPass, setIsPass] = useState<boolean>(true);
  return (
    <Label
      name={name}
      placeholder={placeholder}
      {...props}
      textFiled={
        <Field type={toggle(isPass)} value={value} name={name} {...props} />
      }
      icons={<PassChange isPass={isPass} onClick={() => setIsPass(!isPass)} />}
    />
  );
};
