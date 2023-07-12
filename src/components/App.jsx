import React, { Component } from 'react';
import getImages from '../services/images_API';
import Searchbar from './Searchbar';
import ImageGallery from './ImageGallery';
import Button from './Button';
import Loader from './Loader';
import imagesMapper from '../helpers/imagesMapper';
import { Wrap, Section, Utils, Text } from './App.styled';

export class App extends Component {
  state = {
    status: 'idle',
    images: [],
    page: 1,
    value: '',
  };

  componentDidUpdate = async (_, prevState) => {
    const { value, page} = this.state;

    if (
      prevState.value !== value ||
      prevState.page !== page
    ) {
      try {
        this.setState({ status: 'pending' });
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
      value,
      page: 1,
      images: [],
    });
  };

  onLoadMore = () => {
    this.setState(({ page }) => ({
      page: page + 1,
    }));
  };

  render() {
    const { images, status, page } = this.state;
    return (
      <Section>
        <Wrap>
          <Searchbar
            onSubmit={value => {
              this.handleSubmit(value);
            }}
          />
          {status === 'pending' && <Loader />}
          {(status === 'resolved' || status === 'pending') && (
            <ImageGallery images={images} />
          )}
        </Wrap>
        {status === 'resolved' && images.length === 0 && (
          <Text>We are sorry, but we couldn't find anything.</Text>
        )}
        <Utils>
          {status === 'pending'  && page !== 1 && <Loader />}
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
