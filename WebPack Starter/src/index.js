import sayHI from "./api";
import "./styles/style.css";
import laughing from "./assets/laughing.svg";
console.log(sayHI());

const img = document.getElementById("img");
img.src = laughing;

const elm = document.querySelector("h1");
elm.textContent = "Webpack Starter file";
console.log(elm);
