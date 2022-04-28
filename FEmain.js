let body = document.getElementsByTagName('body')
// document.body.style.backgroundImage = "images/mountains.jpg";
//set all of my id variables
const container = document.getElementById('container')
const dateElement = document.getElementById('date');
const currentWeatherItemsElement = document.getElementById('current-weather-items');
const timezone = document.getElementById('time-zone');
const countryElement = document.getElementById('country');
const weatherForecastElement = document.getElementById('weather-forecast');
const currentTempElement = document.getElementById('current-temp');
const weatherItems = document.getElementsByClassName('weather-item')
const futureForecastElement = document.getElementById('weather-forecast-item');


// create Container
    const currentInfo = document.createElement('div')
    currentInfo.classList.add('current-info')
    container.appendChild(currentInfo)

    const currentContainer = document.createElement('div')
    currentContainer.classList.add('current-container')
    currentInfo.appendChild(currentContainer)

    // const mapContainer = document.createElement('div')
    // mapContainer.classList.add('map-container')
    // mapContainer.id = 'map-container'
    // currentInfo.appendChild(mapContainer)

    const dateContainer = document.createElement('div')
    dateContainer.classList.add('date-container')
    currentInfo.appendChild(dateContainer)

    const timeContainer = document.createElement('div')
    timeContainer.classList.add('time')
    timeContainer.id = 'time'
    timeContainer.textContent = '12:30'
    dateContainer.appendChild(timeContainer)

    // const amPm = document.createElement('span')
    // amPm.id = 'am-pm'
    // amPm.textContent = 'PM'
    // dateContainer.appendChild(amPm)
    
    const date = document.createElement('div')
    date.classList.add('date')
    date.id = 'date'
    date.textContent = 'Thursday, 28 April'
    dateContainer.appendChild(date)

    const others = document.createElement('div')
    others.classList.add('others')
    others.id = 'current-weather-items'
    others.style.visibility = 'hidden';
    currentContainer.appendChild(others)

    const other = document.createElement('div')
    other.classList.add('other')
    other.id = 'other'
    others.appendChild(other)

    const currentDay = document.createElement('div')
    currentDay.classList.add('current-day')
    currentDay.id ='current-day'
    other.appendChild(currentDay)

    let todayImg = document.createElement('img')
    todayImg.classList.add('w-icon')
    // todayImg.src = "http://openweathermap.org/img/wn/10d@4x.png"
    todayImg.alt = "weather icon" 
    todayImg.id = 'w-icon'
    
    other.appendChild(todayImg)

    const currentDesc = document.createElement('div')
    currentDesc.classList.add('current-desc')
    currentDesc.id ='current-desc'
    other.appendChild(currentDesc)
    
    const currentTemp = document.createElement('div')
    currentTemp.classList.add('current-temperature')
    currentTemp.id ='current-temperature'
    other.appendChild(currentTemp)

    const placeContainer = document.getElementById('place-container')
    placeContainer.style.visibility = 'hidden';
    const futureForecast = document.getElementById('future-forecast')
    
    const timeZone = document.createElement('div')
    timeZone.classList.add('time-zone')
    timeZone.id = 'time-zone'
    timeZone.textContent ='Americas/Tha Hood'
    placeContainer.appendChild(timeZone)

    const country = document.createElement('div')
    country.classList.add('country')
    country.id = 'country'
    country.textContent ='US'
    placeContainer.appendChild(country)
    
    const weatherForecast = document.createElement('div')
    weatherForecast.classList.add('weather-forecast')
    weatherForecast.id = 'weather-forecast'
    futureForecast.appendChild(weatherForecast)

createWeatherItems()
let now = moment().format('h:mm a')
timeContainer.innerHTML = now
// amPm.textContent = moment().format('H:mm a')
// setInterval(() => {
//     const time = new Date();
//     const month = time.getMonth();
//     const date = time.getDate();
//     const day = time.getDay();
//     const hour = time.getHours();
//     const hoursIn12HrFormat = hour >= 13 ? hour %12: hour
//     const minutes = time.getMinutes();
//     const ampm = hour >=12 ? 'PM' : 'AM'
//     timeContainer.innerHTML = (hoursIn12HrFormat < 10? hoursIn12HrFormat : hoursIn12HrFormat) + ':' + (minutes < 10? '0'+minutes: minutes)+ ' ' + `<span id="am-pm">${ampm}</span>`
//     // console.log(hoursIn12HrFormat)
// }, 1000);

//search by zip code
let searchBox = document.getElementById('search-bar');
let searchBtn = document.getElementById('submit');
const API_Key = '705b7e2bf903340ad3d67654088d5536';

function getGeo(){
    $.get('http://api.openweathermap.org/geo/1.0/direct?q=' + searchBox.value + ',US&limit=5&appid=' + API_Key, (data) => {
        console.log(data[0])
        searchBox.value = ''
        getWeather(data)
        // getMap(data)
        
        })

}

function getWeather(data){
    $.get('https://api.openweathermap.org/data/2.5/onecall?lat=' + data[0].lat + '&lon=' + data[0].lon + '&exclude=hourly,minutely&units=imperial&appid=' + API_Key, (wData) => {
    //    console.log(wData)
       showWeatherData(wData)

        })
}
// getMap()
// function getMap(data){
//     $.get('https://tile.openweathermap.org/map/temp_new/13/32/97.png?appid=' + API_Key, (map) => {
//         console.log(map)
//         // searchBox.value = ''
//         mapContainer.src = map
        
//         })

// }

//create weather item containers
function createWeatherItems(){
    for (let i = 1; i <= 5; i++) {
        let tempDiv1 = document.createElement('div')
        tempDiv1.classList.add('weather-item')
        tempDiv1.id = 'weather-item'+[i]
        others.appendChild(tempDiv1)
        let tempDiv2 = document.createElement('div')
        tempDiv2.classList.add('item-name')
        tempDiv2.id ='item-name' + [i]
        let tempDiv3 = document.createElement('div')
        tempDiv3.classList.add('item-value')
        tempDiv3.id ='item-value' + [i]
        tempDiv1.appendChild(tempDiv2)
        tempDiv1.appendChild(tempDiv3)
        }
         
}
let humidity = document.querySelector('#item-name1')
let pressure = document.getElementById('item-name2')
let windSpeed = document.getElementById('item-name3')
let sunrise = document.getElementById('item-name4')
let sunset = document.getElementById('item-name5')
let Temp = document.getElementById('current-temperature')
let nameOfDay = document.getElementById('current-day')
let description = document.getElementById('current-desc')
let map =document.getElementById('map-container')
humidity.textContent = 'Humidity'
pressure.textContent = 'Pressure'
windSpeed.textContent = 'Wind Speed'
sunrise.textContent = 'Sunrise'
sunset.textContent = 'Sunset'
nameOfDay.textContent = 'Today'
Temp.innerHTML = '105°'
description.innerHTML = 'Sunny'
// map.innerHTML = 'https://tile.openweathermap.org/map/temp_new/13/32/97.png?appid=' + API_Key
document. body.style.backgroundImage = "url('images/los-angeles.jpg')";




createForecastItems()


function createForecastItems(days){
    $( "#weather-forecast" ).empty()
    for (let i = 0; i < days; i++) {
        let tempDiv1 = document.createElement('div')
        tempDiv1.classList.add('weather-forecast-item')
        weatherForecast.appendChild(tempDiv1)
        let tempDiv2 = document.createElement('div')
        tempDiv2.classList.add('day')
        tempDiv2.id ='day' + [i]
        let tempImg = document.createElement('img')
        tempImg.classList.add('w-icon')
        tempImg.src = "http://openweathermap.org/img/wn/10d@2x.png"
        tempImg.alt = "weather icon" 
        tempImg.id = 'w-icon' + [i]
        let tempDiv5 = document.createElement('div')
        tempDiv5.classList.add('fore-desc')
        tempDiv5.id ='fore-desc' + [i]
        let tempDiv3 = document.createElement('div')
        tempDiv3.classList.add('temp')
        tempDiv3.id ='hi-temp' + [i]
        let tempDiv4 = document.createElement('div')
        tempDiv4.classList.add('temp')
        tempDiv4.id ='low-temp' + [i]
        
             
        weatherForecast.appendChild(tempDiv1)
        tempDiv1.appendChild(tempDiv2)
        tempDiv1.appendChild(tempImg)
        tempDiv1.appendChild(tempDiv5)
        tempDiv1.appendChild(tempDiv3)
        tempDiv1.appendChild(tempDiv4)
        
        
        }
        
}
// showWeatherData()
function showWeatherData (wData){
    // let {humidity, pressure, sunrise, sunset, wind_speed} = wData.current;
// console.log(wData)
    timeZone.innerHTML = wData.timezone;
    country.innerHTML = wData.lat + '°N ' + wData.lon+'°E'
    
    let vhumidity = document.getElementById('item-value1')
    let vpressure = document.getElementById('item-value2')
    let vwindSpeed = document.getElementById('item-value3')
    let vsunrise = document.getElementById('item-value4')
    let vsunset = document.getElementById('item-value5')
    let vTemp = document.getElementById('current-temperature')
    let vnameOfDay = document.getElementById('current-day')
    let vImg = document.getElementById('w-icon')
    // let vMovie = document.getElementById('myVideo')
    let vdescription = document.getElementById('current-desc')
    vhumidity.innerHTML = wData.current.humidity
    vpressure.textContent = wData.current.pressure + ' Hg'
    vwindSpeed.textContent = wData.current.wind_speed + ' mph'
    vTemp.innerHTML = Math.round(wData.current.temp) + '°'
    vImg.src = 'http://openweathermap.org/img/wn//'+ wData.daily[0].weather[0].icon + '@4x.png'
    vnameOfDay.innerHTML = window.moment(wData.daily[0].dt * 1000).format('dddd')
    vsunrise.textContent = window.moment(wData.current.sunrise * 1000).format('H:mm a')
    vsunset.textContent = window.moment(wData.current.sunset * 1000).format('H:mm a')
    // vMovie.src = "images/Rain.mp4"; 
    vdescription.innerHTML = wData.current.weather[0].description.toUpperCase() 
    others.style.visibility = 'visible';
    placeContainer.style.visibility = 'visible';
    let bkImage = 'images/' + wData.current.weather[0].main + '.jpg'
    document. body.style.backgroundImage = 'url('+ bkImage +')';
    console.log(wData, vdescription)
    
    
    
      let week = wData.daily.length
      createForecastItems(week)
         
        for (let i = 0; i < wData.daily.length; i++){
            let otherDayImg = document.getElementById('w-icon' +[i])
            let dayName = document.getElementById('day' +[i])
            let tempHi = document.getElementById('hi-temp' +[i])
            let tempLow = document.getElementById('low-temp' +[i])
            let tempDesc = document.getElementById('fore-desc' +[i])
            otherDayImg.src = 'http://openweathermap.org/img/wn//'+ wData.daily[i].weather[0].icon + '@2x.png'
            
            tempHi.innerHTML = 'High: ' + Math.round(wData.daily[i].temp.max) + '°'
            tempLow.innerHTML = 'Low: ' + Math.round(wData.daily[i].temp.min) + '°'
            dayName.innerHTML = window.moment(wData.daily[i].dt * 1000).format('dddd')
            tempDesc.innerHTML = wData.daily[i].weather[0].description.toUpperCase()
        }
            
}
    
searchBtn.addEventListener('click', getGeo);
// console.log(time)
// let t ='http://api.openweathermap.org/geo/1.0/direct?q=' + searchBox.value + '&limit={limit}&appid=' + API_Key
// console.log(t)
// createContainer()
// console.log(weatherForecastElement.weatherForecastItems.id)