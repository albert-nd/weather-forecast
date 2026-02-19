import React from 'react'

export default function UnitToggle({ units, setUnits }) {
  return (
    <select
      className="bg-gray-600/60 font-bold p-2 rounded"
      value={units}
      onChange={(e) => setUnits(e.target.value)}
    >
      <option value="metric">Metric (°C, km/h)</option>
      <option value="imperial">Imperial (°F, mph)</option>
    </select>
  );
}
