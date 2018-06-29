var weatherObject = new XMLHttpRequest();
weatherObject.open('GET','//api.openweathermap.org/data/2.5/weather?zip=75853,us&appid=f7d59c447b9b70be0f4414a14a2c13f1&units=imperial', true);

weatherObject.send();

weatherObject.onload = function() {
    var weatherInfo = JSON.parse(weatherObject.responseText);
    console.log(weatherInfo);
    
    document.getElementById('springhigh').innerHTML = weatherInfo.main.temp_max;
    document.getElementById('springlow').innerHTML =  weatherInfo.main.temp_min;
    document.getElementById('springspeed').innerHTML = weatherInfo.wind.speed;
    document.getElementById('springdesc').innerHTML = weatherInfo.weather["0"].description;
    document.getElementById('springcurr').innerHTML = weatherInfo.main.temp;
    
var springicon = weatherInfo.weather["0"].icon;
var spring_path = "http://openweathermap.org/img/w/" + springicon + ".png";
document.getElementById('spring_icon').src = spring_path;
    
}//end of the function.