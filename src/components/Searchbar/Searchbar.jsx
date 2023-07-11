import React from 'react';
import { Formik, ErrorMessage } from 'formik';
import {
  FormWrap,
  FormBlock,
  Input,
  Button,
  Icon,
  ErrorText,
} from './Searchbar.styled';
import PropTypes from 'prop-types';

const initialValues = { item: '' };

const FormError = ({ name }) => {
  return (
    <ErrorMessage
      name={name}
      render={message => <ErrorText>{message}</ErrorText>}
    />
  );
};

const Searchbar = ({ onSubmit }) => {
  const handleSubmit = ({item}, { resetForm }) => {
    resetForm();
    onSubmit(item);
  };

  return (
    <FormWrap>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        <FormBlock>
          <Button type="submit">
            <Icon />
          </Button>
          <Input
            name="item"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
          <FormError name="item" />
        </FormBlock>
      </Formik>
    </FormWrap>
  );
};

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
}

export default Searchbar;
