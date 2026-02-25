import React, { useState } from "react";
import { getWeatherIcon } from "../Utility/WeatherIcons";

const HourlyForecast = ({ hourly }) => {
  const [day, setDay] = useState(0);
  if (!hourly) return null;

  const start = day * 24;
  const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

  return (
    <div className="mt-6 text-white rounded-xl p-3 sm:p-4 bg-gray-800/70">
      {/* Day Selector */}
      <div className="flex flex-wrap gap-2 mb-4">
        {days.map((d, index) => (
          <button
            key={d}
            onClick={() => setDay(index)}
            className={`px-3 py-1 rounded-full text-xs sm:text-sm font-medium transition ${
              day === index
                ? "bg-white text-black"
                : "bg-white/10 hover:bg-white/20"
            }`}
          >
            {d}
          </button>
        ))}
      </div>

      {/* Hourly List */}
      <div className="flex flex-col gap-2 max-h-72 sm:max-h-96 overflow-y-auto">
        {hourly.time.slice(start, start + 24).map((t, i) => (
          <div
            key={t}
            className="flex items-center justify-between bg-blue-900/90 p-2 sm:p-3 rounded-lg"
          >
            <div className="flex items-center gap-2 sm:gap-3">
              <img
                src={getWeatherIcon(hourly.weather_code[start + i])}
                alt="weather"
                className="w-8 h-8 sm:w-10 sm:h-10"
              />
              <p className="font-medium text-xs sm:text-sm">
                {new Date(t).toLocaleTimeString([], {
                  hour: "numeric",
                  minute: "2-digit",
                  hour12: true,
                })}
              </p>
            </div>

            <p className="text-base sm:text-lg font-bold">
              {Math.round(hourly.temperature_2m[start + i])}°
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HourlyForecast;
