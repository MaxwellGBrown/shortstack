import React from "react";
import { connect } from "react-redux";

import stylesheet from "../styles/main.scss";

const App = () => (
  <div>
    <h1 className={stylesheet.header}>
      Shortstack
    </h1>
  </div>
);

export { App };

export default connect(null, null)(App);
