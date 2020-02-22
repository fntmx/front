import React from 'react';
import PropTypes from 'prop-types';

export default function Text({ name, placeholder, value, onChange }) {
  return <input className="input-text" name={name} type="text" onChange={onChange} value={value} />;
}

Text.propTypes = {
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired
};
