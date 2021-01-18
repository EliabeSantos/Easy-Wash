import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllThunk } from "../../store/modules/laundries/thunk";
import Header from "../../components/header";
import LaundryCard from "../../components/laudryCard";
import { MainContainer, LaundryContainer } from "./style";
import { Link } from "react-router-dom";
import { BiMap } from "react-icons/bi";
import { getUserThunk } from "../../store/modules/currentUser/thunk";
const MainPage = () => {
  const dispatch = useDispatch();

  const [userCoordinates, setUserCoordinates] = useState({});

  dispatch(getAllThunk());
  dispatch(getUserThunk());

  const user = useSelector((state) => {
    return state.user;
  });
  const [logged, setLogged] = useState(
    JSON.stringify(user) === "{}" ? false : true
  );

  const laundries = useSelector((state) => {
    return state.laundries;
  });

  useEffect(() => {
    setLogged(JSON.stringify(user) === "{}" ? false : true);
    navigator.geolocation.getCurrentPosition((position) =>
      setUserCoordinates({
        latitude: position.coords.latitude,
        longitude: position.coords.longitude,
      })
    );
  }, [user, laundries]);
  return (
    <div>
      <Header />
      <MainContainer>
        <div className="addressContainer">
          {logged ? (
            <p>
              <BiMap /> &nbsp;
              {`${user.address.street}, ${user.address.number} - ${user.address.district}, ${user.address.city}`}
            </p>
          ) : (
            <p>
              faça o {<Link to="/login">login</Link>} para poder adicionar um
              endereço de coleta!
            </p>
          )}
        </div>
        <LaundryContainer>
          {laundries.map((laundry, index) => {
            return (
              <LaundryCard
                key={index}
                name={laundry.company}
                score={laundry.score}
                address={laundry.address}
                schedule={laundry.schedule}
                deliveryFee={laundry.deliveryfee}
                src={`https://picsum.photos/200/3${parseInt(laundry.id) + 10}`}
                id={laundry.id}
                userCoordinates={userCoordinates}
              />
            );
          })}
        </LaundryContainer>
      </MainContainer>
    </div>
  );
};
export default MainPage;
