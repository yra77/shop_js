

class Card extends HTMLElement{


    connectedCallback() {
        
        this.innerHTML = `<div class="card" style="width:18em">
        <img src=${this.getAttribute('img')} class="card-img-top" alt="products">
        <div class="card-body">
          <h5 class="card-title">Card title</h5>
          <p class="card-text">Some quick example text.</p>
          <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
      </div>`;
    }

}

customElements.define('card-component', Card);