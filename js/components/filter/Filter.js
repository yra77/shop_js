

class Filter extends HTMLElement {

    constructor() {    
        super();
        this.brands = JSON.parse(sessionStorage.getItem("brands"));
        this.sizes = JSON.parse(sessionStorage.getItem("sizes"));
        this.genders = JSON.parse(sessionStorage.getItem("genders"));
    }

    connectedCallback() {
        this.innerHTML = `<div class="row" id="filters">
                          <h4 class="text-center">Filter</h4>
                          
                          <small>Gender :</small>
                          <div class="col btn-group text-center" role="group" aria-label="genders checkbox">
                             ${this.genders.map((gender) =>
                                 `<button type="checkbox"
                                          name=${gender}
                                          onClick="GenderClick(event)"
                                          class="btn btn-outline-info shadow-none">
                                          ${gender}
                                  </button>`).join("\n")
                              }
                              </div>

                              <small>Brands :</small>
                          <div class="btn-group" role="group" aria-label="brands checkbox">
                             ${this.brands.map((brand) =>
                                 `<img class="brandBtn" 
                                       width="66" 
                                       height="40"
                                       name=${brand.name}
                                       alt=${brand.name}
                                       onClick="BrandClick(event, ${brand.name})"
                                       src="${brand.img}"/>`).join("\n")
                              }
                              </div>

                              <small>Sizes :</small>
                              <div class="filterSizeGroup" role="group" aria-label="size checkbox">
                                 ${this.sizes.map((size) =>
                                     `<button type="checkbox"
                                              onClick="SizeClick(event, ${size})"
                                              class="filterSizeBtn btn-rounded btn btn-outline-info shadow-none">
                                                ${size}
                                      </button>`).join("\n")
                                }
                                  </div>

                                  <small>Price :</small>
                              <div class="filterSlider">
                              <rangeslider-component onClick="ClickSliderRange()"></rangeslider-component>
                              </div>

                              </div>`;
      //  this.addEventListener("data-from-filter", (e) => console.log(e.detail));
        
    }
}

let genders = new Array();
let brands = new Array();
let sizes = new Array();
let price = { min: 0, max: 600 };


function GenderClick(event) {
    event.preventDefault();
    genders.push(event.srcElement.innerText);
    const filter = document.getElementById('filters');
    filter.dispatchEvent(FilterData);
    // console.log(event.srcElement.innerText);
}

function BrandClick(event, brand){
    event.preventDefault();
    brands.push(brand.name);
    const filter = document.getElementById('filters');
    filter.dispatchEvent(FilterData);
     //console.log(brand.name);
}

function SizeClick(event, size) {
    event.preventDefault();
   // console.log(event.srcElement.innerText);
   // console.log(size);
    sizes.push(size);
    const filter = document.getElementById('filters');
    filter.dispatchEvent(FilterData);
}

//create custom events
const FilterData = new CustomEvent("data-from-filter", {
    detail: {
        genders: genders,
        brands: brands,
        sizes: sizes,
        price:price
    },
  });

function ClickSliderRange() {
    const bar = document.getElementById('slider-bar');
    bar.addEventListener('range-change', (evt) => {
        // print values
       let temp = evt.detail.values;

        price.min = temp.minRange;
        price.max = temp.maxRange;

        const filter = document.getElementById('filters');
        filter.dispatchEvent(FilterData);
       // console.log(evt.detail.values)
    })
}

customElements.define('filter-component', Filter);