const inputbox=document.getElementById("inputbox");
const search=document.getElementById("search");
const weatherimage=document.getElementById('weatherimage');
const temperature=document.getElementById('temperature');
const humidity=document.getElementById("humidity");
const windspeed=document.getElementById('windspeed');
const description=document.getElementById('desc');
search.addEventListener('click',()=>{
  checkweather(inputbox.value);
})
async function checkweather(city){
const api_key="48c129c8d800e809b12f3268285bc54d";
const url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`;
const weather_data=await fetch(`${url}`).then(response =>
  response.json());
  temperature.innerHTML=`${Math.round(weather_data.main.temp-273.15)}°C`;
  description.innerHTML=`${weather_data.weather[0].description}`;
  humidity.innerHTML=`${weather_data.main.humidity}%`;
  windspeed.innerHTML=`${weather_data.wind.speed}kmph`;
  switch(weather_data.weather[0].main){
    case 'Clouds':
      weatherimage.src="project1/cloud.png";
      break;
      case 'Clear':
      weatherimage.src="project1/sun.jpg";
      break;
      case 'Rain':
      weatherimage.src="project1/rain.png";
      break;
      case 'Mist':
      weatherimage.src="project1/mist.jpg";
      break;
      case 'Snow':
      weatherimage.src="project1/snow.jpg";
      break;
  }
     
}