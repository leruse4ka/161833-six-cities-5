import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app";
import {offers} from "./mocks/offers";

const Settings = {
  COUNT_RENT: 312
};

ReactDOM.render(
    <App
      countRent={Settings.COUNT_RENT}
      offers={offers}
    />,
    document.querySelector(`#root`)
);
