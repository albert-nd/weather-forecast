import React, { useState } from "react";
import { getWeatherIcon } from "../Utility/WeatherIcons";

const HourlyForecast = ({ hourly }) => {
  const [day, setDay] = useState(0);
  const start = day * 24;

  const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

  return (
    <div className="mt-6 text-white rounded-lg p-4 bg-gray-800/60">
      
      {/* Day toggle */}
      <div className="bg-white/10 p-1 rounded-lg flex w-fit mb-4">
        {days.map((d, index) => (
          <button
            key={d}
            onClick={() => setDay(index)}
            className={`px-2 py-1 rounded-full text-sm font-medium transition ${
              day === index ? "bg-white text-black" : "text-white hover:bg-white/20"
            }`}
          >
            {d}
          </button>
        ))}
      </div>

      {/* Hourly list */}
      <div className="flex flex-col gap-2 max-h-[400px] overflow-y-auto">
        {hourly.time.slice(start, start + 24).map((t, i) => (
          <div key={t} className="flex items-center justify-between w-67 bg-blue-800/90 p-3 rounded-lg">
            <div className="flex">
              <img
                src={getWeatherIcon(hourly.weather_code[start + i])}
                alt="weather"
                className="w-11 h-11"
              />

              <p className="font-bold w-20 text-md mt-3">
                {new Date(t).toLocaleTimeString([], {
                  hour: "numeric",
                  minute: "2-digit",
                  hour12: true,
                })}
              </p>

            </div>
            
            <div>
              <p className="text-lg font-bold">
              {hourly.temperature_2m[start + i]}°
            </p>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
};

export default HourlyForecast;
