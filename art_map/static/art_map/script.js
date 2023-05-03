var mymap = L.map("map").setView([56.8469, 60.6071], 12);

L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution:
    'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors',
  maxZoom: 19,
}).addTo(mymap);

var arrows = L.marker([56.840310, 60.614087]).addTo(mymap);
var balet = L.marker([56.83163, 60.63184]).addTo(mymap);
balet.bindPopup("<b>Лебединое озеро</b><p><img src='./balet.jpg' style='height:200px;weight:200px;'><p><br /> На стене одного из технических зданий Екатеринбурга автор изобразил телевизор, сквозь помехи на экране которого проглядывается изображение балерин, танцующих «Танец лебедей» из балета Чайковского «Лебединое озеро».").bindTooltip("Балет").openTooltip();
arrows.bindPopup("<b>Стрелы</b><br><img src='./img/arrows.jpg' style='height:300px;width:300px;'><p><br /> Во дворе типографии можно увидеть еще один проект. Это совместная работа художников из Санкт-Петербурга и Нижнего Новгорода – своеобразная импровизация, созданная в 2015 году в рамках «Стенограффии». Сочетание новой стилистики Никиты Nomerz, давно известного Екатеринбургу своим «добряком» (его с вами мы увидим во второй части нашего маршрута), и нового для города художника Стаса Bags’a, превратилось в целую сюжетную картину, на которой мускулистый юноша запускает стрелы в уставшего быка. Стоит отметить, что художники познакомились лично друг с другом менее чем за сутки до старта работы.").bindTooltip("Стрелы").openTooltip();

L.control.locate({
  position: "topleft",
  drawCircle: false,
  follow: true,
  setView: true
}).addTo(mymap);
