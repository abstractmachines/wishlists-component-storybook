import React from 'react';

import { Button } from './Button';

export default {
  title: 'Example/Button',
  component: Button,
  /**
   * argTypes are for props, as well as controlling the "knobs" in the 
   * React storybook (and other things too). (You can still set props for
   * each component instance/variation e.g. backgroundColor: 'red')
   */
  argTypes: {
    backgroundColor: { control: 'color' },
    onClick: { action: 'clicked' }
  },
  /**
   * use parameters.actions.handles to verify whether particular DOM events
   * have occurred. What this does is binds an event handler, and triggers an 
   * action whenever that event happens on a given selector.
   * https://storybook.js.org/docs/react/essentials/actions
   */
  parameters: {
    actions: {
      handles: ['click .storybook-button']
    },
  },
};

const Template = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  label: 'Button',
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: 'Button',
};

export const Large = Template.bind({});
Large.args = {
  size: 'large',
  label: 'Button',
  buttonPress: (e) => { return 'pressed' }
};

export const Small = Template.bind({});
Small.args = {
  size: 'small',
  label: 'Button',
  backgroundColor: 'red'
};
