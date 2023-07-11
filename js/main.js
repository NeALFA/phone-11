const fullTime = document.querySelector(".full-time");
const wifi = document.querySelector(".wifi");
const minut = document.querySelector(".minut");
const secund = document.querySelector(".secund");

setInterval(() => {
  let date = new Date();
  let time = date.toLocaleTimeString("it-IT").toString();
  fullTime.textContent = time.slice(0, 5);
}, 1000);

function funcWifi() {
  if (navigator.onLine) {
    wifi.innerHTML = `<img src="./images/wifi.svg" alt="" />`;
  } else {
    wifi.innerHTML = `<img src="./images/wifi-off.svg" alt="" />`;
  }
}
setInterval(() => {
  funcWifi();
}, 1);

// secund.addEventListener("input", () => {});
;
setInterval(() => {
  console.log(secund.value);
  secund.value--;
  if (secund.value > 59 || secund.value < 0) {
    secund.value = 59;
  }
  if (secund.value < 0) {
    minut.value = minut.value - 1;
  }
}, 1000);
