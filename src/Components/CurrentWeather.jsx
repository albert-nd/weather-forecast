import React from "react";
import { getWeatherIcon } from "../Utility/WeatherIcons";

const CurrentWeather = ({ data, city }) => {
  if (!data) return null;
  const c = data.current;

  const base = import.meta.env.BASE_URL; // ✅ For public images

  return (
    <div className="space-y-5 mt-6">
      {/* Main Card */}
      <div
        className="relative p-4 sm:p-6 rounded-xl text-white bg-cover bg-center overflow-hidden min-h-[180px] sm:min-h-[220px]"
        style={{ backgroundImage: `url(${base}weather/bg-today-large.svg)` }}
      >
        <div className="absolute inset-0 bg-black/40"></div>

        <div className="relative flex flex-col sm:flex-row justify-between items-center gap-4">
          {/* City */}
          <h2 className="text-xl sm:text-4xl font-bold text-center sm:text-left">
            {city}
          </h2>

          {/* Icon + Temp */}
          <div className="flex items-center gap-3">
            <img
              src={getWeatherIcon(c.weather_code)}
              alt="weather"
              className="w-12 h-12 sm:w-16 sm:h-16"
            />
            <p className="text-3xl sm:text-6xl font-bold">
              {Math.round(c.temperature_2m)}°
            </p>
          </div>
        </div>
      </div>

      {/* Metrics */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        <Metric label="Feels Like" value={`${Math.round(c.apparent_temperature)}°`} />
        <Metric label="Humidity" value={`${c.relative_humidity_2m}%`} />
        <Metric label="Wind" value={`${c.wind_speed_10m} km/h`} />
        <Metric label="Rain" value={`${c.precipitation} mm`} />
      </div>
    </div>
  );
};

const Metric = ({ label, value }) => (
  <div className="bg-blue-900/80 p-3 sm:p-4 rounded-lg text-white text-center">
    <p className="text-xs sm:text-sm opacity-70">{label}</p>
    <p className="text-base sm:text-lg font-bold">{value}</p>
  </div>
);

export default CurrentWeather;
