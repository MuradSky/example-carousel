import React, {useState} from 'react';
import { useField } from 'formik';
import { LabelStyles, Input, ErrorField, Placeholder } from "./LabelStyles"

interface TP extends TFieldLabel {
	hideMark?: boolean
}

export const Label: React.FC<TP> = ({
  name,
  placeholder,
  textFiled,
  icons,
  disabled,
	hideMark,
}) => {
  const [focus, setFocus] = useState<boolean>(false)
  const [field, meta] = useField(name)

  return (
    <LabelStyles
        disabled={!!disabled}
        onFocus={()=> setFocus(true)}
        onBlur={()=> setFocus(false)}
        isFocus={focus || !!field.value}
    >
      <Input isError={!!meta.error && meta.touched}>
        {textFiled}
        {placeholder && <Placeholder>{placeholder} {!hideMark && <span>*</span>} </Placeholder>}
        {icons}
      </Input>
    {(meta.error && meta.touched) && <ErrorField isError={!!meta.error && meta.touched} children={meta.error}/>}
    </LabelStyles>
  )
}
