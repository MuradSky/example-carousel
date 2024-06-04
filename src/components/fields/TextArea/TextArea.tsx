import { Label } from '../Label';
import React from "react";
import {useField} from "formik";
import {TextAreaStyles} from "../Label/LabelStyles";

export const TextArea: React.FC<TTextField> = ({
    name,
    placeholder,
    value,
    disabled,
    ...props
}) => {
    const [field] = useField(name)
    return (
        <Label
            name={name}
            placeholder={placeholder}
            {...props}
            textFiled={(
                // @ts-ignore
                <TextAreaStyles
                    name={name}
                    value={value}
                    disabled={disabled}
                    onKeyUp={(e)=> field.onChange(e)}
                    {...props}
                />
            )}
        />
    )
}
