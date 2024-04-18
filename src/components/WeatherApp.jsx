"use client";
import { useState, useEffect } from "react";
import axios from "axios";

const WeatherApp = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [city, setCity] = useState("Jaipur");

  useEffect(() => {
    const fetchWeatherData = async () => {
      const apiKey = "6f83c2d2b9144154ace81212231912";
      const apiUrl = `https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${city}&days=5&aqi=no&alerts=no`;

      try {
        const response = await axios.get(apiUrl);
        setWeatherData(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchWeatherData();
  }, [city]);

  const handleCityChange = (e) => {
    setCity(e.target.value);
  };

  return (
    <div className="flex flex-col justify-center items-center gap-3 px-10 py-7 mx-3 shadow-md shadow-black rounded-md">
      {/* Input for city selection */}
      <input
        type="text"
        placeholder="Search Your City"
        className="w-full py-3 px-5 text-white rounded-lg text-xl font-medium outline-none bg-zinc-800"
        onChange={handleCityChange}
      />
      
      {/* Display current weather */}
      {weatherData && (
        <div className="w-full flex flex-col gap-3">
          <div className="flex flex-row justify-between items-center w-full mt-3">
            <h1 className="text-3xl font-semibold">{weatherData.location.name}</h1>
            <h1 className="text-4xl font-semibold">{weatherData.current.temp_c}°C</h1>
          </div>
          <div className="mt-3 flex flex-wrap justify-between items-center gap-3 w-full">
            <h1 className="text-2xl font-medium">Condition: {weatherData.current.condition.text}</h1>
            <h1 className="text-2xl font-medium">Wind Speed: {weatherData.current.wind_kph} km/h</h1>
          </div>
          <div className="flex flex-wrap justify-between items-center gap-3 w-full">
            <h1 className="text-2xl font-medium">Humidity: {weatherData.current.humidity}%</h1>
            {/* You can add more details here */}
          </div>
          <div className="flex flex-col justify-start items-center gap-3">
          <div className="flex flex-wrap justify-between items-center gap-3 w-full">
            <h1 className="text-2xl font-medium">Sunrise: {weatherData.forecast.forecastday[0].astro.sunrise}</h1>
            <h1 className="text-2xl font-medium">Sunset: {weatherData.forecast.forecastday[0].astro.sunset}</h1>
          </div>
          <div className="flex flex-wrap justify-between items-center gap-3 w-full">
            <h1 className="text-2xl font-medium">Moonrise: {weatherData.forecast.forecastday[0].astro.moonrise}</h1>
            <h1 className="text-2xl font-medium">Moonset: {weatherData.forecast.forecastday[0].astro.moonset}</h1>
          </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default WeatherApp;