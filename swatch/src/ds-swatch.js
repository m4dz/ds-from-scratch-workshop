import styles from './styles.scss?inline';

const template = document.createElement('template');
template.innerHTML = `
  <style>${styles}</style>
  <main>
    <section>
      <div class="surface-samples">
        <div class="surface1">1</div>
        <div class="surface2">2</div>
        <div class="surface3">3</div>
        <div class="surface4">4</div>
      </div>
    </section>

    <section>
      <div class="text-samples">
        <h1>
          <span class="dot brand"></span>
          Brand
        </h1>
        <h1>
          <span class="dot text1"></span>
          Text Color 1
        </h1>
        <h1>
          <span class="dot text2"></span>
          Text Color 2
        </h1>
      </div>
    </section>
  </main>`;

class Swatch extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.shadowRoot.appendChild(template.content.cloneNode(true));
  }
}

customElements.define('ds-swatch', Swatch);
