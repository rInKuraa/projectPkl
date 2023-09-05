// Tanggal
let dateToday = document.getElementById("date-today");

let today = new Date();
let day = `${today.getDate() < 10 ? "0" : ""}${today.getDate()}`;

let month = `${today.getMonth + 1 < 10 ? "0" : ""} ${today.getMonth() + 1}`;
let year = today.getFullYear();

dateToday.textContent = `${day}/${month}/${year}`;

// Waktu
let time = document.getElementById("current-time");

setInterval(() => {
  let d = new Date();
  time.innerHTML = d.toLocaleTimeString();
}, 1000);

// Choese image
let display = document.getElementById("display_image");
const input = document.querySelector("#upload");
const WIDTH = 200;

// input.addEventListener("change", (event) => {
//   let image_file = event.target.files[0];
//   let reader = new FileReader();
//   reader.readAsDataURL(image_file);

//   reader.onload = (event) => {
//     let image_url = event.target.result;
//     let image = document.createElement("img");
//     image.src = image_url;

//     image.onload = (e) => {
//       let canvas = document.createElement("canvas");
//       let ratio = WIDTH / e.target.width;
//       canvas.width = WIDTH;
//       canvas.height = e.target.height * ratio;

//       const context = canvas.getContext("2d");
//       context.drawImage(image, 0, 0, canvas.width, canvas.height);

//       let new_image_url = context.canvas.toDataURL("image/jpeg, image/jpg, image/png", 90);

//       let new_image = document.createElement("img");
//       new_image.src = new_image_url;
//       document.getElementById("display_image").appendChild(image);
//     };
//   };
// });

input.addEventListener("change", () => {
  let reader = new FileReader();
  reader.readAsDataURL(input.files[0]);
  reader.addEventListener("load", () => {
    display.innerHTML = `<img src=${reader.result} alt='' width="200px""/>`;
  });
});

// Maps
let locationButton = document.getElementById("get-location");
let locationDiv = document.getElementById("location-details");

locationButton.addEventListener("click", () => {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showLocation, checkError);
  } else {
    locationDiv.innerText = "The browser does not support geolocation";
  }
});

const checkError = (error) => {
  switch (error.code) {
    case error.PERMISSION_DENIED:
      locationDiv.innerText = "Please allow access to location";
      break;
    case error.POSITION_UNAVAILABLE:
      locationDiv.innerText = "Location Information unavailable";
      break;
    case error.TIMEOUT:
      locationDiv.innerText = "The request to get user location timed out";
  }
};

const showLocation = async (position) => {
  let response = await fetch(`https://nominatim.openstreetmap.org/reverse?lat=${position.coords.latitude}&lon=${position.coords.longitude}&format=json`);
  let data = await response.json();
  locationDiv.innerText = `${data.address.city}, ${data.address.country}`;
};
