import React from "react";
import MainPage from "../pages/main-page/main-page";
import {BrowserRouter, Switch, Route} from "react-router-dom";
import AuthScreenPage from "../pages/auth-screen-page/auth-screen-page";
import FavoritesPage from "../pages/favorites-page/favorites-page";
import PropertyPage from "../pages/property-page/property-page";

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={MainPage} />
        <Route path="/login" exact component={AuthScreenPage} />
        <Route path="/favorites" exact component={FavoritesPage} />
        <Route path="/offer/:id" exact component={PropertyPage} />
      </Switch>
    </BrowserRouter>
  );
};
App.propTypes = {};

export default App;
