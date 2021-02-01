import React from "react";
import PropTypes from 'prop-types';

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

const SelectedInstruments = () => {
  const [selectedInstruments, dispatch] = React.useReducer(
    selectInstrumentsReducer,
    []
  );

  const instruments = [
    { id: 1, make: "Fender", model: "Stratocaster", year: 1965 },
    { id: 2, make: "Gibson", model: "Black Beauty", year: 1978 },
    { id: 3, name: "Jackson", model: "Randy Rhoades", year: 1986 }
  ];

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

export default SelectedInstruments;
