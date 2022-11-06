import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Button, ButtonSize, ButtonTheme } from './Button';

export default {
  title: 'shared/Button',
  component: Button,
  argTypes: {
    theme: {
      options: ['', ...Object.values(ButtonTheme)],
    },
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  children: 'Button',
};

export const Clear = Template.bind({});
Clear.args = {
  children: 'Button',
  theme: ButtonTheme.Clear,
};

export const Outline = Template.bind({});
Outline.args = {
  children: 'Button',
  theme: ButtonTheme.Outline,
};

export const Background = Template.bind({});
Background.args = {
  children: 'Button',
  theme: ButtonTheme.Background,
};

export const BackgroundInverted = Template.bind({});
BackgroundInverted.args = {
  children: 'Button',
  theme: ButtonTheme.BackgroundInverted,
};

export const BackgroundM = Template.bind({});
BackgroundM.args = {
  children: 'Button',
  theme: ButtonSize.M,
};

export const BackgroundL = Template.bind({});
BackgroundL.args = {
  children: 'Button',
  theme: ButtonSize.L,
};

export const BackgroundXl = Template.bind({});
BackgroundXl.args = {
  children: 'Button',
  theme: ButtonSize.Xl,
};
