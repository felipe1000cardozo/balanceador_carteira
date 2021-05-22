import { BrowserRouter, Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import routePatchEnum from "./enums/routePatchEnum";
import Home from "./pages/Home";
import PortifolioMeta from "./pages/PortifolioMeta";
import Login from "./pages/Login";
import register from "./components/Register";

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={routePatchEnum.LOGIN} component={Login} />
        <Route exact path={routePatchEnum.REGISTER} component={register} />
        <>
          <Header />
          <Route exact path={routePatchEnum.HOME} component={Home} />
          <Route
            exact
            path={routePatchEnum.PORTIFOLIO_META}
            component={PortifolioMeta}
          />
        </>
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
