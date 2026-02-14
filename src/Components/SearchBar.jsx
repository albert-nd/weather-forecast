import React, { useState } from "react";
import axios from "axios";

const SearchBar = ({ onSelect }) => {
  const [q, setQ] = useState("");
  const [loading, setLoading] = useState(false);

  const search = async () => {
    if (!q) return;
    try {
      setLoading(true);

      const res = await axios.get(
        `https://geocoding-api.open-meteo.com/v1/search?name=${q}`
      );

      if (res.data.results?.length > 0) {
        onSelect(res.data.results[0]);
      }
    } catch (err) {
      console.error("Search failed", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex gap-2 justify-center mt-4 items-center">
      <input
        className="py-2 px-9 bg-gray-800/50 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-black font-bold placeholder-gray-300"
        placeholder="Search for a city"
        onChange={(e) => setQ(e.target.value)}
      />

      <button
        onClick={search}
        className="px-4 py-2 bg-blue-500 text-white font-bold hover:bg-blue-600 rounded-lg flex items-center gap-2"
      >
        {loading ? (
          <img
            src="/weather/icon-loading.svg"
            alt="loading"
            className="w-5 h-5 animate-spin"
          />
        ) : (
          "Search"
        )}
      </button>
    </div>
  );
};

export default SearchBar;
