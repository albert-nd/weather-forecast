import { useEffect, useState } from "react";
import axios from "axios";
import SearchBar from "./Components/SearchBar";
import CurrentWeather from "./Components/CurrentWeather";
import HourlyForecast from "./Components/HourlyForecast";
import DailyForecast from "./Components/DailyForecast";
import UnitToggle from "./Components/UnitToggle";
import ErrorBox from "./Components/ErrorBox";
import Skeleton from "./Components/Skeleton";

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
    } catch (err) {
      console.error(err);
      setError("Failed to load weather data.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (pos) => fetchWeather(pos.coords.latitude, pos.coords.longitude),
      () => {
        setError("Geolocation denied");
        setLoading(false);
      }
    );
  }, [units]);

  const hour = new Date().getHours();
  const night = hour > 18 || hour < 6;

  const base = import.meta.env.BASE_URL; // ✅ for public images

  return (
    <div
      className={`${
        night ? "bg-slate-900 text-white" : "bg-sky-200 text-black"
      } min-h-screen w-full overflow-x-hidden`}
    >
      <div className="px-4 py-5 sm:px-6 max-w-6xl mx-auto">
        {/* Navbar */}
        <div className="flex flex-col sm:flex-row justify-between items-center mb-6 gap-4">
          <img
            src={`${base}weather/logo.svg`}
            alt="logo"
            className="w-16 sm:w-20"
          />
          <UnitToggle units={units} setUnits={setUnits} />
        </div>

        {/* Heading */}
        <h1 className="text-5xl sm:text-3xl font-extrabold text-center mb-6 leading-snug">
          How's the sky looking today?
        </h1>

        {/* Search */}
        <div className="mb-8">
          <SearchBar
            onSelect={(loc) => {
              setCity(loc.name);
              fetchWeather(loc.latitude, loc.longitude);
            }}
          />
        </div>

        {/* Content */}
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Left */}
          <div className="space-y-6 flex-1">
            {error && <ErrorBox msg={error} />}
            {loading && <Skeleton />}
            {!loading && weather && <CurrentWeather data={weather} city={city} />}
            {weather && <DailyForecast daily={weather.daily} />}
          </div>

          {/* Right */}
          {weather && (
            <div className="flex-1 mt-4 lg:mt-0">
              <div className="overflow-x-auto">
                <HourlyForecast hourly={weather.hourly} />
              </div>
            </div>
          )}
        </div>

        {/* Sunrise / Sunset */}
        {weather && (
          <div className="text-xs sm:text-sm mt-8 text-center opacity-80">
            🌅 {new Date(weather.daily.sunrise[0]).toLocaleTimeString()} &nbsp;|&nbsp;
            🌇 {new Date(weather.daily.sunset[0]).toLocaleTimeString()}
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
