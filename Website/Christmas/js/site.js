const uri= 'https://questapi.yellow-chips.com/email';

let todos = [];

function addItem() {
    const nameTextbox = document.getElementById('conFullName');
    const emailTextbox = document.getElementById('conEmailAddress');
    const phoneTextbox = document.getElementById('conPhoneNumber');
    const subjetTextbox = document.getElementById('conSubjectText');
    const detailTextbox = document.getElementById('conMessageText');    
    
    
    const item = {        
        name: nameTextbox.value.trim(),
        email: emailTextbox.value.trim(),
        phoneNo: phoneTextbox.value.trim(),
        subject: subjetTextbox.value.trim(),
        detail: detailTextbox.value.trim(),
        source: 'visionexpress',
	type:'contactUs'
        
    };
    
    
    fetch(uri, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(item)
    }).then(response => response.json())
        .then(() => {            
           
        })
        .catch(error => console.error('Unable to send an Email.', error));
  
}

function bookAppointment() {   
    const nameTextbox = document.getElementById('bookFullName');
    const phoneTextbox = document.getElementById('bookPhoneNumber');
    const emailTextbox = document.getElementById('bookEmail');
    const dayTextbox = document.getElementById('bookDay');
    const timeTextbox = document.getElementById('bookTime');
    const locationTextbox = document.getElementById('bookLocation');

    const item = {       
        name: nameTextbox.value.trim(),
        phoneNo: phoneTextbox.value.trim(),
        email: emailTextbox.value.trim(),
        day: dayTextbox.value.trim(),
        time: timeTextbox.value.trim(),
        location: locationTextbox.value.trim(),
        source: 'visionexpress',
	type:'appointmentBooking'

    };

    fetch(uri, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(item)
    }).then(response => response.json())
        .then(() => {
           
        })
        .catch(error => console.error('Unable to send an Email.', error));
   
}

