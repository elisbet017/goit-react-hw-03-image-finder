import React from 'react';
import { Overlay, ModalBlock } from './Modal.styled';

const Modal = ({path}) => {
  return (
    <Overlay>
      <ModalBlock>
        <img src={path} alt="" />
      </ModalBlock>
    </Overlay>
  );
};

export default Modal;
