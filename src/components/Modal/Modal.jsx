import React from 'react';
import { Overlay, ModalBlock } from './Modal.styled';

const Modal = ({ image, children }) => {
  return (
    <Overlay>
      <ModalBlock>
        {children}
      </ModalBlock>
    </Overlay>
  );
};

export default Modal;
