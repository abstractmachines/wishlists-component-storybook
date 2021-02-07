import React, { useState } from "react";
import PropTypes from 'prop-types';
import '../styles/filterSelected.css';

const SelectedInstrument = ({ isSelected, instrument, dispatch, onClick }) => {

  const handleClick = () => {
    if (isSelected) {
      dispatch({ type: 'DESELECT', payload: instrument });
    } else {
      dispatch({ type: 'SELECT', payload: instrument });
    }
  };

  return (
    <li className="selectedInstrumentItem" onClick={handleClick}>
      <input checked={isSelected} type="checkbox" />
      {instrument.year} {instrument.make} {instrument.model}
    </li>
  );
}

SelectedInstrument.propTypes = {
  dispatch: PropTypes.func,
  instrument: PropTypes.object,
  isSelected: PropTypes.bool,
  onClick: PropTypes.func
}

SelectedInstrument.defaultProps = {
  instrument: {
    make: 'Gibson',
    model: 'Les Paul Standard',
    year: 1959
  },
  isSelected: true,
  dispatch: undefined,
  onClick: undefined
}

export default SelectedInstrument;
