import axios from "axios";
import jwt_decode from "jwt-decode";

import { getUser } from "./actions";

export const getAllThunk = () => async (dispatch, _) => {
  try {
    const res = await axios.get("https://easy-wash-server.herokuapp.com/users");
    const users = await res.data;
    const token = localStorage.getItem("authToken");
    const decoded = jwt_decode(token);
    const userId = decoded.sub;
    const loggedUser = users.filter((user) => {
      return user.id === userId;
    });
    dispatch(getUser(loggedUser));
  } catch (err) {
    console.log(err);
    dispatch(getUser({}));
  }
};
