// Окно записи
const openModal = document.getElementById('open_modal-pop-ups');
const closeModal = document.getElementById('pop__up-closes');
const popUp = document.getElementById('popups')
openModal.addEventListener('click', function (e) {
   e.preventDefault();
   popUp.classList.add('active');
})
closeModal.addEventListener('click', () => {
   popUp.classList.remove('active')
})
// Окно записи
// swiper
var swiper = new Swiper(".mySwiper", {
   spaceBetween: 30,
   pagination: {
      el: ".swiper-pagination",
   },
   mousewhell: true,
   keyboard: true,
});
// swiper
// Map
let map;
DG.then(function () {
   map = DG.map('map', {
      center: [55.751426, 37.618879],
      zoom: 16
   });
   let myIcon = DG.icon({
      iconUrl: 'https://6element.by/images/companies/1/location.png?1591172992745',
      iconSize: [40, 60],
   });
   DG.marker([55.751426, 37.618879], { icon: myIcon }).addTo(map).bindPopup('<div style="padding: 20px; color: white;"><p style="font-weight: 600; font-size: 18px; line-height: 100%;">Контактная информация<br /><br /></p><p> &#9745 Москва, ул. Неизвестного, 1<br /> 55.751426, 37.618879</p><br /><p>&#9742 8 (800) 555-35-35</p><br /><p> &#9993 Example@kalipta.ru</p><br /><p style="font-weight: 600; font-size: 18px; line-height: 100%;">Время работы</p><br /><p>&#9200 Пн-Пт: с 8:00 до 22:00</p><p>Сб-Вск: с 10:00 до 22:00</p> </div>').bindLabel('Нажми на меня и узнаешь информацию', { static: false });;
   DG.control.location({ position: 'bottomright' }).addTo(map);
   DG.control.scale().addTo(map);
   DG.control.ruler({ position: 'bottomleft' }).addTo(map);
   DG.control.traffic().addTo(map);
});
// Map


