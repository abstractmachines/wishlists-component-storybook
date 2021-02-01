import React from 'react';

import SelectedInstruments from './FilterSelectedInstruments';

export default {
  title: 'Example/SelectedInstruments',
  component: SelectedInstruments,
};

const Template = (args) => <SelectedInstruments {...args} />;

export const Selected = Template.bind({});
Selected.args = {
  user: {},
};
