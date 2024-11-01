import './style.css';
import rain from './rain.jpg';
import clear from './clear.jpg';
import partlyCloudy from './partially-cloudy3.jpg';
import mostlyCloudy from './mostly-cloudy.jpg';
import overcast from './overcast.jpg';
import mostlyClear from './mostly-clear.jpg';

const display1 = document.querySelector('.display1')
const display2 = document.querySelector('.display2')
const city = document.querySelector('.city')
const searchbtn = document.querySelector('.searchbtn')


async function defaultweather(){
    const weather = await fetch('https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/addis ababa?unitGroup=metric&key=JBPP4CMRAQXLSBX8GATXVLKHN' )
    const message = await weather.json();
    console.log(message);

    const date = document.createElement('p')
    const time = document.createElement('p')
    const address = document.createElement('p')
    const temp = document.createElement('p')
    const icon = document.createElement('i')
    const conditions = document.createElement('p')
    const precipitation = document.createElement('p')
    const humidity = document.createElement('p')
    const windspeed = document.createElement('p')

    date.innerHTML = message.days[0].datetime;
    date.style.textAlign = 'right';
    date.style.fontSize = '20px';
    date.style.margin = '5px';
    time.innerHTML = message.currentConditions.datetime;
    time.style.textAlign = 'right';
    time.style.fontSize = '20px';
    time.style.margin = '5px';
    address.innerHTML = message.resolvedAddress;
    address.style.textAlign = 'left';
    address.style.fontSize = '20px';
    address.style.margin = '0px';
    temp.innerHTML = message.currentConditions.temp + '°c';
    temp.style.textAlign = 'left';
    temp.style.fontSize = '100px';
    temp.style.margin = '0px';
    conditions.innerHTML = message.currentConditions.conditions;
    const condition = message.currentConditions.conditions
    setBackground(condition);
    conditions.style.textAlign = 'left';
    conditions.style.fontSize = '20px';
    conditions.style.margin = '0px';
    conditions.style.marginBottom = '20px';
    precipitation.innerHTML = 'Precipitation: ' + message.currentConditions.precip * 100 + '%';
    precipitation.style.textAlign = 'left';
    precipitation.style.fontSize = '15px';
    precipitation.style.margin = '0px';
    humidity.innerHTML = 'Humidity: ' + message.currentConditions.humidity;
    humidity.style.textAlign = 'left';
    humidity.style.fontSize = '15px';
    humidity.style.margin = '0px';
    windspeed.innerHTML = 'Wind Speed: ' + message.currentConditions.windspeed;
    windspeed.style.textAlign = 'left';
    windspeed.style.fontSize = '15px';
    windspeed.style.margin = '0px';
    
  
    display1.appendChild(date)
    display1.appendChild(time)
    display1.appendChild(address);
    display1.appendChild(temp)
    display1.appendChild(conditions);
    display1.appendChild(precipitation)
    display1.appendChild(humidity)
    display1.appendChild(windspeed)
}

async function weekweather(){
    const weather = await fetch('https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/addis ababa?unitGroup=metric&key=JBPP4CMRAQXLSBX8GATXVLKHN' )
    const message = await weather.json();
    console.log(message);

    const date = [];
    const temp = [];
    const conditions = [];
    const precipitation = [];
    const humidity = [];
    const windspeed = [];
    const day = [];
    
    for (let i = 0; i < 6; i++) {
        date[i] = document.createElement('p');
        date[i].style.textAlign = 'right';
        temp[i] = document.createElement('p');
        temp[i].style.textAlign = 'center';
        temp[i].style.fontSize = '40px';
        temp[i].style.margin = '0px';
        conditions[i] = document.createElement('p');
        conditions[i].style.textAlign = 'center';
        conditions[i].style.fontSize = '20px';
        conditions[i].style.marginBottom = '20px';
        precipitation[i] = document.createElement('p');
        precipitation[i].style.textAlign = 'left';
        precipitation[i].style.fontSize = '15px';
        precipitation[i].style.margin = '0px';
        humidity[i] = document.createElement('p');
        humidity[i].style.textAlign = 'left';
        humidity[i].style.fontSize = '15px';
        humidity[i].style.margin = '0px';
        windspeed[i] = document.createElement('p');
        windspeed[i].style.textAlign = 'left';
        windspeed[i].style.fontSize = '15px';
        windspeed[i].style.margin = '0px';
        day[i] = document.createElement('div');
        day[i].style.border = '1px solid black';
        day[i].style.borderRadius = '16px';
        day[i].style.padding = '10px';
    
        date[i].innerHTML = message.days[i].datetime;
        temp[i].innerHTML = message.days[i].temp + '°c';
        conditions[i].innerHTML = message.days[i].conditions;
        precipitation[i].innerHTML = 'Precipitation: ' + message.days[i].precipprob  + '%';
        humidity[i].innerHTML = 'Humidity: ' + message.days[i].humidity;
        windspeed[i].innerHTML = 'Wind Speed: ' + message.days[i].windspeed;
    
        day[i].appendChild(date[i]);
        day[i].appendChild(temp[i]);
        day[i].appendChild(conditions[i]);
        day[i].appendChild(precipitation[i]);
        day[i].appendChild(humidity[i]);
        day[i].appendChild(windspeed[i]);
    
        // Append day[i] to a parent element (e.g., a container div)
        display2.appendChild(day[i]);
    }
}


window.onload = defaultweather();
window.onload = weekweather();



async function cityweather(city){
    const weather = await fetch('https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/' + city + '?unitGroup=metric&key=JBPP4CMRAQXLSBX8GATXVLKHN' )
    const message = await weather.json();
    console.log(message);

    display1.innerHTML = '';

    const date = document.createElement('p')
    const time = document.createElement('p')
    const address = document.createElement('p')
    const temp = document.createElement('p')
    const icon = document.createElement('i')
    const conditions = document.createElement('p')
    const precipitation = document.createElement('p')
    const humidity = document.createElement('p')
    const windspeed = document.createElement('p')

    date.innerHTML = message.days[0].datetime;
    date.style.textAlign = 'right';
    date.style.fontSize = '20px';
    date.style.margin = '5px';
    time.innerHTML = message.currentConditions.datetime;
    time.style.textAlign = 'right';
    time.style.fontSize = '20px';
    time.style.margin = '5px';
    address.innerHTML = message.resolvedAddress;
    address.style.textAlign = 'left';
    address.style.fontSize = '20px';
    address.style.margin = '0px';
    temp.innerHTML = message.currentConditions.temp + '°c';
    temp.style.textAlign = 'left';
    temp.style.fontSize = '100px';
    temp.style.margin = '0px';
    conditions.innerHTML = message.currentConditions.conditions;
    const condition = message.currentConditions.conditions
    setBackground(condition);
    conditions.style.textAlign = 'left';
    conditions.style.fontSize = '20px';
    conditions.style.margin = '0px';
    conditions.style.marginBottom = '20px';
    precipitation.innerHTML = 'Precipitation: ' + message.currentConditions.precip * 100 + '%';
    precipitation.style.textAlign = 'left';
    precipitation.style.fontSize = '15px';
    precipitation.style.margin = '0px';
    humidity.innerHTML = 'Humidity: ' + message.currentConditions.humidity;
    humidity.style.textAlign = 'left';
    humidity.style.fontSize = '15px';
    humidity.style.margin = '0px';
    windspeed.innerHTML = 'Wind Speed: ' + message.currentConditions.windspeed;
    windspeed.style.textAlign = 'left';
    windspeed.style.fontSize = '15px';
    windspeed.style.margin = '0px';
    
  
    display1.appendChild(date)
    display1.appendChild(time)
    display1.appendChild(address);
    display1.appendChild(temp)
    display1.appendChild(conditions);
    display1.appendChild(precipitation)
    display1.appendChild(humidity)
    display1.appendChild(windspeed) 


}

async function cityweekweather(city){

    const weather = await fetch('https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/' + city + '?unitGroup=metric&key=JBPP4CMRAQXLSBX8GATXVLKHN' )
    const message = await weather.json();
    console.log(message);
    
    display2.innerHTML = '';
    const date = [];
    const temp = [];
    const conditions = [];
    const precipitation = [];
    const humidity = [];
    const windspeed = [];
    const day = [];
    
    for (let i = 0; i < 6; i++) {
        date[i] = document.createElement('p');
        date[i].style.textAlign = 'right';
        temp[i] = document.createElement('p');
        temp[i].style.textAlign = 'center';
        temp[i].style.fontSize = '40px';
        temp[i].style.margin = '0px';
        conditions[i] = document.createElement('p');
        conditions[i].style.textAlign = 'center';
        conditions[i].style.fontSize = '20px';
        conditions[i].style.marginBottom = '20px';
        precipitation[i] = document.createElement('p');
        precipitation[i].style.textAlign = 'left';
        precipitation[i].style.fontSize = '15px';
        precipitation[i].style.margin = '0px';
        humidity[i] = document.createElement('p');
        humidity[i].style.textAlign = 'left';
        humidity[i].style.fontSize = '15px';
        humidity[i].style.margin = '0px';
        windspeed[i] = document.createElement('p');
        windspeed[i].style.textAlign = 'left';
        windspeed[i].style.fontSize = '15px';
        windspeed[i].style.margin = '0px';
        day[i] = document.createElement('div');
        day[i].style.border = '1px solid black';
        day[i].style.borderRadius = '16px';
        day[i].style.padding = '10px';
    
        date[i].innerHTML = message.days[i].datetime;
        temp[i].innerHTML = message.days[i].temp + '°c';
        conditions[i].innerHTML = message.days[i].conditions;
        precipitation[i].innerHTML = 'Precipitation: ' + message.days[i].precipprob + '%';
        humidity[i].innerHTML = 'Humidity: ' + message.days[i].humidity;
        windspeed[i].innerHTML = 'Wind Speed: ' + message.days[i].windspeed;
    
        day[i].appendChild(date[i]);
        day[i].appendChild(temp[i]);
        day[i].appendChild(conditions[i]);
        day[i].appendChild(precipitation[i]);
        day[i].appendChild(humidity[i]);
        day[i].appendChild(windspeed[i]);
    
        // Append day[i] to a parent element (e.g., a container div)
        display2.appendChild(day[i]);
    }
}

searchbtn.addEventListener('click', () => {
    const city = document.querySelector('.city').value;
    cityweather(city);
    cityweekweather(city);
})

function setBackground(condition) {
    let imageUrl = '';

    switch (condition) {
        case "Clear":
            imageUrl = clear; // Use the imported clear image
            break;
        case "Mostly Clear":
            imageUrl = mostlyClear; // Use the imported mostlyClear image
            break;
        case "Partially cloudy":
            imageUrl = partlyCloudy; // Use the imported partlyCloudy image
            break;
        case "Mostly Cloudy":
            imageUrl = mostlyCloudy; // Use the imported mostlyCloudy image
            break;
        case "Overcast":
            imageUrl = overcast; // Use the imported overcast image
            break;
        case "Rain, Overcast":
        case "Rain":
        case "Rain, Partially cloudy":
        case "Showers":
            imageUrl = rain; // Use the imported rain image
            break;
        case "Thunderstorms":
            imageUrl = thunderstorms; // Make sure you have an imported image for this case
            break;
        case "Snow":
            imageUrl = snow; // Make sure you have an imported image for this case
            break;
        case "Flurries":
            imageUrl = flurries; // Make sure you have an imported image for this case
            break;
        case "Fog":
            imageUrl = fog; // Make sure you have an imported image for this case
            break;
        case "Haze":
            imageUrl = haze; // Make sure you have an imported image for this case
            break;
        case "Partly Cloudy with Showers":
            imageUrl = partlyCloudyShowers; // Make sure you have an imported image for this case
            break;
        default:
            imageUrl = defaultImage; // Add a default image in case no condition matches
    }

    document.body.style.backgroundImage = `url('${imageUrl}')`;
}


