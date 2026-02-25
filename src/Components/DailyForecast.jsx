import React from "react";
import { getWeatherIcon } from "../Utility/WeatherIcons";

const DailyForecast = ({ daily }) => {
  if (!daily) return null;

  return (
    <div className="mt-6">
      <p className="font-bold text-gray-500 mb-3">Daily Forecast</p>

      <div className="flex gap-3 overflow-x-auto pb-3 scrollbar-hide">
        {daily.time.map((d, i) => (
          <div
            key={d}
            className="min-w-[80px] sm:min-w-[100px] bg-blue-900/90 p-3 rounded-xl text-center text-white flex-shrink-0"
          >
            <p className="text-xs sm:text-sm">
              {new Date(d).toLocaleDateString("en", { weekday: "short" })}
            </p>

            <img
              src={getWeatherIcon(daily.weather_code[i])}
              alt="weather"
              className="w-8 h-8 sm:w-10 sm:h-10 mx-auto my-1"
            />

            <p className="text-base sm:text-lg font-bold">
              {Math.round(daily.temperature_2m_max[i])}°
            </p>
            <p className="text-xs opacity-60">
              {Math.round(daily.temperature_2m_min[i])}°
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DailyForecast;
