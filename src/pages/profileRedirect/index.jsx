import Header from "../../components/header";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect } from "react";
const ProfileRedirect = () => {
  const history = useHistory();
  const user = useSelector((state) => {
    return state.user;
  });
  const redirect = () => {
    if (user.type === "PJ") {
      history.push("/profile/company");
      return;
    }
    if (user.type === "PF") {
      history.push("/profile/client");
      return;
    }
    history.push("/login");
  };
  useEffect(() => {
    redirect();
  }, []);
  return <Header />;
};

export default ProfileRedirect;
