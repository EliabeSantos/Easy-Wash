import { Switch, Route } from "react-router-dom";
import Landing from "../pages/landing";
import Login from "../pages/login";
import CheckoutServices from "../pages/checkoutServices";
import ServiceList from "../pages/servicesList";
import Register from "../pages/register";
import  RegisterType from "../pages/registerType";
const Routes = () => {
  return (
    <>
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/checkout" component={CheckoutServices} />
        <Route exact path="/services/:id" component={ServiceList} />
<<<<<<< HEAD
        <Route exact path="/register/:type" component={Register} />
=======
        <Route exact path="/register" component={Register} />
        <Route exact path="/registertype" component={RegisterType} />
>>>>>>> 6af794c6c38906abd84fb01a6e96a83e6f62676e
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
