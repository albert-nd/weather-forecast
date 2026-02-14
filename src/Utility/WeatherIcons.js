export const getWeatherIcon = (code) => {
  if (code === 0) return "/weather/icon-clear-sky.webp";
  if (code === 1 || code === 2) return "/weather/icon-partly-cloudy.webp";
  if (code === 3) return "/weather/icon-overcast.webp";
  if (code === 45 || code === 48) return "/weather/icon-fog.webp";

  // Rain codes
  if (code >= 51 && code <= 67) return "/weather/icon-rain.webp";
  if (code >= 80 && code <= 82) return "/weather/icon-rain.webp";

  // Snow codes
  if (code >= 71 && code <= 77) return "/weather/icon-snow.webp";
  if (code >= 85 && code <= 86) return "/weather/icon-snow.webp";

  // Thunderstorm
  if (code >= 95) return "/weather/icon-storm.webp";

  return "/weather/icon-clear-sky.webp";
};
