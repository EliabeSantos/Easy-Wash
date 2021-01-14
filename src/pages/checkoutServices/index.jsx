import Header from "../../components/header";
import { Container } from "./style";
import map from "./map.svg";
import jwt_decode from "jwt-decode";

const CheckoutServices = () => {
  const cart = JSON.parse(localStorage.getItem("cart"));
  const token = localStorage.getItem("authToken");
  const decoded = jwt_decode(token);
  console.log(decoded);
  return (
    <Container>
      <Header />
      <div className="address">
        <div className="imgContainer">
          <img src={map} alt="Map" />
        </div>
        <div className="addressInfo">
          <span className="infoTittle">Endereço de coleta:</span>
        </div>
      </div>
      <div className="productsContainer">
        <div className="productTitle">Meus produtos</div>
        <div className="productsList"></div>
      </div>
    </Container>
  );
};

export default CheckoutServices;
