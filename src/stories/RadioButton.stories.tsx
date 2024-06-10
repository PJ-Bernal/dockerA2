import type { Meta, StoryObj } from '@storybook/react';
import CheckBox from '../components/RadioButton';

const meta: Meta<typeof CheckBox> = {
    component: CheckBox,
    title: 'Checkbox',
}

export default meta; 

type Story = StoryObj<typeof meta>;

export const Base: Story = {
    args: {
        
    }
}


