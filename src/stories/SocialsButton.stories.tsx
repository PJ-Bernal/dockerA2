import type { Meta, StoryObj } from '@storybook/react';
import SocialsButton from '../components/SocialsButton';

const meta: Meta<typeof SocialsButton> = {
    component: SocialsButton,
    title: 'Socials button',
}

export default meta; 

type Story = StoryObj<typeof meta>;

export const Base: Story = {
    args: {
        
    }
}


