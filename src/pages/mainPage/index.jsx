import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllThunk } from "../../store/modules/laundries/thunk";
import Header from "../../components/header";
import LaundryCard from "../../components/laudryCard";

const MainPage = () => {
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
      <div>address here</div>

      {laundries.map((laundry) => {
        console.log(laundry);

        return (
          <LaundryCard
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
    </div>
  );
};
export default MainPage;
