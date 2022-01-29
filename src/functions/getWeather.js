/* eslint-disable no-undef */
const APIKey = process.env.REACT_APP_API_KEY;

export async function getCityCoordinates(city) {
  try {
    const response = await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=${APIKey}`);
    const data = await response.json();
    const currentCityCoord = {
      lat: data[0].lat,
      lon: data[0].lon,
    };
    return currentCityCoord;
  } catch (error) {
    return console.warn(error);
  }
}

async function getWeatherArrayHourly(obj) {
  const weatherArray = [];
  const firstArrayItem = {
    hour: "Now",
    temperature: obj[0].temp,
    description: obj[0].weather[0].main,
    icon: obj[0].weather[0].icon,
  }
  weatherArray.push(firstArrayItem);
  for (let i = 1; i < obj.length; i += 1) {
    const arrayItem = {
      hour: new Date(obj[i].dt * 1000).toLocaleTimeString("en-us", {hour12: true, hour: "numeric"}),
      temperature: obj[i].temp,
      description: obj[i].weather[0].main,
      icon: obj[i].weather[0].icon,
    };
    weatherArray.push(arrayItem);
  }
  return weatherArray;
}

async function getWeatherArrayDaily(obj) {
  const weatherArray = [];
  const firstArrayItem = {
    day: "Today",
    minTemperature: obj[0].temp.min,
    maxTemperature: obj[0].temp.max,
    icon: obj[0].weather[0].icon,
  }
  weatherArray.push(firstArrayItem);
  for (let i = 1; i < obj.length; i += 1) {
    const arrayItem = {
      day: new Date(obj[i].dt * 1000).toLocaleDateString("en-us", {weekday: "short"}),
      minTemperature: obj[i].temp.min,
      maxTemperature: obj[i].temp.max,
      icon: obj[i].weather[0].icon,
    };
    weatherArray.push(arrayItem);
  }
  return weatherArray;
}

export async function getCurrentCoordinatesWeather(lat, lon, units) {
  try {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=${units}&exclude=minutely&appid=${APIKey}`);
    const data = await response.json();

    const { current, hourly, daily } = data;

    const currentWeather = {
      currentTime: new Date(current.dt * 1000),
      currentTemp: current.temp,
      currentFeelsLike: current.feels_like,
      currentHumidity: current.humidity,
      currentWindSpeed: current.wind_speed,
      currentDescription: current.weather[0].main,
      currentDetails: current.weather[0].description,
      currentIcon: current.weather[0].icon,
    };

    const hourlyWeather = await getWeatherArrayHourly(hourly);

    const dailyWeather = await getWeatherArrayDaily(daily);

    const allWeather = {
      currentWeather,
      hourlyWeather,
      dailyWeather,
    };
    return allWeather;
  } catch (error) {
    return console.warn(error);
  }
}
