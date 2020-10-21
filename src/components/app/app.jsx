import React from "react";
import PropTypes from "prop-types";
import MainPage from "../pages/main-page/main-page";
import {BrowserRouter, Switch, Route} from "react-router-dom";
import AuthScreenPage from "../pages/auth-screen-page/auth-screen-page";
import FavoritesPage from "../pages/favorites-page/favorites-page";
import PropertyPage from "../pages/property-page/property-page";
import mainPageOffersProp from "../pages/main-page/main-page-offers.prop";

const App = (props) => {
  const {countRent, offers} = props;
  const favoriteOffers = offers.filter((item) => item.isFavorite);

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" render={() => <MainPage countRent={countRent} offers={offers}/>} />
        <Route path="/login" exact component={AuthScreenPage} />
        <Route path="/favorites" exact render={() => <FavoritesPage offers={favoriteOffers} />} />
        <Route path="/offer/:id" exact render={() => <PropertyPage offers={offers} />} />
      </Switch>
    </BrowserRouter>
  );
};
App.propTypes = {
  countRent: PropTypes.number.isRequired,
  offers: mainPageOffersProp,
};

export default App;