import type { Meta, StoryObj } from '@storybook/react';
import MyLink from '../components/InternalLinks';

const meta: Meta<typeof MyLink> = {
    component: MyLink,
    title: 'Internal links',
}

export default meta; 

type Story = StoryObj<typeof meta>;

export const Base: Story = {
    args: {
        label: 'About'
    }
}


