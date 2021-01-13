import { getDistance } from "geolib";

import { Container } from "./style";
import { useHistory } from "react-router-dom";
import { AiFillStar } from "react-icons/ai";
import { useState, useEffect } from "react";

const LaundryCard = ({
  name,
  score,
  address,
  schedule,
  deliveryFee,
  src,
  id,
  userCoordinates,
}) => {
  const history = useHistory();
  const [distance, setDistance] = useState("Distância indisponível");

  const getCoordDistance = () => {
    //const coord1 = { latitude: -25.403332, longitude: -49.258488 }; Para uso de testes
    //const coord2 = { latitude: -25.415534, longitude: -49.255582 };
    try {
      let coorddDistance = getDistance(address.coordinates, userCoordinates);
      coorddDistance = Math.round(coorddDistance / 100);
      coorddDistance = (coorddDistance / 10).toFixed(1);
      return coorddDistance;
    } catch (err) {
      console.log(
        "coordenadas não foram enviadas, impossível realiar o cálculo de distância"
      );
    }
  };

  useEffect(() => {
    setDistance(getCoordDistance());
  }, []);

  const handleGoToLaundry = () => {
    history.push(`/laundry/${id}`);
  };
  return (
    <Container
      src={src}
      className="laundryCard_container"
      onClick={handleGoToLaundry}
    >
      <div className="laundryCard_image_container">
        <div className="laundryCard_image"></div>
      </div>

      <div className="laundryCard_content">
        <div className="laundryCard_content_title">{name}</div>
        <div className="laundryCard_content_score">
          <span className="score">
            {score}
            <AiFillStar />
          </span>
          <span>{distance ? `${distance}KM` : "Distância indisponível"}</span>
        </div>
        <div className="laundryCard_content_price">
          <span>{schedule}</span>
          <span>{deliveryFee}</span>
        </div>
      </div>
    </Container>
  );
};

export default LaundryCard;
