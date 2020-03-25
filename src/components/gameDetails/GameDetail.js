import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { ApiUrl } from "../../constants/api";
import Spinner from "react-bootstrap/Spinner";
import Title from "../../constants/title";
import { Link } from "react-router-dom";

function GameDetail() {
  const [detail, setDetail] = useState([]);
  const [loading, setLoading] = useState(true);

  const { id } = useParams();
  const gameUrl = ApiUrl + "/" + id;

  useEffect(() => {
    fetch(gameUrl)
      .then(response => response.json())
      .then(json => setDetail(json))
      .catch(err => console.log(err))
      .finally(() => setLoading(false));
  }, [gameUrl]);

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
      <Title title={detail.name} />
      <img
        src={detail.background_image}
        alt={detail.name}
        className="detailImg"
      />
      <p>{detail.description_raw}</p>
      <Link to={detail.website}>{detail.website}</Link>
    </>
  );
}

export default GameDetail;
