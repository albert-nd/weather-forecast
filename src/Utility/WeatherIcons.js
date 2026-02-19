// Import all weather icons
// import iconClearSky from "./weather/icon-clear-sky.webp";
import iconPartlyCloudy from "@weather/icon-partly-cloudy.webp";
import iconOvercast from "@weather/icon-overcast.webpt.webp";
import iconFog from "@weather/icon-fog.webp";
import iconRain from "@weather/icon-rain.webp";
import iconSnow from "@weather/icon-snow.webp";
import iconStorm from "@weather/icon-storm.webp";

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
