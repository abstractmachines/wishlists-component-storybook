import React, { useState } from "react";
import PropTypes from 'prop-types';
import '../styles/filterSelected.css';

const SelectedInstrument = ({ isSelected, instrument, onClick }) => {

  return (
    <li className="selectedInstrumentItem" onClick={onClick}>
      <input checked={isSelected} type="checkbox" />
      {instrument.year} {instrument.make} {instrument.model}
    </li>
  );
}

SelectedInstrument.propTypes = {
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
  onClick: undefined
}

export default SelectedInstrument;
