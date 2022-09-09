import '..';
import '../../icon';

export default {
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['primary', 'overlayed'],
    },
    icon: {
      control: { type: 'text' },
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

    if (icon) {
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
    icon: 'favorite',
  },
};

export const button_overlay = {
  args: {
    variant: 'overlayed',
  },
};
