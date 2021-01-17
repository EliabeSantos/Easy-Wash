import Header from "../../components/header";
import { Container } from "./style";
import map from "./map.svg";
import jwt_decode from "jwt-decode";
import axios from "axios";
import { useEffect, useState } from "react";
import CartCard from "../../components/cartCard";
import DefaultButton from "../../components/sharedButton";
import { useHistory } from "react-router-dom";

const CheckoutServices = () => {
  const history = useHistory();
  const [addressInfo, setAddressInfo] = useState({});
  const [paymentScreen, setPaymentScreen] = useState(false);
  const cart = JSON.parse(localStorage.getItem("cart"));
  const token = localStorage.getItem("authToken");
  const decoded = jwt_decode(token);
  const id = decoded.sub;
  //   console.log(id);

  const getDatasFromUser = async () => {
    try {
      const response = await axios.get(
        `https://easy-wash-server.herokuapp.com/users/${id}`
      );
      setAddressInfo(response.data.address);
    } catch (error) {
      console.error(error);
    }
  };

  console.log(cart);

  useEffect(getDatasFromUser, []);

  const { street, number, district, city, UF } = addressInfo;

  return (
    <Container>
      <Header />
      <div className="gridContainer">
        <div className="address">
          <div className="imgContainer">
            <img src={map} alt="Map" />
          </div>
          <div className="addressInfo">
            <h3 className="infoTittle">Endereço de coleta:</h3>
            <p>
              R. {street}, {number}
            </p>
            <p>
              {district} - {city}, {UF}
            </p>
          </div>
        </div>
        <div className="productsContainer">
          <div className="productTitle">Meus produtos</div>
          <div className="productsList">
            {cart ? (
              cart.products.map((product, index) => (
                <CartCard
                  key={index}
                  title={product.title}
                  value={product.price}
                />
              ))
            ) : (
              <div className="emptyCart">
                <span>Carrinho está vazio</span>
                <DefaultButton name="Voltar" _func={() => history.goBack()} />
              </div>
            )}
          </div>
        </div>
        <div className="footer">
          <span className="total">
            <span>Total: </span>
            <span>
              {Intl.NumberFormat("pt-BR", {
                style: "currency",
                currency: "BRL",
              }).format(cart ? cart.total : 0)}
            </span>
          </span>
          {cart && (
            <DefaultButton
              name="Finalizar Pagamento"
              width="15rem"
              height="3.5rem"
              _func={() => setPaymentScreen(true)}
            />
          )}
        </div>
      </div>
    </Container>
  );
};

export default CheckoutServices;
