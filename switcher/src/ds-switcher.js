import '../../toggle';
import '../../icon';

import styles from './styles.scss?inline';

const template = document.createElement('template');
template.innerHTML = `
  <style>${styles}</style>
  <ds-toggle name="theme">
    <li value="light"><ds-icon icn="sun" /></li>
    <li value="dark"><ds-icon icn="moon-fill" /></li>
    <li value="dim"><ds-icon icn="drop" /></li>
    <li value="grape"><ds-icon icn="paint-roller" /></li>
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
