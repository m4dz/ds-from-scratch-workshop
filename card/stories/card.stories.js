export default {
  argTypes: {
    level: {
      control: { type: 'select' },
      options: ['1', '2', '3', '4'],
    },
  },
  render: ({ level }) => {
    return `<div class="card${level}">${level}</div>`;
  },
};

export const card_1 = {
  args: {
    level: '1',
  },
};
export const card_2 = {
  args: {
    level: '2',
  },
};
export const card_3 = {
  args: {
    level: '3',
  },
};
export const card_4 = {
  args: {
    level: '4',
  },
};
