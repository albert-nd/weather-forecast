import React from 'react'
import { getWeatherIcon } from "../Utility/WeatherIcons";

const DailyForecast = ({ daily }) => {
  return (
    <div className="grid grid-cols-7 gap-2 mt-6">
      <p className="col-span-7 text-start font-bold text-gray-500">Daily forecast</p>
      {daily.time.map((d, i) => (
        <div key={d} className="bg-blue-800/90 p-2 rounded-xl text-center text-white">
          
          <p className="text-sm">
            {new Date(d).toLocaleDateString("en", { weekday: "short" })}
          </p>

          {/* Weather Icon */}
          <img
            src={getWeatherIcon(daily.weather_code[i])}
            alt="weather"
            className="w-10 h-10 mx-auto my-1"
          />

          <p className="text-lg font-bold">{daily.temperature_2m_max[i]}°</p>
          <p className="text-xs opacity-60">{daily.temperature_2m_min[i]}°</p>

        </div>
      ))}
    </div>
  );
};

export default DailyForecast;
