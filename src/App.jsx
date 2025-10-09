import React, { useState } from "react";
import "./App.css";

function App() {
  const [mood, setMood] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");

  const restaurants = [
    { name: "LIGHT RAIL", rating: 4.3, price: "$$", category: "Cocktails", link: "#" },
    { name: "COLLIER CANDY COMPANY", rating: 4.5, price: "$$", category: "Desserts", link: "#" },
    { name: "ARCHER PAPER GOODS", rating: 4.2, price: "$", category: "Gifts", link: "#" },
    { name: "BOTIWALLA", rating: 4.6, price: "$$", category: "Indian", link: "#" },
    { name: "MEZEH", rating: 4.4, price: "$$", category: "Mediterranean", link: "#" },
    { name: "THE MERCHANT", rating: 4.5, price: "$$", category: "Lifestyle", link: "#" },
    
    { name: "FONTA FLORA", rating: 4.8, price: "$$$", category: "Brewery", link: "#" },
    { name: "HONEYSUCKLE GELATO", rating: 4.6, price: "$$", category: "Dessert", link: "#" },
    { name: "PAPI QUESO", rating: 4.6, price: "$$", category: "Mexican", link: "#" },
    { name: "FELIX'S EMPANADAS", rating: 4.5, price: "$", category: "Latin American", link: "#" },
    { name: "SUAREZ BAKERY & COFFEE", rating: 4.7, price: "$$", category: "Bakery", link: "#" },
    { name: "UNDERCURRENT COFFEE", rating: 4.6, price: "$$", category: "Coffee", link: "#" },
    { name: "VILLAGE JUICE", rating: 4.4, price: "$$", category: "Healthy", link: "#" },
    { name: "MARINA'S TAPAS", rating: 4.6, price: "$$", category: "Spanish", link: "#" },
    { name: "AVA PIZZA", rating: 4.5, price: "$$", category: "Pizza", link: "#" },
    { name: "ENAT ETHIOPIAN", rating: 4.7, price: "$$", category: "Ethiopian", link: "#" },
    { name: "POPPYCOX", rating: 4.3, price: "$", category: "Casual", link: "#" },
    { name: "THE BAR", rating: 4.6, price: "$$", category: "Cocktails", link: "#" },
    { name: "BAO & BROTH", rating: 4.5, price: "$$", category: "Asian", link: "#" },
    { name: "NOBLE SMOKE", rating: 4.7, price: "$$$", category: "BBQ", link: "#" },
    { name: "PET WANTS", rating: 4.2, price: "$", category: "Pet Store", link: "#" },
    { name: "THE DUMPLING LADY", rating: 4.8, price: "$$", category: "Chinese", link: "#" },
    { name: "ZUKKU SUSHI", rating: 4.7, price: "$$$", category: "Sushi", link: "#" },
    { name: "ESO ARTISANAL PASTA", rating: 4.6, price: "$$$", category: "Italian", link: "#" },
    { name: "SCHREIBER'S ON RYE", rating: 4.4, price: "$$", category: "Deli", link: "#" },
    { name: "HARRIET'S HAMBURGERS", rating: 4.5, price: "$$", category: "Burgers", link: "#" },
  ];

  // 🌮 Define moods and what they include
  const moods = {
    all: () => true,
    asian: (r) => ["Asian", "Chinese", "Sushi", "Ethiopian", "Indian"].includes(r.category),
    italian: (r) => ["Italian", "Pizza", "Pasta"].some((cat) => r.category.includes(cat)),
    dessert: (r) => ["Dessert", "Coffee", "Bakery", "Gelato"].some((cat) => r.category.includes(cat)),
    healthy: (r) => ["Healthy", "Mediterranean"].includes(r.category),
    drinks: (r) => ["Cocktails", "Brewery"].includes(r.category),
    fastfood: (r) => ["Burgers", "Mexican", "BBQ"].includes(r.category),
  };

  // 💡 Filter restaurants
  const filteredRestaurants = restaurants.filter(
    (r) =>
      r.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (mood === "all" || moods[mood](r))
  );

  return (
    <div style={{ textAlign: "center", fontFamily: "Poppins, Arial, sans-serif", padding: "30px" }}>
      <h1>🍽️ Food Hub @ Optimist Hall</h1>
      <p>Find the perfect food for your mood!</p>

      {/* 🔍 Search Bar */}
      <input
        type="text"
        placeholder="Search restaurant..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        style={{
          padding: "10px",
          width: "250px",
          margin: "10px",
          borderRadius: "8px",
          border: "1px solid #ccc",
          outline: "none",
        }}
      />

      {/* 🍴 Mood Selector */}
      <h3>What are you craving?</h3>
      <div style={{ display: "flex", justifyContent: "center", flexWrap: "wrap", gap: "10px", marginBottom: "25px" }}>
        <button onClick={() => setMood("all")}>🍽️ All</button>
        <button onClick={() => setMood("asian")}>🍜 Asian</button>
        <button onClick={() => setMood("italian")}>🍝 Italian</button>
        <button onClick={() => setMood("dessert")}>🍰 Dessert</button>
        <button onClick={() => setMood("healthy")}>🥗 Healthy</button>
        <button onClick={() => setMood("fastfood")}>🍔 Fast Food</button>
        <button onClick={() => setMood("drinks")}>🍸 Drinks</button>
      </div>

      {/* 🍔 Restaurant Cards */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
          gap: "20px",
          marginTop: "20px",
        }}
      >
        {filteredRestaurants.map((r) => (
          <div
            key={r.name}
            style={{
              border: "1px solid #ddd",
              borderRadius: "12px",
              padding: "20px",
              width: "220px",
              boxShadow: "0px 4px 8px rgba(0,0,0,0.1)",
              background: "white",
              transition: "transform 0.2s ease-in-out",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
            onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1.0)")}
          >
            <h3>{r.name}</h3>
            <p>⭐ {r.rating}</p>
            <p>💲 {r.price}</p>
            <p>{r.category}</p>
            <a href={r.link} target="_blank" rel="noopener noreferrer">
              Visit Website
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
