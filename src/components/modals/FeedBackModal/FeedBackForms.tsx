import React from 'react';
import { FormsModalContent, ModalText, ModalTitle } from '../ModalStyles';
import { FeedbackForm, Button } from 'components';
import { ReactComponent as DataIcon } from 'assets/svg/icon-data-1.svg';

const FeedBackModal: React.FC<TModalForms> = ({ changeViewType, onClose }) => {
  return (
    <FormsModalContent>
      <ModalTitle>Обращение в поддержку</ModalTitle>
      <ModalText mb40>
        Пожалуйста, оставьте свои данные и интересующий вас вопрос в форме ниже.
      </ModalText>

      <FeedbackForm onClose={onClose} changeViewType={changeViewType} />
    </FormsModalContent>
  );
};

const FeedBackSuccess: React.FC<TModalForms> = ({ onClose }) => {
  return (
    <FormsModalContent>
      <ModalTitle>Замена пароля</ModalTitle>

      <DataIcon className="modal-icon" />

      <ModalText className="text-success" mb40>
        Ваш пароль был успешно заменен.
      </ModalText>
      <Button onClick={onClose} className="btn-center" children={'Ок'} />
    </FormsModalContent>
  );
};

export const FeedBackForms: React.FC<TModalForms> = ({
  modalType,
  changeViewType,
  onClose,
}) => {
  const forms = {
    feedback: (
      <FeedBackModal onClose={onClose} changeViewType={changeViewType} />
    ),
    success: <FeedBackSuccess onClose={onClose} />,
  };
  /*@ts-ignore*/
  return forms[modalType];
};
