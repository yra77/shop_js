class Footer extends HTMLElement {
    constructor() {
        super();

        this.setAttribute("class", "footer");
        const root = this.attachShadow({ mode: "open" });

        const span = document.createElement("span");
        span.textContent = 'All right reserved 2023';
        span.style.color = 'gray';

        root.appendChild(span);
    }
}

customElements.define("footer-component", Footer);