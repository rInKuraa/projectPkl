const menu = document.querySelector("main.container-content header.first .wrapper-icon i");
const nav = document.querySelector("nav");
const link = document.querySelector("main ul li a");

menu.addEventListener("click", () => {
  nav.classList.toggle("close");
});

for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function () {
    var current = document.getElementsByClassName("aktif");
    current[0].className = current[0].className.replace(" aktif", "");
    this.className += " aktif";
  });
}
