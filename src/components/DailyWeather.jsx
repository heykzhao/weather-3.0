/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react';
import DailyWeatherCard from './DailyWeatherCard';
import "../styles/DailyWeather.css";

export default function DailyWeather({ item, units }) {
  let allTemperatures = [];
  for (let i=0; i < item.length; i++) {
    allTemperatures.push(item[i].minTemperature)
    allTemperatures.push(item[i].maxTemperature)
  }
  const maxTemperatureInWeek = Math.max(...allTemperatures);
  const minTemperatureInWeek = Math.min(...allTemperatures);

  console.log(maxTemperatureInWeek);
  console.log(minTemperatureInWeek);

  const dailyWeatherCards = item.map((item, index) => {
    return (
      <DailyWeatherCard 
        key={index}
        day={item.day}
        icon={item.icon}
        minTemperature={item.minTemperature}
        maxTemperature={item.maxTemperature}
        units={units}
        minTemperatureInWeek={minTemperatureInWeek}
        maxTemperatureInWeek={maxTemperatureInWeek}
      />
    )
  })
  return (
      <div className="daily-weather-container">
        <p className="daily-weather-text">Daily Forecast</p>
        <div className="daily-weather-cards">
          {dailyWeatherCards}
        </div>
      </div>  
  );
}
