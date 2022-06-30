import styles from './styles.scss?inline';

const template = document.createElement('template');
template.innerHTML = `
  <style>${styles}</style>
  <slot name="content"></slot>
  <button><slot></button>`;

class Button extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.shadowRoot.appendChild(template.content.cloneNode(true));
    this.shadowRoot.querySelector('button').addEventListener('click', () => {
      const event = new Event('clicked');
      this.dispatchEvent(event);
    });
  }
}

customElements.define('ds-button', Button);
