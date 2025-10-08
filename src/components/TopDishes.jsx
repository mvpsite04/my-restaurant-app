import React from 'react';

export default function TopDishes({ dishes }) {
  return (
    <div className="bg-white rounded-md p-4 shadow">
      <h3 className="font-semibold mb-3">Top-Rated Dishes</h3>
      <div className="space-y-3">
        {dishes.map(d => (
          <div key={d.id} className="flex gap-3 items-start">
            <img src={d.image_url || '/dish_placeholder.png'} alt="" className="w-16 h-12 object-cover rounded" />
            <div className="text-sm">
              <div className="font-medium">{d.name}</div>
              <div className="text-gray-600">⭐ {d.rating} · ${d.price}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
