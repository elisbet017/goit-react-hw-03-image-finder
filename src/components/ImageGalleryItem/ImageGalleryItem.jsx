import React from 'react'
import { Item, Image } from './ImageGalleryItem.styled';
// import PropTypes from 'prop-types'

const ImageGalleryItem = ({ image, onOpenModal }) => {
  return (
    <Item onClick={() => onOpenModal(image.id)}>
      <Image src={image} alt="" />
    </Item>
  );
};

export default ImageGalleryItem;