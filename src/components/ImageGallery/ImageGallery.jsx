import React from 'react'
import ImageGalleryItem from '../ImageGalleryItem'
import { ImageGalleryList } from './ImageGallery.styled';
// import PropTypes from 'prop-types'


const ImageGallery = ({ images, onOpenModal }) => {
  return (
    <ImageGalleryList>
      {images.map(image => (
        <ImageGalleryItem
          key={image.id}
          image={image.webformatURL}
          largeImage={image.largeImageURL}
          onOpenModal={onOpenModal}
        />
      ))}
    </ImageGalleryList>
  );
};

export default ImageGallery;