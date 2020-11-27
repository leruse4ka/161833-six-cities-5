import React from "react";
import {Link} from "react-router-dom";
import {AuthorizationStatus} from "../../const";
import PropTypes from "prop-types";

const HeaderContent = ({authorizationStatus, loginData}) => {
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
                {authorizationStatus === AuthorizationStatus.NO_AUTH
                  ? <Link className="header__nav-link header__nav-link--profile" to={`/login`}>
                    <div className="header__avatar-wrapper user__avatar-wrapper">
                    </div>
                    <span className="header__login">Sign in</span>
                  </Link>
                  : <Link className="header__nav-link header__nav-link--profile" to={`/favorites`}>
                    <div className="header__avatar-wrapper user__avatar-wrapper" style={{backgroundImage: `url(${loginData.avatar})`}}>
                    </div>
                    <span className="header__user-name user__name">{loginData.name}</span>
                  </Link>}

              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>

  );
};

HeaderContent.propTypes = {
  authorizationStatus: PropTypes.string.isRequired,
  loginData: PropTypes.shape({
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  }).isRequired,
};

export default HeaderContent;
