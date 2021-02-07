import React from "react";
import PropTypes from 'prop-types';
import SelectedInstrument from './SelectedInstrument';
import '../styles/filterSelected.css';

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

  const handleClick = (isSelected, instrument) => {
    if (isSelected) {
      dispatch({ type: 'DESELECT', payload: instrument });
    } else {
      dispatch({ type: 'SELECT', payload: instrument });
    }
  };

  return (
    <ul className="selectedInstrumentList">
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
            onClick={handleClick(isSelected, instrument)}
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
