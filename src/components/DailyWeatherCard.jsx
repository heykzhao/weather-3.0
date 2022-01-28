/* eslint-disable react/prop-types */
import React from 'react';
import '../styles/DailyWeatherCard.css';

export default function DailyWeatherCard(props) {
  let tempUnitsToDisplay = '';
  if (props.units === 'metric') {
    tempUnitsToDisplay = '°C';
  } else if (props.units === 'imperial') {
    tempUnitsToDisplay = '°F';
  }
  let dateString = props.day;

  const totalRangeInWeek = props.maxTemperatureInWeek - props.minTemperatureInWeek;
  const totalRange = props.maxTemperature - props.minTemperature;
  const percentageWidth = Math.floor((totalRange / totalRangeInWeek) * 100);
  const rangeShiftRight = Math.floor(((props.minTemperature - props.minTemperatureInWeek) / totalRangeInWeek) * 100);

  const rangeStyle = {
    'width': percentageWidth.toString() + '%',
    'marginLeft': rangeShiftRight.toString() + '%',
    'height': '100%',
    'backgroundColor': 'black',
    'border': '1px black',
    'borderLeftStyle': 'solid',
    'borderRightStyle': 'solid',
    'borderRadius': '10px',
  }

  return (
    <div className="dw-card">
      <div className="dw-day">{dateString}</div>
      <img 
        alt="Current weather icon"
        src={`http://openweathermap.org/img/wn/${props.icon}@2x.png`}
        className="dw-icon"
      />
      <div className="dw-description">{props.description}</div>
      <div className="dw-min-max">
        <div className="dw-min-temperature">{Math.round(props.minTemperature)}{tempUnitsToDisplay}</div>
        <div className="dw-range-bar">
          <div className="dw-range" style={rangeStyle}></div>
        </div>
        <div className="dw-max-temperature">{Math.round(props.maxTemperature)}{tempUnitsToDisplay}</div>
      </div>
    </div>
  );
}
