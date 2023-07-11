import React, { Component } from 'react';
import getImages from '../services/images_API';
import Searchbar from './Searchbar';
import ImageGallery from './ImageGallery';
import Button from './Button';
import Loader from './Loader';
import { Wrap, Section } from './App.styled';
// import PropTypes from 'prop-types'

// const Status = {
//   IDLE: 'idle',

// }

export class App extends Component {
  state = {
    status: 'idle',
    images: [],
    page: 1,
    isLoading: false,
    isListShown: false,
    isModalOpen: false,
    value: '',
    modalImage: null,
  };

  componentDidUpdate = async (_, prevState) => {
    const { value, page} = this.state;

    if (
      (prevState.value !== value) ||
      (prevState.page !== page)
    ) {
      try {
        const responce = await getImages(value, page);

        this.setState(prevState => ({
          images: [...prevState.images, ...responce.data.hits],
          isListShown: true,
        }));
      } catch (error) {
        console.log(error.message);
      } finally {
        this.setState({ isLoading: false });
      }
    }
  };

  handleSubmit = value => {
    this.setState({
      isLoading: true,
      value,
      page: 1,
      images: [],
    });
  };

  onLoadMore = () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
    }));
  };

  render() {
    const { images, isLoading, isListShown, status } = this.state;
    return (
      <Section>
        <Wrap>
          <Searchbar
            onSubmit={value => {
              this.handleSubmit(value);
            }}
          />
          {isLoading && <Loader />}
          {isListShown && !isLoading && (
            <ImageGallery
              images={images}
            />
          )}
        </Wrap>
        {isListShown && !isLoading && (
          <Button
            text="Load more"
            onLoadMore={value => {
              this.onLoadMore(value);
            }}
          />
        )}
      </Section>
    );
  }
}

// модалка
// пропси
// машина стану
// почистити
// кнопка лоад дізейблд коли натиснули
// прибрати yup
