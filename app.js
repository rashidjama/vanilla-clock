let clock = _ => {
  //state
  let currentHour = new Date().getHours();
  let currentMin = new Date().getMinutes();
  let currentSec = new Date().getSeconds();

  if (currentHour < 10) {
    currentHour = "0" + currentHour;
  }
  if (currentMin < 10) {
    currentMin = "0" + currentMin
  }
  if (currentSec < 10) {
    currentSec = "0" + currentSec;
  }

  //cache the dom
  let hourEl = document.querySelector(".hour").innerHTML = currentHour + " :";
  let minEl = document.querySelector(".min").innerHTML = currentMin + " :";
  let secEl = document.querySelector(".sec").innerHTML = currentSec;
}

setInterval(clock, 1000);