import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

export default function MapView({ restaurants, userLocation }) {
  const center = userLocation ? [userLocation.lat, userLocation.lng] : (restaurants[0] ? [restaurants[0].lat, restaurants[0].lng] : [0,0]);
  return (
    <MapContainer center={center} zoom={13} style={{ height: '100%', width: '100%' }}>
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      {userLocation && <Marker position={[userLocation.lat, userLocation.lng]}><Popup>You are here</Popup></Marker>}
      {restaurants.map(r => r.lat && r.lng && (
        <Marker key={r.id} position={[r.lat, r.lng]}>
          <Popup>
            <div className="text-sm">
              <strong>{r.name}</strong><br />
              {r.cuisine}<br />
              <a href={r.website} target="_blank" rel="noreferrer">Visit</a>
            </div>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}
