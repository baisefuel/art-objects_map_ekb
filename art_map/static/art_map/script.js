var mymap = L.map("map").setView([56.8469, 60.6071], 12);

L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  maxZoom: 19,
}).addTo(mymap);

addMark([56.83163, 60.63184], "Лебединое озеро", "balet.jpg", "На стене одного из технических зданий Екатеринбурга автор изобразил телевизор, сквозь помехи на экране которого проглядывается изображение балерин, танцующих «Танец лебедей» из балета Чайковского «Лебединое озеро».");
addMark([56.840310, 60.614087], "Стрелы", "art_map/img/arrows.jpg", "Во дворе типографии можно увидеть еще один проект. Это совместная работа художников из Санкт-Петербурга и Нижнего Новгорода – своеобразная импровизация, созданная в 2015 году в рамках «Стенограффии». Сочетание новой стилистики Никиты Nomerz, давно известного Екатеринбургу своим «добряком» (его с вами мы увидим во второй части нашего маршрута), и нового для города художника Стаса Bags’a, превратилось в целую сюжетную картину, на которой мускулистый юноша запускает стрелы в уставшего быка. Стоит отметить, что художники познакомились лично друг с другом менее чем за сутки до старта работы.");
addMark([56.83349679252363, 60.591937560588086], "Гагарин", "art_map/img/balet.jpg", "В 2014 году харьковский художник Андрей Пальваль в рамках «Стенограффии» нарисовал портрет Юрия Гагарина. На тот момент он уже имел опыт работы в Екатеринбурге, город был ему знаком. Он прислал эскиз на фестиваль с призывом: «Хочу нарисовать Гагарина с белой “птицей мира” в руках».");
addMark([56.83848377958795, 60.610634070580346], "Птички", "art_map/img/balet.jpg", "Еще в 2013 году на трансформаторную будку у клуба «Lynch» художник Тимофей Ерин из Ростова-на-Дону, больше известный под ником «Художник» со своей командой посадили пять стилизованных птичек. Птицы – «фирменный элемент» Тимофея. Он рисует их в разных стилистиках, техниках и масштабах.");


L.control.locate({
  position: "topleft",
  drawCircle: false,
  follow: true,
  setView: true
}).addTo(mymap);

function addMark(coordinates,nameMark,pathImg,description){
    L.marker([coordinates[0],coordinates[1]])
    .bindPopup("<b>"+nameMark+"</b>"+"<p><img src='./"+pathImg+"' style='height:300px;weight:300px;'><p><br>"+description)
    .bindTooltip(nameMark)
    .openTooltip()
    .addTo(mymap);
}
