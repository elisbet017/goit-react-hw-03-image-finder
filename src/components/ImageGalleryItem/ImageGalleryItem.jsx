import React, { Component } from 'react';
import Modal from '../Modal';
import { Item, Image } from './ImageGalleryItem.styled';
// import PropTypes from 'prop-types'

class ImageGalleryItem extends Component {
  state = {
    largeImageURL: null,
    isModalOpen: false,
  };

  onOpenModal = image => {
    this.setState({ isModalOpen: true, largeImageURL: image });
  };

  render() {
    const { isModalOpen, largeImageURL } = this.state;
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
        {isModalOpen && <Modal image={largeImageURL} />}
      </>
    );
  }
}

// const ImageGalleryItem = ({ image, onOpenModal, largeImage }) => {
//   return (
// <Item
//   onClick={() => {
//     onOpenModal(largeImage);
//   }}
// >
//   <Image src={image} alt="" />
// </Item>
//   );
// };

export default ImageGalleryItem;
