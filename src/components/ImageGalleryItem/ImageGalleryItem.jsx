import React, { Component } from 'react';
import Modal from '../Modal';
import { Item, Image } from './ImageGalleryItem.styled';
// import PropTypes from 'prop-types'

class ImageGalleryItem extends Component {
  state = {
    largeImageURL: null,
    isModalOpened: false,
  };

  onToggleModal = image => {
    this.setState(({ isModalOpened }) => ({
      isModalOpened: !isModalOpened,
      largeImageURL: image,
    }));
  };

  render() {
    const { isModalOpened, largeImageURL } = this.state;
    const { image, largeImage } = this.props;
    return (
      <>
        <Item
          onClick={() => {
            this.onToggleModal(largeImage);
          }}
        >
          <Image src={image} alt="" />
        </Item>
        {isModalOpened && (
          <Modal>
            <img src={largeImageURL} alt="" />
          </Modal>
        )}
      </>
    );
  }
}

export default ImageGalleryItem;
