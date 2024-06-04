import React, {useState } from "react";
import { Modal } from "components";
import { FeedBackForms } from "./FeedBackForms";

export const FeedbackModal = ({ isOpen, onClose }: ModalProps) => {
    const [modalType, setModalType] = useState<string>("feedback")
    const changeViewType = (type: string) => setModalType(type)

    return (
        <Modal isOpen={isOpen} onClosed={onClose}>
            <FeedBackForms
                modalType={modalType}
                changeViewType={changeViewType}
                onClose={onClose}
            />
        </Modal>
    )
}
