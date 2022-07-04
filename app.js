function getAnalog(){
    const secondHand = document.querySelector('.sec-hand');
    const minuteHand = document.querySelector('.min-hand');
    const hourHand = document.querySelector('.hour-hand');

    const currentTime = new Date();
    const secondRotate = currentTime.getSeconds() * 6;
    const minuteRotate = currentTime.getMinutes() * 6;
    const hourRotate = currentTime.getHours()*30;
    
    secondHand.style.transform = `rotateZ(${secondRotate}deg)`;
    minuteHand.style.transform = `rotateZ(${minuteRotate}deg)`;
    hourHand.style.transform = `rotateZ(${hourRotate+minuteRotate/12}deg)`;
}

function getDigital(){
    const secondText = document.querySelector('.second-text');
    const minuteText = document.querySelector('.minute-text');
    const hourText = document.querySelector('.hour-text');
    const ampm = document.querySelector('.ampm')
    
    const currentTime = new Date();

    secondText.textContent = currentTime.getSeconds();
    minuteText.textContent = currentTime.getMinutes();
    hourText.textContent = currentTime.getHours();

    if(hourText.textContent>12){
        ampm.textContent = "PM";
        hourText.textContent-=12;
    }
    else{
        ampm.textContent = "AM";
    }
}

function getDate(){
    const date = document.querySelector('.date');
    const month = document.querySelector('.month');
    const year = document.querySelector('.year');

    const monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"];
    const currentTime = new Date();
    
    date.textContent = currentTime.getDate();
    month.textContent = monthNames[currentTime.getMonth()];
    year.textContent = currentTime.getFullYear();
}

setInterval(getAnalog,1000);setInterval(getDigital,1000),setInterval(getDate,1000)
getAnalog();getDigital();getDate();