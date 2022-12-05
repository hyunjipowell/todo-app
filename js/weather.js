const API_KEY = "557bd74cae19877117854c567148d4c5";

function onGeoWorking(position){
    const lat= position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;

    fetch(url).then(response => response.json()).then(data => {
        let weatherIcon = {
            '01' : 'fas fa-sun',
            '02' : 'fas fa-cloud-sun',
            '03' : 'fas fa-cloud',
            '04' : 'fas fa-cloud-meatball',
            '09' : 'fas fa-cloud-sun-rain',
            '10' : 'fas fa-cloud-showers-heavy',
            '11' : 'fas fa-poo-storm',
            '13' : 'far fa-snowflake',
            '50' : 'fas fa-smog'
          };

        const city= document.querySelector(".info-weather p:first-child");
        let weathers = document.querySelector(".info-weather p:last-child");
        let icon = (data.weather[0].icon).substr(0,2);

        city.innerText = `${data.name}, ${ Math.round(data.main.temp)}°C`;
        weathers.innerHTML = `<i class="${weatherIcon[icon]}"></i>`;
    })
}
function onGeoError(){
    const location = document.querySelector(".info-weather");
    const p = document.createElement("p");
    location.appendChild(p);
    p.innerText = "Sorry! I could't find it.";
}

navigator.geolocation.getCurrentPosition(onGeoWorking, onGeoError);