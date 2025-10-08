import React from 'react';

export default function RestaurantCard({ r }) {
  return (
    <div className="bg-white rounded-md p-4 shadow">
      <div className="flex items-center gap-3 mb-3">
        <img src={r.logo_url || '/placeholder.png'} alt="" className="w-16 h-16 object-cover rounded" />
        <div>
          <a className="font-bold text-lg" href={r.website} target="_blank" rel="noreferrer">{r.name}</a>
          <div className="text-sm text-gray-600">{r.cuisine} · {'$'.repeat(r.price_range || 1)}</div>
        </div>
      </div>
      <div className="flex items-center justify-between text-sm text-gray-700">
        <div>⭐ {r.rating || '—'} ({r.reviews_count || 0})</div>
        <a className="text-blue-600" href={r.website} target="_blank" rel="noreferrer">Visit website</a>
      </div>
    </div>
  );
}
