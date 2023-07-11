import React from 'react';
import { ButtonLoadMore } from './Button.styled';

const Button = ({ onLoadMore, text }) => {
  return (
    <ButtonLoadMore type="button" onClick={onLoadMore}>
      {text}
    </ButtonLoadMore>
  );
};

export default Button;
