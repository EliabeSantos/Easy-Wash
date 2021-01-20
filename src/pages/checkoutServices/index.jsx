import Header from "../../components/header";
import { Container } from "./style";
import map from "./map.svg";
import jwt_decode from "jwt-decode";
import axios from "axios";
import { useEffect, useState } from "react";
import CartCard from "../../components/cartCard";
import DefaultButton from "../../components/sharedButton";
import { useHistory } from "react-router-dom";
import { useOpen } from "../../context/openModal";
import CheckoutPayment from "../checkoutPayment";
import { BiMap } from "react-icons/bi";

const CheckoutServices = () => {
  const { open, setOpen } = useOpen();
  const history = useHistory();
  const [addressInfo, setAddressInfo] = useState({});
  const cart = JSON.parse(localStorage.getItem("cart"));
  const token = localStorage.getItem("authToken");
  const decoded = jwt_decode(token);
  const id = decoded.sub;
  // console.log({ id });

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

  useEffect(() => getDatasFromUser(), [id]);

  const { street, number, district, city, UF } = addressInfo;

  return (
    <>
      <Header />
      <Container>
        <div className="gridContainer">
          <div className="address">
            <div className="addressInfo">
              <h3 className="infoTittle">Endereço de coleta:</h3>

              {street ? (
                <h2>
                  <BiMap /> &nbsp;
                  {`${street}, ${number} - ${district}, ${city}, ${UF}`}
                </h2>
              ) : (
                <h1>...</h1>
              )}
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
                    id={product.id}
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
                _func={() => setOpen(true)}
              />
            )}
          </div>
        </div>
        {open && <CheckoutPayment />}
      </Container>
    </>
  );
};

export default CheckoutServices;
