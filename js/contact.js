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

  // function initMap() {
  //   var myLatLng = { lat: 50.032426879808945, lng: 20.006829736497163 };
  //   var map = new google.maps.Map(document.getElementById('map'), {
  //     zoom: 8,
  //     center: myLatLng
  //   });

  //   var marker = new google.maps.Marker({
  //     position: myLatLng,
  //     map: map,
  //     title: 'Moja lokalizacja!'
  //   });
  // }