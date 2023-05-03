// Инициализируем карту
var mymap = L.map("map").setView([56.8469, 60.6071], 12);

// Добавляем слой OpenStreetMap
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution:
    'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors',
  maxZoom: 19,
}).addTo(mymap);

// Добавляем маркер
var arrows = L.marker([56.840310, 60.614087]).addTo(mymap);

// Добавляем всплывающее окно к маркеру
arrows.bindPopup("<b>Стрелы</b><br><img src='./img/arrows.png' style='height:300px;width:300px;'>").bindTooltip("Стрелы").openTooltip();

L.control.locate({
  position: "topleft",
  drawCircle: false,
  follow: true,
  setView: true
}).addTo(mymap);
