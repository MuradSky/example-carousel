import React from "react";
import { ReactComponent as CloseIcon } from "assets/svg/icon-clear.svg";
import {ModalClose, ModalStyles} from "../ModalStyles";

export const Modal: React.FC<TModal> = ({
    isOpen,
    children,
    onClosed,
    className,
    shouldCloseOnOverlayClick,
	offRequestClose
}) => {
    return (
        <ModalStyles
            isOpen={isOpen}
            className={`React-Modal-Wrap ${className}`}
            overlayClassName="React-Modal"
            onRequestClose={offRequestClose ? null : onClosed}
            contentLabel="React Modal"
            shouldCloseOnOverlayClick={shouldCloseOnOverlayClick}
            ariaHideApp={false}
        >
            <ModalClose onClick={onClosed}>
                <CloseIcon />
            </ModalClose>
            {children}
        </ModalStyles>
    )
}
