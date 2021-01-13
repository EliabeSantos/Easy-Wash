import { Switch, Route } from "react-router-dom";
import Landing from "../pages/landing";
import Login from "../pages/login";

const Routes = () => {
  return (
    <>
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route exact path="/login" component={Login} />
        {/*
        <Route exact path="/register" component={} />
        <Route exact path="/profile/client" component={} />
        <Route exact path="/profile/client/edit" component={} />
        <Route exact path="/profile/company" component={} />
        <Route exact path="/profile/company/edit-service" component={} />
        <Route exact path="/main-page" component={} />
        <Route exact path="/services/:id" component={} />
        <Route exact path="/services/checkout" component={} /> 
        */}
      </Switch>
    </>
  );
};

export default Routes;
