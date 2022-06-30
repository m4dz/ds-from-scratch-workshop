import styles from './styles.scss?inline';

function iconify(strings, icn) {
  return `${strings[0]}https://api.iconify.design/ph:${icn}.svg${strings[1]}`;
}

const template = document.createElement('template');
template.innerHTML = `
  <style>${styles}</style>
  <i><span><slot></span></i>`;

class Icon extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.shadowRoot.appendChild(template.content.cloneNode(true));
    this.setIcon();
  }

  setIcon() {
    const icn = this.getAttribute('icn');
    this.shadowRoot
      .querySelector('i')
      .setAttribute('style', iconify`--icon: url(${icn})`);
  }
}

customElements.define('ds-icon', Icon);
