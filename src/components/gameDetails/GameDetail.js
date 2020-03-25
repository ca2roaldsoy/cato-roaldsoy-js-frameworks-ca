import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { ApiUrl } from "../../constants/api";
import Spinner from "react-bootstrap/Spinner";
import Title from "../../constants/title";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";

function GameDetail() {
  const [gameDetail, setGameDetail] = useState([]);
  const [loading, setLoading] = useState(true);

  const { id } = useParams();
  const { gameUrl } = ApiUrl + id;

  useEffect(() => {
    fetch(gameUrl)
      .then(response => response.json)
      .then(data => {
        setGameDetail(data);
      })
      .catch(err => console.log(err))
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return (
      <>
        <Spinner animation="border" variant="primary" role="status" />
        <span className="sr-only">Loading...</span> {/* for screen readers */}
      </>
    );
  }

  return (
    <div>
      <Title title={gameDetail.name} />
      <img src={gameDetail.background_image} alt={gameDetail.name} />
      <p>Description:</p>
      <Button>
        <Link to={gameDetail.stores[0].url_en}>PlayStation Store</Link>
      </Button>
      <Button>
        <Link to={gameDetail.stores[1].url_en}>Xbox Store</Link>
      </Button>
    </div>
  );
}

export default GameDetail;
