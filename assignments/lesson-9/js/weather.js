var weatherRequest= new XMLHttpRequest();
    weatherRequest.open('GET',"//api.openweathermap.org/data/2.5/weather?id=4156210&appid=9967347d49e1d70dbd0c0f7eb60694d2&units=imperial',true);
    
    weatherRequest.send();

    weatherRequest.onload = function() {
var weatherData = JSON.parse(weatherRequest.responseText);
        console.log(weatherData);
        
        document.getElementById('current-temp').innerHTML=weatherData.main.temp;
        document.getElementById('weather-description').innerHTML=weatherData.weather[0].main;
        document.getElementById('high-temp').innerHTML=weatherData.main.temp_max;
        document.getElementById('low-temp').innerHTML=weatherData.main.temp_min;
        document.getElementById('wind-speed').innerHTML=weatherData.wind.speed;
        var iconcode=weatherData.weather[0].icon;
        var icon_path="//openweathermap.org/img/w/"+ iconcode +".png";
        document.getElementById('weather_icon').src = icon_path;
}
