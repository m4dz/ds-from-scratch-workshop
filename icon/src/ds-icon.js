import styles from './styles.scss?inline';

const template = document.createElement('template');
template.innerHTML = `
  <style>${styles}</style>
  <i>
    <span class="icn material-symbols-outlined"></span>
    <span class="caption"><slot></span>
  </i>`;

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
    this.shadowRoot.querySelector('.icn').textContent = icn;
  }
}

customElements.define('ds-icon', Icon);
