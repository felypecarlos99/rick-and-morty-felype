import React, { useState, useEffect } from "react";
import "./App.css";

export default function App() {
  const [character, setCharacter] = useState(null);
  const [count, setCount] = useState(825);

  const soma = () => {
    if (count + 1 <= 826) {
      setCount(count + 1);
    } else {
      setCount(1);
    }
  };

  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character/${count}`)
      .then((response) => response.json())
      .then((data) => {
        setCharacter(data); 
      })
      .catch((error) => console.log('error'));
  }, [count]);

  return (
    <div className="app">
      <h1>Personagem Rick and Morty</h1>

      {character ? (
        <div className="card">
          <img src={character.image} alt={character.name} />
          <h2>{character.name}</h2>
          <p><strong>Status:</strong> {character.status}</p>
          <p><strong>Espécie:</strong> {character.species}</p>
          <p><strong>Gênero:</strong> {character.gender}</p>
          <p><strong>Último episódio:</strong> {character.episode.length > 0 ? character.episode[character.episode.length - 1] : 'N/A'}</p>
        </div>
      ) : (
        <p>Carregando personagem...</p>
      )}

      <button onClick={soma}>Trocar de Usuário</button>
    </div>
  );
}