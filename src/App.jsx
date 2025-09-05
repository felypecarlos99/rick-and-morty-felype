import React from "react";
import "./App.css";

export default function App() {
  return (
    <div className="app">
      <h1>Personagem Rick and Morty</h1>
      <div className="card">
        <img
          src="https://rickandmortyapi.com/api/character/avatar/7.jpeg"
          alt="Abradolf Lincler"
        />
        <h2>Abradolf Lincler</h2>
        <p><strong>Status:</strong> Morto</p>
        <p><strong>Espécie:</strong> Humano Geneticamente Modificado</p>
        <p><strong>Gênero:</strong> Masculino</p>
        <p><strong>Último episódio:</strong> Rickmurai Jack</p>
      </div>
    </div>
  );
}