import React from "react";
import "./Home.css";

const Home = () => {
  return (
    <div className="container">
      <h1>Home Page</h1>

      <button
        id="characters-button"
        className="text-center rounded-lg h-40 w-60 shadow-lg"
      >
        <h1 className="text-3xl text-gray-50 sm:truncate hero-title">
          Characters
        </h1>
      </button>
    </div>
  );
};

export default Home;
