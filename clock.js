const clockTitle = document.querySelector(".status-bar__clock");

function getTime() {
  const date = new Date();
  const hours = date.getHours();
  const minutes = date.getMinutes();
<<<<<<< HEAD
  clockTitle.innerHTML = `${hours < 10 ? `0${hours}` : hours}:${minutes}`;
=======
  clockTitle.innerHTML = `${hours < 10 ? `0${hours}` : hours}:${
    minutes < 10 ? `0${minutes}` : minutes
  }`;
>>>>>>> master
}

function init() {
  getTime();
  setInterval(getTime, 1000);
}
init();
