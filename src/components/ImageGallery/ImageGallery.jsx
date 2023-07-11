import React from 'react'
import ImageGalleryItem from '../ImageGalleryItem'
import { ImageGalleryList } from './ImageGallery.styled';
// import PropTypes from 'prop-types'


const ImageGallery = ({ images }) => {
  return (
    <ImageGalleryList>
      {images.map(({ id, webformatURL, largeImageURL }) => (
        <ImageGalleryItem
          key={id}
          image={webformatURL}
          largeImage={largeImageURL}
        />
      ))}
    </ImageGalleryList>
  );
};

export default ImageGallery;