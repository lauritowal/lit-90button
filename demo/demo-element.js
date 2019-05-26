import { LitElement, html } from 'lit-element';
import '../lit-90button';

class DemoElement extends LitElement {
  render() {
    return html`
      <lit-90button>Click me!</lit-90button>
    `;
  }
}
customElements.define('demo-element', DemoElement);
