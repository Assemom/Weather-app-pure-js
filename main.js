let input = document.getElementById('input');
let searchbtn = document.getElementById('searchbtn');
let img = document.getElementById('img');
const myKey = '06970f6bd80249a8efc7514da5d6b159';
const url = `https://api.openweathermap.org/data/2.5/weather?&units=metric&q=`;

async function checkWeather(city) {

    // fetching the url and the key 
    const response = await fetch(url + city +`&appid=${myKey}`);


    if(response.status == 404){
        alert("Enter correct city name ex : cairo , paris , germany .....");
    }else{
        let data = await response.json();
    
    console.log(data);
    
    document.getElementById('temp').innerHTML = Math.round(data.main.temp) + `°c`;
    document.getElementById('name').innerHTML = data.name;
    document.getElementById('humidity').innerHTML = data.main.humidity +`%` ;
    document.getElementById('speed').innerHTML = data.wind.speed + ` km/h`;

    switch (data.weather[0].main) {
        case 'Clear':
            img.src = "images/clear.png";
            break;
        case 'Cloud':
            img.src = "images/cloud.png";
            break;
        case 'Mist':
            img.src = "images/mist.png";
            break;
        case 'Drizzle':
            img.src = "images/drizzle.png";
            break;
        case 'Rain':
            img.src = "images/rain.png";
            break;
        case 'Snow':
            img.src = "images/snow.png";
            break;
        default:
            img.src = "images/cloud.png";
    }

    document.querySelector('.hidden').style.display = 'block';
    }
    

}
searchbtn.addEventListener('click' , ()=>{
    checkWeather(input.value);
})