import '@lion/ui/define/lion-button.js';
import { LitElement, html } from 'lit';

class MyLionApp extends LitElement {
  render() {
    return html`
      <lion-button>button</lion-button>
    `;
  }
}
customElements.define('my-lion-app', MyLionApp);
