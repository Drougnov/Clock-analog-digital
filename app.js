//theme switcher
const toggleBtn = document.querySelector('.toggle');

toggleBtn.addEventListener('click',()=>{
    toggleBtn.classList.toggle('active');
    document.body.classList.toggle('light-mode');
})

//analog clock
function getAnalog(){
    const secondHand = document.querySelector('.sec-hand');
    const minuteHand = document.querySelector('.min-hand');
    const hourHand = document.querySelector('.hour-hand');

    const currentTime = new Date();
    const second = currentTime.getSeconds() *6;
    const minute = currentTime.getMinutes() *6;
    const hour = currentTime.getHours()*30 + minute/12;

    secondHand.style.transform = `rotate(${second}deg)`;
    minuteHand.style.transform = `rotate(${minute}deg)`;
    hourHand.style.transform = `rotate(${hour}deg)`;
}

//digital clock
function getDigital(){
    const secondText = document.querySelector('.second-text');
    const minuteText = document.querySelector('.minute-text');
    const hourText = document.querySelector('.hour-text');
    const ampm = document.querySelector('.ampm');

    const currentTime = new Date();

    secondText.textContent = ('0' + currentTime.getSeconds()).slice(-2); //add a '0' if less then 10; Ex. 9 => 09;
    minuteText.textContent = ('0'+currentTime.getMinutes()).slice(-2);
    hourText.textContent = ('0'+currentTime.getHours()).slice(-2);

    if(hourText.textContent>12){
        ampm.textContent = 'PM';
        let hour = hourText.textContent - 12;   //This will make 12-hour time format instead of 24-hour
        hourText.textContent = ('0'+hour).slice(-2);
    }
    else{
        ampm.textContent = 'AM';
    }
}

function getDate(){
    const date = document.querySelector('.date');
    const month = document.querySelector('.month');
    const year = document.querySelector('.year');
    const monthNames = ['January','February','March','April','May','June','July','August','September','October','November','December']

    const currentTime = new Date();
    
    date.textContent = ('0'+currentTime.getDay()).slice(-2);
    month.textContent = monthNames[currentTime.getMonth()];  //iterate over months name. Ex. 7=> July
    year.textContent = currentTime.getFullYear();
}

[getAnalog, getDigital, getDate].map(fnc => { fnc(); return setInterval(fnc, 1000); }); //call all the function and setInterval at once