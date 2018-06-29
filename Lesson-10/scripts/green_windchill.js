var apiCall = 'http://api.openweathermap.org/data/2.5/weather?q=greenville&appid=f7d59c447b9b70be0f4414a14a2c13f1';

$.getJSON(apiCall, WeatherCallback);

function weatherCallback(weatherData){
    var cityName = weatherData.name;
    var country = weatherData.sys.country;
    var description = weatherData.weather[1].description;
    
    
    $('windchill1').append("The weather in " + cityName + " " + country + "is currently " + description);
}