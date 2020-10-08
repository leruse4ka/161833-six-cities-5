import React from "react";
import PropTypes from "prop-types";
import Main from "../main/main";
import {BrowserRouter, Switch, Route} from "react-router-dom";
import AuthScreen from "../auth-screen/auth-screen";
import FavoritesScreen from "../favorites-screen/favorites-screen";
import PropertyScreen from "../property-screen/property-screen";

const App = (props) => {
  const {countRent} = props;

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Main countRent={countRent}/>
        </Route>
        <Route exact path="/login">
          <AuthScreen />
        </Route>
        <Route exact path="/favorites">
          <FavoritesScreen />
        </Route>
        <Route path="/offer/:id" exact component={PropertyScreen} />
      </Switch>
    </BrowserRouter>
  );
};

App.propTypes = {
  countRent: PropTypes.number.isRequired,
};

export default App;
