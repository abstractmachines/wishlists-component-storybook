import React from 'react';

import SelectedInstruments from '../components/FilterSelectedInstruments';

export default {
  title: 'Example/FilterSelectedInstruments',
  component: SelectedInstruments,
};

const Template = (args) => <SelectedInstruments {...args} />;

const instrumentsList = [
  { id: 1, make: "Fender", model: "Stratocaster", year: 1965 },
  { id: 2, make: "Gibson", model: "Black Beauty", year: 1978 },
  { id: 3, name: "Jackson", model: "Randy Rhoades", year: 1986 }
];

export const SelectedList = Template.bind({});
SelectedList.args = {
  instruments: instrumentsList,
};
