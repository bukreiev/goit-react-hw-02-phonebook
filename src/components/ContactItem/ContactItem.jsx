import React from 'react';
import PropTypes from 'prop-types';
import { P, Name, Button } from './ContactItem.styled';

function ContactItem({ name, number, id, onClick }) {
  return (
    <>
      <P>
        <Name>{name}:</Name> {number}
      </P>
      <Button id={id} type="button" onClick={onClick}>
        -
      </Button>
    </>
  );
}
ContactItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
};

export default ContactItem;
