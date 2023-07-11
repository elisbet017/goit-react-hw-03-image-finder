import React from 'react';
import { Overlay, ModalBlock } from './Modal.styled';

const Modal = ({id}) => {
  return (
    <Overlay>
      <ModalBlock>
        <img src={id} alt="" />
      </ModalBlock>
    </Overlay>
  );
};

export default Modal;
