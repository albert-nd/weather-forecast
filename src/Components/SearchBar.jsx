import React, { useState } from "react";
import axios from "axios";

const SearchBar = ({ onSelect }) => {
  const [q, setQ] = useState("");
  const [loading, setLoading] = useState(false);

  const search = async () => {
    if (!q.trim()) return;

    try {
      setLoading(true);

      const res = await axios.get(
        `https://geocoding-api.open-meteo.com/v1/search?name=${q}`
      );

      if (res.data.results?.length > 0) {
        onSelect(res.data.results[0]);
        setQ("");
      }
    } catch (err) {
      console.error("Search failed", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full max-w-md mx-auto">
      <div className="flex items-center bg-white rounded-lg gap-2 shadow-md overflow-hidden">
        
        <input
          type="text"
          placeholder="Search for a city"
          value={q}
          onChange={(e) => setQ(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && search()}
          className="flex-1 px-4 py-3 text-black font-medium focus:outline-none"
        />

        <button
          onClick={search}
          disabled={loading}
          className="bg-blue-500 hover:bg-blue-600 text-white px-5 py-3 flex items-center justify-center disabled:opacity-60 transition"
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
    </div>
  );
};

export default SearchBar;
