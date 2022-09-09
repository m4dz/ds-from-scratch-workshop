import '..';

export default {
  argTypes: {
    type: {
      control: { type: 'select' },
      options: ['bool', 'list'],
    },
  },
  render: ({ type }) => {
    let c = '';
    if (type === 'list') {
      c = `
      <li value="1">Choice 1</li>
      <li value="2" default>Choice 2</li>
      <li value="3">Choice 3</li>
      `;
    }

    return `<ds-toggle name="${type}">${c}</ds-toggle>`;
  },
};

export const toggle_default = {
  args: {
    type: 'bool',
  },
};
export const toggle_list = {
  args: {
    type: 'list',
  },
};
