import type { Meta, StoryObj } from '@storybook/react';
import Header from '../components/HeroImage';

const meta: Meta<typeof Header> = {
    component: Header,
    title: 'Hero image',
}

export default meta; 

type Story = StoryObj<typeof meta>;

export const Base: Story = {
    args: {
        
    }
}


