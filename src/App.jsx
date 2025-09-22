import React, { useState, useEffect } from "react";
import "./App.css";

export default function App() {
  const [character, setCharacter] = useState(null);
  const [id, setId] = useState(1);


  const fetchCharacter = () => {
    fetch(`https://rickandmortyapi.com/api/character/${id}`)
      .then(res => res.json())
      .then(data => {
 
        const lastEpisodeUrl = data.episode[data.episode.length - 1];
        fetch(lastEpisodeUrl)
          .then(res => res.json())
          .then(episodeData => {
            setCharacter({
              name: data.name,
              status: data.status,
              species: data.species,
              gender: data.gender,
              image: data.image,
              lastEpisode: episodeData.name,
            });
          });
      })
      .catch(error => console.log("Erro ao buscar personagem:", error));
  };

  // Buscar personagem quando a página carrega ou o ID muda
  useEffect(() => {
    fetchCharacter();
  }, [id]);

  // UseEffect do professor (mantido exatamente como ele pediu)
  useEffect(() => {
    fetch('https://rickandmortyapi.com/api')
      .then(res => console.log('res'))
      .catch(error => console.log('error'))
  }, []);

  const handleNextCharacter = () => setId(prevId => prevId + 1);

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
          <p><strong>Último episódio:</strong> {character.lastEpisode}</p>
        </div>
      ) : (
        <p>Carregando personagem...</p>
      )}

      <button onClick={handleNextCharacter}>Trocar de Usuário</button>
    </div>
  );
}
