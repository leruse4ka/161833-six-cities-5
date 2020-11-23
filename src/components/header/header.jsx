import React from "react";
import {Link} from "react-router-dom";
import {AuthorizationStatus} from "../../const";
import PropTypes from "prop-types";
import {connect} from "react-redux";

const Header = ({authorizationStatus}) => {

  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <Link className="header__logo-link" to="/">
              <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41" />
            </Link>
          </div>
          <nav className="header__nav">
            <ul className="header__nav-list">
              <li className="header__nav-item user">
                <Link className="header__nav-link header__nav-link--profile" to={authorizationStatus === AuthorizationStatus.NO_AUTH ? `/login` : `/favorites`}>
                  <div className="header__avatar-wrapper user__avatar-wrapper">
                  </div>
                  { authorizationStatus === AuthorizationStatus.NO_AUTH
                    ? <span className="header__login">Sign in</span>
                    : <span className="header__user-name user__name">Oliver.conner@gmail.com</span>}
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

Header.propTypes = {
  authorizationStatus: PropTypes.string.isRequired,
};

const mapStateToProps = ({USER}) => ({
  authorizationStatus: USER.authorizationStatus
});


export default connect(mapStateToProps)(Header);
