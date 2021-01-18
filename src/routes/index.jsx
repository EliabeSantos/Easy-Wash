import { Switch, Route } from "react-router-dom";
import Landing from "../pages/landing";
import Login from "../pages/login";
import CheckoutServices from "../pages/checkoutServices";
import ServiceList from "../pages/servicesList";
import Register from "../pages/register";
import RegisterType from "../pages/registerType";
const Routes = () => {
  return (
    <>
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/checkout" component={CheckoutServices} />
        <Route exact path="/services/:id" component={ServiceList} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/registertype" component={RegisterType} />
        {/*
        <Route exact path="/profile/client" component={} />
        <Route exact path="/profile/client/edit" component={} />
        <Route exact path="/profile/company" component={} />
        <Route exact path="/profile/company/edit-service" component={} />
        <Route exact path="/main-page" component={} />
        */}
      </Switch>
    </>
  );
};

export default Routes;
