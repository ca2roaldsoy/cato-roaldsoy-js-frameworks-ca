import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { ApiUrl } from "../../constants/api";
import Spinner from "../../constants/spinner";
import Title from "../../constants/title";
import { Link } from "react-router-dom";
import GameGenre from "./GameGenre";
import GamePlatform from "./GamePlatform";
import RedirectToHome from "./RedirectToHome";

function GameDetail() {
  const [detail, setDetail] = useState([]);
  const [loading, setLoading] = useState(true);
  const [timer, setTimer] = useState(4);

  const { id } = useParams();
  const gameUrl = ApiUrl + "/" + id;

  // Fetch game details
  useEffect(() => {
    fetch(gameUrl)
      .then(response => response.json())
      .then(json => setDetail(json))
      .catch(err => console.log(err))
      .finally(() => setLoading(false));
  }, [gameUrl]);

  // Loading
  if (loading) {
    return <Spinner />;
  }

  // Error message if no games matches id
  if (detail.website === undefined) {
    return <RedirectToHome timer={timer} setTimer={setTimer} />;
  }

  return (
    <>
      <Title title={detail.name} role="heading" />
      <img
        src={detail.background_image}
        alt={detail.name}
        className="detailImg col-lg-10"
      />
      <p>{detail.description_raw}</p>

      <Link to={detail.website}>{detail.website}</Link>

      <GameGenre genres={detail.genres} />
      <GamePlatform platforms={detail.platforms} />
    </>
  );
}

export default GameDetail;
