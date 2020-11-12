import React from "react";
import mainPageOffersProp from "../main-page/main-page-offers.prop";
import FavoriteList from "../../favorite-list/favorite-list";
import {connect} from "react-redux";
import Header from "../../header/header";
import Footer from "../../footer/footer";

const FavoritesPage = (props) => {
  const {offers} = props;

  return (
    <div className="page">
      <Header />
      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          <section className="favorites">
            <h1 className="favorites__title">Saved listing</h1>
            <ul className="favorites__list">
              <FavoriteList offers={offers} />
            </ul>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

FavoritesPage.propTypes = {
  offers: mainPageOffersProp,
};

const mapStateToProps = (state) => ({
  offers: state.offers.filter((item) => item.isFavorite),
});

export default connect(mapStateToProps)(FavoritesPage);
