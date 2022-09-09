import '..';

export default {
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['default', 'icon', 'submit', 'password'],
    },
    password: {
      control: { type: 'boolean' },
    },
    icon: {
      control: { type: 'text' },
      defaultValue: 'search',
    },
    submitText: {
      control: { type: 'text' },
      defaultValue: 'submit',
    },
    placeholder: {
      control: { type: 'text' },
      defaultValue: 'Input your content here…',
    },
  },
  render: ({ variant, password, icon, submitText, placeholder }) => {
    let attrs = {};

    if (variant == 'icon') {
      attrs.icn = icon;
    }

    if (variant == 'submit') {
      attrs.btn = submitText;
      attrs.icn = icon;
    }

    if (variant == 'password' || password) {
      attrs.type = 'password';
    }

    if (variant == 'password') {
      attrs.icn = 'lock';
    }

    let _attrs = `placeholder="${placeholder}"`;
    for (const a in attrs) {
      _attrs = `${a}="${attrs[a]}" ${_attrs}`;
    }
    return `<ds-input ${_attrs}></ds-input>`;
  },
};

export const input_default = {};

export const input_icon = {
  args: {
    variant: 'icon',
  },
};

export const input_submit = {
  args: {
    variant: 'submit',
  },
};

export const input_password = {
  args: {
    variant: 'password',
  },
};
