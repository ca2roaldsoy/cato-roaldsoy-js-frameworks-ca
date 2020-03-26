import React, { useState, useEffect } from "react";
import { ApiUrl } from "../../constants/api";
import Search from "./Search";
import HomeComp from "./HomeComp";
import CardDeck from "react-bootstrap/CardDeck";
import Spinner from "react-bootstrap/Spinner";
import Title from "../../constants/title";

function Home() {
  const [games, setGames] = useState([]);
  const [filterGames, setFilterGames] = useState([]);
  const [loading, setLoading] = useState(true);

  // fetching game api
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

  // filter search input
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

  // loading
  if (loading) {
    return (
      <>
        <Spinner animation="border" variant="primary" role="status" />
        <span className="sr-only">Loading...</span> {/* for screen readers */}
      </>
    );
  }

  function searchResult() {
    if (filterGames.length === 0) {
      return (
        <>
          <h4>Sorry. No result :( </h4>
        </>
      );
    }
    // Map over games displayed
    return filterGames.map(game => {
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
    });
  }

  return (
    <>
      <Title title="Games" />
      <Search handleInput={handleInput} />
      <CardDeck>{searchResult()}</CardDeck>
    </>
  );
}

export default Home;
