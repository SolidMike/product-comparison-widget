import React from "react";
import ReactDOM from "react-dom";
import { StyledModal, Overlay } from "../Modal/Modal.styles";

export interface IModal {
  isShown: boolean;
  hide: () => void;
  submit: () => void;
  headerText: string;
}

const Modal: React.FC<IModal> = ({
  isShown,
  hide,
  children,
  headerText,
  submit,
}) => {
  const modal = (
    <>
      <Overlay />
      <StyledModal>
        <div>{headerText}</div>
        <div>{children}</div>
        <button onClick={submit}>Выбрать</button>
        <button onClick={hide}>Закрыть</button>
      </StyledModal>
    </>
  );
  return isShown ? ReactDOM.createPortal(modal, document.body) : null;
};

export default Modal;
