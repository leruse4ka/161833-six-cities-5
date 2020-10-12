import React from "react";
import PropTypes from "prop-types";
import MainPage from "../pages/main-page/main-page";
import {BrowserRouter, Switch, Route} from "react-router-dom";
import AuthScreenPage from "../pages/auth-screen-page/auth-screen-page";
import FavoritesPage from "../pages/favorites-page/favorites-page";
import PropertyPage from "../pages/property-page/property-page";

const App = (props) => {
  const {countRent} = props;

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" render={() => <MainPage countRent={countRent} />} />
        <Route path="/login" exact component={AuthScreenPage} />
        <Route path="/favorites" exact component={FavoritesPage} />
        <Route path="/offer/:id" exact component={PropertyPage} />
      </Switch>
    </BrowserRouter>
  );
};

App.propTypes = {
  countRent: PropTypes.number.isRequired,
};

export default App;
