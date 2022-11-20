import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Modal } from './Modal';

export default {
  title: 'shared/Modal',
  component: Modal,
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = (args) => <Modal {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  isOpen: true,
  children:
    'Modal long text Modal long text Modal long text Modal long text Modal long text Modal long text',
};
