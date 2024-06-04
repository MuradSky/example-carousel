import React, { ReactNode } from 'react';
import { StyledButton } from './ButtonStyles';
import { ReactComponent as Loader } from 'assets/svg/pre-loader.svg';

type TP = {
    type?: "button" | "submit" | "reset" | "link",
    children?: ReactNode,
    onClick?: React.MouseEventHandler<HTMLButtonElement>,
	rel?: string
	style?: any,
}

export const Button: React.FC<TButton & TP> = ({
    type="button",
    variant="red",
    isLoading,
    children,
    disabled,
    href,
    target,
    icon,
	rel,
    ...props
}) => {
    return type === "link" ? (
		<StyledButton
	          variant={variant}
	          as="a"
	          href={href}
	          target={target}
	          className={props.className}
	          rel={rel}
		>{children}</StyledButton>
    ) : (
	    <StyledButton
	      type={type}
	      variant={variant}
	      isLoading={isLoading}
	      disabled={disabled || isLoading}
	      {...props}
	    >
	        {!isLoading && icon}
		    {isLoading && <Loader className="pre-loader"/>}
	        <span>{children}</span>
	    </StyledButton>
    )
}
