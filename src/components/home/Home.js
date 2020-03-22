import React, { useState, useEffect } from "react";
import { ApiUrl } from "../../constants/api";

function Home() {
  const [games, setGames] = useState([]);

  useEffect(() => {
    fetch(ApiUrl)
      .then(response => response.json())
      .then(data => {
        setGames(data.results);
      })
      .catch(err => console.log(err));
  }, []);

  return (
    <>
      {games.map(game => (
        <li key={game.id}>{game.name}</li>
      ))}
    </>
  );
}

export default Home;
