import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app";

const Settings = {
  COUNT_RENT: 312
};

ReactDOM.render(
    <App
      countRent={Settings.COUNT_RENT}
    />,
    document.querySelector(`#root`)
);
