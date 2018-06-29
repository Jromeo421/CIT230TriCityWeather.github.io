var weatherObject = new XMLHttpRequest();
weatherObject.open('GET','//api.openweathermap.org/data/2.5/weather?zip=75402,us&appid=f7d59c447b9b70be0f4414a14a2c13f1&units=imperial', true);

weatherObject.send();

weatherObject.onload = function() {
    var weatherInfo = JSON.parse(weatherObject.responseText);
    console.log(weatherInfo);
    
    document.getElementById('greenhigh').innerHTML = weatherInfo.main.temp_max;
    document.getElementById('greenlow').innerHTML =  weatherInfo.main.temp_min;
    document.getElementById('greenspeed').innerHTML = weatherInfo.wind.speed;
    document.getElementById('greendesc').innerHTML = weatherInfo.weather["0"].description;
    document.getElementById('greencurr').innerHTML = weatherInfo.main.temp;
    
var greenicon = weatherInfo.weather["0"].icon;
var green_path = "http://openweathermap.org/img/w/" + greenicon + ".png";
document.getElementById('green_icon').src = green_path;
    
}//end of the function.

