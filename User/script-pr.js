const menu = document.querySelector("main.container-content header.first .wrapper-icon i");
const nav = document.querySelector("nav");


menu.addEventListener("click", () =>{
  nav.classList.toggle("close")
})