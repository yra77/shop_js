

class Carousel extends HTMLElement {

    connectedCallback() {

        this.innerHTML = `<div class="slider">
    
          <div class="slide">
            <img
              src="https://source.unsplash.com/random?shoes,snickers"
              alt=""
            />
          </div>
          <div class="slide">
            <img src="https://source.unsplash.com/random?landscape,cars" alt="" />
          </div>
          <div class="slide">
            <img src="https://source.unsplash.com/random?landscape,night" alt="" />
          </div>
          <div class="slide">
            <img src="https://source.unsplash.com/random?landscape,city" alt="" />
          </div>
          <button class="btn btn-next">></button>
          <button class="btn btn-prev"><
        </div>`;

        SelectAllSlides();
    }
}

function SelectAllSlides() {
    //found all image(slads)
    const slides = document.querySelectorAll(".slide");

    slides.forEach((slide, indx) => {
        slide.style.transform = `translateX(${indx * 100}%)`;
    })

    // slide counter
    let curSlide = 0;
    // found next button
    const nextSlide = document.querySelector(".btn-next");
    const max = slides.length - 1;
    // add event listener and next slide functionality
    nextSlide.addEventListener("click", function () {

        curSlide++;
        slides.forEach((slide, indx) => {
            slide.style.transform = `translateX(${100 * (indx - curSlide)}%)`;
        });

        if (curSlide == max) {
            curSlide = -1;
        }
    });

   // found prev button
    const prevSlide = document.querySelector(".btn-prev");
    
    prevSlide.addEventListener("click", function () {
        // check if current slide is the first and reset current slide to last
        if (curSlide === 0) {
          curSlide = max;
        } else {
          curSlide--;
        }
      
        //   move slide by 100%
        slides.forEach((slide, indx) => {
          slide.style.transform = `translateX(${100 * (indx - curSlide)}%)`;
        });
      });

};


customElements.define("carousel-component", Carousel);