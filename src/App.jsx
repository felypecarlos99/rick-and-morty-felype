import React from "react";
import "./App.css";

export default function App() {
  return (
    <div className="app">
      <h1>Personagem Rick and Morty</h1>
      <div className="card">
        <img
          src="https://rickandmortyapi.com/api/character/avatar/1.jpeg"
          alt="Rick Sanchez"
        />
        <h2>Rick Sanchez</h2>
        <p><strong>Status:</strong> Alive</p>
        <p><strong>Espécie:</strong> Human</p>
        <p><strong>Gênero:</strong> Male</p>
        <p><strong>Último episódio:</strong> Rickmurai Jack</p>
      </div>
    </div>
  );
}
