import React from "react";
import "./Home.css"; // We'll create this later

const Home = () => {
  return (
    <div className="home-container">
      {/* Hero Section */}
      <section className="hero-banner">
        <div className="hero-content">
          <h1>Welcome to Mova 🎬</h1>
          <p>Search, Stream, and Save your favorite Movies & TV Shows</p>
          <button className="cta-button">Start Exploring</button>
        </div>
      </section>

      {/* Trending Section */}
      <section className="section trending">
        <h2>🔥 Trending Now</h2>
        <div className="card-row">
          {/* Movie Cards will go here later */}
        </div>
      </section>

      {/* Continue Watching */}
      <section className="section continue-watching">
        <h2>⏳ Continue Watching</h2>
        <div className="card-row">
          {/* Continue Watching Cards */}
        </div>
      </section>
    </div>
  );
};

export default Home;
