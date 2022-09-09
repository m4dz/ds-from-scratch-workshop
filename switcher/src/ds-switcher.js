import '../../toggle';
import '../../icon';

import styles from './styles.scss?inline';

const template = document.createElement('template');
template.innerHTML = `
  <style>${styles}</style>
  <ds-toggle name="theme">
    <li value="light"><ds-icon icn="light_mode" /></li>
    <li value="dark"><ds-icon icn="dark_mode" /></li>
    <li value="dim"><ds-icon icn="water_drop" /></li>
    <li value="grape"><ds-icon icn="format_paint" /></li>
  </ds-toggle>`;

class Switcher extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.shadowRoot.appendChild(template.content.cloneNode(true));
    this.initEvents();
    this.update('light');
  }

  initEvents() {
    this.shadowRoot
      .querySelector('ds-toggle')
      .addEventListener('changed', ({ detail }) => {
        this.update(detail);
      });
  }

  update(theme) {
    document.documentElement.setAttribute('color-scheme', theme);
  }
}

customElements.define('ds-switcher', Switcher);
