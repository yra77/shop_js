

const products = [
    {id:0, brand:'nike', gender:'m',name:'air', isBestSeller:true, isNew:false, size:['41', '43', '44'], color:['red', 'white'], price:205, count:5, description:'Some quick example text to build on the card title and make up the bulk of the cards content.', img:['https://purposechurch.com/wp-content/uploads/2017/10/fpo400x300.png', 'https://purposechurch.com/wp-content/uploads/2017/10/fpo400x300.png']},
    {id:1, brand:'adidas', gender:'w', name:'adidas', isBestSeller:true, isNew:true, size:['37', '38', '39'], color:['black', 'white', 'gray'], price:185, count:2, description:'Some quick example text to build on the card title and make up the bulk of the cards content.', img:['https://purposechurch.com/wp-content/uploads/2017/10/fpo400x300.png', 'https://purposechurch.com/wp-content/uploads/2017/10/fpo400x300.png']},
    {id:2, brand:'nb', gender:'u',name:'nb707', isBestSeller:false, isNew:false, size:['39', '41', '43'], color:['white'], price:105, count:7, description:'Some quick example text to build on the card title ', img:['https://purposechurch.com/wp-content/uploads/2017/10/fpo400x300.png', 'https://purposechurch.com/wp-content/uploads/2017/10/fpo400x300.png']},
    {id:3, brand:'nike', gender:'w',name:'nike1', isBestSeller:true, isNew:false, size:['41', '42', '44'], color:['green', 'white'], price:215, count:10, description:'Some quick example text to build on the card title and make up the bulk of the card', img:['https://purposechurch.com/wp-content/uploads/2017/10/fpo400x300.png', 'https://purposechurch.com/wp-content/uploads/2017/10/fpo400x300.png']},
    {id:4, brand:'adidas', gender:'m',name:'bidas', isBestSeller:false, isNew:true, size:['41', '42'], color:['green', 'white'], price:235, count:5, description:'Some quick example text to build', img:['https://purposechurch.com/wp-content/uploads/2017/10/fpo400x300.png', 'https://purposechurch.com/wp-content/uploads/2017/10/fpo400x300.png']},
    {id:5, brand:'puma', gender:'u',name:'928pums', isBestSeller:true, isNew:false, size:['37', '38', '39', '41', '43'], count:3, price:165, color:['red', 'gray','green', 'white'], description:'Some quick example text to build on the card title and make up the bulk of the card', img:['https://purposechurch.com/wp-content/uploads/2017/10/fpo400x300.png', 'https://purposechurch.com/wp-content/uploads/2017/10/fpo400x300.png']},
    {id:6, brand:'puma', gender:'m',name:'puma787', isBestSeller:true, isNew:true, size:['40', '41', '42'], color:['black', 'white'], count:8, price:100, description:'Some quick example text to build on the card title and make up the bulk of the card', img:['https://purposechurch.com/wp-content/uploads/2017/10/fpo400x300.png', 'https://purposechurch.com/wp-content/uploads/2017/10/fpo400x300.png']}
];



const Home = (root) => {
    

    root.innerHTML = ` <header-component></header-component>
    <underheader-component></underheader-component>
    <div class="container home">

    <div class="container mt-3 mb-3 homeCarousel">
    <h3 class="fw-bold text-black text-start" >New Collection</h3>
    <carousel-component></carousel-component>
    </div>
    
    <div class="container bestShoes overflow-hidden">

    <h3 class="fw-bold text-black text-start" >Best shoes</h3>

    <div class="row">

    ${products.map(item =>
        `<div class="col mb-5">
      <card-component img=${item.img[0]}></card-component>
      </div>`
      ).join("\n")}
    </div>
</div>
    
    </div>
    </div>
    
    </div>
        <footer-component></footer-component>`;
}

export default Home;