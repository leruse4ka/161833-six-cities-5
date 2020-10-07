import React from "react";
import PropTypes from "prop-types";
import Main from "../main/main";

const App = (props) => {
  const {countRent} = props;

  return (
    <Main countRent={countRent}/>
  );
};

App.propTypes = {
  countRent: PropTypes.number.isRequired,
};

export default App;
