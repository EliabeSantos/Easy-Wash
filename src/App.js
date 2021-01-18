import Routes from "./routes";
import { useDispatch } from "react-redux";
import { getUserThunk } from "./store/modules/currentUser/thunk";

const App = () => {
  const dispatch = useDispatch();
  dispatch(getUserThunk());

  return (
    <>
      <Routes />
    </>
  );
};

export default App;
