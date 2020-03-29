import React, { useState, useEffect } from "react";
import { ApiUrl } from "../../constants/api";
import Search from "./Search";
import HomeComp from "./HomeComp";
import CardDeck from "react-bootstrap/CardDeck";
import Spinner from "../../constants/spinner";
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
    return <Spinner />;
  }

  function searchResult() {
    if (filterGames.length === 0) {
      return (
        <section className="errorMsg">
          <h4>Sorry. No result :( </h4>
          <p className="tryAgain">Please try another search :)</p>
        </section>
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
      <Title title="Games" role="heading" />
      <Search handleInput={handleInput} role="search" />
      <CardDeck>{searchResult()}</CardDeck>
    </>
  );
}

export default Home;
