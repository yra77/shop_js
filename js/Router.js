

import Home from "../pages/Home.js";


let root = document.getElementById('root');


const About = () => {
    root.innerHTML = ` <header-component></header-component>
<div class="text-center">About</div>
    <footer-component></footer-component>`; 
}

function Router(evt) {
    let url = window.location.hash.slice(1) || '/';
   
    if (url === '/about') {
        About(root);
    }
    else {
        Home(root);
    }
};

window.addEventListener('load', Router);
window.addEventListener('hashchange', Router);
