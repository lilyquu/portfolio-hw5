var count;

class MyButton extends HTMLElement {
    constructor() {
        super();

        let count = 0;
        const shadowRoot = this.attachShadow({ mode: 'open'});

        const template = document.createElement('template');
        template.innerHTML = `
          <style>
            button{
                margin-top: 13vh;
            }
          </style>
          <button><slot></slot></button>
        `;

        shadowRoot.addEventListener('click', () => {
            count ++;
            console.log(count);
            shadowRoot.querySelector('button').innerHTML = "Times Clicked:" + count;
        })

        shadowRoot.appendChild(template.content.cloneNode(true));

    }
}

customElements.define('my-button', MyButton);
