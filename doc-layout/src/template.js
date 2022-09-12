import { html } from 'lit';
import { unsafeHTML } from 'lit/directives/unsafe-html.js';

import '@divriots/dockit-core/style.css';
import '@divriots/dockit-core/layout/dockit-layout.define.js';
import '@divriots/dockit-core/css-showcases/dockit-css-showcases.define.js';

import appStyles from '../../styles.scss?inline';
import commonStyles from './styles.scss?inline';
import logoSvg from './react-finland.svg?raw';

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
    <div class="logo" slot="logo">${unsafeHTML(logoSvg)}</div>
    <div class="prose">${unsafeHTML(content)}</div>
  </dockit-layout>
`;
