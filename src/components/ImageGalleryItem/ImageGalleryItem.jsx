import React, { Component } from 'react';
import Modal from '../Modal';
import { Item, Image, ModalImage } from './ImageGalleryItem.styled';
import PropTypes from 'prop-types'

class ImageGalleryItem extends Component {
  state = {
    largeImageURL: null,
  };

  onOpenModal = image => {
    this.setState({
      largeImageURL: image,
    });
  };

  onCloseModal = () => {
    this.setState({ largeImageURL: null });
  };

  render() {
    const { largeImageURL } = this.state;
    const { image, largeImage } = this.props;
    return (
      <>
        <Item
          onClick={() => {
            this.onOpenModal(largeImage);
          }}
        >
          <Image src={image} alt="" />
        </Item>
        {largeImageURL && (
          <Modal onCloseModal={this.onCloseModal}>
            <ModalImage src={largeImageURL} alt="" />
          </Modal>
        )}
      </>
    );
  }
}

ImageGalleryItem.propTypes = {
  image: PropTypes.string.isRequired,
  largeImage: PropTypes.string.isRequired,
};

export default ImageGalleryItem;
