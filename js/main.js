

document.getElementById('open-menu-btn').addEventListener('click', function(){
    document.getElementsByClassName('open-menu-holder')[0].classList.toggle('open');
});

document.getElementById('close-menu-btn').addEventListener('click', function(){
    document.getElementsByClassName('open-menu-holder')[0].classList.toggle('open');
});


const createAppointment = (appointment) => {
    const appointmentMessage = document.querySelector('.appointment-message');

    fetch('https://akademia108.pl/api/ajax/post-appointment.php', {
        headers: {
            'Content-Type': 'application/json',
        },
        mode: 'cors',
        method: 'POST',
        body: JSON.stringify(appointment)
    })
    .then(res => res.json())
    .then(resJSON => {
        appointmentMessage.classList.add('send'); 
        appointmentMessage.innerText = `Dziekujemy ${resJSON.appointment.name}. Zostales zapisany!`; 

        document.getElementById('appointment-name').value = '';
        document.getElementById('appointment-email').value = '';
        document.getElementById('appointment-service').value = '';
        document.getElementById('appointment-phone').value = '';
        document.getElementById('appointment-date').value = '';
        document.getElementById('appointment-time').value = '';
        document.getElementById('appointment-message').value = '';    
    });
};

document.getElementById('appointment-form').addEventListener('submit', function(e){
    e.preventDefault();

    const appointmentMessage = document.querySelector('.appointment-message');
    let formFields = document.getElementsByClassName('form-field');
    let allFields = false;

    let  appointment = {
        name: document.getElementById('appointment-name').value,
        email: document.getElementById('appointment-email').value,
        service: document.getElementById('appointment-service').value,
        phone: document.getElementById('appointment-phone').value,
        date: document.getElementById('appointment-date').value,
        time: document.getElementById('appointment-time').value,
        message: document.getElementById('appointment-message').value
    }

    for(let i = 0; i < formFields.length; i++){
        if(formFields[i].value === '') {
            allFields = false;
            formFields[i].classList.add('error');
        } else {
            allFields = true;
            formFields[i].classList.remove('error');
        }
    }

    if(allFields){
        createAppointment(appointment);
        appointmentMessage.innerText = ``;
    } else {
        appointmentMessage.classList.add('error');
        appointmentMessage.innerText = `Wypełnij wymagane pola`;
    }   
})