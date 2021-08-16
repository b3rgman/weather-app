let request = require('request');
const argv = require('yargs').argv;
const dotenv = require('dotenv');
dotenv.config();
let city= argv.c || 'Leland';
let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${process.env.API_KEY}`

request(url, function (err, response, body) {
    if(err){
        console.log('error:', error);
    } else {
        let weather = JSON.parse(body)
        let message = `It's ${weather.main.temp} degrees in ${weather.name}!.  It feels like ${weather.main.feels_like}.  Your Latitude is ${weather.coord.lat} and your Longitude is ${weather.coord.lon}`;
        console.log(message);
    }
});

//! mess with this more
let url2 = `https://api.openweathermap.org/data/2.5/onecall?lat=${weather.coord.lat}&lon=${weather.coord.lon}&appid={process.env.API_KEY}`

request(url2, function (err, response, body) {
    if (err){
        console.log('error:', error);
    } else {
        let data = json.parse(body)
        let message2 = `Here is your forcast ${data}`;
        console.log(message2);
    }
});