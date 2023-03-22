import React from 'react';
import Spinner from './Spinner';

const Card = ({loadingData, showData, weather, forecast}) => {

var today = new Date();
var day = today.getDate();
var month = today.getMonth() +1;
var year = today.getFullYear();
var date = day + '/' + month + '/' + year;
var url = '';
var iconUrl = '';

var iconUrl3 = '';
var iconUrl6 = '';
var iconUrl9 = '';

var forecastDate3 ='';
var forecastDate6 ='';
var forecastDate9 ='';



    if (loadingData){
        return <Spinner />;
    }

    if (showData){
        url = 'http://openweathermap.org/img/w/';
        iconUrl = url + weather.weather[0].icon + '.png';

        iconUrl3 = url + forecast.list[1].weather[0].icon + '.png';
        iconUrl6 = url + forecast.list[2].weather[0].icon + '.png';
        iconUrl9 = url + forecast.list[3].weather[0].icon + '.png';

        forecastDate3 = forecast.list[1].dt_txt.substring(8, 10) + '/' + forecast.list[1].dt_txt.substring(5, 7) + '/' + forecast.list[1].dt_txt.substring(0, 4) + ' ' + forecast.list[1].dt_txt.substring(11, 13)
        forecastDate6 = forecast.list[2].dt_txt.substring(8, 10) + '/' + forecast.list[2].dt_txt.substring(5, 7) + '/' + forecast.list[2].dt_txt.substring(0, 4) + ' ' + forecast.list[2].dt_txt.substring(11, 13)
        forecastDate9 = forecast.list[3].dt_txt.substring(8, 10) + '/' + forecast.list[3].dt_txt.substring(5, 7) + '/' + forecast.list[3].dt_txt.substring(0, 4) + ' ' + forecast.list[3].dt_txt.substring(11, 13)

    }

    return (
        <div className='mt-5'>
            {
                showData === true ? (
                    <div className='conteiner'>
                        <div className='card mb-3 mx-auto bg-dark text-light'>
                            <div className='row g-0'>
                                <div className='col-md-4'> 
                                <h3 className='card-title'>{weather.name}</h3>
                                <p className='card-date'>{date}</p>
                                <h1 className='card-temp'>{(weather.main.temp - 273.15).toFixed(1)}°C</h1>
                                <p className='card-desc'><img src={iconUrl} alt='icono' />{weather.weather[0].description}</p>
                                <img src='https://images.pexels.com/photos/1980720/pexels-photo-1980720.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' className='img-fuid rounded-start' alt='imagen fondo' />
                                </div>
                                <div className='col-md-8'>
                                    <div className='card-body text-start mt-2'>
                                        <h5 className='card-text'>Temperatura maxima: {(weather.main.temp_max - 273.15).toFixed(1)}°C</h5>
                                        <h5 className='card-text'>Temperatura minima: {(weather.main.temp_min - 273.15).toFixed(1)}°C</h5>
                                        <h5 className='card-text'>Sensacion termica: {(weather.main.feels_like - 273.15).toFixed(1)}°C</h5>
                                        <h5 className='card-text'>Humedad: {weather.main.humidity}%</h5>
                                        <h5 className='card-text'>Velocidad del viento: {weather.wind.speed}m/s</h5>
                                    </div>
                                <hr/>
                                <div className='row mt-4'>
                                    <div className='col'>
                                        <p>{forecastDate3}h</p>
                                        <p className='description'><img src={iconUrl3} alt='icono tiempo' /> {forecast.list[1].weather[0].description}</p>
                                        <p className='temp'>{(forecast.list[1].main.temp - 273.15).toFixed(1)}°C</p>
                                    </div>
                                    <div className='col'>
                                        <p>{forecastDate3}h</p>
                                        <p className='description'><img src={iconUrl6} alt='icono tiempo' /> {forecast.list[2].weather[0].description}</p>
                                        <p className='temp'>{(forecast.list[2].main.temp - 273.15).toFixed(1)}°C</p>
                                    </div>
                                    <div className='col'>
                                        <p>{forecastDate3}h</p>
                                        <p className='description'><img src={iconUrl9} alt='icono tiempo' /> {forecast.list[3].weather[0].description}</p>
                                        <p className='temp'>{(forecast.list[3].main.temp - 273.15).toFixed(1)}°C</p>
                                    </div>
                                </div>

                                </div>

                            </div>
                        </div>
                    </div>

                ) : (
                    <h2 className='text-light'> Sin Datos </h2>
                )
            }

            
        </div>
    );
}

export default Card;
