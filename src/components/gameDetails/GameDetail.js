import React, { useState, useEffect } from "react";
import { useParams, Redirect } from "react-router-dom";
import { ApiUrl } from "../../constants/api";
import Spinner from "react-bootstrap/Spinner";
import Title from "../../constants/title";
import { Link } from "react-router-dom";
import GameGenre from "./GameGenre";
import GamePlatform from "./GamePlatform";
import Home from "../home/Home";

function GameDetail() {
  const [detail, setDetail] = useState([]);
  const [loading, setLoading] = useState(true);

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
    return (
      <>
        <Spinner animation="border" variant="primary" role="status" className="spinner" />
        <span className="sr-only">Loading...</span> {/* for screen readers */}
      </>
    );
  }

  if (detail.website === undefined) {
    setTimeout = () => {
      
    }
    return <Redirect to="/" exact />
  }
  return (
    <>
      <Title title={detail.name} />
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
