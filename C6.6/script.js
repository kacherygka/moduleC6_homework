const wsUri = "wss://echo.websocket.org/";

const outputServer = document.getElementById("outputServer");
const outputClient = document.getElementById("outputClient");
const btnSend = document.querySelector('.btn-send');
const btnGeo = document.querySelector('.btn-geo');

let websocket;

function writeToScreen(message) {
  let pre = document.createElement("p");
  pre.style.wordWrap = "break-word";
  pre.innerHTML = message;
  pre.className = 'client-msg'
  outputClient.appendChild(pre);
};

function writeToScreenServer(message) {
  let pre = document.createElement("p");
  pre.style.wordWrap = "break-word";
  pre.innerHTML = message;
  pre.className = 'server-msg'
  outputServer.appendChild(pre);
};

btnSend.addEventListener('click', () => {
  let message = document.querySelector('input').value;
  websocket = new WebSocket(wsUri);
  websocket.onopen = function(evt) {
    writeToScreen(message);
    websocket.send(message)
  };
  websocket.onmessage = function(evt) {
    writeToScreenServer(message);
  };
}); 

function writeToScreenGeo(link) {
  let pre = document.createElement("p");
  pre.style.wordWrap = "break-word";
  pre.innerHTML = link;
  pre.className = 'client-msg'
  outputClient.appendChild(pre);
};

btnGeo.addEventListener('click', () => {
  if ("geolocation" in navigator) {
    navigator.geolocation.getCurrentPosition((position) => {
      const { coords } = position;
      const link = `https://www.openstreetmap.org/#map=12/${coords.latitude}/${coords.longitude}`;
      writeToScreenGeo(link);
    });
  } else {
    console.log('местоположение недоступно')
  };
});