import React from 'react';
import { ButtonLoadMore } from './Button.styled';
import PropTypes from 'prop-types';

const Button = ({ onLoadMore, text }) => {
  return (
    <ButtonLoadMore type="button" onClick={onLoadMore}>
      {text}
    </ButtonLoadMore>
  );
};

Button.propTypes = {
  onLoadMore: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
};

export default Button;
