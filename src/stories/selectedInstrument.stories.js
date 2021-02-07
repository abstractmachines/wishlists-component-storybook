import React from 'react';

import SelectedInstrument from '../components/SelectedInstrument';

export default {
  title: 'Example/SelectedInstrument',
  component: SelectedInstrument,
  argTypes: {
    backgroundColor: { control: 'color' },
    onClick: { action: 'clicked' }
  },
};

const Template = (args) => <SelectedInstrument {...args} />;

const instrument = { id: 1, make: "Fender", model: "Stratocaster", year: 1965 }

export const SelectedItem = Template.bind({});
SelectedItem.args = {
  instrument: instrument,
  dispatch: () => { return {type: 'SELECT', payload: instrument} },
  isSelected: true
};
