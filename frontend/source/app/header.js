import React from "react";
import PropTypes from "prop-types";

import stylesheet from "../styles/main.scss";

const Header = ({ children }) => (
  <h1 className={stylesheet.header}>
    { children }
  </h1>
);

Header.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Header;
