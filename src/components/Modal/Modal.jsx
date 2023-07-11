import React, { Component } from 'react';
import { createPortal } from 'react-dom';
import { Overlay, ModalBlock } from './Modal.styled';
import PropTypes from 'prop-types';

const modalRoot = document.querySelector('#modal-root');

class Modal extends Component {
  componentDidMount = () => {
    window.addEventListener('keydown', this.onClose);
  };

  componentWillUnmount = () => {
    window.removeEventListener('keydown', this.onClose);
  };

  onClose = e => {
    const { onCloseModal } = this.props;
    if (e.code === 'Escape' || e.currentTarget === e.target) {
      onCloseModal();
    }
  };

  render() {
    const { children } = this.props;
    return createPortal(
      <Overlay onClick={this.onClose}>
        <ModalBlock>{children}</ModalBlock>
      </Overlay>,
      modalRoot
    );
  }
}

Modal.propTypes = {
  onClose: PropTypes.func,
  children: PropTypes.element.isRequired,
};

export default Modal;
