import React, { useState } from 'react';
import { Label } from '../Label';

export const UploadField: React.FC<TTextField> = ({
  type = 'text',
  name,
  placeholder,
  value,
  setFile,
  ...props
}) => {
  const [preview, setPreview] = useState<string>();
  return (
    <Label
      name={name}
      placeholder={placeholder}
      {...props}
      textFiled={
        <>
          {preview && <img src={preview} alt="preview" />}
          <input
            id="file"
            name="file"
            accept='.jpg,.jpeg,.png'
            type="file"
            onChange={event => {
              if (!event.currentTarget.files) return;
              setPreview(URL.createObjectURL(event.currentTarget.files[0]));
              setFile(event.currentTarget.files[0]);
            }}
          />
        </>
      }
    />
  );
};
