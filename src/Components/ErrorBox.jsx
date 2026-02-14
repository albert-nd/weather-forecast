import React from 'react'

export default function ErrorBox({ msg }) {
  return (
    <div className="bg-red-500/20 border border-red-500 p-4 rounded">
      ❌ {msg}
    </div>
  );
}
