import { useEffect, useState } from "react";
import axios from "axios";
import React from "react"
import SearchBar from "./Components/SearchBar"
import CurrentWeather from "./Components/CurrentWeather"
import HourlyForecast from "./Components/HourlyForecast"
import DailyForecast from "./Components/DailyForecast"
import UnitToggle from "./Components/UnitToggle"
import ErrorBox from "./Components/ErrorBox"
import Skeleton from "./Components/Skeleton"

function App() {
  const [weather, setWeather] = useState(null);
  const [city, setCity] = useState("Your Location");
  const [units, setUnits] = useState("metric");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const fetchWeather = async (lat, lon) => {
    try {
      setLoading(true);
      const unitParams =
        units === "imperial"
          ? "&temperature_unit=fahrenheit&wind_speed_unit=mph"
          : "";

      const url = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current=temperature_2m,relative_humidity_2m,apparent_temperature,precipitation,weather_code,wind_speed_10m&hourly=temperature_2m,weather_code&daily=temperature_2m_max,temperature_2m_min,sunrise,sunset,weather_code&timezone=auto${unitParams}`;

      const res = await axios.get(url);
      setWeather(res.data);
      setError("");
    } catch {
      setError("Failed to load weather data.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (pos) => fetchWeather(pos.coords.latitude, pos.coords.longitude),
      () => setError("Geolocation denied")
    );
  }, []);

  const hour = new Date().getHours();
  const night = hour > 18 || hour < 6;

  return (
    <div className={`${night ? "bg-slate-900 text-white" : "bg-sky-200 text-black"} h-full min-h-screen px-6 py-4`}>
      
      {/* Navbar */}
      <div className="flex justify-between items-center mb-4">
        <img src="/weather/logo.svg" alt="logo" className="w-24" />
        <UnitToggle units={units} setUnits={setUnits} />
      </div>

      <h1 className="text-4xl font-bold text-center mb-5">
        How's the sky looking today?
      </h1>

      {/* Search */}
      <div className="flex justify-center mb-6">
        <SearchBar
          onSelect={(loc) => {
            setCity(loc.name);
            fetchWeather(loc.latitude, loc.longitude);
          }}
        />
      </div>

      {/* Main Grid */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-6">
        
        {/* Left */}
        <div className="space-y-6 ml-5 w-142">
          {error && <ErrorBox msg={error} />}
          {loading && <Skeleton />}
          {!loading && weather && <CurrentWeather data={weather} city={city} />}
          {weather && <DailyForecast daily={weather.daily} />}
        </div>

        {/* Right */}
        <div className="space-y-6 w-80 mx-30">
          {weather && <HourlyForecast hourly={weather.hourly} />}
        </div>

      </div>

      {/* Sunrise / Sunset */}
      {weather && (
        <div className="text-sm mt-4 text-center">
          🌅 {new Date(weather.daily.sunrise[0]).toLocaleTimeString()} |
          🌇 {new Date(weather.daily.sunset[0]).toLocaleTimeString()}
        </div>
      )}

    </div>
  );
}

export default App;
