export const getWeatherIcon = (code) => {
  const base = import.meta.env.BASE_URL; // dynamically adds /REPO_NAME/ on GitHub Pages

  if (code === 0) return `${base}weather/icon-clear-sky.webp`;
  if (code === 1 || code === 2) return `${base}weather/icon-partly-cloudy.webp`;
  if (code === 3) return `${base}weather/icon-overcast.webp`;
  if (code === 45 || code === 48) return `${base}weather/icon-fog.webp`;

  if ((code >= 51 && code <= 67) || (code >= 80 && code <= 82))
    return `${base}weather/icon-rain.webp`;

  if ((code >= 71 && code <= 77) || (code >= 85 && code <= 86))
    return `${base}weather/icon-snow.webp`;

  if (code >= 95) return `${base}weather/icon-storm.webp`;

  return `${base}weather/icon-clear-sky.webp`;
};
