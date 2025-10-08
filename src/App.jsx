import './App.css';

function App() {
  const restaurants = [
    { name: "Aroma Cafe", rating: 4.5, price: "$$", link: "https://spicevilla.com" },
    { name: "Burger Haven", rating: 4.2, price: "$", link: "https://burgerhaven.com" },
    { name: "Pasta Palace", rating: 4.7, price: "$$$", link: "https://pastapalace.com" },
  ];

  return (
    <div style={{ textAlign: "center", fontFamily: "Arial" }}>
      <h1>🍽️ Food Hub</h1>
      <p>Find the best restaurants near you — all in one place!</p>

      <div style={{
        display: "flex",
        justifyContent: "center",
        gap: "20px",
        flexWrap: "wrap",
        marginTop: "30px"
      }}>
        {restaurants.map((r) => (
          <div key={r.name} style={{
            border: "1px solid #ccc",
            borderRadius: "10px",
            padding: "20px",
            width: "200px",
            boxShadow: "0px 4px 8px rgba(0,0,0,0.1)"
          }}>
            <h3>{r.name}</h3>
            <p>⭐ Rating: {r.rating}</p>
            <p>💲 Price: {r.price}</p>
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
