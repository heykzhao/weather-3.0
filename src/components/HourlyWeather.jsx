/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react';
import HourlyWeatherCard from './HourlyWeatherCard';
import '../styles/HourlyWeather.css';

export default function HourlyWeather({ item, units }) {
  const hourlyWeatherCards = item.map((item, index) => {
    return (
      <HourlyWeatherCard 
        key={index}
        hour={item.hour}
        icon={item.icon}
        temperature={item.temperature}
        description={item.description}
        units={units}
      />
    )
  })
  
  return (
    <div className="hourly-weather-container">
      <p className="hourly-weather-text">Hourly Forecast</p>
      <div className="hourly-weather-cards">
        {hourlyWeatherCards}
      </div>
    </div>
  );
}
