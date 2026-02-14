import React from "react";
import { getWeatherIcon } from "../Utility/WeatherIcons";

const CurrentWeather = ({ data, city }) => {
  if (!data) return null;
  const c = data.current;

  return (
    <div className="space-y-4">
      {/* Main Weather Card */}
      <div
        className="relative p-6 rounded-xl text-white bg-cover bg-center overflow-hidden min-h-[220px]"
        style={{ backgroundImage: "url('/weather/bg-today-large.svg')" }}
      >
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/30"></div>

        {/* Content */}
        <div className="relative flex justify-between items-center h-full">
          {/* City */}
          <h2 className="text-4xl font-extrabold">{city}</h2>

          {/* Temp + Icon */}
          <div className="flex items-center gap-4">
            <img
              src={getWeatherIcon(c.weather_code)}
              alt="weather"
              className="w-16 h-16"
            />
            <p className="text-7xl font-bold">{c.temperature_2m}°</p>
          </div>
        </div>
      </div>

      {/* Metrics Card */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-white">
        <div className="bg-blue-800/80 p-4 rounded-lg">
          <p className="text-sm opacity-70">Feels Like</p>
          <p className="text-xl font-bold">{c.apparent_temperature}°</p>
        </div>

        <div className="bg-blue-800/80 p-4 rounded-lg">
          <p className="text-sm opacity-70">Humidity</p>
          <p className="text-xl font-bold">{c.relative_humidity_2m}%</p>
        </div>

        <div className="bg-blue-800/80 p-4 rounded-lg">
          <p className="text-sm opacity-70">Wind</p>
          <p className="text-xl font-bold">{c.wind_speed_10m} km/h</p>
        </div>

        <div className="bg-blue-800/80 p-4 rounded-lg">
          <p className="text-sm opacity-70">Precipitation</p>
          <p className="text-xl font-bold">{c.precipitation} mm</p>
        </div>
      </div>
    </div>
  );
};

export default CurrentWeather;
