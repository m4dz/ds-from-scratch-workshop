import '..';
import '../../icon';

export const buttonDefault = () =>
  `<ds-button>Here's a default button</ds-button>`;

export const buttonPrimary = () =>
  `<ds-button primary>This is a primary button</ds-button>`;

export const buttonIcon = () =>
  `<ds-button primary><ds-icon icn="heart-fill"></ds-icon>This is a primary button</ds-button>`;

export const buttonOverlay = () =>
  `<ds-button overlayed>
    <span slot="content">Here's the overlayed content</span>
  </ds-button>`;
