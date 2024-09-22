import React, { useEffect, useState } from "react";
import "./WeatherApp.css";
import search_icon from "../Assets/search.png";
import clear_icon from "../Assets/clear.png";
import cloud_icon from "../Assets/cloud.png";
import drizzle_icon from "../Assets/drizzle.png";
import rain_icon from "../Assets/rain.png";
import snow_icon from "../Assets/snow.png";
import wind_icon from "../Assets/wind.png";
import humidity_icon from "../Assets/humidity.png";

const WeatherApp = () => {
  const api = {
    key: "0bc56f5fea00f8e1fe5a38607b50f478",
    base: "https://api.openweathermap.org/data/2.5",
  };

  const [cityWeather, setCityWeather] = useState([]);

  const [city, setCity] = useState("");
  const handleInputValue = (event) => {
    setCity(event.target.value);
  };

  const fetchData = async () => {
    await fetch(`${api.base}/weather?q=${city}&units=Metric&appid=${api.key}`)
      .then((res) => res.json())
      .then((res) => setCityWeather(res))
      .then(() => {
        console.log(cityWeather);
      });
  };

  const WeatherImg = () => {
    const [weatherIcon, setWeatherIcon] = useState(null);
    if (
      cityWeather.weather[0].icon === "01d" ||
      cityWeather.weather[0].icon === "01n"
    ) {
      setWeatherIcon(clear_icon);
    } else if (
      cityWeather.weather[0].icon === "02d" ||
      cityWeather.weather[0].icon === "02n"
    ) {
      setCityWeather(rain_icon);
    } else if (
      cityWeather.weather[0].icon === "03d" ||
      cityWeather.weather[0].icon === "03n"
    ) {
      setCityWeather(drizzle_icon);
    } else if (
      cityWeather.weather[0].icon === "04d" ||
      cityWeather.weather[0].icon === "04n"
    ) {
      setCityWeather(cloud_icon);
    } else if (
      cityWeather.weather[0].icon === "09d" ||
      cityWeather.weather[0].icon === "09n"
    ) {
      setCityWeather(rain_icon);
    } else if (
      cityWeather.weather[0].icon === "10d" ||
      cityWeather.weather[0].icon === "10n"
    ) {
      setCityWeather(rain_icon);
    } else if (
      cityWeather.weather[0].icon === "13d" ||
      cityWeather.weather[0].icon === "13n"
    ) {
      setCityWeather(snow_icon);
    } else {
      setCityWeather(rain_icon);
    }
    return console.log(weatherIcon);
  };

  return (
    <div className="container">
      <div className="top-bar">
        <input
          type="text"
          className="cityInput"
          placeholder="Search"
          onChange={handleInputValue}
        />
        <div className="search-icon" onClick={fetchData}>
          <img src={search_icon} alt="" />
        </div>
      </div>
      <div className="weather-image">
        <img src={WeatherImg} alt="" />
      </div>
      <div className="weather-temp">
        {cityWeather ? <p>{cityWeather.name}</p> : null}
      </div>
      <div className="weather-location">
        {cityWeather.main ? (
          <h1>{Math.round(cityWeather.main.temp)} C</h1>
        ) : null}
      </div>
      <div className="data-container">
        <div className="element">
          <img src={humidity_icon} alt="" className="icon" />
          <div className="data">
            <div className="humidity-percent">
              {cityWeather.main ? `${cityWeather.main.humidity}` : null}
            </div>
            <div className="text">{cityWeather.main ? "Humidity" : null}</div>
          </div>
        </div>
        <div className="element">
          <img src={wind_icon} alt="" className="icon" />
          <div className="data">
            <div className="humidity-percent">
              {cityWeather.wind ? `${cityWeather.wind.speed} km/h` : null}
            </div>
            <div className="text">{cityWeather.wind ? "Wind" : null}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherApp;
