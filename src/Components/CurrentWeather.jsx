import React from "react";
import { getWeatherIcon } from "../Utility/WeatherIcons";

const CurrentWeather = ({ data, city }) => {
  if (!data) return null;
  const c = data.current;

  return (
    <div className="space-y-6">
      <div
        className="relative p-6 rounded-xl text-white bg-cover bg-center overflow-hidden min-h-[200px]"
        style={{ backgroundImage: "url('/weather/bg-today-large.svg')" }}
      >
        <div className="absolute inset-0 bg-black/30"></div>

        <div className="relative flex flex-col sm:flex-row justify-between items-center gap-4">
          <h2 className="text-2xl sm:text-4xl font-bold text-center sm:text-left">
            {city}
          </h2>

          <div className="flex items-center gap-4">
            <img
              src={getWeatherIcon(c.weather_code)}
              alt="weather"
              className="w-14 h-14 sm:w-16 sm:h-16"
            />
            <p className="text-4xl sm:text-6xl font-bold">
              {c.temperature_2m}°
            </p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        <Metric label="Feels Like" value={`${c.apparent_temperature}°`} />
        <Metric label="Humidity" value={`${c.relative_humidity_2m}%`} />
        <Metric label="Wind" value={`${c.wind_speed_10m} km/h`} />
        <Metric label="Precipitation" value={`${c.precipitation} mm`} />
      </div>
    </div>
  );
};

const Metric = ({ label, value }) => (
  <div className="bg-blue-800/80 p-4 rounded-lg text-white text-center">
    <p className="text-xs opacity-70">{label}</p>
    <p className="text-lg font-bold">{value}</p>
  </div>
);

export default CurrentWeather;
