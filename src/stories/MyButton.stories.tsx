import type { Meta, StoryObj } from '@storybook/react';
import MyButton from '../components/MyButton';

const meta: Meta<typeof MyButton> = {
    component: MyButton,
    title: 'Get in touch button',
}

export default meta; 

type Story = StoryObj<typeof meta>;

export const Base: Story = {
    args: {
        
    }
}


