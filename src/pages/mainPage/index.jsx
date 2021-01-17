import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllThunk } from "../../store/modules/laundries/thunk";
import Header from "../../components/header";
import LaundryCard from "../../components/laudryCard";
import { MainContainer, LaundryContainer } from "./style";

const MainPage = () => {
  const [logged, setLogged] = useState(false);
  const [user, setUser] = useState({});
  const [userCoordinates, setUserCoordinates] = useState({});
  const dispatch = useDispatch();

  dispatch(getAllThunk());

  const laundries = useSelector((state) => {
    return state.laundries;
  });

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) =>
      setUserCoordinates({
        latitude: position.coords.latitude,
        longitude: position.coords.longitude,
      })
    );
  }, []);
  return (
    <div>
      <Header />
      <MainContainer>
        {logged ? (
          <p>{`${user.address.street}, ${user.address.number} - ${user.address.district}, ${user.address.city}`}</p>
        ) : (
          `faça o login para poder adicionar um endereço de coleta! `
        )}
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
