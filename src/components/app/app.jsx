import React from "react";
import MainPage from "../pages/main-page/main-page";
import {Switch, Route, Router as BrowserRouter, Redirect} from "react-router-dom";
import AuthScreenPage from "../pages/auth-screen-page/auth-screen-page";
import FavoritesPage from "../pages/favorites-page/favorites-page";
import PropertyPage from "../pages/property-page/property-page";
import PrivateRoute from "../private-route/private-route";
import browserHistory from "../../browser-history";
import {AuthorizationStatus} from "../../const";
import PropTypes from "prop-types";
import {connect} from "react-redux";


const App = ({authorizationStatus}) => {
  return (
    <BrowserRouter history={browserHistory}>
      <Switch>
        <Route exact path="/" component={MainPage} />
        <Route exact
          path="/login"
          render={() => authorizationStatus === AuthorizationStatus.NO_AUTH ? <AuthScreenPage /> : <Redirect to="/" />}
        />
        <PrivateRoute exact path={`/favorites`} render={() => <FavoritesPage />} />
        <Route path="/offer/:id" exact component={PropertyPage} />
      </Switch>
    </BrowserRouter>
  );
};

App.propTypes = {
  authorizationStatus: PropTypes.string.isRequired,
};

const mapStateToProps = ({USER}) => ({
  authorizationStatus: USER.authorizationStatus,
});

export default connect(mapStateToProps)(App);
