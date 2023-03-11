import PropTypes from 'prop-types';
import { Form, Label, Input } from './Filter.styled';

function Filter({ value, onChange }) {
  return (
    <Form>
      <Label>Find contacts by name</Label>
      <Input type="text" value={value} onChange={onChange} />
    </Form>
  );
}
Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
export default Filter;
