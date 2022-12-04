const clock = document.querySelector(".info-time");
const hours = document.querySelector(".info-time__hours");
const mins = document.querySelector(".info-time__mins");

function getClock(){
    const date = new Date();
    const getHours = String(date.getHours()).padStart(2,"0");
    const getMins = String(date.getMinutes()).padStart(2,"0");

    hours.innerText = `${getHours}`;
    mins.innerText = `${getMins}`;
}
getClock();
setInterval(getClock,1000);