import '../../button';

import styles from './styles.scss?inline';

const template = document.createElement('template');
template.innerHTML = `
  <style>${styles}</style>
  <ds-button overlayed>
    <div slot="content"><slot></div>
  </ds-button>`;

class Toggle extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.shadowRoot.appendChild(template.content.cloneNode(true));
    this.initState();
    this.initEvents();
    this.update();
  }

  initState() {
    const slot = this.shadowRoot.querySelector('slot');
    let nodes = slot.assignedElements();

    if (!nodes.length) {
      nodes = [false, true].map((value) => {
        let node = document.createElement('li');
        node.setAttribute('value', value);
        this.appendChild(node);
        slot.assign(node);
        return node;
      });
    }

    this.style = `--n:${nodes.length}`;

    this.checked = 0;
    nodes.forEach((node, idx) => {
      let input = document.createElement('input');
      input.style = 'display: none';
      input.setAttribute('type', 'radio');
      input.setAttribute('name', this.getAttribute('name'));
      input.setAttribute('value', node.getAttribute('value'));
      if (node.hasAttribute('default')) {
        this.checked = idx;
      }
      node.appendChild(input);
    });
  }

  initEvents() {
    this.shadowRoot
      .querySelector('ds-button')
      .addEventListener('clicked', () => {
        if (
          this.shadowRoot.querySelector('slot').assignedElements().length - 1 ==
          this.checked
        ) {
          this.checked = 0;
        } else {
          this.checked++;
        }
        this.update();
      });
  }

  update() {
    const nodes = this.shadowRoot.querySelector('slot').assignedElements();
    nodes.forEach((node, idx) => {
      node.querySelector('input').checked = idx == this.checked;
      node.classList.toggle('checked', idx == this.checked);
    });
    const event = new CustomEvent('changed', {
      detail: nodes[this.checked].querySelector('input').value,
    });
    this.dispatchEvent(event);
  }
}

customElements.define('ds-toggle', Toggle);
