import React from 'react';
import { Overlay, ModalBlock } from './Modal.styled';

const Modal = ({image}) => {
  return (
    <Overlay>
      <ModalBlock>
        <img src={image} alt="" />
      </ModalBlock>
    </Overlay>
  );
};

export default Modal;
