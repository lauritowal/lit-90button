import { LitElement, html } from 'lit-element';

class Lit90Button extends LitElement {
    render() {
        return html`
                <style>
                        :host {
                            display: block; 
                            cursor: pointer;
                            padding: 1em;
                            color: yellow;
                            font-weight: bold;  
                            border-bottom: solid 0.5em black;
                            border-right: solid 0.5em grey;
                            background: #5bdfc8;
                            font-size: 1.5em;
                            text-transform: uppercase;
                            text-align: center;

                            width: var(--button-width, 10em);
                        }
                        :host(:hover) {
                            color: magenta;
                        }
                        :host([disabled]) {
                            color: gray;
                            opacity: 0.7;
                            pointer-events: none;
                        }   
                </style>
                <slot></slot>
            `;
    }
}
customElements.define('lit-90button', Lit90Button);