import './app.element.scss';

export class AppElement extends HTMLElement {
  public static observedAttributes = [];

  connectedCallback() {
    this.style.display = 'block';
    this.style.width = '100vw';
    this.style.height = '100vh';
  }
}

customElements.define('app-node', AppElement);
