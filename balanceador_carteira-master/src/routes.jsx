import { BrowserRouter, Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import routePatchEnum from "./enums/routePatchEnum";
import Home from "./pages/Home";
import PortifolioMeta from "./pages/PortifolioMeta";

const Routes = () => {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path={routePatchEnum.HOME} component={Home} />
        <Route
          exact
          path={routePatchEnum.PORTIFOLIO_META}
          component={PortifolioMeta}
        />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
