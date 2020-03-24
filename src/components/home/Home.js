import React, { useState, useEffect } from "react";
import { ApiUrl } from "../../constants/api";
import Search from "../search/Search";
import HomeComp from "../../components/home/HomeComp";
import CardDeck from "react-bootstrap/CardDeck";

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
      <CardDeck>
        {filterGames.map(game => {
          const { id, name, background_image, rating, released } = game;

          return (
            <HomeComp
              key={id}
              id={id}
              name={name}
              image={background_image}
              rating={rating}
              release={released}
            />
          );
        })}
      </CardDeck>
    </>
  );
}

export default Home;
