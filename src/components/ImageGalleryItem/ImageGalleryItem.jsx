import React from 'react'
import { Item, Image } from './ImageGalleryItem.styled';

const ImageGalleryItem = ({ image }) => {
  return (
    <Item className="gallery-item">
      <Image src={image} alt="" />
    </Item>
  );
};

export default ImageGalleryItem;