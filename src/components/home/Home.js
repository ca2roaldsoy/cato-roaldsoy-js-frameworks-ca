import React, { useState, useEffect } from "react";
import { ApiUrl } from "../../constants/api";
import Search from "./Search";

function Home() {
  const [games, setGames] = useState([]);
  const [filterGames, setFilterGames] = useState([]);

  useEffect(() => {
    fetch(ApiUrl)
      .then(response => response.json())
      .then(data => {
        setGames(data.results);
        setFilterGames(data.results);
      })
      .catch(err => console.log(err));
  }, []);

  const handleInput = e => {
    const inputValue = e.target.value.toLowerCase();
    const filterArr = games.filter(function(game) {
      if (game.name.toLowerCase().indexOf(inputValue) !== -1) {
        return true;
      } else {
        return false;
      }
    });

    setFilterGames(filterArr);
  };

  return (
    <>
      <Search handleInput={handleInput} />
      {filterGames.map(game => (
        <li key={game.id}>{game.name}</li>
      ))}
    </>
  );
}

export default Home;
