

class Header extends HTMLElement {

  connectedCallback() {
    this.setAttribute('class', 'header');
    // const div = document.createElement("div");
    // div.setAttribute('class', 'bg-info text-danger');
    // div.innerText = 'SSSSSSSSSSS';
    // this.appendChild(div); 

    //this.innerHTML = `<div class='mt-3 text-info text-center'>${this.getAttribute('text')}</div>`;
    this.innerHTML = `
        <div class="d-flex w-100">
       
                          <a class="logo" href="#"><img src="images/logo.png"/></a>

                   <div class="burgericon" onClick="ClickBurger()">
                       <span class="bar"></span>
                       <span class="bar"></span>
                       <span class="bar"></span>                            
                   </div> 

                   <div class='headermenu'>
                   <div class="menu_burger">
                              <a href="/#/home">Home</a>
                              <a href="/#/products">Products</a>
                              <a href="/#/cart">Cart</a>
                              <a href="/#/about">About</a>
                              <a class="login" href="/#/login">LogIn</a> 
                          </div>
                      
                          <div class="heder_search_filter">
                        
                          <img class="btnFilter" 
                               src="images/filter.png" 
                               alt="filters" 
                               onClick="ClickModal_Filter()"/>

                          <input type="text"
                                 name="search"
                                 placeholder="search"
                                 class="searchInp border-info bg-transparent shadow-none"
                                 onClick="OnFocusInp_Search()"/>

                          <button type="button" 
                                  class="btn btn-sm btn-outline-info shadow-none mb-1">
                                  Search
                          </button>

                          </div>
                          </div>
                          </div>
                         
                          <modal-component
                                   callback=${CallbackFromModals} 
                                   children="<filter-component></filter-component>">
                          </modal-component>`;
                          
  }
}

let data = {};

function CallbackFromModals() {
  console.log(data);
}

function ClickModal_Filter() {
  const dialog = document.getElementById('favDialog');
  dialog.showModal();
  
  data = {};
  const filter = document.getElementById('filters');
  filter.addEventListener("data-from-filter", (e) => data = e.detail);
}

function OnFocusInp_Search() {
  var inp = document.querySelector("input");
    let nameReg = new RegExp("[sa-zA-Z0-9]");

    inp.addEventListener("input", (e) => {
      if (!nameReg.test(e.data)) {
        inp.value = inp.value.replace(e.data, '');
      }
    });
}

function ClickBurger() {

  const hamburger = document.querySelector(".burgericon");
  const navMenu = document.querySelector(".headermenu");
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
}


customElements.define('header-component', Header);