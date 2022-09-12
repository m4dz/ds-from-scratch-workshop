export default {
  argTypes: {
    weight: {
      control: { type: 'select' },
      options: ['normal', 'strong'],
    },
    type: {
      control: { type: 'select' },
      options: ['paragraph', 'list', 'numeral'],
    },
  },
  render: ({ type, weight }) => {
    let tag = 'p';
    if (type === 'list') {
      tag = 'ul';
    }
    if (type === 'numeral') {
      tag = 'ol';
    }

    let content = `Cupcake ipsum dolor sit amet soufflé chocolate bar. Macaroon soufflé cookie sesame snaps sugar plum. Toffee ice cream candy canes toffee soufflé carrot cake. Jelly-o shortbread halvah soufflé fruitcake. Donut wafer pastry toffee brownie sweet jujubes tiramisu macaroon. Bonbon gummi bears lollipop tiramisu marshmallow cheesecake. Sweet roll lemon drops pudding croissant cheesecake toffee liquorice bonbon sweet roll. Bear claw lemon drops icing pie marshmallow brownie tart lemon drops chocolate bar.`;
    if (['list', 'numeral'].includes(type))
      content = `<li>Sweet candy tart cotton candy jelly beans. Carrot cake lemon drops cheesecake marzipan candy. Pudding halvah wafer powder icing marzipan toffee. Fruitcake fruitcake carrot cake gingerbread dessert soufflé gingerbread icing icing.</li>
        <li>Powder sesame snaps candy pastry shortbread marshmallow bonbon soufflé. Lollipop liquorice apple pie cupcake cotton candy sweet roll jujubes candy. Icing sugar plum gummies pudding gummi bears. Tart chocolate shortbread lemon drops icing cupcake cake jelly beans liquorice.</li>
        <li>Marshmallow wafer fruitcake tootsie roll soufflé chocolate cake muffin. Wafer lollipop sugar plum pudding cotton candy macaroon danish gummi bears. Chocolate bar cake toffee oat cake jujubes carrot cake marshmallow. Muffin candy candy canes chocolate jujubes oat cake.</li>
        <li>Dragée bear claw cake macaroon icing. Cookie chocolate toffee oat cake muffin jelly beans marshmallow icing. Danish lemon drops marshmallow wafer candy canes topping sesame snaps.</li>
        <li>Jelly-o danish candy sugar plum gingerbread jelly-o. Topping toffee toffee marzipan candy. Gummies tart marshmallow carrot cake topping liquorice. Croissant toffee bear claw liquorice cotton candy powder pastry icing biscuit.</li>
      `;

    if (weight === 'strong') {
      content = `<strong>${content}</strong>`;
    }

    return `<${tag}>${content}</${tag}>`;
  },
};

export const default_text = {};

export const strong_text = {
  args: {
    weight: 'strong',
  },
};

export const default_list = {
  args: {
    type: 'list',
  },
};

export const default_numeral = {
  args: {
    type: 'numeral',
  },
};
