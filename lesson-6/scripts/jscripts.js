var weatherObject = new XMLHttpRequest();

weatherObject.open('GET', 'http://api.openweathermap.org/data/2.5/weather?q=Knightdale,US&APPID=5d2cd33f5078110e5e2d1c2277c23a90', true);

weatherObject.send();

weatherObject.onload = function() {
    var weatherInfo = JSON.parse(weatherObject.responseText);
    console.log(weatherInfo);
    
    document.getElementById('place').innerHTML = weatherInfo.current_observation.display_location.full;
    
    }
//end of onload