import { Switch, Route } from "react-router-dom";
import Landing from "../pages/landing";
import Login from "../pages/login";
import CheckoutServices from "../pages/checkoutServices";
import ServiceList from "../pages/servicesList";
import Register from "../pages/register";
import MainPage from "../pages/mainPage";
import RegisterType from "../pages/registerType";
import ClientProfile from "../pages/profile";
import EditServices from "../pages/editServices";

const Routes = () => {
  return (
    <>
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/checkout" component={CheckoutServices} />
        <Route exact path="/services/:id" component={ServiceList} />
        <Route exact path="/register/:type" component={Register} />
        <Route exact path="/main-page" component={MainPage} />
        <Route exact path="/registerType" component={RegisterType} />
        <Route exact path="/profile/client/" component={ClientProfile} />
        <Route exact path="/profile/company/" component={EditServices} />
        {/* <Route exact path="/profile/:type/"></Route> */}Z
      </Switch>
    </>
  );
};

export default Routes;
