import React, {useState} from 'react';
import Form from './Form';
import Card from './Card';
const WeatherPanel = () => {

    let urlWeather = 'https://api.openweathermap.org/data/2.5/weather?&appid=5a1da4fac36f0290c65b32d9b83adfd0&lan=es';
    let cityUrl = '&q=';

    let urlForecast = 'https://api.openweathermap.org/data/2.5/forecast?&appid=5a1da4fac36f0290c65b32d9b83adfd0&lan=es';
    
    const [weather, setWeather] = useState([]);
    const [forecast, setForecast] = useState([]);
    const [loading, setLoading] = useState(false);
    const [show, setShow] = useState(false);
    const [location, setLocation] = useState('');

    const getLocation = async (loc) => {
        setLoading(true);
        setLocation(loc);

        urlWeather = urlWeather + cityUrl + loc;

        //weather ************************

        await fetch(urlWeather).then((response) => {
            if(!response.ok) throw {response}
        return response.json();
        }).then((weatherData) =>{
            console.log(weatherData);
            setWeather(weatherData);
        }).catch(error => {
            console.log(error);
            setLoading(false);
            setShow(false);
    });

        //forecast ************************
        urlForecast = urlForecast + cityUrl + loc;

        await fetch(urlForecast).then((response) => {
            if(!response.ok) throw {response}
        return response.json();
        }).then((forecastData) =>{
            console.log(forecastData);
            setForecast(forecastData);

            setLoading(false);
            setShow(true);

        }).catch(error => {
            console.log(error);
            setLoading(false);
            setShow(false);
    });
    }
    
    return (
        <div>
            <React.Fragment>
                
                <Form
                    newLocation = {getLocation}
                />    

                <Card
                    showData = {show}
                    loadingData = {loading}
                    weather = {weather}
                    forecast = {forecast}
                />

            </React.Fragment>
        </div>
    );
}

export default WeatherPanel;
