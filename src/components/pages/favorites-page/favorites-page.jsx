import React from "react";
import mainPageOffersProp from "../main-page/main-page-offers.prop";
import FavoriteList from "../../favorite-list/favorite-list";
import {connect} from "react-redux";
import Header from "../../header/header";
import Footer from "../../footer/footer";
import FavoritesEmpty from "../../favorites-empty/favorites-empty";

const FavoritesPage = (props) => {
  const {offers} = props;

  const favoriteClass = offers.length ? `page` : `page page--favorites-empty`;
  const mainClass = offers.length ? `page__main page__main--favorites` : `page__main page__main--favorites page__main--favorites-empty`;

  return (
    <div className={favoriteClass}>
      <Header />
      <main className={mainClass}>
        <div className="page__favorites-container container">
          {offers.length ? <section className="favorites">
            <h1 className="favorites__title">Saved listing</h1>
            <ul className="favorites__list">
              <FavoriteList offers={offers}/>
            </ul>
          </section> : <FavoritesEmpty />}
        </div>
      </main>
      <Footer />
    </div>
  );
};

FavoritesPage.propTypes = {
  offers: mainPageOffersProp,
};

const mapStateToProps = ({DATA}) => ({
  offers: DATA.offersFavorite,
});

export default connect(mapStateToProps)(FavoritesPage);
