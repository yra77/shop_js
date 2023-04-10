

class UnderHeader extends HTMLElement{

    connectedCallback() {
        
        this.innerHTML = `<div class="text-center mt-2 mb-4">
        <img class="border border-info rounded-pill" src="images/ic_nike.png" width="60" height="40" alt=""/>
        <img class="border border-info rounded-pill" src="images/ic_adidas.png" width="60" height="40" alt=""/>
        <img class="border border-info rounded-pill" src="images/ic_nb.png" width="60" height="40" alt=""/>
        <img class="border border-info rounded-pill" src="images/ic_puma.png" width="60" height="40" alt=""/>
        </div>`;
    }
}

customElements.define('underheader-component', UnderHeader);