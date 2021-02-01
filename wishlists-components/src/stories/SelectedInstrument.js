import React from "react";
import PropTypes from 'prop-types';

const SelectedInstrument = ({ isSelected, instrument, dispatch }) => {
  const handleClick = () => {
    if (isSelected) {
      dispatch({ type: 'DESELECT', payload: instrument });
    } else {
      dispatch({ type: 'SELECT', payload: instrument });
    }
  };

  return (
    <li onClick={handleClick}>
      {isSelected ? "[x] " : "[ ] "}
      {instrument.year} {instrument.make} {instrument.model}
    </li>
  );
}

SelectedInstrument.propTypes = {
  dispatch: PropTypes.func,
  instrument: PropTypes.object,
  isSelected: PropTypes.bool
}

SelectedInstrument.defaultProps = {
  instrument: {
    make: 'Gibson',
    model: 'Les Paul Standard',
    year: 1959
  }
}

export default SelectedInstrument;
