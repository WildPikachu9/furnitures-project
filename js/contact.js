//form-validation
const forms = document.querySelectorAll('#form');

window.onbeforeunload = () => {
  for(const form of forms) {
    form.reset();
  };
};

document.addEventListener('DOMContentLoaded', function () {
  'use strict';
  Array.from(forms).forEach(form => {
    form.addEventListener('submit', async  event => {
      if (!form.checkValidity()) {
        event.preventDefault();
        event.stopPropagation();
      }

      form.classList.add('was-validated');
    }, false);
  });
});




//maps

let map = L.map('map').setView([50.03133914686908, 19.92065947007171], 13);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '© OpenStreetMap contributors'
}).addTo(map);

let marker = L.marker([50.03133914686908, 19.92065947007171]).addTo(map);
marker.bindPopup("<b>BEL-MEB</b><br>Kobierzyńska 54, Kraków").openPopup();
