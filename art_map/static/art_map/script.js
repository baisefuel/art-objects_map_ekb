// Инициализируем карту
var mymap = L.map("map").setView([56.8469, 60.6071], 12);

// Добавляем слой OpenStreetMap
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution:
    'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors',
  maxZoom: 19,
}).addTo(mymap);

// Добавляем маркер
var marker = L.marker([56.8469, 60.6071]).addTo(mymap);

// Добавляем всплывающее окно к маркеру
marker.bindPopup("<b>НАЙДИ ГДЕ Я БЛЯТЬ</b><br><img src='./img/1.jpg' style='height:300px;weight:300px;'>");

L.control.locate({
  position: "topleft",
  drawCircle: false,
  follow: true,
  setView: true
}).addTo(mymap);
