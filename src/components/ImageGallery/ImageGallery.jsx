import React from 'react'
import ImageGalleryItem from '../ImageGalleryItem'
import { ImageGalleryList } from './ImageGallery.styled';

const ImageGallery = ({ images }) => {
  return (
    <ImageGalleryList>
      {images.map(image => (
        <ImageGalleryItem key={image.id} image={image.webformatURL} />
      ))}
    </ImageGalleryList>
  );
};

export default ImageGallery;