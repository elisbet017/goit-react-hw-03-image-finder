import React from 'react';
import { Item, Image } from './ImageGalleryItem.styled';
// import PropTypes from 'prop-types'

const ImageGalleryItem = ({ image, onOpenModal, largeImage }) => {
  return (
    <Item
      onClick={() => {
        onOpenModal(largeImage);
      }}
    >
      <Image src={image} alt="" />
    </Item>
  );
};

export default ImageGalleryItem;
