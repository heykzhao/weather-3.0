/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react';
import '../styles/CurrentWeather.css';

export default function CurrentWeather({ item, city, units }) {
  const {
    currentTime,
    currentTemp,
    currentFeelsLike,
    currentHumidity,
    currentWindSpeed,
    currentDescription,
    currentDetails,
    currentIcon,
  } = item;
  let tempUnitsToDisplay = '';
  let windSpeedUnitsToDisplay = '';

  if (units === 'metric') {
    tempUnitsToDisplay = '°C';
    windSpeedUnitsToDisplay = 'meters/sec';
  } else if (units === 'imperial') {
    tempUnitsToDisplay = '°F';
    windSpeedUnitsToDisplay = 'miles/hour';
  }

  const date = new Date(currentTime);
  const dayYearMonthDate = date.toLocaleString('en-us', {
    weekday: 'long', year: 'numeric', month: 'long', day: 'numeric',
  });
  const time = date.toLocaleTimeString([], {
    hour12: true, hour: '2-digit', minute: '2-digit',
  });

  const iconSource = `http://openweathermap.org/img/wn/${currentIcon}@2x.png`;

  return (
    <div className="current-weather-container">
      <div className="cw-card">
        <div className="cw cw-time-and-last-updated">
          <div className="cw cw-last-updated">Last updated at: </div>
          <div className="cw cw-current-time">{dayYearMonthDate} at {time}</div>
        </div>
        <div className="cw cw-city-and-temperature">
          <div className="cw cw-city-name">{city}</div>
          <div className="cw cw-temperature">{Math.round(currentTemp)}{tempUnitsToDisplay}</div>
          <div className="cw cw-feels-like">Feels Like: {Math.round(currentFeelsLike)}{tempUnitsToDisplay}</div>
        </div>
        <div className="cw cw-description-details-icon">
          <img
            alt="Current weather icon"
            src={iconSource}
            className="cw cw-icon"
          />
          <div className="cw cw-description-details-text">
            <div className="cw cw-description">{currentDescription}</div>
            <div className="cw cw-details">{currentDetails}</div>
          </div>
        </div>
        <div className="cw cw-humidity-wind-speed">
          <div className="cw cw-humidity"><span className="strong">Humidity:</span>{currentHumidity}%</div>
          <div className="cw cw-wind-speed"><span className="strong">Wind Speed:</span>{currentWindSpeed} {windSpeedUnitsToDisplay}</div>
        </div>
      </div>
    </div>
  );
}
