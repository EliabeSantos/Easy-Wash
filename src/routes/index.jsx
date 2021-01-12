import { Switch, Route } from "react-router-dom";
import Input from "../components/sharedInput";

const Routes = () => {
  return (
    <>
      <Switch>
        <Route exact path="/">
          <Input width="19.7rem" label="user" name="User" />
          <Input width="5rem" label="UF" name="UF" />
          <Input label="user" name="User" />
        </Route>
        {/* <Route exact path="/register" component={} />
        <Route exact path="/login" component={} />
        <Route exact path="/profile/client" component={} />
        <Route exact path="/profile/client/edit" component={}/>
        <Route exact path="/profile/company" component={} />
        <Route exact path="/profile/company/edit-service" component={}/>
        <Route exact path="/main-page" component={} />
        <Route exact path="/services/:id" component={} />
        <Route exact path="/services/checkout" component={} /> */}
      </Switch>
    </>
  );
};

export default Routes;
