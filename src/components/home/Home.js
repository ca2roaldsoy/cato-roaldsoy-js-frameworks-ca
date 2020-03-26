import React, { useState, useEffect } from "react";
import { ApiUrl } from "../../constants/api";
import Search from "./Search";
import HomeComp from "./HomeComp";
import CardDeck from "react-bootstrap/CardDeck";
import Spinner from "react-bootstrap/Spinner";
import Title from "../../constants/title";
import Button from "react-bootstrap/Button";

function Home(e) {
  const [games, setGames] = useState([]);
  const [filterGames, setFilterGames] = useState([]);
  const [loading, setLoading] = useState(true);
  const [favourite, setFavourite] = useState(true);

  useEffect(() => {
    fetch(ApiUrl)
      .then(response => response.json())
      .then(data => {
        setGames(data.results);
        setFilterGames(data.results);
      })
      .catch(err => console.log(err))
      .finally(() => setLoading(false));
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

  if (loading) {
    return (
      <>
        <Spinner animation="border" variant="primary" role="status" />
        <span className="sr-only">Loading...</span> {/* for screen readers */}
      </>
    );
  }

  return (
    <>
      <Title title="Games" />
      <Search handleInput={handleInput} />
      <CardDeck>
        {filterGames.map(games => {
          const { id, name, background_image, rating, released } = games;

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
