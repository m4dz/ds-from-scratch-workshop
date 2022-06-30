import '..';

export const toggleDefault = () => `<ds-toggle name="bool"></ds-toggle>`;

export const toggleList = () =>
  `<ds-toggle name="list">
    <li value="1">Choice 1</li>
    <li value="2" default>Choice 2</li>
    <li value="3">Choice 3</li>
  </ds-toggle>`;
