import type { Meta, StoryObj } from '@storybook/react';

import { vars } from '@styles';

import { Button } from '.';

const meta: Meta<typeof Button> = {
  title: 'Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['input'],
  args: {
    onClick: () => console.log('Button clicked'),
    children: 'Continuar',
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  args: {
    children: 'Continuar',
    style: {
      color: vars.colors['--primary-white'],
      backgroundColor: vars.colors['--primary-blue'],
    },
  },
};

export const Secondary: Story = {
  args: {
    children: 'Voltar',
    style: {
      border: `1px solid ${vars.colors['--primary-blue']}`,
      color: vars.colors['--primary-blue'],
      backgroundColor: vars.colors['--primary-white'],
    },
  },
};

export const Tertiary: Story = {
  args: {
    children: 'Cancelar',
    style: {
      color: vars.colors['--primary-white'],
      backgroundColor: vars.colors['--primary-red'],
    },
  },
};
