let nav = 0;

const calendar = document.getElementById('calendar');
const weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

function load(){
  const date = new Date();

  if (nav !== 0){
    date.setMonth(new Date().getMonth() + nav);
  }

  const day = date.getDate();
  const month = date.getMonth();
  const year = date.getFullYear();
  
  const firstDayOfMonth = new Date(year, month, 1);
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  const dateString = firstDayOfMonth.toLocaleDateString('en-us', {
    weekday: 'long',
    year: 'numeric',
    month: 'numeric',
    day: 'numeric',
  });
  const paddingDays = weekdays.indexOf(dateString.split(', ')[0]);
  
  document.getElementById('info-cal__head-year').innerText =
   `${year}`;

   document.getElementById('info-cal__head-month').innerText =
   `${date.toLocaleDateString('en-us', {month:'long'})}`;

   calendar.innerHTML = '';

  for(let i = 1; i <= paddingDays + daysInMonth; i++){
     const daySquare = document.createElement('div');

     if(i > paddingDays){
      daySquare.innerText = i - paddingDays;

      if (i - paddingDays === day && nav === 0) {
        daySquare.id = 'currentDay';
      }
     }
     
     calendar.appendChild(daySquare);
  }
}

function initButtons(){
  document.getElementById("info-cal__head-next").addEventListener('click', () => {
    nav++;
    load();
  })

  document.getElementById("info-cal__head-prev").addEventListener('click', () => {
    nav--;
    load();
  })
}


initButtons();
load();