/* eslint-disable react/prop-types */
import React from 'react';
import '../styles/HourlyWeatherCard.css';

export default function HourlyWeatherCard(props) {
  let tempUnitsToDisplay = '';
  if (props.units === 'metric') {
    tempUnitsToDisplay = '°C';
  } else if (props.units === 'imperial') {
    tempUnitsToDisplay = '°F';
  }
  const timeString = props.hour;

  return (
    <div className="hw-card">
      <div className="hw-time">{timeString}</div>
      <img 
        alt="Current weather icon"
        src={`http://openweathermap.org/img/wn/${props.icon}@2x.png`}
        className="hw-icon"
      />
      <div className="hw-description">{props.description}</div>
      <div className="hw-temperature">{Math.round(props.temperature)}{tempUnitsToDisplay}</div>
    </div>
  );
}
