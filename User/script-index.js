// Choese image
let display = document.getElementById("display_image");
let display_h = document.getElementById("display_image_h");
let input = document.querySelector("#upload");
let submit = document.getElementsByClassName("submit");
let display_c = document.querySelector("#display_c");
let nav = document.querySelector("nav ul");

input.addEventListener("change", () => {
  let reader = new FileReader();
  reader.readAsDataURL(input.files[0]);
  reader.addEventListener("load", () => {
    display.innerHTML = `<img src=${reader.result} alt='' width="200px"" id="display_c"/>`;
  });
});

function changeImage() {
  let existingImg = document.getElementById("display_c");
  let new_display_c = document.getElementById("new_display_c");

  if (new_display_c) {
    new_display_c.parentNode.removeChild(new_display_c);
  }

  // Membuat elemen gambar baru
  let newImg = document.createElement("img");

  // Menyalin atribut dari elemen gambar yang sudah ada ke elemen gambar baru
  newImg.src = existingImg.src;
  newImg.alt = existingImg.alt;
  newImg.width = existingImg.width;
  newImg.id = "new_display_c"; // Atur ID baru untuk elemen gambar baru

  // Menambahkan elemen gambar baru ke dalam tampilan (misalnya, ke dalam sebuah div dengan ID "new_display")
  display_h.appendChild(newImg);
}
