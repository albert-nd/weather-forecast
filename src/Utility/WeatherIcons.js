// Import all weather icons
import iconClearSky from "./assets/weather/icon-clear-sky.webp";
import iconPartlyCloudy from "./assets/weather/icon-partly-cloudy.webp";
import iconOvercast from "./assets/weather/icon-overcast.webp";
import iconFog from "./assets/weather/icon-fog.webp";
import iconRain from "./assets/weather/icon-rain.webp";
import iconSnow from "./assets/weather/icon-snow.webp";
import iconStorm from "./assets/weather/icon-storm.webp";

export const getWeatherIcon = (code) => {
  if (code === 0) return iconClearSky;
  if (code === 1 || code === 2) return iconPartlyCloudy;
  if (code === 3) return iconOvercast;
  if (code === 45 || code === 48) return iconFog;

  // Rain codes
  if ((code >= 51 && code <= 67) || (code >= 80 && code <= 82)) return iconRain;

  // Snow codes
  if ((code >= 71 && code <= 77) || (code >= 85 && code <= 86)) return iconSnow;

  // Thunderstorm
  if (code >= 95) return iconStorm;

  return iconClearSky;
};
