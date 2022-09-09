import '..';
import '../../icon';

export default {
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['default', 'primary', 'icon', 'overlayed'],
    },
    icon: {
      control: { type: 'text' },
      defaultValue: 'favorite',
    },
  },
  render: ({ variant, icon }) => {
    let attrs = `${variant}`;

    if (!variant) {
      variant = `default`;
    }
    let l = `This is a ${variant} button`;

    if (variant == 'overlayed') {
      l = `<span slot="content">${l}</span>`;
    }

    if (variant == 'icon') {
      l = `<ds-icon icn="${icon}"></ds-icon> ${l} with icon`;
    }

    return `<ds-button ${attrs}>${l}</ds-button>`;
  },
};

export const button_default = {};

export const button_primary = {
  args: {
    variant: 'primary',
  },
};

export const button_icon = {
  args: {
    variant: 'icon',
  },
};

export const button_overlay = {
  args: {
    variant: 'overlayed',
  },
};
