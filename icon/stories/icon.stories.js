import '..';

export default {
  argTypes: {
    name: {
      control: { type: 'text' },
    },
    size: {
      control: { type: 'range', min: 1, max: 15 },
    },
    color: {
      control: { type: 'select' },
      options: ['orange', 'grape'],
    },
    colorShade: {
      control: { type: 'range', min: 1, max: 9 },
      defaultValue: 5,
    },
  },
  render: ({ name, size, color, colorShade }) => {
    let s = '';
    if (size) {
      s = `--icon-size: var(--size-${size});`;
    }

    let c = '';
    if (color) {
      c = `--icon-color: var(--${color}-${colorShade});`;
    }

    return `<ds-icon icn="${name}" style="${s}${c}">${name}</ds-icon>`;
  },
};

export const icon_bulb = {
  args: {
    name: 'lightbulb',
  },
};

export const icon_colored = {
  args: {
    name: 'add_location_alt',
    color: 'grape',
    colorShade: 8,
  },
};

export const icon_large = {
  args: {
    name: 'cookie',
    size: 12,
  },
};
