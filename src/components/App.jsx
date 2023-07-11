import React, { Component } from 'react';
import getImages from '../services/images_API';
import Searchbar from './Searchbar';
import ImageGallery from './ImageGallery';
import Button from './Button';
import Loader from './Loader';
import imagesMapper from './helpers/imagesMapper';
import { Wrap, Section, Utils, Text } from './App.styled';

export class App extends Component {
  state = {
    status: 'idle',
    images: [],
    page: 1,
    value: '',
  };

  componentDidUpdate = async (_, prevState) => {
    const { value, page, status } = this.state;

    if (
      prevState.value !== value ||
      prevState.page !== page ||
      status === 'pending'
    ) {
      try {
        const responce = await getImages(value, page);

        this.setState(({ images }) => ({
          images: [...images, ...imagesMapper(responce.data.hits)],
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
    this.setState(({ page }) => ({
      page: page + 1,
      status: 'load-more-pending',
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
          {(status === 'resolved' || status === 'load-more-pending') && (
            <ImageGallery images={images} />
          )}
        </Wrap>
        {status === 'resolved' && images.length === 0 && (
          <Text>We are sorry, but we couldn't find anything.</Text>
        )}
        <Utils>
          {status === 'load-more-pending' && <Loader />}
          {status === 'resolved' && images.length !== 0 && (
            <Button
              text="Load more"
              onLoadMore={value => {
                this.onLoadMore(value);
              }}
            />
          )}
        </Utils>
      </Section>
    );
  }
}
