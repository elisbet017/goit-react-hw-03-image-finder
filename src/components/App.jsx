import React, { Component } from 'react';
import getImages from '../services/images_API';
import Searchbar from './Searchbar';
import ImageGallery from './ImageGallery';

export class App extends Component {
  state = {
    images: [],
    page: 1,
  };
  async componentDidMount() {
    try {
      const responce = await getImages();
      this.setState({ images: responce.data.hits });
    } catch (error) {}
  }

  render() {
    const { images } = this.state
    return (
      <>
        <Searchbar onSubmit />
        <ImageGallery images={images} />
      </>
    );
  }
}
// id - унікальний ідентифікатор
// webformatURL - посилання на маленьке зображення для списку карток
// largeImageURL - посилання на велике зображення для модального вікна
