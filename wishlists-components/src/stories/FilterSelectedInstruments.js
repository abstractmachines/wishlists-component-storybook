import React from "react";
import PropTypes from 'prop-types';
import SelectedInstrument from './SelectedInstrument';

const SELECT = "SELECT";
const DESELECT = 'DESELECT'

function selectInstrumentsReducer(state, action) {
  switch (action.type) {
    case SELECT:
      return [...state, action.payload];
    case DESELECT:
      return state.filter((instrument) => instrument.id !== action.payload.id);
    default:
      return state;
  }
}

const SelectedInstruments = ({instruments}) => {
  const [selectedInstruments, dispatch] = React.useReducer(
    selectInstrumentsReducer,
    []
  );

  return (
    <ul>
      {instruments.map((instrument) => {
        const isSelected = Boolean(
          selectedInstruments.find((c) => c.id === instrument.id)
        );
        return (
          <SelectedInstrument
            key={instrument.id}
            isSelected={isSelected}
            instrument={instrument}
            dispatch={dispatch}
          />
        );
      })}
    </ul>
  );
}

SelectedInstruments.propTypes = {
  instruments: PropTypes.shape([
    {}
  ])
}

export default SelectedInstruments;
