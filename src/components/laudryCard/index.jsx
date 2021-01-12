import { Container } from "./style";
import { useHistory } from "react-router-dom";
import { AiFillStar } from "react-icons/ai";
const LaundryCard = ({
  name,
  score,
  distance,
  schedule,
  deliveryFee,
  src,
  id,
}) => {
  const history = useHistory();
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
          <span>{distance}</span>
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
