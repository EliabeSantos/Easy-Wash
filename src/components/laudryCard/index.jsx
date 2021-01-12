import { useHistory } from "react-router-dom";
const LaundryCard = ({ name, score, coordinates, schedule, frete, id }) => {
  const history = useHistory();

  const handleGoToLaundry = () => {
    history.push(`/laundry/${id}`);
  };
  return (
    <div>
      <figure>
        <div className="laundryCard_image_container"></div>
      </figure>
      <div>nome</div>
      <div>nota, distancia</div>
      <div>horario,valor</div>
    </div>
  );
};

export default LaundryCard;
