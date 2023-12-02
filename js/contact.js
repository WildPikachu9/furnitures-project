//form-validation

(() => {
    'use strict'
  
    const forms = document.querySelectorAll('.needs-validation')
  
    Array.from(forms).forEach(form => {
      form.addEventListener('submit', event => {
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
        }
  
        form.classList.add('was-validated')
      }, false)
    })
  })()

  //maps

let map = L.map('map').setView([50.032426879808945, 20.006829736497163], 13);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '© OpenStreetMap contributors'
}).addTo(map);

let marker1 = L.marker([50.032426879808945, 20.006829736497163]).addTo(map);
marker1.bindPopup("<b>BEL-MEB</b><br>Biskupińska 22, Kraków").openPopup();

let marker2 = L.marker([50.03123220536397, 19.920573971164476]).addTo(map);
marker2.bindPopup("<b>BEL-MEB</b><br>Kobierzyńska 54, Kraków").openPopup();
