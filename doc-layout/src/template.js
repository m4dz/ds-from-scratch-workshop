import { html } from 'lit';
import { unsafeHTML } from 'lit/directives/unsafe-html.js';

import '@divriots/dockit-core/style.css';
import '@divriots/dockit-core/layout/dockit-layout.define.js';
import '@divriots/dockit-core/css-showcases/dockit-css-showcases.define.js';

import appStyles from '../../styles.scss?inline';
import commonStyles from './styles.scss?inline';
import logoSvg from './react-finland.svg?raw';

import '../../switcher';

export const docLayoutTemplate = (content, context) => html`
  <style>
    ${unsafeHTML(appStyles)}
    ${unsafeHTML(commonStyles)}
  </style>
  <dockit-layout
    disable-color-scheme-change
    initial-color-scheme="light"
    .context="${context}"
  >
    <div class="logo" slot="logo" style="color: var(--brand, #000)">
      ${unsafeHTML(logoSvg)}
    </div>
    <div slot="topbar"><ds-switcher></ds-switcher></div>
    <div class="prose">${unsafeHTML(content)}</div>
  </dockit-layout>
`;
