import React, { useState } from "react";
import { getWeatherIcon } from "../Utility/WeatherIcons";

const HourlyForecast = ({ hourly }) => {
  const [day, setDay] = useState(0);
  const start = day * 24;

  const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

  return (
    <div className="mt-6 text-white rounded-lg p-4 bg-gray-800/60">
      <div className="flex flex-wrap gap-2 mb-4">
        {days.map((d, index) => (
          <button
            key={d}
            onClick={() => setDay(index)}
            className={`px-3 py-1 rounded-full text-sm font-medium ${
              day === index
                ? "bg-white text-black"
                : "bg-white/10 hover:bg-white/20"
            }`}
          >
            {d}
          </button>
        ))}
      </div>

      <div className="flex flex-col gap-3 max-h-96 overflow-y-auto">
        {hourly.time.slice(start, start + 24).map((t, i) => (
          <div
            key={t}
            className="flex items-center justify-between w-full bg-blue-800/90 p-3 rounded-lg"
          >
            <div className="flex items-center gap-3">
              <img
                src={getWeatherIcon(hourly.weather_code[start + i])}
                alt="weather"
                className="w-10 h-10"
              />
              <p className="font-semibold text-sm">
                {new Date(t).toLocaleTimeString([], {
                  hour: "numeric",
                  minute: "2-digit",
                  hour12: true,
                })}
              </p>
            </div>

            <p className="text-lg font-bold">
              {hourly.temperature_2m[start + i]}°
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HourlyForecast;
