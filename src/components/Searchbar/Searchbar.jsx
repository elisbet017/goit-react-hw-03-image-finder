import React from 'react';
import { Formik, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import {
  FormWrap,
  FormBlock,
  Input,
  Button,
  Icon,
  ErrorText
} from './Searchbar.styled';

const initialValues = { item: '' };

const schema = Yup.object({
  item: Yup.string().required('It is a required field.'),
});

const FormError = ({ name}) => {
  return (
    <ErrorMessage
      name={name}
      render={message => <ErrorText>{message}</ErrorText>}
    />
  );
}

const Searchbar = ({ onSubmit }) => {
  
  const handleSubmit = (values, { resetForm }) => {
    resetForm();
    onSubmit(values.item);
  };
  
  return (
    <FormWrap>
      <Formik
        initialValues={initialValues}
        validationSchema={schema}
        onSubmit={handleSubmit}
      >
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
          <FormError name="item"/>
        </FormBlock>
      </Formik>
    </FormWrap>
  );
};

export default Searchbar;
