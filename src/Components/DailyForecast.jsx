import React from "react";
import { getWeatherIcon } from "../Utility/WeatherIcons";

const DailyForecast = ({ daily }) => {
  return (
    <div className="mt-6">
      <p className="font-bold text-gray-500 mb-3">Daily Forecast</p>

      <div className="flex gap-3 overflow-x-auto pb-2">
        {daily.time.map((d, i) => (
          <div
            key={d}
            className="min-w-[90px] bg-blue-800/90 p-3 rounded-xl text-center text-white"
          >
            <p className="text-sm">
              {new Date(d).toLocaleDateString("en", { weekday: "short" })}
            </p>

            <img
              src={getWeatherIcon(daily.weather_code[i])}
              alt="weather"
              className="w-10 h-10 mx-auto my-1"
            />

            <p className="text-lg font-bold">
              {daily.temperature_2m_max[i]}°
            </p>
            <p className="text-xs opacity-60">
              {daily.temperature_2m_min[i]}°
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DailyForecast;
