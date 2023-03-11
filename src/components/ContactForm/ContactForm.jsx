import React from 'react';
import styled from '@emotion/styled';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';
import * as Yup from 'yup';
import { Label, Button } from './ContactForm.styled';

const Input = styled(Field)`
  height: 25px;
  border-radius: 5px;
  border: 1px solid #b6e1ff;
  width: 300px;
  margin-bottom: 20px;
`;

const PhoneForm = styled(Form)`
  display: flex;
  flex-direction: column;
  background-color: rgba(171, 171, 171, 0.4);
  border-radius: 8px;
  margin: 30px;
  margin-top: 0;
  margin-bottom: 0;
  padding: 20px;
  width: 300px;
`;
const nameInputId = nanoid();
const numberInputId = nanoid();
const initialValues = {
  name: '',
  number: '',
};
const schema = Yup.object().shape({
  name: Yup.string()
    .matches(
      /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/,
      'The name may contain only letters and '
    )
    .min(3, 'Too short')
    .max(30, 'Too long')
    .required('Required')
    .trim(),
  number: Yup.string()
    .matches(
      /\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/
    )
    .min(7, 'Too short')
    .max(20, 'Too long')
    .required('Required')
    .trim(),
});

function ContactForm({ onSubmit }) {
  const handleSubmit = (values, { resetForm }) => {
    resetForm();
    onSubmit(values);
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={schema}
    >
      <PhoneForm>
        <Label htmlFor={nameInputId}>Name</Label>
        <Input type="text" name="name" id={nameInputId} />
        <ErrorMessage name="name" render={msg => alert(msg)} />
        <Label htmlFor={numberInputId}>Number</Label>
        <Input type="tel" name="number" id={numberInputId} />
        <ErrorMessage name="number" render={msg => alert(msg)} />
        <Button type={'submit'}>Add contact</Button>
      </PhoneForm>
    </Formik>
  );
}

ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default ContactForm;
