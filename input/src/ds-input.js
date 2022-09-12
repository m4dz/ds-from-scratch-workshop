import styles from './styles.scss?inline';

import '../../button';
import '../../icon';

const template = document.createElement('template');
template.innerHTML = `
  <style>${styles}</style>
  <div class="wrapper">
    <input type="text"></input>
  </div>`;

class Input extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.shadowRoot.appendChild(template.content.cloneNode(true));
    this.setProps();
    this.shadowRoot.addEventListener('click', () => {
      const event = new Event('clicked');
      this.dispatchEvent(event);
    });
    this.shadowRoot.addEventListener('keydown', () => {
      const event = new Event('keyed');
      this.dispatchEvent(event);
    });
  }

  setProps() {
    this._input = this.shadowRoot.querySelector('input');
    this._wrapper = this._input.parentNode;
    this.setType();
    this.setIcon();
    this.setButton();
    this.setPlaceholder();
  }

  setType() {
    const type = this.getAttribute('type');
    if (!type) return;
    this._input.type = type;
  }

  setIcon() {
    const icn = this.getAttribute('icn');
    if (!icn) return;
    const _icn = document.createElement('ds-icon');
    _icn.setAttribute('icn', icn);
    this._wrapper.insertBefore(_icn, this._input);
  }

  setButton() {
    const btn = this.getAttribute('btn');
    if (!btn) return;
    const _btn = document.createElement('ds-button');
    _btn.textContent = btn;
    this._wrapper.appendChild(_btn);
  }

  setPlaceholder() {
    const placeholder = this.getAttribute('placeholder');
    if (!placeholder) return;
    this._input.setAttribute('placeholder', placeholder);
  }
}

customElements.define('ds-input', Input);
