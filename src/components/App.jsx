import React, { Component } from 'react';
import getImages from '../services/images_API';
import Searchbar from './Searchbar';
import ImageGallery from './ImageGallery';
import Button from './Button';
import Loader from './Loader';
import { Wrap, Section } from './App.styled';
// import PropTypes from 'prop-types'

export class App extends Component {
  state = {
    status: 'idle',
    images: [],
    page: 1,
    value: '',
  };

  componentDidUpdate = async (_, prevState) => {
    const { value, page } = this.state;

    if (prevState.value !== value || prevState.page !== page) {
      try {
        const responce = await getImages(value, page);

        this.setState(({images}) => ({
          images: [...images, ...responce.data.hits],
          status: 'resolved',
        }));
      } catch (error) {
        this.setState({ status: 'rejected' });
        console.log(error.message);
      }
    }
  };

  handleSubmit = value => {
    this.setState({
      status: 'pending',
      value,
      page: 1,
      images: [],
    });
  };

  onLoadMore = () => {
    this.setState(({page}) => ({
      page: page + 1,
    }));
  };

  render() {
    const { images, status } = this.state;
    return (
      <Section>
        <Wrap>
          <Searchbar
            onSubmit={value => {
              this.handleSubmit(value);
            }}
          />
          {status === 'pending' && <Loader />}
          {status === 'resolved' && <ImageGallery images={images} />}
        </Wrap>
        {status === 'resolved' && (
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
// почистити
// кнопка лоад дізейблд коли натиснули і додати лоадер під галерею
// прибрати yup
